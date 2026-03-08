import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  getNieuwsPage,
  NIEUWS_TOTAL_PAGES,
  type NieuwsItem,
} from "@/data/nieuws"

export const metadata: Metadata = {
  title: "Nieuws | Bakker Rentmeesters & Makelaars",
  description:
    "Actueel nieuws en berichten van Bakker Rentmeesters over grondzaken, landelijk vastgoed en de rentmeesterspraktijk.",
}

function NieuwsCard({ item }: { item: NieuwsItem }) {
  return (
    <article className="rounded-xl border border-border bg-card p-6">
      <time
        dateTime={item.date}
        className="text-sm text-muted-foreground"
      >
        {item.date}
      </time>
      <h2 className="mt-2 font-serif text-xl font-semibold text-foreground">
        {item.title}
      </h2>
      <p className="mt-2 text-muted-foreground">{item.excerpt}</p>
      <Link
        href="/#contact"
        className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
      >
        Lees meer …
      </Link>
    </article>
  )
}

function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number
  totalPages: number
}) {
  if (totalPages <= 1) return null
  return (
    <nav
      className="mt-12 flex flex-wrap items-center justify-center gap-2"
      aria-label="Paginering"
    >
      <span className="mr-4 text-sm text-muted-foreground">
        Pagina {currentPage} van {totalPages}
      </span>
      <div className="flex gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Link
            key={page}
            href={page === 1 ? "/nieuws" : `/nieuws?page=${page}`}
            className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
              page === currentPage
                ? "bg-accent text-accent-foreground"
                : "bg-muted text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            {page}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default async function NieuwsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const params = await searchParams
  const page = Math.min(
    Math.max(1, Number(params.page) || 1),
    NIEUWS_TOTAL_PAGES
  )
  const items = getNieuwsPage(page)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground">
            Nieuws
          </h1>
          <p className="mt-2 text-muted-foreground">
            Actueel nieuws en berichten van Bakker Rentmeesters.
          </p>

          <ul className="mt-10 flex flex-col gap-6 list-none p-0 m-0">
            {items.map((item) => (
              <li key={item.id}>
                <NieuwsCard item={item} />
              </li>
            ))}
          </ul>

          <Pagination
            currentPage={page}
            totalPages={NIEUWS_TOTAL_PAGES}
          />
        </div>
      </div>
      <Footer />
    </main>
  )
}
