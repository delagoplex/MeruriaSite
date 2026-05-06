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
