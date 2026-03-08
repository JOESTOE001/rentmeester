export function Footer() {
  return (
    <footer className="border-t border-border bg-primary py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10">
                <span className="font-serif text-lg font-bold text-primary-foreground">R</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-semibold leading-tight text-primary-foreground">
                  Rentmeester
                </span>
                <span className="text-xs tracking-widest uppercase text-primary-foreground/60">
                  Bakker B.V.
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              Specialist op het gebied van landelijk gelegen vastgoed. Meer dan
              30 jaar ervaring als rentmeester in Nederland.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground">Diensten</h4>
            <ul className="mt-4 flex flex-col gap-2">
              {[
                "Advies",
                "Aan- en verkoop",
                "Taxaties",
                "Onteigening",
                "Grondverwerving",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="/#diensten"
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground">Bedrijf</h4>
            <ul className="mt-4 flex flex-col gap-2">
              {[
                { label: "Aanbod", href: "/aanbod" },
                { label: "Projecten", href: "/projecten" },
                { label: "Over ons", href: "/#over-ons" },
                { label: "Referenties", href: "/#referenties" },
                { label: "Contact", href: "/#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground">Contact</h4>
            <ul className="mt-4 flex flex-col gap-2">
              <li className="text-sm text-primary-foreground/60">info@rentmeester.nl</li>
              <li className="text-sm text-primary-foreground/60">Nederland</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 sm:flex-row">
          <p className="text-xs text-primary-foreground/50">
            &copy; {new Date().getFullYear()} Bakker Rentmeesters & Makelaars B.V.
            Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-primary-foreground/50 hover:text-primary-foreground/80">
              Privacybeleid
            </a>
            <a href="#" className="text-xs text-primary-foreground/50 hover:text-primary-foreground/80">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
