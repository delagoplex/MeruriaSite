# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

A static website for the tabletop RPG world **Meruria**, deployed to `meruria.de` via GitHub Pages. The site is written in German and documents the world's factions, races, classes, and deities.

There is no build system, bundler, or package manager. Pages are plain HTML files served directly. The only runtime dependencies are vendor scripts checked into `assets/scripts/vendor/`.

## Architecture

Each page is a self-contained HTML file with:
- `<link>` tags loading CSS from `assets/styles/global/` (shared) and `assets/styles/pages/` (per-page)
- Shared React components loaded via `<script src="assets/components/..." type="text/babel">` tags
- A single `<script type="text/babel">` block containing the full React app for that page (state, rendering, and `ReactDOM.createRoot`)
- React and Babel loaded from `assets/scripts/vendor/` as browser globals (not modules)

The `TWEAK_DEFAULTS` constant in each page (delimited by `/*EDITMODE-BEGIN*/` and `/*EDITMODE-END*/`) controls live-editable design parameters like particle visibility and header height. The `useTweaks` hook from the tweaks panel reads and exposes these values.

**Pages:**
- `index.html` — landing/home page
- `Gottheiten.html` — deities
- `Rassen.html` — races
- `Klassen.html` — classes
- `Monster.html` — monster compendium (password-protected, separate session from site gate)
- `divisionen/` — the eight faction pages (subfolder with `<base href="../">` so all asset paths resolve from project root)
  - `Die Kuratoren.html`, `Sturmritter.html`, `Sentinels.html`, `Friedenshueter.html`
  - `Outfitters.html`, `Pathfinders.html`, `Quellensucher.html`, `Bergungsgarde.html`
  - `index.html` — redirects to `Die Kuratoren.html` via `<meta http-equiv="refresh">`

**Navigation** is defined in the `NAV` array inside `assets/components/nav.jsx` and shared across all pages via `window.SiteNav`.

## Shared components (`assets/components/`)

| File | Exports | Purpose |
|---|---|---|
| `nav.jsx` | `window.SiteNav` | Sticky nav bar with dropdown menus and dark/light mode toggle |
| `site-gate.jsx` | `window.SiteGate` | Site-wide password gate (30-day session, `localStorage` key `site_auth`) |
| `tweaks-panel-*.jsx` | `window.useTweaks`, `window.TweaksPanel`, … | Live design tweaks overlay |
| `particle-field.jsx` | `window.ParticleField` | Animated background particles |
| `filter-utils.jsx` | `window.FilterGroup`, `window.XBtn`, … | Filter UI primitives used by Monster.html |

### Authentication

Two independent password gates, both using SHA-256 via `crypto.subtle.digest`:

- **Site gate** (`site-gate.jsx`): wraps every page in `<SiteGate>`. Session lasts 30 days (`localStorage` key `site_auth`). Password: `meruriaHype`.
- **Monster gate** (inline in `Monster.html`): separate session, 24 hours (`localStorage` key `monster_auth`). Own password hash.

Pages include both scripts and render `<SiteGate><App /></SiteGate>`.

### Dark / light mode

`nav.jsx` initializes theme on script load (before React renders) to avoid flash:
```js
document.documentElement.dataset.theme = (localStorage.getItem('theme') === 'light') ? 'light' : 'dark';
```
The `ThemeToggle` component (☀/☽) in `SiteNav` toggles `data-theme` on `<html>` and persists to `localStorage`. CSS variables in `base.css` handle all color switching under `[data-theme="light"]`.

## Asset structure

```
assets/
├── components/        — shared React/JSX components (see above)
├── fonts/             — .woff2 font files referenced by fonts.css
├── images/
│   ├── insignia/      — faction insignia images
│   ├── races/         — race artwork
│   └── monster/
│       └── monsterhandbuch/  — monster images (one per monster, lowercase_underscores)
├── scripts/
│   ├── data/
│   │   ├── monster-data.js           — aggregator: merges all sources, exports window.MONSTER_DATA
│   │   ├── monster/
│   │   │   └── monsterhandbuch-data.js  — 427 monsters as window.MONSTER_DATA_MONSTERHANDBUCH
│   │   ├── rassen-data.js, klassen-data.js, …  — other page data
│   │   └── monster-data.js           — also holds window.UNTERART_LORE
│   └── vendor/        — React, ReactDOM, Babel Standalone
└── styles/
    ├── global/
    │   ├── base.css       — resets, CSS variables (dark + light theme), scroll-reveal, shared classes
    │   ├── division.css   — structural classes shared by all eight division pages
    │   └── fonts.css      — @font-face declarations
    └── pages/             — per-page stylesheets
        ├── index.css, Rassen.css, Klassen.css, Gottheiten.css, Monster.css
        └── Sturmritter.css, Sentinels.css, Friedenshueter.css, Outfitters.css,
            Pathfinders.css, Quellensucher.css, Bergungsgarde.css, DieKuratoren.css
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

## Asset pipeline scripts

`tools/process-page.mjs` unpacks a single bundled HTML page (Framer/bundler format). It decodes base64+gzip assets, deduplicates against existing files by SHA-256 hash, places new assets in the correct `assets/` subdirectory, and rewrites the HTML to reference them.

```bash
node tools/process-page.mjs <PageName.html>
```

After running, manually:
1. Replace the `@font-face` `<style>` block with `<link rel="stylesheet" href="assets/styles/global/fonts.css">`
2. Add `<link rel="stylesheet" href="assets/styles/global/base.css">`
3. Move the page `<style>` block to `assets/styles/pages/<PageName>.css`, stripping rules already in `base.css`
4. Add `<link rel="stylesheet" href="assets/styles/pages/<PageName>.css">`

## Development

Open any HTML file directly in a browser — no server needed for most pages. Division pages require either a server or `<base href="../">` (already set) to resolve assets correctly.

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Monster data entry (`assets/scripts/data/monster/monsterhandbuch-data.js`)

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
                                    // lowercase, spaces→underscores, ü→ue, ö→oe, ä→ae, ß→ss
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

Monster type colors are defined as CSS custom properties in `Monster.css` (e.g. `--type-drache: #f32b00`) and as `oklch()` values in the `TYPE_COLORS` JS object in `Monster.html`.
