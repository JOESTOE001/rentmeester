import { notFound } from "next/navigation"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services"
import { ArrowLeft } from "lucide-react"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return { title: "Dienst niet gevonden" }
  return {
    title: `${service.title} | Bakker Rentmeesters & Makelaars`,
    description: service.desc,
  }
}

export default async function DienstPage({ params }: PageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const Icon = "icon" in service ? service.icon : null
  const longDescription =
    "longDescription" in service ? service.longDescription : (service as { longDescription?: string }).longDescription ?? service.desc

  return (
    <main>
      <Navigation />
      <article className="bg-background min-h-screen py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Link
            href="/#diensten"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Terug naar diensten
          </Link>

          <header className="mb-10">
            {Icon && (
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary mb-6">
                <Icon className="h-7 w-7 text-accent" />
              </div>
            )}
            <h1 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">
              {service.title}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              {service.desc}
            </p>
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-base leading-relaxed text-foreground whitespace-pre-line">
              {longDescription}
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Heeft u vragen over deze dienst of wilt u een afspraak maken?
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
