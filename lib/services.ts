import type { LucideIcon } from "lucide-react"
import {
  Scale,
  Landmark,
  MapPin,
  TreePine,
  FileCheck,
  ShieldCheck,
  Home,
  Tractor,
  BarChart3,
} from "lucide-react"

export type ServiceCategory = "advies" | "verkoop" | "special"

export interface AdviesService {
  slug: string
  icon: LucideIcon
  title: string
  desc: string
  longDescription: string
}

export interface VerkoopService {
  slug: string
  icon: LucideIcon
  title: string
  desc: string
  longDescription: string
}

export interface SpecialService {
  slug: string
  title: string
  desc: string
  longDescription: string
}

export const adviesServices: AdviesService[] = [
  {
    slug: "wet-en-regelgeving",
    icon: Scale,
    title: "Wet- en regelgeving",
    desc: "Deskundig advies over juridische kaders voor landelijk vastgoed.",
    longDescription: "Onze specialisten bieden uitgebreid advies over alle juridische aspecten die van toepassing zijn op landelijk vastgoed. Wij helpen u met het interpreteren van wet- en regelgeving, het beoordelen van contracten en het navigeren door complexe juridische kaders. Of het nu gaat om bestemmingsplannen, pachtwetgeving of omgevingsrecht: wij staan voor u klaar met helder en praktisch advies op maat.",
  },
  {
    slug: "landgoederen",
    icon: Landmark,
    title: "Landgoederen",
    desc: "Beheer en advisering van historische landgoederen en buitenplaatsen.",
    longDescription: "Historische landgoederen en buitenplaatsen vragen om specialistische kennis en zorgvuldig beheer. Wij adviseren eigenaren over behoud, onderhoud en duurzaam gebruik van hun erfgoed. Van monumentenzorg en subsidietrajecten tot het beheer van pacht en bos: wij ondersteunen u bij alle aspecten van uw landgoed of buitenplaats.",
  },
  {
    slug: "ruimtelijke-ordening",
    icon: MapPin,
    title: "Ruimtelijke Ordening",
    desc: "Begeleiding bij bestemmingsplannen en omgevingsvergunningen.",
    longDescription: "Ruimtelijke ordening heeft directe invloed op de mogelijkheden van uw grond of vastgoed. Wij begeleiden u bij procedures rond bestemmingsplannen, omgevingsvergunningen en de Omgevingswet. Wij helpen u uw plannen te realiseren door tijdig in te spelen op regelgeving en met overheden en belanghebbenden te communiceren.",
  },
  {
    slug: "beheer-landelijk-vastgoed",
    icon: TreePine,
    title: "Beheer landelijk vastgoed",
    desc: "Professioneel beheer van agrarisch en landelijk onroerend goed.",
    longDescription: "Agrarisch en landelijk onroerend goed vereist continu en professioneel beheer. Wij verzorgen het dagelijkse en strategische beheer: van pachtadministratie en onderhoudsplanning tot verhuur en relatiebeheer met pachters. Zo houdt u grip op uw bezit en maximaliseert u de waarde en het rendement op lange termijn.",
  },
  {
    slug: "vestiging-zakelijk-recht",
    icon: FileCheck,
    title: "Vestiging zakelijk recht",
    desc: "Advisering over erfdienstbaarheden en zakelijke rechten.",
    longDescription: "Erfdienstbaarheden, erfpacht en andere zakelijke rechten bepalen wat er met een perceel mag en kan. Wij adviseren u over het vestigen, wijzigen of beëindigen van deze rechten. Wij begeleiden de juridische procedures en zorgen dat uw belangen goed worden vastgelegd in de akten en het kadaster.",
  },
  {
    slug: "pacht-erfpacht",
    icon: ShieldCheck,
    title: "Pacht / erfpacht",
    desc: "Expertise in pacht- en erfpachtovereenkomsten.",
    longDescription: "Pacht en erfpacht zijn kernonderwerpen binnen landelijk vastgoed. Wij hebben uitgebreide ervaring met het opstellen en beoordelen van pacht- en erfpachtovereenkomsten, herziening van pachtprijzen en geschillen. Of u nu verpachter of pachter bent: wij helpen u met heldere afspraken en een eerlijke invulling van de wet- en regelgeving.",
  },
]

