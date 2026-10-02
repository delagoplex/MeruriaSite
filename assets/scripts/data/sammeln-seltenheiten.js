/* ─────────────────────────────────────────────────────────────────
   Crafting Data — Pflanzen, Materialien, Reagenzien-Effekte,
   Regionen, Komplikationen, Kreaturenteile.
   Geteilte Datenbank für alle Crafting-Komponenten.
   ───────────────────────────────────────────────────────────────── */

// ── SELTENHEIT (rarity ordering & visual data) ─────────────────────
window.SELTENHEITEN = [
  { id:'gewoehnlich', label:'Gewöhnlich',  short:'I',   level:1, sg:8,  hue:'rgba(180,180,200,0.85)', glow:'rgba(180,180,200,0.18)' },
  { id:'ungewoehnlich', label:'Ungewöhnlich', short:'II',  level:2, sg:12, hue:'rgba(120,220,160,0.85)', glow:'rgba(120,220,160,0.18)' },
  { id:'selten', label:'Selten',       short:'III', level:3, sg:15, hue:'rgba(110,170,255,0.9)',  glow:'rgba(110,170,255,0.18)' },
  { id:'sehr_selten', label:'Sehr Selten',  short:'IV',  level:4, sg:18, hue:'rgba(200,130,255,0.9)',  glow:'rgba(200,130,255,0.18)' },
  { id:'legendaer', label:'Legendär',     short:'V',   level:5, sg:22, hue:'rgba(255,180,90,0.95)',  glow:'rgba(255,180,90,0.22)' },
];

// quick lookup by id, label, or short
window.RARITY_BY = (() => {
  const m = {};
  window.SELTENHEITEN.forEach(s => { m[s.id] = s; m[s.label] = s; m[s.short] = s; m[s.level] = s; });
  return m;
})();

// ── EFFECT-LEVEL → SELTENHEIT (Konkoktion) ─────────────────────────
// Auf welche Seltenheit eine Konkoktion kommt, wenn das höchste Reagenzien-Level X ist.
window.KONKOKTION_SELTENHEIT = {
  1: 'gewoehnlich',
  2: 'ungewoehnlich',
  3: 'selten',
  4: 'sehr_selten',
};

window.KONKOKTION_DAUER = {
  gewoehnlich:   '1 Minute',
  ungewoehnlich: '10 Minuten',
  selten:        '1 Stunde',
  sehr_selten:   '5 Stunden',
};

window.BOMBEN_SG_RADIUS = {
  gewoehnlich:   { sg:10, radius:'1,5 m' },
  ungewoehnlich: { sg:13, radius:'3 m' },
  selten:        { sg:15, radius:'4,5 m' },
  sehr_selten:   { sg:17, radius:'6 m' },
};

window.GIFT_SG = {
  gewoehnlich:10, ungewoehnlich:13, selten:15, sehr_selten:17,
};

// ── MAX KONKOKTIONS-SELTENHEIT NACH CHARAKTERSTUFE ─────────────────
window.MAX_KONKOKTION_NACH_STUFE = [
  { stufe:1,  max:'gewoehnlich' },
  { stufe:3,  max:'ungewoehnlich' },
  { stufe:7,  max:'selten' },
  { stufe:10, max:'sehr_selten' },
];

// ── HANDWERKS-KOSTEN UND -ZEITEN NACH TYP ──────────────────────────
// Schlüssel: [reagenzienAnzahl] → { zeit:Stunden, kosten:Hade }
window.HANDWERK_KOSTEN = {
  bombe: {
    1: { zeit:8,   kosten:2500 },
    2: { zeit:24,  kosten:8000 },
    3: { zeit:40,  kosten:25000 },
    4: { zeit:80,  kosten:50000 },
  },
  gift: {
    1: { zeit:8,   kosten:2500 },
    2: { zeit:24,  kosten:10000 },
    3: { zeit:40,  kosten:50000 },
    4: { zeit:80,  kosten:100000 },
  },
  trank: {
    1: { zeit:8,   kosten:2500 },
    2: { zeit:40,  kosten:10000 },
    3: { zeit:120, kosten:100000 },
    4: { zeit:160, kosten:1000000 },
  },
  mahlzeit: {
    1: { zeit:1, kosten:0, portionen:2 },
    2: { zeit:2, kosten:0, portionen:4 },
    3: { zeit:3, kosten:0, portionen:6 },
    4: { zeit:4, kosten:0, portionen:8 },
  },
};

// Schriftrollen nach Zaubergrad
window.SCHRIFTROLLE_KOSTEN = [
  { grad:'Zaubertrick', zeit:8,    kosten:1500 },
  { grad:'1. Grad',     zeit:8,    kosten:2500 },
  { grad:'2. Grad',     zeit:24,   kosten:10000 },
  { grad:'3. Grad',     zeit:40,   kosten:15000 },
  { grad:'4. Grad',     zeit:80,   kosten:100000 },
  { grad:'5. Grad',     zeit:200,  kosten:150000 },
  { grad:'6. Grad',     zeit:320,  kosten:1000000 },
  { grad:'7. Grad',     zeit:400,  kosten:1250000 },
  { grad:'8. Grad',     zeit:480,  kosten:1500000 },
  { grad:'9. Grad',     zeit:960,  kosten:5000000 },
];

// Magische Gegenstände (Downtime-Tage)
window.MAGISCHE_GEGENSTAENDE_KOSTEN = [
  { seltenheit:'gewoehnlich',   tage:5,   stunden:40,   kosten:5000 },
  { seltenheit:'ungewoehnlich', tage:15,  stunden:120,  kosten:20000 },
  { seltenheit:'selten',        tage:50,  stunden:400,  kosten:200000 },
  { seltenheit:'sehr_selten',   tage:125, stunden:1000, kosten:2000000 },
  { seltenheit:'legendaer',     tage:250, stunden:2000, kosten:10000000 },
];

