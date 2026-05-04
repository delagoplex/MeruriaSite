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

These `.mjs` scripts were used to unbundle pages that were originally packed by a Framer/bundler format (`__bundler/manifest` + `__bundler/template`). They are utility scripts, not part of the site itself.

- `extract-all.mjs` — unpacks all bundled HTML files, decoding base64+gzip assets and writing them to `extracted/`
- `organize-extracted.mjs` — moves assets from `extracted/` into `assets/{fonts,scripts,components,images}/` with readable names; writes `file-mapping.json`
- `update-html-refs.mjs` — rewrites `extracted/<uuid>.*` references in HTML files to their new `assets/...` paths using `file-mapping.json`
- `fix-extensions.mjs`, `fix-remaining-refs.mjs` — one-off fixup scripts from the migration

Run these with Node.js when processing newly bundled pages:
```bash
node extract-all.mjs
node organize-extracted.mjs
node update-html-refs.mjs
```

## Development

Open any HTML file directly in a browser — no server needed for most pages. If you need relative paths to resolve correctly (some browsers block local file `assets/` loads), serve the root:

```bash
npx serve .
# or
python3 -m http.server 8080
```

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
