// Statblock aus der Monster-/NSC-Datenbank in das Statblock-Format (Feld `steckbrief`) des NSC übernehmen.
// Genutzt von /dm/nsc-verwaltung und /dm/rekrutierungsanfragen.
window.statToSteckbrief = function (m, art) {
  return {
    name:m.name, quelle:[m.source, art].filter(Boolean).join(' · '),
    typ:m.art ? [m.groesse, m.art + (m.unterart ? ' (' + m.unterart + ')' : ''), m.gesinnung].filter(Boolean).join(' · ') : 'Humanoid',
    rk:m.rk ?? '', rkTyp:m.ruestungstyp || '', tp:m.tp ?? '', tpw:m.tp_wuerfel || '',
    bew:Object.entries(m.bewegung || {}).map(([k, v]) => k + ' ' + v).join(', '),
    attr:{ STR:10, DEX:10, CON:10, INT:10, WIS:10, CHA:10, ...(m.attribute || {}) },
    fert:Object.entries(m.fertigkeiten || {}).map(([k, v]) => k + ' +' + v).join(', '),
    akt:[...(m.besonderheiten || []), ...(m.aktionen || []), ...(m.bonusaktionen || []), ...(m.reaktionen || [])].map(a => ({ n:a.name, b:a.beschreibung })),
  };
};