// ── PFLANZEN ───────────────────────────────────────────────────────
// Effekt-Strings folgen dem Format "Effekt-Name Level (Typ)"
// id, name, seltenheit, kosten (Hade), kochEffekt, bombe, gift, trank
window.PFLANZEN = [
  { id:'abyssblume', name:'Abyssblume', seltenheit:'gewoehnlich', kosten:500, koch:'Scharf', bombe:'Bombe I (Gift)', gift:'Zustand (Bewusstlos)', trank:null },
  { id:'engelblume', name:'Engelblume', seltenheit:'gewoehnlich', kosten:500, koch:'Heilsam I', bombe:'Blendend I', gift:null, trank:'Stärkung I (WEI)' },
  { id:'anissaft', name:'Anissaft', seltenheit:'gewoehnlich', kosten:500, koch:'Frostig', bombe:null, gift:'Anfälligkeit I (Säure)', trank:'Resistenz I (Kälte)' },
  { id:'aschschnittlauch', name:'Aschschnittlauch', seltenheit:'ungewoehnlich', kosten:1000, koch:'Brennend', bombe:'Bombe I (Feuer)', gift:'Anfälligkeit I (Feuer)', trank:null },
  { id:'astralschattenmoos', name:'Astralschatten-Moos', seltenheit:'ungewoehnlich', kosten:1000, koch:'Scharf', bombe:'Blendend II', gift:'Intensivierung II', trank:null },
  { id:'bansheeklage', name:'Banshee-Klage', seltenheit:'gewoehnlich', kosten:500, koch:'Bitter', bombe:'Bombe I (Psychisch)', gift:'Zustand (Taubheit)', trank:null },
  { id:'schwarzblattrose', name:'Schwarzblatt-Rose', seltenheit:'gewoehnlich', kosten:500, koch:'Bitter', bombe:'Bombe I (Gift)', gift:'Schaden I', trank:'Stärkung I (WEI)' },
  { id:'blutskraut', name:'Blutskraut', seltenheit:'gewoehnlich', kosten:500, koch:'Scharf', bombe:'Bombe I (Gift)', gift:'Schaden I', trank:null },
  { id:'blauekresse', name:'Blaue Kresse', seltenheit:'ungewoehnlich', kosten:1000, koch:'Stärkend I', bombe:null, gift:'Intensivierung I', trank:'Bewegung I' },
  { id:'blauesmeer', name:'Blaue Meerespflanze', seltenheit:'ungewoehnlich', kosten:1000, koch:'Frostig', bombe:'Bombe I (Kälte)', gift:null, trank:'Wasseratmung I' },
  { id:'knochenknoblauch', name:'Knochenknoblauch', seltenheit:'ungewoehnlich', kosten:1000, koch:'Haltbar I', bombe:'Bombe I (Nekrose)', gift:'Schaden I', trank:null },
  { id:'karmindistel', name:'Karmindistel', seltenheit:'ungewoehnlich', kosten:1000, koch:'Heilsam II', bombe:null, gift:'Anfälligkeit II (Glanz)', trank:'Heilung II' },
  { id:'himmelsbluete', name:'Himmlische Blüte', seltenheit:'ungewoehnlich', kosten:1000, koch:'Nahrhaft', bombe:'Bombe II (Kraft)', gift:null, trank:'Nachtsicht II' },
  { id:'chromschlamm', name:'Chromatischer Schlamm', seltenheit:'gewoehnlich', kosten:500, koch:'Bitter', bombe:'Bombe I (Säure)', gift:null, trank:'Resistenz I (Säure)' },
  { id:'karmesinspry', name:'Karmesin-Sprödbusch', seltenheit:'gewoehnlich', kosten:500, koch:'Heilsam I', bombe:null, gift:'Anfälligkeit I (Psychisch)', trank:'Wiederherstellung I' },
  { id:'drachenzunge', name:'Drachenzungenpetalen', seltenheit:'gewoehnlich', kosten:500, koch:'Brennend', bombe:'Bombe I (Feuer)', gift:null, trank:'Resistenz I (Feuer)' },
  { id:'ephedra', name:'Getrocknete Ephedra', seltenheit:'gewoehnlich', kosten:500, koch:'Bitter', bombe:'Nebel I', gift:null, trank:'Stärkung I (KON)' },
  { id:'drojos', name:'Drojos-Efeu', seltenheit:'gewoehnlich', kosten:500, koch:'Bitter', bombe:null, gift:'Anfälligkeit I (Nekrose)', trank:'Stärkung I (GES)' },
  { id:'duskelkraut', name:'Duskelkraut', seltenheit:'gewoehnlich', kosten:500, koch:'Bitter', bombe:'Nebel I', gift:'Anfälligkeit I (Kraft)', trank:null },
  { id:'ebrium', name:'Ebrium-Pilz', seltenheit:'gewoehnlich', kosten:500, koch:'Sättigend I', bombe:'Bombe I (Gift)', gift:'Schwäche I (STR)', trank:null },
  { id:'ecire', name:'Ecire-Lorbeer', seltenheit:'ungewoehnlich', kosten:1000, koch:'Sättigend I', bombe:null, gift:'Anfälligkeit I (Donner)', trank:'Wiederherstellung I' },
  { id:'ellond', name:'Ellond-Gestrüpp', seltenheit:'gewoehnlich', kosten:500, koch:'Brennend', bombe:'Bombe I (Feuer)', gift:null, trank:'Heilung I' },
  { id:'glutwurzel', name:'Glutwurzel', seltenheit:'ungewoehnlich', kosten:1000, koch:'Brennend', bombe:'Bombe II (Feuer)', gift:null, trank:'Resistenz II (Feuer)' },
  { id:'frostlilie', name:'Frostblumen-Lilie', seltenheit:'ungewoehnlich', kosten:1000, koch:'Frostig', bombe:'Bombe II (Kälte)', gift:null, trank:'Resistenz II (Kälte)' },
  { id:'frennmoos', name:'Frenn-Moos', seltenheit:'gewoehnlich', kosten:500, koch:'Bitter', bombe:'Bombe I (Gift)', gift:'Anfälligkeit I (Gift)', trank:null },
  { id:'geisterglocke', name:'Geisterschneeglocke', seltenheit:'gewoehnlich', kosten:500, koch:'Frostig', bombe:'Bombe I (Nekrose)', gift:'Anfälligkeit I (Nekrose)', trank:null },
  { id:'koboldschlamm', name:'Koboldschlamm', seltenheit:'gewoehnlich', kosten:500, koch:'Scharf', bombe:'Bombe I (Säure)', gift:null, trank:'Resistenz I (Gift)' },
  { id:'gluehdunkel', name:'Glühende Dunkelranke', seltenheit:'ungewoehnlich', kosten:1000, koch:'Nahrhaft', bombe:null, gift:'Schwäche I (INT)', trank:'Resistenz I (Psychisch)' },
  { id:'sonnenhut', name:'Goldener Sonnenhut', seltenheit:'gewoehnlich', kosten:500, koch:'Stärkend I', bombe:null, gift:'Zustand (Taubheit)', trank:'Stärkung I (CHA)' },
  { id:'hibiskus_gold', name:'Goldener Hibiskus', seltenheit:'gewoehnlich', kosten:500, koch:'Sättigend I', bombe:'Schlüpfrigkeit', gift:'Schwäche I (INT)', trank:null },
  { id:'gilliflower', name:'Grauer Gilliflower', seltenheit:'gewoehnlich', kosten:500, koch:'Bitter', bombe:'Bombe I (Blitz)', gift:'Zustand (Erschreckt)', trank:null },
  { id:'heilerboon', name:"Heiler's Boon", seltenheit:'ungewoehnlich', kosten:1000, koch:'Heilsam I', bombe:'Bombe I (Glanz)', gift:null, trank:'Heilung I' },
  { id:'eisendistel', name:'Eisendistel', seltenheit:'gewoehnlich', kosten:500, koch:'Scharf', bombe:'Bombe I (Kraft)', gift:null, trank:'Nahkampf I' },
  { id:'kasuni', name:'Kasuni-Saft', seltenheit:'ungewoehnlich', kosten:1000, koch:'Nahrhaft', bombe:null, gift:'Schwäche I (WEI)', trank:'Stärkung I (INT)' },
  { id:'kreet', name:'Kreet-Paste', seltenheit:'gewoehnlich', kosten:500, koch:'Scharf', bombe:'Schlüpfrigkeit', gift:'Schwäche I (GES)', trank:null },
  { id:'mondnektar', name:'Mondnektar', seltenheit:'ungewoehnlich', kosten:1000, koch:'Frostig', bombe:'Bombe I (Psychisch)', gift:null, trank:'Bewegung I' },
  { id:'mandragora', name:'Mandragora-Wurzel', seltenheit:'gewoehnlich', kosten:500, koch:'Bitter', bombe:null, gift:'Anfälligkeit I (Psychisch)', trank:'Resistenz I (Psychisch)' },
  { id:'meerjungfrau', name:'Meerjungfrauengeflecht', seltenheit:'gewoehnlich', kosten:500, koch:'Frostig', bombe:null, gift:'Schwäche I (CHA)', trank:'Wasseratmung I' },
  { id:'nachtschatten', name:'Nachtschatten', seltenheit:'gewoehnlich', kosten:500, koch:'Bitter', bombe:'Bombe I (Nekrose)', gift:null, trank:'Nachtsicht I' },
  { id:'olina', name:'Olina-Blüten', seltenheit:'gewoehnlich', kosten:500, koch:'Frostig', bombe:'Bombe I (Kälte)', gift:'Schaden I', trank:null },
  { id:'phoenixfarn', name:'Phönix-Farnblatt', seltenheit:'selten', kosten:2000, koch:'Brennend', bombe:'Bombe III (Feuer)', gift:null, trank:'Wiederherstellung III' },
  { id:'quecksilber', name:'Quecksilberfarn', seltenheit:'ungewoehnlich', kosten:1000, koch:'Stärkend II', bombe:null, gift:'Schwäche II (INT)', trank:'Bewegung II' },
  { id:'raiflower', name:'Raiflower', seltenheit:'ungewoehnlich', kosten:1000, koch:'Stärkend I', bombe:'Bombe II (Blitz)', gift:null, trank:'Resistenz II (Blitz)' },
  { id:'rabenseide', name:'Rabenseide', seltenheit:'gewoehnlich', kosten:500, koch:'Bitter', bombe:'Bombe I (Nekrose)', gift:'Schwäche I (GES)', trank:null },
  { id:'schlangenblatt', name:'Schlangenblatt', seltenheit:'ungewoehnlich', kosten:1000, koch:'Scharf', bombe:'Bombe II (Gift)', gift:'Schaden II', trank:null },
  { id:'schleimbeere', name:'Schleimbeere', seltenheit:'selten', kosten:2000, koch:'Stärkend II', bombe:null, gift:'Schwäche I (CHA)', trank:'Bewegung I' },
  { id:'somnivine', name:'Somnivine', seltenheit:'ungewoehnlich', kosten:1000, koch:'Bitter', bombe:null, gift:'Zustand (Bewusstlos)', trank:'Stärkung II (WEI)' },
  { id:'sturmgans', name:'Sturmgänseblümchen', seltenheit:'gewoehnlich', kosten:500, koch:'Stärkend I', bombe:'Blendend I', gift:null, trank:'Stärkung I (GES)' },
  { id:'rueckenblumen', name:'Rückenblumenbeeren', seltenheit:'selten', kosten:2000, koch:'Sättigend II', bombe:null, gift:'Zustand (Gelähmt)', trank:'Stärkung I (CHA)' },
  { id:'zuckerhibiskus', name:'Zuckerhybiskusbeere', seltenheit:'gewoehnlich', kosten:500, koch:'Brennend', bombe:'Bombe I (Feuer)', gift:'Intensivierung I', trank:null },
  { id:'sturmblume', name:'Sturmblume', seltenheit:'gewoehnlich', kosten:500, koch:'Scharf', bombe:'Bombe I (Donner)', gift:null, trank:'Resistenz I (Blitz)' },
  { id:'donnerblatt', name:'Donnerblatt', seltenheit:'gewoehnlich', kosten:500, koch:'Scharf', bombe:'Bombe I (Donner)', gift:null, trank:'Resistenz I (Donner)' },
  { id:'daemmerwermut', name:'Dämmerwermut', seltenheit:'gewoehnlich', kosten:500, koch:'Bitter', bombe:'Bombe I (Psychisch)', gift:'Zustand (Geblendet)', trank:null },
  { id:'ucrebrombeer', name:'Ucre-Brombeer', seltenheit:'ungewoehnlich', kosten:1000, koch:'Nahrhaft', bombe:'Blendend I', gift:'Zustand (Geblendet)', trank:null },
  { id:'umbraorch', name:'Umbra-Orchidee', seltenheit:'selten', kosten:2000, koch:'Stärkend III', bombe:null, gift:'Schwäche III (INT)', trank:'Stärkung III (INT)' },
  { id:'viperdistel', name:'Viperdistel', seltenheit:'gewoehnlich', kosten:500, koch:'Scharf', bombe:'Bombe I (Gift)', gift:'Anfälligkeit I (Gift)', trank:null },
  { id:'weissemohn', name:'Weiße Mohnblume', seltenheit:'gewoehnlich', kosten:500, koch:'Bitter', bombe:'Nebel I', gift:null, trank:'Resistenz I (Nekrose)' },
  { id:'winterkroet', name:'Winterkrötenblüte', seltenheit:'gewoehnlich', kosten:500, koch:'Frostig', bombe:null, gift:'Anfälligkeit I (Kälte)', trank:'Wasseratmung I' },
  { id:'wispenstiel', name:'Wispenstiele', seltenheit:'gewoehnlich', kosten:500, koch:'Scharf', bombe:'Bombe I (Gift)', gift:'Schaden I', trank:null },
  { id:'zauberklee', name:'Zauberklee', seltenheit:'gewoehnlich', kosten:500, koch:'Stärkend I', bombe:'Bombe I (Kraft)', gift:'Anfälligkeit I (Kraft)', trank:null },
  { id:'wolfshaar', name:'Wolfshaar-Moos', seltenheit:'gewoehnlich', kosten:500, koch:'Nahrhaft', bombe:null, gift:'Anfälligkeit I (Donner)', trank:'Nahkampf I' },
  { id:'yetipeter', name:'Yeti-Petersilie', seltenheit:'ungewoehnlich', kosten:1000, koch:'Frostig', bombe:'Bombe I (Kälte)', gift:'Zustand (Erschreckt)', trank:null },
];

