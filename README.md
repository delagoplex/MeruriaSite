# Meruria

Companion website for the tabletop RPG world **Meruria**, deployed at [meruria.de](https://meruria.de) via GitHub Pages.

Documents the world's factions, races, classes, deities, and a full monster compendium. Written in German.

## Running locally

No build step required. Open any `.html` file directly in a browser, or serve the root if your browser blocks local `assets/` loads:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Structure

```
├── index.html                  — home page
├── Rassen.html                 — races
├── Klassen.html                — classes
├── Gottheiten.html             — deities
├── Monster.html                — monster compendium (filterable, searchable)
├── Sturmritter.html            ┐
├── Sentinels.html              │
├── Friedenshueter.html         │
├── Outfitters.html             ├─ the eight divisions
├── Pathfinders.html            │
├── Quellensucher.html          │
├── Bergungsgarde.html          │
├── Die Kuratoren.html          ┘
└── assets/
    ├── components/             — shared React/JSX components (nav, footer, page-header, tweaks-panel)
    ├── fonts/                  — .woff2 font files
    ├── images/
    │   ├── insignia/           — faction insignia
    │   ├── races/              — race artwork
    │   └── monster/
    │       └── monsterhandbuch/ — monster images
    ├── scripts/
    │   ├── data/
    │   │   └── monster/        — monster data split by source book
    │   │       └── monsterhandbuch-data.js
    │   └── vendor/             — React, ReactDOM, Babel Standalone
    └── styles/
        ├── global/             — base.css, fonts.css, division.css
        └── pages/              — per-page stylesheets
```

## Tech

Plain HTML + CSS + React (via Babel Standalone in the browser). No bundler, no npm, no build step.

## Features

- **Dark / light mode** — toggle in the nav bar, persists via `localStorage`
- **Monster compendium** — 400+ monsters from the German D&D 5e Monster Manual, filterable by type, subtype, CR, size, alignment, environment, and source; legendary monsters flagged separately
- **Tweaks panel** — live-editable design parameters per page (particle visibility, header height, etc.)
