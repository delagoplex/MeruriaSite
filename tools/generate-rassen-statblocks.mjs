// Generates assets/scripts/data/monster/spielbare-rassen-data.js: one NPC statblock per playable race.
//
// Source: assets/scripts/data/rassen/<race>.js (tags, statblock.features, lore image) and the innate
// talents in talente-data.js. Races without a `statblock` there (placeholders) are skipped.
// Run with:  node tools/generate-rassen-statblocks.mjs
//
// The generated file is checked in; re-running overwrites it, so edit this script (or the race data)
// rather than the output.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const rassenDir = path.join(root, 'assets/scripts/data/rassen');
const outFile = path.join(root, 'assets/scripts/data/monster/spielbare-rassen-data.js');

const load = file => {
  const window = {};
  new Function('window', fs.readFileSync(file, 'utf8'))(window);
  return window;
};

const talente = load(path.join(root, 'assets/scripts/data/talente-data.js')).TALENTE_DATA;
const talentByName = new Map(talente.map(t => [t.name, t]));

const ATTR = { 'Stärke': 'STR', 'Geschicklichkeit': 'DEX', 'Konstitution': 'CON', 'Intelligenz': 'INT', 'Weisheit': 'WIS', 'Charisma': 'CHA' };
const mod = v => Math.floor((v - 10) / 2);
const num = s => parseFloat(String(s).replace(',', '.'));
const meters = s => `${String(s).replace('.', ',')} m`;

// damage type stems found in resistance sentences -> monster data vocabulary
const DAMAGE_STEMS = [
  ['gift', 'Gift'], ['feuer', 'Feuer'], ['kälte', 'Kälte'], ['blitz', 'Blitz'], ['säure', 'Säure'],
  ['nekrotisch', 'Nekrotisch'], ['gleißend', 'Gleißend'], ['psychisch', 'Psychisch'], ['schall', 'Schall'],
  ['wucht', 'Wucht'], ['hieb', 'Hieb'], ['stich', 'Stich']
];

const SKIP_FEATURES = new Set(['Kreaturtyp', 'Kreaturentyp', 'Größenkategorie', 'Angeborenes Talent']);

const races = [];
const skipped = [];

for (const file of fs.readdirSync(rassenDir).sort()) {
  const data = load(path.join(rassenDir, file)).RASSEN_DETAIL_DATA || {};
  const race = Object.values(data)[0];
  if (!race) continue;
  if (!race.statblock) { skipped.push(race.name); continue; }
  races.push(race);
}

