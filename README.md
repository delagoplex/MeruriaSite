# Meruria

Companion website for the tabletop RPG world **Meruria**, deployed at [meruria.de](https://meruria.de) via GitHub Pages.

It documents the world's factions, races, classes and deities, ships a full monster compendium, and contains the table tools the group uses during play (characters, NPCs, map, missions, recipes, …). The site is written in German and is behind a login (Supabase).

## Quick start

Requirements: **Node 22+** and Git. For anything that touches the database you also want the local database (see below).

```bash
npm install
npm run dev
```

Open the address Vite prints (usually http://localhost:5173). Every page is a normal `.html` file, e.g. `/charaktererstellung/klassen.html`.

> **Heads-up:** without the local database set up, the dev server talks to the **real** database. The browser console then warns with `[supabase] ACHTUNG: …`. Set up the local database first if you are going to save or delete anything.

### Commands

| Command | What it does |
|---|---|
| `npm run dev` | dev server with hot reload |
| `npm run build` | production build into `dist/` (what GitHub Actions deploys) |
| `npm run preview` | serve the production build locally |
| `npm run db:start` / `db:stop` | start / stop the local Supabase (Docker) |
| `npm run db:config` | point the dev server at the local database (once, after the first `db:start`) |
| `npm run db:reset` | rebuild the local database from the migrations + seed (local data is lost) |
| `npm run db:status` | show the local URLs and keys |

On Windows PowerShell 5.1 `&&` does not work; run commands one per line.

## Local database (Supabase in Docker)

The site uses Supabase (PostgreSQL + login). The local stack gives you a throw-away copy with test accounts, so you can try things safely and verify database changes before they reach the real one.

One-time setup (Windows with Docker inside WSL; the `db:*` scripts call the CLI through `wsl`. On macOS/Linux install Docker and the CLI normally and run `supabase start` etc. directly, then `node tools/write-local-supabase-config.mjs`):

1. Docker must be running inside WSL (`docker info` works there).
2. Install the Supabase CLI inside WSL:
   ```bash
   mkdir -p ~/.local/bin
   curl -fsSL https://github.com/supabase/cli/releases/latest/download/supabase_linux_amd64.tar.gz | tar -xz -C ~/.local/bin supabase
   supabase --version
   ```
3. `npm run db:start` — the first start downloads the Docker images (about 2 GB) and applies every file in `supabase/migrations/`, then `supabase/seed.sql`.
4. `npm run db:config` — writes `assets/scripts/supabase-local.json` (git-ignored) with the local URL and key.
5. `npm run dev` — pages opened via `localhost` now use the local database. The console says `[supabase] lokale Entwicklungsdatenbank`.

Local test accounts are created by `supabase/seed.sql` (the passwords are in that file): a DM (`dm@meruria.test`) and a player (`spieler@meruria.test`). They only exist on your machine.

To use the real database from localhost anyway: `localStorage.setItem('sb_env', 'prod')` in the browser console (`localStorage.removeItem('sb_env')` switches back).

Studio (table editor, SQL) of the local stack: http://127.0.0.1:54323. Note that the local stack listens on all network interfaces and Studio has no login; stop it (`npm run db:stop`) on untrusted networks.

## Deployment

Pushing to `master` runs `.github/workflows/deploy.yml`: generate the gallery data, `npm run build`, publish `dist/` to GitHub Pages (custom domain via `public/CNAME`). In the repository settings, **Pages → Source** must be **GitHub Actions**.

A second workflow, `generate-galerie.yml`, commits `assets/scripts/data/galerie-data.js` when monster images change.

The **database is not deployed by CI.** Migrations are applied by hand in the Supabase SQL editor of the real project (see below).

## Project structure

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
├── supabase/
│   ├── migrations/             — database schema, numbered 001 … in apply order
│   ├── seed.sql                — local test accounts (never run against the real database)
│   └── config.toml             — local stack settings
├── tools/                      — maintenance scripts (gallery data, local database config)
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

## How a page works

- `<folder>/<name>.html` is a small shell: `<base href="/">`, stylesheet links, classic `<script>` tags for React, Supabase and the game-data files, and **one** `<script type="module" src="/src/pages/<folder>/<name>.jsx">`.
- `src/pages/<folder>/<name>.jsx` imports the shared components (`import '../../components/nav.jsx'`) and contains the page's React app. JSX is compiled by Vite; React itself is a global (no import needed).
- Shared components live in `src/components/` and register themselves on `window` (`window.SiteNav`, `window.SiteGate`, …). Modules run before the page code, so a component must **not** read globals that the page defines at the top of its own file; look them up while rendering instead.
- Colours and layout live in CSS files; only values that depend on state or an accent colour stay in JSX `style={{}}`.

### Adding a page

1. Create `<folder>/<name>.html` (copy a similar page; keep `<base href="/">` and the stylesheet order `fonts → base → page`).
2. Create `src/pages/<folder>/<name>.jsx` and point the HTML's module script at it.
3. Create `assets/styles/pages/<folder>/<name>.css` if the page needs its own styles.
4. Add it to the `NAV` list in `src/components/nav.jsx` if it should appear in the menu.
5. If you move or rename an existing page, add its old URL to `src/legacy-redirects.json` so old links keep working.

Vite finds every `.html` file automatically; no config change is needed.

## Database

- Migrations in `supabase/migrations/` are applied in file-name order. A new migration takes the **next free number** (`042_…`); never reuse or renumber an existing one.
- To change the real database: write the migration, test it with `npm run db:reset`, then run **only the new file** in the Supabase SQL editor of the real project.
- Access is enforced by Row Level Security in the database, not by the checks in the page code (those only hide UI). New tables need `ENABLE ROW LEVEL SECURITY` and explicit policies; functions marked `SECURITY DEFINER` must check `public.is_dm()` themselves. Details and known gaps: `CLAUDE.md` → "Database security".

## Troubleshooting

| Symptom | Cause / fix |
|---|---|
| Dev console warns `ACHTUNG … ECHTE Datenbank` | the local database is not configured: `npm run db:start`, `npm run db:config` |
| `npm run db:start` fails | Docker is not running in WSL, or the Supabase CLI is not on the WSL `PATH` |
| Can't log in locally | use the test accounts from `supabase/seed.sql`; after `db:reset` the accounts are re-created |
| `Acquiring an exclusive Navigator LockManager lock … failed` in the console | harmless noise from Supabase when several tabs of the same site are open |
| `&&` is rejected in PowerShell | run the commands separately (or use Git Bash) |
| Only the dark login screen after an error | reload; the login form appears again |

## Tech

React (global vendor build, JSX compiled at build time), Vite multi-page build, Supabase (PostgreSQL, auth, storage), GitHub Pages.

## Features

- **Dark / light mode** — toggle in the nav bar, persists via `localStorage`
- **Monster compendium** — 400+ monsters from the German D&D 5e Monster Manual, filterable by type, subtype, CR, size, alignment, environment, and source; legendary monsters flagged separately
- **Character sheets, NPC manager, map, missions, recipes** — stored per user in Supabase, with DM-only tools under `/dm/`
