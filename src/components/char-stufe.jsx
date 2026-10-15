// char-stufe.jsx — Stufe eines Charakters aus seinen Erfahrungspunkten (D&D 5e) und sein Divisionsrang.
// Geteilt von Steckbrief (steckbrief-components.jsx) und Missionsterminal.

// Erfahrungspunkte, ab denen eine Stufe erreicht ist (Stufe 1–20)
const EP_STUFEN = [0,300,900,2700,6500,14000,23000,34000,48000,64000,85000,100000,120000,140000,165000,195000,225000,265000,305000,355000];

function stufeAusEp(xp) {
  const ep = Math.max(0, Number(xp) || 0);
  let st = 1;
  EP_STUFEN.forEach((min, i) => { if (ep >= min) st = i + 1; });
  return st;
}

// Die Stufe folgt den EP. Ältere Charaktere ohne EP behalten ihre eingetragene Stufe, bis EP eingetragen sind.
function charStufe(d) {
  const ep = Number(d && d.xp) || 0;
  return ep > 0 ? stufeAusEp(ep) : ((d && d.level) || 1);
}

// Division und Rang aus den Charakterdaten (Division über ID, sonst über den Namen; ohne gültigen Rang gilt Rang 10).
// null, wenn der Charakter keiner Division angehört. Braucht window.DIVISIONS_DATA (divisions-data.js).
function charDivision(d, divisionName) {
  const alle = window.DIVISIONS_DATA || [];
  const name = divisionName || (d && d.division);
  const div = alle.find(x => x.id === (d && d.divisionId)) || alle.find(x => x.name === name) || null;
  if (!div) return null;
  const rang = div.raenge.find(x => x.titel === (d && d.rank))
    || div.raenge.reduce((lo, x) => (!lo || x.rang > lo.rang) ? x : lo, null);
  return { div, rang };
}

Object.assign(window, { EP_STUFEN, stufeAusEp, charStufe, charDivision });
