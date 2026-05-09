# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

A static website for the tabletop RPG world **Meruria**, deployed to `meruria.de` via GitHub Pages. The site is written in German and documents the world's factions, races, classes, and deities.

There is no build system, bundler, or package manager. Pages are plain HTML files served directly. The only runtime dependencies are vendor scripts checked into `assets/scripts/vendor/`.

## Architecture

Each page is a self-contained HTML file with:
- `<link>` tags loading CSS from `assets/styles/global/` (shared) and `assets/styles/pages/` (per-page)
- A shared `tweaks-panel` React component loaded from `assets/components/tweaks-panel-*.jsx` via Babel Standalone (`type="text/babel"`)
- A single `<script type="text/babel">` block containing the full React app for that page (state, rendering, and `ReactDOM.createRoot`)
- React and Babel loaded from `assets/scripts/vendor/` as browser globals (not modules)

The `TWEAK_DEFAULTS` constant in each page (delimited by `/*EDITMODE-BEGIN*/` and `/*EDITMODE-END*/`) controls live-editable design parameters like particle visibility and header height. The `useTweaks` hook from the tweaks panel reads and exposes these values.

**Pages:**
- `index.html` — landing/home page with navigation
- `Gottheiten.html` — deities
- `Rassen.html` — races
- `Klassen.html` — classes
- `Sturmritter.html`, `Sentinels.html`, `Friedenshueter.html`, `Outfitters.html`, `Pathfinders.html`, `Quellensucher.html`, `Bergungsgarde.html`, `Die Kuratoren.html` — the eight factions/divisions

**Navigation** is defined in `index.html` in the `NAV` array. Other pages duplicate or vary this structure inline.

## Asset structure

```
assets/
├── components/        — shared React/JSX components (nav, footer, page-header, tweaks-panel, etc.)
├── fonts/             — .woff2 font files referenced by fonts.css
├── images/
│   ├── insignia/      — faction insignia images
│   └── races/         — race artwork
├── scripts/
│   ├── data/          — shared page data as window globals (rassen-data.js, klassen-data.js, etc.)
│   └── vendor/        — React, ReactDOM, Babel Standalone
└── styles/
    ├── global/        — shared stylesheets loaded by every page
    │   ├── base.css       — resets, CSS variables, scroll-reveal classes, .page-root/.page-body
    │   ├── division.css   — structural classes shared by all eight division pages
    │   └── fonts.css      — @font-face declarations
    └── pages/         — per-page stylesheets
        ├── index.css, Rassen.css, Klassen.css, Gottheiten.css
        └── Sturmritter.css, Sentinels.css, Friedenshueter.css, Outfitters.css,
            Pathfinders.css, Quellensucher.css, Bergungsgarde.css, DieKuratoren.css
```

## Styling approach

Static layout and typography are in CSS files. Dynamic styles — those that depend on accent color, hover/tilt state, computed values, or tweaks — remain as JSX `style={{ }}` objects.

**Shared CSS classes (base.css):**
- `.page-root` — outer app wrapper (`position: relative; min-height: 100vh`)
- `.page-body` — sidebar + content flex layout with `padding-left: var(--sidebar-w)`

**Division page classes (division.css):**
- `.div-aside` — fixed TOC sidebar (position, dimensions, backdrop-filter)
- `.div-col` — flex content column
- `.div-content` — content area padding and max-width
- `.div-section` — section with scroll-margin-top and bottom spacing; `:last-of-type` removes the bottom margin
- `.div-section-header` — flex row for section heading labels
- `.auftraege-list` — mission list (flex column, no list style)
- `.rang-list` — rank system list (flex column, tight gap)

**Per-page `:root` variables:**
- `--nav-h` / `--sidebar-w` — layout dimensions
- `--accent` — page accent color (matches the JS `ACCENT` constant in the same file)

## Asset pipeline scripts

`tools/process-page.mjs` unpacks a single bundled HTML page (Framer/bundler format with `__bundler/manifest` + `__bundler/template` script tags). It decodes base64+gzip assets, deduplicates against existing files by SHA-256 hash, places new assets in the correct `assets/` subdirectory, and rewrites the HTML to reference them.

