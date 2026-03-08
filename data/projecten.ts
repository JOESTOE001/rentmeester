/** Project uit de projecten-overzichtspagina (gescraped van rentmeester.nl/projecten). */
export interface ProjectItem {
  id: string
  slug: string
  title: string
  excerpt: string
  /** Pad naar afbeelding (uit data/projecten-images.json, gegenereerd door scrape-projecten). */
  image?: string
}

const ITEMS_PER_PAGE = 10

/** Volgorde van projecten op de overzichtspagina. */
export const projectenIndex: ProjectItem[] = [
  {
    id: "1",
    slug: "batterijopslag-gemeente-molenlanden",
    title: "Batterijopslag Gemeente Molenlanden",
    excerpt:
      "Binnen de gemeente Molenlanden was het bedrijf Lightsource BP op zoek naar een locatie voor batterijopslag. Uiteindelijk heeft het bedrijf haar oog laten vallen op een locatie nabij de kern Arkel. Bakker Rentmeesters is betrokken geweest bij het vinden van de locatie en heeft als intermediair opgetreden tussen Lightsource BP en de grondeigenaar. Goed om te weten is dat de grondeigenaar eigenaar blijft en Lightsource een gebruiksrecht heeft.",
  },
  {
    id: "2",
    slug: "wet-voorkeursrecht-gemeente-veere",
    title: "Wet Voorkeursrecht Gemeente Veere",
    excerpt:
      "De gemeente Veere heeft op 8 februari 2024 besloten een voorkeursrecht te vestigen op diverse percelen binnen de gemeente. Naar aanleiding hiervan hebben veel eigenaren aangegeven mogelijk te willen verkopen aan de gemeente. Bakker Rentmeesters heeft de opdracht om in die gevallen onafhankelijke taxaties uit te voeren. Inmiddels hebben op basis van deze taxaties al verschillende transacties plaatsgevonden en kunnen diverse woningbouwplannen worden gerealiseerd.",
  },
  {
    id: "3",
    slug: "project-nieuwe-waarden-alblasserwaard",
    title: "Project Nieuwe Waarden Alblasserwaard",
    excerpt:
      "Waterschap Rivierenland is bezig met de voorbereidingen voor de aanleg van een nieuw gemaal en een nieuw kanaal tussen het riviertje De Giessen en de Beneden Merwede. Het project heet 'Nieuwe Waarden Alblasserwaard'. De grondverwerving voor dit project is reeds opgestart door het waterschap. Bakker Rentmeesters adviseert op het gebied van grondzaken verschillende eigenaren en gebruikers die te maken krijgen met dit project.",
  },
  {
    id: "4",
    slug: "warmtenet-midden-en-west-brabant-wordt-duurzamer",
    title: "Warmtenet Midden- en West-Brabant wordt duurzamer",
    excerpt:
      "Bakker Rentmeesters is in opdracht van Ennatuurlijk betrokken bij de aanleg van de Brabantleiding (warmtenet) tussen Moerdijk en Geertruidenberg. Er dienen contracten te worden afgesloten met eigenaren en gebruikers voor het vestigen van zakelijk rechten.",
  },
  {
    id: "5",
    slug: "herstel-biodiversiteit-land-van-heusden-en-altena",
    title: "Herstel biodiversiteit land van Heusden en Altena",
    excerpt:
      "In het land van Heusden en Altena ligt een plan om het komend jaar zo'n 10 kilometer (30.000 stuks bomen/struiken) nieuwe heggen in het landschap te plaatsen. Onder meer Brabants Landschap en de gemeente Altena betalen hier aan mee, waardoor het voor de eigenaar géén kosten met zich meebrengt. Bakker Rentmeesters is betrokken bij dit project.",
  },
  {
    id: "6",
    slug: "grondverwerving-voor-reconstructie-van-wordenseweg-velddriel",
    title: "Grondverwerving voor reconstructie van Wordenseweg - Velddriel",
    excerpt:
      "Bakker Rentmeesters is in opdracht van de gemeente Maasdriel betrokken bij de grondverwerving voor de reconstructie van de Wordenseweg te Velddriel.",
  },
  {
    id: "7",
    slug: "zonnepark-amstelwijck-dordrecht",
    title: "Zonnepark Amstelwijck - Dordrecht",
    excerpt:
      "In opdracht van HVC is Bakker Rentmeesters betrokken geweest bij de ontwikkeling van zonnepark Amstelwijck te Dordrecht. Zo zijn onder meer werkzaamheden uitgevoerd mbt de vastlegging van de afspraken en zijn huurders ingepast in het plan.",
  },
  {
    id: "8",
    slug: "herinrichting-voormalige-ijzergieterij-en-woonarkenterrein-hardinxveld-giessendam",
    title: "Herinrichting voormalige ijzergieterij en woonarkenterrein Hardinxveld-Giessendam",
    excerpt:
      "Bakker Rentmeesters is bij dit project betrokken als intermediair tussen alle betrokken partijen om op het gebied van grondzaken (verkaveling, contracten etc) een goed resultaat te bereiken.",
  },
  {
    id: "9",
    slug: "sauna-eigen-thermen-resort-alphen-chaam",
    title: "Sauna Eigen Thermen Resort - Alphen Chaam",
    excerpt:
      "Op het gebied van ondermeer erfpacht is Bakker Rentmeesters bij dit project betrokken. Doel is om in 2022 tot realisatie over te gaan. Een project waar wellness en behoud van natuur hand in hand gaan.",
  },
  {
    id: "10",
    slug: "verbreding-a2-deil-vught",
    title: "Verbreding A2 (Deil-Vught)",
    excerpt:
      "Rijkswaterstaat is voornemens om tussen Deil en Vught de rijksweg A2 te verbreden. Door deze verbreding zouden ná uitvoering de files moeten afnemen. Bakker Rentmeesters treedt op voor eigenaren en gebruikers van vastgoed.",
  },
  {
    id: "11",
    slug: "samenwerking-met-solar-century",
    title: "Samenwerking met Solar Century",
    excerpt:
      "In opdracht van Solar Century is Bakker Rentmeesters actief in het vinden en aankopen/huren van gronden die geschikt zijn voor het realiseren van zonneparken. Voor het verkrijgen van planologische goedkeuring zet Bakker Rentmeesters zich ook in.",
  },
  {
    id: "12",
    slug: "samenwerking-met-ingenieursbureau-bwz",
    title: "Samenwerking met ingenieursbureau BWZ",
    excerpt:
      "Samen met ingenieursbureau BWZ zijn we doende met het realiseren van circa 60 hectare getijdennatuur in het waterlichaam Boven- en Beneden Merwede. Bakker Rentmeesters is verantwoordelijk voor het daadwerkelijk vinden van geschikte locaties en de verwerving hiervan.",
  },
  {
    id: "13",
    slug: "planschade-en-advies-randstad-380-kv",
    title: "Planschade en Advies Randstad 380 KV",
    excerpt:
      "Bakker Rentmeesters adviseert eigenaren en belanghebbenden die nadeel ondervinden van de (toekomstige) hoogspanningsverbinding Randstad 380 KV en begeleidt eigenaren bij planschade-aanvragen.",
  },
  {
    id: "14",
    slug: "grondverwerving-woningbouwlocaties-noord-brabant",
    title: "Grondverwerving woningbouwlocaties Noord-Brabant",
    excerpt:
      "Bakker Rentmeesters is in opdracht van de Ontwikkelingsmaatschappij Ruimte voor Ruimte betrokken bij de grondverwerving voor nieuwe woningbouwlocaties in de provincie Noord-Brabant.",
  },
  {
    id: "15",
    slug: "vestiging-zakelijk-recht-traject-aalst-zaltbommel",
    title: "Vestiging zakelijk recht traject Aalst-Zaltbommel",
    excerpt:
      "Bakker Rentmeesters is in opdracht van Waterschap Rivierenland betrokken bij de aanleg van een transportleiding tussen Aalst en Zaltbommel. Er dienen contracten te worden afgesloten met eigenaren en gebruikers voor het vestigen van zakelijk rechten.",
  },
  {
    id: "16",
    slug: "grondverwerving-fietspad-drimmelen-oud-drimmelen",
    title: "Grondverwerving fietspad Drimmelen-Oud Drimmelen",
    excerpt:
      "Bakker Rentmeesters is betrokken bij het aankopen van gronden voor verbreding van het recreatieve fietspad tussen Drimmelen en Oud Drimmelen.",
  },
  {
    id: "17",
    slug: "wijkevoort-tilburg",
    title: "Wijkevoort Tilburg",
    excerpt:
      "Wijkevoort is een bedrijventerrein dat de gemeente Tilburg bezig is te ontwikkelen. Bakker Rentmeesters is betrokken bij de grondverwerving voor dit project. Het plangebied grenst aan de luchtmachtbasis Gilze Rijen en de rijksweg A58.",
  },
  {
    id: "18",
    slug: "dijkversterking-gorinchem-waardenburg",
    title: "Dijkversterking Gorinchem-Waardenburg",
    excerpt:
      "Tussen Gorinchem en Waardenburg (Waaldijk) dient de bestaande dijk te worden versterkt. Hiervoor dient grondverwerving (bebouwd en onbebouwd) plaats te vinden. Bakker Rentmeesters is hierbij als adviseur van Waterschap Rivierenland betrokken.",
  },
  {
    id: "19",
    slug: "verbreding-n65-vught-haaren",
    title: "Verbreding N65 Vught-Haaren",
    excerpt:
      "Voor de verbreding van de N65 tussen Vught en Haaren dienen bebouwde- en onbebouwde onroerende zaken te worden aangekocht. Bakker Rentmeesters treedt op voor eigenaren en huurders die te maken krijgen met de plannen van Rijkswaterstaat.",
  },
  {
    id: "20",
    slug: "raming-grondverwerving-geluidsschermen",
    title: "Raming grondverwerving geluidsschermen",
    excerpt:
      "In opdracht van ingenieursbureau Movares maakt Bakker Rentmeesters een raming van de grondverwervingskosten ten behoeve van het plaatsen van geluidsschermen langs bestaande spoorlijnen. Het betreft hier circa 300 locaties door heel Nederland.",
  },
  {
    id: "21",
    slug: "beverpad",
    title: "Beverpad",
    excerpt:
      "Aanleg fietspad op de dijk langs de rivier de Amer (gemeente Drimmelen). Bakker Rentmeesters is betrokken bij de grondverwerving voor dit fietspad.",
  },
  {
    id: "22",
    slug: "bergsche-heide",
    title: "Bergsche Heide",
    excerpt:
      "Ontwikkeling van een landschapspark (onderdeel van Landschap met Allure en gelegen in de oksel van de A4 en de A58 te Bergen op Zoom) met natuurontwikkeling, woningbouw, golfbaan en enkele commerciële functies. Totale oppervlakte circa 470 hectare. Bakker Rentmeesters BV is betrokken bij de verwerving van de gronden en de herontwikkeling van dit gebied.",
  },
  {
    id: "23",
    slug: "verbreding-a27-hooipolder-houten",
    title: "Verbreding A27 Hooipolder-Houten",
    excerpt:
      "Rijkswaterstaat is voornemens om tussen Hooipolder en Houten de rijksweg A27 te verbreden. Door deze verbreding zouden ná uitvoering de files moeten afnemen. Naast de verbreding zullen er bij Houten, Hagestein, Gorinchem en Raamsdonksveer bestaande bruggen worden verbreed of nieuwe bruggen worden gerealiseerd. Bakker Rentmeesters treedt op voor eigenaren en gebruikers van vastgoed.",
  },
  {
    id: "24",
    slug: "spoorplan-vught",
    title: "Spoorplan Vught",
    excerpt:
      "Op 17 december 2015 hebben de bestuurders van het Rijk, provincie Noord-Brabant en de gemeente Vught gekozen voor de V3-variant met betrekking tot het verdiepte spoor in Vught. Als gevolg van deze plannen zullen er in totaal circa 30 woningen aangekocht moeten gaan worden. Bakker Rentmeesters adviseert diverse eigenaren bij deze ontwikkelingen.",
  },
  {
    id: "25",
    slug: "project-ring-utrecht",
    title: "Project Ring Utrecht",
    excerpt:
      "Rijkswaterstaat is voornemens om ter hoogte van de Ring Utrecht (A27/A12) een weguitbreiding te realiseren. Voor deze uitbreiding zijn gronden benodigd en dienen diverse opstallen (woningen, bedrijfsgebouwen e.d.) aangekocht te worden. Bakker Rentmeesters treedt op voor diverse eigenaren.",
  },
  {
    id: "26",
    slug: "aanleg-fietspad-tussen-velddriel-en-alem",
    title: "Aanleg fietspad tussen Velddriel en Alem",
    excerpt:
      "Op 6 juli 2015 is het voorlopig ontwerp van het vrijliggende fietspad tussen Velddriel en Alem gepresenteerd. Het nieuwe fietspad moet ten oosten van de Provincialeweg N831 komen te liggen. De komende maanden zal de grondverwerving van de provincie Gelderland een aanvang nemen. Bakker Rentmeesters kan deskundige bijstand verlenen voor grondeigenaren die met deze plannen geconfronteerd worden.",
  },
  {
    id: "27",
    slug: "advisering-randweg-zevenbergen",
    title: "Advisering Randweg Zevenbergen",
    excerpt:
      "De provincie Noord Brabant is voornemens om een randweg te realiseren ten noorden van Zevenbergen. Bakker Rentmeesters adviseert eigenaren en gebruikers die met deze plannen geconfronteerd worden.",
  },
  {
    id: "28",
    slug: "hoogspanningsverbinding-tennet-zuid-west-380-kv",
    title: "Hoogspanningsverbinding TenneT Zuid - West 380 KV",
    excerpt:
      "Bakker Rentmeesters adviseert eigenaren en belanghebbenden die nadeel ondervinden van de (toekomstige) hoogspanningsverbinding Zuid West 380 KV die door TenneT zal worden aangelegd als vervanging van de bestaande 150 KV verbinding. Het tracé tussen Borssele en Roosendaal ligt inmiddels vast.",
  },
  {
    id: "29",
    slug: "taxatie-en-adviesdiensten-stichting-oosterhoutse-golfclub",
    title: "Taxatie- en adviesdiensten Stichting Oosterhoutse Golfclub",
    excerpt:
      "Voor de Stichting Oosterhoutse Golfclub heeft Bakker diverse taxatie- en adviesdiensten verricht voor de uitbreiding van deze golfbaan.",
  },
  {
    id: "30",
    slug: "planschade-ruimte-voor-de-rivier",
    title: "Planschade Ruimte voor de Rivier",
    excerpt:
      "Bakker Rentmeesters maakt onderdeel uit van een onafhankelijke planschade-commissie die mogelijke planschade beoordeelt in het kader van het project Ruimte voor de Rivier.",
  },
  {
    id: "31",
    slug: "advies-herontwikkeling-en-herbestemming",
    title: "Advies herontwikkeling en herbestemming",
    excerpt:
      "Bakker Rentmeesters krijgt regelmatig aanvragen voor advies met betrekking tot de herontwikkeling of herbestemming van diverse locaties. Zo adviseert Bakker Rentmeesters de hervormde gemeente in Berkel en Rodenrijs bij de herontwikkeling van haar kerkgebouw naar een woonbestemming.",
  },
  {
    id: "32",
    slug: "grondverwerving-watergang-nieuwendijk",
    title: "Grondverwerving watergang Nieuwendijk",
    excerpt:
      "In opdracht van het waterschap Rivierenland is Bakker Rentmeesters betrokken bij de grondverwerving voor de realisatie van een watergang in Nieuwendijk ten behoeve van de waterberging.",
  },
  {
    id: "33",
    slug: "advisering-bij-grondverwerving-stationsgebied-driebergen-zeist",
    title: "Advisering bij grondverwerving Stationsgebied Driebergen-Zeist",
    excerpt:
      "ProRail werkt aan het reconstrueren van het stationsgebied Driebergen-Zeist. Voor de aanpassing van het stationsgebied dienen gronden van aanliggende eigenaren te worden aangekocht. Bakker Rentmeesters adviseert eigenaren die hiermee te maken krijgen.",
  },
  {
    id: "34",
    slug: "advisering-dijkversterking-capelle-aan-den-ijssel",
    title: "Advisering dijkversterking Capelle aan den IJssel",
    excerpt:
      "Bakker Rentmeesters adviseert eigenaren in Capelle aan den IJssel bij de grondverwerving door Hoogheemraadschap Schieland en Krimpenerwaard.",
  },
  {
    id: "35",
    slug: "nieuwbouw-woningen-ottoland",
    title: "Nieuwbouw woningen Ottoland",
    excerpt: "Neem contact op met ons kantoor voor het actuele aanbod.",
  },
  {
    id: "36",
    slug: "advisering-haven-boven-hardinxveld",
    title: "Advisering Haven Boven Hardinxveld",
    excerpt:
      "Bakker Rentmeesters is in opdracht van de gemeente Hardinxveld-Giessendam betrokken bij de reconstructie van de haven van Boven-Hardinxveld.",
  },
  {
    id: "37",
    slug: "natuurschoonwet-rangschikken-landgoederen",
    title: "Natuurschoonwet: rangschikken landgoederen",
    excerpt:
      "Bakker Rentmeesters heeft verschillende landgoederen gerangschikt onder de Natuurschoonwet (NSW) en draagt zorg voor het beheer.",
  },
  {
    id: "38",
    slug: "ontwikkeling-bloemendalerpolder-muiden-weesp",
    title: "Ontwikkeling Bloemendalerpolder (Muiden-Weesp)",
    excerpt:
      "Bakker Rentmeesters adviseert grondeigenaren bij verkoop aan het consortium; dit consortium van bedrijven wil de komende jaren deze polder ontwikkelen tot woningbouwlocatie met natuur en recreatie.",
  },
  {
    id: "39",
    slug: "aanleg-provinciale-en-rijkswegen",
    title: "Aanleg provinciale- en rijkswegen",
    excerpt:
      "Bakker Rentmeesters adviseert eigenaren van gronden, woningen en bedrijven die te maken krijgen met (grond) verwerving. Bij een eventueel onteigeningstraject heeft Bakker Rentmeesters de kennis in huis om eigenaren te adviseren.",
  },
  {
    id: "40",
    slug: "schadeschap-schiphol",
    title: "Schadeschap Schiphol",
    excerpt:
      "Bakker Rentmeesters maakt onderdeel uit van onafhankelijke planschadecommissies bij diverse gemeentes en maakt onderdeel uit van onafhankelijke schadecommissies die de gevolgen van de uitbreiding van Schiphol moeten beoordelen.",
  },
  {
    id: "41",
    slug: "grondverwerving-ecologische-hoofdstructuur-ehs",
    title: "Grondverwerving Ecologische Hoofdstructuur (EHS)",
    excerpt:
      "In opdracht van Dienst Landelijk Gebied en Waterschap Brabantse Delta draagt Bakker Rentmeesters zorg voor de verwerving van gronden ten behoeve van de realisatie van de Ecologische Hoofd Structuur (EHS).",
  },
  {
    id: "42",
    slug: "gemeente-aalburg",
    title: "Gemeente Aalburg",
    excerpt:
      "Bakker Rentmeesters is betrokken bij de plannen rondom de herinrichting van de Veense Plassen en de verplaatsing van de voetbalvereniging Achilles Veen.",
  },
  {
    id: "43",
    slug: "advisering-bij-grondverwerving-fietspaden",
    title: "Advisering bij grondverwerving fietspaden",
    excerpt:
      "In opdracht van Waterschap Rivierenland draagt Bakker Rentmeesters zorg voor de grondverwerving ten behoeve van de aanleg van diverse fietspaden in de Alblasserwaard.",
  },
  {
    id: "44",
    slug: "onteigening-vught-tbv-verbreding-spoor",
    title: "Onteigening Vught t.b.v. verbreding spoor",
    excerpt:
      "Op 17 december 2015 is een keuze gemaakt voor het spoortracé V3. Voor woningeigenaren wordt dan eindelijk duidelijk of hun woning al dan niet onteigend wordt. Bakker Rentmeesters kan u zowel in het voortraject bij de bezwaar- en beroepsprocedure als bij een eventuele onteigening adviseren.",
  },
  {
    id: "45",
    slug: "advies-bij-onteigening-en-kavelruil-randweg-boekel",
    title: "Advies bij onteigening en kavelruil Randweg Boekel",
    excerpt:
      "De gemeente Boekel gaat het bestemmingsplan voorbereiden om de randweg rondom Boekel mogelijk te maken. Ook wil de gemeente een kavelruilproject opstarten om grondeigenaren te compenseren die hun eigendommen moeten afstaan voor de aanleg van deze weg.",
  },
  {
    id: "46",
    slug: "groen-ontwikkelfonds-brabant",
    title: "Groen Ontwikkelfonds Brabant",
    excerpt:
      "Het Groen Ontwikkelfonds Brabant (GOB) is een fonds die vanuit de Provincie Brabant onder voorwaarden gelden kan verstrekken indien een functiewijziging plaatsvindt naar natuur. Bakker Rentmeesters kan namens ondernemers en grondeigenaren bij het GOB de haalbaarheid van een subsidieaanvraag voor u in kaart brengen.",
  },
  {
    id: "47",
    slug: "onteigening-a27",
    title: "Onteigening A27",
    excerpt:
      "Bakker Rentmeesters treedt op voor eigenaren die te maken krijgen met onteigening. Wij behartigen de zaken van verschillende grondeigenaren bij de onteigening en zorgen voor begeleiding tijdens het gehele proces.",
  },
]

export const PROJECTEN_TOTAL_PAGES = Math.ceil(
  projectenIndex.length / ITEMS_PER_PAGE
)

export function getProjectenPage(page: number): ProjectItem[] {
  const start = (page - 1) * ITEMS_PER_PAGE
  return projectenIndex.slice(start, start + ITEMS_PER_PAGE)
}

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projectenIndex.find((p) => p.slug === slug)
}
