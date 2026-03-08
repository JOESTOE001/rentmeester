"use client"

import Image from "next/image"

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/estate-aerial.jpg"
          alt="Luchtfoto landgoed"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
        <h2 className="mx-auto max-w-2xl font-serif text-3xl font-bold text-card lg:text-5xl text-balance">
          Klaar om de volgende stap te zetten?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-card/80 lg:text-lg">
          Of het nu gaat om advies, begeleiding bij grondverwerving of een
          taxatie &mdash; wij staan voor u klaar.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-lg"
          >
            Neem contact op
          </a>
          <a
            href="tel:+0183-402088"
            className="inline-flex items-center justify-center rounded-lg border border-card/30 bg-card/10 px-8 py-3.5 text-sm font-semibold text-card backdrop-blur-sm transition-all hover:bg-card/20"
          >
            Bel ons direct
          </a>
        </div>
      </div>
    </section>
  )
}