const entries = races.flatMap(race => {
  const sb = race.statblock;
  const tags = race.tags || [];
  const features = sb.features || [];
  const featText = f => f.text || '';
  const find = re => features.find(f => re.test(f.name));

  // ── type & size ──
  const rawType = tags[0] || 'Humanoid';
  const art = /^Feen?/.test(rawType) ? 'Feenwesen' : rawType === 'Schleim' ? 'Schlick' : rawType === 'Konstrukt' ? 'Konstrukt' : 'Humanoid';
  const sizeFeature = find(/^Größenkategorie$/);
  const sizeSource = `${sizeFeature ? featText(sizeFeature) : ''} ${tags[1] || ''}`;
  const groesse = /Mittel/.test(sizeSource) ? 'Mittelgroß' : /Klein/.test(sizeSource) ? 'Klein' : /Winzig/.test(sizeSource) ? 'Winzig' : /Groß/.test(sizeSource) ? 'Groß' : 'Mittelgroß';

  // ── attributes ──
  const attribute = { STR: 10, DEX: 10, CON: 10, INT: 10, WIS: 10, CHA: 10 };
  for (const inc of sb.attributErhoehungen || []) {
    const m = inc.match(/\+(\d)\s+(\S+)/);
    if (m && ATTR[m[2]]) attribute[ATTR[m[2]]] += parseInt(m[1], 10);
  }
  if (find(/^Alle Attribute \+1$/)) for (const k of Object.keys(attribute)) attribute[k] += 1;

  // ── movement ──
  // body.bewegungsrate is free text ("9 m (Gehen und Schwimmen)", "9 m (Gehen), 12 m (Schwimmen)", ...);
  // the third tag is a short form ("9 m Flug", "9 m + Klettern 9 m", ...).
  const body = race.koerperlicherMerkmale || {};
  const speedTag = tags[2] || '';
  const speedText = sb.geschwindigkeit || body.bewegungsrate || '';
  const bewegung = {};
  const numbers = speedText.match(/[\d,]+(?= m)/g) || [];
  const firstTag = (speedTag.match(/[\d,]+(?= m)/) || [])[0];
  const walkRaw = /oder/.test(speedText) ? numbers.sort((x, y) => num(y) - num(x))[0] : numbers[0];
  const walk = meters(walkRaw || firstTag || '9');
  bewegung['Gehen'] = walk;
  const MODES = { Schwimmen: 'Schwimmen', Klettern: 'Klettern', Graben: 'Graben', Fliegen: 'Fliegen' };
  for (const mm of speedText.matchAll(/([\d,]+) m \((Schwimmen|Klettern|Graben|Fliegen)/g)) bewegung[MODES[mm[2]]] = meters(mm[1]);
  for (const mm of speedText.matchAll(/Gehen und (Schwimmen|Fliegen)/g)) bewegung[MODES[mm[1]]] = bewegung[MODES[mm[1]]] || walk;
  for (const mm of speedTag.matchAll(/([\d,]+) m \+ (Klettern|Schwimmen)/g)) bewegung[MODES[mm[2]]] = bewegung[MODES[mm[2]]] || meters(mm[1]);
  if (/^[\d,]+ m Flug$/.test(speedTag)) bewegung['Fliegen'] = bewegung['Fliegen'] || walk;
  if (/^[\d,]+ m Schwimmen$/.test(speedTag)) bewegung['Schwimmen'] = bewegung['Schwimmen'] || walk;
  for (const f of features) {
    const t = featText(f);
    if (/entspricht deine Flugbewegungsrate deiner Schrittbewegungsrate|Flugbewegungsrate entspricht deiner Schrittbewegungsrate/.test(t)) bewegung['Fliegen'] = bewegung['Fliegen'] || walk;
    if (/Kletterbewegungsrate (?:ist )?gleich deiner Schrittbewegungsrate/.test(t)) bewegung['Klettern'] = bewegung['Klettern'] || walk;
  }

  // ── armour class ──
  let rk = 10, ruestungstyp = null;
  for (const f of features) {
    if (!/Natürliche Rüstung|Gepanzerte Hülle/.test(f.name)) continue;
    const t = featText(f);
    const dyn = t.match(/(\d+)\s*\+\s*(?:dein\w*\s+)?(Geschicklichkeit|Konstitution|GES|KON)/);
    const fixed = t.match(/Basis-RK (\d+)/);
    if (dyn) { rk = parseInt(dyn[1], 10) + mod(/^(Geschicklichkeit|GES)/.test(dyn[2]) ? attribute.DEX : attribute.CON); ruestungstyp = 'natürliche Rüstung'; }
    else if (fixed) { rk = parseInt(fixed[1], 10); ruestungstyp = 'natürliche Rüstung'; }
  }

  // ── resistances ──
  const resist = [];
  for (const f of features) {
    if (/^—/.test(f.name) || /^Drakonische/.test(f.name)) continue;
    const t = featText(f);
    if (!/[Rr]esistent|[Rr]esistenz/.test(t) || !/schaden/i.test(t)) continue;
    for (const sentence of t.split(/(?<=[.·])\s+/)) {
      if (!/[Rr]esistent|[Rr]esistenz/.test(sentence) || !/schaden/i.test(sentence)) continue;
      for (const [stem, label] of DAMAGE_STEMS) {
        if (new RegExp(stem, 'i').test(sentence) && !resist.includes(label)) resist.push(label);
      }
    }
  }

  // ── senses ──
  const sinne = [];
  const dark = features.find(f => /Dunkelsicht/.test(f.name));
  const darkTag = speedTag.match(/Dunkelsicht ([\d,]+) m/) || (tags.join(' ').match(/Dunkelsicht ([\d,]+) m/));
  if (dark || darkTag) {
    const range = ((dark && featText(dark).match(/([\d,]+)\s*m/)) || darkTag || [])[1] || '18';
    sinne.push(`Dunkelsicht ${range} m`);
  }

  // ── alignment ──
  const alignRaw = tags[tags.length - 1] || '';
  const gesinnung = /Alle Gesinnungen|Unendlich alt|Jahreszeitlich/.test(alignRaw) || !alignRaw
    ? 'Beliebige Gesinnung'
    : alignRaw.charAt(0) + alignRaw.slice(1).toLowerCase().replace(/(^|[-\s])([a-zäöü])/g, (x, a, b) => a + b);

  // ── innate talent: one statblock per option ──
  const talentFeature = find(/^Angeborenes Talent$/);
  const options = (talentFeature && talentFeature.talente) || [];
  const besonderheiten = [];
  for (const f of features) {
    if (SKIP_FEATURES.has(f.name)) continue;
    if (!f.text) continue;
    besonderheiten.push({ name: f.name, beschreibung: f.text });
  }
  const talentTrait = chosen => {
    const t = talentByName.get(chosen);
    const text = t
      ? [t.kurzbeschreibung, ...(t.vorzuege || [])].filter(Boolean).join(' ')
      : 'Beschreibung siehe Talente.';
    return { name: `Angeborenes Talent: ${chosen}`, beschreibung: text };
  };

  const strMod = mod(attribute.STR);
  const sign = n => (n >= 0 ? `+${n}` : `${n}`);
  const dmg = `1W4${strMod ? sign(strMod) : ''}`;

  const imgUrl = race.lore && race.lore.introBild && race.lore.introBild.url;
  const bild = imgUrl && fs.existsSync(path.join(root, imgUrl)) ? imgUrl : null;

  // races without a talent list get a single statblock
  return (options.length ? options : [null]).map(chosen => ({
    // "(Rasse …)" suffix: several races share a name with an existing monster (Aarakocra, Gnoll, Kenku, ...)
    name: chosen ? `${race.name} (Rasse: ${chosen})` : `${race.name} (Rasse)`,
    art,
    unterart: 'Rasse',
    groesse,
    gesinnung,
    cr: 0,
    xp: 10,
    rk,
    ruestungstyp,
    tp: 4,
    tp_wuerfel: '1W8',
    bewegung,
    attribute,
    rettungswuerfe: {},
    fertigkeiten: {},
    schadensresistenzen: resist,
    schadensimmunitaeten: [],
    verwundbarkeiten: [],
    zustandsimmunitaeten: [],
    sinne,
    passiveWahrnehmung: 10 + mod(attribute.WIS),
    sprachen: sb.sprachen && sb.sprachen.length ? sb.sprachen : ['Gemeinsprache'],
    umgebung: [],
    bild,
    beschreibung: [
      sb.beschreibung || race.subtitle || '',
      `Rassenvorlage für NSCs: durchschnittliche Werte (Attribute 10) mit den Rassenmerkmalen. Für einen konkreten NSC Klasse, Beruf oder einen passenden NSC-Statblock ergänzen und die Rassenmerkmale übertragen.${chosen ? ` Angeborenes Talent: ${chosen}.` : ''}`
    ].filter(Boolean),
    besonderheiten: chosen ? [...besonderheiten, talentTrait(chosen)] : besonderheiten,
    aktionen: [
      { name: 'Keule', beschreibung: `Nahkampfwaffenangriff: ${sign(2 + strMod)} auf Treffer, Reichweite 1,5 m, ein Ziel. Treffer: ${Math.max(1, 2 + strMod)} (${dmg}) Wuchtschaden.` }
    ],
    bonusaktionen: [],
    reaktionen: [],
    legendaere_aktionen: null,
    source: 'Spielbare Rassen'
  }));
});

entries.sort((a, b) => a.name.localeCompare(b.name, 'de'));

const header = `// Spielbare Rassen — NSC-Statblöcke je Rasse und angeborenem Talent (Rassenvorlage mit Rassenmerkmalen).
// Generiert von tools/generate-rassen-statblocks.mjs aus assets/scripts/data/rassen/*.js — dort ändern, nicht hier.
// Noch ohne Statblock (Rassen-Datei hat keine statblock-Daten): ${skipped.join(', ') || '—'}.

`;
fs.writeFileSync(outFile, `${header}window.MONSTER_DATA_SPIELBARE_RASSEN = ${JSON.stringify(entries, null, 2)};\n`);
console.log(`Wrote ${entries.length} statblocks to ${path.relative(root, outFile)}`);
console.log(`Skipped (no statblock data): ${skipped.join(', ')}`);
