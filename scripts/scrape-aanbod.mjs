/**
 * Scrape perceel detail pages from rentmeester.nl and download images.
 * Updates content/aanbod/[slug].md with full body text and image paths.
 *
 * Run: node scripts/scrape-aanbod.mjs
 */

import * as fs from "fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";
import * as cheerio from "cheerio";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const CONTENT_DIR = path.join(ROOT, "content", "aanbod");
const IMAGES_DIR = path.join(ROOT, "public", "images", "aanbod");

const BASE_URL = "https://www.rentmeester.nl";

// Our slug -> exact path on rentmeester.nl (when different)
const SLUG_TO_PATH = {
  "landelijk-wonen-in-de-groeve-nabij-het-zuidlaardermeer": "landelijk-wonen-in-de-groeve-nabij-het-zuidlaardermeer-2",
  "woonboerderij-met-diverse-bijgebouwen-op-perceel-van-maar-liefst-9915-m2-in-annen":
    "woonboerderij-met-diverse-bijgebouwen-op-perceel-van-maar-liefst-9-915-m2-in-annen",
};

function getDetailUrl(slug) {
  const pathSegment = SLUG_TO_PATH[slug] ?? slug;
  return `${BASE_URL}/aanbod/${pathSegment}`;
}

async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; rv:91.0) Gecko/20100101 Firefox/91.0",
      Accept: "text/html",
    },
    redirect: "follow",
  });
  if (!res.ok) return null;
  return res.text();
}

function extractContent($) {
  // Joomla / common selectors for main article content
  const selectors = [
    ".item-page",
    "article",
    "[itemprop='articleBody']",
    ".com-content-article__body",
    ".item-body",
    "#content .item-page",
    "main article",
    ".content-item",
  ];

  let $content = null;
  for (const sel of selectors) {
    $content = $(sel).first();
    if ($content.length && $content.text().trim().length > 100) break;
  }

  if (!$content?.length) {
    $content = $("body");
  }

  // Remove nav, scripts, ads
  $content.find("nav, script, style, .nav, .breadcrumb, .uk-breadcrumb, aside").remove();

  const bodyHtml = $content.html()?.trim() || "";
  const bodyText = $content.text().trim();

  return { bodyHtml, bodyText, $content };
}

const MAX_IMAGES_PER_ITEM = 15;

function extractImages($, $content) {
  const urls = new Set();
  const $scope = $content && $content.length ? $content.find("img") : $("img");
  $scope.each((_, el) => {
    let src = $(el).attr("src");
    if (!src) return;
    if (src.startsWith("//")) src = "https:" + src;
    if (src.startsWith("/")) src = BASE_URL + src;
    if (!src.startsWith("http") || /logo|icon|avatar|sprite|1x1|pixel/i.test(src)) return;
    urls.add(src);
  });
  return [...urls].slice(0, MAX_IMAGES_PER_ITEM);
}

function htmlToMarkdownLike(html) {
  if (!html) return "";
  const $ = cheerio.load(html, { decodeEntities: false });
  let out = "";
  $("p").each((_, el) => {
    const text = $(el).text().trim();
    if (text) out += text + "\n\n";
  });
  $("ul li, ol li").each((_, el) => {
    const text = $(el).text().trim();
    if (text) out += "- " + text + "\n";
  });
  if (!out.trim()) {
    out = $.text().trim().replace(/\n{3,}/g, "\n\n");
  }
  return out.trim();
}

function safeFilename(slug, index, url) {
  const ext = path.extname(new URL(url).pathname) || ".jpg";
  const base = slug.replace(/[^a-z0-9-]/gi, "-").slice(0, 50);
  return `${base}-${index}${ext}`;
}

async function downloadImage(url, filepath) {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; RentmeesterScraper/1.0)" },
    });
    if (!res.ok) return false;
    const buf = await res.arrayBuffer();
    await fs.writeFile(filepath, Buffer.from(buf));
    return true;
  } catch {
    return false;
  }
}

async function getSlugs() {
  const files = await fs.readdir(CONTENT_DIR);
  return files.filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""));
}

async function main() {
  await fs.mkdir(IMAGES_DIR, { recursive: true });

  const slugs = await getSlugs();
  console.log(`Scraping ${slugs.length} percelen...\n`);

  for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i];
    const url = getDetailUrl(slug);
    process.stdout.write(`[${i + 1}/${slugs.length}] ${slug} ... `);

    const html = await fetchHtml(url);
    if (!html) {
      console.log("niet gevonden (404 of fout)");
      await new Promise((r) => setTimeout(r, 800));
      continue;
    }

    const $ = cheerio.load(html);
    const { bodyHtml, bodyText, $content } = extractContent($);
    const imageUrls = extractImages($, $content);

    const body = bodyText.length > 50 ? htmlToMarkdownLike(bodyHtml) || bodyText.slice(0, 3000) : "";

    const contentPath = path.join(CONTENT_DIR, `${slug}.md`);
    let frontmatter = { title: "", excerpt: "", status: "te-koop" };
    let existingBody = "";
    try {
      const raw = await fs.readFile(contentPath, "utf-8");
      const start = raw.indexOf("---\n") + 4;
      const end = raw.indexOf("\n---", start);
      if (end > start) {
        const fmBlock = raw.slice(start, end);
        existingBody = raw.slice(end + 5).trim();
        for (const line of fmBlock.split("\n")) {
          const m = line.match(/^(\w+):\s*(.*)$/);
          if (m) {
            let v = m[2].trim();
            if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'")))
              v = v.slice(1, -1).replace(/\\"/g, '"');
            frontmatter[m[1]] = v;
          }
        }
      }
    } catch {}

    let firstImagePath = frontmatter.image || "";

    if (imageUrls.length > 0) {
      const downloaded = [];
      for (let j = 0; j < imageUrls.length; j++) {
        const name = safeFilename(slug, j + 1, imageUrls[j]);
        const filepath = path.join(IMAGES_DIR, name);
        const ok = await downloadImage(imageUrls[j], filepath);
        if (ok) {
          downloaded.push(`/images/aanbod/${name}`);
          if (!firstImagePath) firstImagePath = `/images/aanbod/${name}`;
        }
        await new Promise((r) => setTimeout(r, 300));
      }
      if (firstImagePath && !frontmatter.image) frontmatter.image = firstImagePath;
    }

    const newBody = body.length > 30 ? body : existingBody;
    const yaml = [
      `title: "${(frontmatter.title || slug).replace(/"/g, '\\"')}"`,
      `excerpt: "${(frontmatter.excerpt || "").replace(/"/g, '\\"')}"`,
      `status: ${frontmatter.status || "te-koop"}`,
    ];
    if (frontmatter.image) yaml.push(`image: ${frontmatter.image}`);
    if (frontmatter.extra) yaml.push(`extra: "${frontmatter.extra.replace(/"/g, '\\"')}"`);

    const md = `---\n${yaml.join("\n")}\n---\n\n${newBody}\n`;
    await fs.writeFile(contentPath, md, "utf-8");

    console.log(
      imageUrls.length > 0 ? `${imageUrls.length} afb., body ${newBody.length} tekens` : "geen afb., body bijgewerkt"
    );
    await new Promise((r) => setTimeout(r, 800));
  }

  console.log("\nKlaar.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
