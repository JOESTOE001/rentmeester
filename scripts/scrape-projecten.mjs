/**
 * Scrape projecten overview pages from rentmeester.nl and download project images.
 * Writes data/projecten-images.json (slug -> image path) and saves images to public/images/projecten/.
 *
 * Run: node scripts/scrape-projecten.mjs
 */

import * as fs from "fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";
import * as cheerio from "cheerio";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const IMAGES_DIR = path.join(ROOT, "public", "images", "projecten");
const OUTPUT_JSON = path.join(ROOT, "data", "projecten-images.json");

const BASE_URL = "https://www.rentmeester.nl";

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

function toAbsoluteImageUrl(src) {
  if (!src) return null;
  let s = src.trim();
  if (s.startsWith("//")) s = "https:" + s;
  else if (s.startsWith("/")) s = BASE_URL + s;
  if (!s.startsWith("http")) return null;
  if (/logo|icon|avatar|sprite|1x1|pixel|\.svg/i.test(s)) return null;
  return s;
}

/** Titel (alt of h2) omzetten naar slug zoals in data/projecten.ts. */
function titleToSlug(title) {
  if (!title || typeof title !== "string") return null;
  return title
    .trim()
    .toLowerCase()
    .replace(/\s*-\s*/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/^-|-$/g, "");
}

function safeFilename(slug, url) {
  const ext = path.extname(new URL(url).pathname) || ".jpg";
  const base = slug.replace(/[^a-z0-9-]/gi, "-").slice(0, 60);
  return `${base}${ext}`;
}

async function downloadImage(url, filepath) {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; RentmeesterScraper/1.0)",
      },
    });
    if (!res.ok) return false;
    const buf = await res.arrayBuffer();
    await fs.writeFile(filepath, Buffer.from(buf));
    return true;
  } catch {
    return false;
  }
}

async function main() {
  await fs.mkdir(IMAGES_DIR, { recursive: true });

  const slugToImagePath = {};
  const totalPages = 4;

  for (let page = 1; page <= totalPages; page++) {
    const url =
      page === 1
        ? `${BASE_URL}/projecten`
        : `${BASE_URL}/projecten?start=${(page - 1) * 15}`;
    process.stdout.write(
      `Pagina ${page}/${totalPages} ophalen (${url}) ... `
    );

    const html = await fetchHtml(url);
    if (!html) {
      console.log("mislukt");
      await new Promise((r) => setTimeout(r, 500));
      continue;
    }

    const $ = cheerio.load(html);
    let count = 0;

    // Projecten staan in #projectlijst .item.flex; per item: img (alt = titel) en geen link
    $("#projectlijst .item, .rmlijst .item, div.item.flex").each((_, itemEl) => {
      const $item = $(itemEl);
      const $img = $item.find("img[src*='project-hoofdafbeelding']").first();
      const src = $img.attr("src");
      const alt = $img.attr("alt");
      const imageUrl = toAbsoluteImageUrl(src);
      const slug = titleToSlug(alt);

      if (slug && imageUrl && !slugToImagePath[slug]) {
        slugToImagePath[slug] = { url: imageUrl };
        count++;
      }
    });

    console.log(`${count} project(en) met afbeelding gevonden.`);
    await new Promise((r) => setTimeout(r, 600));
  }

  const slugs = Object.keys(slugToImagePath);
  console.log(`\nAfbeeldingen downloaden voor ${slugs.length} projecten...\n`);

  for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i];
    const { url } = slugToImagePath[slug];
    const filename = safeFilename(slug, url);
    const filepath = path.join(IMAGES_DIR, filename);
    const publicPath = `/images/projecten/${filename}`;

    process.stdout.write(`[${i + 1}/${slugs.length}] ${slug} ... `);

    const ok = await downloadImage(url, filepath);
    if (ok) {
      slugToImagePath[slug] = publicPath;
      console.log("ok");
    } else {
      delete slugToImagePath[slug];
      console.log("download mislukt");
    }
    await new Promise((r) => setTimeout(r, 300));
  }

  const result = {};
  for (const [slug, value] of Object.entries(slugToImagePath)) {
    if (typeof value === "string") result[slug] = value;
  }

  await fs.writeFile(
    OUTPUT_JSON,
    JSON.stringify(result, null, 2),
    "utf-8"
  );

  console.log(`\nKlaar. ${Object.keys(result).length} afbeeldingen opgeslagen.`);
  console.log(`Pad: ${OUTPUT_JSON}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
