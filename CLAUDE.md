# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

A static website for the tabletop RPG world **Meruria**, deployed to `meruria.de` via GitHub Pages. The site is written in German and documents the world's factions, races, classes, and deities.

There is no build system, bundler, or package manager. Pages are plain HTML files served directly. The only runtime dependencies are vendor scripts checked into `assets/scripts/vendor/`.

## Architecture

Each page is a self-contained HTML file with:
- Inline `<style>` blocks containing all CSS, including `@font-face` declarations pointing to `assets/fonts/font-*.woff2`
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

Defined in `:root` on each page:

| Variable | Role |
|---|---|
| `--bg` | Page background (`#05040f`) |
| `--purple` | Accent (`#7c4dff`) |
| `--blue` | Secondary accent (`#2d7dff`) |
| `--white` | Body text (`#f0eeff`) |
| `--font-display` | Cinzel (headings) |
| `--font-body` | Raleway (body) |
| `--font-mono` | Share Tech Mono |
