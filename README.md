# Meruria

Companion website for the tabletop RPG world **Meruria**, deployed at [meruria.de](https://meruria.de) via GitHub Pages.

Documents the world's factions, races, classes, deities, and a full monster compendium. Written in German.

## Running locally

```bash
# once
npm install

# dev server with hot reload
npm run dev

# production build into dist/
npm run build
```

Pushing to `master` builds and deploys the site via GitHub Actions (`.github/workflows/deploy.yml`).

## Structure

```
├── index.html, impressum.html
├── spielerhandbuch/            — player handbook (info, backstory, realism, crafting, recipes, …)
├── charaktererstellung/        — character creation (races, classes, talents, backgrounds, spells, equipment)
├── enzyklopaedie/              — encyclopedia (deities, gallery, fish, buildings)
├── divisionen/                 — overview + the eight divisions
├── charaktere/                 — characters (mine, player characters, NPCs, character sheet)
├── spiel/                      — in-game tools (collectorium, map, calendar, missions, recruitment)
├── dm/                         — DM-only pages
├── src/
│   ├── components/             — shared React/JSX components (nav, footer, site-gate, …)
│   ├── pages/<folder>/<name>.jsx — one entry per page (imports components + page app code)
│   ├── pages/parts/            — page-specific helper modules
│   └── legacy-redirects.json   — old page URLs → new URLs (turned into redirect pages at build time)
├── public/                     — copied to the site root as is (CNAME, .image-slots.state.json)
├── supabase/                   — database migrations
├── tools/                      — maintenance scripts (gallery data generator)
├── vite.config.js
└── assets/                     — copied unchanged into the build
    ├── images/
    ├── scripts/
    │   ├── data/               — game data (monsters, races, classes, …)
    │   ├── shared/             — plain scripts used by several pages
    │   └── vendor/             — React, ReactDOM, Supabase
    └── styles/
        ├── global/             — base.css, fonts.css, division.css
        └── pages/<folder>/     — per-page stylesheets
```

## Tech

React (global vendor build, JSX compiled at build time), Vite multi-page build, Supabase login, GitHub Pages.

## Features

- **Dark / light mode** — toggle in the nav bar, persists via `localStorage`
- **Monster compendium** — 400+ monsters from the German D&D 5e Monster Manual, filterable by type, subtype, CR, size, alignment, environment, and source; legendary monsters flagged separately