window.PFLANZE_BY_ID = (() => {
  const m = {};
  window.PFLANZEN.forEach(p => m[p.id] = p);
  return m;
})();

// ── REGIONEN (1W20 → Pflanze) ──────────────────────────────────────
// Jede Region hat 6 Zeilen für die W20-Tabelle.
window.REGIONEN = [
  { id:'wald', name:'Wald', icon:'🌲', rolls:[
    { range:'1–5',   plant:'blutskraut',      label:'Blaues Kraut' },        // "blaues kraut" not in list — substitute "blutskraut"
    { range:'6–10',  plant:'drojos',          label:'Drojos-Efeu' },
    { range:'11–15', plant:'ellond',          label:'Ellond-Gestrüpp' },
    { range:'16–18', plant:'blutskraut',      label:'Blutskraut' },
    { range:'19',    plant:'donnerblatt',     label:'Donnerblatt' },
    { range:'20',    plant:'wispenstiel',     label:'Wispenstiele' },
  ]},
  { id:'ebene', name:'Ebene', icon:'🌾', rolls:[
    { range:'1–5',   plant:'ellond',          label:'Ellond-Gestrüpp' },
    { range:'6–10',  plant:'mandragora',      label:'Mandragora-Wurzel' },
    { range:'11–15', plant:'ucrebrombeer',    label:'Ucre-Brombeer' },
    { range:'16–18', plant:'anissaft',        label:'Anissaft' },
    { range:'19',    plant:'mondnektar',      label:'Mondnektar' },
    { range:'20',    plant:'drachenzunge',    label:'Drachenzungenpetalen' },
  ]},
  { id:'wueste', name:'Wüste', icon:'🏜', rolls:[
    { range:'1–5',   plant:'drojos',          label:'Drojos-Efeu' },
    { range:'6–10',  plant:'ellond',          label:'Ellond-Gestrüpp' },
    { range:'11–15', plant:'ucrebrombeer',    label:'Ucre-Brombeer' },
    { range:'16–18', plant:'ephedra',         label:'Getrocknete Ephedra' },
    { range:'19',    plant:'olina',           label:'Olina-Blüten' },
    { range:'20',    plant:'ebrium',          label:'Ebrium-Pilz' },
  ]},
  { id:'sumpf', name:'Sumpf', icon:'🪻', rolls:[
    { range:'1–5',   plant:'daemmerwermut',   label:'Dämmerwermut' },
    { range:'6–10',  plant:'blutskraut',      label:'Blaues Kraut' },
    { range:'11–15', plant:'ucrebrombeer',    label:'Ucre-Brombeer' },
    { range:'16–18', plant:'frennmoos',       label:'Frenn-Moos' },
    { range:'19',    plant:'ecire',           label:'Ecire-Lorbeer' },
    { range:'20',    plant:'rueckenblumen',   label:'Rückenblumenbeeren' },
  ]},
  { id:'gebirge', name:'Gebirge', icon:'⛰', rolls:[
    { range:'1–5',   plant:'drojos',          label:'Drojos-Efeu' },
    { range:'6–10',  plant:'ellond',          label:'Ellond-Gestrüpp' },
    { range:'11–15', plant:'mandragora',      label:'Mandragora-Wurzel' },
    { range:'16–18', plant:'aschschnittlauch',label:'Aschschnittlauch' },
    { range:'19',    plant:'kasuni',          label:'Kasuni-Saft' },
    { range:'20',    plant:'drachenzunge',    label:'Drachenzungenpetalen' },
  ]},
  { id:'hoehle', name:'Höhle', icon:'🕳', rolls:[
    { range:'1–5',   plant:'daemmerwermut',   label:'Dämmerwermut' },
    { range:'6–10',  plant:'blutskraut',      label:'Blaues Kraut' },
    { range:'11–15', plant:'mandragora',      label:'Mandragora-Wurzel' },
    { range:'16–18', plant:'abyssblume',      label:'Abyssblume' },
    { range:'19',    plant:'kasuni',          label:'Kasuni-Saft' },
    { range:'20',    plant:'schwarzblattrose',label:'Schwarzblatt-Rose' },
  ]},
];

