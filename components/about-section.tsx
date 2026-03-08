"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="over-ons" ref={ref} className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/rural-property.jpg"
                alt="Landelijk vastgoed in Nederland"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 rounded-xl border border-border bg-card p-6 shadow-xl lg:-right-12">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent">
                  <span className="font-serif text-xl font-bold text-accent-foreground">30+</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Jaar ervaring</p>
                  <p className="text-xs text-muted-foreground">In heel Nederland</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
          >
            <span className="text-xs font-medium tracking-widest uppercase text-accent">
              Over ons
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-foreground lg:text-4xl text-balance">
              De moderne rentmeester als breed georiënteerde vastgoeddeskundige
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                De rentmeester wordt vaak geassocieerd met het beheren van
                landgoederen. Vroeger was dit de belangrijkste functie van de
                rentmeester. Door de veranderingen in het buitengebied is de
                rentmeester een breed georiënteerde vastgoeddeskundige geworden.
              </p>
              <p>
                In opdracht van particulieren, (agrarische) ondernemers en
                overheden is de rentmeester actief in de &apos;groene ruimte&apos; en op
                de grens van het stedelijk- en buitengebied.
              </p>
              <p>
                Als specialist op het gebied van landelijk gelegen vastgoed
                hebben wij meer dan 30 jaar ervaring als rentmeester in
                Nederland. Persoonlijke aandacht en korte lijnen tussen
                opdrachtgever en opdrachtnemer staan bij ons voorop.
              </p>
            </div>
            <div className="mt-8 flex gap-8">
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-foreground">Persoonlijk</span>
                <span className="text-sm text-muted-foreground">Korte lijnen</span>
              </div>
              <div className="h-auto w-px bg-border" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-foreground">Deskundig</span>
                <span className="text-sm text-muted-foreground">Ervaren adviseurs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
