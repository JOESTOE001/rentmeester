import {
  getAanbodPageIndex,
  getAanbodIndexBySlug,
  type AanbodIndexItem,
  type AanbodStatus,
} from "@/data/aanbod"
import { getAanbodContent, type AanbodContent } from "@/lib/aanbod-content"

/** Volledig aanbod-item voor lijst en detail (index + inhoud uit .md). */
export interface AanbodItem extends AanbodIndexItem, AanbodContent {}

function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

/** Geeft één volledig item voor de detailpagina, of null als slug niet bestaat of .md ontbreekt. */
export async function getAanbodBySlug(
  slug: string
): Promise<AanbodItem | null> {
  const index = getAanbodIndexBySlug(slug)
  if (!index) return null

  const content = await getAanbodContent(slug)
  if (!content) return null

  return { ...index, ...content }
}

/** Geeft een pagina volle items voor de overzichtspagina. Ontbrekende .md → placeholder titel/excerpt. */
export async function getAanbodPage(page: number): Promise<AanbodItem[]> {
  const indexItems = getAanbodPageIndex(page)
  const items: AanbodItem[] = []

  for (const index of indexItems) {
    const content = await getAanbodContent(index.slug)
    if (content) {
      items.push({ ...index, ...content })
    } else {
      items.push({
        ...index,
        title: slugToTitle(index.slug),
        excerpt: "",
        status: index.status,
        body: "",
      })
    }
  }

  return items
}

export type { AanbodStatus }
