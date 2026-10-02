# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

A static website for the tabletop RPG world **Meruria**, deployed to `meruria.de` via GitHub Pages. The site is written in German and documents the world's factions, races, classes, and deities.

The site is built with **Vite** (multi-page, every `.html` file is an entry) and deployed by a GitHub Actions workflow (`.github/workflows/deploy.yml`) that runs `npm run build` and publishes `dist/` to GitHub Pages. React, ReactDOM and Supabase stay global vendor scripts in `assets/scripts/vendor/` (no Babel in the browser); JSX is compiled at build time to `React.createElement`.

## Architecture

Pages live in topic folders; the folder and file names are the public URLs (lowercase, no umlauts or spaces):

| Folder | Content |
|---|---|
| `/` | `index.html` (home), `impressum.html` |
| `spielerhandbuch/` | `index` (hub), `informationen`, `vorgeschichte`, `realismus`, `sammeln-und-handwerk`, `schutzherren`, `rezepte`, `rezeptkodex` |
| `charaktererstellung/` | `index` (hub), `neuer-charakter`, `rassen`, `rassen-detail?rasse=<Name>`, `klassen`, `talente`, `hintergruende`, `zauber`, `ausruestung` |
| `enzyklopaedie/` | `index` (hub), `gottheiten`, `galerie`, `fische`, `gebaeude` |
| `divisionen/` | `index` (overview of the eight divisions), `kuratoren`, `sturmritter`, `sentinels`, `friedenshueter`, `outfitters`, `pathfinders`, `quellensucher`, `bergungsgarde` |
| `charaktere/` | `index` (hub), `mein-charakter`, `spielercharaktere`, `nsc`, `steckbrief` |
| `spiel/` | `kollektikon`, `karte`, `kalender`, `kalender-interaktiv`, `missionsterminal`, `rekrutierung` |
| `dm/` | DM-only pages (access is checked by role, not by path): `monster`, `ressourcen`, `tarot`, `kampfsimulation`, `missionen`, `nsc-verwaltung`, `charakterverwaltung`, `kartenmanagement`, `kolonisierung-und-bau`, `kollektikon`, `rekrutierungspreise`, `rezeptverwaltung`, `segen-und-flueche` |

Each page consists of:
- `<folder>/<name>.html` with `<base href="/">` (so `assets/...` works from every folder), `<link>` tags for CSS from `assets/styles/global/` and `assets/styles/pages/<folder>/<name>.css` (kept unbundled and in written order), classic `<script>` tags for vendor libs and data files, and **one** `<script type="module" src="/src/pages/<folder>/<name>.jsx">`
- a page entry `src/pages/<folder>/<name>.jsx` that imports the shared components it needs (`import '../../components/nav.jsx'`) and contains the page's React app
- shared components in `src/components/*.jsx`, each registering itself on `window` (`window.SiteNav`, …); page-specific helper files live in `src/pages/parts/`

Pages that were compiled earlier by the old `compile-jsx` tool contain `React.createElement(...)` calls instead of JSX in their entry file; new code can use JSX freely.

All eight division pages share one entry, `src/pages/divisionen/division.jsx`: each `divisionen/<name>.html` sets `<body data-division="<id>">` and the per-division colours come from `DIVISION_THEMES` in that file (add a division = add a theme entry).

`rassen-detail.html?rasse=<Name>` is one data-driven page for every race (content per race in `assets/scripts/data/rassen/<slug>.js`, index in `rassen-detail-index.js`; optional fields: `lebensraum`, `beziehungenIntro`, `namenSection` incl. `type: 'prose'`, `radar.beschreibung`).

`TWEAK_DEFAULTS` in each page holds fixed design parameters like particle visibility and header height.

**Old URLs** (before the move into folders, e.g. `/Klassen.html`) keep working: `src/legacy-redirects.json` lists every old path, and the build writes small redirect pages for them into `dist/`. When you move or rename a page, add its old path there.

**Navigation** is defined in the `NAV` array inside `src/components/nav.jsx` and shared across all pages via `window.SiteNav`.

## Database security (Supabase)

