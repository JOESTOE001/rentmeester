import matter from "gray-matter"
import path from "path"
import fs from "fs/promises"
import type { AanbodStatus } from "@/data/aanbod"

const CONTENT_DIR = path.join(process.cwd(), "content", "aanbod")

export interface AanbodContent {
  title: string
  excerpt: string
  status: AanbodStatus
  image?: string
  extra?: string
  /** Ruwe body (markdown + HTML), te renderen met react-markdown + rehype-raw */
  body: string
}

const VALID_STATUSES: AanbodStatus[] = [
  "te-koop",
  "verkocht",
  "verkocht-onder-voorbehoud",
]

function parseStatus(value: unknown): AanbodStatus {
  if (typeof value === "string" && VALID_STATUSES.includes(value as AanbodStatus)) {
    return value as AanbodStatus
  }
  return "te-koop"
}

/**
 * Leest het .md bestand voor een perceel en geeft frontmatter + body terug.
 * Bestandsnaam moet exact [slug].md zijn.
 */
export async function getAanbodContent(
  slug: string
): Promise<AanbodContent | null> {
  const safeSlug = slug.replace(/[^a-z0-9-]/gi, "")
  const filePath = path.join(CONTENT_DIR, `${safeSlug}.md`)

  try {
    const raw = await fs.readFile(filePath, "utf-8")
    const { data, content } = matter(raw)

    return {
      title: typeof data.title === "string" ? data.title : "",
      excerpt: typeof data.excerpt === "string" ? data.excerpt : "",
      status: parseStatus(data.status),
      image: typeof data.image === "string" ? data.image : undefined,
      extra: typeof data.extra === "string" ? data.extra : undefined,
      body: content.trim(),
    }
  } catch {
    return null
  }
}
