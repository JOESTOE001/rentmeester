/** Linkcategorie (gescraped van rentmeester.nl/links). */
export interface LinkCategorie {
  title: string
  items: { name: string; url: string; description: string }[]
}

export const linksCategorieen: LinkCategorie[] = [
  {
    title: "Beroepsgerelateerd",
    items: [
      {
        name: "NVR",
        url: "https://www.rentmeesternvr.nl/",
        description:
          "Nederlandse Vereniging van Rentmeesters (NVR) – De beroepsorganisatie die de kwaliteit en integriteit van rentmeesters waarborgt. Bakker Rentmeesters is aangesloten bij de NVR.",
      },
      {
        name: "Vastgoedcert",
        url: "https://www.vastgoedcert.nl/",
        description: "Register van makelaars in onroerende zaken.",
      },
    ],
  },
  {
    title: "Overheidsorganisaties",
    items: [
      {
        name: "Waterschap Brabantse Delta",
        url: "https://www.brabantsedelta.nl/",
        description:
          "Waterschap Brabantse Delta zorgt voor een omgeving waarin iedereen rondom water veilig kan wonen, werken en genieten.",
      },
      {
        name: "RVO",
        url: "https://www.rvo.nl/",
        description:
          "Samen werken aan duurzame welvaart, nationaal en internationaal, dat is Rijksdienst voor Ondernemend Nederland.",
      },
      {
        name: "Rijksvastgoedbedrijf",
        url: "https://www.rijksvastgoedbedrijf.nl/",
        description:
          "Het Rijksvastgoedbedrijf is met zo'n 83.000 hectare grond en bijna 12 miljoen vierkante meter aan gebouwen het grootste vastgoedbedrijf van Nederland.",
      },
      {
        name: "Waterschap Rivierenland",
        url: "https://www.waterschaprivierenland.nl/",
        description:
          "Waterschap Rivierenland zorgt voor waterkwaliteit en droge voeten in het rivierengebied. Bakker Rentmeesters werkt als adviseur grondzaken samen met dit Waterschap.",
      },
      {
        name: "Burgerlijk Wetboek",
        url: "https://wetten.overheid.nl/",
        description: "",
      },
      {
        name: "Schadeschap Schiphol",
        url: "https://organisaties.overheid.nl/24964774/Gemeenschappelijke_regeling_Schadeschap_Luchthaven_Schiphol/",
        description:
          "Schadeschap Schiphol, de schadecommissie die de gevolgen van de uitbreiding van Schiphol beoordeelt. Bakker Rentmeesters maakt onderdeel uit van deze commissie.",
      },
    ],
  },
  {
    title: "Kastelen, buitenplaatsen en landgoederen",
    items: [
      {
        name: "Grondbezit.nl",
        url: "https://www.grondbezit.nl/",
        description:
          "De Federatie Particulier Grondbezit is dé vereniging voor particuliere eigenaren van grond in Nederland.",
      },
      {
        name: "Kastelen.nl",
        url: "https://www.kastelen.nl/",
        description:
          "De Nederlandse Kastelenstichting is onafhankelijk pleitbezorger voor kastelen en buitenplaatsen.",
      },
      {
        name: "Landgoederen.net",
        url: "https://www.landgoederen.net/",
        description:
          "Het online startpunt voor alle informatie over nieuwe landgoederen.",
      },
      {
        name: "SKBL",
        url: "https://www.skbl.nl/",
        description:
          "Website van de stichting kastelen, buitenplaatsen en landgoederen.",
      },
    ],
  },
  {
    title: "Agrarisch nieuws",
    items: [
      {
        name: "Boerderij",
        url: "https://www.boerderij.nl/",
        description:
          "Over veehouderij, mechanisatie, akkerbouw en het boerenleven.",
      },
      {
        name: "Melkvee",
        url: "https://www.melkvee.nl/",
        description: "Nieuws en kennis voor de melkveehouder.",
      },
      {
        name: "Nieuwe Oogst",
        url: "https://www.nieuweoogst.nl/",
        description:
          "Het laatste nieuws over veehouderij, akkerbouw, tuinbouw en regio.",
      },
      {
        name: "Stal en Akker",
        url: "https://www.stal-en-akker.nl/",
        description: "Hét onafhankelijke landbouwvakblad voor Nederland.",
      },
    ],
  },
  {
    title: "Vraag en aanbod",
    items: [
      {
        name: "Landeigenaar.nl",
        url: "https://landeigenaar.nl/",
        description:
          "Al het aanbod agrarische grond op één plek.",
      },
      {
        name: "Biedboek.nl",
        url: "https://www.biedboek.nl/",
        description: "Website van het Rijksvastgoedbedrijf.",
      },
      {
        name: "Pachtgrond.nu",
        url: "https://www.pachtgrond.nu/",
        description:
          "Website voor het pachten en verpachten van percelen door heel Nederland.",
      },
      {
        name: "Pachtportaal.nl",
        url: "https://www.pachtportaal.nl/",
        description:
          "Helpt u bij het publiceren van uw percelen, waar pachters zich op in kunnen schrijven.",
      },
      {
        name: "Ruimte voor Ruimte",
        url: "https://www.ruimtevoorruimte.nl/",
        description:
          "Ruimte voor Ruimte biedt bouwkavels aan die zijn vrijgekomen dankzij de zogeheten Ruimte-voor-Ruimte-regeling van het Rijk.",
      },
    ],
  },
]
