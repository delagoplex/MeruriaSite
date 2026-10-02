import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

// Every HTML file is its own entry (multi-page site); pages live in topic folders.
const SKIP_DIRS = new Set(['node_modules', 'dist', 'public', 'src', 'assets', 'supabase', 'tools', '.git', '.idea', '.github']);
const findPages = (dir = '.') => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
  const rel = dir === '.' ? e.name : `${dir}/${e.name}`;
  if (e.isDirectory()) return SKIP_DIRS.has(e.name) ? [] : findPages(rel);
  return e.name.endsWith('.html') ? [rel] : [];
});
const input = Object.fromEntries(findPages().map(f => [f.replace(/\.html$/, ''), path.resolve(f)]));

// Classic <script src="assets/..."> files and images referenced from JS strings are not
// seen by the bundler, so copy them to dist/ unchanged (same URLs as in dev).
const RUNTIME_ASSET_DIRS = ['assets/images', 'assets/scripts', 'assets/styles'];
const copyRuntimeAssets = () => ({
  name: 'copy-runtime-assets',
  apply: 'build',
  closeBundle() {
    for (const dir of RUNTIME_ASSET_DIRS) {
      fs.cpSync(dir, path.join('dist', dir), {
        recursive: true,
        filter: (src) => !src.endsWith('supabase-local.json'), // dev-only, written by npm run db:config
      });
    }
  },
});

// Old page URLs (before the move into folders) keep working: small redirect pages in dist/.
const legacyRedirects = () => ({
  name: 'legacy-redirects',
  apply: 'build',
  closeBundle() {
    const list = JSON.parse(fs.readFileSync('src/legacy-redirects.json', 'utf8'));
    for (const { from, to } of list) {
      const target = JSON.stringify(to);
      const html = `<!DOCTYPE html>
<html lang="de"><head>
<meta charset="UTF-8">
<title>Meruria</title>
<meta http-equiv="refresh" content="0; url=${to}">
<link rel="canonical" href="${to}">
<script>
  var to = ${target};
  var q = location.search;
  location.replace(to + (q ? (to.indexOf('?') < 0 ? q : '&' + q.slice(1)) : '') + location.hash);
</script>
</head><body><p><a href="${to}">Weiter zu Meruria</a></p></body></html>
`;
      const out = path.join('dist', from);
      fs.mkdirSync(path.dirname(out), { recursive: true });
      if (!fs.existsSync(out)) fs.writeFileSync(out, html); // never overwrite a real page
    }
  },
});

// Dev server: serve classic scripts (vendor libs, data files) byte-for-byte instead of
// running them through Vite's module transform, exactly like in the production build.
const serveClassicScriptsRaw = () => ({
  name: 'serve-classic-scripts-raw',
  apply: 'serve',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const url = decodeURIComponent((req.url || '').split('?')[0]);
      if (!/^\/assets\/scripts\/.+\.js$/.test(url)) return next();
      const scriptsDir = path.resolve('assets/scripts');
      const file = path.resolve(path.join(process.cwd(), url));
      if (!file.startsWith(scriptsDir + path.sep)) return next(); // no ../ escapes
      if (!fs.existsSync(file) || !fs.statSync(file).isFile()) return next();
      res.setHeader('Content-Type', 'text/javascript');
      res.setHeader('Cache-Control', 'no-cache');
      res.end(fs.readFileSync(file));
    });
  },
});

// Vite merges and reorders linked stylesheets, which would change the cascade
// (fonts -> base -> division -> page). Keep the <link> tags exactly as written.
const keepStylesheets = () => {
  const kept = new Map();
  return [
    {
      name: 'keep-stylesheets:pre',
      transformIndexHtml: {
        order: 'pre',
        handler(html, ctx) {
          let i = 0;
          // any <link rel="stylesheet" …> in any attribute order, so Vite never reorders local CSS
          return html.replace(/<link\b[^>]*\brel=["']stylesheet["'][^>]*>/g, (tag) => {
            const href = (tag.match(/\bhref=["']([^"']+)["']/) || [])[1];
            if (!href || /^(https?:)?\/\//.test(href)) return tag;
            const key = `${ctx.filename}:${i++}`;
            kept.set(key, tag);
            return `<!--keep-css|${key}-->`;
          });
        },
      },
    },
    {
      name: 'keep-stylesheets:post',
      transformIndexHtml: {
        order: 'post',
        handler: (html) => html.replace(/<!--keep-css\|(.+?)-->/g, (_, key) => kept.get(key)),
      },
    },
  ];
};

export default defineConfig({
  // React/ReactDOM are loaded as global vendor scripts, so JSX compiles to React.createElement.
  oxc: { jsx: { runtime: 'classic', pragma: 'React.createElement', pragmaFrag: 'React.Fragment' } },
  build: {
    assetsDir: 'build', // keep hashed bundles apart from the copied assets/ tree
    rollupOptions: { input },
  },
  plugins: [serveClassicScriptsRaw(), ...keepStylesheets(), copyRuntimeAssets(), legacyRedirects()],
});
