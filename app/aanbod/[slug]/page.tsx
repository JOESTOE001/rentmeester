import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MarkdownBody } from "@/components/markdown-body"
import { getAanbodBySlug, type AanbodStatus } from "@/lib/aanbod"
import { ArrowLeft } from "lucide-react"

const statusLabelsMap: Record<AanbodStatus, string> = {
  "te-koop": "",
  verkocht: "verkocht",
  "verkocht-onder-voorbehoud": "verkocht onder voorbehoud",
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const item = await getAanbodBySlug(slug)
  if (!item) return { title: "Niet gevonden" }
  return {
    title: `${item.title} | Aanbod | Bakker Rentmeesters & Makelaars`,
    description: item.excerpt || undefined,
  }
}

export default async function AanbodDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = await getAanbodBySlug(slug)
  if (!item) notFound()

  const statusLabel = statusLabelsMap[item.status]
  const hasImage = item.image
  const PLACEHOLDER_IMAGE = "/placeholder.svg"

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Link
            href="/aanbod"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Terug naar aanbod
          </Link>

          <article className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
            {/* Hoofdafbeelding */}
            <div className="relative aspect-[16/9] w-full bg-muted">
              <Image
                src={hasImage ? item.image! : PLACEHOLDER_IMAGE}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
                priority
              />
            </div>

            <div className="p-6 lg:p-8">
              {statusLabel && (
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-medium mb-4 ${
                    item.status === "verkocht-onder-voorbehoud"
                      ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {statusLabel}
                </span>
              )}
              <h1 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">
                {item.title}
              </h1>
              {item.excerpt && (
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  {item.excerpt}
                </p>
              )}
              {item.extra && (
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.extra}
                </p>
              )}

              {/* Uitgebreide tekst (body: markdown + HTML zoals <strong>) */}
              {item.body && (
                <div className="mt-8">
                  <MarkdownBody content={item.body} className="leading-relaxed" />
                </div>
              )}

              <p className="mt-8 text-sm text-muted-foreground">
                Voor meer informatie over dit aanbod, neem gerust contact met ons
                op.
              </p>
              <Link
                href="/#contact"
                className="mt-6 inline-flex rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90"
              >
                Neem contact op
              </Link>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </main>
  )
}
