import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

// Every HTML file is its own entry (multi-page site).
const pages = [
  ...fs.readdirSync('.').filter(f => f.endsWith('.html')),
  ...fs.readdirSync('divisionen').filter(f => f.endsWith('.html')).map(f => `divisionen/${f}`),
];
const input = Object.fromEntries(pages.map(f => [f.replace(/\.html$/, ''), path.resolve(f)]));

// Classic <script src="assets/..."> files and images referenced from JS strings are not
// seen by the bundler, so copy them to dist/ unchanged (same URLs as in dev).
const RUNTIME_ASSET_DIRS = ['assets/images', 'assets/scripts', 'assets/components', 'assets/styles'];
const copyRuntimeAssets = () => ({
  name: 'copy-runtime-assets',
  apply: 'build',
  closeBundle() {
    for (const dir of RUNTIME_ASSET_DIRS) {
      fs.cpSync(dir, path.join('dist', dir), { recursive: true });
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
      if (!/^\/assets\/(scripts|components)\/.+\.js$/.test(url)) return next();
      const file = path.join(process.cwd(), url);
      if (!fs.existsSync(file)) return next();
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
          return html.replace(/<link rel="stylesheet" href="([^"]+)">/g, (tag, href) => {
            if (/^(https?:)?\/\//.test(href)) return tag;
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
  plugins: [serveClassicScriptsRaw(), ...keepStylesheets(), copyRuntimeAssets()],
});
