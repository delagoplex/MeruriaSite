// DM-Leiste für den Steckbrief eines Spielercharakters (früher die Seite /dm/charakterverwaltung.html).
// Wird von /charaktere/steckbrief.html nur für die Spielleitung nachgeladen.
// Exposes: window.ScDmSteckbrief ({ row, playerName })

;(function () {
const { useState } = React;

const STATUS_OPTIONS = ['Aktiv', 'Wartend', 'Im Ruhestand', 'Gefallen'];
const STATUS_COLOR = { 'Aktiv':'#5fe39a', 'Wartend':'#d6b25c', 'Im Ruhestand':'#8aa3c4', 'Gefallen':'#e36760' };
const SC_URL = '/spiel/charaktere.html';

/* ── DM-Kontrollleiste (Detailansicht) ───────── */
function DMBar({ entry, playerName, visible, status, onBack, onStatusChange, onVisibilityToggle, onLevelSet, onUprank, onDelete }) {
  const char      = entry._char || {};
  const [delOpen, setDelOpen] = useState(false);
  const [delBusy, setDelBusy] = useState(false);
  const level     = window.charStufe ? window.charStufe(char) : (char.level || 1); // Stufe folgt den EP (char-stufe.jsx)
  const [lvlInput, setLvlInput] = useState(level);
  React.useEffect(() => setLvlInput(level), [level]);
  function commitLevel() {
    const n = parseInt(lvlInput, 10);
    if (n >= 1 && n <= 20 && n !== level) onLevelSet(n);
    else setLvlInput(level);
  }
  const div       = (window.DIVISIONS_DATA || []).find(d => d.name === char.division);
  const rankLvl   = char.rankLevel || 1;
  const canUp     = div && rankLvl < div.raenge.length;
  const nextRang  = div ? div.raenge.length - (rankLvl + 1) + 1 : null;
  const nextRankObj = div?.raenge.find(r => r.rang === nextRang);

  const btn = (col, bg='transparent', border='rgba(var(--purple-rgb),calc(0.25*var(--kp)))') => ({
    fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.14em',textTransform:'uppercase',
    padding:'5px 13px',background:bg,border:`1px solid ${border}`,borderRadius:3,
    cursor:'pointer',color:col,transition:'all .15s',whiteSpace:'nowrap',outline:'none',flexShrink:0
  });

  return (
    <div style={{background:'rgba(var(--bg-rgb),0.97)',borderBottom:'1px solid rgba(var(--purple-rgb),calc(0.18*var(--kp)))',
      display:'flex',alignItems:'center',gap:8,
      padding:'7px 20px',flexWrap:'wrap'}}>

      <button style={btn('rgba(var(--accent-rgb),calc(0.7*var(--ka)))')} onClick={onBack}
        onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(var(--purple-rgb),calc(0.5*var(--kp)))';e.currentTarget.style.color='var(--white)';}}
        onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(var(--purple-rgb),calc(0.25*var(--kp)))';e.currentTarget.style.color='rgba(var(--accent-rgb),calc(0.7*var(--ka) + var(--tb)))';}}>
        ← Übersicht
      </button>

      <div style={{width:1,height:20,background:'rgba(var(--purple-rgb),calc(0.2*var(--kp)))',flexShrink:0}} />

      <span style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.14em',
        color:'rgba(var(--purple-rgb),calc(0.5*var(--kp) + var(--tb)))',whiteSpace:'nowrap',flexShrink:0}}>
        Spieler: <span style={{color:'rgba(var(--text-rgb),calc(0.75*var(--kt) + var(--tb)))'}}>{playerName}</span>
      </span>

      <div style={{flex:1,minWidth:8}} />

      {/* Status */}
      <select value={status} onChange={e => onStatusChange(e.target.value)}
        style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.12em',textTransform:'uppercase',
          padding:'5px 10px',background:'rgb(var(--panel-rgb))',border:'1px solid rgba(var(--purple-rgb),calc(0.25*var(--kp)))',
          borderRadius:3,color:STATUS_COLOR[status]||'var(--white)',outline:'none',cursor:'pointer',colorScheme:'dark',flexShrink:0}}>
        {STATUS_OPTIONS.map(s => <option key={s} value={s} style={{color:STATUS_COLOR[s]}}>{s}</option>)}
      </select>

      {/* Sichtbarkeit */}
      <button onClick={onVisibilityToggle}
        style={btn(visible?'rgba(80,200,140,0.9)':'rgba(var(--purple-rgb),calc(0.5*var(--kp)))',
          visible?'rgba(80,200,140,0.08)':'transparent',
          visible?'rgba(80,200,140,0.4)':'rgba(var(--purple-rgb),calc(0.25*var(--kp)))')}>
        {visible ? '◆ Sichtbar' : '○ Verborgen'}
      </button>

      {/* Level direkt editierbar */}
      <div style={{display:'flex',alignItems:'center',gap:5,border:'1px solid rgba(var(--purple-rgb),calc(0.35*var(--kp)))',borderRadius:3,padding:'3px 9px',background:'rgba(var(--purple-rgb),calc(0.08*var(--kp)))'}}>
        <span style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.14em',textTransform:'uppercase',color:'rgba(var(--purple-rgb),calc(0.55*var(--kp) + var(--tb)))',whiteSpace:'nowrap'}}>Stufe</span>
        <input
          type="number" min="1" max="30"
          value={lvlInput}
          onChange={e => setLvlInput(e.target.value)}
          onBlur={commitLevel}
          onKeyDown={e => e.key === 'Enter' && commitLevel()}
          style={{fontFamily:'var(--font-mono)',fontSize:12.5,fontWeight:600,color:'rgba(var(--text-rgb),calc(0.9*var(--kt) + var(--tb)))',
            background:'transparent',border:'none',outline:'none',width:36,textAlign:'center',colorScheme:'dark'}}
        />
      </div>

      {/* Division-Aufstieg */}
      {canUp && nextRankObj && (
        <button style={btn('rgba(213,180,90,0.85)','rgba(213,180,90,0.08)','rgba(213,180,90,0.35)')}
          onClick={onUprank}
          onMouseEnter={e=>{e.currentTarget.style.background='rgba(213,180,90,0.18)';}}
          onMouseLeave={e=>{e.currentTarget.style.background='rgba(213,180,90,0.08)';}}>
          Aufstieg → {nextRankObj.titel}
        </button>
      )}

      {/* Löschen (mit Rückfrage) */}
      <button style={btn('rgba(227,103,96,0.85)','transparent','rgba(227,103,96,0.35)')}
        onClick={() => setDelOpen(true)}
        onMouseEnter={e=>{e.currentTarget.style.background='rgba(227,103,96,0.12)';}}
        onMouseLeave={e=>{e.currentTarget.style.background='transparent';}}>
        ✕ Löschen
      </button>

      {delOpen && (
        <div onClick={e => { if (e.target === e.currentTarget && !delBusy) setDelOpen(false); }}
          style={{position:'fixed',inset:0,zIndex:9000,background:'rgba(var(--bg-rgb),0.85)',display:'flex',alignItems:'center',justifyContent:'center',padding:20}}>
          <div role="alertdialog" aria-label="Charakter löschen"
            style={{width:'100%',maxWidth:440,background:'rgba(var(--panel-rgb),0.99)',border:'1px solid rgba(227,103,96,0.5)',borderRadius:6,padding:'26px 28px'}}>
            <div style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.24em',textTransform:'uppercase',color:'rgba(227,103,96,0.9)',marginBottom:10}}>Charakter löschen</div>
            <div style={{fontFamily:'var(--font-display)',fontSize:18,letterSpacing:'.12em',color:'var(--white)',textTransform:'uppercase',marginBottom:12}}>{entry.name}</div>
            <p style={{fontFamily:'var(--font-body)',fontSize:14,lineHeight:1.65,color:'rgba(var(--text-rgb),calc(0.8*var(--kt) + var(--tb)))',margin:'0 0 20px'}}>
              Soll dieser Charakter von {playerName} wirklich endgültig gelöscht werden? Das kann nicht rückgängig gemacht werden.
            </p>
            <div style={{display:'flex',gap:10,justifyContent:'flex-end'}}>
              <button style={btn('var(--white)')} disabled={delBusy} onClick={() => setDelOpen(false)}>Abbrechen</button>
              <button style={btn('#fff','rgba(227,103,96,0.35)','rgba(227,103,96,0.7)')} disabled={delBusy}
                onClick={async () => { setDelBusy(true); const ok = await onDelete(); setDelBusy(false); if (!ok) return; setDelOpen(false); }}>
                {delBusy ? 'Lösche …' : 'Endgültig löschen'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


/* ── Steckbrief mit DM-Leiste: Status, Sichtbarkeit, Stufe, Rang, Löschen; der Bogen ist bearbeitbar ── */
function ScDmSteckbrief({ row, playerName }) {
  const makeEntry = (r, charData) => ({
    id: r.id, name: (charData && charData.name) || r.name || 'Unbenannt',
    race: r.race, class: r.class, division: r.division, type: r.type || 'spieler',
    _char: charData && Object.keys(charData).length > 0 ? charData : null,
  });
  const [entry, setEntry]     = useState(() => makeEntry(row, row.char_data));
  const [visible, setVisible] = useState(row.visible ?? false);
  const [status, setStatus]   = useState(row.char_data?.status || 'Aktiv');
  const [verKey, setVerKey]   = useState(0);

  // nur die geänderten Felder zusammenführen (RPC char_data_patch, Migration 064) und den Bogen neu laden,
  // damit Änderungen, die inzwischen im Bogen gespeichert wurden, nicht überschrieben werden
  async function aktuell() {
    const { data } = await window._sb.from('characters').select('*').eq('id', entry.id).single();
    return data;
  }
  async function patchChar(patch) {
    try { await window.charDataPatch(entry.id, patch); }
    catch (error) { alert('Speichern fehlgeschlagen: ' + (error && error.message || error)); return false; }
    const neu = await aktuell();
    if (neu) setEntry(makeEntry(neu, neu.char_data));
    setVerKey(k => k + 1);
    return true;
  }
  async function handleStatusChange(newStatus) {
    if (await patchChar({ status: newStatus })) setStatus(newStatus);
  }
  // Stufe setzen = EP auf den Beginn dieser Stufe (die Stufe ergibt sich aus den EP)
  async function handleLevelSet(n) {
    const neu = await aktuell();
    const d = (neu && neu.char_data) || {};
    const ep = Number(d.xp) || 0;
    const xp = window.stufeAusEp && window.stufeAusEp(ep) === n ? ep : (window.EP_STUFEN ? window.EP_STUFEN[n - 1] : 0);
    await patchChar({ level: n, xp });
  }
  async function handleVisibilityToggle() {
    const next = !visible;
    const { error } = await window._sb.from('characters').update({ visible: next }).eq('id', entry.id);
    if (error) { alert('Sichtbarkeit konnte nicht gespeichert werden: ' + error.message); return; }
    setVisible(next);
  }
  async function handleDelete() {
    const { error } = await window._sb.from('characters').delete().eq('id', entry.id);
    if (error) { window.alert('Löschen fehlgeschlagen: ' + error.message); return false; }
    window.location.href = SC_URL;
    return true;
  }
  async function handleUprank() {
    const neu = await aktuell();
    const char = (neu && neu.char_data) || entry._char || {};
    const div  = (window.DIVISIONS_DATA || []).find(d => d.name === char.division);
    if (!div) return;
    const newLvl = (char.rankLevel || 1) + 1;
    if (newLvl > div.raenge.length) return;
    const rankObj = div.raenge.find(r => r.rang === div.raenge.length - newLvl + 1);
    if (!rankObj) return;
    await patchChar({ rankLevel: newLvl, rank: rankObj.titel });
  }

  const SV = window.SteckbriefView;
  return (
    <div>
      <DMBar
        entry={entry} playerName={playerName || '—'} visible={visible} status={status}
        onBack={() => { window.location.href = SC_URL; }}
        onStatusChange={handleStatusChange}
        onVisibilityToggle={handleVisibilityToggle}
        onLevelSet={handleLevelSet}
        onUprank={handleUprank}
        onDelete={handleDelete}
      />
      <SV key={verKey} entry={entry} hideNav={true} />
    </div>
  );
}

window.ScDmSteckbrief = ScDmSteckbrief;

})();