export const verkoopServices: VerkoopService[] = [
  {
    slug: "landelijk-wonen",
    icon: Home,
    title: "Landelijk wonen",
    desc: "Begeleiding bij aan- en verkoop van landelijke woningen.",
    longDescription: "De aankoop of verkoop van een landelijke woning brengt vaak specifieke vragen mee: over het perceel, bestemming, pacht en gebruik. Wij begeleiden u van eerste bezichtiging tot de overdracht en zorgen dat alle juridische en praktische zaken rondom uw landelijke woning in orde zijn.",
  },
  {
    slug: "agrarisch-vastgoed",
    icon: Tractor,
    title: "Agrarisch vastgoed",
    desc: "Specialistische begeleiding bij agrarische transacties.",
    longDescription: "Agrarisch vastgoed vereist specialistische kennis van bedrijfsvoering, pacht, quota en regelgeving. Wij begeleiden kopers en verkopers bij de verkoop of aankoop van boerderijen, landerijen en agrarische bedrijven. Wij zorgen voor een zorgvuldige due diligence en een soepele overdracht.",
  },
  {
    slug: "taxaties",
    icon: BarChart3,
    title: "Taxaties",
    desc: "Betrouwbare waardebepalingen van landelijk vastgoed.",
    longDescription: "Een betrouwbare taxatie is essentieel bij verkoop, financiering of erfopvolging. Wij verzorgen professionele waardebepalingen van landelijk vastgoed, agrarische objecten en grond. Onze taxaties voldoen aan de geldende richtlijnen en worden geaccepteerd door banken en andere partijen.",
  },
]

export const specialServices: SpecialService[] = [
  {
    slug: "planschade-nadeelcompensatie",
    title: "Planschade / nadeelcompensatie",
    desc: "Advisering en begeleiding bij planschadeclaims.",
    longDescription: "Wijzigingen in bestemmingsplannen of infrastructurele projecten kunnen uw eigendom of bedrijfsvoering benadelen. In dat geval komt u mogelijk in aanmerking voor planschade of nadeelcompensatie. Wij adviseren en begeleiden u bij het indienen van een claim en het voeren van de benodigde procedures.",
  },
  {
    slug: "onteigening",
    title: "Onteigening",
    desc: "Deskundige bijstand bij onteigeningsprocedures.",
    longDescription: "Bij onteigening wordt uw eigendom of recht tegen uw wil in door de overheid overgenomen. Wij staan u bij met juridische en fiscale advisering en ondersteuning in de procedure. Onze doelstelling is een eerlijke vergoeding en een zorgvuldige afwikkeling van uw rechten.",
  },
  {
    slug: "grondverwerving",
    title: "Grondverwerving",
    desc: "Strategisch advies en begeleiding bij grondverwerving.",
    longDescription: "Grondverwerving voor projecten, uitbreiding of herinrichting vraagt om een doordachte aanpak. Wij adviseren over strategie, onderhandelingen en juridische aspecten. Wij begeleiden u bij het verwerven van de benodigde percelen en het afronden van de transacties.",
  },
]

const allServicesBySlug = new Map<string, AdviesService | VerkoopService | SpecialService>()

;[...adviesServices, ...verkoopServices].forEach((s) => allServicesBySlug.set(s.slug, s))
specialServices.forEach((s) => allServicesBySlug.set(s.slug, s))

export function getServiceBySlug(slug: string): AdviesService | VerkoopService | SpecialService | undefined {
  return allServicesBySlug.get(slug)
}

export function getAllServiceSlugs(): string[] {
  return [...allServicesBySlug.keys()]
}
