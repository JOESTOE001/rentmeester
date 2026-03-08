/** Nieuwsitem (gescraped van rentmeester.nl/nieuws). */
export interface NieuwsItem {
  id: string
  title: string
  date: string
  excerpt: string
  slug: string
}

const ITEMS_PER_PAGE = 10

export const nieuwsIndex: NieuwsItem[] = [
  {
    id: "1",
    title: "Uitnodiging aan de minister van Landbouw",
    date: "28 februari 2026",
    excerpt:
      "Namens de vakgroep Agrarisch en Landelijk feliciteert Jos Ebbers de nieuwe minister van Landbouw, Jaimi van Essen, met zijn benoeming.",
    slug: "uitnodiging-aan-de-minister-van-landbouw",
  },
  {
    id: "2",
    title: "Afschaffing van de landbouwvrijstelling leidt onvermijdelijk tot een koude sanering",
    date: "09 januari 2026",
    excerpt:
      "De mogelijke afschaffing van de landbouwvrijstelling op 1-1-2028 lijkt misschien een technische fiscale ingreep, maar de gevolgen voor de landbouwsector zijn groot.",
    slug: "afschaffing-van-de-landbouwvrijstelling-leidt-onvermijdelijk-tot-een-koude-sanering",
  },
  {
    id: "3",
    title: "Met Erwin van den Berg kiest Waddengroep voor continuïteit",
    date: "18 december 2025",
    excerpt:
      "De Stichting Waddengroep is een onafhankelijke organisatie die zich al 30 jaar inzet voor de stimulering en ontwikkeling van streekeigen producten en de regionale economie in het Waddengebied.",
    slug: "met-erwin-van-den-berg-kiest-waddengroep-voor-continuiteit",
  },
  {
    id: "4",
    title: "Efficiënt samenwerken: samenhang, maatwerk, uitvoeringskracht",
    date: "10 december 2025",
    excerpt:
      "Vrijdag 5 december jl. kwamen de leden van Rentmeesters.nl bijeen op Buitenplaats de Burgwal in Leusden voor de eindejaars vergadering. Een inhoudelijke presentatie over een actueel onderwerp is vast onderdeel van de agenda.",
    slug: "efficient-samenwerken-samenhang-maatwerk-uitvoeringskracht",
  },
  {
    id: "5",
    title: "Bomen: het stille goud van de melkveehouderij",
    date: "28 november 2025",
    excerpt:
      "De melkveehouderij staat midden in een snelle verandering. Droogte, hittestress, stijgende kosten, strengere regelgeving en groeiende maatschappelijke verwachtingen zetten druk op het traditionele productiemodel.",
    slug: "bomen-het-stille-goud-van-de-melkveehouderij",
  },
  {
    id: "6",
    title: "Beschikbare landbouwgrond compleet in beeld gebracht",
    date: "06 oktober 2025",
    excerpt:
      "Als Paul Bakker wordt gevraagd naar beschikbare grond komt daar heel wat deskresearch bij kijken. Volgens zijn zoon Joost moest het mogelijk zijn om dat proces aanmerkelijk te versnellen.",
    slug: "beschikbare-landbouwgrond-compleet-in-beeld-gebracht",
  },
  {
    id: "7",
    title: "Leerzame excursie naar De Biesbosch",
    date: "26 september 2025",
    excerpt:
      "Vrijdag 19 september 2025 brachten de leden van Rentmeesters.nl een bezoek aan Nationaal Park De Biesbosch.",
    slug: "leerzame-excursie-naar-de-biesbosch",
  },
  {
    id: "8",
    title: "Meer grond in plaats van investeren in reductie",
    date: "17 september 2025",
    excerpt:
      "Dat het effect van een overheidsmaatregel anders kan uitpakken dan bedoeld was onderwerp van de Nieuwsuuruitzending van 30 augustus 2025.",
    slug: "meer-grond-in-plaats-van-investeren-in-reductie",
  },
  {
    id: "9",
    title: "De nieuwe meewerkvergoedingensystematiek onder de loep",
    date: "08 september 2025",
    excerpt:
      "Netbeheer Nederland, een vereniging van acht netbeheerders waaronder Gasunie, Tennet en Liander, heeft eind augustus de tarieven voor de afsluit- en meewerkvergoedingen gepubliceerd.",
    slug: "de-nieuwe-meewerkvergoedingensystematiek-onder-de-loep",
  },
  {
    id: "10",
    title: "De succesvolle aanpak van twee Deense nationale parken",
    date: "31 juli 2025",
    excerpt:
      "Van 13 t/m 16 mei bezocht een delegatie van Nederlandse nationale parken en partnerorganisaties twee Deense nationale parken. De studiereis bracht de leden naar Nationaal Park Tye in het Noordwesten van Jutland en naar Nationaal Park Mols Bjerge in het Zuidoosten.",
    slug: "de-succesvolle-aanpak-van-twee-deense-nationale-parken",
  },
  {
    id: "11",
    title: "De Bleekerij in Boekelo bevrijd van PFAS",
    date: "16 juli 2025",
    excerpt:
      "Na verkennend bodemonderzoek blijkt de grond op meerdere locaties onder woonwijk De Bleekerij in Boekelo ernstig vervuild door hoge concentraties PFAS. De gemeente Enschede besluit daarop tot een ingrijpende bodemsanering door onder andere een groot aantal tuinen af te graven. Aan Woet Bosgrond wordt gevraagd om in samenwerking met Bessels Green de schade voor de bewoners te taxeren. De bewoners zullen volledig schadeloosgesteld worden.",
    slug: "de-bleekerij-in-boekelo-bevrijd-van-pfas",
  },
  {
    id: "12",
    title: "Verkavelen met de omgevingswet",
    date: "03 juli 2025",
    excerpt:
      "Op vrijdag 27 juni is het langverwachte boekje \"Verkavelen met de Omgevingswet\" verschenen.",
    slug: "verkavelen-met-de-omgevingswet",
  },
  {
    id: "13",
    title: "Onteigening geen hamerstuk",
    date: "25 mei 2025",
    excerpt:
      "Defensie heeft meer ruimte nodig voor het opleiden en trainen van mensen. Dat heeft zoals bekend alles te maken met de veranderde veiligheidssituatie in de wereld en onze defensieopgave.",
    slug: "onteigening-geen-hamerstuk",
  },
  {
    id: "14",
    title: "Werken als rentmeester",
    date: "20 maart 2025",
    excerpt:
      "Wat doet een rentmeester precies? Met hun nieuwste filmpje geeft de NVR een actueel beeld van dit veelzijdige en betekenisvolle beroep.",
    slug: "werken-als-rentmeester",
  },
  {
    id: "15",
    title: "Is grondeigenaar aansprakelijk voor opruimen drugsafval?",
    date: "13 februari 2025",
    excerpt:
      "Het dumpen van drugsafval is een toenemend, ernstig probleem. Drugsafval bevat giftige stoffen die ernstige schade veroorzaken aan het milieu en de volksgezondheid. Vaten en jerrycans met chemicaliën liggen in uitgebrande auto's of worden gedumpt. Soms wordt het afval rechtstreeks in het water of in de bodem gestort. In de provincies Noord-Brabant en Limburg vinden de meeste dumpingen plaats.",
    slug: "is-grondeigenaar-aansprakelijk-voor-opruimen-drugsafval",
  },
]

export const NIEUWS_TOTAL_PAGES = Math.ceil(nieuwsIndex.length / ITEMS_PER_PAGE)

export function getNieuwsPage(page: number): NieuwsItem[] {
  const start = (page - 1) * ITEMS_PER_PAGE
  return nieuwsIndex.slice(start, start + ITEMS_PER_PAGE)
}
