// Werkzeugübungen: einheitliche Liste und wer welche Übungen verleiht (Hintergrund, Klasse, Rasse,
// angeborenes Talent). Jede Quelle besteht aus „Plätzen“; ein Platz ist die Liste der Werkzeuge, aus der
// genau eines gewählt wird (fest = Liste mit einem Eintrag). Genutzt vom Werkzeug-Planer in
// /charaktererstellung/neuer-charakter.html. Vorübergehende Übungen (Trance, lange Rast) zählen nicht.
(function () {
  const HANDWERK = [
    'Alchemistenausrüstung','Brauer-Ausrüstung','Glasmacherausrüstung','Holzschnitzerwerkzeug',
    'Kartenzeichenwerkzeug','Kochwerkzeug','Lederarbeitsausrüstung','Maurer-Ausrüstung','Schmiedewerkzeug',
    'Schmuckausrüstung','Schreiberset','Steinmetzausrüstung','Tischler-Ausrüstung','Töpferausrüstung',
    'Tüftlerwerkzeug','Weberausrüstung',
  ];
  const MUSIK = ['Musikinstrument'];
  const SPIEL = ['Drachenschach','Lügenspiel','Würfelspiel'];
  const SONST = [
    'Diebeswerkzeug','Fälscherausrüstung','Feldpatienten-Kit','Kräuterkunde-Kit','Navigationsausrüstung',
    'Verkleidungsausrüstung','Vergiftungsausrüstung','Fahrzeuge (Land)','Fahrzeuge (Wasser)',
  ];
  const ALLE = [...HANDWERK, ...MUSIK, ...SPIEL, ...SONST].sort((a, b) => a.localeCompare(b, 'de'));
  const f = w => [w];   // fester Platz

  const HINTERGRUND = {
    'Adliger': [SPIEL],
    'Archäologe': [['Kartenzeichenwerkzeug','Navigationsausrüstung']],
    'Erbe': [[...SPIEL, ...MUSIK]],
    'Einsiedler': [f('Kräuterkunde-Kit')],
    'Ermittler': [f('Verkleidungsausrüstung'), f('Diebeswerkzeug')],
    'Feenlost': [MUSIK],
    'Gemeiner': [HANDWERK],
    'Gilden-/Zunfthandwerker': [HANDWERK],
    'Klanhandwerker': [HANDWERK],
    'Krimineller': [SPIEL, f('Diebeswerkzeug')],
    'Ordensritter': [[...SPIEL, ...MUSIK]],
    'Scharlatan': [f('Fälscherausrüstung'), f('Verkleidungsausrüstung')],
    'Seemann': [f('Navigationsausrüstung'), f('Fahrzeuge (Wasser)')],
    'Soldat': [SPIEL, f('Fahrzeuge (Land)')],
    'Söldnerveteran': [[...SPIEL, ...MUSIK], f('Fahrzeuge (Land)')],
    'Sonderling': [MUSIK],
    'Städtischer Kopfgeldjäger': [[...SPIEL, ...MUSIK, 'Diebeswerkzeug'], [...SPIEL, ...MUSIK, 'Diebeswerkzeug']],
    'Stammesmitglied': [[...MUSIK, ...HANDWERK]],
    'Straßenkind': [f('Diebeswerkzeug'), f('Verkleidungsausrüstung')],
    'Unterhaltungskünstler': [f('Verkleidungsausrüstung'), MUSIK],
    'Volksheld': [HANDWERK, f('Fahrzeuge (Land)')],
    'Wanderer aus der Ferne': [[...MUSIK, ...SPIEL]],
  };
  const KLASSE = {
    'Barde': [MUSIK, MUSIK, MUSIK],
    'Druide': [f('Kräuterkunde-Kit')],
    'Magieschmied': [f('Diebeswerkzeug'), f('Tüftlerwerkzeug'), HANDWERK],
    'Mönch': [[...HANDWERK, ...MUSIK]],
    'Schurke': [f('Diebeswerkzeug')],
  };
  const RASSE = {
    'Autognome': [ALLE, ALLE],
    'Darakhul': [ALLE],                    // nur mit Mensch/Halbelf-Erbe
    'Felsengnome': [f('Tüftlerwerkzeug')],
    'Gebirgszwerge': [['Brauer-Ausrüstung','Schmiedewerkzeug','Steinmetzausrüstung']],
    'Grauzwerge': [['Brauer-Ausrüstung','Schmiedewerkzeug','Steinmetzausrüstung']],
    'Hügelzwerge': [['Brauer-Ausrüstung','Schmiedewerkzeug','Steinmetzausrüstung']],
    'Kriegsgeschmiedete': [ALLE],
    'Satyrn': [MUSIK],
  };
  // Angeborene Talente mit Werkzeugübung und die Rassen, die sie wählen können
  const TALENT = [
    { name:'Anführer des Rudels',          rassen:['Tabaxi'],                              plaetze:[ALLE] },
    { name:'Aufziehherz',                  rassen:['Geppettin'],                           plaetze:[HANDWERK] },
    { name:'Kriegsgeboren',                rassen:['Goblins','Hobgoblins','Grottenschrate'], plaetze:[ALLE] },
    { name:'Meister der Nachahmung',       rassen:['Kenku'],                               plaetze:[f('Fälscherausrüstung'), f('Verkleidungsausrüstung')] },
    { name:'Territorialverhalten',         rassen:['Wandler'],                             plaetze:[f('Kochwerkzeug')] },
    { name:'Überragende Gastfreundschaft', rassen:['Stämmige'],                            plaetze:[f('Kochwerkzeug'), f('Brauer-Ausrüstung')] },
    { name:'Wunderkind',                   rassen:['Halbelfen','Halborks','Menschen'],     plaetze:[ALLE] },
  ];

  // größte Zuordnung Werkzeuge → Plätze (jedes Werkzeug ein Platz); liefert die Zahl der zugeordneten Werkzeuge
  function zuordnung(werkzeuge, plaetze) {
    const belegt = new Array(plaetze.length).fill(-1);
    const versuch = (wi, besucht) => {
      for (let p = 0; p < plaetze.length; p++) {
        if (besucht[p] || !plaetze[p].includes(werkzeuge[wi])) continue;
        besucht[p] = true;
        if (belegt[p] < 0 || versuch(belegt[p], besucht)) { belegt[p] = wi; return true; }
      }
      return false;
    };
    let n = 0;
    for (let i = 0; i < werkzeuge.length; i++) if (versuch(i, [])) n++;
    return n;
  }

  let _alle = null;
  // alle Kombinationen Rasse × angeborenes Talent × Klasse × Hintergrund mit ihren Plätzen
  function kombinationenAlle() {
    if (_alle) return _alle;
    const rassen = window.ALLE_RASSEN || [], klassen = window.ALLE_KLASSEN || [], hgs = window.ALLE_HINTERGRUENDE || [];
    _alle = [];
    for (const r of rassen) {
      const talente = [null, ...TALENT.filter(t => t.rassen.includes(r))];
      for (const t of talente) for (const k of klassen) for (const h of hgs) {
        const plaetze = [...(RASSE[r] || []), ...(t ? t.plaetze : []), ...(KLASSE[k] || []), ...(HINTERGRUND[h] || [])];
        _alle.push({ rasse:r, talent:t ? t.name : null, klasse:k, hintergrund:h, plaetze });
      }
    }
    return _alle;
  }
  const frei = v => v == null || v === 'unbekannt';
  // Kombinationen, die zu den festen Tags passen und alle gewünschten Werkzeuge sicher liefern
  function kombinationen(wunsch, fest) {
    fest = fest || {};
    return kombinationenAlle().filter(c =>
      (frei(fest.rasse) || c.rasse === fest.rasse) &&
      (frei(fest.klasse) || c.klasse === fest.klasse) &&
      (frei(fest.hintergrund) || c.hintergrund === fest.hintergrund) &&
      c.plaetze.length >= wunsch.length &&
      zuordnung(wunsch, c.plaetze) === wunsch.length);
  }
  // höchste Zahl verschiedener Werkzeuge, die eine passende Kombination liefern kann
  function maxAnzahl(fest) {
    let best = 0;
    for (const c of kombinationen([], fest)) if (c.plaetze.length > best) best = Math.max(best, zuordnung(ALLE, c.plaetze));
    return best;
  }
  // Hintergründe, die alle (sonst: wenigstens eines) der Werkzeuge liefern können
  function hintergruendeFuer(werkzeuge) {
    const hgs = window.ALLE_HINTERGRUENDE || [];
    const alle = hgs.filter(h => zuordnung(werkzeuge, HINTERGRUND[h] || []) === werkzeuge.length);
    if (alle.length) return alle;
    return hgs.filter(h => werkzeuge.some(w => (HINTERGRUND[h] || []).some(p => p.includes(w))));
  }

  window.WERKZEUGE_LIST = ALLE;
  window.WERKZEUG_PLANER = { ALLE, HANDWERK, MUSIK, SPIEL, SONST, HINTERGRUND, KLASSE, RASSE, TALENT,
    zuordnung, kombinationen, maxAnzahl, hintergruendeFuer };
})();
