"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
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
    <section id="contact" ref={ref} className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-accent">
            Contact
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground lg:text-5xl text-balance">
            {"Laten we kennismaken"}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Heeft u een vraag of wilt u vrijblijvend overleggen? Neem gerust
            contact met ons op.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Contact Form */}
          <div
            className={`rounded-2xl border border-border bg-background p-8 lg:col-span-3 transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <form className="flex flex-col gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Naam
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Uw naam"
                    className="rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="uw@email.nl"
                    className="rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Telefoonnummer
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+31 6 12345678"
                  className="rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Onderwerp
                </label>
                <select
                  id="subject"
                  className="rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Kies een onderwerp
                  </option>
                  <option>Advies</option>
                  <option>Aan- en verkoop begeleiding</option>
                  <option>Taxaties</option>
                  <option>Onteigening</option>
                  <option>Grondverwerving</option>
                  <option>Overig</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Bericht
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Uw bericht..."
                  className="resize-none rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              <button
                type="submit"
                className="self-start rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Verstuur bericht
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            className={`flex flex-col gap-6 lg:col-span-2 transition-all duration-1000 delay-400 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            {[
              {
                icon: MapPin,
                title: "Bezoekadres",
                lines: ["Hoekje 14", "4286 LN Almkerk", "Nederland"],
              },
              {
                icon: Phone,
                title: "Telefoon",
                lines: [
                  <a key="tel" href="tel:0183402088" className="text-accent hover:underline">
                    0183-402088
                  </a>,
                ],
              },
              {
                icon: Mail,
                title: "E-mail",
                lines: [
                  <a key="email" href="mailto:info@rentmeester.nl" className="text-accent hover:underline">
                    info@rentmeester.nl
                  </a>,
                ],
              },
              
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-xl border border-border bg-background p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  {item.lines.map((line, i) => (
                    <p key={i} className="text-sm text-muted-foreground">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
