// rassen-detail-index.js — Index der Rassen-Detaildaten (Daten je Rasse: assets/scripts/data/rassen/)
// Keyed by race name (matches ?rasse= URL param und gebaeude-data.js names)
//
// headerImage: Pfad zum Banner-Bild der Rassen-Detailseite (Header-Bereich).
//   Solange kein Bild vorhanden: null lassen.
//   Sobald das Artwork fertig ist, einfach den Pfad eintragen, z.B.:
//     headerImage: 'assets/images/races/banner/aarakocra.png',
//   Empfohlenes Format: PNG oder JPG, Querformat (ca. 1200×400 px), Fokus oben.
//
// Die Daten je Rasse liegen einzeln in assets/scripts/data/rassen/<file>.js.
// Dieses Index-File ist klein und enthält nur Name → Datei + Akzentfarbe.
// Wer die Daten braucht, lädt sie mit window.loadRassenDetail(name) (Promise)
// oder – wie /charaktererstellung/rassen-detail.html – per document.write vor dem Seiten-Modul.
window.RASSEN_DETAIL_DATA = window.RASSEN_DETAIL_DATA || {};
window.RASSEN_DETAIL_INDEX = {
  'Aarakocra': { file: 'aarakocra', accent: '#1ab8a0' },
  'Aasimar': { file: 'aasimar', accent: '#c8a84a' },
  'Dhampire': { file: 'dhampire', accent: '#c0394f' },
  'Autognome': { file: 'autognome', accent: '#8090a0' },
  'Bärenvolk': { file: 'baerenvolk', accent: '#8b5e3c' },
  'Cnidaran': { file: 'cnidaran', accent: '#40b8e0' },
  'Darakhul': { file: 'darakhul', accent: '#6040a0' },
  'Chromatische Drachenblütige': { file: 'chromatische-drachenbluetige', accent: '#c84030' },
  'Edelstein Drachenblütige': { file: 'edelstein-drachenbluetige', accent: '#9060e0' },
  'Metallische Drachenblütige': { file: 'metallische-drachenbluetige', accent: '#d4af50' },
  'Dunkelelfen': { file: 'dunkelelfen', accent: '#b040e0' },
  'Echsenmenschen': { file: 'echsenmenschen', accent: '#5ab878' },
  'Eladrin': { file: 'eladrin', accent: '#50d0f0' },
  'Erd-Genasi': { file: 'erd-genasi', accent: '#c09050' },
  'Erina': { file: 'erina', accent: '#a87060' },
  'Feen': { file: 'feen', accent: '#e870d8' },
  'Felsengnome': { file: 'felsengnome', accent: '#8090a0' },
  'Feuer-Genasi': { file: 'feuer-genasi', accent: '#e05020' },
  'Firbolg': { file: 'firbolg', accent: '#72a860' },
  'Gebirgszwerge': { file: 'gebirgszwerge', accent: '#9890a8' },
  'Geppettin': { file: 'geppettin', accent: '#b0a060' },
  'Giff': { file: 'giff', accent: '#8890a0' },
  'Githyanki': { file: 'githyanki', accent: '#d0b030' },
  'Githzerai': { file: 'githzerai', accent: '#6090c8' },
  'Gnoll': { file: 'gnoll', accent: '#a07040' },
  'Goblins': { file: 'goblins', accent: '#78b828' },
  'Goliaths': { file: 'goliaths', accent: '#9898b0' },
  'Grauzwerge': { file: 'grauzwerge', accent: '#7060a8' },
  'Grottenschrate': { file: 'grottenschrate', accent: '#907050' },
  'Grung': { file: 'grung', accent: '#50c040' },
  'Hadozee': { file: 'hadozee', accent: '#907850' },
  'Halbelfen': { file: 'halbelfen', accent: '#98d080' },
  'Halborks': { file: 'halborks', accent: '#70a840' },
  'Harengons': { file: 'harengons', accent: '#e090a0' },
  'Hexblute': { file: 'hexblute', accent: '#c050c8' },
  'Hobgoblins': { file: 'hobgoblins', accent: '#c04040' },
  'Hochelfen': { file: 'hochelfen', accent: '#80c8a0' },
  'Hügelzwerge': { file: 'huegelzwerge', accent: '#b07850' },
  'Kenku': { file: 'kenku', accent: '#606878' },
  'Kobolde': { file: 'kobolde', accent: '#c83030' },
  'Leichtfüße': { file: 'leichtfuesse', accent: '#e8a830' },
  'Leonin': { file: 'leonin', accent: '#d0a840' },
  'Loxodon': { file: 'loxodon', accent: '#9090a8' },
  'Locathah': { file: 'locathah', accent: '#3090b0' },
  'Lotol': { file: 'lotol', accent: '#60a880' },
  'Luft-Genasi': { file: 'luft-genasi', accent: '#90d0e8' },
  'Alraunen': { file: 'alraunen', accent: '#90b840' },
  'Meereselfen': { file: 'meereselfen', accent: '#1890c0' },
  'Menschen': { file: 'menschen', accent: '#c8a870' },
  'Minotauren': { file: 'minotauren', accent: '#b06840' },
  'Myzelier': { file: 'myzelier', accent: '#c0a030' },
  'Schleimling': { file: 'schleimling', accent: '#70c080' },
  'Opteran': { file: 'opteran', accent: '#70a870' },
  'Orks': { file: 'orks', accent: '#709040' },
  'Eulenleute': { file: 'eulenleute', accent: '#a89060' },
  'Plasmoid': { file: 'plasmoid', accent: '#80d0c0' },
  'Ratatosk': { file: 'ratatosk', accent: '#c87840' },
  'Sahuagin': { file: 'sahuagin', accent: '#2070a0' },
  'Satarre': { file: 'satarre', accent: '#6040a8' },
  'Satyrn': { file: 'satyrn', accent: '#d0a830' },
  'Schattenfeen': { file: 'schattenfeen', accent: '#8070b0' },
  'Schattengoblin': { file: 'schattengoblin', accent: '#504868' },
  'Stämmige': { file: 'staemmige', accent: '#c07050' },
  'Tabaxi': { file: 'tabaxi', accent: '#d89858' },
  'Thri-Kreen': { file: 'thri-kreen', accent: '#a8a840' },
  'Tiefengnome': { file: 'tiefengnome', accent: '#7060a8' },
  'Tieflinge': { file: 'tieflinge', accent: '#c82860' },
  'Tortels': { file: 'tortels', accent: '#509868' },
  'Tritons': { file: 'tritons', accent: '#3098c0' },
  'Schattenmenschen': { file: 'schattenmenschen', accent: '#606888' },
  'Waldelfen': { file: 'waldelfen', accent: '#60a840' },
  'Waldgnome': { file: 'waldgnome', accent: '#70a850' },
  'Wandler': { file: 'wandler', accent: '#b08030' },
  'Kriegsgeschmiedete': { file: 'kriegsgeschmiedete', accent: '#7090a8' },
  'Wasser-Genasi': { file: 'wasser-genasi', accent: '#2090c8' },
  'Wechselbälger': { file: 'wechselbaelger', accent: '#a890c8' },
  'Wiedergeborene': { file: 'wiedergeborene', accent: '#6878a8' },
  'Yuan-ti': { file: 'yuan-ti', accent: '#60a850' },
  'Zentauren': { file: 'zentauren', accent: '#b09040' },
};

window.loadRassenDetail = function (name) {
  var entry = window.RASSEN_DETAIL_INDEX[name];
  if (!entry) return Promise.resolve(null);
  if (window.RASSEN_DETAIL_DATA[name]) return Promise.resolve(window.RASSEN_DETAIL_DATA[name]);
  return new Promise(function (resolve) {
    var s = document.createElement('script');
    s.src = 'assets/scripts/data/rassen/' + entry.file + '.js';
    s.onload = function () { resolve(window.RASSEN_DETAIL_DATA[name] || null); };
    s.onerror = function () { resolve(null); };
    document.head.appendChild(s);
  });
};
