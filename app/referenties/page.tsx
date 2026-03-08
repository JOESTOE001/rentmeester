import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MarkdownBody } from "@/components/markdown-body"
import { referentiesIndex, type ReferentieItem } from "@/data/referenties"

export const metadata: Metadata = {
  title: "Referenties | Bakker Rentmeesters & Makelaars",
  description:
    "Ervaringen en referenties van opdrachtgevers met Bakker Rentmeesters.",
}

function ReferentieCard({ item }: { item: ReferentieItem }) {
  const body = item.body.replace(/\n/g, "\n\n")
  return (
    <article className="rounded-xl border border-border bg-card p-6">
      <time dateTime={item.date} className="text-sm text-muted-foreground">
        {item.date}
      </time>
      <h2 className="mt-2 font-serif text-xl font-semibold text-foreground">
        {item.title}
      </h2>
      {item.author && (
        <p className="mt-1 text-sm font-medium text-foreground">
          {item.author}
        </p>
      )}
      <div className="mt-4 prose prose-sm max-w-none text-muted-foreground [&_p]:mb-2 [&_p:last-child]:mb-0">
        <MarkdownBody content={body} />
      </div>
    </article>
  )
}

export default function ReferentiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground">
            Referenties
          </h1>
          <p className="mt-2 text-muted-foreground">
            Ervaringen van opdrachtgevers met Bakker Rentmeesters.
          </p>

          <ul className="mt-10 flex flex-col gap-8 list-none p-0 m-0">
            {referentiesIndex.map((item) => (
              <li key={item.id}>
                <ReferentieCard item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  )
}