```bash
node tools/process-page.mjs <PageName.html>
# e.g.
node tools/process-page.mjs Dhampir.html
```

After running, the inline `<style>` font block and page CSS still need to be manually extracted:
1. Replace the `@font-face` `<style>` block with `<link rel="stylesheet" href="assets/styles/global/fonts.css">`
2. Add `<link rel="stylesheet" href="assets/styles/global/base.css">`
3. Move the page `<style>` block to `assets/styles/pages/<PageName>.css`, stripping rules already covered by `base.css` (resets, `html`/`body`, `body::after`, `--bg`/`--white`/`--silver`/`--font-*` variables)
4. Add `<link rel="stylesheet" href="assets/styles/pages/<PageName>.css">`

## Development

Open any HTML file directly in a browser — no server needed for most pages. If you need relative paths to resolve correctly (some browsers block local file `assets/` loads), serve the root:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Monster data entry (`assets/scripts/data/monster-data.js`)

The user regularly pastes raw OCR text from the German D&D 5e Monster Manual. Your job is to parse it, correct OCR errors, and insert a JS object into `window.MONSTER_DATA` **in alphabetical order by name**.

### Full object schema

```javascript
{
  name: "Kreaturname",          // German name, title-case
  art: "Unhold",                // Kreaturtyp: Unhold, Untoter, Konstrukt, Pflanze, Tier,
                                //   Drache, Elementar, Fee, Humanoid, Ooze, Schleimling,
                                //   Riesenkreatur, Himmelswesen, Teuflisches Wesen, etc.
  unterart: "Dämon",            // or null
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
  umgebung: ["Unterirdisch", "Wald"],  // [] if unknown; common: Arktis, Ebenen, Gebirge,
                                       //   Gewässer, Küste, Ruinen, Sumpf, Unterirdisch,
                                       //   Stadtgebiete, Wald, Wüste
  bild: "assets/images/monster/kreaturnname.png",  // lowercase, spaces→underscores,
                                                    // ü→ue, ö→oe, ä→ae, ß→ss
  beschreibung: ["Lore-Text..."],  // array of paragraph strings; pull from OCR lore
  besonderheiten: [
    { name: "Merkmalname", beschreibung: "Text." }
  ],
  aktionen: [
    { name: "Aktionsname", beschreibung: "Text." }
  ],
  bonusaktionen: [],    // same structure as aktionen; [] if none
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

### Alphabetical insertion

- Insert strictly by `name`, A→Z.
- To find the insertion point: `grep -n 'name:' monster-data.js | grep -E '"[Letter]'`
- Multi-variant groups (Mephits, Modrons, Lykanthropen) are kept together at the position their group name falls alphabetically.
- Hyphen `'-'` sorts before letters, so `Myconid-Spross` < `Myconiden-Soldat`.

### Validation (run after every insertion)

```bash
node -e "
const fs = require('fs');
const code = fs.readFileSync('assets/scripts/data/monster-data.js', 'utf8');
const window = {};
eval(code);
['Name1','Name2'].forEach(n => {
  const m = window.MONSTER_DATA.find(m => m.name === n);
  if (!m) return console.log(n, 'NOT FOUND');
  console.log(m.name, '| CR:', m.cr, '| TP:', m.tp);
});
console.log('Total:', window.MONSTER_DATA.length);
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

## CSS design tokens

Defined in `:root` in `base.css` and per-page stylesheets:

| Variable | Role |
|---|---|
| `--bg` | Page background (`#05040f`) |
| `--white` | Body text (`#f0eeff`) |
| `--font-display` | Cinzel (headings) |
| `--font-body` | Raleway (body) |
| `--font-mono` | Share Tech Mono |
| `--nav-h` | Nav bar height (`52px`) |
| `--sidebar-w` | TOC sidebar width (200–220px, varies per page) |
| `--accent` | Page accent color (division pages only) |
