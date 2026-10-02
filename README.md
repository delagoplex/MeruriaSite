# Meruria

Companion website for the tabletop RPG world **Meruria**, deployed at [meruria.de](https://meruria.de) via GitHub Pages.

Documents the world's factions, races, classes, deities, and a full monster compendium. Written in German.

## Running locally

```bash
npm install
npm run dev        # dev server with hot reload
npm run build      # production build into dist/
```

Pushing to `master` builds and deploys the site via GitHub Actions (`.github/workflows/deploy.yml`).

## Structure

```
├── *.html                      — one entry per page (index, Rassen, Klassen, Monster, NSC, …)
├── divisionen/                 — the eight faction pages
├── src/
│   ├── components/             — shared React/JSX components (nav, footer, site-gate, …)
│   └── pages/                  — one entry per page (imports components + page app code)
│       └── parts/              — page-specific helper modules
├── public/CNAME                — custom domain
├── vite.config.js
└── assets/                     — copied unchanged into the build
    ├── images/
    ├── scripts/
    │   ├── data/               — game data (monsters, races, classes, …)
    │   └── vendor/             — React, ReactDOM, Supabase
    └── styles/
        ├── global/             — base.css, fonts.css, division.css
        └── pages/              — per-page stylesheets
```

## Tech

React (global vendor build, JSX compiled at build time), Vite multi-page build, Supabase login, GitHub Pages.

## Features

- **Dark / light mode** — toggle in the nav bar, persists via `localStorage`
- **Monster compendium** — 400+ monsters from the German D&D 5e Monster Manual, filterable by type, subtype, CR, size, alignment, environment, and source; legendary monsters flagged separately
