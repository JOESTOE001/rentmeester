import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Beroepsgroep | Bakker Rentmeesters & Makelaars",
  description:
    "Over het vak van rentmeester en de werkzaamheden van Bakker Rentmeesters: landelijk vastgoed, taxaties, grondzaken en meer.",
}

const intro = `De naam rentmeester wordt door velen nog geassocieerd met het beheren van landgoederen. Vroeger was dit inderdaad de voornaamste functie van de rentmeester. Met name door de vele veranderingen in het buitengebied heeft de rentmeester zich ontwikkeld tot een breed georiënteerde vastgoeddeskundige die werkt op diverse terreinen in opdracht van particulieren, (agrarische) ondernemers en overheden. De huidige rentmeester is daarom vooral actief in de 'groene ruimte' en op de grens van het stedelijk- en het buitengebied.`

const kenmerken = [
  "Specialist op het gebied van landelijk gelegen vastgoed in de breedste zin van het woord.",
  "Persoonlijke aandacht.",
  "Korte lijnen tussen opdrachtgever en opdrachtnemer.",
  "Ruim 25 jaar werkervaring als rentmeesterskantoor in Nederland.",
]

const werkzaamheden = [
  "Bemiddeling bij aan- en verkoop van landelijk gelegen vastgoed",
  "Het uitvoeren van taxaties",
  "Advies bij grondverwerving",
  "Begeleiding bij onteigeningszaken",
  "Advisering op het gebied van planschade en nadeelcompensatie",
  "Beheer-en pachtzaken",
  "Begeleiding bij het vestigen van zakelijke rechten",
  "Advies bij bestemmingsplanwijzigingen",
]

const slot = `Bakker Rentmeesters is aangesloten bij de Nederlandse Vereniging van Rentmeesters (NVR), de belangrijkste beroepsvereniging voor rentmeesters in Nederland en opgenomen in het VastgoedCert (kamer wonen en landelijk vastgoed): het kwaliteitsregister van makelaars en taxateurs.`

export default function BeroepsgroepPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground">
            Beroepsgroep
          </h1>
          <p className="mt-2 text-muted-foreground">
            Over het vak van rentmeester en onze werkzaamheden.
          </p>

          <div className="mt-10 space-y-8 text-foreground">
            <p className="leading-relaxed">{intro}</p>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">
                Kenmerken van Bakker Rentmeesters
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                {kenmerken.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">
                Enkele werkzaamheden van Bakker Rentmeesters
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                {werkzaamheden.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <p className="leading-relaxed">{slot}</p>
          </div>

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
