// Gemeinsame Bausteine für Ressourcen (Fische, Insekten, Pflanzen, Mineralien, Kreaturen):
// Detailkarte, Tag-Filter und Randomizer. Datenbasis: window.RessourcenKatalog
// (assets/scripts/shared/ressourcen-katalog.js). Genutzt von /dm/kollektikon und der Kartenverwaltung.

;(function () {
const { useState, useMemo, useEffect } = React;

const MONO = 'var(--font-mono)';
const BODY = 'var(--font-body)';
const K = () => window.RessourcenKatalog;

const chipBase = {
  fontFamily: MONO, fontSize: 8.5, letterSpacing: '0.1em', textTransform: 'uppercase',
  padding: '3px 9px', borderRadius: 20, cursor: 'pointer', transition: 'all .15s',
};

function RarityPill({ rarity }) {
  const m = K().RARITY_META[rarity];
  if (!m) return null;
  return (
    <span style={{ display: 'inline-block', padding: '2px 9px', border: `1px solid ${m.color}`, borderRadius: 20,
      fontFamily: MONO, fontSize: 7.5, letterSpacing: '0.1em', color: m.color, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
      {m.label}
    </span>
  );
}

function TagChips({ tags, small }) {
  const chips = [];
  Object.entries(tags || {}).forEach(([g, vals]) => vals.forEach(v => chips.push([g, v])));
  if (!chips.length) return null;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
      {chips.map(([g, v]) => (
        <span key={g + v} title={g} style={{ fontFamily: MONO, fontSize: small ? 7.5 : 8.5, letterSpacing: '0.08em', textTransform: 'uppercase',
          padding: small ? '2px 7px' : '3px 9px', borderRadius: 3,
          border: '1px solid rgba(var(--accent-rgb),calc(0.22*var(--ka)))',
          background: 'rgba(var(--purple-rgb),calc(0.07*var(--kp)))',
          color: 'rgba(var(--accent-rgb),calc(0.75*var(--ka) + var(--tb)))' }}>{v}</span>
      ))}
    </div>
  );
}

function ResThumb({ entry, size = 64 }) {
  const [bad, setBad] = useState(false);
  useEffect(() => setBad(false), [entry.id, entry.cat]);
  const box = { width: size, height: size, flexShrink: 0, borderRadius: 3, overflow: 'hidden',
    border: '1px solid rgba(var(--purple-rgb),calc(0.2*var(--kp)))', background: 'rgba(var(--panel-rgb),0.5)',
    display: 'flex', alignItems: 'center', justifyContent: 'center' };
  if (!entry.icon || bad) {
    return <div style={{ ...box, fontFamily: 'var(--font-display)', fontSize: size * 0.4, color: 'rgba(var(--purple-rgb),calc(0.4*var(--kp) + var(--tb)))' }}>{entry.name.charAt(0)}</div>;
  }
  return <div style={box}><img src={entry.icon} alt="" loading="lazy" onError={() => setBad(true)}
    style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div>;
}

// Detailkarte eines Eintrags
function ResDetail({ entry }) {
  if (!entry) return null;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
        <ResThumb entry={entry} size={96} />
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, letterSpacing: '0.1em', color: 'var(--white)' }}>{entry.name}</div>
          <div style={{ marginTop: 6 }}><RarityPill rarity={entry.rarity} /></div>
        </div>
      </div>
      <TagChips tags={entry.tags} />
      {entry.desc && <div style={{ fontFamily: BODY, fontSize: 13, lineHeight: 1.7, fontWeight: 300, color: 'var(--silver)', textWrap: 'pretty' }}>{entry.desc}</div>}
      {entry.facts.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '8px 16px' }}>
          {entry.facts.map(([l, v]) => (
            <div key={l}>
              <div style={{ fontFamily: MONO, fontSize: 7.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(var(--purple-rgb),calc(0.55*var(--kp) + var(--tb)))' }}>{l}</div>
              <div style={{ fontFamily: BODY, fontSize: 12.5, color: 'var(--white)', fontWeight: 300 }}>{String(v)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Tag-Auswahl: sel = { Gruppe: [Wert] }, onChange(neuesSel)
function TagFilters({ cat, sel, onChange }) {
  const opts = useMemo(() => K().tagOptions(cat), [cat]);
  const toggle = (g, v) => {
    const cur = sel[g] || [];
    onChange({ ...sel, [g]: cur.includes(v) ? cur.filter(x => x !== v) : [...cur, v] });
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {Object.entries(opts).map(([g, list]) => (
        <div key={g} style={{ display: 'flex', flexWrap: 'wrap', gap: 5, alignItems: 'center' }}>
          <span style={{ fontFamily: MONO, fontSize: 7.5, letterSpacing: '0.2em', textTransform: 'uppercase', width: 82, flexShrink: 0,
            color: 'rgba(var(--purple-rgb),calc(0.6*var(--kp) + var(--tb)))' }}>{g}</span>
          {list.map(([v, n]) => {
            const on = (sel[g] || []).includes(v);
            return (
              <button key={v} onClick={() => toggle(g, v)} title={`${n} Einträge`}
                style={{ ...chipBase,
                  border: `1px solid ${on ? 'rgba(var(--accent-rgb),calc(0.8*var(--ka)))' : 'rgba(var(--purple-rgb),calc(0.22*var(--kp)))'}`,
                  background: on ? 'rgba(var(--purple-rgb),calc(0.28*var(--kp)))' : 'transparent',
                  color: on ? 'var(--white)' : 'rgba(var(--text-rgb),calc(0.6*var(--kt) + var(--tb)))' }}>{v}</button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

// Zahlenfeld mit − / + im Seitenstil (statt nativer Spinner)
function NumStepper({ value, onChange, color }) {
  const n = parseInt(value, 10) || 0;
  const line = color || 'rgba(var(--purple-rgb),calc(0.3*var(--kp)))';
  const btn = { width: 24, height: 30, flexShrink: 0, background: 'rgba(var(--purple-rgb),calc(0.1*var(--kp)))', border: 'none',
    color: color || 'rgba(var(--accent-rgb),calc(0.8*var(--ka) + var(--tb)))', fontSize: 14, lineHeight: 1, cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center' };
  return (
    <div style={{ display: 'inline-flex', alignItems: 'stretch', border: `1px solid ${line}`, borderRadius: 2, overflow: 'hidden', background: 'rgba(var(--panel-rgb),0.5)' }}>
      <button type="button" style={{ ...btn, borderRight: `1px solid ${line}` }} onClick={() => onChange(String(Math.max(0, n - 1)))}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(var(--purple-rgb),calc(0.25*var(--kp)))'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(var(--purple-rgb),calc(0.1*var(--kp)))'}>−</button>
      <input type="text" inputMode="numeric" value={value} placeholder="0"
        onChange={e => onChange(e.target.value.replace(/[^0-9]/g, ''))}
        style={{ width: 40, border: 'none', outline: 'none', background: 'transparent', textAlign: 'center', fontFamily: MONO, fontSize: 12, color: color || 'var(--white)', padding: 0 }} />
      <button type="button" style={{ ...btn, borderLeft: `1px solid ${line}` }} onClick={() => onChange(String(n + 1))}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(var(--purple-rgb),calc(0.25*var(--kp)))'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(var(--purple-rgb),calc(0.1*var(--kp)))'}>+</button>
    </div>
  );
}

// Randomizer: Tags wählen → gewichtet würfeln → Ergebnis prüfen → übernehmen.
// excludeIds: bereits vorhandene Einträge (werden nicht gezogen); onAdd(entries)
function ResRandomizer({ cat, excludeIds, onAdd, addLabel = 'Hinzufügen', disabledReason, sel: selProp, onSel, hideTags }) {
  const Kat = K();
  const [selOwn, setSelOwn] = useState({});
  const sel = selProp || selOwn;
  const setSel = onSel || setSelOwn;
  const [mode, setMode] = useState('gesamt');       // 'gesamt' (gewichtet) | 'seltenheit' (feste Anzahlen)
  const [total, setTotal] = useState('5');
  const [counts, setCounts] = useState({});
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(null);

  useEffect(() => { setSelOwn({}); setResults([]); setOpen(null); }, [cat]);

  const pool = useMemo(
    () => Kat.entries(cat).filter(e => Kat.matches(e, sel) && !(excludeIds && excludeIds.has(e.id))),
    [cat, sel, excludeIds]
  );
  const byRarity = useMemo(() => {
    const m = {};
    pool.forEach(e => { m[e.rarity] = (m[e.rarity] || 0) + 1; });
    return m;
  }, [pool]);

  function roll() {
    const taken = new Set();
    let picked = [];
    if (mode === 'gesamt') {
      picked = Kat.weightedPick(pool, parseInt(total, 10) || 0, e => Kat.RARITY_WEIGHT[e.rarity]);
    } else {
      Kat.RARITY_ORDER.forEach(r => {
        const n = parseInt(counts[r], 10) || 0;
        if (n > 0) picked.push(...Kat.weightedPick(pool.filter(e => e.rarity === r && !taken.has(e.id)), n));
        picked.forEach(e => taken.add(e.id));
      });
    }
    setResults(picked);
    setOpen(null);
  }
  function rerollOne(e) {
    const have = new Set(results.map(r => r.id));
    const cand = pool.filter(p => !have.has(p.id) && (mode === 'seltenheit' ? p.rarity === e.rarity : true));
    const [n] = Kat.weightedPick(cand, 1, p => mode === 'seltenheit' ? 1 : Kat.RARITY_WEIGHT[p.rarity]);
    if (n) setResults(rs => rs.map(r => r.id === e.id ? n : r));
  }
  const sectionLabel = { fontFamily: MONO, fontSize: 8, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(var(--purple-rgb),calc(0.55*var(--kp) + var(--tb)))' };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {!hideTags && (
        <div>
          <div style={{ ...sectionLabel, marginBottom: 8 }}>Tags</div>
          <TagFilters cat={cat} sel={sel} onChange={setSel} />
        </div>
      )}

      <div style={{ display: 'flex', gap: 14, alignItems: 'flex-end', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: 3 }}>
          {[['gesamt', 'Gesamt · gewichtet'], ['seltenheit', 'Pro Seltenheit']].map(([id, l]) => (
            <button key={id} onClick={() => setMode(id)}
              style={{ ...chipBase, borderRadius: 2, padding: '6px 10px',
                border: `1px solid ${mode === id ? 'rgba(var(--accent-rgb),calc(0.8*var(--ka)))' : 'rgba(var(--purple-rgb),calc(0.22*var(--kp)))'}`,
                background: mode === id ? 'rgba(var(--purple-rgb),calc(0.28*var(--kp)))' : 'transparent',
                color: mode === id ? 'var(--white)' : 'rgba(var(--text-rgb),calc(0.6*var(--kt) + var(--tb)))' }}>{l}</button>
          ))}
        </div>
        {mode === 'gesamt' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <span style={{ ...sectionLabel, fontSize: 7 }}>Anzahl</span>
            <NumStepper value={total} onChange={setTotal} />
          </div>
        ) : Kat.RARITY_ORDER.map(r => (
          <div key={r} style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <span style={{ fontFamily: MONO, fontSize: 7, letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center', color: Kat.RARITY_META[r].color }}>
              {Kat.RARITY_META[r].label} ({byRarity[r] || 0})
            </span>
            <NumStepper value={counts[r] || ''} onChange={v => setCounts(c => ({ ...c, [r]: v }))} color={Kat.RARITY_META[r].color} />
          </div>
        ))}
        <button onClick={roll} disabled={!pool.length}
          style={{ fontFamily: MONO, fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '9px 16px', borderRadius: 2,
            cursor: pool.length ? 'pointer' : 'default', opacity: pool.length ? 1 : 0.4,
            border: '1px solid rgba(217,176,107,0.55)', background: 'rgba(217,176,107,0.12)',
            color: 'color-mix(in srgb, rgba(240,220,170,0.95), rgb(var(--ink-rgb)) var(--cm))' }}>
          ⚄ {results.length ? 'Neu würfeln' : 'Würfeln'}
        </button>
      </div>

      <div style={{ fontFamily: MONO, fontSize: 8, letterSpacing: '0.12em', color: 'rgba(var(--accent-rgb),calc(0.5*var(--ka) + var(--tb)))', textTransform: 'uppercase' }}>
        {pool.length} passende Einträge im Pool
        {Kat.RARITY_ORDER.filter(r => byRarity[r]).map(r => ` · ${byRarity[r]} ${Kat.RARITY_META[r].label.toLowerCase()}`).join('')}
        {mode === 'gesamt' && ' · seltene werden automatisch seltener gezogen'}
      </div>

      {results.length > 0 && (
        <div style={{ border: '1px solid rgba(var(--purple-rgb),calc(0.2*var(--kp)))', borderRadius: 3 }}>
          {results.map(e => (
            <div key={e.id} style={{ borderBottom: '1px solid rgba(var(--purple-rgb),calc(0.1*var(--kp)))' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 10px' }}>
                <ResThumb entry={e} size={34} />
                <button onClick={() => setOpen(open === e.id ? null : e.id)} title="Details ein-/ausklappen"
                  style={{ flex: 1, minWidth: 0, textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--white)', fontFamily: BODY, fontSize: 14 }}>
                  {e.name}
                  <span style={{ marginLeft: 8, fontFamily: MONO, fontSize: 8, color: 'rgba(var(--accent-rgb),calc(0.5*var(--ka) + var(--tb)))' }}>
                    {Object.values(e.tags).flat().slice(0, 3).join(' · ')}
                  </span>
                </button>
                <RarityPill rarity={e.rarity} />
                <button onClick={() => rerollOne(e)} title="Diesen Eintrag neu würfeln" style={{ ...chipBase, borderRadius: 2, border: '1px solid rgba(var(--purple-rgb),calc(0.25*var(--kp)))', background: 'transparent', color: 'var(--silver)' }}>⚄</button>
                <button onClick={() => setResults(rs => rs.filter(r => r.id !== e.id))} title="Entfernen" style={{ ...chipBase, borderRadius: 2, border: '1px solid rgba(var(--purple-rgb),calc(0.25*var(--kp)))', background: 'transparent', color: 'var(--silver)' }}>×</button>
              </div>
              {open === e.id && <div style={{ padding: '4px 12px 14px' }}><ResDetail entry={e} /></div>}
            </div>
          ))}
        </div>
      )}

      {results.length > 0 && (
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <button onClick={() => { onAdd(results); setResults([]); }} disabled={!!disabledReason}
            title={disabledReason || ''}
            style={{ fontFamily: MONO, fontSize: 9, letterSpacing: '0.24em', textTransform: 'uppercase', padding: '9px 18px', borderRadius: 2,
              cursor: disabledReason ? 'default' : 'pointer', opacity: disabledReason ? 0.4 : 1,
              border: '1px solid rgba(var(--accent-rgb),calc(0.6*var(--ka)))', background: 'rgba(var(--purple-rgb),calc(0.18*var(--kp)))', color: 'var(--white)' }}>
            {addLabel} ({results.length})
          </button>
          {disabledReason && <span style={{ fontFamily: MONO, fontSize: 8, color: 'rgba(220,100,80,0.85)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{disabledReason}</span>}
        </div>
      )}
    </div>
  );
}

Object.assign(window, { ResDetail, ResThumb, RarityPill, TagChips, TagFilters, ResRandomizer });
})();
