#!/usr/bin/env node
// Scans assets/images/monster/** and regenerates galerie-data.js.
// Existing entries keep their original date; new images get today's date.
// Run manually: node tools/generate-galerie-data.mjs
// Or automatically via .github/workflows/generate-galerie.yml

import { readdirSync, writeFileSync, readFileSync, statSync, existsSync } from 'fs';
import { join, basename, extname } from 'path';
import { fileURLToPath } from 'url';

const ROOT    = fileURLToPath(new URL('..', import.meta.url));
const OUTFILE = join(ROOT, 'assets/scripts/data/galerie-data.js');
const IMG_DIR = join(ROOT, 'assets/images/monster');

const TODAY = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

// ── Load existing dates so we don't overwrite them ─────────────────────────
const existingDates = {}; // img path → date string
if (existsSync(OUTFILE)) {
  for (const line of readFileSync(OUTFILE, 'utf8').split('\n')) {
    const img  = line.match(/img:"([^"]+)"/)?.[1];
    const date = line.match(/date:"([^"]+)"/)?.[1];
    if (img && date) existingDates[img] = date;
  }
}

// ── Hue per subfolder ──────────────────────────────────────────────────────
const FOLDER_HUE = {
  almanach:          220,
  avernus:             0,
  foliant:           300,
  monsterhandbuch:   270,
  'ruhm-der-riesen':  30,
  schatzkammer:       50,
};

function toTitle(filename) {
  return basename(filename, extname(filename))
    .replace(/_/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

// Monster images are intentionally excluded from the public gallery.
// Keep this generator focused on the curated character/setting images only.
const charaktere = [
  { id:'c1', title:'Aurelia',   hue:150, img:'assets/images/gods/backgrounds/BG_Aurelia.webp'  },
  { id:'c2', title:'Elysarion', hue:200, img:'assets/images/gods/backgrounds/BG_Elysarion.png' },
  { id:'c3', title:'Vindeah',   hue:280, img:'assets/images/gods/backgrounds/BG_Vindeah.png'   },
  { id:'c4', title:'Daramur',   hue:45,  img:'assets/images/gods/backgrounds/BG_Daramur.png'   },
  { id:'c5', title:'Aetherius', hue:220, img:'assets/images/gods/backgrounds/BG_Aetherius.png' },
  { id:'c6', title:'Maledor',   hue:300, img:'assets/images/gods/backgrounds/BG_Maledor.png'   },
  { id:'c7', title:'Serenith',  hue:170, img:'assets/images/gods/backgrounds/BG_Serenith.png'  },
  { id:'c8', title:'Thraxis',   hue:15,  img:'assets/images/gods/backgrounds/BG_Thraxis.png'   },
].map(e => ({ ...e, date: existingDates[e.img] ?? TODAY }));

// ── Serialize ──────────────────────────────────────────────────────────────
function ser(img) {
  return `    {id:${JSON.stringify(img.id)},title:${JSON.stringify(img.title)},hue:${img.hue},date:${JSON.stringify(img.date)},img:${JSON.stringify(img.img)}}`;
}

const out = `// AUTO-GENERATED — do not edit by hand.
// Run: node tools/generate-galerie-data.mjs
// Existing entries keep their date. New images get today's date (${TODAY}).

window.GALERIE_COLLECTIONS = [
  { id:'charaktere', name:'Charaktere & NSCs', hue:150, images:[
${charaktere.map(ser).join(',\n')}
  ]}
];

window.GALERIE_ALL_IMAGES = window.GALERIE_COLLECTIONS.flatMap(c => c.images.map(img => ({...img, collectionName: c.name})));
window.GALERIE_DEFAULT_FEATURED = window.GALERIE_ALL_IMAGES[0];
`;

writeFileSync(OUTFILE, out, 'utf8');
console.log('✓ galerie-data.js — monster images excluded from public gallery');
