# Meruria

Companion website for the tabletop RPG world **Meruria**, deployed at [meruria.de](https://meruria.de) via GitHub Pages.

Documents the world's factions, races, classes, and deities. Written in German.

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
├── Sturmritter.html            ┐
├── Sentinels.html              │
├── Friedenshueter.html         │
├── Outfitters.html             ├─ the eight divisions
├── Pathfinders.html            │
├── Quellensucher.html          │
├── Bergungsgarde.html          │
├── Die Kuratoren.html          ┘
└── assets/
    ├── components/             — shared React/JSX components
    ├── fonts/                  — .woff2 font files
    ├── images/                 — insignia and race artwork
    ├── scripts/
    │   ├── data/               — page data as window globals
    │   └── vendor/             — React, ReactDOM, Babel Standalone
    └── styles/
        ├── global/             — base.css, fonts.css, division.css
        └── pages/              — per-page stylesheets
```

## Tech

Plain HTML + CSS + React (via Babel Standalone in the browser). No bundler, no npm, no build step.