Access is enforced by Row Level Security, not by the client-side role checks (`window.SITE_USER?.role`), which only hide UI. Rules for new tables/functions:
- every table: `ENABLE ROW LEVEL SECURITY` plus explicit policies; players only get what their policy allows, DM rules use `public.is_dm()`
- `SECURITY DEFINER` functions must check `public.is_dm()` (or `auth.uid()`) themselves and set `SET search_path = public, pg_temp`
- never rely on `WITH CHECK`-less UPDATE policies for tables with privileged columns: restrict columns with `GRANT UPDATE (col)` or a guard trigger (see `profiles`, `characters` in `039_security_hardening.sql`)
- roll tokens are only redeemed through `check_roll_token` / `redeem_roll_token` (players cannot read the token table)
- known gap: `nscs` rows that are `visible` are fully readable by players; the per-field unlock system (`nsc_unlocks`, `field_visibility`) hides secrets only in the UI

## Shared components (`src/components/`)

| File | Exports | Purpose |
|---|---|---|
| `nav.jsx` | `window.SiteNav` | Sticky nav bar with dropdown menus and dark/light mode toggle |
| `site-gate.jsx` | `window.SiteGate` | Site-wide login gate (Supabase e-mail/password, see Authentication) |
| `particle-field.jsx` | `window.ParticleField` | Animated background particles |
| `shared-helpers.jsx` | `window.hexPoints`, `window.useScrollReveal` | Helpers shared by the hub/overview pages that used identical copies |
| `filter-utils.jsx` | `window.FilterGroup`, `window.XBtn`, … | Filter UI primitives used by /dm/monster.html |

### Authentication

`site-gate.jsx` wraps every page in `<SiteGate>`: a Supabase e-mail/password login (`window._sb`, created in `assets/scripts/supabase-client.js`). The session lives in Supabase's own `localStorage` entry; after login `window.SITE_USER = { id, email, role }` is set. Pages render `<SiteGate><App /></SiteGate>`. The Monster page has no extra gate any more.

### Dark / light mode

