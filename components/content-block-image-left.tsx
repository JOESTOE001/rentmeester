import Image from "next/image"
import Link from "next/link"

export interface ContentBlockImageLeftProps {
  /** Afbeelding: pad vanaf public, bijv. /images/aanbod/bantega.jpg */
  imageSrc: string
  imageAlt: string
  /** Titel (wordt in groen, vet, hoofdletters getoond) */
  title: string
  /** Korte beschrijving */
  excerpt: string
  /** Link naar detailpagina (bijv. /aanbod/[slug]) */
  linkHref: string
  linkLabel?: string
  /** Optioneel: statuslabel (bijv. "verkocht") */
  statusLabel?: string
  /** Optioneel: extra regel tekst */
  extra?: string
}

export function ContentBlockImageLeft({
  imageSrc,
  imageAlt,
  title,
  excerpt,
  linkHref,
  linkLabel = "Lees meer...",
  statusLabel,
  extra,
}: ContentBlockImageLeftProps) {
  return (
    <section className="relative overflow-hidden rounded-xl bg-warm-bg/60 py-8 px-6 lg:px-10 lg:py-10">
      {/* Optionele subtiele textuur-achtergrond kan hier via bg-image */}
      <div className="relative grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12 items-center">
        {/* Links: afbeelding */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg shrink-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>

        {/* Rechts: tekst */}
        <div className="flex flex-col justify-center min-w-0">
          {statusLabel && (
            <span className="mb-2 inline-block w-fit rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              {statusLabel}
            </span>
          )}
          <h2 className="font-sans text-lg font-bold uppercase tracking-wide text-accent lg:text-xl">
            {title}
          </h2>
          {excerpt && (
            <p className="mt-3 text-base leading-relaxed text-foreground">
              {excerpt}
            </p>
          )}
          {extra && (
            <p className="mt-1 text-sm text-muted-foreground">{extra}</p>
          )}
          <Link
            href={linkHref}
            className="mt-4 inline-flex items-center text-sm font-medium text-primary underline decoration-dotted underline-offset-2 hover:text-accent"
          >
            {linkLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
