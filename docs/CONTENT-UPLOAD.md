# Waar uploaden: teksten en afbeeldingen

Elk **perceel** heeft een eigen bestand. Daardoor blijft het overzichtelijk en kun je opmaak (zoals **vet** en *cursief*) gebruiken.

---

## 1. Eén .md bestand per perceel

**Map:** `content/aanbod/`

- Elk perceel heeft **één bestand**: `[slug].md`
- De **bestandsnaam** moet exact gelijk zijn aan het **slug** uit het indexbestand (zie hieronder).
- Voorbeelden:
  - `content/aanbod/vrijgelegen-woonboerderij-met-royale-bijgebouwen-in-bantega.md`
  - `content/aanbod/landelijk-wonen-in-de-groeve-nabij-het-zuidlaardermeer.md`

**Opbouw van een .md bestand:**

1. **Frontmatter** (tussen `---`) met: titel, korte tekst, status, optioneel afbeelding en extra.
2. **Body** daaronder: uitgebreide tekst met **Markdown** en **HTML** voor opmaak.

**Voorbeeld:**

```md
---
title: "Vrijgelegen woonboerderij met royale bijgebouwen in Bantega"
excerpt: "Deze boerderij staat op een prachtige, landelijke locatie aan het einde van een doodlopende weg."
status: te-koop
image: /images/aanbod/vrijgelegen-woonboerderij-bantega.jpg
extra: "Provincie: Friesland"
---

Deze boerderij staat op een <strong>prachtige, landelijke locatie</strong> aan het einde van een doodlopende weg.

Het hoofdgebouw is een karakteristieke woonboerderij met **royale woonruimte**. Daarnaast zijn er diverse bijgebouwen.
```

---

## 2. Frontmatter (bovenin het .md bestand)

| Veld       | Verplicht | Gebruik |
|------------|-----------|--------|
| `title`    | Ja        | Hoofdtitel (overzicht + detailpagina) |
| `excerpt`  | Ja        | Korte omschrijving (overzicht + boven aan detailpagina) |
| `status`   | Ja        | `te-koop`, `verkocht` of `verkocht-onder-voorbehoud` |
| `image`    | Nee       | Pad naar afbeelding, bijv. `/images/aanbod/bantega.jpg` → ook hoofdafbeelding op detailpagina |
| `extra`    | Nee       | Extra regel, bijv. "Provincie: Zuid-Holland" |

---

## 3. Body: uitgebreide tekst met opmaak

Onder de frontmatter (na de tweede `---`) komt de **uitgebreide tekst** van de detailpagina.

- **Markdown:** `**vet**`, `*cursief*`, nieuwe regel = nieuwe alinea.
- **HTML:** mag ook, bijv. `<strong>vet</strong>`, `<em>cursief</em>`.

Voorbeelden:

- `**belangrijke term**` of `<strong>belangrijke term</strong>` → vet
- `*nadruk*` of `<em>nadruk</em>` → cursief
- Gewoon een lege regel tussen twee alinea’s voor een nieuwe paragraaf.

---

## 4. Index: volgorde en welke percelen bestaan

**Bestand:** `data/aanbod.ts`

Hier staat alleen nog een **index**: welke percelen er zijn, in welke **volgorde**, en welke **status**. Geen titels of teksten meer; die staan in de .md bestanden.

Per regel vul je in:

- `id`: uniek nummer (bijv. `"1"`, `"2"`)
- `slug`: exact de bestandsnaam van het .md bestand **zonder** `.md` (bijv. `vrijgelegen-woonboerderij-met-royale-bijgebouwen-in-bantega`)
- `status`: `te-koop`, `verkocht` of `verkocht-onder-voorbehoud`

**Nieuw perceel toevoegen:**

1. In `data/aanbod.ts` een regel toevoegen met een nieuw `id`, `slug` en `status`.
2. In `content/aanbod/` een bestand `[slug].md` aanmaken met frontmatter en eventueel body.

---

## 5. Afbeeldingen

**Map:** `public/images/aanbod/`

- Plaats hier de afbeeldingen (bijv. JPG of PNG).
- In het .md bestand van het perceel zet je in de frontmatter:  
  `image: /images/aanbod/naam-van-bestand.jpg`

Dezelfde afbeelding wordt gebruikt op het **overzicht** (aanbodlijst) en als **hoofdafbeelding** op de **detailpagina**.

---

## 6. Overzicht

| Wat                    | Waar |
|------------------------|------|
| Volgorde + status      | `data/aanbod.ts` (alleen index) |
| Tekst + opmaak per perceel | `content/aanbod/[slug].md` (frontmatter + body) |
| Afbeeldingen           | `public/images/aanbod/` + veld `image` in de frontmatter van het .md bestand |

- **Overzicht** (`/aanbod`): lijst uit index; titel, excerpt en afbeelding uit het .md bestand.
- **Detailpagina** (`/aanbod/[slug]`): hoofdafbeelding, titel, excerpt en body (met opmaak) uit het .md bestand.

---

## 7. Scraper: inhoud en afbeeldingen van rentmeester.nl ophalen

Om alle **tekst van de detailpagina’s** en **afbeeldingen** van [rentmeester.nl](https://www.rentmeester.nl/aanbod) in één keer op te halen:

```bash
npm run scrape-aanbod
```

Het script:

- Haalt voor elk perceel in `content/aanbod/` de bijbehorende detailpagina op van rentmeester.nl.
- Haalt de hoofdtekst (body) van de pagina en schrijft die in het .md bestand.
- Downloadt afbeeldingen uit de content en slaat ze op in `public/images/aanbod/` (max. 15 per perceel).
- Zet het veld `image` in de frontmatter op de eerste gedownloade afbeelding als er nog geen `image` stond.

**Let op:** Het script doet meerdere requests naar rentmeester.nl; door de ingebouwde pauzes duurt een volledige run enkele minuten. Sommige percelen kunnen een andere URL hebben op de bronwebsite en dan als "niet gevonden" worden gelogd — die kun je handmatig bijwerken.
