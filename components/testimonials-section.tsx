"use client"

import { useEffect, useRef, useState } from "react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Theo Kragt",
    company: "Kragtbouw",
    title: "Grondverwerving/onteigening t.b.v. verbreding A27",
    text: "Bakker Rentmeesters begeleidt Kragtbouw in een grondverwervings-/onteigeningstraject m.b.t. de verbreding van de A27. Een langdurig traject dat al veel energie heeft gekost en waarbij onze werkhaven met kade en opslagterrein in Hank helaas moest wijken voor het algemeen belang. Mede door de inzet en deskundigheid van Bakker Rentmeesters zullen we uiteindelijk een aanvaardbare schadeloosstelling ontvangen.",
  },
  {
    name: "Andrea en Corne",
    company: "",
    title: "Advisering bij verkoop eigendom t.b.v. plannen Waterschap",
    text: "In verband met het gedwongen moeten verkopen van ons land aan een overheidsorgaan, hebben we Paul in de arm genomen om onze belangen te behartigen. Hij heeft voor ons het contact met de andere partij overgenomen en bemiddeld naar een mooie verkoopprijs met zeer goede voorwaarden. Altijd goed bereikbaar en snel antwoord op mail en app.",
  },
  {
    name: "Anja en Martien Gijsbrechts",
    company: "",
    title: "Begeleiding onteigeningsprocedure",
    text: "Bakker Rentmeesters heeft ons m.b.t. het spoorzoneproject Rijen begeleid in het aankooptraject door Prorail/gemeente van ons eigendom. Dit heeft veel tijd en energie gekost. Gelukkig hadden we een goeie adviseur van Bakker Rentmeesters. Dit heeft uiteindelijk geleid tot een volledige schadeloosstelling op basis van de onteigeningswet.",
  },
  {
    name: "Riens Baan Hofman",
    company: "",
    title: "Advies en begeleiding verkoop perceel grond",
    text: "Bij de verkoop van een perceel grond in de omgeving van Sliedrecht heeft Bakker Rentmeesters mij begeleid. Aangezien de grond in een ontwikkelgebied ligt hadden we met verschillende projectontwikkelaars te maken. De begeleiding kan als deskundig en professioneel worden omschreven.",
  },
]

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [active, setActive] = useState(0)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1))
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1))

  return (
    <section id="referenties" ref={ref} className="bg-warm-bg py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-accent">
            Referenties
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground lg:text-5xl text-balance">
            Wat onze opdrachtgevers zeggen
          </h2>
        </div>

        {/* Testimonial Card */}
        <div
          className={`relative mx-auto mt-16 max-w-4xl transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm lg:p-12">
            <Quote className="h-10 w-10 text-accent/30" />
            <div className="mt-6">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {testimonials[active].title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
                {testimonials[active].text}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                  <span className="font-serif text-lg font-bold text-accent-foreground">
                    {testimonials[active].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {testimonials[active].name}
                  </p>
                  {testimonials[active].company && (
                    <p className="text-xs text-muted-foreground">
                      {testimonials[active].company}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
              aria-label="Vorige referentie"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? "w-8 bg-accent" : "w-2 bg-border"
                  }`}
                  aria-label={`Referentie ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
              aria-label="Volgende referentie"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
