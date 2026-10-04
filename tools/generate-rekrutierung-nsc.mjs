// Erzeugt assets/scripts/data/monster/rekrutierung-data.js:
// pro Division und Rang (8 x 10) der NSC-Statblock aus /spiel/rekrutierung als Monster-Eintrag
// (Quelle "Rekrutierung", Unterart "NPC"). Die Werte kommen aus computeNscStats()
// in assets/scripts/shared/nsc-statblock.js; dort und in divisions-data.js ändern, dann neu generieren:
//   node tools/generate-rekrutierung-nsc.mjs
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ctx = { React: { createElement() {}, useState() {} }, console };
ctx.window = ctx;
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, 'assets/scripts/data/divisions-data.js'), 'utf8'), ctx);
vm.runInContext(fs.readFileSync(path.join(root, 'assets/scripts/shared/nsc-statblock.js'), 'utf8'), ctx);
const DIVS = ctx.DIVISIONS_DATA;

// ── Herausforderungsgrad (Näherung nach DMG-Tabelle) ────────────
const LADDER = [0, 0.125, 0.25, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const XP = { 0: 10, 0.125: 25, 0.25: 50, 0.5: 100, 1: 200, 2: 450, 3: 700, 4: 1100, 5: 1800, 6: 2300, 7: 2900, 8: 3900, 9: 5000, 10: 5900 };
const HP_MAX = [6, 35, 49, 70, 85, 100, 115, 130, 145, 160, 175, 190, 205, 220];
const DMG_MAX = [1, 3, 5, 8, 14, 20, 26, 32, 38, 44, 50, 56, 62, 68];
const idxFor = (v, table) => { const i = table.findIndex(m => v <= m); return i < 0 ? table.length - 1 : i; };
const expAC = c => (c <= 3 ? 13 : c <= 4 ? 14 : c <= 7 ? 15 : 16);
const expAtk = c => (c <= 2 ? 3 : c <= 4 ? 4 : c <= 7 ? 6 : 7);

function diceAvg(spec) {
  const m = /^(\d+)W(\d+)(?:([+-])(\d+))?$/.exec(spec);
  if (!m) return 0;
  return +m[1] * (+m[2] / 2 + 0.5) + (m[3] ? (m[3] === '-' ? -1 : 1) * +m[4] : 0);
}

function crFor(s) {
  let di = idxFor(s.tp, HP_MAX);
  di += Math.trunc((s.rk - expAC(LADDER[di])) / 2);
  const atk = s.aktionen.find(a => /Trefferwurf/.test(a.beschreibung));
  const hit = atk ? +/\+(\d+) auf den Trefferwurf/.exec(atk.beschreibung)[1] : 0;
  const dmg = atk ? diceAvg(/Treffer: (\S+)/.exec(atk.beschreibung)[1]) : 0;
  const attacks = s.aktionen.some(a => /greift zweimal an/.test(a.beschreibung)) ? 2 : 1;
  let oi = idxFor(dmg * attacks, DMG_MAX);
  oi += Math.trunc((hit - expAtk(LADDER[oi])) / 2);
  const i = Math.max(0, Math.min(LADDER.length - 1, Math.round((di + oi) / 2)));
  return LADDER[i];
}

const KEY = { DEX: 'GES', CON: 'KON', WIS: 'WEI' };
const out = [];

for (const d of DIVS) {
  const divName = d.name.replace(/^Die\s+/, '');
  for (const r of d.raenge) {
    const s = ctx.computeNscStats(d, r.rang);
    const cr = crFor(s);
    const saves = {};
    Object.entries(s.rettungswuerfe).forEach(([k, v]) => { saves[KEY[k] || k] = v; });
    const text = s.besonderheit.beschreibung;
    const cut = text.indexOf('. ');
    out.push({
      name: `${s.titel} (${divName}, Rang ${r.rang})`,
      art: 'Humanoid',
      unterart: 'NPC',
      groesse: 'Mittelgroß',
      gesinnung: 'Jede Gesinnung',
      cr, xp: XP[cr],
      rk: s.rk, ruestungstyp: s.ruestungstyp,
      tp: s.tp, tp_wuerfel: s.tp_wuerfel,
      bewegung: { Gehen: s.bewegung },
      attribute: s.attribute,
      rettungswuerfe: saves,
      fertigkeiten: s.fertigkeiten,
      schadensresistenzen: [], schadensimmunitaeten: [], verwundbarkeiten: [], zustandsimmunitaeten: [],
      sinne: [],
      passiveWahrnehmung: s.passiveWahrnehmung,
      sprachen: ['Gemein'],
      umgebung: [],
      bild: d.logo || null,
      beschreibung: [`${s.titel}, Rang ${r.rang} der Division ${divName}. ${r.beschreibung}`],
      besonderheiten: [{ name: text.slice(0, cut), beschreibung: text.slice(cut + 2) }],
      aktionen: s.aktionen,
      bonusaktionen: [], reaktionen: [], legendaere_aktionen: null,
      source: 'Rekrutierung',
    });
  }
}

const file = path.join(root, 'assets/scripts/data/monster/rekrutierung-data.js');
fs.writeFileSync(file,
  '// GENERIERT von tools/generate-rekrutierung-nsc.mjs – nicht von Hand bearbeiten.\n' +
  'window.MONSTER_DATA_REKRUTIERUNG = ' + JSON.stringify(out, null, 2) + ';\n');
console.log(out.length, 'NSC-Statblöcke geschrieben');
const byCr = {};
out.forEach(m => { byCr[m.cr] = (byCr[m.cr] || 0) + 1; });
console.log('HG-Verteilung:', byCr);
