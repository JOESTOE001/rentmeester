"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-landscape.jpg"
          alt="Nederlands platteland landschap"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-hero-overlay/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-hero-overlay/90 via-transparent to-hero-overlay/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="max-w-3xl">
          {/* Overline */}
          <div
            className={`mb-8 transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-card/20 bg-card/10 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-card/80 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Sinds 1990 actief
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`font-serif text-4xl font-bold leading-tight text-card sm:text-5xl lg:text-7xl transition-all duration-1000 delay-400 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <span className="text-balance block">
              Uw specialist in{" "}
              <span className="text-accent italic">landelijk</span>{" "}
              vastgoed
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`mt-6 max-w-xl text-lg leading-relaxed text-card/80 lg:text-xl transition-all duration-1000 delay-600 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Bakker Rentmeesters & Makelaars is al meer dan 30 jaar uw
            vertrouwde partner voor advies, beheer en begeleiding bij
            landelijk gelegen vastgoed in heel Nederland.
          </p>

          {/* CTA Buttons */}
          <div
            className={`mt-10 flex flex-col gap-4 sm:flex-row transition-all duration-1000 delay-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <a
              href="#diensten"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-lg"
            >
              Onze diensten
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-card/30 bg-card/10 px-8 py-3.5 text-sm font-semibold text-card backdrop-blur-sm transition-all hover:bg-card/20"
            >
              Neem contact op
            </a>
          </div>

          {/* Stats */}
          <div
            className={`mt-16 flex gap-12 transition-all duration-1000 delay-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {[
              { number: "30+", label: "Jaar ervaring" },
              { number: "500+", label: "Projecten" },
              { number: "100%", label: "Betrokkenheid" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-serif text-3xl font-bold text-card lg:text-4xl">
                  {stat.number}
                </span>
                <span className="mt-1 text-xs tracking-wider uppercase text-card/60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <a
          href="#over-ons"
          className="flex flex-col items-center gap-2 text-card/60 transition-colors hover:text-card"
          aria-label="Scroll naar beneden"
        >
          <span className="text-xs tracking-widest uppercase">Ontdek meer</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
