// Page entry for /dm/nsc-verwaltung.html
import '../../components/nav.jsx';
import '../../components/site-gate.jsx';
import '../parts/nsc-shared.jsx';
import '../../components/char-age.jsx';

;(function () {
/* NSC-Verwaltung v2 — DM-Tool: Anlegen, Bearbeiten, Sichtbarkeit & Freischaltungen.
   Design nach NSC-Verwaltung.dc.html; Persistenz via Supabase (nur Upserts, kein PATCH).
   IIFE: hält alle Deklarationen aus dem globalen Scope (Kollision mit nsc-shared.js). */
(() => {

const { useState, useEffect, useMemo, useRef, useCallback } = React;
const { hexA, mapNscRow, factsOf, unlockableFactsOf, NSC_SEC_OF_PREFIX, useUnlocks, stageFromUnlocked,
        MERURIA_MONTHS, MERURIA_MSTARTS, meruriaDoyParts, meruriaDoyText, meruriaZodiacOf,
        STATUS_DEF, SiteNav, SiteGate } = window;
const HALTUNGEN = window.NSC_HALTUNGEN || ['Verbündet','Neutral','Feind'];

const T = () => window.NSC_TOOL || { divisions:[], statuses:[], klassen:[], rassen:[], raenge:{}, gottheiten:{}, hintergruende:[], groessen:[], gesinnungen:[] };
const MONO = 'var(--font-mono)';
const BODY = 'var(--font-body)';
const DISP = 'var(--font-display)';

const divOf  = name => T().divisions.find(d => d.name === name) || { accent:'#7c4dff', roman:'—' };
const raceOf = name => T().rassen.find(r => r.name === name) || null;
const subOf  = rasse => { const r = raceOf(rasse); if (!r || !r.sub) return { show:false, label:'', opts:[] };
  const opts = r.sub.fromRassen ? T().rassen.map(x => x.name).filter(n => n !== r.name) : r.sub.opts;
  return { show:true, label:r.sub.label, opts }; };
const rasseText = (rasse, unterrasse) => { if (!rasse) return ''; if (!unterrasse) return rasse;
  const r = raceOf(rasse);
  return r && r.sub && r.sub.fromRassen ? rasse + ' (früher ' + unterrasse + ')' : rasse + ' · ' + unterrasse; };

function ageInfo(rasse, alter) {
  const r = raceOf(rasse);
  if (!r) return null;
  const a = parseInt(alter) || null;
  let phase = null, pct = null;
  if (a != null) {
    if (r.adult == null) phase = 'Zeitlos';
    else if (a < r.adult) phase = 'Jung';
    else if (r.life == null) phase = 'Erwachsen · altert nicht';
    else { const ratio = a / r.life; pct = Math.min(100, Math.round(ratio*100));
      phase = ratio <= 0.45 ? 'Erwachsen' : ratio <= 0.7 ? 'Reif' : ratio <= 0.9 ? 'Alt' : ratio <= 1 ? 'Uralt' : 'Jenseits der Lebenserwartung'; }
  }
  return { adult:r.adult != null ? r.adult + ' Jahre' : 'entfällt', life:r.life != null ? '~' + r.life + ' Jahre' : 'kein Altern', phase, pct };
}

// ── Frontend-NSC → DB-Zeile ────────────────────────────────
function nscToRow(n) {
  return {
    id: n.id,
    name: (n.name || '').trim() || 'Unbenannt',
    titel: (n.titel || '').trim() || null,
    voller_name: n.vollerName || [],
    rasse: n.rasse || null,
    unterrasse: n.unterrasse || null,
    geschlecht: n.geschlecht || null,
    alter_jahre: (() => { const b = window.CharAge.fromBirth(n.geburtstag_jahr, n.geburtstag_doy); return b != null ? b : (n.alter != null && n.alter !== '' ? (parseInt(n.alter) || null) : null); })(),
    alter_ref_abs: n.alter != null && n.alter !== '' ? window.CharAge.today() : null,
    geburtstag_jahr: n.geburtstag_jahr ?? null,
    klasse: n.klasse || null,
    gesinnung: n.gesinnung || null,
    groesse: n.groesse || null,
    hintergrund: n.hintergrund || null,
    geburtstag_doy: n.geburtstag_doy || null,
    beruf: (n.beruf || '').trim() || null,
    division: n.division || 'Keine',
    rang: n.rang != null && n.rang !== '' ? String(n.rang) : null,
    organisation: (n.organisation || '').trim() || null,
    kapsel: (n.kapsel || '').trim() || null,
    wohnort: (n.wohnort || '').trim() || null,
    gottheit: n.gottheit || null,
    biografie: n.biografie || null,
    aussehen: (n.aussehen && typeof n.aussehen === 'object') ? n.aussehen : {},
    unvergesslich: n.unvergesslich || null,
    eigenschaften: n.eigenschaften || [],
    status: n.status || [],
    talente: n.talente || [],
    makel: n.makel || [],
    routine: n.routine || [],
    gewohnheiten: n.gewohnheiten || [],
    ausruestung: n.ausruestung || [],
    begleiter: n.begleiter || [],
    habe: parseInt(n.habe) || 0,
    motivationen: n.motivationen || [],
    geheimnisse: n.geheimnisse || [],
    haltung_overrides: n.haltungOverrides || {},
    kontakte: n.kontakte || { familie:[], freunde:[], rivalen:[] },
    sections: n.sections || [],
    field_visibility: n.fieldVis || {},
    steckbrief: n.steckbrief || null,
    bild: (n.bild || '').trim() || null,
    visible: !!n.visible,
  };
}

// ── Daten-Hook (DM: alle NSC + Spielercharaktere) ──────────
function useDMData() {
  const [nscs, setNscs] = useState([]);
  const [charPersp, setCharPersp] = useState([]);
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => { (async () => {
    const sb = window._sb;
    const [{ data:nscRows }, { data:charRows }, { data:profileRows }] = await Promise.all([
      sb.rpc('get_nsc_admin_data'),
      sb.from('characters').select('id,name,owner_id').eq('type','spieler').order('name'),
      sb.from('profiles').select('id,display_name'),
      window.CharAge.load(),
    ]);
    setNscs((nscRows || []).map(mapNscRow));
    const profileMap = new Map((profileRows || []).map(p => [p.id, p.display_name || 'Unbekannt']));
    const chars = (charRows || []).map(c => ({ id:c.id, label:c.name, owner_id:c.owner_id }));
    setCharPersp(chars);
    const pm = new Map();
    chars.forEach(c => {
      if (!pm.has(c.owner_id)) pm.set(c.owner_id, { id:'player:' + c.owner_id, label:profileMap.get(c.owner_id) || 'Unbekannt', charIds:[] });
      pm.get(c.owner_id).charIds.push(c.id);
    });
    setPlayers([...pm.values()]);
    setLoading(false);
  })(); }, []);
  return { nscs, setNscs, charPersp, charPids:charPersp.map(c => c.id), players, loading };
}

// ── Global sichtbare (freischaltbare) Fakten eines NSC ─────
// Geteilte Logik aus nsc-shared.js — Sichtbarkeit ist Opt-in.
const SEC_OF_PREFIX = NSC_SEC_OF_PREFIX;
const unlockableKeys = unlockableFactsOf;

// ── Kleine Bausteine ───────────────────────────────────────
const lbSt = { fontFamily:MONO, fontSize:9, letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(var(--accent-rgb),calc(0.55*var(--ka) + var(--tb)))' };
const inpSt = { width:'100%', padding:'8px 10px', background:'rgba(var(--bg-rgb),0.85)', border:'1px solid rgba(var(--purple-rgb),calc(0.35*var(--kp)))', borderRadius:3, color:'var(--white)', fontFamily:BODY, fontSize:13, outline:'none', boxSizing:'border-box' };
const selSt = { ...inpSt, cursor:'pointer' };
const rmBtnSt = { padding:'0 10px', background:'rgba(227,103,96,0.08)', border:'1px solid rgba(227,103,96,0.3)', borderRadius:3, color:'rgba(227,103,96,0.7)', cursor:'pointer', fontSize:12 };
const addBtnSt = { padding:'6px 14px', background:'rgba(var(--purple-rgb),calc(0.08*var(--kp)))', border:'1px dashed rgba(var(--purple-rgb),calc(0.4*var(--kp)))', borderRadius:3, color:'rgba(var(--text-rgb),calc(0.65*var(--kt) + var(--tb)))', fontFamily:MONO, fontSize:9, letterSpacing:'0.18em', textTransform:'uppercase', cursor:'pointer' };
const cardSt = { background:'rgba(var(--panel-rgb),0.75)', border:'1px solid rgba(var(--purple-rgb),calc(0.16*var(--kp)))', borderRadius:6, padding:'20px 22px', marginBottom:14, animation:'fadeIn 0.25s ease' };
const secTitleSt = { fontFamily:MONO, fontSize:9, letterSpacing:'0.3em', color:'rgba(var(--purple-rgb),calc(0.75*var(--kp) + var(--tb)))', textTransform:'uppercase' };
const eyeSt = on => ({ background:'transparent', border:'none', cursor:'pointer', fontSize:11, padding:'0 2px', lineHeight:1, color:on ? '#5fe39a' : 'rgba(var(--accent-rgb),calc(0.3*var(--ka)))' });

function Eye({ on, onClick, pad }) {
  return <button title="Sichtbarkeit für Spieler" onClick={onClick} style={{ ...eyeSt(on), padding:pad || '0 2px' }}>{on ? '◉' : '⊘'}</button>;
}
/* Symbole für die Haltung gegenüber der Gruppe (Linien-Icons, übernehmen currentColor) */
const HALTUNG_FARBE = { 'Verbündet':'#5aa9ff', 'Neutral':'#c8c0e8', 'Feind':'#e8605a' };
function HaltungIcon({ name, size = 18 }) {
  const p = { width:size, height:size, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:1.8, strokeLinecap:'round', strokeLinejoin:'round', 'aria-hidden':true };
  if (name === 'Verbündet') return (
    <svg {...p}><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>
  );
  if (name === 'Feind') return (
    <svg {...p}><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" x2="19" y1="19" y2="13"/><line x1="16" x2="20" y1="16" y2="20"/><line x1="19" x2="21" y1="21" y2="19"/><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"/><line x1="5" x2="9" y1="14" y2="18"/><line x1="7" x2="4" y1="17" y2="20"/><line x1="3" x2="5" y1="19" y2="21"/></svg>
  );
  return (
    <svg {...p}><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>
  );
}
/* Auge mit drei Wimpern: offen = sichtbar, geschlossen = verborgen */
function VisEye({ open, size = 22 }) {
  const p = { width:size, height:size, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:1.7, strokeLinecap:'round', strokeLinejoin:'round', 'aria-hidden':true };
  return open ? (
    <svg {...p}><path d="M2 14c3-5 17-5 20 0-3 5-17 5-20 0Z"/><circle cx="12" cy="14" r="2.8"/><path d="M12 4v3"/><path d="M6.2 5.6 7.6 8"/><path d="M17.8 5.6 16.4 8"/></svg>
  ) : (
    <svg {...p}><path d="M3 11c3 5.5 15 5.5 18 0"/><path d="M12 15.5V19"/><path d="M6.4 14.2 5.2 17"/><path d="M17.6 14.2 18.8 17"/></svg>
  );
}
/* Schalter mit Wimpernauge: grün = für Spieler sichtbar, geschlossen in Neutral-Farbe = verborgen */
function VisToggle({ on, onClick, label, size = 30 }) {
  const col = on ? '#5fe39a' : HALTUNG_FARBE.Neutral;
  return (
    <button onClick={onClick} title={label + (on ? ' sichtbar — klicken zum Verbergen' : ' verborgen — klicken zum Freigeben')}
      aria-label={label + (on ? ' sichtbar' : ' verborgen')} aria-pressed={!!on}
      style={{ width:size + 8, height:size, flexShrink:0, display:'inline-flex', alignItems:'center', justifyContent:'center', cursor:'pointer', borderRadius:3, padding:0,
        background:on ? 'rgba(95,227,154,0.12)' : 'transparent',
        border:`1px solid ${on ? 'rgba(95,227,154,0.55)' : hexA(HALTUNG_FARBE.Neutral, 0.35)}`, color:col }}>
      <VisEye open={!!on} size={Math.round(size * 0.7)}/>
    </button>
  );
}
/* Fenster zur Bildauswahl aus den Projektordnern (Liste: assets/scripts/data/bilder-data.js, generiert) */
const BILD_GRUPPEN = { npc:'NSC-Porträts', races:'Rassen', monster:'Monster', gods:'Gottheiten', classes:'Klassen', divisions:'Divisionen', schutzherren:'Schutzherren', recipes:'Rezepte', resources:'Ressourcen' };
function BildPicker({ current, onPick, onClose }) {
  const data = window.BILDER_DATA || {};
  const keys = Object.keys(data);
  const [group, setGroup] = useState('npc');
  const [q, setQ] = useState('');
  const [limit, setLimit] = useState(96);
  const base = 'assets/images/';
  const all = group === '*' ? keys.flatMap(k => data[k]) : (data[group] || []);
  const ql = q.trim().toLowerCase();
  const hits = ql ? all.filter(p => p.toLowerCase().includes(ql)) : all;
  const shown = hits.slice(0, limit);
  const chip = on => ({ padding:'5px 11px', borderRadius:14, cursor:'pointer', fontFamily:MONO, fontSize:8.5, letterSpacing:'0.12em', textTransform:'uppercase',
    background:on ? 'rgba(var(--purple-rgb),calc(0.25*var(--kp)))' : 'transparent',
    border:`1px solid ${on ? 'rgba(var(--purple-rgb),calc(0.8*var(--kp)))' : 'rgba(var(--accent-rgb),calc(0.25*var(--ka)))'}`,
    color:on ? 'var(--white)' : 'rgba(var(--text-rgb),calc(0.55*var(--kt) + var(--tb)))' });
  useEffect(() => {
    const kd = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', kd);
    return () => document.removeEventListener('keydown', kd);
  }, []);
  return ReactDOM.createPortal(
    <div onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}
      style={{ position:'fixed', inset:0, zIndex:3500, background:'rgba(var(--bg-rgb),0.82)', display:'flex', alignItems:'center', justifyContent:'center', padding:24 }}>
      <div role="dialog" aria-label="Bild wählen" style={{ width:'min(980px, 100%)', maxHeight:'calc(var(--vh, 1vh) * 100 - 48px)', minHeight:0, display:'flex', flexDirection:'column', background:'rgba(var(--panel-rgb),0.99)', border:'1px solid rgba(var(--purple-rgb),calc(0.5*var(--kp)))', borderRadius:8, boxShadow:'0 20px 80px rgba(var(--shadow-rgb),calc(0.6*var(--shadow-k)))' }}>
        <div style={{ display:'flex', alignItems:'center', gap:12, padding:'14px 18px', borderBottom:'1px solid rgba(var(--accent-rgb),calc(0.2*var(--ka)))' }}>
          <span style={{ fontFamily:MONO, fontSize:10, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--white)' }}>Bild wählen</span>
          <input autoFocus value={q} onChange={e => { setQ(e.target.value); setLimit(96); }} placeholder="Suchen …" style={{ ...inpSt, flex:1, padding:'7px 10px', fontSize:13 }}/>
          <span style={{ fontFamily:MONO, fontSize:9, color:'rgba(var(--text-rgb),calc(0.5*var(--kt) + var(--tb)))' }}>{hits.length} Bilder</span>
          <button onClick={onClose} aria-label="Schließen" style={{ background:'transparent', border:'none', cursor:'pointer', color:'rgba(var(--text-rgb),calc(0.6*var(--kt) + var(--tb)))', fontSize:18, lineHeight:1 }}>×</button>
        </div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:6, padding:'10px 18px' }}>
          <button style={chip(group === '*')} onClick={() => { setGroup('*'); setLimit(96); }}>Alle</button>
          {keys.map(k => <button key={k} style={chip(group === k)} onClick={() => { setGroup(k); setLimit(96); }}>{(BILD_GRUPPEN[k] || k)} · {data[k].length}</button>)}
        </div>
        <div style={{ overflowY:'auto', padding:'4px 18px 18px' }}>
          {!hits.length && (
            <div style={{ padding:'28px 0', textAlign:'center', fontFamily:BODY, fontSize:13, color:'rgba(var(--text-rgb),calc(0.55*var(--kt) + var(--tb)))' }}>
              {group === 'npc' && !ql ? 'Noch keine NSC-Porträts. Neue Bilder in assets/images/npc/ ablegen; sie erscheinen nach dem nächsten Build hier.' : 'Keine Treffer.'}
            </div>
          )}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(120px, 1fr))', gap:10 }}>
            {shown.map(p => {
              const full = base + p;
              const on = current === full;
              return (
                <button key={p} onClick={() => onPick(full)} title={p}
                  style={{ padding:6, textAlign:'left', cursor:'pointer', borderRadius:4, background:on ? 'rgba(95,227,154,0.12)' : 'rgba(var(--purple-rgb),calc(0.05*var(--kp)))',
                    border:`1px solid ${on ? 'rgba(95,227,154,0.6)' : 'rgba(var(--accent-rgb),calc(0.2*var(--ka)))'}` }}>
                  <div style={{ width:'100%', aspectRatio:'1 / 1', overflow:'hidden', borderRadius:3, background:'#000' }}>
                    <img src={full} alt="" loading="lazy" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top', display:'block' }}/>
                  </div>
                  <div style={{ marginTop:5, fontFamily:MONO, fontSize:8, color:'rgba(var(--text-rgb),calc(0.6*var(--kt) + var(--tb)))', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{p.split('/').pop()}</div>
                </button>
              );
            })}
          </div>
          {hits.length > shown.length && (
            <div style={{ textAlign:'center', marginTop:14 }}>
              <button onClick={() => setLimit(l => l + 96)} style={{ padding:'8px 18px', background:'transparent', border:'1px dashed rgba(var(--purple-rgb),calc(0.5*var(--kp)))', borderRadius:3, color:'var(--white)', fontFamily:MONO, fontSize:9, letterSpacing:'0.16em', textTransform:'uppercase', cursor:'pointer' }}>Mehr anzeigen ({hits.length - shown.length})</button>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
function FieldHead({ label, eye }) {
  return (
    <span style={{ display:'flex', alignItems:'center', gap:4, marginBottom:5 }}>
      <label style={lbSt}>{label}</label>
      {eye}
    </span>
  );
}
/* Drag&Drop-Umsortierung für Listenzeilen: gezogen wird nur am Anfasser,
   eine Linie zwischen den Zeilen zeigt die Einfügeposition. */
function useRowDnD(rows, commit, horizontal) {
  const [dragging, setDragging] = useState(null);
  const [over, setOver] = useState(null); // { i, after }
  const reset = () => { setDragging(null); setOver(null); };
  const target = (e, i) => {
    const r = e.currentTarget.getBoundingClientRect();
    return { i, after:horizontal ? e.clientX > r.left + r.width / 2 : e.clientY > r.top + r.height / 2 };
  };
  const rowProps = i => ({
    'data-dnd-row': true,
    onDragOver: e => { if (dragging == null) return; e.preventDefault(); e.dataTransfer.dropEffect = 'move';
      const t = target(e, i); setOver(o => (o && o.i === t.i && o.after === t.after) ? o : t); },
    onDragLeave: e => { if (dragging == null) return;
      if (!e.currentTarget.contains(e.relatedTarget)) setOver(o => (o && o.i === i) ? null : o); },
    onDrop: e => { if (dragging == null) return; e.preventDefault();
      const t = target(e, i); let to = t.i + (t.after ? 1 : 0);
      const f = dragging; reset();
      if (f < to) to--;
      if (to === f) return;
      const a = [...rows]; const [mv] = a.splice(f, 1); a.splice(to, 0, mv);
      commit(a); },
  });
  const handleProps = i => ({
    draggable: true,
    onDragStart: e => { setDragging(i); e.dataTransfer.effectAllowed = 'move';
      const row = e.currentTarget.closest('[data-dnd-row]');
      if (row && e.dataTransfer.setDragImage) e.dataTransfer.setDragImage(row, 24, row.offsetHeight / 2); },
    onDragEnd: reset,
  });
  const indicator = i => (dragging != null && over && over.i === i) ? (
    <div style={horizontal
      ? { position:'absolute', top:0, bottom:0, [over.after ? 'right' : 'left']:-5, width:2, borderRadius:1, background:'#7c4dff', boxShadow:'0 0 8px rgba(var(--purple-rgb),calc(0.7*var(--kp)))', pointerEvents:'none', zIndex:2 }
      : { position:'absolute', left:0, right:0, [over.after ? 'bottom' : 'top']:-4, height:2, borderRadius:1,
          background:'linear-gradient(90deg, #7c4dff, rgba(var(--purple-rgb),calc(0.25*var(--kp))))', boxShadow:'0 0 8px rgba(var(--purple-rgb),calc(0.7*var(--kp)))',
          pointerEvents:'none', zIndex:2 }}/>
  ) : null;
  return { dragging, rowProps, handleProps, indicator };
}

function StrList({ list, onChange, placeholder, addLabel, eye, sortable }) {
  const rows = list || [];
  const dnd = useRowDnD(rows, onChange);
  return (
    <div>
      {rows.map((val, i) => (
        <div key={i} {...(sortable ? dnd.rowProps(i) : {})}
          style={{ position:'relative', display:'grid', gridTemplateColumns:(sortable ? 'auto ' : '') + (eye ? '1fr auto auto' : '1fr auto'), gap:6, marginBottom:6, alignItems:'center',
            opacity:sortable && dnd.dragging === i ? 0.35 : 1, transition:'opacity 0.12s' }}>
          {sortable && dnd.indicator(i)}
          {sortable && (
            <span title="Ziehen zum Umsortieren" {...dnd.handleProps(i)}
              style={{ cursor:'grab', color:'rgba(var(--accent-rgb),calc(0.4*var(--ka) + var(--tb)))', fontSize:13, padding:'0 3px', userSelect:'none' }}>⠿</span>
          )}
          <input placeholder={placeholder} value={val}
            onChange={e => { const a = [...rows]; a[i] = e.target.value; onChange(a); }} style={inpSt}/>
          {eye ? eye(i) : null}
          <button onClick={() => onChange(rows.filter((_, j) => j !== i))} style={rmBtnSt}>×</button>
        </div>
      ))}
      <button onClick={() => onChange([...rows, ''])} style={addBtnSt}>+ {addLabel}</button>
    </div>
  );
}
function RangButtons({ value, onPick, division }) {
  const rl = (T().raenge || {})[division] || [];
  return (
    <div style={{ display:'flex', gap:4 }}>
      {Array.from({ length:10 }, (_, i) => i + 1).map(n => {
        const info = rl.find(r => r.rang === n);
        const on = value === n;
        return (
          <button key={n} onClick={() => onPick(n)} title={info ? info.titel : 'Rang ' + n}
            style={{ flex:1, minWidth:0, padding:'9px 0', fontFamily:MONO, fontSize:11, cursor:'pointer', borderRadius:3,
              background:on ? 'rgba(var(--purple-rgb),calc(0.28*var(--kp)))' : 'rgba(var(--bg-rgb),0.7)',
              border:`1px solid ${on ? 'rgba(var(--purple-rgb),calc(0.8*var(--kp)))' : 'rgba(var(--purple-rgb),calc(0.18*var(--kp)))'}`,
              color:on ? 'var(--white)' : 'color-mix(in srgb, rgba(180,170,220,0.45), rgb(var(--ink-rgb)) var(--cm))',
              boxShadow:on ? '0 0 10px rgba(var(--purple-rgb),calc(0.3*var(--kp)))' : 'none' }}>{n}</button>
        );
      })}
    </div>
  );
}
function RangInfo({ division, rang }) {
  const info = ((T().raenge || {})[division] || []).find(r => r.rang === rang);
  if (!info) return null;
  return (
    <div style={{ marginTop:12, padding:'10px 14px', border:'1px solid rgba(var(--purple-rgb),calc(0.18*var(--kp)))', borderLeft:'2px solid rgba(var(--purple-rgb),calc(0.6*var(--kp)))', borderRadius:'0 3px 3px 0', background:'rgba(var(--purple-rgb),calc(0.05*var(--kp)))' }}>
      <div style={{ fontFamily:MONO, fontSize:8.5, letterSpacing:'0.2em', color:'rgba(var(--purple-rgb),calc(0.8*var(--kp) + var(--tb)))', textTransform:'uppercase', marginBottom:4 }}>◇ Rang {rang} · {info.titel}</div>
      <div style={{ fontFamily:BODY, fontSize:12, fontWeight:300, color:'rgba(var(--text-rgb),calc(0.7*var(--kt) + var(--tb)))', lineHeight:1.6 }}>{info.b}</div>
    </div>
  );
}
function SecHeader({ title, visOn, onVis, onRemove, extra }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:14 }}>
      <span style={secTitleSt}>{title}</span>
      {onVis && <Eye on={visOn} onClick={onVis}/>}
      {extra}
      <div style={{ flex:1 }}/>
      <button onClick={onRemove} style={{ background:'transparent', border:'none', color:'rgba(var(--accent-rgb),calc(0.35*var(--ka) + var(--tb)))', fontFamily:MONO, fontSize:9, letterSpacing:'0.14em', cursor:'pointer', textTransform:'uppercase' }}>× entfernen</button>
    </div>
  );
}

// ── Perspektiven-Auswahl (kompakt, mit Autocomplete) ───────
function PerspPicker({ persp, setPersp, charPersp, onPick }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const h = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [open]);
  const isDm = persp === '__dm';
  const label = isDm ? '◈ DM (Spielleitung)' : ((charPersp.find(c => c.id === persp) || {}).label || '◈ DM (Spielleitung)');
  const q = query.trim().toLowerCase();
  const opts = [{ id:'__dm', label:'◈ DM (Spielleitung)', dm:true }, ...charPersp.map(c => ({ id:c.id, label:c.label }))]
    .filter(o => !q || o.label.toLowerCase().includes(q));
  const pick = o => { setPersp(o.id); setOpen(false); setQuery(''); if (onPick) onPick(o.id); };
  return (
    <div ref={ref} style={{ position:'relative', flex:1, minWidth:0 }}>
      <input
        value={open ? query : label}
        onFocus={() => { setOpen(true); setQuery(''); }}
        onChange={e => { setQuery(e.target.value); setOpen(true); }}
        onKeyDown={e => { if (e.key === 'Enter' && opts.length === 1) pick(opts[0]); if (e.key === 'Escape') setOpen(false); }}
        placeholder="Perspektive suchen …" title="Aus wessen Sicht die Liste und die Vorschau gezeigt werden"
        style={{ width:'100%', padding:'6px 22px 6px 8px', background:'rgba(var(--bg-rgb),0.85)',
          border:`1px solid ${isDm ? 'rgba(255,184,80,0.4)' : 'rgba(var(--purple-rgb),calc(0.45*var(--kp)))'}`, borderRadius:3,
          color:isDm ? '#ffb850' : 'var(--white)', fontFamily:MONO, fontSize:9.5, letterSpacing:'0.08em',
          outline:'none', boxSizing:'border-box', cursor:'pointer' }}/>
      <span style={{ position:'absolute', right:7, top:'50%', transform:'translateY(-50%)', fontSize:8, color:'rgba(var(--accent-rgb),calc(0.5*var(--ka) + var(--tb)))', pointerEvents:'none' }}>▾</span>
      {open && (
        <div style={{ position:'absolute', top:'calc(100% + 3px)', left:0, right:0, zIndex:120,
          background:'rgba(var(--panel-rgb),0.99)', border:'1px solid rgba(var(--purple-rgb),calc(0.4*var(--kp)))', borderRadius:3,
          boxShadow:'0 12px 36px rgba(var(--shadow-rgb),calc(0.7 * var(--shadow-k)))', overflow:'hidden auto', maxHeight:220 }}>
          {opts.length === 0 && (
            <div style={{ padding:'8px 10px', fontFamily:BODY, fontSize:11.5, fontStyle:'italic', color:'rgba(var(--accent-rgb),calc(0.45*var(--ka) + var(--tb)))' }}>Kein Treffer</div>
          )}
          {opts.map(o => {
            const on = o.id === persp;
            return (
              <button key={o.id} onClick={() => pick(o)}
                style={{ display:'block', width:'100%', padding:'7px 10px', textAlign:'left', cursor:'pointer',
                  background:on ? 'rgba(var(--purple-rgb),calc(0.18*var(--kp)))' : 'transparent', border:'none',
                  borderBottom:'1px solid rgba(var(--purple-rgb),calc(0.08*var(--kp)))',
                  fontFamily:MONO, fontSize:9.5, letterSpacing:'0.08em',
                  color:o.dm ? '#ffb850' : on ? 'var(--white)' : 'rgba(var(--text-rgb),calc(0.8*var(--kt)))' }}>
                {o.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ── Schnellanlage ──────────────────────────────────────────
// Kompakte Statblock-Vorschau; Werte, die sich gegenüber der Vorlage geändert haben, sind hervorgehoben
function StatblockVorschau({ m, vorlage }) {
  const AD = { STR:'STÄ', DEX:'GES', CON:'KON', INT:'INT', WIS:'WEI', CHA:'CHA' };
  const mod = v => { const x = Math.floor(((parseInt(v) || 10) - 10) / 2); return (x >= 0 ? '+' : '') + x; };
  const geaendert = (a, b) => a !== b;
  const zeile = (label, text) => text ? (
    <div style={{ fontFamily:BODY, fontSize:12.5, fontWeight:300, lineHeight:1.5, marginBottom:3, color:'rgba(var(--text-rgb),calc(0.8*var(--kt) + var(--tb)))' }}>
      <span style={{ fontFamily:MONO, fontSize:8.5, letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(var(--accent-rgb),calc(0.6*var(--ka) + var(--tb)))', marginRight:8 }}>{label}</span>{text}
    </div>
  ) : null;
  const hl = { color:'color-mix(in srgb, rgb(120,220,150), rgb(var(--ink-rgb)) var(--cm))' };
  const bew = Object.entries(m.bewegung || {}).map(([k, v]) => k === 'Gehen' ? v : k + ' ' + v).join(', ');
  const bewAlt = Object.entries(vorlage.bewegung || {}).map(([k, v]) => k === 'Gehen' ? v : k + ' ' + v).join(', ');
  const kopf = [
    ['RK', m.rk + (m.ruestungstyp ? ' (' + m.ruestungstyp + ')' : ''), geaendert(m.rk, vorlage.rk)],
    ['TP', m.tp + (m.tp_wuerfel ? ' (' + m.tp_wuerfel + ')' : ''), geaendert(m.tp, vorlage.tp)],
    ['Bewegung', bew, geaendert(bew, bewAlt)],
    ['HG', crTxtShared(m.cr).replace('HG ', '') + ' · ' + (m.xp || 0) + ' XP' + (geaendert(m.cr, vorlage.cr) ? ' (Vorlage ' + crTxtShared(vorlage.cr).replace('HG ', '') + ')' : ''), geaendert(m.cr, vorlage.cr)],
  ];
  const fert = Object.entries(m.fertigkeiten || {}).map(([k, v]) => k + ' ' + (v >= 0 ? '+' : '') + v).join(', ');
  const saves = Object.entries(m.rettungswuerfe || {}).map(([k, v]) => k + ' ' + (v >= 0 ? '+' : '') + v).join(', ');
  return (
    <div style={{ maxHeight:460, overflowY:'auto', border:'1px solid rgba(var(--purple-rgb),calc(0.28*var(--kp)))', borderRadius:5, padding:'14px 16px', background:'rgba(var(--panel-rgb),0.85)' }}>
      <div style={{ fontFamily:DISP, fontSize:15, letterSpacing:'0.08em', color:'var(--white)' }}>{m.name}</div>
      <div style={{ fontFamily:MONO, fontSize:9, letterSpacing:'0.1em', color:'rgba(var(--accent-rgb),calc(0.55*var(--ka) + var(--tb)))', margin:'2px 0 10px' }}>
        {[m.groesse, m.art + (m.unterart ? ' (' + m.unterart + ')' : ''), m.gesinnung].filter(Boolean).join(' · ')}
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:6, marginBottom:10 }}>
        {kopf.map(([l, v, ch]) => (
          <div key={l} style={{ padding:'5px 8px', borderRadius:3, border:'1px solid rgba(var(--purple-rgb),calc(0.15*var(--kp)))', background:'rgba(var(--purple-rgb),calc(0.05*var(--kp)))' }}>
            <div style={{ fontFamily:MONO, fontSize:7.5, letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(var(--accent-rgb),calc(0.6*var(--ka) + var(--tb)))' }}>{l}</div>
            <div style={{ fontFamily:MONO, fontSize:11, color:'var(--white)', ...(ch ? hl : null) }}>{v}</div>
          </div>
        ))}
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(6, 1fr)', gap:4, marginBottom:10 }}>
        {['STR','DEX','CON','INT','WIS','CHA'].map(k => {
          const neu = (m.attribute || {})[k] ?? 10, alt = (vorlage.attribute || {})[k] ?? 10;
          return (
            <div key={k} style={{ textAlign:'center', padding:'5px 2px', borderRadius:3, border:'1px solid rgba(var(--purple-rgb),calc(0.12*var(--kp)))', background:'rgba(var(--purple-rgb),calc(0.05*var(--kp)))' }}>
              <div style={{ fontFamily:MONO, fontSize:7, letterSpacing:'0.14em', color:'rgba(var(--purple-rgb),calc(0.6*var(--kp) + var(--tb)))' }}>{AD[k]}</div>
              <div style={{ fontFamily:MONO, fontSize:14, fontWeight:600, color:'var(--white)', ...(neu !== alt ? hl : null) }}>{neu}</div>
              <div style={{ fontFamily:MONO, fontSize:9.5, color:'rgba(var(--purple-rgb),calc(0.85*var(--kp) + var(--tb)))' }}>{mod(neu)}{neu !== alt && <span style={{ ...hl, marginLeft:4 }}>({alt})</span>}</div>
            </div>
          );
        })}
      </div>
      {zeile('Rettungswürfe', saves)}
      {zeile('Fertigkeiten', fert)}
      {zeile('Sinne', (m.sinne || []).join(', '))}
      {zeile('Resistenzen', (m.schadensresistenzen || []).join(', '))}
      {zeile('Immunitäten', [...(m.schadensimmunitaeten || []), ...(m.zustandsimmunitaeten || [])].join(', '))}
      {(m.besonderheiten || []).length > 0 && <div style={{ ...lbSt, margin:'10px 0 4px' }}>Besonderheiten</div>}
      {(m.besonderheiten || []).map((b, i) => (
        <div key={i} style={{ fontFamily:BODY, fontSize:12, fontWeight:300, lineHeight:1.5, marginBottom:5, color:'rgba(var(--text-rgb),calc(0.78*var(--kt) + var(--tb)))' }}>
          <b style={{ fontFamily:MONO, fontWeight:600, fontSize:10, color:'var(--white)', marginRight:5 }}>{b.name}.</b>{b.beschreibung}
        </div>
      ))}
      {(m.aktionen || []).length > 0 && <div style={{ ...lbSt, margin:'10px 0 4px' }}>Aktionen</div>}
      {(m.aktionen || []).map((a, i) => (
        <div key={i} style={{ fontFamily:BODY, fontSize:12, fontWeight:300, lineHeight:1.5, marginBottom:5, color:'rgba(var(--text-rgb),calc(0.78*var(--kt) + var(--tb)))' }}>
          <b style={{ fontFamily:MONO, fontWeight:600, fontSize:10, color:'var(--white)', marginRight:5 }}>{a.name}.</b>{a.beschreibung}
        </div>
      ))}
    </div>
  );
}

// Statblock aus der Monster-/NSC-Datenbank in das Statblock-Format des NSC übernehmen
const crTxtShared = c => c == null ? '' : ('HG ' + (c === 0.125 ? '1/8' : c === 0.25 ? '1/4' : c === 0.5 ? '1/2' : c));
const statToSteck = (m, art) => window.statToSteckbrief(m, art);

/* Statblock aus der Datenbank wählen und mit Rasse, Linie, Talent, Größe und Waffe versehen (Schnellanlage und Editor). */
function useSbBasis({ rasse, unterrasse, division, rang, allStats, onRasse }) {
  const [sbWahl, setSbWahl] = useState(null);
  const [sbSuche, setSbSuche] = useState('');
  const [sbMonster, setSbMonster] = useState(false);
  // Rasse/Talent/Größe/Waffe für den Statblock; die Rasse folgt der Rasse des NSC
  const [sbOpt, setSbOpt] = useState({ linie:null, talent:null, groesse:null, waffe:null });
  const RA = window.RasseAnwenden;
  const rasseDaten = rasse && RA ? (window.RASSEN_STRUKTUR || {})[rasse] : null;
  const linienOpts = rasseDaten ? RA.optionen().filter(o => o.rasse === rasse && o.linie) : [];
  // Linie: aus der Unterrasse des NSC, sonst die im Panel gewählte (Rassen mit Linienboni brauchen eine)
  const sbLinie = !rasseDaten ? null
    : linienOpts.some(o => o.linie === unterrasse) ? unterrasse
    : linienOpts.some(o => o.linie === sbOpt.linie) ? sbOpt.linie
    : (linienOpts[0] ? linienOpts[0].linie : null);
  const sbBasis = { rasse:rasseDaten ? rasse : null, linie:sbLinie };
  const sbTalente = rasseDaten ? RA.talente(sbBasis) : [];
  const sbGroessen = rasseDaten ? RA.groessen(sbBasis) : [];
  const sbEff = {
    ...sbBasis,
    talent:sbTalente.includes(sbOpt.talent) ? sbOpt.talent : null,
    groesse:sbGroessen.includes(sbOpt.groesse) ? sbOpt.groesse : null,
    waffe:sbOpt.waffe,
  };
  const sbFaehig = !!(sbWahl && RA && RA.istRassenfaehig(sbWahl.src));
  const sbErgebnis = sbWahl ? (sbFaehig && (sbEff.rasse || sbEff.waffe) ? RA.anwenden(sbWahl.src, sbEff) : sbWahl.src) : null;
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const wuerfelRasse = () => {
    const o = pick(RA.optionen());
    const t = RA.talente(o);
    const g = RA.groessen(o);
    const subOpts = subOf(o.rasse).opts;
    onRasse(o.rasse, o.linie && subOpts.includes(o.linie) ? o.linie : '');
    setSbOpt(p => ({ ...p, linie:o.linie, talent:RA.linienTalent(o) || (t.length ? pick(t) : null), groesse:g.length > 1 ? pick(g) : null }));
  };
  const wuerfelWaffe = () => setSbOpt(p => ({ ...p, waffe:RA.zufallsWaffe(sbWahl.src) }));
  const wuerfelTalent = () => { if (sbTalente.length) setSbOpt(p => ({ ...p, talent:pick(sbTalente) })); };
  // Linie würfeln: trägt sie bei Tieflingen/Wandlern auch als Unterrasse des NSC ein und setzt das passende Linien-Talent
  const wuerfelLinie = () => {
    if (!linienOpts.length) return;
    const l = pick(linienOpts).linie;
    const lt = RA.linienTalent({ rasse:rasse, linie:l });
    onRasse(rasse, subOf(rasse).opts.includes(l) ? l : '');
    setSbOpt(p => ({ ...p, linie:l, talent:lt || (RA.talente({ rasse:rasse, linie:l }).includes(p.talent) ? p.talent : null) }));
  };
  const sbSel = { ...selSt, padding:'7px 9px', fontSize:12 };
  const sbTreffer = sbSuche.trim().length >= 2
    ? (allStats || []).filter(x => (sbMonster || x.art === 'NSC') && x.src.name.toLowerCase().includes(sbSuche.trim().toLowerCase())).slice(0, 12)
    : [];
  // passender Statblock zur gewählten Division und zum Rang (Rekrutierungs-NSC)
  const sbVorschlag = division !== 'Keine'
    ? (allStats || []).find(x => x.src.source === 'Rekrutierung' && x.src.name.endsWith('(' + division.replace(/^Die\s+/, '') + ', Rang ' + rang + ')'))
    : null;
  const reset = () => { setSbWahl(null); setSbSuche(''); setSbOpt({ linie:null, talent:null, groesse:null, waffe:null }); };
  return { sbWahl, setSbWahl, sbSuche, setSbSuche, sbMonster, setSbMonster, sbOpt, setSbOpt, RA, linienOpts, sbLinie, sbTalente, sbGroessen, sbEff, sbFaehig, sbErgebnis,
    wuerfelRasse, wuerfelWaffe, wuerfelTalent, wuerfelLinie, sbSel, sbTreffer, sbVorschlag, reset };
}

function SbBasisPanel({ b, rasse, rang, statsReady, noLabel }) {
  const { sbWahl, setSbWahl, sbSuche, setSbSuche, sbMonster, setSbMonster, sbOpt, setSbOpt, RA, linienOpts, sbLinie, sbTalente, sbGroessen, sbEff, sbFaehig, sbErgebnis,
    wuerfelRasse, wuerfelWaffe, wuerfelTalent, wuerfelLinie, sbSel, sbTreffer, sbVorschlag } = b;
  return (
      <div style={noLabel ? null : { marginTop:26 }}>
        {!noLabel && <label style={{ ...lbSt, display:'block', marginBottom:6 }}>Statblock-Grundlage <span style={{ opacity:0.55 }}>· optional, später frei anpassbar</span></label>}
        {sbWahl ? (
          <div>
          <div style={{ display:'flex', alignItems:'center', gap:12, padding:'10px 14px', border:'1px solid rgba(var(--purple-rgb),calc(0.4*var(--kp)))', borderRadius:4, background:'rgba(var(--purple-rgb),calc(0.07*var(--kp)))' }}>
            <span style={{ fontFamily:BODY, fontSize:14, color:'var(--white)' }}>{sbWahl.src.name}</span>
            <span style={{ fontFamily:MONO, fontSize:8.5, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(var(--accent-rgb),calc(0.55*var(--ka) + var(--tb)))' }}>
              {[crTxtShared(sbWahl.src.cr), 'RK ' + sbWahl.src.rk, sbWahl.src.tp + ' TP', sbWahl.src.source].filter(Boolean).join(' · ')}
            </span>
            <button onClick={() => setSbWahl(null)} style={{ ...rmBtnSt, marginLeft:'auto', padding:'4px 10px' }}>× entfernen</button>
          </div>
          {sbFaehig ? (
            <div style={{ marginTop:12 }}>
              <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:10 }}>
                <button onClick={wuerfelRasse} title="Würfelt Rasse (mit Linie), Talent und ggf. Größe – und trägt die Rasse oben beim NSC ein"
                  style={{ padding:'9px 16px', fontFamily:MONO, fontSize:9, letterSpacing:'0.18em', textTransform:'uppercase', cursor:'pointer', borderRadius:3, background:'rgba(var(--purple-rgb),calc(0.15*var(--kp)))', border:'1px solid rgba(var(--purple-rgb),calc(0.5*var(--kp)))', color:'var(--white)' }}>⚄ Rasse würfeln</button>
                <button onClick={wuerfelWaffe} title="Würfelt eine Waffe für den Hauptangriff"
                  style={{ padding:'9px 16px', fontFamily:MONO, fontSize:9, letterSpacing:'0.18em', textTransform:'uppercase', cursor:'pointer', borderRadius:3, background:'rgba(var(--purple-rgb),calc(0.15*var(--kp)))', border:'1px solid rgba(var(--purple-rgb),calc(0.5*var(--kp)))', color:'var(--white)' }}>⚄ Waffe würfeln</button>
                {linienOpts.length > 0 && (
                  <button onClick={wuerfelLinie} title="Würfelt eine Linie / Abstammung (und setzt das passende Linien-Talent)"
                    style={{ padding:'9px 16px', fontFamily:MONO, fontSize:9, letterSpacing:'0.18em', textTransform:'uppercase', cursor:'pointer', borderRadius:3, background:'rgba(var(--purple-rgb),calc(0.15*var(--kp)))', border:'1px solid rgba(var(--purple-rgb),calc(0.5*var(--kp)))', color:'var(--white)' }}>⚄ Linie würfeln</button>
                )}
                <button onClick={wuerfelTalent} disabled={!sbTalente.length} title={sbTalente.length ? 'Würfelt ein angeborenes Talent' : 'Diese Rasse hat keine angeborenen Talente'}
                  style={{ padding:'9px 16px', fontFamily:MONO, fontSize:9, letterSpacing:'0.18em', textTransform:'uppercase', cursor:sbTalente.length ? 'pointer' : 'default', opacity:sbTalente.length ? 1 : 0.4, borderRadius:3, background:'rgba(var(--purple-rgb),calc(0.15*var(--kp)))', border:'1px solid rgba(var(--purple-rgb),calc(0.5*var(--kp)))', color:'var(--white)' }}>⚄ Talent würfeln</button>
                {(sbOpt.waffe || sbOpt.talent || sbOpt.groesse) && (
                  <button onClick={() => setSbOpt({ linie:null, talent:null, groesse:null, waffe:null })}
                    style={{ padding:'9px 14px', fontFamily:MONO, fontSize:9, letterSpacing:'0.16em', textTransform:'uppercase', cursor:'pointer', borderRadius:3, background:'transparent', border:'1px solid rgba(var(--accent-rgb),calc(0.25*var(--ka)))', color:'rgba(var(--text-rgb),calc(0.55*var(--kt) + var(--tb)))' }}>↺ Zurücksetzen</button>
                )}
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:10 }}>
                <div>
                  <label style={{ ...lbSt, display:'block', marginBottom:4 }}>Waffe</label>
                  <select value={sbOpt.waffe || ''} onChange={e => setSbOpt(p => ({ ...p, waffe:e.target.value || null }))} style={sbSel}>
                    <option value="">— wie Vorlage —</option>
                    {[['Nahkampf · einfach', 'nah', 'Einfach'], ['Nahkampf · Kriegswaffen', 'nah', 'Kriegswaffe'], ['Fernkampf · einfach', 'fern', 'Einfach'], ['Fernkampf · Kriegswaffen', 'fern', 'Kriegswaffe']].map(g => (
                      <optgroup key={g[0]} label={g[0]}>
                        {RA.waffen().filter(w => w.typ === g[1] && w.kategorie === g[2]).map(w => <option key={w.name} value={w.name}>{w.name} ({w.wuerfel} {w.schadensart})</option>)}
                      </optgroup>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={{ ...lbSt, display:'block', marginBottom:4 }}>Angeborenes Talent</label>
                  <select value={sbEff.talent || ''} disabled={!sbTalente.length} onChange={e => setSbOpt(p => ({ ...p, talent:e.target.value || null }))} style={{ ...sbSel, opacity:sbTalente.length ? 1 : 0.5 }}>
                    <option value="">{sbTalente.length ? '— keines —' : (rasse ? '— kein Talent —' : '— erst Rasse oben wählen —')}</option>
                    {sbTalente.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                {linienOpts.length > 0 && (
                  <div>
                    <label style={{ ...lbSt, display:'block', marginBottom:4 }}>Linie / Abstammung</label>
                    <select value={sbLinie || ''} onChange={e => setSbOpt(p => ({ ...p, linie:e.target.value || null }))} style={sbSel}>
                      {linienOpts.map(o => <option key={o.linie} value={o.linie}>{o.linie}</option>)}
                    </select>
                  </div>
                )}
                {sbGroessen.length > 1 && (
                  <div>
                    <label style={{ ...lbSt, display:'block', marginBottom:4 }}>Größe</label>
                    <select value={sbEff.groesse || sbGroessen[0]} onChange={e => setSbOpt(p => ({ ...p, groesse:e.target.value }))} style={sbSel}>
                      {sbGroessen.map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                  </div>
                )}
              </div>
              <div style={{ fontFamily:BODY, fontSize:11.5, fontWeight:300, color:'rgba(var(--accent-rgb),calc(0.5*var(--ka) + var(--tb)))', marginBottom:10 }}>
                {rasse ? <>Vorschau mit der Rasse des NSC: <b style={{ color:'var(--white)', fontWeight:500 }}>{rasse}{sbLinie ? ' – ' + sbLinie : ''}</b>. Geändert gegenüber der Vorlage ist grün markiert.</> : 'Oben beim NSC eine Rasse wählen (oder „Rasse würfeln"), dann erscheint sie hier im Statblock.'}
              </div>
            </div>
          ) : (
            <div style={{ fontFamily:BODY, fontSize:11.5, fontWeight:300, color:'rgba(var(--accent-rgb),calc(0.5*var(--ka) + var(--tb)))', marginTop:10 }}>{RA ? 'Rasse und Waffe lassen sich nur bei NSC-Statblöcken (Humanoide) anwenden; dieser Statblock wird unverändert übernommen.' : 'Die Rassen-Daten sind nicht geladen – bitte die Seite einmal komplett neu laden (Strg + F5).'}</div>
          )}
          <div style={{ marginTop:4 }}><StatblockVorschau m={sbErgebnis} vorlage={sbWahl.src}/></div>
          </div>
        ) : (
          <div>
            {sbVorschlag && (
              <button onClick={() => setSbWahl(sbVorschlag)}
                style={{ display:'block', width:'100%', textAlign:'left', marginBottom:8, padding:'10px 14px', cursor:'pointer', borderRadius:4, border:'1px solid rgba(var(--purple-rgb),calc(0.4*var(--kp)))', background:'rgba(var(--purple-rgb),calc(0.08*var(--kp)))', color:'var(--white)', fontFamily:BODY, fontSize:13 }}>
                <span style={{ fontFamily:MONO, fontSize:8.5, letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(var(--purple-rgb),calc(0.85*var(--kp) + var(--tb)))', marginRight:10 }}>◇ Passend zu Rang {rang}</span>
                {sbVorschlag.src.name} <span style={{ opacity:0.55 }}>· {crTxtShared(sbVorschlag.src.cr)} · RK {sbVorschlag.src.rk} · {sbVorschlag.src.tp} TP</span>
              </button>
            )}
            <div style={{ display:'flex', gap:8 }}>
              <input value={sbSuche} onChange={e => setSbSuche(e.target.value)}
                placeholder={statsReady ? 'NSC-Statblock suchen … (z. B. Veteran, Bandit, Magier, Wache)' : '◈ Statblock-Datenbank lädt …'}
                style={{ ...inpSt, flex:1, padding:'11px 14px' }}/>
              <button onClick={() => setSbMonster(v => !v)} title="Auch Monster durchsuchen"
                style={{ padding:'0 14px', fontFamily:MONO, fontSize:8.5, letterSpacing:'0.14em', textTransform:'uppercase', cursor:'pointer', borderRadius:3,
                  background:sbMonster ? 'rgba(var(--purple-rgb),calc(0.2*var(--kp)))' : 'transparent',
                  border:`1px solid ${sbMonster ? 'rgba(var(--purple-rgb),calc(0.65*var(--kp)))' : 'rgba(var(--purple-rgb),calc(0.2*var(--kp)))'}`,
                  color:sbMonster ? 'var(--white)' : 'rgba(var(--text-rgb),calc(0.45*var(--kt)))' }}>{sbMonster ? '☑' : '☐'} auch Monster</button>
            </div>
            {sbTreffer.length > 0 && (
              <div style={{ marginTop:8, maxHeight:240, overflowY:'auto', border:'1px solid rgba(var(--purple-rgb),calc(0.22*var(--kp)))', borderRadius:3, background:'rgba(var(--bg-rgb),0.7)' }}>
                {sbTreffer.map((x, i) => (
                  <button key={i} onClick={() => { setSbWahl(x); setSbSuche(''); }}
                    style={{ display:'flex', gap:10, alignItems:'baseline', width:'100%', padding:'7px 12px', background:'transparent', border:'none', borderBottom:'1px solid rgba(var(--purple-rgb),calc(0.08*var(--kp)))', cursor:'pointer', textAlign:'left' }}>
                    <span style={{ fontFamily:BODY, fontSize:13, color:'var(--white)' }}>{x.src.name}</span>
                    <span style={{ fontFamily:MONO, fontSize:8.5, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(var(--accent-rgb),calc(0.5*var(--ka) + var(--tb)))' }}>
                      {[x.art, crTxtShared(x.src.cr), x.src.source].filter(Boolean).join(' · ')}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
  );
}

function QuickCreate({ onCreate, canCancel, onCancel, allStats, statsReady }) {
  const [q, setQ] = useState({ name:'', rasse:'', unterrasse:'', geschlecht:'', alter:'', division:'Keine', rang:5 });
  const set = (k, v) => setQ(p => ({ ...p, [k]:v }));
  // Statblock-Grundlage (optional): { src, art } aus der Statblock-Datenbank
  const sbHook = useSbBasis({ rasse:q.rasse, unterrasse:q.unterrasse, division:q.division, rang:q.rang, allStats,
    onRasse:(r, u) => setQ(p => ({ ...p, rasse:r, unterrasse:u })) });
  const { sbWahl, sbErgebnis } = sbHook;
  const qSub = subOf(q.rasse);
  const qi = q.rasse ? ageInfo(q.rasse, q.alter) : null;
  const canCreate = !!q.name.trim();
  const acc = divOf(q.division).accent;
  const raceOpts = [...T().rassen].sort((a, b) => a.name.localeCompare(b.name, 'de'));
  return (
    <div style={{ maxWidth:820, margin:'0 auto', padding:'52px 40px 80px', animation:'fadeIn 0.35s ease' }}>
      <div style={{ fontFamily:MONO, fontSize:9, letterSpacing:'0.32em', color:'rgba(var(--purple-rgb),calc(0.7*var(--kp) + var(--tb)))', textTransform:'uppercase', marginBottom:6 }}>Schnellanlage</div>
      <div style={{ fontFamily:DISP, fontSize:30, letterSpacing:'0.05em', color:'var(--white)', marginBottom:30, textShadow:'0 0 24px rgba(var(--purple-rgb),calc(0.35*var(--kp)))' }}>Neuer NSC</div>

      <label style={{ ...lbSt, display:'block', marginBottom:6 }}>Name</label>
      <input value={q.name} onChange={e => set('name', e.target.value)} placeholder="Wie heißt diese Person?"
        style={{ ...inpSt, padding:'14px 16px', fontFamily:DISP, fontSize:21, letterSpacing:'0.04em', border:'1px solid rgba(var(--purple-rgb),calc(0.45*var(--kp)))', borderRadius:4 }}/>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginTop:22 }}>
        <div>
          <label style={{ ...lbSt, display:'block', marginBottom:6 }}>Rasse</label>
          <select value={q.rasse} onChange={e => setQ(p => ({ ...p, rasse:e.target.value, unterrasse:'' }))} style={selSt}>
            <option value="">— wählen —</option>
            {raceOpts.map(o => <option key={o.name} value={o.name}>{o.name}</option>)}
          </select>
        </div>
        {qSub.show && (
          <div style={{ animation:'fadeIn 0.25s ease' }}>
            <label style={{ ...lbSt, display:'block', marginBottom:6 }}>{qSub.label}</label>
            <select value={q.unterrasse} onChange={e => set('unterrasse', e.target.value)} style={selSt}>
              <option value="">— wählen —</option>
              {qSub.opts.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
        )}
        <div>
          <label style={{ ...lbSt, display:'block', marginBottom:6 }}>Geschlecht</label>
          <div style={{ display:'flex', gap:5 }}>
            {['Weiblich','Männlich','Divers'].map(g => {
              const on = q.geschlecht === g;
              return (
                <button key={g} onClick={() => set('geschlecht', on ? '' : g)}
                  style={{ flex:1, padding:'10px 4px', fontFamily:BODY, fontSize:12.5, cursor:'pointer', borderRadius:3,
                    background:on ? 'rgba(var(--purple-rgb),calc(0.22*var(--kp)))' : 'rgba(var(--bg-rgb),0.85)',
                    border:`1px solid ${on ? 'rgba(var(--purple-rgb),calc(0.8*var(--kp)))' : 'rgba(var(--purple-rgb),calc(0.3*var(--kp)))'}`,
                    color:on ? 'var(--white)' : 'rgba(var(--text-rgb),calc(0.55*var(--kt)))' }}>{g}</button>
              );
            })}
          </div>
        </div>
        <div>
          <label style={{ ...lbSt, display:'block', marginBottom:6 }}>Alter in Jahren</label>
          <input type="number" value={q.alter} onChange={e => set('alter', e.target.value)} placeholder="z.B. 34" style={inpSt}/>
        </div>
      </div>

      {qi && (
        <div style={{ marginTop:14, padding:'12px 16px', border:'1px solid rgba(var(--purple-rgb),calc(0.22*var(--kp)))', borderLeft:'2px solid #7c4dff', borderRadius:'0 4px 4px 0', background:'rgba(var(--purple-rgb),calc(0.06*var(--kp)))', animation:'fadeIn 0.25s ease' }}>
          <div style={{ display:'flex', gap:22, flexWrap:'wrap', alignItems:'baseline' }}>
            <span style={{ fontFamily:MONO, fontSize:9, letterSpacing:'0.2em', color:'rgba(var(--purple-rgb),calc(0.8*var(--kp) + var(--tb)))', textTransform:'uppercase' }}>◇ {q.rasse}</span>
            <span style={{ fontFamily:BODY, fontSize:12.5, color:'rgba(var(--text-rgb),calc(0.8*var(--kt) + var(--tb)))' }}>Volljährig: <b style={{ fontWeight:600 }}>{qi.adult}</b></span>
            <span style={{ fontFamily:BODY, fontSize:12.5, color:'rgba(var(--text-rgb),calc(0.8*var(--kt) + var(--tb)))' }}>Lebenserwartung: <b style={{ fontWeight:600 }}>{qi.life}</b></span>
            {qi.phase && <span style={{ fontFamily:MONO, fontSize:9.5, letterSpacing:'0.14em', textTransform:'uppercase', color:'#5fe39a' }}>Lebensphase: {qi.phase}</span>}
          </div>
          {qi.pct != null && (
            <div style={{ marginTop:9, height:3, borderRadius:2, background:'rgba(var(--purple-rgb),calc(0.14*var(--kp)))', overflow:'hidden' }}>
              <div style={{ height:'100%', width:qi.pct + '%', background:'linear-gradient(90deg, #7c4dff, var(--lav))', borderRadius:2, transition:'width 0.3s' }}/>
            </div>
          )}
        </div>
      )}

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginTop:22 }}>
        <div>
          <label style={{ ...lbSt, display:'block', marginBottom:6 }}>Division</label>
          <select value={q.division} onChange={e => set('division', e.target.value)}
            style={{ ...selSt, border:`1px solid ${hexA(acc, 0.55)}` }}>
            {T().divisions.map(d => <option key={d.name} value={d.name}>{d.roman !== '—' ? d.roman + ' · ' + d.name : d.name}</option>)}
          </select>
        </div>
        {q.division !== 'Keine' && (
          <div style={{ animation:'fadeIn 0.25s ease' }}>
            <label style={{ ...lbSt, display:'block', marginBottom:6 }}>Rang in der Division</label>
            <RangButtons value={q.rang} onPick={n => set('rang', n)} division={q.division}/>
          </div>
        )}
      </div>
      {(() => {
        const info = ((T().raenge || {})[q.division] || []).find(r => r.rang === q.rang);
        return info ? (
          <div style={{ marginTop:14, padding:'12px 16px', border:'1px solid rgba(var(--purple-rgb),calc(0.22*var(--kp)))', borderLeft:'2px solid #7c4dff', borderRadius:'0 4px 4px 0', background:'rgba(var(--purple-rgb),calc(0.06*var(--kp)))', animation:'fadeIn 0.25s ease' }}>
            <div style={{ fontFamily:MONO, fontSize:9, letterSpacing:'0.2em', color:'rgba(var(--purple-rgb),calc(0.85*var(--kp) + var(--tb)))', textTransform:'uppercase', marginBottom:5 }}>◇ Rang {q.rang} · {info.titel}</div>
            <div style={{ fontFamily:BODY, fontSize:12.5, fontWeight:300, color:'rgba(var(--text-rgb),calc(0.75*var(--kt) + var(--tb)))', lineHeight:1.6 }}>{info.b}</div>
          </div>
        ) : null;
      })()}

      <SbBasisPanel b={sbHook} rasse={q.rasse} rang={q.rang} statsReady={statsReady}/>

      <div style={{ display:'flex', gap:10, marginTop:34, alignItems:'center' }}>
        <button onClick={() => canCreate && onCreate({ ...q, statblock:sbWahl ? { src:sbErgebnis, art:sbWahl.art } : null })}
          style={{ padding:'13px 30px', borderRadius:4, fontFamily:MONO, fontSize:10, letterSpacing:'0.24em', textTransform:'uppercase',
            cursor:canCreate ? 'pointer' : 'default',
            background:canCreate ? 'rgba(var(--purple-rgb),calc(0.22*var(--kp)))' : 'rgba(var(--purple-rgb),calc(0.05*var(--kp)))',
            border:`1px solid ${canCreate ? '#7c4dff' : 'rgba(var(--purple-rgb),calc(0.2*var(--kp)))'}`,
            color:canCreate ? 'var(--white)' : 'rgba(var(--accent-rgb),calc(0.35*var(--ka)))' }}>✦ NSC anlegen</button>
        {canCancel && (
          <button onClick={onCancel} style={{ padding:'13px 20px', background:'transparent', border:'1px solid rgba(var(--accent-rgb),calc(0.2*var(--ka)))', borderRadius:4, color:'rgba(var(--text-rgb),calc(0.5*var(--kt) + var(--tb)))', fontFamily:MONO, fontSize:9, letterSpacing:'0.2em', textTransform:'uppercase', cursor:'pointer' }}>Abbrechen</button>
        )}
        <span style={{ fontFamily:BODY, fontSize:12, fontWeight:300, color:'rgba(var(--accent-rgb),calc(0.4*var(--ka) + var(--tb)))', marginLeft:6 }}>Neue NSC sind zunächst für Spieler verborgen.</span>
      </div>
    </div>
  );
}

// ── App ────────────────────────────────────────────────────
function App() {
  const { nscs, setNscs, charPersp, charPids, players, loading } = useDMData();
  const unlocks = useUnlocks(nscs, charPids, 'alle', players);

  const [selId, setSelId] = useState(null);
  const [creating, setCreating] = useState(false);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('alle');
  const [fDiv, setFDiv] = useState('');
  const [fRasse, setFRasse] = useState('');
  const [fGes, setFGes] = useState('');
  const [fStatus, setFStatus] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [persp, setPersp] = useState('__dm');
  const [lightbox, setLightbox] = useState(false);
  const [saveInfo, setSaveInfo] = useState('');
  const [statsReady, setStatsReady] = useState(false);

  // Sobald Daten da sind: ersten NSC wählen bzw. Schnellanlage öffnen
  useEffect(() => {
    if (loading) return;
    if (nscs.length === 0) setCreating(true);
    else if (!selId) setSelId(nscs[0].id);
  }, [loading]);

  // Statblock-Quellen lazy nachladen (NSC-Statblöcke + Monsterdatenbank)
  useEffect(() => {
    const t = setTimeout(async () => {
      const files = ['npc-stats-data.js','monster/monsterhandbuch-data.js','monster/almanach-der-monster-data.js',
        'monster/avernus-data.js','monster/drakkenheim-data.js','monster/flee-mortals-data.js',
        'monster/floral-dragons-data.js','monster/foliant-der-feinde-data.js','monster/ruhm-der-riesen-data.js',
        'monster/schatzkammer-der-drachen-data.js','monster/sonstige-data.js','monster/rekrutierung-data.js','monster/tome-of-beasts-data.js',
        'monster/tome-of-beasts-2-data.js'];
      for (const f of files) {
        try {
          const r = await fetch('assets/scripts/data/' + f);
          if (r.ok) new Function(await r.text())();
        } catch (e) {}
      }
      setStatsReady(true);
    }, 600);
    return () => clearTimeout(t);
  }, []);

  const allStats = useMemo(() => {
    if (!statsReady) return [];
    const quellen = ['REKRUTIERUNG','MONSTERHANDBUCH','FOLIANT_DER_FEINDE','SCHATZKAMMER_DER_DRACHEN','ALMANACH_DER_MONSTER',
      'FLORAL_DRAGONS','RUHM_DER_RIESEN','DRAKKENHEIM','FLEE_MORTALS','AVERNUS','TOME_OF_BEASTS','TOME_OF_BEASTS_2','SONSTIGE']
      .flatMap(k => window['MONSTER_DATA_' + k] || []);
    // NSC-Statblöcke (Unterart NPC) mit vollen Aktionen; die gekürzten Werte aus npc-stats-data nur, wenn es keinen vollen gibt
    const istNpc = m => /(^|,\s*)NPC(\s*,|$)/.test(m.unterart || '');
    const npcVoll = quellen.filter(istNpc);
    const vollNamen = new Set(npcVoll.map(m => m.name));
    const npc = [
      ...npcVoll.map(m => ({ src:m, art:'NSC' })),
      ...(window.NPC_STATS_DATA || []).filter(m => !vollNamen.has(m.name)).map(m => ({ src:m, art:'NSC' })),
    ];
    const mon = quellen.filter(m => !istNpc(m)).map(m => ({ src:m, art:'Monster' }));
    return [...npc, ...mon];
  }, [statsReady]);

  // ── Persistenz (Debounce-Autosave; UPDATE statt Upsert, weil Spieler und SL kein SELECT auf nscs haben, siehe Migration 046) ─────────
  const nscsRef = useRef(nscs);
  nscsRef.current = nscs;
  const timers = useRef({});
  const scheduleSave = useCallback(id => {
    setSaveInfo('◈ speichert …');
    clearTimeout(timers.current[id]);
    timers.current[id] = setTimeout(async () => {
      const n = nscsRef.current.find(x => x.id === id);
      if (!n) return;
      const { id: rowId, ...fields } = nscToRow(n);
      const { error } = await window._sb.from('nscs').update(fields).eq('id', rowId);
      setSaveInfo(error ? '✕ Speichern fehlgeschlagen: ' + error.message : '✓ gespeichert');
    }, 700);
  }, []);

  const sel = nscs.find(n => n.id === selId) || null;
  const updNsc = (id, patch) => { setNscs(prev => prev.map(n => n.id === id ? { ...n, ...patch } : n)); scheduleSave(id); };
  const updSel = (k, v) => {
    if (!sel) return;
    const patch = { [k]:v };
    if (k === 'geburtstag_jahr' || k === 'geburtstag_doy') {
      const born = window.CharAge.fromBirth(k === 'geburtstag_jahr' ? v : sel.geburtstag_jahr, k === 'geburtstag_doy' ? v : sel.geburtstag_doy);
      if (born != null) patch.alter = born;
    }
    updNsc(sel.id, patch);
  };
  const toggleFieldVis = key => sel && updNsc(sel.id, { fieldVis:{ ...sel.fieldVis, [key]:(sel.fieldVis || {})[key] !== true } });
  const vis = key => !!sel && (sel.fieldVis || {})[key] === true;

  async function createNsc(q) {
    const row = {
      name:q.name.trim(), rasse:q.rasse || null, unterrasse:q.unterrasse || null,
      geschlecht:q.geschlecht || null, alter_jahre:q.alter ? (parseInt(q.alter) || null) : null, alter_ref_abs:q.alter ? window.CharAge.today() : null,
      division:q.division || 'Keine', rang:q.division !== 'Keine' ? String(q.rang) : null,
      status:['Lebendig'], visible:false, sections:q.statblock ? ['statblock'] : [],
      steckbrief:q.statblock ? statToSteck(q.statblock.src, q.statblock.art) : null,
      makel:[], begleiter:[], geheimnisse:[], gewohnheiten:[],
      kontakte:{ familie:[], freunde:[], rivalen:[] }, field_visibility:{},
    };
    const { data: inserted, error } = await window._sb.from('nscs').insert(row).select('id').single();
    if (error) { alert('Anlegen fehlgeschlagen: ' + error.message); return; }
    const { data: rows } = await window._sb.rpc('get_nsc_admin_data');
    const n = mapNscRow((rows || []).find(item => item.id === inserted.id));
    setNscs(prev => [n, ...prev]);
    setSelId(n.id); setCreating(false);
  }

  async function createFromContact(name, sub) {
    if (!sel) return;
    const row = {
      name, division:'Keine', status:['Lebendig'], visible:false, sections:['kontakte'],
      makel:[], begleiter:[], geheimnisse:[], gewohnheiten:[], field_visibility:{},
      kontakte:{ familie:[], freunde:[], rivalen:[], [sub]:[{ name:sel.name, rolle:'' }] },
    };
    const { data: inserted, error } = await window._sb.from('nscs').insert(row).select('id').single();
    if (error) { alert('Anlegen fehlgeschlagen: ' + error.message); return; }
    const { data: rows } = await window._sb.rpc('get_nsc_admin_data');
    const insertedNsc = (rows || []).find(item => item.id === inserted.id);
    if (insertedNsc) setNscs(prev => [...prev, mapNscRow(insertedNsc)]);
  }

  async function deleteSel() {
    if (!sel || !window.confirm(sel.name + ' wirklich löschen?')) return;
    const { error } = await window._sb.from('nscs').delete().eq('id', sel.id);
    if (error) { alert('Löschen fehlgeschlagen: ' + error.message); return; }
    setNscs(prev => prev.filter(n => n.id !== sel.id));
    setSelId(null);
  }

  // ── Sidebar-Liste ────────────────────────────────────────
  const term = search.trim().toLowerCase();
  let filtered = nscs.filter(n => {
    if (filter === 'sichtbar' && !n.visible) return false;
    if (filter === 'verborgen' && n.visible) return false;
    if (fDiv && n.division !== fDiv) return false;
    if (fRasse && n.rasse !== fRasse) return false;
    if (fGes && (n.gesinnung || '') !== fGes) return false;
    if (fStatus && !(n.status || []).includes(fStatus)) return false;
    if (term && !((n.name || '') + ' ' + (n.beruf || '') + ' ' + (n.rasse || '')).toLowerCase().includes(term)) return false;
    return true;
  });
  if (sortBy) filtered = [...filtered].sort((a, b) => {
    const va = sortBy === 'status' ? ((a.status || [])[0] || '') : (a[sortBy] || '');
    const vb = sortBy === 'status' ? ((b.status || [])[0] || '') : (b[sortBy] || '');
    return String(va).localeCompare(String(vb), 'de') || a.name.localeCompare(b.name, 'de');
  });
  const rassenPresent = [...new Set(nscs.map(n => n.rasse).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'de'));
  const sideSelSt = { width:'100%', padding:'6px 8px', background:'rgba(var(--bg-rgb),0.85)', border:'1px solid rgba(var(--purple-rgb),calc(0.25*var(--kp)))', borderRadius:3, color:'rgba(var(--text-rgb),calc(0.85*var(--kt) + var(--tb)))', fontFamily:BODY, fontSize:11, outline:'none', boxSizing:'border-box', cursor:'pointer' };

  if (loading) return (
    <div style={{ height:'calc(calc(var(--vh, 1vh) * 100) - var(--nav-h))', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ fontFamily:MONO, fontSize:10, letterSpacing:'0.3em', color:'rgba(var(--accent-rgb),calc(0.5*var(--ka) + var(--tb)))', textTransform:'uppercase' }}>◈ Lade NSC-Verwaltung …</div>
    </div>
  );

  return (
    <div className="nscv-shell md-body">
      {/* ══ Sidebar ══ */}
      <aside className="md-list" style={{ width:292, flexShrink:0, display:'flex', flexDirection:'column', borderRight:'1px solid rgba(var(--purple-rgb),calc(0.16*var(--kp)))', background:'rgba(var(--panel-rgb),0.85)' }}>
        <div style={{ padding:'18px 16px 14px', borderBottom:'1px solid rgba(var(--purple-rgb),calc(0.12*var(--kp)))' }}>
          <div style={{ fontFamily:MONO, fontSize:9, letterSpacing:'0.32em', color:'rgba(var(--purple-rgb),calc(0.7*var(--kp) + var(--tb)))', textTransform:'uppercase', marginBottom:4 }}>Meruria · Spielleitung</div>
          <div style={{ display:'flex', alignItems:'baseline', gap:8 }}>
            <span style={{ fontFamily:DISP, fontSize:19, letterSpacing:'0.06em', color:'var(--white)' }}>NSC-Verwaltung</span>
            <span style={{ fontFamily:MONO, fontSize:10, color:'rgba(var(--accent-rgb),calc(0.5*var(--ka) + var(--tb)))' }}>{nscs.length} Einträge</span>
          </div>
        </div>
        <div style={{ padding:'12px 12px 0' }}>
          <div style={{ display:'flex', gap:6 }}>
            <button data-md-row onClick={() => { setCreating(true); setSelId(null); }} title="Neuer NSC"
              style={{ flexShrink:0, padding:'8px 14px', background:'rgba(var(--purple-rgb),calc(0.16*var(--kp)))', border:'1px solid rgba(var(--purple-rgb),calc(0.7*var(--kp)))', borderRadius:4, color:'var(--lav)', fontFamily:MONO, fontSize:10, letterSpacing:'0.18em', textTransform:'uppercase', cursor:'pointer' }}>＋ Neu</button>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Suchen …"
              style={{ flex:1, minWidth:0, padding:'8px 10px', background:'rgba(var(--bg-rgb),0.85)', border:'1px solid rgba(var(--purple-rgb),calc(0.3*var(--kp)))', borderRadius:3, color:'var(--white)', fontFamily:BODY, fontSize:12.5, outline:'none', boxSizing:'border-box' }}/>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:6, margin:'10px 0 0' }}>
            <span style={{ fontFamily:MONO, fontSize:8, letterSpacing:'0.2em', color:'rgba(var(--accent-rgb),calc(0.5*var(--ka) + var(--tb)))', textTransform:'uppercase', flexShrink:0 }}>◇ Sicht</span>
            <PerspPicker persp={persp} setPersp={setPersp} charPersp={charPersp}/>
          </div>
          <div style={{ display:'flex', gap:4, margin:'8px 0 6px' }}>
            {[['alle','Alle'],['sichtbar','Sichtbar'],['verborgen','Verborgen']].map(([k, label]) => (
              <button key={k} onClick={() => setFilter(k)}
                title={persp === '__dm' ? 'Nach Spieler-Sichtbarkeit filtern' : 'Nach Sichtbarkeit aus Sicht von ' + ((charPersp.find(c => c.id === persp) || {}).label || 'Spieler') + ' filtern'}
                style={{ flex:1, padding:'5px 4px', fontFamily:MONO, fontSize:8.5, letterSpacing:'0.14em', textTransform:'uppercase', cursor:'pointer', borderRadius:3,
                  background:filter === k ? 'rgba(var(--purple-rgb),calc(0.16*var(--kp)))' : 'transparent',
                  border:`1px solid ${filter === k ? 'rgba(var(--purple-rgb),calc(0.55*var(--kp)))' : 'rgba(var(--purple-rgb),calc(0.15*var(--kp)))'}`,
                  color:filter === k ? 'var(--white)' : 'rgba(var(--text-rgb),calc(0.45*var(--kt)))' }}>{label}</button>
            ))}
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:5, marginBottom:8 }}>
            <select value={fDiv} onChange={e => setFDiv(e.target.value)} style={sideSelSt}>
              <option value="">Division: Alle</option>
              {T().divisions.filter(d => d.name !== 'Keine').map(d => <option key={d.name} value={d.name}>{d.name}</option>)}
            </select>
            <select value={fRasse} onChange={e => setFRasse(e.target.value)} style={sideSelSt}>
              <option value="">Rasse: Alle</option>
              {rassenPresent.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
            <select value={fGes} onChange={e => setFGes(e.target.value)} style={sideSelSt}>
              <option value="">Gesinnung: Alle</option>
              {(T().gesinnungen || []).map(g => <option key={g} value={g}>{g}</option>)}
            </select>
            <select value={fStatus} onChange={e => setFStatus(e.target.value)} style={sideSelSt}>
              <option value="">Status: Alle</option>
              {T().statuses.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
            </select>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)} style={{ ...sideSelSt, gridColumn:'span 2' }}>
              <option value="">Sortierung: Name (Standard)</option>
              <option value="rasse">Sortieren: Rasse</option>
              <option value="division">Sortieren: Division</option>
              <option value="gesinnung">Sortieren: Gesinnung</option>
              <option value="status">Sortieren: Status</option>
            </select>
          </div>
        </div>
        <div style={{ flex:1, overflowY:'auto', paddingBottom:20 }}>
          {filtered.map(n => {
            const acc = divOf(n.division).accent;
            const isSel = n.id === selId && !creating;
            const dead = (n.status || []).includes('Verstorben');
            const charView = persp !== '__dm' && charPersp.some(c => c.id === persp);
            let cCount = null;
            if (charView) {
              const cSet = (unlocks.byPersp[persp] || {})[n.id] || new Set();
              const keys = unlockableKeys(n);
              cCount = keys.filter(k => cSet.has(k)).length + '/' + keys.length;
            }
            return (
              <button key={n.id} data-md-row onClick={() => { setSelId(n.id); setCreating(false); }}
                style={{ width:'100%', padding:'10px 14px', display:'flex', alignItems:'center', gap:10, cursor:'pointer', border:'none',
                  borderBottom:'1px solid rgba(var(--accent-rgb),calc(0.08*var(--ka)))', borderLeft:`3px solid ${isSel ? acc : 'transparent'}`,
                  background:isSel ? hexA(acc, 0.14) : 'transparent', opacity:dead ? 0.65 : 1, transition:'background 0.15s', textAlign:'left' }}>
                <span style={{ width:32, height:32, flexShrink:0, borderRadius:3, display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden',
                  background:n.bild ? '#000' : hexA(acc, 0.12), border:`1px solid ${hexA(acc, 0.4)}`, fontFamily:DISP, fontSize:13, color:hexA(acc, 0.9) }}>
                  {n.bild ? <img src={n.bild} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top' }}/> : (n.name[0] || '?').toUpperCase()}
                </span>
                <span style={{ flex:1, minWidth:0, display:'flex', flexDirection:'column', gap:2 }}>
                  <span style={{ fontFamily:DISP, fontSize:13, letterSpacing:'0.04em', color:isSel ? 'var(--white)' : 'rgba(var(--text-rgb),calc(0.85*var(--kt)))', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{n.name}</span>
                  <span style={{ fontFamily:MONO, fontSize:8.5, letterSpacing:'0.14em', color:'rgba(var(--accent-rgb),calc(0.5*var(--ka) + var(--tb)))', textTransform:'uppercase', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>
                    {[n.beruf, n.rasse].filter(Boolean).join(' · ') || '—'}
                  </span>
                </span>
                <span style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:3, flexShrink:0 }}>
                  <span title={n.visible ? 'Für Spieler sichtbar' : 'Für Spieler verborgen'} aria-label={n.visible ? 'Für Spieler sichtbar' : 'Für Spieler verborgen'}
                    style={{ display:'inline-flex', color:n.visible ? '#5fe39a' : HALTUNG_FARBE.Neutral, opacity:n.visible ? 1 : 0.6 }}><VisEye open={!!n.visible} size={16}/></span>
                  {cCount !== null
                    ? <span title="Freigeschaltete Fakten für diesen Charakter" style={{ fontFamily:MONO, fontSize:8, color:'rgba(var(--text-rgb),calc(0.55*var(--kt) + var(--tb)))' }}>{cCount}</span>
                    : <span style={{ fontFamily:MONO, fontSize:8, color:hexA(acc, 0.7) }}>{divOf(n.division).roman}</span>}
                </span>
              </button>
            );
          })}
        </div>
        <div style={{ padding:'10px 16px', borderTop:'1px solid rgba(var(--purple-rgb),calc(0.1*var(--kp)))', fontFamily:MONO, fontSize:8, letterSpacing:'0.14em', color:saveInfo.startsWith('✕') ? '#e36760' : 'rgba(var(--accent-rgb),calc(0.35*var(--ka)))', textTransform:'uppercase' }}>
          {saveInfo || '◈ Änderungen werden direkt gespeichert'}
        </div>
      </aside>

      {/* ══ Hauptbereich ══ */}
      <main className="md-detail" style={{ flex:1, overflowY:'auto', position:'relative' }}>
        {creating && <QuickCreate onCreate={createNsc} allStats={allStats} statsReady={statsReady} canCancel={nscs.length > 0} onCancel={() => { setCreating(false); setSelId(nscs[0] ? nscs[0].id : null); }}/>}
        {!creating && !sel && (
          <div style={{ height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:14, color:'rgba(var(--accent-rgb),calc(0.4*var(--ka) + var(--tb)))' }}>
            <div style={{ fontSize:34, opacity:0.5 }}>◇</div>
            <div style={{ fontFamily:DISP, fontSize:17, letterSpacing:'0.08em', color:'rgba(var(--text-rgb),calc(0.6*var(--kt) + var(--tb)))' }}>Kein NSC ausgewählt</div>
            <div style={{ fontFamily:BODY, fontSize:13, fontWeight:300 }}>Wähle links einen Eintrag — oder erstelle einen neuen.</div>
          </div>
        )}
        {!creating && sel && (
          <Editor sel={sel} nscs={nscs} charPersp={charPersp} unlocks={unlocks}
            persp={persp} setPersp={setPersp}
            updSel={updSel} updNsc={updNsc} vis={vis} toggleFieldVis={toggleFieldVis} deleteSel={deleteSel}
            createFromContact={createFromContact} openNsc={id => { setSelId(id); setCreating(false); }}
            allStats={allStats} lightbox={lightbox} setLightbox={setLightbox}/>
        )}
      </main>
    </div>
  );
}

// ── Editor + Vorschau ──────────────────────────────────────
function Editor(props) {
  const { sel, nscs, charPersp, unlocks, persp, setPersp,
          updSel, updNsc, vis, toggleFieldVis, deleteSel, createFromContact, openNsc,
          allStats, lightbox, setLightbox } = props;
  const acc = divOf(sel.division).accent;
  const has = k => (sel.sections || []).includes(k);
  const addSec = k => updSel('sections', [...(sel.sections || []), k]);
  const rmSec = k => updSel('sections', (sel.sections || []).filter(x => x !== k));


  const updRow = (field, i, k, v) => { const a = [...(sel[field] || [])]; a[i] = { ...a[i], [k]:v }; updSel(field, a); };
  const rmRow = (field, i) => updSel(field, (sel[field] || []).filter((_, j) => j !== i));
  const addRow = (field, v) => updSel(field, [...(sel[field] || []), v]);

  const updKon = (sub, i, k, v) => { const a = [...((sel.kontakte || {})[sub] || [])]; a[i] = { ...a[i], [k]:v }; updSel('kontakte', { ...sel.kontakte, [sub]:a }); };
  const rmKon = (sub, i) => updSel('kontakte', { ...sel.kontakte, [sub]:((sel.kontakte || {})[sub] || []).filter((_, j) => j !== i) });
  const addKon = sub => updSel('kontakte', { ...sel.kontakte, [sub]:[...((sel.kontakte || {})[sub] || []), { name:'', rolle:'' }] });

  // Rohindex → Faktenindex (Fakten zählen nur gefüllte Einträge)
  const filteredIdx = (list, i, pred) => pred(list[i]) ? list.slice(0, i + 1).filter(pred).length - 1 : null;

  const gebParts = meruriaDoyParts(sel.geburtstag_doy);
  const gebZ = meruriaZodiacOf(sel.geburtstag_doy);
  const rouDnd = useRowDnD(sel.routine || [], a => updSel('routine', a));
  const [showHaltungOv, setShowHaltungOv] = useState(false);
  const [haltungOvSearch, setHaltungOvSearch] = useState('');

  // Statblock
  const AD = { STR:'STÄ', DEX:'GES', CON:'KON', INT:'INT', WIS:'WEI', CHA:'CHA' };
  const fmtM = v => { const m = Math.floor(((parseInt(v) || 10) - 10) / 2); return (m >= 0 ? '+' : '') + m; };
  const crTxt = crTxtShared;
  const toSteck = statToSteck;
  const emptySteck = () => ({ name:sel.name, quelle:'Leer angelegt — alle Felder frei', typ:'', rk:'', rkTyp:'', tp:'', tpw:'', bew:'Gehen 9 m', attr:{ STR:10, DEX:10, CON:10, INT:10, WIS:10, CHA:10 }, fert:'', akt:[] });
  const sbBase = sel.steckbrief || null;
  const setSb = obj => updSel('steckbrief', obj);
  // Statblock-Auswahl aus der Datenbank (mit Rasse des NSC) → wird als eigener Statblock übernommen
  const sbB = useSbBasis({ rasse:sel.rasse, unterrasse:sel.unterrasse, division:sel.division, rang:sel.rang, allStats,
    onRasse:(r, u) => { updSel('rasse', r); updSel('unterrasse', u || null); } });
  const [sbMode, setSbMode] = useState('eigen');
  const [sbOpen, setSbOpen] = useState(false);
  useEffect(() => { sbB.reset(); setSbMode('eigen'); setSbOpen(false); }, [sel.id]);
  const sbAdopt = () => {
    if (!sbB.sbWahl) return;
    if (sbBase && !String(sbBase.quelle || '').startsWith('Leer angelegt') && !window.confirm('Den vorhandenen Statblock dieses NSC durch die Auswahl ersetzen? Eigene Änderungen daran gehen verloren.')) return;
    setSb(toSteck(sbB.sbErgebnis, sbB.sbWahl.art));
    sbB.reset(); setSbMode('eigen');
  };

  // Optionslisten
  const nameOpts = [...charPersp.map(c => c.label), ...nscs.filter(n => n.id !== sel.id && n.name).map(n => n.name)];
  const dv = divOf(sel.division);

  const sbFull = (
            <div style={cardSt}>
              <SecHeader title="Statblock" onRemove={() => rmSec('statblock')}/>
              <div style={{ display:'flex', gap:6, marginBottom:12, flexWrap:'wrap' }}>
                {[['eigen','✎ Eigener Statblock'],['db','◈ Aus Datenbank wählen (NSC · Monster)']].map(([k, label]) => (
                  <button key={k} onClick={() => setSbMode(k)}
                    style={{ padding:'8px 16px', fontFamily:MONO, fontSize:9, letterSpacing:'0.16em', textTransform:'uppercase', cursor:'pointer', borderRadius:3,
                      background:sbMode === k ? 'rgba(var(--purple-rgb),calc(0.2*var(--kp)))' : 'transparent',
                      border:`1px solid ${sbMode === k ? 'rgba(var(--purple-rgb),calc(0.65*var(--kp)))' : 'rgba(var(--purple-rgb),calc(0.2*var(--kp)))'}`,
                      color:sbMode === k ? 'var(--white)' : 'rgba(var(--text-rgb),calc(0.45*var(--kt)))' }}>{label}</button>
                ))}
              </div>
              {sbMode === 'db' && (
                <div>
                  <SbBasisPanel b={sbB} rasse={sel.rasse} rang={sel.rang} statsReady={allStats.length > 0} noLabel/>
                  <div style={{ display:'flex', alignItems:'center', gap:12, marginTop:12 }}>
                    <button onClick={sbAdopt} disabled={!sbB.sbWahl}
                      style={{ ...addBtnSt, padding:'9px 18px', opacity:sbB.sbWahl ? 1 : 0.4, cursor:sbB.sbWahl ? 'pointer' : 'default', color:'var(--white)', border:'1px solid rgba(var(--purple-rgb),calc(0.6*var(--kp)))' }}>✓ Übernehmen und als eigenen Statblock anpassen</button>
                    <span style={{ fontFamily:BODY, fontSize:11.5, fontWeight:300, color:'rgba(var(--accent-rgb),calc(0.5*var(--ka) + var(--tb)))' }}>
                      Die Auswahl wird kopiert; Änderungen danach gelten nur für diesen NSC.
                    </span>
                  </div>
                </div>
              )}
              {sbMode === 'eigen' && !sbBase && (
                <button onClick={() => setSb(emptySteck())} style={{ ...addBtnSt, marginBottom:10, padding:'8px 16px' }}>✎ Leeren Statblock anlegen</button>
              )}
              {sbMode === 'eigen' && sbBase && (
                <div style={{ border:'1px solid rgba(var(--purple-rgb),calc(0.28*var(--kp)))', borderRadius:5, padding:'16px 18px', background:'rgba(var(--panel-rgb),0.85)', animation:'fadeIn 0.25s ease' }}>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1.6fr', gap:10, marginBottom:12 }}>
                    <div><label style={{ ...lbSt, display:'block', marginBottom:4 }}>Name</label>
                      <input value={sbBase.name || ''} onChange={e => setSb({ ...sbBase, name:e.target.value })} style={{ ...inpSt, fontFamily:DISP, fontSize:14, letterSpacing:'0.06em' }}/></div>
                    <div><label style={{ ...lbSt, display:'block', marginBottom:4 }}>Typ</label>
                      <input value={sbBase.typ || ''} onChange={e => setSb({ ...sbBase, typ:e.target.value })} style={inpSt}/></div>
                  </div>
                  <div style={{ display:'grid', gridTemplateColumns:'70px 1.4fr 70px 1fr 1.2fr', gap:8, marginBottom:12 }}>
                    {[['rk','RK','number'],['rkTyp','Rüstungstyp','text'],['tp','TP','number'],['tpw','TP-Würfel','text'],['bew','Bewegung','text']].map(([k, label, type]) => (
                      <div key={k}><label style={{ ...lbSt, display:'block', marginBottom:4 }}>{label}</label>
                        <input type={type} value={sbBase[k] ?? ''} onChange={e => setSb({ ...sbBase, [k]:e.target.value })}
                          style={{ ...inpSt, fontFamily:type === 'number' ? MONO : BODY, fontSize:12 }}/></div>
                    ))}
                  </div>
                  <div style={{ display:'grid', gridTemplateColumns:'repeat(6,1fr)', gap:4, marginBottom:12 }}>
                    {['STR','DEX','CON','INT','WIS','CHA'].map(k => (
                      <div key={k} style={{ textAlign:'center', padding:'6px 4px', background:'rgba(var(--purple-rgb),calc(0.05*var(--kp)))', border:'1px solid rgba(var(--purple-rgb),calc(0.1*var(--kp)))', borderRadius:3 }}>
                        <div style={{ fontFamily:MONO, fontSize:7, letterSpacing:'0.14em', color:'rgba(var(--purple-rgb),calc(0.55*var(--kp) + var(--tb)))', textTransform:'uppercase', marginBottom:3 }}>{AD[k]}</div>
                        <input type="number" value={(sbBase.attr || {})[k] ?? 10}
                          onChange={e => setSb({ ...sbBase, attr:{ ...sbBase.attr, [k]:parseInt(e.target.value) || 0 } })}
                          style={{ width:'100%', padding:'4px 2px', textAlign:'center', background:'rgba(var(--bg-rgb),0.85)', border:'1px solid rgba(var(--purple-rgb),calc(0.25*var(--kp)))', borderRadius:2, color:'var(--white)', fontFamily:MONO, fontSize:13, fontWeight:600, outline:'none', boxSizing:'border-box' }}/>
                        <div style={{ fontFamily:MONO, fontSize:10, color:'rgba(var(--purple-rgb),calc(0.8*var(--kp) + var(--tb)))', marginTop:2 }}>{fmtM((sbBase.attr || {})[k] ?? 10)}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginBottom:12 }}><label style={{ ...lbSt, display:'block', marginBottom:4 }}>Fertigkeiten</label>
                    <input value={sbBase.fert || ''} onChange={e => setSb({ ...sbBase, fert:e.target.value })} placeholder="z.B. Athletik +5, Wahrnehmung +2" style={inpSt}/></div>
                  <label style={{ ...lbSt, display:'block', marginBottom:6 }}>Besonderheiten & Aktionen</label>
                  {(sbBase.akt || []).map((a, i) => (
                    <div key={i} style={{ display:'grid', gridTemplateColumns:'190px 1fr auto', gap:6, marginBottom:6, alignItems:'start' }}>
                      <input value={a.n || ''} placeholder="Name"
                        onChange={e => { const arr = [...sbBase.akt]; arr[i] = { ...arr[i], n:e.target.value }; setSb({ ...sbBase, akt:arr }); }}
                        style={{ ...inpSt, fontFamily:MONO, fontSize:11 }}/>
                      <textarea value={a.b || ''}
                        onChange={e => { const arr = [...sbBase.akt]; arr[i] = { ...arr[i], b:e.target.value }; setSb({ ...sbBase, akt:arr }); }}
                        style={{ ...inpSt, minHeight:40, resize:'vertical' }}/>
                      <button onClick={() => setSb({ ...sbBase, akt:sbBase.akt.filter((_, j) => j !== i) })} style={{ ...rmBtnSt, padding:'6px 10px' }}>×</button>
                    </div>
                  ))}
                  <div style={{ display:'flex', alignItems:'center', gap:12, marginTop:6 }}>
                    <button onClick={() => setSb({ ...sbBase, akt:[...(sbBase.akt || []), { n:'', b:'' }] })} style={addBtnSt}>+ Aktion</button>
                    <span style={{ fontFamily:MONO, fontSize:8, letterSpacing:'0.14em', color:'rgba(var(--accent-rgb),calc(0.4*var(--ka) + var(--tb)))', textTransform:'uppercase' }}>
                      Basis: {sbBase.quelle || '—'} — alle Felder frei anpassbar
                    </span>
                  </div>
                </div>
              )}
            </div>
  );
  const sbOpenAs = k => { setSbMode(k); setSbOpen(true); };
  const sbCard = has('statblock') ? (
    <LiveDbl editing={sbOpen} setEditing={setSbOpen}
      display={
        <div style={cardSt}>
          <SecHeader title="Statblock" onRemove={() => rmSec('statblock')}/>
          <SbSummary sb={sbBase}/>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginTop:sbBase ? 12 : 10 }}>
            <button onClick={() => sbOpenAs('eigen')} style={addBtnSt}>{sbBase ? '✎ Statblock bearbeiten' : '✎ Eigenen Statblock anlegen'}</button>
            <button onClick={() => sbOpenAs('db')} style={addBtnSt}>◈ {sbBase ? 'Neu aus Datenbank wählen' : 'Aus Datenbank wählen (NSC · Monster)'}</button>
          </div>
        </div>}
      editor={() => sbFull}/>
  ) : null;

  const statusGroups = (only) => {
        const groups = [
          ['Zustand', T().statuses.filter(s => !HALTUNGEN.includes(s.name))],
          ['Haltung ggü. Gruppe', T().statuses.filter(s => HALTUNGEN.includes(s.name))],
        ];
        const pick = (names, name, on) => {
          const rest = (sel.status || []).filter(x => !names.includes(x));
          updSel('status', on ? rest : [...rest, name]);
        };
        const ovMap = sel.haltungOverrides || {};
        const ovCount = charPersp.filter(c => ovMap[c.id]).length;
        return (
          <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-start', gap:14, marginTop:9 }}>
            {groups.map(([glabel, defs], gi) => {
              const names = defs.map(d => d.name);
              if (only !== undefined && only !== gi) return null;
              return (
                <div key={glabel}>
                  {only !== 1 && <div style={{ fontFamily:MONO, fontSize:7.5, letterSpacing:'0.22em', color:'rgba(var(--accent-rgb),calc(0.45*var(--ka) + var(--tb)))', textTransform:'uppercase', marginBottom:5 }}>{glabel}</div>}
                  <div style={{ display:'flex', flexWrap:'wrap', gap:5, alignItems:'center' }}>
                    {gi === 0 ? (() => {
                      const cur = defs.find(d => (sel.status || []).includes(d.name));
                      const col = cur ? cur.color : '#c8c0e8';
                      return (
                        <select value={cur ? cur.name : ''} aria-label="Zustand"
                          onChange={e => { const rest = (sel.status || []).filter(x => !names.includes(x)); updSel('status', e.target.value ? [...rest, e.target.value] : rest); }}
                          style={{ ...selSt, width:'auto', minWidth:170, padding:'6px 30px 6px 12px', fontFamily:MONO, fontSize:10, letterSpacing:'0.12em', textTransform:'uppercase',
                            borderColor:hexA(col, 0.6), background:hexA(col, 0.12), color:'var(--white)' }}>
                          <option value="">— kein Zustand —</option>
                          {defs.map(d => <option key={d.name} value={d.name}>{d.glyph} {d.name}</option>)}
                        </select>
                      );
                    })() : defs.map(st => {
                      const on = (sel.status || []).includes(st.name);
                      if (gi === 1) {
                        const col = HALTUNG_FARBE[st.name] || st.color;
                        return (
                          <button key={st.name} onClick={() => pick(names, st.name, on)} title={st.name} aria-label={st.name} aria-pressed={on}
                            style={{ width:38, height:32, display:'inline-flex', alignItems:'center', justifyContent:'center', cursor:'pointer', borderRadius:3,
                              background:on ? hexA(col, 0.2) : 'transparent',
                              border:`1px solid ${on ? hexA(col, 0.8) : hexA(col, 0.3)}`,
                              color:on ? col : hexA(col, 0.6) }}><HaltungIcon name={st.name}/></button>
                        );
                      }
                      return (
                        <button key={st.name} onClick={() => pick(names, st.name, on)}
                          style={{ padding:'4px 11px', fontFamily:MONO, fontSize:8.5, letterSpacing:'0.12em', textTransform:'uppercase', cursor:'pointer', borderRadius:2,
                            background:on ? hexA(st.color, 0.18) : 'transparent',
                            border:`1px solid ${on ? hexA(st.color, 0.65) : 'rgba(var(--accent-rgb),calc(0.18*var(--ka)))'}`,
                            color:on ? 'var(--white)' : 'rgba(var(--text-rgb),calc(0.4*var(--kt)))' }}>{st.glyph} {st.name}</button>
                      );
                    })}
                    {gi === 1 && (
                      <button onClick={() => setShowHaltungOv(v => !v)} title="Abweichende Haltung für einzelne Charaktere"
                        style={{ padding:'4px 9px', fontFamily:MONO, fontSize:8, letterSpacing:'0.1em', textTransform:'uppercase', cursor:'pointer', borderRadius:2,
                          background:ovCount ? 'rgba(255,180,80,0.12)' : 'transparent',
                          border:`1px dashed ${ovCount ? 'rgba(255,180,80,0.6)' : 'rgba(var(--accent-rgb),calc(0.3*var(--ka)))'}`,
                          color:ovCount ? '#ffb850' : 'rgba(var(--text-rgb),calc(0.45*var(--kt)))' }}>± Ausnahmen{ovCount ? ' · ' + ovCount : ''}</button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        );
  };
  const heroControls = (
    <div style={{ flex:1, minWidth:0, position:'relative', zIndex:1, marginTop:16 }}>
      {statusGroups(0)}
    </div>
  );
  const haltungControls = (
    <div style={{ maxWidth:620 }}>
      {statusGroups(1)}
      {showHaltungOv && (
        <div style={{ marginTop:10, padding:'10px 14px', border:'1px dashed rgba(var(--purple-rgb),calc(0.3*var(--kp)))', borderRadius:4, background:'rgba(var(--purple-rgb),calc(0.04*var(--kp)))' }}>
          <div style={{ fontFamily:MONO, fontSize:7.5, letterSpacing:'0.22em', color:'rgba(var(--accent-rgb),calc(0.5*var(--ka) + var(--tb)))', textTransform:'uppercase', marginBottom:8 }}>Haltung · Ausnahmen pro Charakter — Standard: wie Gruppe</div>
          <input value={haltungOvSearch} onChange={e => setHaltungOvSearch(e.target.value)} placeholder="Charakter suchen …"
            style={{ ...inpSt, width:220, padding:'5px 9px', fontSize:12, marginBottom:10 }}/>
          {[...charPersp]
            .filter(c => c.label.toLowerCase().includes(haltungOvSearch.trim().toLowerCase()))
            .sort((a, b) => {
              const ao = (sel.haltungOverrides || {})[a.id] ? 0 : 1, bo = (sel.haltungOverrides || {})[b.id] ? 0 : 1;
              return ao - bo || a.label.localeCompare(b.label, 'de');
            })
            .map(c => {
            const ov = (sel.haltungOverrides || {})[c.id] || '';
            const setOv = name => { const next = { ...(sel.haltungOverrides || {}) }; if (name) next[c.id] = name; else delete next[c.id]; updSel('haltungOverrides', next); };
            return (
              <div key={c.id} style={{ display:'grid', gridTemplateColumns:'minmax(120px, 180px) repeat(4, max-content)', alignItems:'center', gap:6, marginBottom:5 }}>
                <span title={c.label} style={{ fontFamily:BODY, fontSize:12, color:'var(--silver)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{c.label}</span>
                {['', ...HALTUNGEN].map(name => {
                  const def = name ? ((STATUS_DEF || {})[name] || { color:'var(--silver)', glyph:'◇' }) : null;
                  const on = ov === name;
                  const col = def ? def.color : '#a89cd8';
                  return (
                    <button key={name || 'default'} onClick={() => setOv(name)}
                      style={{ padding:'3px 9px', fontFamily:MONO, fontSize:8, letterSpacing:'0.1em', textTransform:'uppercase', cursor:'pointer', borderRadius:2,
                        background:on ? hexA(col, 0.16) : 'transparent',
                        border:`1px solid ${on ? hexA(col, 0.6) : 'rgba(var(--accent-rgb),calc(0.18*var(--ka)))'}`,
                        color:on ? 'var(--white)' : 'rgba(var(--text-rgb),calc(0.4*var(--kt)))' }}>{def ? def.glyph + ' ' + name : 'wie Gruppe'}</button>
                  );
                })}
              </div>
            );
          })}
          {!charPersp.length && <div style={{ fontFamily:BODY, fontSize:12, color:'rgba(var(--text-rgb),calc(0.5*var(--kt) + var(--tb)))' }}>Keine Spielercharaktere gefunden.</div>}
          {charPersp.length > 0 && !charPersp.some(c => c.label.toLowerCase().includes(haltungOvSearch.trim().toLowerCase())) &&
            <div style={{ fontFamily:BODY, fontSize:12, color:'rgba(var(--text-rgb),calc(0.5*var(--kt) + var(--tb)))' }}>Kein Charakter passt zu „{haltungOvSearch.trim()}".</div>}
        </div>
      )}
    </div>
  );

  // Sichtbarkeit für Spieler: Auge mit drei Wimpern (grün = sichtbar, geschlossen in Neutral-Farbe = verborgen)
  const visToggle = (
    <button onClick={async () => {
        const v = !sel.visible;
        updSel('visible', v);
        await window._sb.from('nscs').update({ visible:v }).eq('id', sel.id);
      }}
      title={sel.visible ? 'Für Spieler sichtbar — klicken zum Verbergen' : 'Für Spieler verborgen — klicken zum Freigeben'}
      aria-label={sel.visible ? 'Für Spieler sichtbar' : 'Für Spieler verborgen'} aria-pressed={!!sel.visible}
      style={{ width:52, height:46, display:'inline-flex', alignItems:'center', justifyContent:'center', cursor:'pointer', borderRadius:4,
        background:sel.visible ? 'rgba(95,227,154,0.12)' : 'transparent',
        border:`1px solid ${sel.visible ? 'rgba(95,227,154,0.55)' : hexA(HALTUNG_FARBE.Neutral, 0.35)}`,
        color:sel.visible ? '#5fe39a' : HALTUNG_FARBE.Neutral }}>
      <VisEye open={!!sel.visible} size={32}/>
    </button>
  );

  return (
    <div className="nscv-edit" style={{ maxWidth:880, margin:'0 auto', padding:'30px 40px 90px', animation:'fadeIn 0.3s ease' }}>

      {lightbox && sel.bild && (
        <div onClick={() => setLightbox(false)} title="Klicken zum Schließen"
          style={{ position:'fixed', inset:0, zIndex:3000, cursor:'zoom-out', backgroundColor:'rgba(var(--bg-rgb),0.95)', backgroundImage:`url("${sel.bild}")`, backgroundSize:'contain', backgroundPosition:'center', backgroundRepeat:'no-repeat', animation:'fadeIn 0.15s ease' }}/>
      )}

      <Preview sel={sel} nscs={nscs} charPersp={charPersp} unlocks={unlocks}
        persp={persp} setPersp={setPersp} vis={vis} openNsc={openNsc}
        updSel={updSel} toggleFieldVis={toggleFieldVis}
        heroSlot={heroControls} haltungSlot={haltungControls} visSlot={visToggle} deleteSel={deleteSel} onPortraitClick={() => sel.bild && setLightbox(true)}
        updNsc={updNsc} sbSlot={sbCard} createFromContact={createFromContact}
        addSection={k => { addSec(k); if (k === 'statblock' && !sel.steckbrief) setSb(emptySteck()); }}/>
    </div>
  );
}

// ── Bausteine der Live-Bearbeitung (Spieler-Vorschau in der DM-Sicht) ───
// Alles zeigt zuerst die Vorschau; Ein Klick macht das Feld bearbeitbar, beim Verlassen (Klick daneben, Enter, Esc) ist es wieder Vorschau.
// Eingabefelder erben Schrift, Farbe und Größe vom umgebenden Vorschau-Element.
const LIVE_FIELD = { font:'inherit', color:'inherit', letterSpacing:'inherit', textTransform:'inherit', fontStyle:'inherit', lineHeight:'inherit', textAlign:'inherit',
  background:'transparent', border:'none', borderBottom:'1px dashed rgba(var(--purple-rgb),calc(0.55*var(--kp)))', outline:'none', padding:0, margin:0, boxSizing:'border-box' };
const LIVE_STATIC = { font:'inherit', color:'inherit', letterSpacing:'inherit', textTransform:'inherit', fontStyle:'inherit', lineHeight:'inherit', textAlign:'inherit',
  display:'block', margin:0, padding:0, minHeight:'1.25em', whiteSpace:'pre-wrap', overflowWrap:'anywhere', cursor:'text', userSelect:'none' };
// Frisch eingefügte Einträge starten direkt im Bearbeiten-Modus (nur das erste Feld der Zeile)
const LiveFresh = React.createContext(null);
function useLiveEditing() {
  const fresh = React.useContext(LiveFresh);
  return useState(() => { if (fresh && !fresh.claimed) { fresh.claimed = true; return true; } return false; });
}
const caretEnd = e => { const el = e.target; try { el.setSelectionRange(el.value.length, el.value.length); } catch (_) {} };
function LiveInput({ value, onChange, placeholder, style, fit, type, list, format }) {
  const [editing, setEditing] = useLiveEditing();
  const v = value ?? '';
  if (!editing) {
    return (
      <div title="Klicken zum Bearbeiten" onClick={() => setEditing(true)}
        style={{ ...LIVE_STATIC, ...(fit ? { display:'inline-block' } : null), ...style }}>
        {String(v) === '' ? <span className="nscv-live-ph">{placeholder || '—'}</span> : (format ? format(v) : v)}
      </div>
    );
  }
  return <input autoFocus type={type} list={list} value={v} placeholder={placeholder} onChange={e => onChange(e.target.value)}
    onFocus={type === 'number' ? undefined : caretEnd} onBlur={() => setEditing(false)}
    onKeyDown={e => { if (e.key === 'Enter' || e.key === 'Escape') e.currentTarget.blur(); }}
    size={fit ? Math.max(6, String(v).length + 1) : undefined}
    style={{ ...LIVE_FIELD, ...(fit ? { width:'auto', minWidth:'6ch', maxWidth:'100%' } : { width:'100%' }), ...style }}/>;
}
function LiveArea({ value, onChange, placeholder, style }) {
  const [editing, setEditing] = useLiveEditing();
  const ref = useRef(null);
  useEffect(() => { const el = ref.current; if (el) { el.style.height = 'auto'; el.style.height = el.scrollHeight + 'px'; } }, [value, editing]);
  if (!editing) {
    return (
      <div title="Klicken zum Bearbeiten" onClick={() => setEditing(true)} style={{ ...LIVE_STATIC, ...style }}>
        {String(value ?? '') === '' ? <span className="nscv-live-ph">{placeholder || '—'}</span> : value}
      </div>
    );
  }
  return <textarea ref={ref} autoFocus rows={1} value={value ?? ''} placeholder={placeholder} onChange={e => onChange(e.target.value)}
    onFocus={caretEnd} onBlur={() => setEditing(false)}
    onKeyDown={e => { if (e.key === 'Escape' || (e.key === 'Enter' && (e.ctrlKey || e.metaKey))) e.currentTarget.blur(); }}
    style={{ ...LIVE_FIELD, display:'block', width:'100%', resize:'none', overflow:'hidden', ...style }}/>;
}
/* Beliebiger Bereich: Vorschau (display) → Klick → Editor (editor(close)); Klick daneben oder Esc beendet. */
function LiveDbl({ display, editor, style, disabled, editing: ctlEditing, setEditing: ctlSet }) {
  const [own, setOwn] = useState(false);
  const editing = ctlEditing ?? own;
  const setEditing = ctlSet || setOwn;
  const ref = useRef(null);
  useEffect(() => {
    if (!editing) return;
    const md = e => { if (ref.current && !ref.current.contains(e.target)) setEditing(false); };
    const kd = e => { if (e.key === 'Escape') setEditing(false); };
    document.addEventListener('mousedown', md); document.addEventListener('keydown', kd);
    return () => { document.removeEventListener('mousedown', md); document.removeEventListener('keydown', kd); };
  }, [editing]);
  if (editing) return <div ref={ref} style={style}>{editor(() => setEditing(false))}</div>;
  return <div title={disabled ? undefined : 'Klicken zum Bearbeiten'} onClick={disabled ? undefined : () => setEditing(true)} style={{ ...style, cursor:disabled ? 'default' : 'text', userSelect:'none' }}>{display}</div>;
}
/* Name aus NSC- und Spielercharakter-Liste wählen (Suche + Dropdown); freie Namen bleiben möglich. */
function LiveNamePicker({ value, onChange, options, placeholder, style }) {
  const [editing, setEditing] = useLiveEditing();
  const [q, setQ] = useState('');
  const [hi, setHi] = useState(0);
  const v = value ?? '';
  const ql = q.trim().toLowerCase();
  const matches = options.filter(o => !ql || o.label.toLowerCase().includes(ql)).slice(0, 14);
  if (!editing) {
    return (
      <div title="Klicken zum Bearbeiten" onClick={() => { setQ(''); setHi(0); setEditing(true); }} style={{ ...LIVE_STATIC, ...style }}>
        {String(v) === '' ? <span className="nscv-live-ph">{placeholder || '—'}</span> : v}
      </div>
    );
  }
  const pick = o => { onChange(o.label); setEditing(false); };
  return (
    <div style={{ position:'relative' }}>
      <input autoFocus value={v} placeholder={placeholder || 'Name oder suchen …'} onFocus={caretEnd}
        onChange={e => { onChange(e.target.value); setQ(e.target.value); setHi(0); }}
        onBlur={() => setEditing(false)}
        onKeyDown={e => {
          if (e.key === 'ArrowDown') { e.preventDefault(); setHi(h => Math.min(h + 1, matches.length - 1)); }
          else if (e.key === 'ArrowUp') { e.preventDefault(); setHi(h => Math.max(h - 1, 0)); }
          else if (e.key === 'Enter') { if (ql && matches[hi]) pick(matches[hi]); else e.currentTarget.blur(); }
          else if (e.key === 'Escape') e.currentTarget.blur();
        }}
        style={{ ...LIVE_FIELD, width:'100%', ...style }}/>
      <div className="nscv-pick-list" onMouseDown={e => e.preventDefault()}>
        {matches.length === 0 && <div className="nscv-pick-empty">Kein Treffer — der Name bleibt als Freitext stehen.</div>}
        {matches.map((o, i) => (
          <div key={o.kind + o.label + i} className={'nscv-pick-item' + (i === hi ? ' on' : '')} onMouseEnter={() => setHi(i)} onClick={() => pick(o)}>
            <span className="nscv-pick-av" style={{ borderColor:hexA(o.color, 0.6), background:hexA(o.color, 0.14) }}>
              {o.bild ? <img src={o.bild} alt=""/> : (o.label[0] || '?').toUpperCase()}
            </span>
            <span className="nscv-pick-name">{o.label}</span>
            <span className="nscv-pick-kind" style={{ color:o.color }}>{o.kind === 'sc' ? '◈ Spielercharakter' : 'NSC'}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
/* Liste mit Anfasser (Umsortieren), × (Löschen) und +-Buttons vor jedem Eintrag und am Ende.
   layout: 'col' (untereinander), 'wrap' (Chips) oder 'grid' (cols Spalten). */
function LiveList({ items, onChange, make, render, eye, layout, cols, addLabel }) {
  const rows = items || [];
  const wrap = layout === 'wrap';
  const dnd = useRowDnD(rows, onChange, wrap);
  const fresh = useRef(null);
  const ins = i => { fresh.current = { i, claimed:false, nonce:Date.now() }; onChange([...rows.slice(0, i), make(), ...rows.slice(i)]); };
  const set = (i, v) => { const a = [...rows]; a[i] = v; onChange(a); };
  const box = wrap ? { display:'flex', flexWrap:'wrap', gap:'8px 6px', alignItems:'center' }
    : layout === 'grid' ? { display:'grid', gridTemplateColumns:`repeat(${cols || 2}, minmax(0, 1fr))`, gap:8 }
    : { display:'flex', flexDirection:'column', gap:8 };
  return (
    <div style={box}>
      {rows.map((it, i) => {
        const f = fresh.current && fresh.current.i === i ? fresh.current : null;
        return (
          <React.Fragment key={f ? 'f' + f.nonce : i}>
            <div className="nscv-live-row" {...dnd.rowProps(i)}
              style={{ position:'relative', display:'flex', alignItems:'center', gap:4, minWidth:0, opacity:dnd.dragging === i ? 0.35 : 1 }}>
              {dnd.indicator(i)}
              <span className="nscv-live-grip" title="Ziehen zum Umsortieren" {...dnd.handleProps(i)}>⠿</span>
              <div style={{ flex:wrap ? '0 1 auto' : 1, minWidth:0 }}>
                <LiveFresh.Provider value={f}>{render(it, i, v => set(i, v))}</LiveFresh.Provider>
              </div>
              {eye && eye(i, it, v => set(i, v))}
              <button className="nscv-live-x" title="Entfernen" onClick={() => onChange(rows.filter((_, j) => j !== i))}>×</button>
            </div>
          </React.Fragment>
        );
      })}
      <button className={'nscv-live-add nscv-live-add-' + (layout || 'col')} onClick={() => ins(rows.length)}>+ {addLabel}</button>
    </div>
  );
}

function SbSummary({ sb }) {
  const AD = { STR:'STÄ', DEX:'GES', CON:'KON', INT:'INT', WIS:'WEI', CHA:'CHA' };
  const mod = v => { const m = Math.floor(((parseInt(v) || 10) - 10) / 2); return (m >= 0 ? '+' : '') + m; };
  if (!sb) return <div className="nscv-live-ph" style={{ fontFamily:BODY, fontSize:12.5 }}>Noch kein Statblock</div>;
  return (
    <div style={{ fontFamily:BODY, color:'var(--white)' }}>
      <div style={{ fontFamily:DISP, fontSize:15, letterSpacing:'0.06em' }}>{sb.name || '—'}</div>
      <div style={{ fontFamily:MONO, fontSize:9, letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(var(--accent-rgb),calc(0.55*var(--ka) + var(--tb)))', margin:'3px 0 10px' }}>
        {[sb.typ, 'RK ' + (sb.rk || '—') + (sb.rkTyp ? ' (' + sb.rkTyp + ')' : ''), 'TP ' + (sb.tp || '—') + (sb.tpw ? ' (' + sb.tpw + ')' : ''), sb.bew].filter(Boolean).join(' · ')}
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(6,1fr)', gap:4, marginBottom:10 }}>
        {['STR','DEX','CON','INT','WIS','CHA'].map(k => (
          <div key={k} style={{ textAlign:'center', padding:'5px 2px', background:'rgba(var(--purple-rgb),calc(0.05*var(--kp)))', border:'1px solid rgba(var(--purple-rgb),calc(0.1*var(--kp)))', borderRadius:3 }}>
            <div style={{ fontFamily:MONO, fontSize:7, letterSpacing:'0.14em', color:'rgba(var(--purple-rgb),calc(0.55*var(--kp) + var(--tb)))' }}>{AD[k]}</div>
            <div style={{ fontFamily:MONO, fontSize:12 }}>{(sb.attr || {})[k] ?? 10} <span style={{ opacity:0.6, fontSize:10 }}>({mod((sb.attr || {})[k] ?? 10)})</span></div>
          </div>
        ))}
      </div>
      {sb.fert && <div style={{ fontSize:12, marginBottom:8, color:'var(--silver)' }}><b style={{ fontWeight:500 }}>Fertigkeiten</b> {sb.fert}</div>}
      {(sb.akt || []).map((a, i) => (
        <div key={i} style={{ fontSize:12, lineHeight:1.55, marginBottom:4, color:'var(--silver)' }}>
          <b style={{ fontWeight:500, color:'var(--white)' }}>{a.n}.</b> {a.b}
        </div>
      ))}
    </div>
  );
}

// ── Spieler-Vorschau — Nachbau des NSC-Detailpanels (charaktere/nsc.html) ───
function Preview({ sel, nscs, charPersp, unlocks, persp, setPersp, vis, openNsc, updSel, updNsc, toggleFieldVis, heroSlot, haltungSlot, visSlot, onPortraitClick, deleteSel, sbSlot, addSection, createFromContact }) {
  const acc = divOf(sel.division).accent;
  const has = k => (sel.sections || []).includes(k);
  const dmView = persp === '__dm' || !charPersp.some(c => c.id === persp);
  const EDIT = dmView;  // Direktbearbeitung: immer in der DM-Sicht
  const [tab, setTab] = useState('');  // Reiter der Detailkarte; leer = eingeklappt
  const [pickBild, setPickBild] = useState(false);
  const perspName = dmView ? 'Spielleitung' : (charPersp.find(c => c.id === persp) || {}).label || 'Spieler';
  const uSet = dmView ? new Set() : ((unlocks.byPersp[persp] || {})[sel.id] || new Set());
  const allKeys = unlockableKeys(sel);
  const tgU = key => !dmView && unlocks.toggleForPids(sel.id, key, [persp]);
  const setU = arr => !dmView && unlocks.setKeysForPid(sel.id, persp, arr);

  // Nur Name und Bild gibt die Spielleitung frei; alle anderen Fakten sind von Spielern eingetragen (durch Spielwissen)
  const gVis = k => (k === 'name' || k === 'bild') ? (sel.fieldVis || {})[k] === true : true;
  const pOpen = (secKey, key) => dmView ? true : (gVis(secKey) && gVis(key) && uSet.has(key));
  const mkTg = (secKey, key) => {
    if (dmView) return null;
    const gHidden = !gVis(secKey) || !gVis(key);
    const on = uSet.has(key);
    return (
      <button onClick={gHidden ? undefined : () => tgU(key)}
        title={gHidden ? 'Global verborgen — Auge im Bearbeiten-Tab öffnen' : (on ? 'Freigeschaltet für ' : 'Freischalten für ') + perspName}
        style={{ background:'transparent', border:'none', cursor:gHidden ? 'default' : 'pointer', fontSize:12, padding:'0 3px', lineHeight:1,
          color:gHidden ? 'rgba(var(--accent-rgb),calc(0.22*var(--ka)))' : on ? '#5fe39a' : 'rgba(var(--accent-rgb),calc(0.45*var(--ka)))', flexShrink:0 }}>
        {gHidden ? '⊘' : on ? '◉' : '○'}
      </button>
    );
  };
  const mkTgAll = (secKey, allKeysOfSec) => {
    if (dmView || !allKeysOfSec.length) return null;
    const keys = allKeysOfSec.filter(gVis);  // nur global sichtbare Einträge schalten
    const gHidden = !gVis(secKey) || !keys.length;
    const allOn = keys.length > 0 && keys.every(k => uSet.has(k));
    return (
      <button onClick={gHidden ? undefined : () => setU(allOn ? [...uSet].filter(k => !keys.includes(k)) : [...new Set([...uSet, ...keys])])}
        title={gHidden ? 'Global verborgen — Auge im Bearbeiten-Tab öffnen' : (allOn ? 'Alle Einträge sperren für ' : 'Alle Einträge freischalten für ') + perspName}
        style={{ background:'transparent', border:'none', cursor:gHidden ? 'default' : 'pointer', fontSize:12, padding:'0 3px', lineHeight:1,
          color:gHidden ? 'rgba(var(--accent-rgb),calc(0.22*var(--ka)))' : allOn ? '#5fe39a' : 'rgba(var(--accent-rgb),calc(0.45*var(--ka)))', flexShrink:0 }}>
        {gHidden ? '⊘' : allOn ? '◉' : '○'}
      </button>
    );
  };

  // Stufen-Basis: nur entdeckbare (global sichtbare) Fakten — wie stageFromUnlocked
  const facts = dmView ? factsOf(sel) : unlockableKeys(sel);
  const factOpen = k => {
    if (dmView) return true;
    const m = k.match(/^([a-z]+)-(\d+)$/);
    if (!m) return pOpen(k === 'habe' ? 'ausr' : k === 'unvergesslich' ? 'pers' : k, k);
    if (m[1] === 'geh') {
      const list = (sel.geheimnisse || []).filter(g => (g.text || '').trim());
      return !!list[+m[2]] && uSet.has(k);
    }
    return pOpen(SEC_OF_PREFIX[m[1]] || m[1], k);
  };
  const totAll = facts.length;
  const totOpen = facts.filter(factOpen).length;
  const ratio = totAll ? totOpen / totAll : 0;
  const stage = ratio >= 1 ? 4 : ratio >= 0.75 ? 3 : ratio >= 0.5 ? 2 : ratio >= 0.25 ? 1 : 0;
  const STG = ['Gerüchte','Bekannt','Vertraut','Nahestehend','Eingeweiht'];

  const secHead = (title, open, total, tgAll, color) => (
    <div style={{ margin:'22px 0 10px', display:'flex', alignItems:'center', gap:10 }}>
      <span style={{ fontFamily:MONO, fontSize:9, letterSpacing:'0.30em', color:open > 0 ? (color || acc) : 'rgba(var(--accent-rgb),calc(0.5*var(--ka)))', textTransform:'uppercase' }}>
        <span style={{ width:3.5, height:3.5, border:'1px solid currentColor', transform:'rotate(45deg)', display:'inline-block', marginRight:8, marginBottom:1 }}/>{title}
      </span>
      <div style={{ flex:1, height:1, background:open > 0 ? (color ? 'rgba(227,103,96,0.4)' : hexA(acc, 0.4)) : 'rgba(var(--accent-rgb),calc(0.12*var(--ka)))' }}/>
      {tgAll}
      <span style={{ fontFamily:MONO, fontSize:7.5, letterSpacing:'0.22em', color:'rgba(var(--text-rgb),calc(0.5*var(--kt) + var(--tb)))', textTransform:'uppercase' }}>
        {total > 0 ? `${open} / ${total} entdeckt` : '—'}
      </span>
    </div>
  );
  const lockRow = (
    <div style={{ padding:'10px 14px', border:`1px dashed ${hexA(acc, 0.25)}`, background:'rgba(var(--purple-rgb),calc(0.03*var(--kp)))', borderRadius:2, display:'flex', alignItems:'center', gap:8, fontFamily:MONO, fontSize:9, letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(var(--accent-rgb),calc(0.55*var(--ka) + var(--tb)))' }}>
      <span style={{ width:6, height:6, border:`1px solid ${hexA(acc, 0.45)}`, display:'inline-block', flexShrink:0 }}/>
      <span>Noch nicht freigeschaltet</span>
    </div>
  );

  // Eckdaten
  const lockedVSt = { fontFamily:MONO, fontSize:8.5, color:hexA(acc, 0.45), letterSpacing:'0.14em', textTransform:'uppercase', display:'block' };
  const openVSt = { fontFamily:BODY, fontWeight:300, fontSize:13, color:'var(--white)', display:'block', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' };
  const eckG = { person:[], werdegang:[], zug:[] };
  const eckRow = (group, key, label, value) => {
    if (!value) return;
    const open = dmView || pOpen(key, key);
    eckG[group].push({ key:key + '-' + label, k:label, v:open ? value : 'Noch nicht freigeschaltet', vSt:open ? openVSt : lockedVSt, tg:mkTg(key, key), open });
  };
  eckRow('person', 'rasse', 'Rasse', rasseText(sel.rasse, sel.unterrasse));
  eckRow('person', 'geschlecht', 'Geschlecht', sel.geschlecht);
  eckRow('person', 'groesse', 'Größe', sel.groesse);
  eckRow('person', 'alter', 'Alter', sel.alter != null && sel.alter !== '' ? sel.alter + ' Jahre' : '');
  eckRow('person', 'geburtstag', 'Geburtstag', meruriaDoyText(sel.geburtstag_doy));
  { const z = meruriaZodiacOf(sel.geburtstag_doy); if (z) eckRow('person', 'geburtstag', 'Sternzeichen', z.sign); }
  eckRow('person', 'gesinnung', 'Gesinnung', sel.gesinnung);
  eckRow('werdegang', 'klasse', 'Klasse', sel.klasse);
  eckRow('werdegang', 'hintergrund', 'Hintergrund', sel.hintergrund);
  eckRow('werdegang', 'beruf', 'Beruf', sel.beruf);
  eckRow('werdegang', 'gottheit', 'Gottheit', sel.gottheit);
  const rangNum = parseInt(sel.rang) || null;
  const rangTitel = rangNum ? ((((T().raenge || {})[sel.division]) || []).find(r => r.rang === rangNum) || {}).titel : null;
  eckRow('zug', 'division', 'Division', sel.division !== 'Keine' ? divOf(sel.division).roman + ' · ' + sel.division : '');
  eckRow('zug', 'division', 'Rang', sel.division !== 'Keine' && sel.rang ? (rangNum ? 'Rang ' + rangNum + (rangTitel ? ' · ' + rangTitel : '') : sel.rang) : '');
  eckRow('zug', 'organisation', 'Organisation', sel.organisation);
  eckRow('zug', 'kapsel', 'Kapsel', sel.kapsel);
  eckRow('zug', 'wohnort', 'Wohnort', sel.wohnort);
  const eckGroups = [['Person', eckG.person], ['Werdegang', eckG.werdegang], ['Zugehörigkeit', eckG.zug]].filter(([_, rows]) => rows.length);
  const eckAll = [...eckG.person, ...eckG.werdegang, ...eckG.zug];

  // Item-Listen
  const lines = v => Array.isArray(v) ? v.map(x => String(x)).filter(x => x.trim()) : [];
  const mkItems = (present, secKey, prefix, items) => {
    if (!present || !items.length) return null;
    const keys = items.map((_, i) => prefix + '-' + i);
    return {
      keys,
      rows: items.map((t, i) => ({ t, key:keys[i], open:dmView || pOpen(secKey, keys[i]), tg:mkTg(secKey, keys[i]) })),
    };
  };
  const pvEig = mkItems(has('pers'), 'pers', 'eig', lines(sel.eigenschaften));
  const pvTal = mkItems(has('pers'), 'pers', 'tal', lines(sel.talente));
  const pvMak = mkItems(has('pers'), 'pers', 'mak', lines(sel.makel));
  const pvGew = mkItems(has('gewohnheiten'), 'gewohnheiten', 'gew', lines(sel.gewohnheiten));
  const pvMot = mkItems(has('motive'), 'motive', 'mot', lines(sel.motivationen));
  const pvVna = mkItems((sel.vollerName || []).length > 0, 'vname', 'vna', sel.vollerName || []);
  const ausList = (sel.ausruestung || []).filter(e => (e.name || '').trim());
  const pvAus = mkItems(has('ausr'), 'ausr', 'aus', ausList.map(e => e.name));
  const begList = (sel.begleiter || []).filter(b => (b.name || '').trim());
  const gehList = (sel.geheimnisse || []).filter(g => (g.text || '').trim());
  const konGroups = [['◇ Familie','familie','fam','var(--lav)'],['◆ Freunde','freunde','fre','#5fe39a'],['⚔ Rivalen','rivalen','riv','#e36760']]
    .map(([title, sub, prefix, color]) => ({ title, prefix, color, list:((sel.kontakte || {})[sub] || []).filter(p => (p.name || '').trim()) }))
    .filter(g => g.list.length);
  const konKeys = konGroups.flatMap(g => g.list.map((_, i) => g.prefix + '-' + i));

  const openCount = rows => rows.filter(r => r.open).length;
  const unvOpen = dmView || pOpen('pers', 'unvergesslich');
  const bioText = (sel.biografie || '').trim();
  const bioOpen = dmView || pOpen('bio', 'bio');
  const ashObj = (sel.aussehen && typeof sel.aussehen === 'object') ? sel.aussehen : {};
  const ashUnits = { groesse:' cm', gewicht:' Pfund' };
  const ashRows = [['groesse','Größe'],['gewicht','Gewicht'],['hautfarbe','Hautfarbe'],['augenfarbe','Augenfarbe'],['haarfarbe','Haarfarbe'],['merkmale','Besondere Merkmale'],['weiteres','Weiteres']]
    .map(([k, label]) => { const v = String(ashObj[k] || '').trim(); return { k, label, v:v ? v + (ashUnits[k] || '') : '' }; }).filter(r => r.v);
  const aussehenOpen = dmView || pOpen('aussehen', 'aussehen');
  const habeShow = has('ausr') && (sel.habe || 0) > 0;
  const habeOpen = dmView || pOpen('ausr', 'habe');

  // Kopf / Hex-Portrait
  const GLY = '░▒▓█▪◆◈⬡⬢⬤⬧◉●○◇□■';
  const scrName = (sel.name || '').split('').map((c, i) => (c === ' ' || c === '-') ? c : GLY[((sel.name.charCodeAt(0) * 17 + i * 31) % GLY.length + GLY.length) % GLY.length]).join('');
  const hexPts = inset => {
    const pts = [];
    for (let i = 0; i < 6; i++) { const a = Math.PI / 180 * (60 * i - 90); pts.push(`${(75 + (75 - inset) * Math.cos(a)).toFixed(2)},${(75 + (75 - inset) * Math.sin(a)).toFixed(2)}`); }
    return pts.join(' ');
  };
  const hexClip = 'polygon(50% 2%, 91.6% 26%, 91.6% 74%, 50% 98%, 8.4% 74%, 8.4% 26%)';
  const GOLDA = a => `oklch(0.82 0.14 80 / ${a})`;
  const isMax = stage >= 4;
  const aFn = isMax ? GOLDA : (a => hexA(acc, a));
  const mainAcc = isMax ? 'oklch(0.82 0.14 80)' : acc;
  const dv = divOf(sel.division);
  const divisionOpen = dmView || pOpen('division', 'division');

  const eckBlock = (
    <React.Fragment>
          {/* Eckdaten */}
          {secHead('Eckdaten', eckAll.filter(r => r.open).length, eckAll.length, null)}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3, minmax(0, 1fr))', gap:'4px 26px', alignItems:'start' }}>
            {eckGroups.map(([title, rows], gi) => (
              <div key={title} style={gi > 0 ? { borderLeft:`1px solid ${hexA(acc, 0.14)}`, paddingLeft:22 } : { paddingLeft:0 }}>
                <span style={{ fontFamily:MONO, fontSize:7.5, letterSpacing:'0.26em', color:hexA(acc, 0.65), textTransform:'uppercase', marginBottom:10, display:'flex', alignItems:'center', gap:7 }}>
                  <span style={{ fontSize:6, lineHeight:1, display:'inline-block', position:'relative', top:-1, color:acc }}>⬢</span>{title}
                </span>
                {rows.map(e => (
                  <div key={e.key} style={{ display:'flex', alignItems:'center', gap:8, padding:'5px 0' }}>
                    <span style={{ flex:1, minWidth:0 }}>
                      <span style={{ fontFamily:MONO, fontSize:8, letterSpacing:'0.2em', color:'rgba(var(--accent-rgb),calc(0.48*var(--ka) + var(--tb)))', textTransform:'uppercase', whiteSpace:'nowrap', display:'block', marginBottom:2 }}>{e.k}</span>
                      <span style={e.vSt}>{e.v}</span>
                    </span>
                    {e.tg}
                  </div>
                ))}
              </div>
            ))}
          </div>

    </React.Fragment>
  );

  // ── Live-Bearbeitung: dieselben Abschnitte, aber mit Eingabefeldern, +-Buttons und Umsortieren ──
  // Augen gibt es nur für Name und Bild (Spieler tragen die übrigen Fakten selbst ein)
  const eyeFor = key => (key === 'name' || key === 'bild') ? <VisToggle on={vis(key)} onClick={() => toggleFieldVis(key)} label={key === 'name' ? 'Name' : 'Bild'}/> : null;
  const rmSecLive = k => updSel('sections', (sel.sections || []).filter(x => x !== k));
  const fIdx = (list, i) => (list[i].name || '').trim() ? list.slice(0, i + 1).filter(x => (x.name || '').trim()).length - 1 : null;
  const edHead = (title, eyeKeys, removeKey, removeLabel, color) => (
    <div style={{ margin:'22px 0 10px', display:'flex', alignItems:'center', gap:10 }}>
      <span style={{ fontFamily:MONO, fontSize:9, letterSpacing:'0.30em', color:color || acc, textTransform:'uppercase' }}>
        <span style={{ width:3.5, height:3.5, border:'1px solid currentColor', transform:'rotate(45deg)', display:'inline-block', marginRight:8, marginBottom:1 }}/>{title}
      </span>
      <div style={{ flex:1, height:1, background:color ? 'rgba(227,103,96,0.4)' : hexA(acc, 0.4) }}/>
      {(eyeKeys || []).map(k => <React.Fragment key={k}>{eyeFor(k)}</React.Fragment>)}
      {removeKey && <button className="nscv-live-rmsec" onClick={() => rmSecLive(removeKey)}>× {removeLabel || 'entfernen'}</button>}
    </div>
  );
  const bar = { padding:'6px 10px 6px 8px', borderLeft:`2px solid ${hexA(acc, 0.55)}`, background:hexA(acc, 0.05), fontFamily:BODY, fontSize:12.5, color:'var(--white)', lineHeight:1.55 };
  const strList = (field, prefix, label, layout, itemRender, cols) => (
    <LiveList items={sel[field]} onChange={a => updSel(field, a)} make={() => ''} layout={layout} cols={cols} addLabel={label}
      eye={i => eyeFor(`${prefix}-${i}`)} render={itemRender}/>
  );
  const hint = txt => <div style={{ fontFamily:MONO, fontSize:8, letterSpacing:'0.14em', color:'rgba(var(--accent-rgb),calc(0.4*var(--ka) + var(--tb)))', textTransform:'uppercase', marginBottom:8 }}>{txt}</div>;

  const liveBody = () => {
    const ash = (sel.aussehen && typeof sel.aussehen === 'object') ? sel.aussehen : {};
    const setAsh = k => v => updSel('aussehen', { ...ash, [k]:v });
    const lab = { fontFamily:MONO, fontSize:8, letterSpacing:'0.2em', color:'rgba(var(--accent-rgb),calc(0.48*var(--ka) + var(--tb)))', textTransform:'uppercase', display:'block', marginBottom:2 };
    const SECS = [['bio','Biografie'],['aussehen','Aussehen'],['pers','Persönlichkeit'],['routine','Routine'],['gewohnheiten','Angewohnheiten'],
      ['motive','Motivationen'],['ausr','Ausrüstung & Vermögen'],['begleiter','Begleiter'],['kontakte','Kontakte'],['geheim','Geheimnisse'],['statblock','Statblock (Monster-DB)']];
    const kon = sel.kontakte || {};
    const kontaktOpts = [
      ...charPersp.map(c => ({ label:c.label, kind:'sc', color:'#ffb850', bild:null })),
      ...nscs.filter(n => n.id !== sel.id && n.name).map(n => ({ label:n.name, kind:'nsc', color:divOf(n.division).accent, bild:n.bild })),
    ].sort((a, b) => a.label.localeCompare(b.label, 'de'));
    const TABS = [["ueber","Überblick"],["pers","Persönlichkeit"],["bez","Beziehungen"],["ausr","Ausrüstung"],["geh","Geheimnisse"],["sb","Statblock"],["haltung","Haltung"]];
    const TAB_OF = { aussehen:'pers', pers:'pers', routine:'pers', gewohnheiten:'pers', motive:'pers', begleiter:'bez', kontakte:'bez', ausr:'ausr', geheim:'geh', statblock:'sb' };
    const addRow = tk => {
      const miss = SECS.filter(([k]) => !has(k) && TAB_OF[k] === tk);
      if (!miss.length) return null;
      return (
        <div style={{ marginTop:26, display:'flex', flexWrap:'wrap', gap:8, alignItems:'center' }}>
          <span style={{ fontFamily:MONO, fontSize:8.5, letterSpacing:'0.28em', color:'rgba(var(--accent-rgb),calc(0.45*var(--ka) + var(--tb)))', textTransform:'uppercase', marginRight:6 }}>Abschnitt hinzufügen</span>
          {miss.map(([k, label]) => (
            <button key={k} onClick={() => addSection(k)}
              style={{ padding:'7px 14px', background:'transparent', border:'1px dashed rgba(var(--purple-rgb),calc(0.4*var(--kp)))', borderRadius:20, color:'rgba(var(--text-rgb),calc(0.6*var(--kt) + var(--tb)))', fontFamily:BODY, fontSize:12, cursor:'pointer' }}>＋ {label}</button>
          ))}
        </div>
      );
    };
    return (
      <React.Fragment>
        <div className="nscv-tabs">
          {TABS.map(([k, label]) => <button key={k} className={'nscv-tab' + (tab === k ? ' on' : '')} onClick={() => setTab(t => t === k ? '' : k)} aria-expanded={tab === k}>{label}</button>)}
        </div>

        {tab === 'ueber' && (
          <React.Fragment>
        {has('pers') && (
          <React.Fragment>
            {edHead('Erscheinung & Auftreten', ['pers', 'unvergesslich'], 'pers', 'Persönlichkeit entfernen')}
            <div style={{ padding:'10px 14px', border:`1px solid ${hexA(acc, 0.25)}`, background:hexA(acc, 0.04), fontFamily:BODY, fontSize:13, lineHeight:1.7, color:'var(--silver)' }}>
              <LiveArea value={sel.unvergesslich} onChange={v => updSel('unvergesslich', v)} placeholder="Was vergisst niemand, der ihr begegnet?"/>
            </div>
          </React.Fragment>
        )}

        {edHead('Voller Name', ['vname'])}

        <LiveList items={sel.vollerName} onChange={a => updSel('vollerName', a)} make={() => ''} layout="wrap" addLabel="Namensteil"
          eye={i => eyeFor(`vna-${i}`)}
          render={(t, i, set) => (
            <span style={{ display:'inline-block', padding:'4px 10px', fontFamily:DISP, fontSize:14, letterSpacing:'0.06em', background:hexA(acc, 0.10), border:`1px solid ${hexA(acc, 0.45)}`, color:'var(--white)', borderRadius:2 }}>
              <LiveInput fit value={t} onChange={set} placeholder="Namensteil"/>
            </span>
          )}/>

        {edHead('Eckdaten', [])}

        {(() => {
          const close0 = () => {};
          const smallIn = { ...inpSt, padding:'4px 8px', fontSize:12 };
          const smallSel = { ...selSt, padding:'4px 8px', fontSize:12 };
          const text = (field, type) => close => <input autoFocus type={type || 'text'} value={sel[field] ?? ''} onChange={e => updSel(field, e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') close(); }} style={smallIn}/>;
          const pick = (field, opts) => close => (
            <select autoFocus value={sel[field] || ''} onChange={e => { updSel(field, e.target.value); close(); }} style={smallSel}>
              <option value="">—</option>
              {opts.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          );
          const gott = T().gottheiten || {};
          const sub = subOf(sel.rasse);
          const raceOpts = [...T().rassen].sort((a, b) => a.name.localeCompare(b.name, 'de'));
          const bornAge = window.CharAge.fromBirth(sel.geburtstag_jahr, sel.geburtstag_doy);
          const gz = meruriaZodiacOf(sel.geburtstag_doy);
          const hasDiv = sel.division && sel.division !== 'Keine';
          const groups = [
            ['Person', [
              { key:'rasse', label:'Rasse', text:rasseText(sel.rasse, sel.unterrasse), editor:close => (
                <div style={{ display:'flex', flexDirection:'column', gap:4 }}>
                  <select autoFocus value={sel.rasse || ''} onChange={e => { updSel('rasse', e.target.value); updSel('unterrasse', null); }} style={smallSel}>
                    <option value="">—</option>
                    {raceOpts.map(r => <option key={r.name} value={r.name}>{r.name}</option>)}
                  </select>
                  {sub.show && (
                    <select value={sel.unterrasse || ''} onChange={e => { updSel('unterrasse', e.target.value); close(); }} style={smallSel}>
                      <option value="">— {sub.label} —</option>
                      {sub.opts.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  )}
                </div>) },
              { key:'geschlecht', label:'Geschlecht', text:sel.geschlecht, editor:text('geschlecht') },
              { key:'groesse', label:'Größe', text:sel.groesse, editor:pick('groesse', T().groessen || []) },
              { key:'alter', label:'Alter', text:sel.alter != null && sel.alter !== '' ? sel.alter + ' Jahre' : '', editor:text('alter', 'number'), disabled:bornAge != null },
              { key:'geburtstag', label:'Geburtstag', text:meruriaDoyText(sel.geburtstag_doy), editor:close => (
                <window.CharAge.BirthDatePicker doy={sel.geburtstag_doy} jahr={sel.geburtstag_jahr}
                  buttonStyle={{ ...smallIn, cursor:'pointer', textAlign:'left' }}
                  onChange={({ doy, jahr }) => {
                    const patch = { geburtstag_doy:doy, geburtstag_jahr:jahr };
                    const born = window.CharAge.fromBirth(jahr, doy);
                    if (born != null) patch.alter = born;
                    updNsc(sel.id, patch);
                  }}/>) },
              ...(gz ? [{ key:null, label:'Sternzeichen', text:gz.sign, disabled:true }] : []),
              { key:'gesinnung', label:'Gesinnung', text:sel.gesinnung, editor:pick('gesinnung', T().gesinnungen || []) },
            ]],
            ['Werdegang', [
              { key:'klasse', label:'Klasse', text:sel.klasse, editor:pick('klasse', T().klassen || []) },
              { key:'hintergrund', label:'Hintergrund', text:sel.hintergrund, editor:pick('hintergrund', T().hintergruende || []) },
              { key:'beruf', label:'Beruf', text:sel.beruf, editor:text('beruf') },
              { key:'gottheit', label:'Gottheit', text:sel.gottheit, editor:close => (
                <select autoFocus value={sel.gottheit || ''} onChange={e => { updSel('gottheit', e.target.value); close(); }} style={smallSel}>
                  <option value="">—</option>
                  <optgroup label="Gottheiten">{(gott.goetter || []).map(n => <option key={n} value={n}>{n}</option>)}</optgroup>
                  <optgroup label="Dämonen">{(gott.daemonen || []).map(n => <option key={n} value={n}>{n}</option>)}</optgroup>
                  <optgroup label="Naturgeister">{(gott.naturgeister || []).map(n => <option key={n} value={n}>{n}</option>)}</optgroup>
                </select>) },
            ]],
            ['Zugehörigkeit', [
              { key:'division', label:'Division', text:hasDiv ? divOf(sel.division).roman + ' · ' + sel.division : '', editor:close => (
                <select autoFocus value={sel.division || 'Keine'} onChange={e => { const v = e.target.value; updSel('division', v); if (v === 'Keine') updSel('rang', null); close(); }} style={smallSel}>
                  {T().divisions.map(d => <option key={d.name} value={d.name}>{d.roman !== '—' ? d.roman + ' · ' + d.name : d.name}</option>)}
                </select>) },
              ...(hasDiv ? [{ key:null, label:'Rang', text:rangNum ? 'Rang ' + rangNum + (rangTitel ? ' · ' + rangTitel : '') : '', editor:close0 => (
                <div>
                  <RangButtons value={rangNum} onPick={n => updSel('rang', n)} division={sel.division}/>
                  <RangInfo division={sel.division} rang={rangNum}/>
                </div>) }] : []),
              { key:'organisation', label:'Organisation', text:sel.organisation, editor:text('organisation') },
              { key:'kapsel', label:'Kapsel', text:sel.kapsel, editor:text('kapsel') },
              { key:'wohnort', label:'Wohnort', text:sel.wohnort, editor:text('wohnort') },
            ]],
          ];
          const ageRaw = sel.rasse ? ageInfo(sel.rasse, sel.alter) : null;
          return (
            <React.Fragment>
              <div className="nscv-eck-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3, minmax(0, 1fr))', gap:'4px 26px', alignItems:'start' }}>
                {groups.map(([title, rows], gi) => (
                  <div key={title} style={gi > 0 ? { borderLeft:`1px solid ${hexA(acc, 0.14)}`, paddingLeft:22 } : { paddingLeft:0 }}>
                    <span style={{ fontFamily:MONO, fontSize:7.5, letterSpacing:'0.26em', color:hexA(acc, 0.65), textTransform:'uppercase', marginBottom:10, display:'flex', alignItems:'center', gap:7 }}>
                      <span style={{ fontSize:6, lineHeight:1, display:'inline-block', position:'relative', top:-1, color:acc }}>⬢</span>{title}
                    </span>
                    {rows.map(r => (
                      <div key={r.label} style={{ display:'flex', alignItems:'center', gap:8, padding:'5px 0' }}>
                        <span style={{ flex:1, minWidth:0 }}>
                          <span style={{ fontFamily:MONO, fontSize:8, letterSpacing:'0.2em', color:'rgba(var(--accent-rgb),calc(0.48*var(--ka) + var(--tb)))', textTransform:'uppercase', whiteSpace:'nowrap', display:'block', marginBottom:2 }}>{r.label}</span>
                          <LiveDbl disabled={r.disabled} editor={r.editor || close0}
                            display={<span style={{ fontFamily:BODY, fontWeight:300, fontSize:13, color:'var(--white)', display:'block', minHeight:'1.25em' }}>{r.text || <span className="nscv-live-ph">—</span>}</span>}/>
                        </span>
                        {r.key && eyeFor(r.key)}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              {ageRaw && (
                <div style={{ marginTop:10, fontFamily:BODY, fontSize:12, color:'rgba(var(--accent-rgb),calc(0.6*var(--ka) + var(--tb)))' }}>
                  ◇ {sel.rasse}: volljährig mit {ageRaw.adult} · Lebenserwartung {ageRaw.life}{ageRaw.phase ? ' · Lebensphase: ' + ageRaw.phase : ''}
                </div>
              )}
            </React.Fragment>
          );
        })()}
            {addRow('ueber')}
            <div style={{ marginTop:40, paddingTop:16, borderTop:'1px solid rgba(227,103,96,0.18)', display:'flex', justifyContent:'flex-end' }}>
              <button onClick={deleteSel} style={{ padding:'6px 12px', background:'transparent', border:'1px solid rgba(227,103,96,0.3)', borderRadius:3, color:'rgba(227,103,96,0.65)', fontFamily:MONO, fontSize:8.5, letterSpacing:'0.18em', textTransform:'uppercase', cursor:'pointer' }}>✕ Diesen NSC löschen</button>
            </div>
          </React.Fragment>
        )}

        {tab === 'pers' && (
          <React.Fragment>
        {has('aussehen') && (
          <React.Fragment>
            {edHead('Aussehen', ['aussehen'], 'aussehen')}
            <div style={{ padding:'12px 16px', border:`1px solid ${hexA(acc, 0.25)}`, background:hexA(acc, 0.04), display:'grid', gridTemplateColumns:'repeat(3, minmax(0, 1fr))', gap:'10px 26px' }}>
              {[['groesse','Größe','cm'],['gewicht','Gewicht','Pfund'],['hautfarbe','Hautfarbe',''],['augenfarbe','Augenfarbe',''],['haarfarbe','Haarfarbe',''],['merkmale','Besondere Merkmale',''],['weiteres','Weiteres','']].map(([k, label, unit]) => (
                <div key={k} style={(k === 'merkmale' || k === 'weiteres') ? { gridColumn:'1 / -1' } : null}>
                  <span style={lab}>{label}{unit ? ' · ' + unit : ''}</span>
                  <div style={{ fontFamily:BODY, fontWeight:300, fontSize:13, color:'var(--white)', lineHeight:1.6 }}>
                    {(k === 'merkmale' || k === 'weiteres')
                      ? <LiveArea value={ash[k]} onChange={setAsh(k)} placeholder="…"/>
                      : <LiveInput value={ash[k]} onChange={setAsh(k)} placeholder="…"/>}
                  </div>
                </div>
              ))}
            </div>
          </React.Fragment>
        )}

        {has('routine') && (
          <React.Fragment>
            {edHead('Routine', ['routine'], 'routine')}
            <LiveList items={sel.routine} onChange={a => updSel('routine', a)} make={() => ({ zeit:'', ort:'', tat:'' })} layout="col" addLabel="Eintrag"
              eye={i => eyeFor(`rou-${i}`)}
              render={(e, i, set) => (
                <div style={{ padding:'8px 12px', background:hexA(acc, 0.05), border:`1px solid ${hexA(acc, 0.25)}`, borderLeft:`2px solid ${hexA(acc, 0.7)}`, borderRadius:2 }}>
                  <div style={{ display:'flex', gap:12, marginBottom:3 }}>
                    <LiveInput value={e.zeit} onChange={v => set({ ...e, zeit:v })} placeholder="Uhrzeit / Tageszeit" style={{ fontFamily:MONO, fontSize:9, letterSpacing:'0.22em', color:acc, textTransform:'uppercase', flex:'0 0 38%' }}/>
                    <LiveInput value={e.ort} onChange={v => set({ ...e, ort:v })} placeholder="Ort" style={{ fontFamily:MONO, fontSize:9, letterSpacing:'0.14em', color:'rgba(var(--text-rgb),calc(0.65*var(--kt) + var(--tb)))', flex:1 }}/>
                  </div>
                  <LiveInput value={e.tat} onChange={v => set({ ...e, tat:v })} placeholder="Tätigkeit" style={{ fontFamily:BODY, fontSize:12.5, color:'var(--white)', lineHeight:1.55 }}/>
                </div>
              )}/>
          </React.Fragment>
        )}

        {has('gewohnheiten') && (
          <React.Fragment>
            {edHead('Angewohnheiten', ['gewohnheiten'], 'gewohnheiten')}
            {strList('gewohnheiten', 'gew', 'Angewohnheit', 'col', (t, i, set) => <div style={bar}><LiveArea value={t} onChange={set} placeholder="Angewohnheit …"/></div>)}
          </React.Fragment>
        )}

        {has('motive') && (
          <React.Fragment>
            {edHead('Motivationen', ['motive'], 'motive')}
            {strList('motivationen', 'mot', 'Motivation', 'col', (t, i, set) => <div style={bar}><LiveArea value={t} onChange={set} placeholder="Motivation …"/></div>)}
          </React.Fragment>
        )}

        {has('pers') && (
          <React.Fragment>
            {edHead('Eigenschaften', [])}
            {strList('eigenschaften', 'eig', 'Eigenschaft', 'wrap', (t, i, set) => (
              <span style={{ display:'inline-block', padding:'5px 10px', fontFamily:MONO, fontSize:9.5, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--white)', background:hexA(acc, 0.14), border:`1px solid ${hexA(acc, 0.45)}`, borderRadius:2 }}>
                <LiveInput fit value={t} onChange={set} placeholder="Eigenschaft"/>
              </span>
            ))}
            {edHead('Talente', [])}
            {strList('talente', 'tal', 'Talent', 'grid', (t, i, set) => (
              <div style={{ ...bar, display:'flex', alignItems:'center', gap:6 }}>
                <span style={{ color:acc, fontSize:6, flexShrink:0 }}>⬢</span><LiveInput value={t} onChange={set} placeholder="Talent …"/>
              </div>
            ), 2)}
            {edHead('Makel', [])}
            {strList('makel', 'mak', 'Makel', 'col', (t, i, set) => (
              <div style={{ padding:'10px 14px', border:'1px solid rgba(227,103,96,0.4)', background:'rgba(227,103,96,0.06)', fontFamily:BODY, fontSize:12.5, fontStyle:'italic', color:'color-mix(in srgb, rgba(240,200,200,0.85), rgb(var(--ink-rgb)) var(--cm))', lineHeight:1.65 }}>
                <LiveArea value={t} onChange={set} placeholder="Makel …"/>
              </div>
            ))}
          </React.Fragment>
        )}
            {addRow('pers')}
          </React.Fragment>
        )}

        {tab === 'bez' && (
          <React.Fragment>
        {has('begleiter') && (
          <React.Fragment>
            {edHead('Begleiter', ['begleiter'], 'begleiter')}
            <LiveList items={sel.begleiter} onChange={a => updSel('begleiter', a)} make={() => ({ name:'', art:'' })} layout="col" addLabel="Begleiter"
              eye={i => { const fi = fIdx(sel.begleiter, i); return fi !== null ? eyeFor(`beg-${fi}`) : <span style={{ width:15 }}/>; }}
              render={(b, i, set) => (
                <div style={{ display:'flex', alignItems:'center', gap:14, padding:'10px 12px', border:`1px solid ${hexA(acc, 0.3)}`, background:hexA(acc, 0.05), borderRadius:3 }}>
                  <span style={{ width:36, height:36, display:'flex', alignItems:'center', justifyContent:'center', background:hexA(acc, 0.12), border:`1px solid ${hexA(acc, 0.45)}`, borderRadius:'50%', color:acc, fontSize:14, flexShrink:0 }}>◈</span>
                  <span style={{ flex:1, minWidth:0 }}>
                    <LiveInput value={b.name} onChange={v => set({ ...b, name:v })} placeholder="Name" style={{ fontFamily:DISP, fontSize:13, letterSpacing:'0.08em', color:'var(--white)' }}/>
                    <LiveInput value={b.art} onChange={v => set({ ...b, art:v })} placeholder="Art — z.B. Rabe, Vertrauter" style={{ fontFamily:BODY, fontSize:11.5, color:'rgba(var(--text-rgb),calc(0.65*var(--kt) + var(--tb)))', marginTop:2 }}/>
                  </span>
                </div>
              )}/>
          </React.Fragment>
        )}

        {has('kontakte') && (
          <React.Fragment>
            {edHead('Kontakte', ['kontakte'], 'kontakte')}
            <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
              {[['◇ Familie','familie','fam','var(--lav)'],['◆ Freunde','freunde','fre','#5fe39a'],['⚔ Rivalen','rivalen','riv','#e36760']].map(([title, sub, prefix, color]) => (
                <div key={sub}>
                  <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:6 }}>
                    <span style={{ fontFamily:MONO, fontSize:8.5, letterSpacing:'0.24em', color, textTransform:'uppercase' }}>{title}</span>
                    <div style={{ flex:1, height:1, background:'rgba(var(--accent-rgb),calc(0.12*var(--ka)))' }}/>
                  </div>
                  <LiveList items={kon[sub]} onChange={a => updSel('kontakte', { ...kon, [sub]:a })} make={() => ({ name:'', rolle:'' })} layout="col" addLabel={title.slice(2)}
                    eye={i => { const fi = fIdx(kon[sub] || [], i); return fi !== null ? eyeFor(`${prefix}-${fi}`) : <span style={{ width:15 }}/>; }}
                    render={(p, i, set) => {
                      const nm = (p.name || '').trim();
                      const linked = nm ? nscs.find(n => n.id !== sel.id && n.name === nm) : null;
                      const isPc = !linked && nm && charPersp.some(c => c.label === nm);
                      const kCol = isPc ? '#ffb850' : color;
                      return (
                        <div style={{ display:'flex', alignItems:'center', gap:12, padding:'8px 10px', background:hexA(acc, 0.025), border:`1px solid ${hexA(acc, 0.18)}`, borderRadius:3 }}>
                          <span style={{ width:34, height:34, flexShrink:0, borderRadius:3, overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center',
                            background:(linked && linked.bild) ? '#000' : hexA(kCol, 0.12), border:`1px solid ${hexA(kCol, 0.55)}`, fontFamily:DISP, fontSize:11, color:'var(--white)' }}>
                            {(linked && linked.bild)
                              ? <img src={linked.bild} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top' }}/>
                              : (nm.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase().slice(0, 2) || '?')}
                          </span>
                          <span style={{ flex:1, minWidth:0 }}>
                            <LiveNamePicker value={p.name} onChange={v => set({ ...p, name:v })} placeholder="Name wählen oder eintippen" options={kontaktOpts}
                              style={{ fontFamily:DISP, fontSize:13, letterSpacing:'0.04em', color:'var(--white)' }}/>
                            <LiveInput value={p.rolle} onChange={v => set({ ...p, rolle:v })} placeholder="Rolle / Beziehung"
                              style={{ fontFamily:MONO, fontSize:9, letterSpacing:'0.16em', color:'rgba(var(--text-rgb),calc(0.55*var(--kt) + var(--tb)))', textTransform:'uppercase', marginTop:2 }}/>
                          </span>
                          {linked && <button title="Diesen NSC öffnen" onClick={() => openNsc(linked.id)} style={{ background:'transparent', border:'none', cursor:'pointer', fontFamily:MONO, fontSize:11, color:'rgba(var(--accent-rgb),calc(0.5*var(--ka) + var(--tb)))' }}>→</button>}
                          {nm && !linked && !isPc && createFromContact && (
                            <button title="Neuen NSC mit diesem Namen anlegen (mit Gegenkontakt)" onClick={() => createFromContact(nm, sub)} className="nscv-live-add" style={{ whiteSpace:'nowrap' }}>✦ NSC anlegen</button>
                          )}
                          {isPc && <span title="Spielercharakter" style={{ fontFamily:MONO, fontSize:8, letterSpacing:'0.12em', color:'#ffb850' }}>◈ SC</span>}
                        </div>
                      );
                    }}/>
                </div>
              ))}
            </div>
          </React.Fragment>
        )}
            {addRow('bez')}
          </React.Fragment>
        )}

        {tab === 'ausr' && (
          <React.Fragment>
        {has('ausr') && (
          <React.Fragment>
            {edHead('Ausrüstung & Gegenstände', ['ausr'], 'ausr')}
            <LiveList items={sel.ausruestung} onChange={a => updSel('ausruestung', a)} make={() => ({ name:'', beschreibung:'' })} layout="grid" cols={3} addLabel="Gegenstand"
              eye={i => { const fi = fIdx(sel.ausruestung, i); return fi !== null ? eyeFor(`aus-${fi}`) : <span style={{ width:15 }}/>; }}
              render={(e, i, set) => (
                <div style={{ padding:'10px 12px', background:hexA(acc, 0.06), border:`1px solid ${hexA(acc, 0.30)}`, borderLeft:`3px solid ${hexA(acc, 0.75)}`, borderRadius:2, minHeight:60 }}>
                  <LiveInput value={e.name} onChange={v => set({ ...e, name:v })} placeholder="Gegenstand" style={{ fontFamily:DISP, fontSize:13, letterSpacing:'0.05em', color:'var(--white)' }}/>
                  <LiveInput value={e.beschreibung} onChange={v => set({ ...e, beschreibung:v })} placeholder="Beschreibung" style={{ fontFamily:BODY, fontSize:11, color:'rgba(var(--text-rgb),calc(0.55*var(--kt) + var(--tb)))', marginTop:4 }}/>
                </div>
              )}/>
            <div style={{ display:'flex', alignItems:'center', gap:12, marginTop:14, padding:'12px 16px', borderRadius:3, border:'1px solid rgba(214,178,92,0.5)', background:'linear-gradient(135deg, rgba(214,178,92,0.10), rgba(214,178,92,0.03))' }}>
              <span style={{ fontFamily:MONO, fontSize:8.5, letterSpacing:'0.3em', textTransform:'uppercase', color:'color-mix(in srgb, rgba(214,178,92,0.8), rgb(var(--ink-rgb)) var(--cm))' }}>◈ Vermögen</span>
              <span style={{ flex:1 }}/>
              <div style={{ width:130 }}>
                <LiveInput type="number" value={sel.habe || 0} onChange={v => updSel('habe', Math.max(0, parseInt(v) || 0))} format={v => Number(v).toLocaleString('de-DE')}
                  style={{ textAlign:'right', fontFamily:MONO, fontSize:14, letterSpacing:'0.1em', color:'#e8c878' }}/>
              </div>
              <span style={{ fontFamily:MONO, fontSize:9, color:'color-mix(in srgb, rgba(214,178,92,0.7), rgb(var(--ink-rgb)) var(--cm))', letterSpacing:'0.1em' }}>HADE</span>
              {eyeFor('habe')}
            </div>
          </React.Fragment>
        )}
            {addRow('ausr')}
          </React.Fragment>
        )}

        {tab === 'geh' && (
          <React.Fragment>
        {has('geheim') && (
          <React.Fragment>
            {edHead('Geheimnisse', [], 'geheim', 'entfernen', '#e36760')}
            <LiveList items={sel.geheimnisse} onChange={a => updSel('geheimnisse', a)} make={() => ({ text:'', vis:false })} layout="col" addLabel="Geheimnis"
              render={(g, i, set) => (
                <div style={{ padding:'12px 14px', border:'1px solid rgba(227,103,96,0.4)', background:'linear-gradient(135deg, rgba(227,103,96,0.10), rgba(227,103,96,0.04))', borderRadius:2, position:'relative', fontFamily:BODY, fontSize:12.5, color:'var(--white)', lineHeight:1.6 }}>
                  <div style={{ position:'absolute', top:-1, left:-1, padding:'2px 6px', background:'rgba(227,103,96,0.20)', border:'1px solid rgba(227,103,96,0.55)', fontFamily:MONO, fontSize:7.5, letterSpacing:'0.22em', color:'#e36760', textTransform:'uppercase' }}>Geheim · {String(i + 1).padStart(2, '0')}</div>
                  <div style={{ marginTop:14 }}><LiveArea value={g.text} onChange={v => set({ ...g, text:v })} placeholder="Geheimnis …"/></div>
                </div>
              )}/>
          </React.Fragment>
        )}
            {addRow('geh')}
          </React.Fragment>
        )}

        {tab === 'sb' && (
          <React.Fragment>
        {has('statblock') && <div style={{ marginTop:22 }}>{sbSlot}</div>}
            {addRow('sb')}
          </React.Fragment>
        )}

        {tab === 'haltung' && (
          <React.Fragment>
            {hint('Haltung gegenüber der Gruppe — gilt für alle Charaktere, außer bei Ausnahmen')}
            {haltungSlot}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      {!dmView && <div style={{ display:'flex', alignItems:'center', gap:8, margin:'18px 0 18px', flexWrap:'wrap' }}>
        <span style={dmView
          ? { padding:'6px 13px', fontFamily:MONO, fontSize:8.5, letterSpacing:'0.14em', textTransform:'uppercase', borderRadius:3, background:'rgba(255,184,80,0.16)', border:'1px solid rgba(255,184,80,0.7)', color:'#ffb850' }
          : { padding:'6px 13px', fontFamily:MONO, fontSize:8.5, letterSpacing:'0.14em', textTransform:'uppercase', borderRadius:3, background:'rgba(var(--purple-rgb),calc(0.2*var(--kp)))', border:'1px solid rgba(var(--purple-rgb),calc(0.7*var(--kp)))', color:'var(--white)' }}>
          {dmView ? '◈ DM (Spielleitung)' : perspName + ' · ' + allKeys.filter(k => uSet.has(k)).length + '/' + allKeys.length}
        </span>
        <div style={{ flex:1 }}/>
        {!dmView && (
          <React.Fragment>
            <button onClick={() => setU([...new Set(allKeys)])}
              style={{ padding:'6px 12px', background:'rgba(95,227,154,0.08)', border:'1px solid rgba(95,227,154,0.35)', borderRadius:3, color:'color-mix(in srgb, rgba(95,227,154,0.75), rgb(var(--ink-rgb)) var(--cm))', fontFamily:MONO, fontSize:8, letterSpacing:'0.14em', textTransform:'uppercase', cursor:'pointer' }}>◉ Alles freischalten</button>
            <button onClick={() => setU([])}
              style={{ padding:'6px 12px', background:'transparent', border:'1px solid rgba(var(--accent-rgb),calc(0.25*var(--ka)))', borderRadius:3, color:'rgba(var(--text-rgb),calc(0.5*var(--kt) + var(--tb)))', fontFamily:MONO, fontSize:8, letterSpacing:'0.14em', textTransform:'uppercase', cursor:'pointer' }}>○ Alles sperren</button>
          </React.Fragment>
        )}
      </div>}

      <div style={{ background:'rgba(var(--panel-rgb),0.99)', border:`1px solid ${hexA(acc, 0.33)}`, borderRadius:6, boxShadow:`0 10px 50px rgba(var(--shadow-rgb),calc(0.5 * var(--shadow-k))), 0 0 80px ${hexA(acc, 0.10)}`, overflow:'clip', position:'relative' }}>
        {dv.logo && (
          <span style={{ position:'absolute', right:25, top:20, width:340, height:340, background:`center / contain no-repeat url("${dv.logo}")`, opacity:0.06, pointerEvents:'none' }}/>
        )}
        {EDIT && <div style={{ position:'absolute', top:14, right:16, zIndex:6 }}>{visSlot}</div>}
        {EDIT && pickBild && <BildPicker current={sel.bild || ''} onClose={() => setPickBild(false)} onPick={p => { updSel('bild', p); setPickBild(false); }}/>}
        {!EDIT && (
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 22px', borderBottom:`1px solid ${hexA(acc, 0.2)}` }}>
          <span style={{ fontFamily:MONO, fontSize:8, letterSpacing:'0.3em', color:'rgba(var(--accent-rgb),calc(0.5*var(--ka) + var(--tb)))', textTransform:'uppercase' }}>
            № {String(sel.id).slice(0, 8).toUpperCase()} · {divisionOpen && sel.division !== 'Keine' ? divOf(sel.division).roman + ' · ' + sel.division : 'NSC'} · Ansicht: {perspName}
          </span>
          <span style={{ fontFamily:MONO, fontSize:8, letterSpacing:'0.2em', color:'rgba(var(--accent-rgb),calc(0.35*var(--ka) + var(--tb)))', textTransform:'uppercase' }}>NSC-Register · Spieleransicht</span>
        </div>
        )}
        <div style={{ display:'flex', gap:22, padding:'24px 26px 14px', alignItems:'flex-start' }}>
          <div style={{ display:'flex', flexDirection:'column', gap:8, width:150, flexShrink:0 }}>
          <div onClick={onPortraitClick} title={sel.bild ? 'Zum Vergrößern klicken' : undefined} style={{ position:'relative', width:150, height:150, flexShrink:0, cursor:sel.bild && EDIT ? 'zoom-in' : undefined }}>
            <svg width="150" height="150" viewBox="0 0 150 150" style={{ position:'absolute', inset:0, pointerEvents:'none', overflow:'visible', filter:`drop-shadow(0 0 12px ${hexA(acc, stage === 0 ? 0.2 : 0.45)})`, zIndex:3 }}>
              <polygon points={hexPts(3)} fill="none" stroke={acc} strokeWidth="1.6" strokeOpacity={stage === 0 ? 0.4 : 1} strokeDasharray={stage === 0 ? '4 4' : 'none'} strokeLinejoin="miter"/>
              <polygon points={hexPts(12)} fill="none" stroke={acc} strokeWidth="0.6" strokeOpacity={stage === 0 ? 0.15 : 0.45} strokeLinejoin="miter"/>
            </svg>
            <div style={{ position:'absolute', inset:0, overflow:'hidden', clipPath:hexClip, background:sel.bild ? '#000' : hexA(acc, 0.08) }}>
              {sel.bild && (stage > 0 || EDIT) && <img src={sel.bild} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top' }}/>}
            </div>
            {stage === 0 && !EDIT && (
              <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:MONO, fontSize:44, fontWeight:700, color:'rgba(var(--purple-rgb),calc(0.85*var(--kp) + var(--tb)))', textShadow:'0 0 14px rgba(var(--purple-rgb),calc(0.7*var(--kp))), 0 0 30px rgba(var(--purple-rgb),calc(0.4*var(--kp)))', animation:'pulse-glow 2.5s ease-in-out infinite', pointerEvents:'none', zIndex:4, background:'rgba(var(--bg-rgb),0.6)', clipPath:hexClip }}>?</div>
            )}
          </div>
          {EDIT && (
            <div style={{ display:'flex', alignItems:'center', gap:4, width:125, alignSelf:'center' }}>
              <button onClick={() => setPickBild(true)} title={sel.bild ? 'Anderes Bild auswählen' : 'Bild aus den Projektordnern auswählen'}
                style={{ flex:1, minWidth:0, height:30, padding:'0 6px', background:'rgba(var(--purple-rgb),calc(0.1*var(--kp)))', border:'1px solid rgba(var(--purple-rgb),calc(0.45*var(--kp)))', borderRadius:3, color:'var(--white)', fontFamily:MONO, fontSize:8.5, letterSpacing:'0.1em', textTransform:'uppercase', cursor:'pointer', whiteSpace:'nowrap' }}>{sel.bild ? 'Bild ändern' : 'Bild einfügen'}</button>
              {eyeFor('bild')}
            </div>
          )}
          </div>
          <div style={{ flex:1, minWidth:0, paddingTop:6 }}>
            {EDIT ? (
              <React.Fragment>
                <LiveInput value={sel.titel} onChange={v => updSel('titel', v)} placeholder="Titel oder Beiname (optional)"
                  style={{ fontFamily:MONO, fontSize:9, letterSpacing:'0.18em', color:acc, textTransform:'uppercase', marginBottom:4 }}/>
                <span style={{ display:'flex', alignItems:'center', gap:8 }}>
                  <LiveInput value={sel.name} onChange={v => updSel('name', v)} placeholder="Name"
                    style={{ fontFamily:DISP, fontWeight:400, fontSize:26, letterSpacing:'0.10em', color:'var(--white)', lineHeight:1.15 }}/>
                  {eyeFor('name')}
                </span>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {sel.titel && (
                  <div style={{ fontFamily:MONO, fontSize:9, letterSpacing:'0.18em', color:acc, textTransform:'uppercase', marginBottom:4 }}>{sel.titel}</div>
                )}
                <div style={{ fontFamily:DISP, fontWeight:400, fontSize:26, letterSpacing:'0.10em', color:stage === 0 ? 'rgba(var(--accent-rgb),calc(0.45*var(--ka)))' : 'var(--white)', lineHeight:1.15, textShadow:`0 0 18px ${hexA(acc, 0.4)}` }}>
                  {stage === 0 ? scrName : sel.name}
                </div>
              </React.Fragment>
            )}
            <div style={{ marginTop:8, display:'flex', flexWrap:'wrap', gap:8, alignItems:'baseline' }}>
              {[(dmView || pOpen('rasse','rasse')) ? sel.rasse : null,
                (dmView || pOpen('geschlecht','geschlecht')) ? sel.geschlecht : null,
                (dmView || pOpen('alter','alter')) && sel.alter ? sel.alter + ' Jahre' : null]
                .filter(Boolean).map((t, i) => (
                  <span key={i} style={{ fontFamily:MONO, fontSize:9, letterSpacing:'0.18em', color:acc, textTransform:'uppercase' }}>{t}</span>
                ))}
            </div>
            {EDIT ? heroSlot : <div style={{ marginTop:12, display:'flex', flexWrap:'wrap', gap:5 }}>
              {((dmView || !window.nscEffectiveStatus) ? (sel.status || []) : window.nscEffectiveStatus(sel, persp)).map(name => {
                const def = (STATUS_DEF || {})[name] || { color:'var(--silver)', glyph:'◇' };
                return (
                  <span key={name} style={{ fontFamily:MONO, fontSize:8.5, letterSpacing:'0.12em', textTransform:'uppercase', padding:'3px 9px', background:hexA(def.color, 0.12), border:`1px solid ${hexA(def.color, 0.4)}`, borderRadius:2, color:hexA(def.color, 0.95) }}>{def.glyph} {name}</span>
                );
              })}
              {dmView && charPersp.filter(c => (sel.haltungOverrides || {})[c.id]).map(c => {
                const name = sel.haltungOverrides[c.id];
                const def = (STATUS_DEF || {})[name] || { color:'var(--silver)', glyph:'◇' };
                return (
                  <span key={'ov-' + c.id} title="Abweichende Haltung für diesen Charakter"
                    style={{ fontFamily:MONO, fontSize:8, letterSpacing:'0.1em', textTransform:'uppercase', padding:'3px 8px', border:`1px dashed ${hexA(def.color, 0.5)}`, borderRadius:2, color:hexA(def.color, 0.8) }}>± {c.label}: {name}</span>
                );
              })}
            </div>}
            {EDIT && !has('bio') && (
              <button onClick={() => addSection('bio')}
                style={{ marginTop:14, padding:'7px 14px', background:'transparent', border:'1px dashed rgba(var(--purple-rgb),calc(0.4*var(--kp)))', borderRadius:20, color:'rgba(var(--text-rgb),calc(0.6*var(--kt) + var(--tb)))', fontFamily:BODY, fontSize:12, cursor:'pointer' }}>＋ Biografie</button>
            )}
            {EDIT && has('bio') && (
              <React.Fragment>
                {edHead('Biografie', ['bio'], 'bio')}
                <div style={{ padding:'12px 16px', border:`1px solid ${hexA(acc, 0.25)}`, background:hexA(acc, 0.04), fontFamily:BODY, fontSize:13, lineHeight:1.75, color:'var(--silver)' }}>
                  <LiveArea value={sel.biografie} onChange={v => updSel('biografie', v)} placeholder="Die Geschichte dieses NSC — Herkunft, Werdegang, prägende Ereignisse …" style={{ minHeight:90 }}/>
                </div>
              </React.Fragment>
            )}

          </div>
        </div>
        <div style={{ padding:'12px 26px 40px' }}>

          {/* Vertrautheit */}
          {!EDIT && (
          <div style={{ border:`1px solid ${aFn(0.35)}`, background:aFn(0.06), padding:'14px 16px', borderRadius:3, marginBottom:6, boxShadow:isMax ? `0 0 26px ${GOLDA(0.35)}` : 'none' }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:10, gap:10 }}>
              <span style={{ fontFamily:MONO, fontSize:8.5, letterSpacing:'0.3em', color:aFn(0.85), textTransform:'uppercase' }}>{isMax ? '✓ Eingeweiht' : '◈ Vertrautheit'}</span>
              <span style={{ fontFamily:MONO, fontSize:8.5, letterSpacing:'0.22em', color:mainAcc, textTransform:'uppercase' }}>{stage} / 4 · {STG[stage]}</span>
            </div>
            <div style={{ display:'flex', gap:4, marginBottom:8 }}>
              {[1,2,3,4].map(i => {
                const filled = i <= stage;
                return (
                  <div key={i} style={{ flex:1, minWidth:0 }}>
                    <div style={{ height:5, borderRadius:2, background:filled ? mainAcc : 'rgba(var(--purple-rgb),calc(0.08*var(--kp)))', border:`1px solid ${filled ? aFn(0.9) : aFn(0.2)}`, boxShadow:filled ? `0 0 8px ${aFn(0.5)}, inset 0 0 3px ${aFn(0.3)}` : 'none', transition:'all 0.4s' }}/>
                    <div style={{ marginTop:4, textAlign:'center', fontFamily:MONO, fontSize:7, color:filled ? aFn(0.85) : 'rgba(var(--accent-rgb),calc(0.32*var(--ka)))', letterSpacing:'0.10em', textTransform:'uppercase', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{STG[i]}</div>
                  </div>
                );
              })}
            </div>
          </div>
          )}

          {EDIT ? liveBody() : (
            <React.Fragment>
          {/* Erscheinung & Auftreten */}
          {has('pers') && (sel.unvergesslich || '').trim() && (
            <React.Fragment>
              {secHead('Erscheinung & Auftreten', unvOpen ? 1 : 0, 1, mkTg('pers', 'unvergesslich'))}
              {unvOpen
                ? <div style={{ padding:'10px 14px', border:`1px solid ${hexA(acc, 0.25)}`, background:hexA(acc, 0.04), fontFamily:BODY, fontSize:13, lineHeight:1.7, color:'var(--silver)' }}>{sel.unvergesslich}</div>
                : lockRow}
            </React.Fragment>
          )}

          {/* Voller Name */}
          {pvVna && (
            <React.Fragment>
              {secHead('Voller Name', openCount(pvVna.rows), pvVna.rows.length, mkTgAll('vname', pvVna.keys))}
              <div style={{ display:'flex', flexWrap:'wrap', gap:8, alignItems:'center' }}>
                {pvVna.rows.map((r, i) => (
                  <span key={i} style={{ display:'inline-flex', alignItems:'center', gap:2 }}>
                    <span style={r.open
                      ? { padding:'4px 10px', fontFamily:DISP, fontSize:14, letterSpacing:'0.06em', background:hexA(acc, 0.10), border:`1px solid ${hexA(acc, 0.45)}`, color:'var(--white)', borderRadius:2 }
                      : { padding:'4px 10px', fontFamily:DISP, fontSize:14, fontStyle:'italic', color:'rgba(var(--text-rgb),calc(0.45*var(--kt) + var(--tb)))', background:'rgba(var(--purple-rgb),calc(0.04*var(--kp)))', border:'1px solid rgba(var(--purple-rgb),calc(0.18*var(--kp)))', borderRadius:2 }}>
                      {r.open ? r.t : '· · · · ·'}
                    </span>
                    {r.tg}
                  </span>
                ))}
              </div>
            </React.Fragment>
          )}

          {/* Biografie */}
          {has('bio') && bioText && (
            <React.Fragment>
              {secHead('Biografie', bioOpen ? 1 : 0, 1, mkTg('bio', 'bio'))}
              {bioOpen
                ? <div style={{ padding:'12px 16px', border:`1px solid ${hexA(acc, 0.25)}`, background:hexA(acc, 0.04), fontFamily:BODY, fontSize:13, lineHeight:1.75, color:'var(--silver)', whiteSpace:'pre-wrap' }}>{bioText}</div>
                : lockRow}
            </React.Fragment>
          )}

          {/* Aussehen */}
          {has('aussehen') && ashRows.length > 0 && (
            <React.Fragment>
              {secHead('Aussehen', aussehenOpen ? 1 : 0, 1, mkTg('aussehen', 'aussehen'))}
              {aussehenOpen
                ? <div style={{ padding:'12px 16px', border:`1px solid ${hexA(acc, 0.25)}`, background:hexA(acc, 0.04), display:'grid', gridTemplateColumns:'repeat(3, minmax(0, 1fr))', gap:'10px 26px' }}>
                    {ashRows.map(r => (
                      <div key={r.k} style={(r.k === 'merkmale' || r.k === 'weiteres') ? { gridColumn:'1 / -1' } : null}>
                        <span style={{ fontFamily:MONO, fontSize:8, letterSpacing:'0.2em', color:'rgba(var(--accent-rgb),calc(0.48*var(--ka) + var(--tb)))', textTransform:'uppercase', display:'block', marginBottom:2 }}>{r.label}</span>
                        <span style={{ fontFamily:BODY, fontWeight:300, fontSize:13, color:'var(--white)', lineHeight:1.6, whiteSpace:'pre-wrap', display:'block' }}>{r.v}</span>
                      </div>
                    ))}
                  </div>
                : lockRow}
            </React.Fragment>
          )}

          {eckBlock}

          {/* Routine */}
          {has('routine') && (sel.routine || []).length > 0 && (
            <React.Fragment>
              {(() => {
                const keys = sel.routine.map((_, i) => 'rou-' + i);
                const rows = sel.routine.map((e, i) => ({ e, open:dmView || pOpen('routine', keys[i]), tg:mkTg('routine', keys[i]) }));
                return (
                  <React.Fragment>
                    {secHead('Routine', rows.filter(r => r.open).length, rows.length, mkTgAll('routine', keys))}
                    <div style={{ position:'relative', paddingLeft:32 }}>
                      <div style={{ position:'absolute', left:15, top:14, bottom:14, width:1, background:`linear-gradient(180deg, ${hexA(acc, 0.55)} 0%, ${hexA(acc, 0.15)} 100%)`, pointerEvents:'none' }}/>
                      <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
                        {rows.map((r, i) => (
                          <div key={i} style={{ position:'relative', display:'flex', gap:8, alignItems:'flex-start' }}>
                            <span style={{ position:'absolute', left:-32, top:8, width:32, textAlign:'center', color:acc, fontSize:13, lineHeight:1, textShadow:`0 0 6px ${hexA(acc, 0.7)}, 0 0 14px ${hexA(acc, 0.35)}`, opacity:r.open ? 1 : 0.3 }}>✦</span>
                            <div style={{ padding:'8px 12px', background:hexA(acc, 0.05), border:`1px solid ${hexA(acc, 0.25)}`, borderLeft:`2px solid ${hexA(acc, 0.7)}`, borderRadius:2, opacity:r.open ? 1 : 0.38, flex:1, minWidth:0 }}>
                              <div style={{ display:'flex', alignItems:'baseline', gap:10, flexWrap:'wrap', marginBottom:3 }}>
                                <span style={{ fontFamily:MONO, fontSize:9, letterSpacing:'0.22em', color:acc, textTransform:'uppercase' }}>{r.e.zeit || '—'}</span>
                                <span style={{ fontFamily:MONO, fontSize:9, letterSpacing:'0.14em', color:'rgba(var(--text-rgb),calc(0.65*var(--kt) + var(--tb)))' }}>{r.e.ort || ''}</span>
                              </div>
                              <div style={{ fontFamily:BODY, fontSize:12.5, color:'var(--white)', lineHeight:1.55 }}>{r.e.tat || ''}</div>
                            </div>
                            {r.tg}
                          </div>
                        ))}
                      </div>
                    </div>
                  </React.Fragment>
                );
              })()}
            </React.Fragment>
          )}

          {/* Angewohnheiten */}
          {pvGew && (
            <React.Fragment>
              {secHead('Angewohnheiten', openCount(pvGew.rows), pvGew.rows.length, mkTgAll('gewohnheiten', pvGew.keys))}
              <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
                {pvGew.rows.map((r, i) => (
                  <div key={i} style={{ display:'flex', gap:8, alignItems:'center' }}>
                    <div style={{ padding:'6px 10px 6px 8px', borderLeft:`2px solid ${hexA(acc, 0.55)}`, background:hexA(acc, 0.05), fontFamily:BODY, fontSize:12.5, color:'var(--white)', lineHeight:1.55, flex:1, minWidth:0, opacity:r.open ? 1 : 0.38 }}>{r.t}</div>
                    {r.tg}
                  </div>
                ))}
              </div>
            </React.Fragment>
          )}

          {/* Motivationen */}
          {pvMot && (
            <React.Fragment>
              {secHead('Motivationen', openCount(pvMot.rows), pvMot.rows.length, mkTgAll('motive', pvMot.keys))}
              <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
                {pvMot.rows.map((r, i) => (
                  <div key={i} style={{ display:'flex', gap:8, alignItems:'center' }}>
                    <div style={{ padding:'6px 10px 6px 8px', borderLeft:`2px solid ${hexA(acc, 0.55)}`, background:hexA(acc, 0.05), fontFamily:BODY, fontSize:12.5, color:'var(--white)', lineHeight:1.55, flex:1, minWidth:0, opacity:r.open ? 1 : 0.38 }}>{r.t}</div>
                    {r.tg}
                  </div>
                ))}
              </div>
            </React.Fragment>
          )}

          {/* Eigenschaften */}
          {pvEig && (
            <React.Fragment>
              {secHead('Eigenschaften', openCount(pvEig.rows), pvEig.rows.length, mkTgAll('pers', pvEig.keys))}
              <div style={{ display:'flex', flexWrap:'wrap', gap:8, alignItems:'center' }}>
                {pvEig.rows.map((r, i) => (
                  <span key={i} style={{ display:'inline-flex', alignItems:'center', gap:2 }}>
                    <span style={{ padding:'5px 10px', fontFamily:MONO, fontSize:9.5, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--white)', background:hexA(acc, 0.14), border:`1px solid ${hexA(acc, 0.45)}`, borderRadius:2, opacity:r.open ? 1 : 0.38 }}>{r.t}</span>
                    {r.tg}
                  </span>
                ))}
              </div>
            </React.Fragment>
          )}

          {/* Talente */}
          {pvTal && (
            <React.Fragment>
              {secHead('Talente', openCount(pvTal.rows), pvTal.rows.length, mkTgAll('pers', pvTal.keys))}
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4px 14px' }}>
                {pvTal.rows.map((r, i) => (
                  <div key={i} style={{ display:'flex', gap:6, alignItems:'center' }}>
                    <div style={{ display:'block', flex:1, minWidth:0, padding:'5px 10px 5px 8px', borderLeft:`2px solid ${hexA(acc, 0.55)}`, background:hexA(acc, 0.05), fontFamily:BODY, fontSize:12.5, color:'var(--white)', opacity:r.open ? 1 : 0.38 }}>
                      <span style={{ color:acc, fontSize:6, position:'relative', top:-2, display:'inline-block', marginRight:6 }}>⬢</span>{r.t}
                    </div>
                    {r.tg}
                  </div>
                ))}
              </div>
            </React.Fragment>
          )}

          {/* Makel */}
          {pvMak && (
            <React.Fragment>
              {secHead('Makel', openCount(pvMak.rows), pvMak.rows.length, mkTgAll('pers', pvMak.keys))}
              <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
                {pvMak.rows.map((r, i) => (
                  <div key={i} style={{ display:'flex', gap:8, alignItems:'center' }}>
                    <div style={{ flex:1, minWidth:0, padding:'10px 14px', border:'1px solid rgba(227,103,96,0.4)', background:'rgba(227,103,96,0.06)', fontFamily:BODY, fontSize:12.5, fontStyle:'italic', color:'color-mix(in srgb, rgba(240,200,200,0.85), rgb(var(--ink-rgb)) var(--cm))', lineHeight:1.65, opacity:r.open ? 1 : 0.38 }}>{r.t}</div>
                    {r.tg}
                  </div>
                ))}
              </div>
            </React.Fragment>
          )}

          {/* Begleiter */}
          {has('begleiter') && begList.length > 0 && (
            <React.Fragment>
              {(() => {
                const keys = begList.map((_, i) => 'beg-' + i);
                const rows = begList.map((b, i) => ({ b, open:dmView || pOpen('begleiter', keys[i]), tg:mkTg('begleiter', keys[i]) }));
                return (
                  <React.Fragment>
                    {secHead('Begleiter', rows.filter(r => r.open).length, rows.length, mkTgAll('begleiter', keys))}
                    <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
                      {rows.map((r, i) => (
                        <div key={i} style={{ display:'flex', alignItems:'center', gap:14, padding:'10px 12px', border:`1px solid ${hexA(acc, 0.3)}`, background:hexA(acc, 0.05), borderRadius:3, opacity:r.open ? 1 : 0.38 }}>
                          <span style={{ width:36, height:36, display:'flex', alignItems:'center', justifyContent:'center', background:hexA(acc, 0.12), border:`1px solid ${hexA(acc, 0.45)}`, borderRadius:'50%', color:acc, fontSize:14, flexShrink:0 }}>◈</span>
                          <span style={{ flex:1, minWidth:0 }}>
                            <span style={{ display:'block', fontFamily:DISP, fontSize:13, letterSpacing:'0.08em', color:'var(--white)' }}>{r.b.name}</span>
                            <span style={{ display:'block', fontFamily:BODY, fontSize:11.5, color:'rgba(var(--text-rgb),calc(0.65*var(--kt) + var(--tb)))', marginTop:2 }}>{r.b.art || ''}</span>
                          </span>
                          {r.tg}
                        </div>
                      ))}
                    </div>
                  </React.Fragment>
                );
              })()}
            </React.Fragment>
          )}

          {/* Ausrüstung & Gegenstände */}
          {pvAus && (
            <React.Fragment>
              {secHead('Ausrüstung & Gegenstände', openCount(pvAus.rows), pvAus.rows.length, mkTgAll('ausr', pvAus.keys))}
              <div style={{ display:'grid', gridTemplateColumns:'repeat(3, minmax(0, 1fr))', gap:8 }}>
                {pvAus.rows.map((r, i) => (
                  <div key={i} style={{ display:'flex', flexDirection:'column', gap:4 }}>
                    <div style={{ padding:'10px 12px', background:hexA(acc, 0.06), border:`1px solid ${hexA(acc, 0.30)}`, borderLeft:`3px solid ${hexA(acc, 0.75)}`, borderRadius:2, fontFamily:DISP, fontSize:13, letterSpacing:'0.05em', color:'var(--white)', lineHeight:1.3, minHeight:60, display:'flex', alignItems:'center', opacity:r.open ? 1 : 0.38 }}>{r.t}</div>
                    <div style={{ display:'flex', justifyContent:'flex-end' }}>{r.tg}</div>
                  </div>
                ))}
              </div>
            </React.Fragment>
          )}

          {/* Vermögen */}
          {habeShow && (
            <div style={{ display:'flex', alignItems:'center', gap:12, marginTop:14, padding:'12px 16px', borderRadius:3, border:`1px solid rgba(214,178,92,${habeOpen ? 0.5 : 0.25})`, background:'linear-gradient(135deg, rgba(214,178,92,0.10), rgba(214,178,92,0.03))', boxShadow:habeOpen ? '0 0 18px rgba(214,178,92,0.12)' : 'none', opacity:habeOpen ? 1 : 0.75 }}>
              <span style={{ fontFamily:MONO, fontSize:8.5, letterSpacing:'0.3em', textTransform:'uppercase', color:'color-mix(in srgb, rgba(214,178,92,0.8), rgb(var(--ink-rgb)) var(--cm))' }}>◈ Vermögen</span>
              <span style={{ flex:1 }}/>
              <span style={habeOpen
                ? { fontFamily:MONO, fontSize:14, letterSpacing:'0.1em', color:'#e8c878', textShadow:'0 0 10px rgba(214,178,92,0.4)' }
                : { fontFamily:MONO, fontSize:8.5, letterSpacing:'0.16em', textTransform:'uppercase', color:'color-mix(in srgb, rgba(214,178,92,0.4), rgb(var(--ink-rgb)) var(--cm))' }}>
                {habeOpen ? sel.habe.toLocaleString('de-DE') + ' Hade' : 'Noch nicht freigeschaltet'}
              </span>
              {mkTg('ausr', 'habe')}
            </div>
          )}

          {/* Kontakte */}
          {has('kontakte') && konKeys.length > 0 && (
            <React.Fragment>
              {(() => {
                let nOpen = 0;
                const groups = konGroups.map(g => ({
                  ...g,
                  rows:g.list.map((p, i) => {
                    const key = g.prefix + '-' + i;
                    const open = dmView || pOpen('kontakte', key);
                    if (open) nOpen++;
                    const linked = nscs.find(n => n.id !== sel.id && n.name === (p.name || '').trim());
                    const isPc = !linked && charPersp.some(c => c.label === (p.name || '').trim());
                    const kCol = isPc ? '#ffb850' : g.color;
                    return { p, key, open, linked, isPc, kCol, tg:mkTg('kontakte', key) };
                  }),
                }));
                return (
                  <React.Fragment>
                    {secHead('Kontakte', nOpen, konKeys.length, mkTgAll('kontakte', konKeys))}
                    <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
                      {groups.map(g => (
                        <div key={g.prefix}>
                          <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:6 }}>
                            <span style={{ fontFamily:MONO, fontSize:8.5, letterSpacing:'0.24em', color:g.color, textTransform:'uppercase' }}>{g.title}</span>
                            <div style={{ flex:1, height:1, background:'rgba(var(--accent-rgb),calc(0.12*var(--ka)))' }}/>
                          </div>
                          <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
                            {g.rows.map((r, i) => (
                              <div key={i} onClick={r.linked ? () => openNsc(r.linked.id) : undefined}
                                style={{ display:'flex', alignItems:'center', gap:12, padding:'8px 10px', background:hexA(acc, 0.025), border:`1px solid ${hexA(acc, 0.18)}`, borderRadius:3, opacity:r.open ? 1 : 0.38, cursor:r.linked ? 'pointer' : 'default' }}>
                                <span style={{ width:34, height:34, flexShrink:0, borderRadius:3, overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center',
                                  background:(r.linked && r.linked.bild) ? '#000' : hexA(r.kCol, 0.12), border:`1px solid ${hexA(r.kCol, 0.55)}`, fontFamily:DISP, fontSize:11, color:'var(--white)' }}>
                                  {(r.linked && r.linked.bild)
                                    ? <img src={r.linked.bild} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top' }}/>
                                    : ((r.p.name || '').split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase().slice(0, 2) || '?')}
                                </span>
                                <span style={{ flex:1, minWidth:0 }}>
                                  <span style={{ display:'block', fontFamily:DISP, fontSize:13, letterSpacing:'0.04em', color:'var(--white)' }}>{r.p.name}</span>
                                  <span style={{ display:'block', fontFamily:MONO, fontSize:9, letterSpacing:'0.16em', color:'rgba(var(--text-rgb),calc(0.55*var(--kt) + var(--tb)))', textTransform:'uppercase', marginTop:2 }}>
                                    {r.isPc ? (r.p.rolle ? r.p.rolle + ' · Spielercharakter' : 'Spielercharakter') : (r.p.rolle || '')}
                                  </span>
                                </span>
                                {r.linked && <span style={{ fontFamily:MONO, fontSize:11, color:'rgba(var(--accent-rgb),calc(0.5*var(--ka) + var(--tb)))', flexShrink:0 }}>→</span>}
                                {r.tg}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </React.Fragment>
                );
              })()}
            </React.Fragment>
          )}

          {/* Geheimnisse */}
          {has('geheim') && gehList.length > 0 && (
            <React.Fragment>
              {(() => {
                const items = gehList.map((g, i) => {
                  const key = 'geh-' + i;
                  const gHidden = false;
                  const open = dmView ? true : uSet.has(key);
                  return { g, key, gHidden, open, num:(i + 1).toString().padStart(2, '0') };
                });
                const nOpen = items.filter(x => x.open).length;
                return (
                  <React.Fragment>
                    <div style={{ margin:'22px 0 10px', display:'flex', alignItems:'center', gap:10 }}>
                      <span style={{ fontFamily:MONO, fontSize:9, letterSpacing:'0.30em', color:nOpen ? '#e36760' : 'rgba(var(--accent-rgb),calc(0.5*var(--ka)))', textTransform:'uppercase' }}>
                        <span style={{ width:3.5, height:3.5, border:'1px solid currentColor', transform:'rotate(45deg)', display:'inline-block', marginRight:8, marginBottom:1 }}/>Geheimnisse
                      </span>
                      <div style={{ flex:1, height:1, background:nOpen ? 'rgba(227,103,96,0.4)' : 'rgba(var(--accent-rgb),calc(0.12*var(--ka)))' }}/>
                      <span style={{ fontFamily:MONO, fontSize:7.5, letterSpacing:'0.22em', color:'rgba(var(--text-rgb),calc(0.5*var(--kt) + var(--tb)))', textTransform:'uppercase' }}>{nOpen} / {items.length} entdeckt</span>
                    </div>
                    <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                      {items.map((x, i) => (
                        <div key={i} style={{ display:'flex', gap:10, alignItems:'flex-start' }}>
                          <div style={{ flex:1, minWidth:0 }}>
                            {x.open ? (
                              <div style={{ padding:'12px 14px', border:'1px solid rgba(227,103,96,0.4)', background:'linear-gradient(135deg, rgba(227,103,96,0.10), rgba(227,103,96,0.04))', borderRadius:2, position:'relative', fontFamily:BODY, fontSize:12.5, color:'var(--white)', lineHeight:1.6 }}>
                                <div style={{ position:'absolute', top:-1, left:-1, padding:'2px 6px', background:'rgba(227,103,96,0.20)', border:'1px solid rgba(227,103,96,0.55)', fontFamily:MONO, fontSize:7.5, letterSpacing:'0.22em', color:'#e36760', textTransform:'uppercase' }}>Geheim · {x.num}</div>
                                <div style={{ marginTop:14 }}>{x.g.text}</div>
                              </div>
                            ) : (
                              <div style={{ padding:'10px 14px', border:'1px dashed rgba(227,103,96,0.3)', background:'rgba(227,103,96,0.03)', borderRadius:2, display:'flex', alignItems:'center', gap:8, fontFamily:MONO, fontSize:9, letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(227,103,96,0.6)' }}>
                                <span style={{ width:6, height:6, border:'1px solid rgba(227,103,96,0.5)', display:'inline-block', flexShrink:0 }}/>
                                <span>Geheimnis · {x.num} — noch nicht freigeschaltet</span>
                              </div>
                            )}
                          </div>
                          {!dmView && (
                            <button onClick={x.gHidden ? undefined : () => tgU(x.key)}
                              title={x.gHidden ? 'Global verborgen — Auge im Bearbeiten-Tab öffnen' : (x.open ? 'Freigeschaltet für ' : 'Freischalten für ') + perspName}
                              style={{ background:'transparent', border:'none', cursor:x.gHidden ? 'default' : 'pointer', fontSize:12, padding:'0 3px', lineHeight:1,
                                color:x.gHidden ? 'rgba(var(--accent-rgb),calc(0.22*var(--ka)))' : x.open ? '#5fe39a' : 'rgba(227,103,96,0.55)', flexShrink:0 }}>
                              {x.gHidden ? '⊘' : x.open ? '◉' : '○'}
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </React.Fragment>
                );
              })()}
            </React.Fragment>
          )}

            </React.Fragment>
          )}

          {/* Footer stamp */}
          {!EDIT && (
          <div style={{ marginTop:28, padding:'12px 14px', border:`1px dashed ${hexA(acc, 0.4)}`, background:hexA(acc, 0.04), fontFamily:MONO, fontSize:9, color:acc, letterSpacing:'0.16em', textTransform:'uppercase', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <span>{stage >= 4 ? '✓ Eingeweiht' : '◈ Vertrautheit ' + stage + ' · ' + STG[stage]}</span>
            <span style={{ opacity:0.6 }}>Meruria · NSC-Register</span>
          </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

function Root() {
  return (
    <SiteGate>
      <SiteNav rightLabel="NSC-VERWALTUNG" />
      <App />
    </SiteGate>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<Root />);

})();

})();

