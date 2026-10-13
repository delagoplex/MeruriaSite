// Zähler pro Gebiet (Datensonden, Höhlen, …) für das DM-Panel der Karte.
// Gespeichert in karte_hexes.erkundung = [{ name, gefunden, total }]; Rollup: karteAggregateZaehler (karte-v2.js).
;(function () {
  const { useState } = React;

  const lbl = { fontFamily:'var(--font-mono)', fontSize:11.5, letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(var(--purple-rgb),calc(0.5*var(--kp) + var(--tb)))' };
  const num = { fontFamily:'var(--font-mono)', fontSize:12.5, color:'rgba(var(--accent-rgb),calc(0.75*var(--ka) + var(--tb)))' };

  function Bar({ pct, color }) {
    return (
      <div style={{ position:'relative', height:4, background:'rgba(var(--purple-rgb),calc(0.08*var(--kp)))', border:'1px solid rgba(var(--purple-rgb),calc(0.15*var(--kp)))', borderRadius:2, overflow:'hidden' }}>
        <div style={{ position:'absolute', left:0, top:0, bottom:0, width:`${pct}%`, background: color || 'linear-gradient(90deg, rgba(124,100,220,0.9), rgba(var(--accent-rgb),calc(0.85*var(--ka))))', borderRadius:2, transition:'width 0.4s' }}/>
      </div>
    );
  }

  // Nur Anzeige: Gesamtbalken + Prozent, Gebiete perfektioniert (nur Region), Zähler einzeln
  function KarteZaehlerView({ stats, showGebiete }) {
    if (!stats) return <div style={{ ...lbl, padding:'8px 0' }}>◈ berechne …</div>;
    const has = stats.zaehler.length > 0;
    return (
      <div>
        <div style={{ display:'flex', alignItems:'baseline', gap:8, marginBottom:6 }}>
          <span style={{ ...lbl, flex:1 }}>Gesamtfortschritt</span>
          <span style={num}>{stats.pct} %</span>
        </div>
        <Bar pct={stats.pct}/>
        {!showGebiete && stats.gebiete === 1 && stats.perfekt === 1 && (
          <div style={{ ...num, marginTop:8 }}>✓ Gebiet perfektioniert</div>
        )}
        {showGebiete && (
          <div style={{ display:'flex', gap:8, alignItems:'baseline', marginTop:10 }}>
            <span style={{ ...lbl, flex:1 }}>Gebiete perfektioniert</span>
            <span style={num}>{stats.perfekt} / {stats.gebiete}</span>
          </div>
        )}
        {has ? (
          <div style={{ marginTop:12 }}>
            {stats.zaehler.map(z => {
              const pct = z.total > 0 ? Math.round(z.gefunden / z.total * 100) : 0;
              return (
                <div key={z.name} style={{ marginBottom:9 }}>
                  <div style={{ display:'flex', gap:8, alignItems:'baseline', marginBottom:4 }}>
                    <span style={{ fontFamily:'var(--font-body)', fontSize:13, fontWeight:300, color:'rgba(var(--text-rgb),calc(0.8*var(--kt) + var(--tb)))', flex:1, minWidth:0 }}>{z.name}</span>
                    <span style={num}>{z.gefunden} / {z.total}</span>
                  </div>
                  <Bar pct={pct}/>
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{ ...lbl, padding:'10px 0 0', opacity:0.7 }}>— noch keine Zähler eingetragen —</div>
        )}
      </div>
    );
  }

  const stepBtn = { width:26, height:28, flexShrink:0, fontFamily:'var(--font-mono)', fontSize:15, lineHeight:1, color:'rgba(var(--accent-rgb),calc(0.8*var(--ka) + var(--tb)))', background:'rgba(var(--purple-rgb),calc(0.1*var(--kp)))', border:'1px solid rgba(var(--purple-rgb),calc(0.3*var(--kp)))', borderRadius:3, cursor:'pointer', padding:0 };

  function Stepper({ value, onChange, title }) {
    return (
      <div style={{ display:'flex', alignItems:'center', gap:4, flexShrink:0 }} title={title}>
        <button type="button" style={stepBtn} onClick={() => onChange(Math.max(0, value - 1))}>−</button>
        <input className="mk-input mk-num" type="number" min="0" value={value} onChange={e => onChange(Math.max(0, +e.target.value || 0))}
          style={{ width:52, fontSize:12.5, textAlign:'center', padding:'5px 4px' }}/>
        <button type="button" style={stepBtn} onClick={() => onChange(value + 1)}>+</button>
      </div>
    );
  }

  // Bearbeitung am Gebiet: feste Zähler immer da, weitere frei benennbar. Je Zähler gefunden / gesamt mit +/−.
  function KarteZaehlerEditor({ value, onChange }) {
    const list = Array.isArray(value) ? value : [];
    const [newName, setNewName] = useState('');
    const presets = window.KARTE_ZAEHLER_PRESETS || [];
    const key = n => String(n || '').trim().toLowerCase();
    const isPreset = e => presets.some(p => key(p) === key(e.name));
    const idxOf = name => list.findIndex(e => key(e.name) === key(name));

    // Änderung am Eintrag (legt Vorgaben erst beim ersten Ändern an)
    const set = (name, patch) => {
      const i = idxOf(name);
      const cur = i >= 0 ? list[i] : { name, gefunden: 0, total: 0 };
      let next = { ...cur, ...patch };
      if (next.total < next.gefunden && 'gefunden' in patch) next.total = next.gefunden;   // Ziel wächst mit
      if (next.gefunden > next.total) next.gefunden = next.total;                          // Ziel nie unter gefunden
      onChange(i >= 0 ? list.map((e, j) => j === i ? next : e) : [...list, next]);
    };
    const remove = name => onChange(list.filter(e => key(e.name) !== key(name)));
    const add = () => {
      const v = newName.trim();
      if (!v || idxOf(v) >= 0) { setNewName(''); return; }
      onChange([...list, { name: v, gefunden: 0, total: 0 }]);
      setNewName('');
    };

    const rows = [
      ...presets.map(p => ({ name: p, preset: true, e: list[idxOf(p)] || { gefunden: 0, total: 0 } })),
      ...list.filter(e => !isPreset(e)).map(e => ({ name: e.name, preset: false, e })),
    ];

    return (
      <div>
        <div style={{ display:'flex', justifyContent:'space-between', margin:'0 10px 6px' }}>
          <span style={{ ...lbl, opacity:0.7 }}>gefunden</span>
          <span style={{ ...lbl, opacity:0.7 }}>gesamt</span>
        </div>
        {rows.map(r => {
          const total = +r.e.total || 0, gefunden = Math.min(+r.e.gefunden || 0, total);
          const pct = total > 0 ? Math.round(gefunden / total * 100) : 0;
          return (
            <div key={r.name} style={{ marginBottom:8, padding:'8px 10px', background:'rgba(var(--panel-rgb),0.5)', border:'1px solid rgba(var(--purple-rgb),calc(0.22*var(--kp)))', borderRadius:3 }}>
              <div style={{ fontFamily:'var(--font-body)', fontSize:13, color:'rgba(var(--text-rgb),calc(0.85*var(--kt) + var(--tb)))', marginBottom:6, display:'flex', alignItems:'center', gap:8 }}>
                <span style={{ flex:1, minWidth:0 }}>{r.name}</span>
                <span style={{ ...num, fontSize:11.5 }}>{pct} %</span>
                {!r.preset && (
                  <button type="button" onClick={() => remove(r.name)} title="Zähler entfernen"
                    style={{ width:24, height:24, padding:0, fontFamily:'var(--font-mono)', fontSize:12, color:'color-mix(in srgb, rgba(220,140,160,0.7), rgb(var(--ink-rgb)) var(--cm))', background:'transparent', border:'1px solid rgba(220,80,120,0.35)', borderRadius:2, cursor:'pointer' }}>×</button>
                )}
              </div>
              <div style={{ display:'flex', gap:8, alignItems:'center' }}>
                <Stepper value={gefunden} onChange={v => set(r.name, { gefunden: v })} title="Gefunden"/>
                <span style={{ ...num, flex:1, textAlign:'center' }}>/</span>
                <Stepper value={total} onChange={v => set(r.name, { total: v })} title="Gesamtanzahl"/>
              </div>
              <div style={{ marginTop:6 }}><Bar pct={pct}/></div>
            </div>
          );
        })}
        <div style={{ display:'flex', gap:6, marginBottom:4 }}>
          <input className="mk-input" style={{ flex:1 }} type="text" placeholder="Weiteren Zähler anlegen …" value={newName}
            onChange={e => setNewName(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); add(); } }}/>
          <button type="button" onClick={add} style={{ ...stepBtn, width:'auto', padding:'0 12px', fontSize:12.5 }}>+</button>
        </div>
      </div>
    );
  }

  Object.assign(window, { KarteZaehlerView, KarteZaehlerEditor });
})();