// ── RESSOURCEN-FINDEN (Wurfergebnis → gefundene Mengen) ────────────
window.FINDEN_TABELLE = [
  { sg:10, label:'≥ 10', gewoehn:'1W12', ungewoehn:null, selten:null, sehrselten:null, legendaer:null },
  { sg:15, label:'≥ 15', gewoehn:'2W12+2', ungewoehn:'1W8', selten:null, sehrselten:null, legendaer:null },
  { sg:20, label:'≥ 20', gewoehn:'3W12+4', ungewoehn:'2W8+2', selten:'1W6', sehrselten:null, legendaer:null },
  { sg:25, label:'≥ 25', gewoehn:'4W12+6', ungewoehn:'3W8+4', selten:'2W6+2', sehrselten:'1W4', legendaer:null },
  { sg:30, label:'≥ 30', gewoehn:'5W12+8', ungewoehn:'4W8+6', selten:'3W6+4', sehrselten:'2W4+2', legendaer:'1' },
];

// ── RESSOURCEN-ERNTEN (Wurfergebnis → Anteil geerntet) ─────────────
window.ERNTEN_TABELLE = [
  { range:'1',     gewinn:0,    verlust:1.0,  label:'Die gesamte verfügbare Menge wird zerstört.' },
  { range:'2–4',   gewinn:0.25, verlust:0.75, label:'Ein Viertel geerntet, drei Viertel zerstört.' },
  { range:'5–7',   gewinn:0.5,  verlust:0.5,  label:'Die Hälfte geerntet, die andere Hälfte zerstört.' },
  { range:'8–11',  gewinn:0.25, verlust:0,    label:'Ein Viertel geerntet, der Rest bleibt unberührt.' },
  { range:'12–15', gewinn:0.5,  verlust:0,    label:'Die Hälfte geerntet, der Rest bleibt unberührt.' },
  { range:'16–20', gewinn:1.0,  verlust:0,    label:'Die gesamte verfügbare Menge wird erfolgreich geerntet.' },
];

