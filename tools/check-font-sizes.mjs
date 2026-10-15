#!/usr/bin/env node
// Lists font-size declarations below the site minimum (11px). Exit code 1 if any are found.
//   node tools/check-font-sizes.mjs

import { readdirSync, readFileSync } from 'node:fs';
import { join, extname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const MIN = 11;
const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', 'vendor', 'data', 'images', 'supabase', '.claude']);
const EXT = new Set(['.css', '.jsx', '.js', '.html']);
const RES = [
  /font-size\s*:\s*(\d+(?:\.\d+)?)px/g,
  /fontSize\s*:\s*['"](\d+(?:\.\d+)?)px['"]/g,
  /fontSize\s*:\s*(\d+(?:\.\d+)?)(?=\s*[,}\n\r])/g,
  // Größen, die als Text an Beschriftungs-Helfer gehen, z. B. mono('Titel', '7.5px')
  /\bmono\([^)]*?,\s*['"](\d+(?:\.\d+)?)px['"]/g,
];
let found = 0;

function walk(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) { if (!SKIP_DIRS.has(e.name)) walk(p); continue; }
    if (!EXT.has(extname(e.name))) continue;
    const rel = relative(ROOT, p).replace(/\\/g, '/');
    if (rel.startsWith('tools/') || rel.startsWith('public/')) continue;
    if (rel.startsWith('assets/scripts/') && !rel.startsWith('assets/scripts/shared/')) continue;
    readFileSync(p, 'utf8').split(/\r?\n/).forEach((line, i) => {
      for (const re of RES) {
        re.lastIndex = 0;
        let m;
        while ((m = re.exec(line))) {
          if (parseFloat(m[1]) < MIN) { found++; console.log(`${rel}:${i + 1}  ${m[0]}`); }
        }
      }
    });
  }
}

walk(ROOT);
console.log(found ? `\n${found} Angaben unter ${MIN}px` : `Keine Schrift unter ${MIN}px`);
process.exit(found ? 1 : 0);
