import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Over ons | Bakker Rentmeesters & Makelaars",
  description:
    "Meer over Bakker Rentmeesters: nieuws, referenties, beroepsgroep en handige links.",
}

const subpages = [
  { label: "Nieuws", href: "/nieuws", description: "Actueel nieuws en berichten" },
  {
    label: "Referenties",
    href: "/referenties",
    description: "Ervaringen van opdrachtgevers",
  },
  {
    label: "Beroepsgroep",
    href: "/beroepsgroep",
    description: "Over het vak van rentmeester",
  },
  { label: "Links", href: "/links", description: "Handige links en partners" },
]

export default function OverOnsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground">
            Over ons
          </h1>
          <p className="mt-2 text-muted-foreground">
            Meer informatie over Bakker Rentmeesters, ons nieuws, referenties
            en handige links.
          </p>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2 list-none p-0 m-0">
            {subpages.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-xl border border-border bg-card p-6 transition-colors hover:bg-secondary hover:border-primary/20"
                >
                  <span className="font-semibold text-foreground">
                    {item.label}
                  </span>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