// ── MATERIALIEN ────────────────────────────────────────────────────
// kategorie: erz | kristall | holz | sonstig
window.MATERIALIEN = [
  // Erze
  { id:'adamantin', name:'Adamantin', kategorie:'erz', seltenheit:'ungewoehnlich', gewicht:'3 lbs.', kosten:10000,
    ruestung:'Kritische Treffer gegen dich werden zu normalen Treffern (außer durch Adamantin).',
    waffe:'Treffer auf Objekte gelten als kritische Treffer.' },
  { id:'aetherium', name:'Aetherium', kategorie:'erz', seltenheit:'sehr_selten', gewicht:'2 lbs.', kosten:48000,
    ruestung:'Strahlungsschaden −1W4.',
    waffe:'Gilt als magisch; +1W4 Strahlung. Bei Teufel/Untoten: Schadenswürfel zweimal würfeln.' },
  { id:'kaelteeisen', name:'Kälteeisen', kategorie:'erz', seltenheit:'gewoehnlich', gewicht:'2 lbs.', kosten:2000,
    ruestung:null,
    waffe:'Bei kritischem Treffer auf Fee/Teufel: einen extra Schadenswürfel.' },
  { id:'ebonit', name:'Ebonit', kategorie:'erz', seltenheit:'ungewoehnlich', gewicht:'1 lb.', kosten:6000,
    ruestung:'Nekroseschaden −1W4.',
    waffe:'+1W4 Nekroseschaden.' },
  { id:'mithral', name:'Mithral', kategorie:'erz', seltenheit:'ungewoehnlich', gewicht:'½ lb.', kosten:4000,
    ruestung:'Kein Nachteil auf Heimlichkeit; STR-Anforderung entfällt.',
    waffe:'Zweihandwaffen verlieren Schwer-Eigenschaft; alle anderen gewinnen Leicht.' },
  { id:'netherit', name:'Netherit', kategorie:'erz', seltenheit:'sehr_selten', gewicht:'2 lbs.', kosten:48000,
    ruestung:'Nekroseschaden −1W4.',
    waffe:'Gilt als magisch; +1W4 Nekrose. Bei Himmelswesen: Schadenswürfel zweimal würfeln.' },
  { id:'orichalcum', name:'Orichalcum', kategorie:'erz', seltenheit:'selten', gewicht:'2 lbs.', kosten:20000,
    ruestung:'Kraftschaden −1W4; +1 auf Rettungswürfe gegen Zauber.',
    waffe:'+1W4 Kraftschaden; Nachteil auf KON-Probe (Konzentration) bei Treffern.' },
  { id:'plaguestahl', name:'Plaguestahl', kategorie:'erz', seltenheit:'gewoehnlich', gewicht:'2 lbs.', kosten:3000,
    ruestung:null, waffe:'+1W4 Giftschaden.' },
  { id:'silber', name:'Silber', kategorie:'erz', seltenheit:'gewoehnlich', gewicht:'1 lb.', kosten:2000,
    ruestung:null, waffe:'Bei kritischem Treffer auf Gestaltwandler: extra Schadenswürfel.' },
  { id:'umbrit', name:'Umbrit', kategorie:'erz', seltenheit:'ungewoehnlich', gewicht:'2 lbs.', kosten:4000,
    ruestung:null, waffe:'Ziel kann keine TP regenerieren bis Beginn deines nächsten Zuges.' },
  { id:'voidsteel', name:'Voidsteel', kategorie:'erz', seltenheit:'legendaer', gewicht:'2 lbs.', kosten:128000,
    ruestung:null, waffe:'Gilt als magisch; +1W4 Kraft + 1W4 Nekrose; bei krit. Treffer extra Schadenswürfel.' },
  // Kristalle & Steine
  { id:'aerokristall', name:'Aerokristall', kategorie:'kristall', seltenheit:'ungewoehnlich', gewicht:'½ lb.', kosten:8000,
    ruestung:null, waffe:'GES-Modifikator für Angriff und Schaden verwenden.' },
  { id:'aquastein', name:'Aquastein', kategorie:'kristall', seltenheit:'ungewoehnlich', gewicht:'1 lb.', kosten:4000,
    ruestung:'Schwimmen kostet keine Zusatzbewegung; +3 m Schwimmgeschwindigkeit.',
    waffe:'Kein Nachteil auf Angriffswürfe unter Wasser.' },
  { id:'arcanitquarz', name:'Arcanit-Quarz', kategorie:'kristall', seltenheit:'selten', gewicht:'2 lbs.', kosten:24000,
    ruestung:null, waffe:'Gilt als Arkaner Fokus; gilt als magisch.' },
  { id:'cerulit', name:'Cerulitkristall', kategorie:'kristall', seltenheit:'ungewoehnlich', gewicht:'2 lbs.', kosten:6000,
    ruestung:'Blitzschaden −1W4.', waffe:'+1W4 Blitzschaden.' },
  { id:'zwergengestein', name:'Zwergengestein', kategorie:'kristall', seltenheit:'gewoehnlich', gewicht:'3 lbs.', kosten:2000,
    ruestung:'×1,5 Gewicht; Vorteil gegen Umwerfen/Wegdrängen; STR <15 → −3 m Bewegung.',
    waffe:null },
  { id:'ignum', name:'Ignum', kategorie:'kristall', seltenheit:'ungewoehnlich', gewicht:'2 lbs.', kosten:6000,
    ruestung:'Feuerschaden −1W4.', waffe:'+1W4 Feuerschaden.' },
  { id:'obsidian', name:'Obsidian', kategorie:'kristall', seltenheit:'ungewoehnlich', gewicht:'2 lbs.', kosten:4000,
    ruestung:'Kreaturen, die dich greifen, nehmen 1W4 Schnittschaden.',
    waffe:'+1W4 Schnittschaden.' },
  { id:'primordium', name:'Primordium', kategorie:'kristall', seltenheit:'ungewoehnlich', gewicht:'1 lb.', kosten:4000,
    ruestung:null,
    waffe:'Gilt als magisch gegen Elementare; Schadenswürfel gegen Elementare zweimal würfeln.' },
  { id:'psionit', name:'Psionit', kategorie:'kristall', seltenheit:'ungewoehnlich', gewicht:'1 lb.', kosten:6000,
    ruestung:'Psychischer Schaden −1W4.', waffe:'+1W4 Psychischer Schaden.' },
  // Holz
  { id:'glutholz', name:'Glutholz', kategorie:'holz', seltenheit:'ungewoehnlich', gewicht:'2 lbs.', kosten:6000,
    waffe:'+1W4 Feuerschaden.', ruestung:'Schild: Feuerschaden −1W4.' },
  { id:'feenholz', name:'Feenholz', kategorie:'holz', seltenheit:'gewoehnlich', gewicht:'2 lbs.', kosten:3000,
    waffe:'+1W4 Stichschaden.', ruestung:null },
  { id:'duesterholz', name:'Düsterholz', kategorie:'holz', seltenheit:'gewoehnlich', gewicht:'2 lbs.', kosten:3000,
    waffe:'+1W4 Nekroseschaden.', ruestung:null },
  { id:'eisenholz', name:'Eisenholz', kategorie:'holz', seltenheit:'gewoehnlich', gewicht:'2 lbs.', kosten:2000,
    waffe:'Bei krit. Treffer auf Fee/Teufel: extra Schadenswürfel.', ruestung:null },
  { id:'geistholz', name:'Geistholz', kategorie:'holz', seltenheit:'selten', gewicht:'2 lbs.', kosten:16000,
    waffe:'Gilt als magisch; zählt als Arkaner Fokus.',
    ruestung:'+3 auf Konzentrationswürfe.' },
  // Sonstige Materialien
  { id:'ewigeseis', name:'Ewiges Eis', kategorie:'sonstig', seltenheit:'ungewoehnlich', gewicht:'2 lbs.', kosten:6000,
    ruestung:'Feuerschaden −1W4.', waffe:'+1W4 Kälteschaden.' },
  { id:'gruenerbernstein', name:'Grüner Bernstein', kategorie:'sonstig', seltenheit:'sehr_selten', gewicht:'2 lbs.', kosten:48000,
    ruestung:'Heilzauber durch Fokus +1W4 TP.',
    waffe:'Gilt als magisch gegen Untote; Schadenswürfel gegen Untote zweimal würfeln.' },
  { id:'blattgeflecht', name:'Blattgeflecht', kategorie:'sonstig', seltenheit:'gewoehnlich', gewicht:'1 lb.', kosten:2000,
    ruestung:'+1W4 auf Heimlichkeit in Wäldern/Pflanzenbereichen.', waffe:null },
  { id:'schattenleinen', name:'Schattenleinen', kategorie:'sonstig', seltenheit:'gewoehnlich', gewicht:'1 lb.', kosten:3000,
    ruestung:'Psychischer Schaden −1W4.', waffe:null },
];

window.MATERIAL_BY_ID = (() => {
  const m = {};
  window.MATERIALIEN.forEach(x => m[x.id] = x);
  return m;
})();

window.MATERIAL_KATEGORIEN = [
  { id:'erz',      label:'Erze',                   icon:'⚒' },
  { id:'kristall', label:'Kristalle & Steine',     icon:'◆' },
  { id:'holz',     label:'Holz',                   icon:'🌳' },
  { id:'sonstig',  label:'Andere Materialien',     icon:'✦' },
];

// ── KREATURENTEILE ALS REAGENZIEN ──────────────────────────────────
// Teil → was es bei jedem Konkoktionstyp tut (Effektname ohne Level)
window.KREATURENTEILE_REAGENZIEN = [
  { teil:'Gehirn',                   bombe:'Bombe (Psychisch)',  gift:'Anfälligkeit (Psychisch)', trank:null },
  { teil:'Kreaturessenz',            bombe:'Bombe (Kraft)',      gift:'Intensivierung',           trank:'Resistenz (Psychisch)' },
  { teil:'Tentakel',                 bombe:'Schlüpfrigkeit',     gift:'Zustand (Gelähmt)',        trank:null },
  { teil:'Körperflüssigkeit (Blut)', bombe:null,                 gift:'Schwäche (INT)',           trank:'Bewegung' },
  { teil:'Klaue',                    bombe:'Bombe (Schnitt)',    gift:null,                       trank:'Nahkampf' },
  { teil:'Auge',                     bombe:null,                 gift:null,                       trank:'Nachtsicht' },
  { teil:'Reißzahn',                 bombe:'Bombe (Stich)',      gift:null,                       trank:null },
  { teil:'Federn',                   bombe:'Blendend',           gift:null,                       trank:'Stärkung (GES)' },
  { teil:'Herz',                     bombe:null,                 gift:null,                       trank:'Heilung' },
  { teil:'Schuppen',                 bombe:null,                 gift:null,                       trank:'Resistenz (var.)' },
  { teil:'Horn',                     bombe:'Bombe (Stich)',      gift:'Schaden',                  trank:'Fernkampf' },
  { teil:'Fell',                     bombe:null,                 gift:'Schwäche (Feuer)',         trank:'Resistenz (Kälte)' },
];

window.KREATURENTEIL_HG_LEVEL = [
  { hg:'3 oder weniger', level:1 },
  { hg:'4 – 8',          level:2 },
  { hg:'9 – 12',         level:3 },
  { hg:'13+',            level:4 },
];