`assets/scripts/theme-init.js` (classic script in every page's `<head>`) sets the theme before first paint to avoid a flash:
```js
document.documentElement.dataset.theme = (localStorage.getItem('theme') === 'light') ? 'light' : 'dark';
```
The `ThemeToggle` component (☀/☽) in `SiteNav` toggles `data-theme` on `<html>` and persists to `localStorage`. CSS variables in `base.css` handle all color switching under `[data-theme="light"]`.

## Asset structure

```
assets/
├── images/
│   ├── insignia/      — faction insignia images
│   ├── races/         — race artwork
│   └── monster/
│       ├── monsterhandbuch/   — D&D 5e Monster Manual (one PNG per monster)
│       ├── foliant/           — Mordenkainen's Tome of Foes
│       ├── drakkenheim/       — Dungeons of Drakkenheim
│       ├── almanach/          — Monsters of the Multiverse
│       ├── floral-dragons/    — Floral Dragons
│       ├── ruhm-der-riesen/   — Bigby Presents: Glory of the Giants
│       ├── schatzkammer/      — Fizban's Treasury of Dragons
│       ├── flee-mortals/      — Flee, Mortals! (MCDM Productions)
│       └── sonstige/          — Sammelort für nicht-zusammenhängende Einzelmonster
├── scripts/
│   ├── shared/        — plain classic scripts used by several pages (kollektikon-bar, nsc-statblock, rekrutierungsrechner)
│   ├── data/
│   │   ├── monster-data.js      — aggregator: merges all sources alphabetically → window.MONSTER_DATA
│   │   ├── monster/
│   │   │   ├── monsterhandbuch-data.js        — 427 monsters → window.MONSTER_DATA_MONSTERHANDBUCH
│   │   │   ├── foliant-der-feinde-data.js     — 139 monsters → window.MONSTER_DATA_FOLIANT_DER_FEINDE
│   │   │   ├── drakkenheim-data.js            — 166 monsters → window.MONSTER_DATA_DRAKKENHEIM
│   │   │   ├── almanach-der-monster-data.js   — 124 monsters → window.MONSTER_DATA_ALMANACH_DER_MONSTER
│   │   │   ├── floral-dragons-data.js         —  30 monsters → window.MONSTER_DATA_FLORAL_DRAGONS
│   │   │   ├── ruhm-der-riesen-data.js        —  71 monsters → window.MONSTER_DATA_RUHM_DER_RIESEN
│   │   │   ├── schatzkammer-der-drachen-data.js — 70 monsters → window.MONSTER_DATA_SCHATZKAMMER_DER_DRACHEN
│   │   │   ├── flee-mortals-data.js           —   Flee, Mortals! (MCDM)  → window.MONSTER_DATA_FLEE_MORTALS
│   │   │   └── sonstige-data.js               —   Sammelquelle für vereinzelte Monster → window.MONSTER_DATA_SONSTIGE
│   │   ├── rassen-data.js, klassen-data.js, …  — other page data
│   │   └── monster-data.js      — also holds window.UNTERART_LORE
│   └── vendor/        — React, ReactDOM, Supabase, image-slot
└── styles/
    ├── global/
    │   ├── base.css       — resets, CSS variables (dark + light theme), scroll-reveal, shared classes
    │   ├── division.css   — structural classes shared by all eight division pages
    │   └── fonts.css      — @font-face declarations
    └── pages/             — per-page stylesheets, mirroring the page paths (pages/dm/monster.css, pages/divisionen/sturmritter.css, …)
```

## Styling approach

Static layout and typography are in CSS files. Dynamic styles — those that depend on accent color, hover/tilt state, computed values, or tweaks — remain as JSX `style={{ }}` objects. Nav colors use CSS variables (`var(--nav-bg)` etc.) so the dark/light toggle works without JS.

**Shared CSS classes (base.css):**
- `.page-root` — outer app wrapper (`position: relative; min-height: 100vh`)
- `.page-body` — sidebar + content flex layout with `padding-left: var(--sidebar-w)`

**Division page classes (division.css):**
- `.div-aside` — fixed TOC sidebar (position, dimensions, backdrop-filter)
- `.div-col` — flex content column
- `.div-content` — content area padding and max-width
- `.div-section` — section with scroll-margin-top and bottom spacing
- `.div-section-header` — flex row for section heading labels
- `.auftraege-list` — mission list (flex column, no list style)
- `.rang-list` — rank system list (flex column, tight gap)

**Per-page `:root` variables:**
- `--nav-h` / `--sidebar-w` — layout dimensions
- `--accent` — page accent color (division pages only)

## Development

```bash
# once
npm install

# Vite dev server with hot reload
npm run dev

# production build into dist/ (what GitHub Actions deploys)
npm run build

# serve dist/ locally
npm run preview
```

Deployment: push to `master` → GitHub Actions builds and publishes to Pages (Settings → Pages → Source must be "GitHub Actions"). `public/CNAME` carries the custom domain `meruria.de`.

`vite.config.js` auto-discovers all `.html` files as entries. Files that are referenced only at runtime (classic scripts, images, `assets/styles`) are copied unchanged to `dist/assets/` by a small plugin, so URLs are identical in dev and production.

## Monster data (`assets/scripts/data/monster/`)

### Sources and aggregator

Each book is its own JS file. `monster-data.js` merges them all and sorts the combined array by name:

```js
window.MONSTER_DATA = [
  ...(window.MONSTER_DATA_MONSTERHANDBUCH || []),
  ...(window.MONSTER_DATA_FOLIANT_DER_FEINDE || []),
  // … all other sources …
].sort((a, b) => a.name.localeCompare(b.name, 'de'));
```

Adding a new book: create `<book>-data.js`, declare the window variable, add it to the aggregator spread list, add `<script>` tag in `/dm/monster.html`.

| Datei | Variable | `source`-Wert | Bilder-Verzeichnis |
|---|---|---|---|
| `monsterhandbuch-data.js` | `MONSTER_DATA_MONSTERHANDBUCH` | `"Monsterhandbuch"` | `monster/monsterhandbuch/` |
| `foliant-der-feinde-data.js` | `MONSTER_DATA_FOLIANT_DER_FEINDE` | `"Foliant der Feinde"` | `monster/foliant/` |
| `drakkenheim-data.js` | `MONSTER_DATA_DRAKKENHEIM` | `"Drakkenheim"` | `monster/drakkenheim/` |
| `almanach-der-monster-data.js` | `MONSTER_DATA_ALMANACH_DER_MONSTER` | `"Almanach der Monster"` | `monster/almanach/` |
| `floral-dragons-data.js` | `MONSTER_DATA_FLORAL_DRAGONS` | `"Floral Dragons"` | `monster/floral-dragons/` |
| `ruhm-der-riesen-data.js` | `MONSTER_DATA_RUHM_DER_RIESEN` | `"Ruhm der Riesen"` | `monster/ruhm-der-riesen/` |
| `schatzkammer-der-drachen-data.js` | `MONSTER_DATA_SCHATZKAMMER_DER_DRACHEN` | `"Schatzkammer der Drachen"` | `monster/schatzkammer/` |
| `flee-mortals-data.js` | `MONSTER_DATA_FLEE_MORTALS` | `"Flee Mortals"` | `monster/flee-mortals/` |
| `sonstige-data.js` | `MONSTER_DATA_SONSTIGE` | `"Sonstige"` | `monster/sonstige/` |

### `bild` URL — Namenskonvention

Gilt für **alle** Quellen. Muster: `assets/images/monster/<verzeichnis>/<dateiname>.png`

Dateinamen-Regeln (aus dem Monsternamen ableiten):
- Alles **kleinschreiben**
- Leerzeichen → Unterstrich `_`
- Bindestrich `-` bleibt erhalten
- Umlaute transliterieren: `ä→ae`, `ö→oe`, `ü→ue`, `ß→ss`
- Artikel im Namen werden mitgenommen (`wandelnde_delerium_geode.png`)

Beispiele:

| Monsternachweis | `bild`-Wert |
|---|---|
| `Wandelnde Delerium-Geode` | `assets/images/monster/drakkenheim/wandelnde_delerium-geode.png` |
| `Greuelverhängnis` | `assets/images/monster/drakkenheim/greuelverhaengnis.png` |
| `Ritter der Tiefe` | `assets/images/monster/drakkenheim/ritter_der_tiefe.png` |
| `Großer Frosch` | `assets/images/monster/monsterhandbuch/grosser_frosch.png` |
| `Fraz-Urb'luu` | `assets/images/monster/foliant/fraz-urb_luu.png` (Sonderzeichen → Unterstrich) |

### Monster data entry — Monsterhandbuch

The user regularly pastes raw OCR text from the German D&D 5e Monster Manual. Your job is to parse it, correct OCR errors, and insert a JS object into `window.MONSTER_DATA_MONSTERHANDBUCH` **in alphabetical order by name**.

### Full object schema

```javascript
{
  name: "Kreaturname",          // German name, title-case
  art: "Unhold",                // Kreaturtyp — valid values:
                                //   Unhold, Untoter, Konstrukt, Pflanze, Tier,
                                //   Drache, Elementar, Feenwesen, Humanoid, Schlick,
                                //   Riese, Himmlisch, Monstrosität, Aberration, Elementar
  unterart: "Dämon",            // or null; NPCs get unterart: "NPC"
  groesse: "Mittelgroß",        // Winzig | Klein | Mittelgroß | Groß | Riesig | Gigantisch
  gesinnung: "Chaotisch böse",  // full German alignment string, or "Gesinnungslos"
  cr: 5,                        // number; fractions: 0.125 (1/8), 0.25 (1/4), 0.5 (1/2)
  xp: 1800,
  rk: 15, ruestungstyp: "natürliche Rüstung",  // ruestungstyp: null if no type stated
  tp: 85, tp_wuerfel: "10W8+40",
  bewegung: { "Gehen": "9 m", "Fliegen": "18 m" },  // keys: Gehen, Fliegen, Schwimmen,
                                                      //   Klettern, Graben, Schweben
  attribute: { STR: 18, DEX: 14, CON: 18, INT: 11, WIS: 12, CHA: 7 },
  rettungswuerfe: { STR: 7, KON: 7 },  // only saving throws that are listed; {} if none
                                        // keys: STR, GES, KON, INT, WEI, CHA
  fertigkeiten: { "Wahrnehmung": 4 },  // {} if none; German skill names
  schadensresistenzen: ["Feuer", "Kälte"],   // [] if none
  schadensimmunitaeten: ["Gift"],             // [] if none
  verwundbarkeiten: ["Feuer"],                // [] if none
  zustandsimmunitaeten: ["Vergiftet"],        // [] if none; German condition names
  sinne: ["Dunkelsicht 18 m", "Zittersinn 9 m"],  // [] if none
  passiveWahrnehmung: 14,   // always verify: 10 + WIS mod + (perception skill bonus if listed)
  sprachen: ["Abyssal", "Gemein"],  // [] if none (OCR often shows "-" for no languages)
  umgebung: ["Unterirdisch", "Wald"],  // [] if unknown
  bild: "assets/images/monster/monsterhandbuch/kreaturname.png",
                                    // Namenskonvention → siehe Abschnitt "`bild` URL" oben
  beschreibung: ["Lore-Text..."],  // array of paragraph strings
  besonderheiten: [
    { name: "Merkmalname", beschreibung: "Text." }
  ],
  aktionen: [
    { name: "Aktionsname", beschreibung: "Text." }
  ],
  bonusaktionen: [],    // same structure; [] if none
  reaktionen: [],       // same structure; [] if none
  legendaere_aktionen: null,   // null if none; or array of { name, beschreibung }
  // Optional — only include if the monster has them:
  hortaktionen: {
    beschreibung: "Bei Initiative 20...",
    aktionen: ["Effekt 1.", "Effekt 2.", "Effekt 3."]
  },
  regionale_effekte: {
    beschreibung: "Der Hort...",
    effekte: ["Effekt 1.", "Effekt 2.", "Effekt 3."]
  },
  source: "Monsterhandbuch"
}
```

### Canonical `art` values

| Wert | Beschreibung |
|---|---|
| `Aberration` | Aberrationen (kosmischer Horror) |
| `Drache` | Drachen (chrom. + metall.) |
| `Elementar` | Elementare |
| `Feenwesen` | Feen & Feenwesen (ehem. `Fee` + `Feenwesen` zusammengeführt) |
| `Himmlisch` | Himmlische Wesen (ehem. `Himmlischer`) |
| `Humanoid` | Humanoide (ehem. `Humanoider`) |
| `Konstrukt` | Konstrukte |
| `Monstrosität` | Monstrositäten |
| `Pflanze` | Pflanzen |
| `Riese` | Riesen |
| `Schlick` | Schleime/Oozes |
| `Tier` | Tiere |
| `Unhold` | Unholds (Dämonen, Teufel) |
| `Untoter` | Untote |

### Canonical `umgebung` values

Use only these values (no synonyms):

`Andere Ebenen`, `Arktis`, `Dschungel`, `Feenwildnis`, `Gebirge`, `Gewässer`, `Grasland`, `Hügel`, `Höhle`, `Küste`, `Ozean`, `Ruinen`, `Stadt`, `Sumpf`, `Unterirdisch`, `Wald`, `Wüste`

Previously used values that are now merged: `Tropisch`→`Dschungel`, `Unterwasser`→`Ozean`, `Unterreich`→`Unterirdisch`, `Berg`/`Berge`→`Gebirge`, `Stadt`/`Stadtgebiete`/`Städtisch`→`Stadt`, `Ebenen`→`Grasland` oder `Andere Ebenen`, `Wildnis`→ aufgeteilt, `Höhlen`→`Höhle`, `Feuchtgebiete`→`Sumpf`.

### Alphabetical insertion

- Insert strictly by `name`, A→Z into `monsterhandbuch-data.js`.
- To find the insertion point: `grep -n 'name:' assets/scripts/data/monster/monsterhandbuch-data.js | grep -E '"[Letter]'`
- Multi-variant groups (Mephits, Modrons, Lykanthropen) are kept together at the position their group name falls alphabetically.
- Hyphen `'-'` sorts before letters, so `Myconid-Spross` < `Myconiden-Soldat`.

### Validation (run after every insertion)

```bash
node -e "
const fs = require('fs');
const window = {};
eval(fs.readFileSync('assets/scripts/data/monster/monsterhandbuch-data.js', 'utf8'));
['Name1','Name2'].forEach(n => {
  const m = window.MONSTER_DATA_MONSTERHANDBUCH.find(m => m.name === n);
  if (!m) return console.log(n, 'NOT FOUND');
  console.log(m.name, '| CR:', m.cr, '| TP:', m.tp);
});
console.log('Total:', window.MONSTER_DATA_MONSTERHANDBUCH.length);
"
```

### Common OCR errors to fix

| OCR shows | Correct |
|---|---|
| `lW6`, `lW8`, `lWG`, `lWl0` | `1W6`, `1W8`, `1W6`, `1W10` (lowercase L → digit 1) |
| `SW6`, `SW8` | `5W6`, `5W8` (S → 5) |
| `W7` die | `W6` (no d7 exists; check average to confirm) |
| `SWl0`, `lWl0` | `5W10`, `1W10` |
| `+l` bonus | `+1` |
| `SC 17` | `SG 17` (Zauberrettungswurf-SG) |
| `1NT`, `CES` | `INT`, `GES` |
| `Humaneiden` | `Humanoiden` |
| `Terra!` | `Terral` |
| `lgnal` | `Ignal` |
| Darkvision `11 m` with passive `18` | Swap: use `18 m` darkvision, recalculate passive as `10 + WIS mod + perception` |
| `3jTag`, `3/lag` | `3/Tag` |
| Bewegungsrate stated without unit | Add ` m` |
| Page numbers or headers mixed into stat block | Discard |

### Fractional CRs

| Book shows | `cr` value |
|---|---|
| 1/8 | `0.125` |
| 1/4 | `0.25` |
| 1/2 | `0.5` |

### Passive Wahrnehmung — always verify

`passiveWahrnehmung = 10 + WIS modifier + (Wahrnehmung skill bonus if listed)`

OCR frequently swaps the darkvision range and passive perception values. If the stated passive doesn't match the formula, trust the formula.

### Variable AC (Lykanthropen)

Store the highest RK value in `rk`; note the lower humanoid-form value in `ruestungstyp`.

---

### Monster data entry — Drakkenheim

Drakkenheim-Monster kommen aus dem Buch *Dungeons of Drakkenheim* und werden in `drakkenheim-data.js` gepflegt. Das Schema ist identisch mit dem Monsterhandbuch-Schema, aber:

- `source: "Drakkenheim"` (nicht `"Monsterhandbuch"`)
- Kein OCR — Daten werden manuell erfasst oder aus Sitzungsprotokollen übernommen
- `hortaktionen` / `regionale_effekte` kommen in Drakkenheim nicht vor
- NPC-Monster bekommen `unterart: "NPC"`
- Validierung analog zum Monsterhandbuch, nur mit `MONSTER_DATA_DRAKKENHEIM`

#### Drakkenheim-Schreibweisen und Namenskonventionen

| Regel | Korrekt | Falsch |
|---|---|---|
| Die magische Substanz | `Delerium` | `Delirium` |
| Greuel-Präfix (Compound) | `Greuelkriecher`, `Greueltroll` | `Eldritscher Kriecher` |
| Tiefenwesen-Muster | `Ritter der Tiefe`, `Sirene der Tiefe` | `Tiefen-Ritter` |
| Karmesin-Fraktion | `Karmesin-Gräfin`, `Karmesinritter` | `Scharlachrote Gräfin` |

**Greuel-Präfix**: Drakkenheim-Monster, die auf aberranter Eldritsch-Kontamination basieren, tragen das Präfix `Greuel-` als Kompositum (Greuelkriecher, Greuelelender, Greueltroll, Greuelverhängnis). Das Adjektiv `eldritsch` bleibt in **Fließtext** erhalten, wenn es die Kontamination allgemein beschreibt — nicht als Monsternamensteil. `Eldrischer Strahl` (offizieller D&D-Zaubername) darf **niemals** geändert werden.

**"X der Tiefe"-Muster**: Monster, die tief im Dunst entstanden sind, heißen `<Kreaturtyp> der Tiefe` (z. B. `Elender-Krieger der Tiefe`), nicht `Tiefen-<Kreaturtyp>`.

#### Alphabetische Einordnung

Wie beim Monsterhandbuch — strikt nach `name`, A→Z. Besonderheiten:
- Bindestrich `-` sortiert vor Buchstaben (`Greuel-X` < `Greuely...`), aber zusammengeschriebene Komposita kommen nach dem Trennstrich: `Greuelkriecher` (kein Bindestrich) < `Kapuzenlaterne-Apotheker`
- Präfix-Gruppen (z. B. alle `Kapuzenlaterne-*`) bleiben zusammen am alphabetischen Ort des Gruppennamens

#### Validierung (Drakkenheim)

```bash
node -e "
const fs = require('fs');
const window = {};
eval(fs.readFileSync('assets/scripts/data/monster/drakkenheim-data.js', 'utf8'));
['Name1','Name2'].forEach(n => {
  const m = window.MONSTER_DATA_DRAKKENHEIM.find(m => m.name === n);
  if (!m) return console.log(n, 'NOT FOUND');
  console.log(m.name, '| CR:', m.cr, '| TP:', m.tp);
});
console.log('Total:', window.MONSTER_DATA_DRAKKENHEIM.length);
"
```

## CSS design tokens

Defined in `:root` in `base.css`. Light-mode overrides under `[data-theme="light"]` (and `html[data-theme="light"]` for higher specificity over per-page `:root` re-declarations).

| Variable | Dark value | Role |
|---|---|---|
| `--bg` | `#05040f` | Page background |
| `--white` | `#f0eeff` | Primary text color |
| `--silver` | `#c8c0e8` | Secondary text color |
| `--nav-bg` | `rgba(5,4,15,0.92)` | Nav bar background |
| `--nav-border` | `rgba(160,140,255,0.1)` | Nav bar bottom border |
| `--nav-text` | `rgba(200,190,240,0.7)` | Nav button text |
| `--nav-dropdown-bg` | `rgba(8,6,22,0.96)` | Dropdown panel background |
| `--nav-item-text` | `rgba(200,190,240,0.65)` | Dropdown item text |
| `--font-display` | `'Cinzel'` | Heading font |
| `--font-body` | `'Raleway'` | Body font |
| `--font-mono` | `'Share Tech Mono'` | Monospace font |
| `--nav-h` | `52px` | Nav bar height (per-page) |
| `--sidebar-w` | `200–220px` | TOC sidebar width (per-page) |
| `--accent` | varies | Division page accent color |

Monster type colors are defined as CSS custom properties in `Monster.css` (e.g. `--type-drache: #f32b00`) and as `oklch()` values in the `TYPE_COLORS` JS object in `/dm/monster.html`.

## Kollektikon data (`assets/scripts/data/kollektikon-data.js`)

Single source of truth for the Kollektikon, shared by `/index.html` and `/spiel/kollektikon.html`. Neither page contains hardcoded data — both derive their arrays at runtime.

| Variable | Purpose |
|---|---|
| `window.KOLLEKTIKON_CATEGORIES` | Category metadata: `id`, `label`, `labelShort`, `total`, `hue` |
| `window.KOLLEKTIKON_CATALOG` | All known entries: `id`, `name`, `cat`, `hue`, `status`, `date` |
| `window.KOLLEKTIKON_RECENT_SIGHTED_IDS` | Ordered IDs of recently discovered entries (newest first) |
| `window.KOLLEKTIKON_RECENT_KOMPLETT_IDS` | Ordered IDs of recently completed entries (newest first) |

`found` and `komplett` counts per category are derived automatically from `KOLLEKTIKON_CATALOG` — never set manually.

### Adding a new entry

1. Add an object to `KOLLEKTIKON_CATALOG` with `status: 'sighted'` or `'komplett'`
2. Prepend the entry's `id` to `KOLLEKTIKON_RECENT_SIGHTED_IDS` (and/or `KOLLEKTIKON_RECENT_KOMPLETT_IDS` if already complete)
3. Both pages update automatically — no other files need touching

### Completing an existing entry

1. Change `status` from `'sighted'` to `'komplett'` in `KOLLEKTIKON_CATALOG`
2. Prepend the `id` to `KOLLEKTIKON_RECENT_KOMPLETT_IDS`

### Icon handling

Icons are JSX and cannot live in a plain `.js` file. Each page defines its own icon constants (`FISH_ICON`, `INSECT_ICON`, …) and a `CAT_ICON_MAP` lookup that maps category IDs to icons. The shared data file only stores plain data.
