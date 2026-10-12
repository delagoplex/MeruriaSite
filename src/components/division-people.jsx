// division-people.jsx — bekannte Personen je Division (Startseite und Divisionsseiten)
// Exposes: window.useDivisionPeople, window.DivisionPeopleEditor
// Zufällig aus den Spielercharakteren und NSC der Division; die SL kann Plätze fest vergeben.

/* ── Bekannte Personen je Division ──
   Drei Plätze pro Division. Standard: zufällig aus den Spielercharakteren und NSC der Division
   (nur, was die Spieler sehen dürfen). Die SL kann einzelne Plätze fest vergeben; gespeichert in
   settings.division_slots_<id> als JSON [null | { k:'SC'|'NSC', id }, …]. */
const DIV_SLOTS = 3;
const divSlotKey = id => 'division_slots_' + id;
function parseSlots(v) {
  let a = [];
  try { a = JSON.parse(v || '[]'); } catch (e) { a = []; }
  return Array.from({ length: DIV_SLOTS }, (_, i) => (a[i] && a[i].k && a[i].id) ? { k:a[i].k, id:a[i].id } : null);
}
function scToPerson(r) {
  const d = r.char_data || {};
  return { key:'SC:' + r.id, k:'SC', id:r.id, name:d.name || r.name || '—', bild:d.bild || null,
    sub:['Spielercharakter', d.class].filter(Boolean).join(' · '), division:d.division || null };
}
function nscToPerson(r) {
  return { key:'NSC:' + r.id, k:'NSC', id:r.id, name:r.name || 'Unbekannt', bild:r.bild || null,
    sub:'NSC', division:r.division || null };
}
function useDivisionPeople() {
  const [data, setData] = React.useState({ sc:[], nsc:[], slots:{}, rand:{}, ready:false });
  const load = React.useCallback(async () => {
    if (!window._sb) return;
    const [{ data: scs }, { data: nscs }, { data: sets }] = await Promise.all([
      window._sb.from('characters').select('id,name,char_data').eq('type', 'spieler').eq('visible', true),
      window._sb.from('nsc_public_directory').select('id,name,bild,division'),
      window._sb.from('settings').select('key,value').like('key', 'division_slots_%'),
    ]);
    const slots = {};
    (sets || []).forEach(r => { slots[r.key.replace('division_slots_', '')] = parseSlots(r.value); });
    const sc = (scs || []).map(scToPerson), nsc = (nscs || []).map(nscToPerson);
    setData(old => {
      const rand = { ...old.rand };
      [...sc, ...nsc].forEach(p => { if (rand[p.key] == null) rand[p.key] = Math.random(); });
      return { sc, nsc, slots, rand, ready:true };
    });
  }, []);
  React.useEffect(() => { load(); }, []);
  const byKey = {};
  [...data.sc, ...data.nsc].forEach(p => { byKey[p.key] = p; });
  // aufgelöste Personen einer Division: feste Plätze, Rest zufällig (nur SC/NSC dieser Division)
  const peopleOf = div => {
    const slots = data.slots[div.id] || parseSlots('[]');
    const fixed = slots.map(r => (r ? byKey[r.k + ':' + r.id] || null : null));
    const used = new Set(fixed.filter(Boolean).map(p => p.key));
    const pool = [...data.sc, ...data.nsc]
      .filter(p => p.division === div.name && !used.has(p.key) && !(p.k === 'NSC' && p.name === 'Unbekannt'))
      .sort((a, b) => (data.rand[a.key] || 0) - (data.rand[b.key] || 0));
    let next = 0;
    return fixed.map(f => f || pool[next++] || null).filter(Boolean);
  };
  // alle bekannten Personen der Division (für Listen wie "Alle anzeigen")
  const allOf = div => [...data.sc, ...data.nsc]
    .filter(p => p.division === div.name && !(p.k === 'NSC' && p.name === 'Unbekannt'))
    .sort((a, b) => a.name.localeCompare(b.name, 'de'));
  return { ...data, byKey, peopleOf, allOf, slotsOf:div => data.slots[div.id] || parseSlots('[]'), reload:load };
}