// ── WERKZEUG-MATRIX ────────────────────────────────────────────────
window.PROFESSIONEN = [
  { name:'Alchemie',         werkzeug:'Alchemisten-Werkzeug',  attribut:'INT oder WEI' },
  { name:'Schmiede',         werkzeug:'Schmied-Werkzeug',      attribut:'STR' },
  { name:'Verzauberung',     werkzeug:'—',                     attribut:'INT (Arkane Kunde)' },
  { name:'Kochen',           werkzeug:'Kochgeschirr',          attribut:'WEI' },
  { name:'Giftkunde',        werkzeug:'Giftmischer-Werkzeug',  attribut:'INT oder GES' },
  { name:'Schriftrolle',     werkzeug:'Kalligraphen-Werkzeug', attribut:'INT' },
  { name:'Gerben',           werkzeug:'Gerber-Werkzeug',       attribut:'GES' },
  { name:'Schnitzen',        werkzeug:'Holzschnitzer-Werkzeug',attribut:'GES' },
  { name:'Tüfteln',          werkzeug:'Tüftler-Werkzeug',      attribut:'INT' },
  { name:'Ingenieurswesen',  werkzeug:'Zimmermann-Werkzeug',   attribut:'INT' },
  { name:'Sockeln',          werkzeug:'Juwelier + Arkane Kunde', attribut:'WEI' },
  { name:'Bergbau',          werkzeug:'Bergbau-Werkzeug',      attribut:'STR' },
];

// ── KOMPLIKATIONEN ─────────────────────────────────────────────────
window.KOMPLIKATIONEN = [
  { n:1,  text:'Eine seltene Zutat reagiert unerwartet — sie verwandelt sich in eine andere, unbekannte Substanz. Der SL bestimmt, was entsteht.' },
  { n:2,  text:'Deine Werkzeuge werden gestohlen. Du musst sie ersetzen, bevor du weitermachen kannst.' },
  { n:3,  text:'Beim Arbeiten entweicht ein seltsamer Rauch. Jeder in 3 m muss einen KON-RW (SG 12) ablegen oder ist für 1 Stunde benommen.' },
  { n:4,  text:'Das Werkstück entwickelt einen unerwarteten Nebeneffekt — harmlos, aber merkwürdig (leuchtet schwach, riecht nach Schwefel, summt leise). SL bestimmt den Effekt.' },
  { n:5,  text:'Ein Handwerkerclan behauptet, du stiehlst ihr Geheimwissen. Sie werden feindlich gesinnt, bis du das Missverständnis klärst.', npc:true },
  { n:6,  text:'Ein Teil des Materials wird unbrauchbar. Eine zufällig bestimmte Einheit Rohstoff geht verloren, ohne Fortschritt zu bringen.' },
  { n:7,  text:'Ein lokaler Zauberer oder Gildenmeister besteht darauf, den Prozess zu beobachten — und stellt unangenehme Fragen.', npc:true },
  { n:8,  text:'Der nächste Handwerkswurf wird mit Nachteil abgelegt, weil ein Fehler im Prozess erst spät bemerkt wird.' },
  { n:9,  text:'Gerüchte über ein instabiles oder gefährliches Projekt verbreiten sich. Jemand könnte kommen, um es zu sabotieren oder zu beschlagnahmen.', npc:true },
  { n:10, text:'Ein Konkurrent verbreitet, deine Arbeit sei fehlerhaft. Dein Ruf als Handwerker leidet vorübergehend.', npc:true },
  { n:11, text:'Das Werkstück zieht magische Energie an — für 1W4 Tage sind kleine magische Anomalien in deiner Nähe spürbar.' },
  { n:12, text:'Ein mächtiger Adliger oder reicher Händler bietet eine beachtliche Summe für das halbfertige Werk — und ist nicht daran gewöhnt, ein Nein zu hören.', npc:true },
  { n:13, text:'Deine Werkstatt wird durchsucht — der Eindringling hinterlässt keine Spuren.', npc:true },
  { n:14, text:'Das Material verhält sich widerspenstig: Die Herstellungszeit für den aktuellen Block verdoppelt sich.' },
  { n:15, text:'Ein unerwarteter Riss oder Bruch im Werkstück — er ist behebbar, kostet aber eine zusätzliche Einheit des verwendeten Materials.' },
  { n:16, text:'Ein Gerücht über die magischen Eigenschaften des entstehenden Gegenstands lockt einen Dieb an.', npc:true },
  { n:17, text:'Eine der verwendeten Zutaten war verunreinigt. Der aktuelle 2-Stunden-Block muss wiederholt werden, ohne Fortschritt zu zählen.' },
  { n:18, text:'Das Werkstück scheint für kurze Zeit ein Eigenleben zu entwickeln — es bewegt sich, flüstert oder leuchtet auf. Hinterlässt Fragen.' },
  { n:19, text:'Eine lokale Behörde oder ein Tempel erhebt Einspruch gegen die Herstellung — sie befürchten Missbrauch der Magie oder des Gifts.', npc:true },
  { n:20, text:'Zwei Komplikationen gleichzeitig: Würfle zweimal erneut (bei weiteren 20ern gilt das Ergebnis als 19).' },
];

// ── MAGISCHE EIGENSCHAFTEN ─────────────────────────────────────────
window.MINOR_EIGENSCHAFTEN = [
  { name:'Leuchtfeuer',   effekt:'Bonusaktion: 3-m-Helligkeit/6-m-Halbdunkel an- und ausschalten.' },
  { name:'Kompass',       effekt:'Magische Aktion: magnetischen Norden erkennen.' },
  { name:'Schimmernd',    effekt:'Gegenstand wird nie schmutzig.' },
  { name:'Wächter',       effekt:'+2 auf Initiative (wenn nicht kampfunfähig).' },
  { name:'Harmonisch',    effekt:'Einstimmen dauert nur 1 Minute.' },
  { name:'Sentinel',      effekt:'Leuchtet schwach, wenn eine bestimmte Kreaturenart in 72 m Nähe ist.' },
  { name:'Unzerstörbar',  effekt:'Gegenstand kann nicht zerbrochen werden.' },
  { name:'Wassergeboren', effekt:'Schwimmt; Vorteil auf Athletik-Würfe beim Schwimmen.' },
  { name:'Anführer',      effekt:'Stimme/Signal bis zu 180 m hörbar (bis Ende des nächsten Zuges).' },
];

