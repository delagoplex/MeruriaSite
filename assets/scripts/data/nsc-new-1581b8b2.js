// nsc-data.js — Meruria Nichtspielercharaktere
//
// Fakt-basiertes Freischaltsystem: Der DM schaltet einzelne Fakten frei.
// Aus dem Anteil freigeschalteter Fakten wird die Vertrautheit berechnet:
//
//   0 %                Stufe 0 · Gerüchte
//   ≥ 25 %             Stufe 1 · Bekannt
//   ≥ 50 %             Stufe 2 · Vertraut
//   ≥ 75 %             Stufe 3 · Nahestehend
//   100 % aller Fakten Stufe 4 · Eingeweiht (nur bei vollständiger Kenntnis)

window.NSC_STAGE_LABELS = [
  'Gerüchte','Bekannt','Vertraut','Nahestehend','Eingeweiht'
];
window.NSC_STAGE_HINTS = [
  'Nur Gerüchte und Schatten — bisher fast nichts über diese Person bekannt.',
  'Erste solide Fakten. Du weißt, wer sie ist und wofür sie steht.',
  'Mehrere Begegnungen. Du kennst ihre Stärken, ihre Schwäche, woran sie glaubt.',
  'Du gehörst zu ihrem Kreis. Sie hat ihre Beweggründe geteilt und dich an ihr Umfeld gelassen.',
  '',
];
window.NSC_MAX_STAGE = 4;
window.NSC_STAGE_THRESHOLDS = [0, 0.25, 0.50, 0.75, 1.0];

window.NSC_FIELD_UNLOCKS = {
  bild:                      1,
  rasse:                     1,
  geschlecht:                1,
  alter:                     1,
  beruf:                     2,
  division:                  2,
  eigenschaften:             2,
  unvergesslich:             2,
  routine:                   2,
  ausruestung:               3,
  talente:                   3,
  makel:                     3,
  gottheit:                  3,
  begleiter:                 3,
  motivationen:              4,
  kontakte:                  4,
  geheimnisse:               5,
};

window.NSC_STATUS_DEF = {
  'Lebendig':    { color:'#5fe39a', glyph:'●' },
  'Verbündet':   { color:'#7cc3ff', glyph:'◆' },
  'Neutral':     { color:'#c8c0e8', glyph:'◇' },
  'Verschollen': { color:'#d6b25c', glyph:'?' },
  'Feind':       { color:'#e36760', glyph:'⚔' },
  'Gefallen':    { color:'#e36760', glyph:'✕' },
  'Verstorben':  { color:'#8aa3c4', glyph:'✕' },
};
window.NSC_STATUS_ORDER = ['Lebendig','Verbündet','Neutral','Verschollen','Feind','Gefallen','Verstorben'];

window.NSC_DIVISION_THEME = {
  'Die Kuratoren':     { accent:'#3dbf8c', roman:'I'    },
  'Die Sturmritter':   { accent:'#f06040', roman:'II'   },
  'Die Sentinels':     { accent:'#6ec6f0', roman:'III'  },
  'Die Friedenshüter': { accent:'#c47fa8', roman:'IV'   },
  'Die Outfitters':    { accent:'#d4681a', roman:'V'    },
  'Die Pathfinders':   { accent:'#c8b800', roman:'VI'   },
  'Die Quellensucher': { accent:'#1aacb8', roman:'VII'  },
  'Die Bergungsgarde': { accent:'#8b5e3c', roman:'VIII' },
  'Keine':             { accent:'#7c4dff', roman:'—'    },
};

// NSC_LIST and NSC_PERSPECTIVES removed — loaded from Supabase at runtime.
// See useNSCData() in nsc-new-d94a9bd3.js.