/* ── Editor für die SL: feste Personen je Division wählen (mit Bildern) ── */
function DivisionPeopleEditor({ d, slots: startSlots, scAll, onClose, onSaved }) {
  const [slots, setSlots] = React.useState(startSlots);
  const [active, setActive] = React.useState(null);       // Platz, für den gerade gewählt wird
  const [nscs, setNscs] = React.useState(null);
  const [q, setQ] = React.useState('');
  const [onlyDiv, setOnlyDiv] = React.useState(true);
  const [saving, setSaving] = React.useState(false);
  const [err, setErr] = React.useState('');
  React.useEffect(() => {
    window._sb.rpc('get_nsc_admin_data').then(({ data }) => {
      setNscs((data || []).filter(n => n.visible).map(n => ({
        key:'NSC:' + n.id, k:'NSC', id:n.id, name:n.name || '—', bild:n.bild || null, sub:'NSC', division:n.division || null,
      })));
    });
    const kd = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', kd);
    return () => document.removeEventListener('keydown', kd);
  }, []);
  const all = [...scAll, ...(nscs || [])];
  const byKey = {};
  all.forEach(p => { byKey[p.key] = p; });
  const ql = q.trim().toLowerCase();
  const cands = all
    .filter(p => (!onlyDiv || p.division === d.name) && (!ql || p.name.toLowerCase().includes(ql)))
    .sort((a, b) => a.name.localeCompare(b.name, 'de'));
  const setSlot = (i, p) => setSlots(sl => sl.map((x, j) => j === i ? (p ? { k:p.k, id:p.id } : null) : x));
  const save = async () => {
    setSaving(true); setErr('');
    const { error } = await window._sb.from('settings').upsert({ key:divSlotKey(d.id), value:JSON.stringify(slots) }, { onConflict:'key' });
    setSaving(false);
    if (error) { setErr('Speichern fehlgeschlagen: ' + error.message); return; }
    onSaved(); onClose();
  };
  const mono = { fontFamily:'var(--font-mono)', letterSpacing:'0.14em', textTransform:'uppercase' };
  const btn = (primary) => ({ ...mono, fontSize:11.5, padding:'8px 14px', borderRadius:3, cursor:'pointer',
    background: primary ? `${d.acc}33` : 'transparent', color:'var(--white)',
    border:`1px solid ${primary ? d.acc : 'rgba(var(--accent-rgb),calc(0.3*var(--ka)))'}` });
  const thumb = (p, size) => (
    <div style={{ width:size, height:size, borderRadius:3, overflow:'hidden', flexShrink:0, background:'rgba(var(--panel-rgb),0.9)',
      border:`1px solid ${d.acc}55`, display:'flex', alignItems:'center', justifyContent:'center' }}>
      {p && p.bild
        ? <img src={p.bild} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top' }}/>
        : <span style={{ fontFamily:'var(--font-display)', color:d.acc, fontSize:size * 0.34 }}>{p ? p.name.split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase() : '?'}</span>}
    </div>
  );
  return ReactDOM.createPortal(
    <div onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}
      style={{ position:'fixed', inset:0, zIndex:6000, background:'rgba(var(--bg-rgb),0.85)', display:'flex', alignItems:'center', justifyContent:'center', padding:24 }}>
      <div role="dialog" aria-label="Bekannte Personen" style={{ width:'min(1000px, 100%)', maxHeight:'calc(var(--vh, 1vh) * 88)', display:'flex', flexDirection:'column',
        background:'rgba(var(--panel-rgb),0.99)', border:`1px solid ${d.acc}88`, borderRadius:6, boxShadow:'0 20px 80px rgba(var(--shadow-rgb),calc(0.6*var(--shadow-k)))' }}>
        <div style={{ display:'flex', alignItems:'center', gap:12, padding:'14px 18px', borderBottom:`1px solid ${d.acc}44` }}>
          <span style={{ ...mono, fontSize:12, letterSpacing:'0.24em', color:'var(--white)' }}>{d.name} · Bekannte Personen</span>
          <span style={{ flex:1 }}/>
          <button onClick={onClose} aria-label="Schließen" style={{ background:'transparent', border:'none', cursor:'pointer', color:'var(--white)', fontSize:20, lineHeight:1 }}>×</button>
        </div>
        <div style={{ padding:'14px 18px', display:'grid', gridTemplateColumns:`repeat(${DIV_SLOTS}, minmax(0, 1fr))`, gap:12 }}>
          {slots.map((r, i) => {
            const p = r ? byKey[r.k + ':' + r.id] : null;
            const on = active === i;
            return (
              <div key={i} style={{ border:`1px solid ${on ? d.acc : d.acc + '44'}`, borderRadius:4, padding:10, display:'flex', flexDirection:'column', gap:10,
                background: on ? `${d.acc}14` : 'transparent' }}>
                <div style={{ display:'flex', gap:10, alignItems:'center' }}>
                  {thumb(p, 64)}
                  <div style={{ minWidth:0 }}>
                    <div style={{ ...mono, fontSize:11, color:'rgba(var(--text-rgb),calc(0.6*var(--kt) + var(--tb)))' }}>Platz {i + 1}</div>
                    <div style={{ fontFamily:'var(--font-display)', fontSize:14, color:'var(--white)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>
                      {r ? (p ? p.name : '(nicht mehr verfügbar)') : 'Zufällig'}
                    </div>
                    <div style={{ ...mono, fontSize:11, color:d.acc }}>{r ? (p ? p.sub : '') : 'wechselt bei jedem Laden'}</div>
                  </div>
                </div>
                <div style={{ display:'flex', gap:8 }}>
                  <button style={btn(on)} onClick={() => setActive(on ? null : i)}>{on ? 'Wählen …' : 'Festlegen'}</button>
                  {r && <button style={btn(false)} onClick={() => { setSlot(i, null); }}>Zufall</button>}
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ padding:'0 18px 10px', display:'flex', gap:12, alignItems:'center', flexWrap:'wrap' }}>
          <input value={q} onChange={e => setQ(e.target.value)} placeholder="Suchen …"
            style={{ flex:1, minWidth:160, padding:'8px 10px', background:'rgba(var(--panel-rgb),0.9)', border:'1px solid rgba(var(--accent-rgb),calc(0.3*var(--ka)))', borderRadius:3, color:'var(--white)', fontFamily:'var(--font-body)', fontSize:14 }}/>
          <label style={{ ...mono, fontSize:11, display:'flex', alignItems:'center', gap:8, cursor:'pointer', color:'var(--white)' }}>
            <input type="checkbox" checked={!onlyDiv} onChange={e => setOnlyDiv(!e.target.checked)}/> auch andere Divisionen
          </label>
        </div>
        <div style={{ overflowY:'auto', padding:'4px 18px 14px', flex:1, minHeight:120 }}>
          <div style={{ ...mono, fontSize:11, marginBottom:8, color:'rgba(var(--text-rgb),calc(0.6*var(--kt) + var(--tb)))' }}>
            {active == null ? 'Erst oben einen Platz mit „Festlegen“ auswählen' : 'Person für Platz ' + (active + 1) + ' wählen'} · {cands.length} Personen
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(120px, 1fr))', gap:10, opacity: active == null ? 0.5 : 1 }}>
            {cands.map(p => {
              const used = slots.some(r => r && r.k === p.k && r.id === p.id);
              return (
                <button key={p.key} disabled={active == null} onClick={() => { setSlot(active, p); setActive(null); }}
                  style={{ padding:6, textAlign:'left', cursor: active == null ? 'default' : 'pointer', borderRadius:4,
                    background: used ? `${d.acc}22` : 'rgba(var(--panel-rgb),0.6)', border:`1px solid ${used ? d.acc : d.acc + '33'}` }}>
                  <div style={{ width:'100%', aspectRatio:'1 / 1', overflow:'hidden', borderRadius:3, background:'rgba(var(--panel-rgb),0.9)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    {p.bild
                      ? <img src={p.bild} alt="" loading="lazy" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top', display:'block' }}/>
                      : <span style={{ fontFamily:'var(--font-display)', fontSize:28, color:d.acc }}>{p.name.split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase()}</span>}
                  </div>
                  <div style={{ marginTop:6, fontFamily:'var(--font-body)', fontSize:13, color:'var(--white)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{p.name}</div>
                  <div style={{ ...mono, fontSize:11, color:d.acc }}>{p.k === 'SC' ? 'SC' : 'NSC'}</div>
                </button>
              );
            })}
            {nscs === null && <div style={{ ...mono, fontSize:11 }}>Lade …</div>}
          </div>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:12, padding:'12px 18px', borderTop:`1px solid ${d.acc}44` }}>
          <span style={{ flex:1, fontFamily:'var(--font-body)', fontSize:13, color: err ? '#ff9980' : 'rgba(var(--text-rgb),calc(0.65*var(--kt) + var(--tb)))' }}>
            {err || 'Nicht festgelegte Plätze werden zufällig aus den Charakteren und NSC der Division gefüllt.'}
          </span>
          <button style={btn(false)} onClick={onClose}>Abbrechen</button>
          <button style={btn(true)} onClick={save} disabled={saving}>{saving ? 'Speichern …' : 'Speichern'}</button>
        </div>
      </div>
    </div>,
    document.body
  );
}

Object.assign(window, { useDivisionPeople, DivisionPeopleEditor });
