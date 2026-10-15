// Namenswahl am Ende der Charaktererstellung: würfelt aus der Namenstabelle der Rasse
// (wie der Namenswürfler auf /charaktererstellung/rassen-detail.html), Namen lassen sich kopieren.
;(function () {
const { useState, useEffect } = React;

function namensPools(section) {
  if (!section || section.type !== 'nameRoller') return null;
  if (section.tabellen) return section.tabellen.map(t => ({ label: t.name.replace(/\s*\(\d+W\d+\)$/, ''), namen: t.eintraege || [] }));
  return section.namen ? [{ label: null, namen: section.namen }] : null;
}

function startTabelle(pools, geschlecht) {
  const g = (geschlecht || '').toLowerCase();
  const such = g.startsWith('weib') ? 'weib' : g.startsWith('männ') ? 'männ' : null;
  if (!such) return 0;
  const i = pools.findIndex(p => (p.label || '').toLowerCase().includes(such));
  return i < 0 ? 0 : i;
}

function Wuerfel({ rolling }) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" className={rolling ? 'nc-name-rolling' : ''}>
      <rect x="3" y="3" width="18" height="18" rx="3"/>
      <circle cx="8.5" cy="8.5" r="1.2" fill="currentColor"/>
      <circle cx="15.5" cy="8.5" r="1.2" fill="currentColor"/>
      <circle cx="8.5" cy="15.5" r="1.2" fill="currentColor"/>
      <circle cx="15.5" cy="15.5" r="1.2" fill="currentColor"/>
      <circle cx="12" cy="12" r="1.2" fill="currentColor"/>
    </svg>
  );
}

