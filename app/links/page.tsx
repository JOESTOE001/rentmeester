import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { linksCategorieen } from "@/data/links"

export const metadata: Metadata = {
  title: "Links | Bakker Rentmeesters & Makelaars",
  description:
    "Handige links: beroepsorganisaties, overheden, kastelen en landgoederen, agrarisch nieuws en vraag en aanbod.",
}

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground">
            Links
          </h1>
          <p className="mt-2 text-muted-foreground">
            Beroepsgerelateerde en andere handige links.
          </p>

          <div className="mt-10 flex flex-col gap-12">
            {linksCategorieen.map((categorie) => (
              <section key={categorie.title}>
                <h2 className="font-serif text-xl font-semibold text-foreground">
                  {categorie.title}
                </h2>
                <ul className="mt-4 flex flex-col gap-4 list-none p-0 m-0">
                  {categorie.items.map((item) => (
                    <li key={item.url}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/30 hover:bg-secondary"
                      >
                        <span className="font-medium text-foreground">
                          {item.name}
                        </span>
                        {item.description && (
                          <p className="mt-1 text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
