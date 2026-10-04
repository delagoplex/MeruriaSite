// Erzeugt assets/scripts/data/monster/rekrutierung-data.js:
// pro Division und Rang (8 x 10) der NSC-Statblock aus /spiel/rekrutierung als Monster-Eintrag
// (Quelle "Rekrutierung", Unterart "NPC"). Die Werte kommen aus nscToMonster() in
// assets/scripts/shared/nsc-statblock.js (dieselbe Berechnung wie die Rekrutierungsseite);
// dort und in divisions-data.js ändern, dann neu generieren:
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

const out = [];
for (const d of ctx.DIVISIONS_DATA) {
  const divName = d.name.replace(/^Die\s+/, '');
  for (const r of d.raenge) {
    const { titel, prof, ...m } = ctx.nscToMonster(d, r.rang);
    out.push({
      name: `${titel} (${divName}, Rang ${r.rang})`,
      ...m,
      bild: d.logo || null,
      beschreibung: [`${titel}, Rang ${r.rang} der Division ${divName}. ${r.beschreibung}`],
      source: 'Rekrutierung',
    });
  }
}

const file = path.join(root, 'assets/scripts/data/monster/rekrutierung-data.js');
fs.writeFileSync(file,
  '// GENERIERT von tools/generate-rekrutierung-nsc.mjs – nicht von Hand bearbeiten.\n' +
  'window.MONSTER_DATA_REKRUTIERUNG = ' + JSON.stringify(out, null, 2) + ';\n');
console.log(out.length, 'NSC-Statblöcke geschrieben');