window.EIGENSCHAFTEN = {
  ungewoehnlich: [
    { name:'Fähigkeitssteigerung I', effekt:'Attribut auf 16 erhöhen.' },
    { name:'Ladungen I',             effekt:'3 Ladungen (SG 11); 1W3 täglich bei Tagesanbruch regeneriert.' },
    { name:'Schaden I',              effekt:'+1W4 Zusatzschaden.' },
    { name:'Licht I',                effekt:'6-m-Helligkeit + 12-m-Halbdunkel.' },
    { name:'Bewegung',               effekt:'Kletter- oder Schwimmgeschwindigkeit = Gehgeschwindigkeit.' },
    { name:'Dauerspruch I',          effekt:'Zaubertrick nach Willen (SG 11).' },
    { name:'Zurückfliegend',         effekt:'Wurfeigenschaft (6/18 m) + kehrt zur Hand zurück.' },
    { name:'Fertigkeit I',           effekt:'+5 auf eine Fertigkeit.' },
    { name:'Jäger I',                effekt:'+2W6 gegen eine bestimmte Kreaturenart.' },
    { name:'Spruch I',               effekt:'Zauber auf Grad 3, einmal pro langer Rast (SG 11).' },
    { name:'Vampirisch I',           effekt:'Bei krit. Treffer: 1 TP zurückgewinnen.' },
    { name:'Waffe I',                effekt:'+1 auf Angriff und Schaden.' },
  ],
  selten: [
    { name:'Fähigkeitssteigerung II', effekt:'Attribut auf 18 erhöhen.' },
    { name:'Rüstung II',              effekt:'+1 RK.' },
    { name:'Ladungen II',             effekt:'5 Ladungen (SG 13); 1W4 täglich regeneriert.' },
    { name:'Schaden II',              effekt:'+1W6 Zusatzschaden.' },
    { name:'Verteidigung I',          effekt:'Schaden eines Typs −3 (min. 1).' },
    { name:'Licht II',                effekt:'12-m-Helligkeit + 12-m-Halbdunkel.' },
    { name:'Dauerspruch II',          effekt:'Zauber Grad 1 nach Willen (SG 13).' },
    { name:'Fertigkeit II',           effekt:'Vorteil auf eine Fertigkeit.' },
    { name:'Jäger II',                effekt:'+3W6 gegen eine bestimmte Kreaturenart.' },
    { name:'Spruch II',               effekt:'Zauber auf Grad 6, einmal pro langer Rast (SG 13).' },
    { name:'Vampirisch II',           effekt:'Bei krit. Treffer: halben angerichteten Schaden als TP zurückgewinnen.' },
    { name:'Waffe II',                effekt:'+2 auf Angriff und Schaden.' },
  ],
  sehr_selten: [
    { name:'Fähigkeitssteigerung III', effekt:'Attribut auf 20.' },
    { name:'Rüstung III',              effekt:'+2 RK.' },
    { name:'Ladungen III',             effekt:'7 Ladungen (SG 15); 1W6 täglich.' },
    { name:'Schaden III',              effekt:'+1W8 Zusatzschaden.' },
    { name:'Verteidigung II',          effekt:'Resistenz gegen einen Schadenstyp.' },
    { name:'Licht III',                effekt:'24-m-Helligkeit + 24-m-Halbdunkel.' },
    { name:'Dauerspruch III',          effekt:'Zauber Grad 2 nach Willen (SG 15).' },
    { name:'Spruch III',               effekt:'Zauber auf Grad 7, einmal pro langer Rast (SG 15).' },
    { name:'Vampirisch III',           effekt:'Bei Treffer: halben angerichteten Schaden als TP zurückgewinnen.' },
    { name:'Waffe III',                effekt:'+3 auf Angriff und Schaden.' },
  ],
  legendaer: [
    { name:'Fähigkeitssteigerung IV', effekt:'Attribut auf 22.' },
    { name:'Rüstung IV',              effekt:'+3 RK.' },
    { name:'Ladungen IV',             effekt:'9 Ladungen (SG 17); 1W6+2 täglich.' },
    { name:'Schaden IV',              effekt:'+1W10 Zusatzschaden.' },
    { name:'Verteidigung III',        effekt:'Immunität gegen einen Schadenstyp.' },
    { name:'Dauerspruch IV',          effekt:'Zauber Grad 3 nach Willen (SG 17).' },
    { name:'Spruch IV',               effekt:'Zauber auf Grad 8, einmal pro langer Rast (SG 17).' },
  ],
};

window.STUFENSYSTEM = [
  { stufe:'1 – 4',   gegenstand:'Stufe 1', eigenschaften:'Minor (kostenlos)' },
  { stufe:'5 – 8',   gegenstand:'Stufe 2', eigenschaften:'Ungewöhnlich + Ungewöhnlich' },
  { stufe:'9 – 12',  gegenstand:'Stufe 3', eigenschaften:'Selten + Selten' },
  { stufe:'13 – 16', gegenstand:'Stufe 4', eigenschaften:'Sehr Selten + Selten + Ungewöhnlich' },
  { stufe:'17 – 20', gegenstand:'Stufe 5', eigenschaften:'Legendär + Sehr Selten + Selten' },
];

// ── SOCKELN ────────────────────────────────────────────────────────
window.SOCKEL_SLOTS = [
  { seltenheit:'gewoehnlich',   max:3, zeit:16,  kosten:5000 },
  { seltenheit:'ungewoehnlich', max:2, zeit:32,  kosten:20000 },
  { seltenheit:'selten',        max:2, zeit:160, kosten:200000 },
  { seltenheit:'sehr_selten',   max:1, zeit:400, kosten:null },
  { seltenheit:'legendaer',     max:1, zeit:800, kosten:null },
];

window.SOCKEL_EDELSTEINE = [
  { eigenschaft:'gewoehnlich',   zeit:24,   wert:5000 },
  { eigenschaft:'ungewoehnlich', zeit:48,   wert:10000 },
  { eigenschaft:'selten',        zeit:240,  wert:50000 },
  { eigenschaft:'sehr_selten',   zeit:600,  wert:100000 },
  { eigenschaft:'legendaer',     zeit:1200, wert:500000 },
];

// ── MAHLZEITEN-EFFEKTE ─────────────────────────────────────────────
window.MAHLZEIT_EFFEKTE = [
  { name:'Stärkend I',   beschreibung:'+1W4 temporäre TP für die Dauer',  seltenheit:'gewoehnlich' },
  { name:'Stärkend II',  beschreibung:'+1W6 temporäre TP',                  seltenheit:'ungewoehnlich' },
  { name:'Stärkend III', beschreibung:'+1W8 temporäre TP',                  seltenheit:'selten' },
  { name:'Stärkend IV',  beschreibung:'+1W10 temporäre TP',                 seltenheit:'sehr_selten' },
  { name:'Brennend',     beschreibung:'Vorteil auf Würfe gegen Extremkälte', seltenheit:'gewoehnlich' },
  { name:'Frostig',      beschreibung:'Vorteil auf Würfe gegen Extremhitze', seltenheit:'gewoehnlich' },
  { name:'Heilsam I',    beschreibung:'Sofort 1 TP wiederhergestellt',      seltenheit:'gewoehnlich' },
  { name:'Heilsam II',   beschreibung:'Sofort 2 TP wiederhergestellt',      seltenheit:'ungewoehnlich' },
  { name:'Erholsam I',   beschreibung:'1 Trefferwürfel zurückgewinnen',     seltenheit:'gewoehnlich' },
  { name:'Erholsam II',  beschreibung:'2 Trefferwürfel zurückgewinnen',     seltenheit:'ungewoehnlich' },
  { name:'Erholsam III', beschreibung:'3 Trefferwürfel zurückgewinnen',     seltenheit:'selten' },
  { name:'Erholsam IV',  beschreibung:'4 Trefferwürfel zurückgewinnen',     seltenheit:'sehr_selten' },
  { name:'Langlebig I',  beschreibung:'Verdirbt doppelt so spät',           seltenheit:'gewoehnlich' },
  { name:'Langlebig II', beschreibung:'Verdirbt dreimal so spät',           seltenheit:'ungewoehnlich' },
  { name:'Nahrhaft',     beschreibung:'Versorgt eine Kreatur einen vollen Tag', seltenheit:'gewoehnlich' },
  { name:'Geschickt I',  beschreibung:'+1 auf Fertigkeitsproben',           seltenheit:'gewoehnlich' },
  { name:'Geschickt II', beschreibung:'+2 auf Fertigkeitsproben',           seltenheit:'ungewoehnlich' },
  { name:'Geschickt III',beschreibung:'+3 auf Fertigkeitsproben',           seltenheit:'selten' },
  { name:'Geschickt IV', beschreibung:'+5 auf Fertigkeitsproben',           seltenheit:'sehr_selten' },
];

