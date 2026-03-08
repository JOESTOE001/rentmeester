export type AanbodStatus = "te-koop" | "verkocht" | "verkocht-onder-voorbehoud"

/** Alleen volgorde en status; alle teksten en afbeelding komen uit content/aanbod/[slug].md */
export interface AanbodIndexItem {
  id: string
  slug: string
  status: AanbodStatus
}

/** Volgorde van aanbod op de overzichtspagina. Voeg hier alleen (id, slug, status) toe. */
export const aanbodIndex: AanbodIndexItem[] = [
  { id: "1", slug: "vrijgelegen-woonboerderij-met-royale-bijgebouwen-in-bantega", status: "te-koop" },
  { id: "2", slug: "landelijk-wonen-in-de-groeve-nabij-het-zuidlaardermeer", status: "te-koop" },
  { id: "3", slug: "ruime-goed-onderhouden-jaren-30-woning-in-kollumersweach", status: "te-koop" },
  { id: "4", slug: "tiny-house-dat-compact-oogt-maar-groots-aanvoelt-in-warfhuizen", status: "te-koop" },
  { id: "5", slug: "sliedrecht-sdt00-l-1668", status: "verkocht" },
  { id: "6", slug: "sliedrecht-sdt00-l-260", status: "verkocht" },
  { id: "7", slug: "gevarieerd-bosperceel-in-boswachterij-leersum", status: "te-koop" },
  { id: "8", slug: "bouwgrond-op-schiereiland-in-oost-bohemen", status: "te-koop" },
  { id: "9", slug: "beerten-2-hilvarenbeek", status: "verkocht" },
  { id: "10", slug: "drie-fraaie-bospercelen-tussen-didam-en-beek", status: "verkocht" },
  { id: "11", slug: "geniet-van-een-actieve-natuurdag-op-uw-eigen-bosperceel-asten", status: "verkocht" },
  { id: "12", slug: "sfeervolle-woonboerderij-net-buiten-hilvarenbeek", status: "verkocht" },
  { id: "13", slug: "woonboerderij-met-veel-ruimte-in-hurdegaryp", status: "verkocht-onder-voorbehoud" },
  { id: "14", slug: "half-vrijstaande-royale-boerderijwoning-in-noordlaren", status: "verkocht" },
  { id: "15", slug: "woonboerderij-met-diverse-bijgebouwen-op-perceel-van-maar-liefst-9915-m2-in-annen", status: "verkocht" },
  // Pagina 2 (start=15)
  { id: "16", slug: "vrijstaande-woning-op-ruim-perceel-in-annen", status: "te-koop" },
  { id: "17", slug: "bouwkavel-voor-vrijstaande-woning-op-fraaie-locatie-in-gasselternijveen", status: "te-koop" },
  { id: "18", slug: "vrijstaande-recreatiewoning-in-villapark-akenveen-tynaarlo", status: "verkocht" },
  { id: "19", slug: "groene-oase-nabij-natuurgebied-het-geuldal", status: "verkocht" },
  { id: "20", slug: "kruiden-en-faunarijke-graslanden-nabij-het-dorpje-glane", status: "te-koop" },
  { id: "21", slug: "uitstekend-onderhouden-vrijstaande-woning-in-annen", status: "verkocht" },
  { id: "22", slug: "droomplek-met-vrijheid-en-comfort-in-midwolda", status: "verkocht" },
  { id: "23", slug: "perceel-van-4600-m2-met-omgevingsvergunning-voor-een-vrijstaande-woning", status: "verkocht" },
  { id: "24", slug: "rinsumageast-bouwkavel-van-ca-23597-m2-aan-het-water", status: "verkocht" },
  { id: "25", slug: "geniet-van-het-buitenleven-in-deze-charmante-woonboerderij-in-borgercompagnie", status: "verkocht" },
  { id: "26", slug: "instapklare-gezinswoning-in-annen", status: "verkocht" },
  { id: "27", slug: "prachtige-bouwkavel-zuidzijde-met-vrij-uitzicht-in-vries", status: "te-koop" },
  { id: "28", slug: "natuurgebied-gelegen-naast-fort-bij-nigtevegt", status: "te-koop" },
  { id: "29", slug: "bungalow-op-een-bijzondere-plek-in-het-buitengebied-van-eext", status: "verkocht" },
  { id: "30", slug: "woonboerderij-op-ruim-erf-3395-m2-in-wijster", status: "verkocht" },
  // Pagina 3 (start=30)
  { id: "31", slug: "perceel-grasland-sliedrecht", status: "verkocht-onder-voorbehoud" },
  { id: "32", slug: "akkerbouwbedrijf-op-een-totale-perceeloppervlakte-van-147500-ha", status: "verkocht" },
  { id: "33", slug: "een-inspirerende-omgeving-voor-uw-voedselbos-tussen-maasbree-baarlo-en-helden", status: "verkocht" },
  { id: "34", slug: "groen-pareltje-aan-de-voet-van-de-brabantse-wal", status: "te-koop" },
  { id: "35", slug: "mooie-locatie-voor-een-paardenhouderij-nabij-peelbergen-equestrian-centre", status: "te-koop" },
  { id: "36", slug: "halsteren-c-738-halsteren-perceel-bosnatuur", status: "verkocht" },
  { id: "37", slug: "rithsestraat-breda", status: "verkocht" },
  { id: "38", slug: "molendijk-11-zwartewaal", status: "verkocht" },
  { id: "39", slug: "rijksstraatweg-16-vierpolders", status: "verkocht" },
  { id: "40", slug: "kortedijkje-7-rockanje", status: "verkocht" },
  { id: "41", slug: "bosperceel-kemperbergerweg-arnhem", status: "verkocht" },
  { id: "42", slug: "bosperceel-met-veel-natuurlijke-verjonging-eefde", status: "verkocht" },
  { id: "43", slug: "perceel-woudrichem-h-2275", status: "verkocht" },
  { id: "44", slug: "molensteeg-28-brakel", status: "verkocht" },
  { id: "45", slug: "edammerdijkje-28-middelie", status: "verkocht" },
  // Pagina 4 (start=45)
  { id: "46", slug: "bijzondere-buitenkans-landgoed-in-zuid-nederland", status: "te-koop" },
  { id: "47", slug: "cultuurgrond-gelegen-aan-de-beerseweg-mill", status: "verkocht" },
  { id: "48", slug: "bosperceel-meijel-limburg", status: "verkocht" },
  { id: "49", slug: "natuurgebied-drunen", status: "verkocht" },
  { id: "50", slug: "natuurgebied-dominus-silva-nuenen", status: "verkocht" },
  { id: "51", slug: "hoofdstraat-6-genderen", status: "verkocht" },
  { id: "52", slug: "landgoed-alvershool-nuenen", status: "verkocht" },
  { id: "53", slug: "duinweg-27-drunen", status: "verkocht" },
  { id: "54", slug: "voet-of-kraagweg-20-rockanje", status: "verkocht" },
  { id: "55", slug: "industrieweg-1a-giessen", status: "verkocht" },
  { id: "56", slug: "bremberg-2-poppel-belgie", status: "verkocht" },
  { id: "57", slug: "akkerstraat-19-wouwse-plantage", status: "verkocht" },
  { id: "58", slug: "middelstraat-2a-de-moer", status: "verkocht" },
  { id: "59", slug: "perceel-heukelum-d-324", status: "verkocht" },
  { id: "60", slug: "brede-haven-60-den-bosch", status: "verkocht" },
  // Pagina 5 (start=60)
  { id: "61", slug: "perceel-cultuurgrond-te-eethen-noord-brabant", status: "verkocht" },
  { id: "62", slug: "fraaie-monumentale-woonboerderij", status: "verkocht" },
]

const ITEMS_PER_PAGE = 5
export const TOTAL_PAGES = Math.ceil(aanbodIndex.length / ITEMS_PER_PAGE)

export function getAanbodPageIndex(page: number): AanbodIndexItem[] {
  const start = (page - 1) * ITEMS_PER_PAGE
  return aanbodIndex.slice(start, start + ITEMS_PER_PAGE)
}

export function getAanbodIndexBySlug(slug: string): AanbodIndexItem | undefined {
  return aanbodIndex.find((item) => item.slug === slug)
}
