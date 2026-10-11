#!/usr/bin/env node
// Scans assets/images/** and writes assets/scripts/data/bilder-data.js, the list behind the
// "Bild wählen" picker in /dm/nsc-verwaltung. Groups are the top-level folders
// (npc, races, monster, …); entries are paths relative to assets/images.
// Runs automatically before `npm run build` / `npm run dev` (see package.json: prebuild, predev),
// or manually: node tools/generate-bilder-data.mjs

import { readdirSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const IMG_DIR = join(ROOT, 'assets/images');
const OUTFILE = join(ROOT, 'assets/scripts/data/bilder-data.js');
const EXT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif']);
const SKIP = new Set(['favicon']);   // keine Porträts

// der NPC-Ordner soll existieren, damit man weiß, wohin neue Porträts gehören
const npcDir = join(IMG_DIR, 'npc');
if (!existsSync(npcDir)) mkdirSync(npcDir, { recursive: true });

function walk(dir, rel, out) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) walk(join(dir, e.name), rel ? rel + '/' + e.name : e.name, out);
    else if (EXT.has(extname(e.name).toLowerCase())) out.push(rel ? rel + '/' + e.name : e.name);
  }
}

const groups = {};
for (const top of readdirSync(IMG_DIR, { withFileTypes: true })) {
  if (!top.isDirectory() || SKIP.has(top.name)) continue;
  const list = [];
  walk(join(IMG_DIR, top.name), top.name, list);
  groups[top.name] = list.sort((a, b) => a.localeCompare(b, 'de'));
}
// npc zuerst, damit der Standardfilter vorn steht
const ordered = { npc: groups.npc || [] };
for (const k of Object.keys(groups).sort()) if (k !== 'npc') ordered[k] = groups[k];

const total = Object.values(ordered).reduce((n, l) => n + l.length, 0);
const body = '// GENERIERT von tools/generate-bilder-data.mjs — nicht von Hand bearbeiten.\n' +
  '// Pfade relativ zu assets/images/, gruppiert nach Ordner.\n' +
  'window.BILDER_DATA = ' + JSON.stringify(ordered) + ';\n';
writeFileSync(OUTFILE, body);
console.log(`bilder-data.js: ${total} Bilder in ${Object.keys(ordered).length} Gruppen`);