function NcNamenWahl({ rasse, geschlecht, onConfirm, onCancel }) {
  const [daten, setDaten]       = useState(undefined); // undefined = lädt, null = keine Daten
  const [katIdx, setKatIdx]     = useState(0);
  const [result, setResult]     = useState(null);
  const [roll, setRoll]         = useState(null);
  const [rolling, setRolling]   = useState(false);
  const [showList, setShowList] = useState(false);
  const [idx, setIdx]           = useState(-1);
  const [kopiert, setKopiert]   = useState(null);
  const [eigener, setEigener]   = useState('');

  useEffect(() => {
    let aktiv = true;
    (window.loadRassenDetail ? window.loadRassenDetail(rasse) : Promise.resolve(null))
      .then(d => { if (aktiv) setDaten(d || null); });
    return () => { aktiv = false; };
  }, [rasse]);

  const section = daten && daten.namenSection;
  const pools = namensPools(section);
  const names = pools ? (pools[katIdx]?.namen || []) : [];

  // beim Öffnen gleich einen Namen würfeln (passende Tabelle zum Geschlecht)
  useEffect(() => {
    if (!pools) return;
    const k = startTabelle(pools, geschlecht);
    setKatIdx(k);
    const liste = pools[k].namen;
    if (liste.length) rollDice(liste);
  }, [daten]);

  function selectKat(i) {
    setKatIdx(i);
    setResult(null); setRoll(null); setIdx(-1); setShowList(false);
  }

  function rollDice(liste = names) {
    if (rolling || !liste.length) return;
    setRolling(true); setResult(null);
    let count = 0;
    const iv = setInterval(() => {
      setResult(liste[Math.floor(Math.random() * liste.length)]);
      count++;
      if (count > 14) {
        clearInterval(iv);
        const i = Math.floor(Math.random() * liste.length);
        setIdx(i); setRoll(i + 1); setResult(liste[i]); setRolling(false);
      }
    }, 55);
  }

  function kopieren(n, e) {
    e.stopPropagation();
    const fertig = () => { setKopiert(n); setTimeout(() => setKopiert(k => k === n ? null : k), 1400); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(n).then(fertig, fertig);
    else fertig();
  }

  const name = pools ? (rolling ? null : result) : eigener.trim();

  return (
    <div className="nc-name-overlay" onClick={e => { if (e.target === e.currentTarget) onCancel(); }}>
      <div className="nc-name-box" role="dialog" aria-label="Namen bestimmen">
        <div className="nc-name-kicker">Charaktername</div>
        <div className="nc-name-title">{section?.label || 'Wie soll dein Charakter heißen?'}</div>

        {daten === undefined && <div className="nc-name-empty">— Namenstabelle wird geladen —</div>}

        {daten !== undefined && !pools && (
          <div>
            {(section?.absaetze || []).map((p, i) => <p key={i} className="nc-name-text">{p}</p>)}
            {!section?.absaetze && <p className="nc-name-text">Für {rasse || 'diese Rasse'} gibt es keine Namenstabelle. Gib selbst einen Namen ein.</p>}
            <input className="nc-name-input" autoFocus value={eigener} onChange={e => setEigener(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && eigener.trim()) onConfirm(eigener.trim()); }}
              placeholder="Name eingeben …" aria-label="Name des Charakters" />
          </div>
        )}

        {pools && (
          <div>
            {section.beschreibung && <p className="nc-name-text">{section.beschreibung}</p>}
            {pools.length > 1 && (
              <div className="nc-name-tabs">
                {pools.map((p, i) => (
                  <button key={i} type="button" className={'nc-name-tab' + (i === katIdx ? ' active' : '')} onClick={() => selectKat(i)}>{p.label}</button>
                ))}
              </div>
            )}
            <div className="nc-roll-display">
              {result ? (
                <div style={{ animation: rolling ? 'none' : 'nc-result-pop 0.4s cubic-bezier(0.23,1,0.32,1) forwards' }}>
                  <div className="nc-roll-label">{roll && !rolling ? `Ergebnis: ${roll}` : '— — —'}</div>
                  <div className="nc-roll-name">{result}</div>
                  <div className="nc-roll-label">{(rasse || '').toLowerCase()} · name</div>
                </div>
              ) : (
                <div className="nc-roll-empty">— Noch kein Wurf —</div>
              )}
            </div>
            <button type="button" className="nc-name-toggle" onClick={() => setShowList(s => !s)}>
              <svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.5"
                   style={{ transform: showList ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                <path d="M2 4l4 4 4-4"/>
              </svg>
              {showList ? 'Liste ausblenden' : `Alle ${names.length} Namen anzeigen`}
            </button>
            {showList && (
              <div className="nc-name-list-wrap">
                <div className="nc-name-grid">
                  {names.map((n, i) => (
                    <div key={i} className={`nc-name-cell${i === idx ? ' active' : ''}`} title="Als Ergebnis übernehmen"
                         onClick={() => { setIdx(i); setResult(n); setRoll(i + 1); }}>
                      <span className="num">{String(i + 1).padStart(2, '0')}</span>
                      <span className="txt">{n}</span>
                      <button type="button" className={'nc-name-copy' + (kopiert === n ? ' ok' : '')} onClick={e => kopieren(n, e)}
                              title="In die Zwischenablage kopieren" aria-label={`${n} kopieren`}>
                        {kopiert === n ? '✓' : '⧉'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {kopiert && <div className="nc-name-hint">„{kopiert}“ kopiert. Bestätige und füge ihn im fertigen Bogen anstelle des gewürfelten Namens ein.</div>}
          </div>
        )}

        <div className="nc-name-actions">
          <button type="button" className="nc-name-btn ghost" onClick={onCancel}>Zurück</button>
          {pools && (
            <button type="button" className="nc-name-btn dice" onClick={() => rollDice()} disabled={rolling}>
              <Wuerfel rolling={rolling} /> Nochmal würfeln
            </button>
          )}
          <button type="button" className="nc-name-btn main" disabled={!name} onClick={() => onConfirm(name)}>Bestätigen →</button>
        </div>
      </div>
    </div>
  );
}

window.NcNamenWahl = NcNamenWahl;
})();