// ── REAGENZIEN-EFFEKT-KATALOG ──────────────────────────────────────
// Lookup für Mixer: Pflanzeneffekt-String → standardisierter Effekt
// (Familie, Level, Variante).
window.REAGENZ_EFFEKTE = {
  // Bomben
  'Bombe I':         { familie:'Bombe',         level:1, beschreibung:'1W6 Schaden (Typ durch Reagenz).' },
  'Bombe II':        { familie:'Bombe',         level:2, beschreibung:'3W6 Schaden.' },
  'Bombe III':       { familie:'Bombe',         level:3, beschreibung:'5W6 Schaden.' },
  'Bombe IV':        { familie:'Bombe',         level:4, beschreibung:'7W6 Schaden.' },
  'Blendend I':      { familie:'Blendend',      level:1, beschreibung:'Geblendet für 1 Runde.' },
  'Blendend II':     { familie:'Blendend',      level:2, beschreibung:'Geblendet für 1W4 Runden.' },
  'Nebel I':         { familie:'Nebel',         level:1, beschreibung:'Dichter Nebel blockiert Sicht für 1W4 Runden.' },
  'Nebel II':        { familie:'Nebel',         level:2, beschreibung:'Dichter Nebel für 1W4+1 Runden.' },
  'Schlüpfrigkeit':  { familie:'Schlüpfrigkeit',level:1, beschreibung:'Schlüpfriges Öl; Kreaturen: GES-RW oder liegend.' },
  // Gifte
  'Zustand':         { familie:'Zustand',       level:1, beschreibung:'Ziel erhält den durch die Reagenz bestimmten Zustand.' },
  'Schaden I':       { familie:'Schaden',       level:1, beschreibung:'1W6 Giftschaden (halber bei Erfolg).' },
  'Schaden II':      { familie:'Schaden',       level:2, beschreibung:'2W6 Giftschaden.' },
  'Schaden III':     { familie:'Schaden',       level:3, beschreibung:'5W6 Giftschaden.' },
  'Schaden IV':      { familie:'Schaden',       level:4, beschreibung:'6W6 Giftschaden.' },
  'Intensivierung I':{ familie:'Intensivierung',level:1, beschreibung:'Ziel braucht 2 Erfolge, um Zusatzeffekte zu beenden.' },
  'Intensivierung II':{familie:'Intensivierung',level:2, beschreibung:'3 Erfolge nötig.' },
  'Intensivierung III':{familie:'Intensivierung',level:3,beschreibung:'5 Erfolge nötig.' },
  'Anfälligkeit I':  { familie:'Anfälligkeit',  level:1, beschreibung:'Schaden eines Typs um 3 erhöht (min. 1).' },
  'Anfälligkeit II': { familie:'Anfälligkeit',  level:2, beschreibung:'Anfälligkeit gegen einen Schadenstyp.' },
  'Schwäche I':      { familie:'Schwäche',      level:1, beschreibung:'−1 auf Rettungswürfe.' },
  'Schwäche II':     { familie:'Schwäche',      level:2, beschreibung:'1W4 von Rettungswürfen abziehen.' },
  'Schwäche III':    { familie:'Schwäche',      level:3, beschreibung:'Nachteil auf Rettungswürfe.' },
  // Tränke
  'Fernkampf I':     { familie:'Fernkampf',     level:1, beschreibung:'+1 auf Fernkampfangriffe.' },
  'Fernkampf II':    { familie:'Fernkampf',     level:2, beschreibung:'+1W4 auf Fernkampfangriffe.' },
  'Fernkampf III':   { familie:'Fernkampf',     level:3, beschreibung:'+1W6 auf Fernkampfangriffe.' },
  'Nachtsicht I':    { familie:'Nachtsicht',    level:1, beschreibung:'Nachtsicht 9 m.' },
  'Nachtsicht II':   { familie:'Nachtsicht',    level:2, beschreibung:'Nachtsicht 18 m.' },
  'Stärkung I':      { familie:'Stärkung',      level:1, beschreibung:'+1 auf Fertigkeits- und Rettungswürfe (Attribut).' },
  'Stärkung II':     { familie:'Stärkung',      level:2, beschreibung:'+1W4 auf Fertigkeits- und Rettungswürfe.' },
  'Stärkung III':    { familie:'Stärkung',      level:3, beschreibung:'Vorteil auf Fertigkeits- und Rettungswürfe.' },
  'Heilung I':       { familie:'Heilung',       level:1, beschreibung:'Heilt 2W4+2 TP.' },
  'Heilung II':      { familie:'Heilung',       level:2, beschreibung:'Heilt 4W4+4 TP.' },
  'Heilung III':     { familie:'Heilung',       level:3, beschreibung:'Heilt 8W4+8 TP.' },
  'Heilung IV':      { familie:'Heilung',       level:4, beschreibung:'Heilt 10W4+20 TP.' },
  'Nahkampf I':      { familie:'Nahkampf',      level:1, beschreibung:'+1 auf Nahkampfangriffe.' },
  'Nahkampf II':     { familie:'Nahkampf',      level:2, beschreibung:'+1W4 auf Nahkampfangriffe.' },
  'Nahkampf III':    { familie:'Nahkampf',      level:3, beschreibung:'+1W6 auf Nahkampfangriffe.' },
  'Resistenz I':     { familie:'Resistenz',     level:1, beschreibung:'Schaden eines Typs −3 (min. 1).' },
  'Resistenz II':    { familie:'Resistenz',     level:2, beschreibung:'Resistenz gegen einen Schadenstyp.' },
  'Wiederherstellung I':  { familie:'Wiederherstellung', level:1, beschreibung:'Heilt eine Krankheit.' },
  'Wiederherstellung II': { familie:'Wiederherstellung', level:2, beschreibung:'Heilt alle Krankheiten + einen Zustand: Geblendet/Taub/Gelähmt/Vergiftet.' },
  'Wiederherstellung III':{ familie:'Wiederherstellung', level:3, beschreibung:'Heilt alle Krankheiten + alle o.g. Zustände.' },
  'Bewegung I':      { familie:'Bewegung',      level:1, beschreibung:'+3 m Gehgeschwindigkeit.' },
  'Bewegung II':     { familie:'Bewegung',      level:2, beschreibung:'+4,5 m Gehgeschwindigkeit.' },
  'Bewegung III':    { familie:'Bewegung',      level:3, beschreibung:'Fluggeschwindigkeit = halbe Gehgeschwindigkeit.' },
  'Bewegung IV':     { familie:'Bewegung',      level:4, beschreibung:'Fluggeschwindigkeit = Gehgeschwindigkeit.' },
  'Wasseratmung I':  { familie:'Wasseratmung',  level:1, beschreibung:'Unter Wasser atmen.' },
  'Wasseratmung II': { familie:'Wasseratmung',  level:2, beschreibung:'Unter Wasser atmen + Schwimmen ohne Zusatzbewegung.' },
};

// Hilfsfunktion: parse "Bombe I (Feuer)" → { familie:'Bombe', level:1, variante:'Feuer' }
window.parseEffekt = function(s) {
  if (!s) return null;
  // Match: name + level + optional (variant)
  const m = s.match(/^(.+?)\s*\(([^)]+)\)$/);
  let core = s, variante = null;
  if (m) { core = m[1].trim(); variante = m[2].trim(); }
  const entry = window.REAGENZ_EFFEKTE[core];
  if (!entry) return { familie:core, level:1, variante, beschreibung:'(unbekannt)' };
  return { familie:entry.familie, level:entry.level, variante, beschreibung:entry.beschreibung };
};

// ── HG → REAGENZ-LEVEL für Kreaturenteile ──────────────────────────
window.hgToLevel = function(hg) {
  if (hg <= 3)  return 1;
  if (hg <= 8)  return 2;
  if (hg <= 12) return 3;
  return 4;
};
