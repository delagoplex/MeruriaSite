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
  'Aarakocra': { file: 'aarakocra', accent: '#1ab8a0', banner: 'assets/images/races/aarakocra/banner.png' },
  'Aasimar': { file: 'aasimar', accent: '#c8a84a' },
  'Dhampire': { file: 'dhampire', accent: '#c0394f', banner: 'assets/images/races/dhampire/banner.png' },
  'Autognome': { file: 'autognome', accent: '#8090a0' },
  'Bärenvolk': { file: 'baerenvolk', accent: '#8b5e3c' },
  'Cnidaran': { file: 'cnidaran', accent: '#40b8e0' },
  'Darakhul': { file: 'darakhul', accent: '#6040a0' },
  'Chromatische Drachenblütige': { file: 'chromatische-drachenbluetige', accent: '#c84030', banner: 'assets/images/races/chromatische_drachenblütige/banner.png' },
  'Edelstein Drachenblütige': { file: 'edelstein-drachenbluetige', accent: '#9060e0', banner: 'assets/images/races/edelstein_drachenblütige/banner.png' },
  'Metallische Drachenblütige': { file: 'metallische-drachenbluetige', accent: '#d4af50', banner: 'assets/images/races/metallische_drachenblütige/banner.png' },
  'Dunkelelfen': { file: 'dunkelelfen', accent: '#b040e0', banner: 'assets/images/races/dunkelelfen/banner.png' },
  'Echsenmenschen': { file: 'echsenmenschen', accent: '#5ab878', banner: 'assets/images/races/echsenmenschen/banner.png' },
  'Eladrin': { file: 'eladrin', accent: '#50d0f0', banner: 'assets/images/races/eladrin/banner.png' },
  'Erd-Genasi': { file: 'erd-genasi', accent: '#c09050', banner: 'assets/images/races/erd-genasi/banner.png' },
  'Erina': { file: 'erina', accent: '#a87060' },
  'Feen': { file: 'feen', accent: '#e870d8', banner: 'assets/images/races/feen/banner.png' },
  'Felsengnome': { file: 'felsengnome', accent: '#8090a0', banner: 'assets/images/races/felsengnome/banner.png' },
  'Feuer-Genasi': { file: 'feuer-genasi', accent: '#e05020', banner: 'assets/images/races/feuer-genasi/banner.png' },
  'Firbolg': { file: 'firbolg', accent: '#72a860', banner: 'assets/images/races/firbolg/banner.png' },
  'Gebirgszwerge': { file: 'gebirgszwerge', accent: '#9890a8', banner: 'assets/images/races/gebirgszwerge/banner.png' },
  'Geppettin': { file: 'geppettin', accent: '#b0a060' },
  'Giff': { file: 'giff', accent: '#8890a0' },
  'Githyanki': { file: 'githyanki', accent: '#d0b030', banner: 'assets/images/races/githyanki/banner.png' },
  'Githzerai': { file: 'githzerai', accent: '#6090c8', banner: 'assets/images/races/githzerai/banner.png' },
  'Gnoll': { file: 'gnoll', accent: '#a07040' },
  'Goblins': { file: 'goblins', accent: '#78b828', banner: 'assets/images/races/goblins/banner.png' },
  'Goliaths': { file: 'goliaths', accent: '#9898b0', banner: 'assets/images/races/goliaths/banner.png' },
  'Grauzwerge': { file: 'grauzwerge', accent: '#7060a8', banner: 'assets/images/races/grauzwerge/banner.png' },
  'Grottenschrate': { file: 'grottenschrate', accent: '#907050', banner: 'assets/images/races/grottenschrate/banner.png' },
  'Grung': { file: 'grung', accent: '#50c040' },
  'Hadozee': { file: 'hadozee', accent: '#907850' },
  'Halbelfen': { file: 'halbelfen', accent: '#98d080', banner: 'assets/images/races/halbelfen/banner.png' },
  'Halborks': { file: 'halborks', accent: '#70a840', banner: 'assets/images/races/halborks/banner.png' },
  'Harengons': { file: 'harengons', accent: '#e090a0', banner: 'assets/images/races/harengons/banner.png' },
  'Hexblute': { file: 'hexblute', accent: '#c050c8', banner: 'assets/images/races/hexblute/banner.png' },
  'Hobgoblins': { file: 'hobgoblins', accent: '#c04040' },
  'Hochelfen': { file: 'hochelfen', accent: '#80c8a0', banner: 'assets/images/races/hochelfen/banner.png' },
  'Hügelzwerge': { file: 'huegelzwerge', accent: '#b07850', banner: 'assets/images/races/hügelzwerge/banner.png' },
  'Kenku': { file: 'kenku', accent: '#606878', banner: 'assets/images/races/kenku/banner.png' },
  'Kobolde': { file: 'kobolde', accent: '#c83030', banner: 'assets/images/races/kobolde/banner.png' },
  'Leichtfüße': { file: 'leichtfuesse', accent: '#e8a830', banner: 'assets/images/races/leichtfüße/banner.png' },
  'Leonin': { file: 'leonin', accent: '#d0a840' },
  'Loxodon': { file: 'loxodon', accent: '#9090a8' },
  'Locathah': { file: 'locathah', accent: '#3090b0' },
  'Lotol': { file: 'lotol', accent: '#60a880' },
  'Luft-Genasi': { file: 'luft-genasi', accent: '#90d0e8', banner: 'assets/images/races/luft-genasi/banner.png' },
  'Alraunen': { file: 'alraunen', accent: '#90b840' },
  'Meereselfen': { file: 'meereselfen', accent: '#1890c0', banner: 'assets/images/races/meereselfen/banner.png' },
  'Menschen': { file: 'menschen', accent: '#c8a870', banner: 'assets/images/races/menschen/banner.png' },
  'Minotauren': { file: 'minotauren', accent: '#b06840', banner: 'assets/images/races/minotauren/banner.png' },
  'Myzelier': { file: 'myzelier', accent: '#c0a030' },
  'Schleimling': { file: 'schleimling', accent: '#70c080' },
  'Opteran': { file: 'opteran', accent: '#70a870' },
  'Orks': { file: 'orks', accent: '#709040', banner: 'assets/images/races/orks/banner.png' },
  'Eulenleute': { file: 'eulenleute', accent: '#a89060' },
  'Plasmoid': { file: 'plasmoid', accent: '#80d0c0' },
  'Ratatosk': { file: 'ratatosk', accent: '#c87840' },
  'Sahuagin': { file: 'sahuagin', accent: '#2070a0' },
  'Satarre': { file: 'satarre', accent: '#6040a8' },
  'Satyrn': { file: 'satyrn', accent: '#d0a830', banner: 'assets/images/races/satyrn/banner.png' },
  'Schattenfeen': { file: 'schattenfeen', accent: '#8070b0', banner: 'assets/images/races/schattenfeen/banner.png' },
  'Schattengoblin': { file: 'schattengoblin', accent: '#504868' },
  'Stämmige': { file: 'staemmige', accent: '#c07050', banner: 'assets/images/races/stämmige/banner.png' },
  'Tabaxi': { file: 'tabaxi', accent: '#d89858', banner: 'assets/images/races/tabaxi/banner.png' },
  'Thri-Kreen': { file: 'thri-kreen', accent: '#a8a840' },
  'Tiefengnome': { file: 'tiefengnome', accent: '#7060a8', banner: 'assets/images/races/tiefengnome/banner.png' },
  'Tieflinge': { file: 'tieflinge', accent: '#c82860', banner: 'assets/images/races/tieflinge/banner.png' },
  'Tortels': { file: 'tortels', accent: '#509868', banner: 'assets/images/races/tortels/banner.png' },
  'Tritons': { file: 'tritons', accent: '#3098c0', banner: 'assets/images/races/tritons/banner.png' },
  'Schattenmenschen': { file: 'schattenmenschen', accent: '#606888' },
  'Waldelfen': { file: 'waldelfen', accent: '#60a840', banner: 'assets/images/races/waldelfen/banner.png' },
  'Waldgnome': { file: 'waldgnome', accent: '#70a850', banner: 'assets/images/races/waldgnome/banner.png' },
  'Wandler': { file: 'wandler', accent: '#b08030', banner: 'assets/images/races/wandler/banner.png' },
  'Kriegsgeschmiedete': { file: 'kriegsgeschmiedete', accent: '#7090a8' },
  'Wasser-Genasi': { file: 'wasser-genasi', accent: '#2090c8', banner: 'assets/images/races/wasser-genasi/banner.png' },
  'Wechselbälger': { file: 'wechselbaelger', accent: '#a890c8', banner: 'assets/images/races/wechselbälger/banner.png' },
  'Wiedergeborene': { file: 'wiedergeborene', accent: '#6878a8', banner: 'assets/images/races/wiedergeborene/banner.png' },
  'Yuan-ti': { file: 'yuan-ti', accent: '#60a850', banner: 'assets/images/races/yuan-ti/banner.png' },
  'Zentauren': { file: 'zentauren', accent: '#b09040', banner: 'assets/images/races/zentauren/banner.png' },
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
