/* nsc-app.jsx — NSC overview page: filters, search, card grid + detail panel */

const { useState:appUS, useEffect:appUE, useMemo:appUM, useCallback:appUC } = React;
const { useTweaks } = window;
const { STAGE_LABELS, MAX_STAGE, STATUS_DEF, STATUS_ORDER,
        DIVISION_ORDER, DIVISION_THEME, GOLD, GOLD_GLOW, goldA,
        hexPoints, hexA, accentOf, romanFor, useNSCData, useUnlocks, factsOf,
        NAV, NavItem, FloatingHexField, ParticleField, useScrollReveal,
        NSCPortrait, StageBadge, StatusPills, NSCDetailPanel, SiteNav, PageHeader } = window;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{"showParticles": true, "showHexes": true, "compactCards": false}/*EDITMODE-END*/;

const uniq = arr => Array.from(new Set(arr.filter(Boolean))).sort((a,b) => a.localeCompare(b,'de'));
const statusOf = n => Array.isArray(n.status) ? n.status : (n.status ? [n.status] : []);

const _GLYPHS = '░▒▓█▪◆◈⬡⬢⬤⬧◉●○◇□■▾▸△▷▶▽▼◁◀';
function _scrambleName(name) {
  return name.split('').map((c, i) => {
    if (c === ' ' || c === '-') return c;
    const seed = ((name.charCodeAt(0)*17 + i*31 + name.charCodeAt(i % name.length)*7) % _GLYPHS.length + _GLYPHS.length) % _GLYPHS.length;
    return _GLYPHS[seed];
  }).join('');
}

// ── Filter chip ───────────────────────────────────────────
function FilterChip({ active, label, count, onClick, accent }) {
  const ac = accent || '#7c4dff';
  return (
    <button onClick={onClick} style={{
      display:'inline-flex', alignItems:'center', gap:'8px',
      padding:'5px 10px',
      fontFamily:'var(--font-mono)', fontSize:'9.5px', letterSpacing:'0.14em', textTransform:'uppercase',
      background: active ? hexA(ac, 0.18) : 'rgba(10,6,28,0.6)',
      border: `1px solid ${active ? hexA(ac, 0.7) : 'rgba(160,140,255,0.18)'}`,
      color: active ? '#f0eeff' : 'rgba(200,190,240,0.65)',
      borderRadius:'2px', cursor:'pointer', transition:'all 0.15s', whiteSpace:'nowrap',
    }}
    onMouseEnter={e => { if (!active) { e.currentTarget.style.borderColor = hexA(ac, 0.45); e.currentTarget.style.color = '#f0eeff'; } }}
    onMouseLeave={e => { if (!active) { e.currentTarget.style.borderColor = 'rgba(160,140,255,0.18)'; e.currentTarget.style.color = 'rgba(200,190,240,0.65)'; } }}>
      <span>{label}</span>
      {typeof count === 'number' && <span style={{ fontSize:'8px', color: active ? hexA(ac, 0.95) : 'rgba(160,140,255,0.45)', fontVariantNumeric:'tabular-nums' }}>{count}</span>}
    </button>
  );
}
function FilterGroup({ title, values, selected, onToggle, getCount, labelFor }) {
  const [expanded, setExpanded] = appUS(true);
  return (
    <div style={{ marginBottom:'18px' }}>
      <button onClick={() => setExpanded(!expanded)} style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        width:'100%', padding:'6px 0', marginBottom:'8px',
        background:'transparent', border:'none', cursor:'pointer',
        borderBottom:'1px solid rgba(160,140,255,0.1)',
      }}>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:'9px', letterSpacing:'0.32em', color:'rgba(124,77,255,0.8)', textTransform:'uppercase' }}>
          ◇ {title}
        </span>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:'10px', color:'rgba(160,140,255,0.4)' }}>
          {expanded ? '−' : '+'}
        </span>
      </button>
      {expanded && (
        <div style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
          {values.map(v => (
            <FilterChip key={v}
              label={labelFor ? labelFor(v) : v}
              count={getCount ? getCount(v) : undefined}
              active={selected.includes(v)}
              onClick={() => onToggle(v)}
              accent="#7c4dff"/>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Trait pills row on card ───────────────────────────────
function TraitPills({ items, acc, max=3 }) {
  if (!items || items.length === 0) return null;
  return (
    <div style={{ display:'flex', flexWrap:'wrap', gap:5 }}>
      {items.slice(0, max).map((e, i) => (
        <span key={i} style={{
          padding:'3px 7px',
          fontFamily:'var(--font-mono)', fontSize:8, letterSpacing:'0.14em', textTransform:'uppercase',
          color:'rgba(230,225,255,0.85)', background: hexA(acc, 0.1),
          border:`1px solid ${hexA(acc, 0.3)}`, borderRadius:2,
        }}>{e}</span>
      ))}
      {items.length > max && (
        <span style={{ padding:'3px 7px', fontFamily:'var(--font-mono)', fontSize:8, letterSpacing:'0.14em', color:'rgba(160,140,255,0.55)' }}>
          +{items.length - max}
        </span>
      )}
    </div>
  );
}

// ── NSC Card ──────────────────────────────────────────────
function NSCCard({ nsc, unlocks, gm, compact, delay, onClick }) {
  const [hov, setHov] = appUS(false);
  const unlocked = unlocks.unlockedFor(nsc);
  const stage = unlocks.stageFor(nsc);
  const acc = accentOf(nsc, true);
  const accDim = hexA(acc, 0.4);
  const accBg  = hexA(acc, 0.10);
  const statusList = Array.isArray(nsc.status) ? nsc.status : (nsc.status ? [nsc.status] : []);
  const isDead = statusList.includes('Gefallen') || statusList.includes('Verstorben');
  const isUnknown = stage === 0;
  const totalFacts = factsOf(nsc).length;
  const openFacts = unlocked.size;

  // Subhead — nur Rasse (Beruf wandert nicht mehr in die Kopfzeile, der ist in der Meta sichtbar)
  const headBits = [];
  if (nsc.rasse) headBits.push(nsc.rasse);

  return (
    <div className="reveal-up" style={{ transitionDelay:`${delay}s` }}>
      <button type="button" onClick={() => onClick(nsc)}
        onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{ textDecoration:'none', display:'block', color:'inherit', width:'100%',
          padding:0, background:'transparent', border:'none', cursor:'pointer', textAlign:'left', font:'inherit' }}>
        <article style={{
          position:'relative',
          background: hov
            ? `linear-gradient(160deg, ${accBg}, rgba(10,6,28,0.92))`
            : 'linear-gradient(160deg, rgba(14,8,32,0.78), rgba(8,5,22,0.85))',
          border: `1px solid ${hov ? acc : (isUnknown ? 'rgba(160,140,255,0.12)' : 'rgba(160,140,255,0.18)')}`,
          borderRadius:'3px',
          padding: compact ? '14px 16px' : '20px 22px 18px',
          transition:'background 0.3s, border-color 0.3s, transform 0.25s, box-shadow 0.3s',
          transform: hov ? 'translateY(-3px)' : 'translateY(0)',
          boxShadow: hov ? `0 10px 30px rgba(0,0,0,0.5), 0 0 24px ${hexA(acc, 0.22)}` : '0 2px 10px rgba(0,0,0,0.3)',
          overflow:'hidden',
          opacity: isDead ? 0.92 : 1,
        }}>
          {/* Left accent bar */}
          <div style={{ position:'absolute', left:0, top:0, bottom:0, width:'3px',
            background: `linear-gradient(180deg, ${acc} 0%, ${accDim} 100%)`,
            opacity: isUnknown ? 0.35 : 1,
            boxShadow: hov ? `0 0 10px ${hexA(acc, 0.85)}` : 'none',
            transition:'box-shadow 0.3s' }} />

          {/* Diagonal stripe texture */}
          <div style={{ position:'absolute', inset:0, pointerEvents:'none',
            backgroundImage: `repeating-linear-gradient(135deg, transparent, transparent 22px, ${hexA(acc, 0.05)} 22px, ${hexA(acc, 0.05)} 23px)`,
            opacity: hov ? 1 : 0.55, transition:'opacity 0.3s' }} />

          {/* Stage badge top-right */}
          <div style={{ position:'absolute', top:10, right:12, zIndex:4 }}>
            <StageBadge stage={stage} acc={acc}/>
          </div>

          {/* Header row: portrait + name */}
          <div style={{ display:'flex', gap:'18px', alignItems:'flex-start', position:'relative', zIndex:1 }}>
            <div style={{ position:'relative', flexShrink:0 }}>
              <NSCPortrait nsc={nsc} stage={stage} acc={acc} size={compact ? 86 : 110}/>
              {isUnknown && (
                <div style={{
                  position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center',
                  fontFamily:'var(--font-mono)', fontSize: compact ? 22 : 28, fontWeight:700,
                  color:'rgba(124,77,255,0.85)',
                  textShadow:'0 0 10px rgba(124,77,255,0.7), 0 0 22px rgba(124,77,255,0.4)',
                  animation:'pulse-glow 2.5s ease-in-out infinite',
                  userSelect:'none', pointerEvents:'none',
                }}>?</div>
              )}
            </div>
            <div style={{ flex:1, minWidth:0, paddingTop:'4px', paddingRight: compact ? 60 : 90 }}>
              {nsc.titel && (
                <div style={{ fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.18em',
                  color: unlocked.has('titel') ? acc : 'rgba(200,190,240,0.45)',
                  textTransform:'uppercase', marginBottom:3,
                  fontStyle: unlocked.has('titel') ? 'normal' : 'italic',
                }}>
                  {nsc.titel}
                </div>
              )}
              {isUnknown ? (
                <h3 style={{
                  fontFamily:'var(--font-mono)', fontSize: compact ? '12px' : '14px',
                  fontWeight:400, letterSpacing:'0.14em',
                  color:'rgba(160,140,255,0.45)',
                  textShadow:'0 0 12px rgba(124,77,255,0.55), 0 0 26px rgba(124,77,255,0.25)',
                  lineHeight:1.3, marginBottom:5,
                  userSelect:'none',
                  animation:'unknownDrift 5s ease-in-out infinite',
                }}>{_scrambleName(nsc.name)}</h3>
              ) : (
                <h3 style={{
                  fontFamily:'var(--font-display)', fontSize: compact ? '14px' : '17px',
                  fontWeight:400, letterSpacing:'0.06em', color:'#f0eeff',
                  textShadow: hov ? `0 0 14px ${hexA(acc, 0.55)}` : 'none',
                  lineHeight:1.15, textWrap:'balance',
                  marginBottom:5,
                }}>{nsc.name}</h3>
              )}
              {headBits.length > 0 && (
                <div style={{ display:'flex', alignItems:'center', gap:8, flexWrap:'wrap', marginBottom:7 }}>
                  {headBits.map((b, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && <span style={{ color:'rgba(160,140,255,0.3)', fontSize:9 }}>·</span>}
                      <span style={{ fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.18em',
                        color: acc, textTransform:'uppercase' }}>{b}</span>
                    </React.Fragment>
                  ))}
                </div>
              )}
              {!isUnknown && <StatusPills status={nsc.status}/>}
            </div>
          </div>

          {/* Divider */}
          {!compact && stage >= 1 && (
            <div style={{ display:'flex', alignItems:'center', gap:8, margin:'14px 0 10px', position:'relative', zIndex:1 }}>
              <div style={{ height:1, width:18, background: hexA(acc, 0.55) }} />
              <svg width="5" height="5" viewBox="0 0 5 5"><polygon points={hexPoints(5)} fill={hexA(acc, 0.75)} /></svg>
              <div style={{ height:1, flex:1, background:`linear-gradient(90deg, ${hexA(acc, 0.55)}, transparent)` }} />
            </div>
          )}

          {/* Unvergessliche Eigenschaft */}
          {nsc.unvergesslich && (
            <div style={{ position:'relative', zIndex:1, marginBottom: compact ? 8 : 12,
              padding:'8px 10px', borderLeft:`2px solid ${hexA(acc, 0.6)}`,
              background: hexA(acc, 0.05),
              fontFamily:'var(--font-body)', fontSize: compact ? 11 : 12.5, fontStyle:'italic',
              color: unlocked.has('unvergesslich') ? 'rgba(230,225,255,0.85)' : 'rgba(200,190,240,0.5)',
              lineHeight:1.55 }}>
              <span style={{ fontFamily:'var(--font-mono)', fontSize:7.5, letterSpacing:'0.24em',
                color: hexA(acc, 0.7), textTransform:'uppercase', marginRight:6 }}>◇</span>
              {nsc.unvergesslich}
            </div>
          )}

          {/* Eigenschaften pills */}
          {!compact && nsc.eigenschaften && nsc.eigenschaften.length > 0 && (
            <div style={{ position:'relative', zIndex:1, marginBottom:12, opacity: unlocked.has('eigenschaften') ? 1 : 0.55 }}>
              <TraitPills items={nsc.eigenschaften} acc={acc} max={4}/>
            </div>
          )}

          {/* Footer meta strip — nur unlockte Cells */}
          {!compact && (
            <div style={{
              position:'relative', zIndex:1,
              display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4px 12px',
              paddingTop:'10px',
              borderTop:`1px solid ${hexA(acc, 0.22)}`,
              fontFamily:'var(--font-mono)', fontSize:'8.5px', letterSpacing:'0.16em', textTransform:'uppercase',
            }}>
              {nsc.division && nsc.division !== 'Keine' &&
                <MetaLine label="Division"     value={`${romanFor(nsc) ? `${romanFor(nsc)} · ` : ''}${(nsc.division || '—').replace(/^Die /,'')}`} acc={acc} divisionAccent unlocked={unlocked.has('division')}/>}
              {nsc.organisation && (!nsc.division || nsc.division === 'Keine') &&
                <MetaLine label="Organisation" value={nsc.organisation} acc={acc} divisionAccent unlocked={unlocked.has('organisation')}/>}
              {nsc.rang &&
                <MetaLine label="Rang"         value={`${romanFor(nsc) ? `${romanFor(nsc)} · ` : ''}${nsc.rang}`} acc={acc} unlocked={unlocked.has('rang')}/>}
              {nsc.wohnort &&
                <MetaLine label="Wohnort"      value={nsc.wohnort} acc={acc} unlocked={unlocked.has('wohnort')}/>}
              {nsc.alter && (
                <MetaLine label="Alter"
                  value={`${nsc.alter}${nsc.lebensphase ? ` · ${nsc.lebensphase}` : ''}`}
                  acc={acc} unlocked={unlocked.has('alter')}/>
              )}
              {nsc.gottheit &&
                <MetaLine label="Gottheit"     value={nsc.gottheit} acc={acc} unlocked={unlocked.has('gottheit')}/>}
            </div>
          )}

          {/* Fakten-Stand */}
          {!isUnknown && (
            <div style={{
              position:'relative', zIndex:1, marginTop:10,
              fontFamily:'var(--font-mono)', fontSize:7.5,
              color:'rgba(160,140,255,0.55)', letterSpacing:'0.20em',
              textTransform:'uppercase',
            }}>
              ◇ {openFacts} / {totalFacts} Fakten freigeschaltet
            </div>
          )}
          {isUnknown && (
            <div style={{
              position:'relative', zIndex:1, marginTop:10, padding:'6px 10px',
              border:'1px solid rgba(124,77,255,0.22)',
              background:'rgba(124,77,255,0.05)',
              fontFamily:'var(--font-mono)', fontSize:8,
              color:'rgba(160,140,255,0.6)', letterSpacing:'0.20em',
              textTransform:'uppercase',
              animation:'pulse-glow 3.5s ease-in-out infinite',
              userSelect:'none',
            }}>
              ◈ Klassifiziert — Identität unbekannt
            </div>
          )}
        </article>
      </button>
    </div>
  );
}

function MetaLine({ label, value, acc, unlocked=true, divisionAccent }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:1, minWidth:0 }}>
      <span style={{ color:'rgba(160,140,255,0.4)', fontSize:7.5 }}>{label}</span>
      <span style={{
        color: !unlocked ? 'rgba(160,140,255,0.4)'
             : divisionAccent ? acc : 'rgba(220,210,255,0.78)',
        textShadow: unlocked && divisionAccent ? `0 0 10px ${hexA(acc, 0.4)}` : 'none',
        fontStyle: unlocked ? 'normal' : 'italic',
        overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
      }}>{value}</span>
    </div>
  );
}

// ── Stat Tile (clickable filter) ──────────────────────────
function StatTile({ label, value, color, active, onClick }) {
  const [hov, setHov] = appUS(false);
  const c = color || '#c9b8ff';
  const clickable = !!onClick;
  const borderCol = active ? c : (color ? `${color}44` : 'rgba(160,140,255,0.2)');
  const bgCol = active ? (color ? `${color}22` : 'rgba(124,77,255,0.18)') : 'rgba(10,6,28,0.6)';
  return (
    <button type="button" onClick={onClick} disabled={!clickable}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        padding:'6px 10px', minWidth:64,
        background: clickable && hov && !active ? (color ? `${color}11` : 'rgba(124,77,255,0.08)') : bgCol,
        border:`1px solid ${clickable && hov && !active ? (color ? `${color}88` : 'rgba(160,140,255,0.4)') : borderCol}`,
        borderRadius:3, textAlign:'center', position:'relative',
        cursor: clickable ? 'pointer' : 'default',
        boxShadow: active && color ? `0 0 12px ${color}33, 0 0 0 1px ${color}55 inset` : 'none',
        transition:'all 0.18s', fontFamily:'inherit', color:'inherit',
      }}>
      <div style={{ fontFamily:'var(--font-display)', fontSize:17, fontWeight:300, color:c, lineHeight:1, marginBottom:3,
        textShadow: color ? `0 0 12px ${color}55` : 'none' }}>
        {value.toString().padStart(2,'0')}
      </div>
      <div style={{ fontFamily:'var(--font-mono)', fontSize:7, letterSpacing:'0.18em', color:'rgba(160,140,255,0.6)', textTransform:'uppercase', whiteSpace:'nowrap' }}>
        {label}
      </div>
      {active && (
        <div style={{ position:'absolute', top:3, right:5, fontFamily:'var(--font-mono)', fontSize:8, color:c, lineHeight:1 }}>✓</div>
      )}
    </button>
  );
}

function ActivePill({ label, onRemove }) {
  return (
    <button onClick={onRemove} style={{
      display:'inline-flex', alignItems:'center', gap:6,
      padding:'4px 8px',
      background:'rgba(124,77,255,0.22)',
      border:'1px solid rgba(160,140,255,0.55)',
      borderRadius:2,
      color:'#f0eeff',
      fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.14em',
      cursor:'pointer', textTransform:'uppercase',
      transition:'all 0.15s',
    }}
    onMouseEnter={e => { e.currentTarget.style.background='rgba(227,103,96,0.25)'; e.currentTarget.style.borderColor='rgba(227,103,96,0.7)'; }}
    onMouseLeave={e => { e.currentTarget.style.background='rgba(124,77,255,0.22)'; e.currentTarget.style.borderColor='rgba(160,140,255,0.55)'; }}>
      <span>{label}</span>
      <span style={{ fontSize:10, lineHeight:1 }}>×</span>
    </button>
  );
}

// ── App ────────────────────────────────────────────────────
function App() {
  const [mouse, setMouse] = appUS({ x:0.5, y:0.5 });
  const [selected, setSelected] = appUS(null);
  const showParticles = TWEAK_DEFAULTS.showParticles;
  const showHexes = TWEAK_DEFAULTS.showHexes;
  const compactCards = TWEAK_DEFAULTS.compactCards;
  const handleMouseMove = appUC(e => { setMouse({ x: e.clientX/window.innerWidth, y: e.clientY/window.innerHeight }); }, []);

  // NSC-Daten und Blickwinkel aus Supabase
  const { nscs, perspectives, charPids, players, loading: dataLoading } = useNSCData();

  // Aktive Perspektive (welcher Spielercharakter blickt gerade)
  const [perspective, setPerspective] = appUS('alle');

  // Fakt-basiertes Freischaltsystem (persistiert in Supabase, pro Perspektive)
  const unlocks = useUnlocks(nscs, charPids, perspective, players);

  // Lookup: NSC-id -> aktuelle berechnete Stufe
  const stageById = appUM(() => {
    const m = {};
    nscs.forEach(n => m[n.id] = unlocks.stageFor(n));
    return m;
  }, [unlocks.byPersp, perspective, nscs]);

  // Filter-Werte nur aus Fakten, die der Spieler auch tatsächlich freigeschaltet hat
  const FILTER_VALUES = appUM(() => {
    const known = nscs.filter(n => (stageById[n.id] || 0) >= 1);
    const vis = (n, k) => unlocks.unlockedFor(n).has(k);
    return {
      rasse:      uniq(known.filter(n => vis(n,'rasse')).map(n => n.rasse)),
      geschlecht: uniq(known.filter(n => vis(n,'geschlecht')).map(n => n.geschlecht)),
      division:   DIVISION_ORDER.filter(d => known.some(n => vis(n,'division') && n.division === d)),
      beruf:      uniq(known.filter(n => vis(n,'beruf')).map(n => n.beruf)),
      gottheit:   uniq(known.filter(n => vis(n,'gottheit')).map(n => n.gottheit)),
      status:     STATUS_ORDER.filter(s => known.some(n => statusOf(n).includes(s))),
    };
  }, [nscs, stageById]);

  const [search, setSearch] = appUS('');
  const [filters, setFilters] = appUS({
    rasse:[], geschlecht:[], division:[], beruf:[], gottheit:[], status:[], kennenstufe:[]
  });
  const [sort, setSort] = appUS('kennenstufe-desc');

  const toggleFilter = (group, value) => {
    setFilters(f => ({ ...f, [group]: f[group].includes(value) ? f[group].filter(v => v !== value) : [...f[group], value] }));
  };
  const clearAll = () => { setFilters({ rasse:[], geschlecht:[], division:[], beruf:[], gottheit:[], status:[], kennenstufe:[] }); setSearch(''); };

  // Apply filters
  const filtered = appUM(() => {
    const q = search.trim().toLowerCase();
    const nscStatus = (n) => Array.isArray(n.status) ? n.status : (n.status ? [n.status] : []);
    const hasAttrFilter = ['rasse','geschlecht','division','beruf','gottheit','status'].some(g => filters[g].length > 0);
    let list = nscs.filter(n => {
      const stage = stageById[n.id] || 0;
      if (stage === 0) {
        // Unbekannte NSCs können keine Attributfilter oder Suche erfüllen
        if (hasAttrFilter || q) return false;
      } else {
        const unlockedKeys = unlocks.unlockedFor(n);
        for (const g of ['rasse','geschlecht','division','beruf','gottheit']) {
          if (filters[g].length) {
            if (!unlockedKeys.has(g) || !filters[g].includes(n[g])) return false;
          }
        }
        if (filters.status.length) {
          const sList = nscStatus(n);
          if (!filters.status.some(s => sList.includes(s))) return false;
        }
        if (q) {
          const hay = [n.name, n.rasse, n.beruf, n.division, n.unvergesslich, ...nscStatus(n),
                       ...(n.eigenschaften||[]), ...(n.talente||[])].filter(Boolean).join(' ').toLowerCase();
          if (!hay.includes(q)) return false;
        }
      }
      if (filters.kennenstufe.length && !filters.kennenstufe.includes(String(stage))) return false;
      return true;
    });
    list = [...list];
    if (sort === 'name')              list.sort((a,b) => a.name.localeCompare(b.name,'de'));
    else if (sort === 'kennenstufe-desc') list.sort((a,b) => stageById[b.id] - stageById[a.id] || a.name.localeCompare(b.name,'de'));
    else if (sort === 'kennenstufe-asc')  list.sort((a,b) => stageById[a.id] - stageById[b.id] || a.name.localeCompare(b.name,'de'));
    else if (sort === 'status') {
      const order = Object.fromEntries(STATUS_ORDER.map((s,i) => [s,i]));
      const rank = (n) => Math.min(...nscStatus(n).map(s => order[s] ?? 99), 99);
      list.sort((a,b) => rank(a) - rank(b) || a.name.localeCompare(b.name,'de'));
    }
    else if (sort === 'division') {
      const order = Object.fromEntries(DIVISION_ORDER.map((d,i) => [d,i]));
      list.sort((a,b) => (order[a.division] ?? 99) - (order[b.division] ?? 99) || a.name.localeCompare(b.name,'de'));
    }
    return list;
  }, [filters, search, sort, stageById]);

  const countForValue = (group, value) => {
    const q = search.trim().toLowerCase();
    const nscStatus = (n) => Array.isArray(n.status) ? n.status : (n.status ? [n.status] : []);
    const ATTR_KEYS = new Set(['rasse','geschlecht','division','beruf','gottheit']);
    return nscs.filter(n => {
      if ((stageById[n.id] || 0) === 0) return false;
      const unlockedKeys = unlocks.unlockedFor(n);
      for (const g of Object.keys(filters)) {
        if (g === group) continue;
        if (g === 'kennenstufe') {
          if (filters[g].length && !filters[g].includes(String(stageById[n.id]))) return false;
        } else if (g === 'status') {
          if (filters[g].length) {
            const sList = nscStatus(n);
            if (!filters[g].some(s => sList.includes(s))) return false;
          }
        } else if (ATTR_KEYS.has(g) && filters[g].length) {
          if (!unlockedKeys.has(g) || !filters[g].includes(n[g])) return false;
        }
      }
      if (group === 'kennenstufe') {
        if (String(stageById[n.id]) !== value) return false;
      } else if (group === 'status') {
        if (!nscStatus(n).includes(value)) return false;
      } else if (ATTR_KEYS.has(group)) {
        if (!unlockedKeys.has(group) || n[group] !== value) return false;
      } else {
        if (n[group] !== value) return false;
      }
      if (q) {
        const hay = [n.name, n.rasse, n.beruf, n.division, n.unvergesslich, ...nscStatus(n),
                     ...(n.eigenschaften||[]), ...(n.talente||[])].filter(Boolean).join(' ').toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    }).length;
  };

  const activeFilterCount = Object.values(filters).reduce((n,a) => n + a.length, 0) + (search ? 1 : 0);

  // Stats nach Kennenstufe (berechnet aus aktuellen Unlocks)
  const stats = appUM(() => {
    const m = { total: nscs.length, byStage: {} };
    for (let i = 0; i <= MAX_STAGE; i++) m.byStage[i] = nscs.filter(n => stageById[n.id] === i).length;
    return m;
  }, [stageById, nscs]);
  const knownCount = nscs.filter(n => stageById[n.id] > 0).length;
  const fullyCount = nscs.filter(n => stageById[n.id] >= MAX_STAGE).length;

  useScrollReveal([filtered.length, compactCards, stageById]);

  // Esc to close detail
  appUE(() => {
    const onKey = e => { if (e.key === 'Escape') setSelected(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  if (dataLoading) return (
    <div style={{ position:'fixed', inset:0, background:'#05040f', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.3em', color:'rgba(160,140,255,0.5)', textTransform:'uppercase' }}>
        ◈ Lade NSC-Register …
      </div>
    </div>
  );

  return (
    <div onMouseMove={handleMouseMove} style={{ position:'relative', minHeight:'100vh' }}>
      {showParticles && <ParticleField mouseX={mouse.x} mouseY={mouse.y} />}
      {showHexes && <FloatingHexField mouseX={mouse.x} mouseY={mouse.y} />}

      <PageHeader />
      <SiteNav rightLabel="NSC-REGISTER" />

      {/* MAIN */}
      <div style={{ position:'relative', zIndex:5, maxWidth:1380, margin:'0 auto', padding:'46px 36px 80px' }}>
        {/* Breadcrumb + Blickwinkel-Wahl */}
        <div className="reveal-up" style={{ marginBottom:14, display:'flex', alignItems:'center', justifyContent:'space-between', gap:14, flexWrap:'wrap' }}>
          <div style={{ display:'flex', alignItems:'center', gap:10, fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.22em', textTransform:'uppercase', color:'rgba(160,140,255,0.55)' }}>
            <a href="Meruria.html" style={{ color:'rgba(160,140,255,0.55)', textDecoration:'none' }}>Meruria</a>
            <span style={{ opacity:0.4 }}>›</span>
            <a href="Charaktere.html" style={{ color:'rgba(160,140,255,0.55)', textDecoration:'none' }}>Charaktere</a>
            <span style={{ opacity:0.4 }}>›</span>
            <span style={{ color:'#c9b8ff' }}>NSC</span>
          </div>
          <div style={{ display:'flex', alignItems:'flex-start', gap:10, flexWrap:'wrap' }}>
            <span style={{ fontFamily:'var(--font-mono)', fontSize:8.5, letterSpacing:'0.28em', color:'rgba(160,140,255,0.55)', textTransform:'uppercase', paddingTop:7, flexShrink:0 }}>
              ◇ Blickwinkel
            </span>
            <div style={{ display:'flex', gap:6, flexWrap:'wrap', alignItems:'flex-start' }}>
              {/* "Alle" chip */}
              <button onClick={() => setPerspective('alle')} style={{
                fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.14em', textTransform:'uppercase',
                padding:'5px 12px', borderRadius:3, cursor:'pointer', border:'1px solid',
                background: perspective === 'alle' ? 'rgba(160,140,255,0.2)' : 'rgba(160,140,255,0.05)',
                borderColor: perspective === 'alle' ? 'rgba(160,140,255,0.7)' : 'rgba(160,140,255,0.25)',
                color: perspective === 'alle' ? '#f0eeff' : 'rgba(160,140,255,0.5)',
                boxShadow: perspective === 'alle' ? '0 0 10px rgba(124,77,255,0.2)' : 'none',
                transition:'all 0.15s',
              }}>Alle</button>
              {/* Separator */}
              {players.length > 0 && <span style={{ color:'rgba(124,77,255,0.2)', alignSelf:'center', fontSize:12 }}>|</span>}
              {/* Player groups */}
              {players.map(player => {
                const playerActive = perspective === player.id;
                const playerChars = perspectives.filter(p => player.charIds.includes(p.id));
                const anyCharActive = playerChars.some(c => c.id === perspective);
                return (
                  <div key={player.id} style={{ display:'flex', gap:4, alignItems:'center', flexWrap:'wrap' }}>
                    {/* Player chip */}
                    <button onClick={() => setPerspective(player.id)} style={{
                      fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.12em', textTransform:'uppercase',
                      padding:'5px 11px', borderRadius:3, cursor:'pointer', border:'1px solid',
                      background: playerActive ? 'rgba(124,77,255,0.22)' : (anyCharActive ? 'rgba(124,77,255,0.08)' : 'rgba(124,77,255,0.04)'),
                      borderColor: playerActive ? 'rgba(124,77,255,0.7)' : (anyCharActive ? 'rgba(124,77,255,0.35)' : 'rgba(124,77,255,0.18)'),
                      color: playerActive ? '#f0eeff' : (anyCharActive ? 'rgba(200,190,240,0.7)' : 'rgba(160,140,255,0.45)'),
                      boxShadow: playerActive ? '0 0 10px rgba(124,77,255,0.25)' : 'none',
                      transition:'all 0.15s',
                    }}>{player.label}</button>
                    {/* Character chips */}
                    {playerChars.map(c => {
                      const charActive = perspective === c.id;
                      return (
                        <button key={c.id} onClick={() => setPerspective(c.id)} style={{
                          fontFamily:'var(--font-body)', fontWeight:300, fontSize:11, letterSpacing:'0.04em',
                          padding:'4px 10px', borderRadius:3, cursor:'pointer', border:'1px solid',
                          background: charActive ? 'rgba(124,77,255,0.18)' : 'rgba(124,77,255,0.04)',
                          borderColor: charActive ? 'rgba(124,77,255,0.6)' : 'rgba(124,77,255,0.15)',
                          color: charActive ? '#f0eeff' : 'rgba(180,170,220,0.5)',
                          boxShadow: charActive ? '0 0 8px rgba(124,77,255,0.2)' : 'none',
                          transition:'all 0.15s',
                        }}>{c.label}</button>
                      );
                    })}
                    {players.indexOf(player) < players.length - 1 && (
                      <span style={{ color:'rgba(124,77,255,0.2)', fontSize:12 }}>|</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Hero */}
        <div className="reveal-up" style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:24, marginBottom:36, flexWrap:'wrap' }}>
          <div style={{ maxWidth:620 }}>
            <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(30px,3.6vw,46px)', fontWeight:300, letterSpacing:'0.20em', color:'#f0eeff', textShadow:'0 0 40px rgba(124,77,255,0.4)', lineHeight:1.1, textTransform:'uppercase', margin:'0 0 14px 0' }}>
              Nichtspielercharaktere
            </h1>
            <p style={{ fontFamily:'var(--font-body)', fontWeight:300, fontSize:13, lineHeight:1.85, color:'rgba(220,210,255,0.55)', letterSpacing:'0.04em', textWrap:'pretty', margin:0 }}>
              Namenlose Gestalten am Hafen, Mentor*innen in den Hallen der Kuratoren, Feinde im Schatten — das NSC-Register sammelt alle Personen, die euer Weg gekreuzt hat. Mit jedem Fakt, den ihr im Spiel über sie erfahrt, schaltet die Spielleitung einen Eintrag frei und eure Vertrautheit wächst: von Gerüchten bis Eingeweiht.
            </p>
          </div>
          {/* Gesamtfortschritt — im Kollektikon-Stil */}
          <div style={{ textAlign:'right', minWidth:240 }}>
            <div style={{ fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.28em', color:'rgba(124,77,255,0.55)', textTransform:'uppercase', marginBottom:8 }}>
              Gesamtfortschritt
            </div>
            <div style={{ fontFamily:'var(--font-display)', fontWeight:300, fontSize:42, color:'#f0eeff', lineHeight:1 }}>
              {knownCount}<span style={{ color:'rgba(160,140,255,0.4)', fontSize:24 }}> / {stats.total}</span>
            </div>
            <div style={{ marginTop:10, position:'relative', height:6 }}>
              {fullyCount > 0 && (
                <div style={{ position:'absolute', left:0, top:0, bottom:0, width:`${(fullyCount/stats.total)*100}%`,
                  boxShadow:'0 0 9px 1px rgba(160,140,255,0.55), 0 0 20px 5px rgba(160,140,255,0.22), 0 0 32px 10px rgba(160,140,255,0.09)',
                  borderRadius:2, pointerEvents:'none',
                }}/>
              )}
              <div style={{ position:'absolute', inset:0, background:'rgba(124,77,255,0.08)', border:'1px solid rgba(124,77,255,0.22)', borderRadius:2, overflow:'hidden' }}>
                <div style={{ position:'absolute', left:0, top:0, bottom:0, width:`${(knownCount/stats.total)*100}%`,
                  background:'linear-gradient(90deg, rgba(220,215,250,0.18), rgba(240,238,255,0.28))',
                  transition:'width 0.8s cubic-bezier(.2,.85,.2,1)',
                }}/>
                <div style={{ position:'absolute', left:-1, top:-1, bottom:-1, width:`${(fullyCount/stats.total)*100}%`,
                  background:'linear-gradient(90deg, rgba(140,100,255,1), rgba(200,180,255,1))',
                  boxShadow:'inset 0 0 4px rgba(255,255,255,0.45)',
                  borderRadius:2,
                  transition:'width 1s cubic-bezier(.2,.85,.2,1)',
                }}/>
              </div>
            </div>
            <div style={{ marginTop:6, display:'flex', justifyContent:'flex-end', gap:14, fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.18em', textTransform:'uppercase' }}>
              <span style={{ color:'rgba(240,238,255,0.7)' }}>
                <span style={{ display:'inline-block', width:8, height:8, background:'rgba(240,238,255,0.85)', marginRight:5, verticalAlign:'middle' }}/>
                {Math.round((knownCount/stats.total)*100)} % Gerüchte
              </span>
              <span style={{ color:'rgba(190,170,255,0.95)' }}>
                <span style={{ display:'inline-block', width:8, height:8, background:'rgba(160,140,255,0.95)', marginRight:5, verticalAlign:'middle' }}/>
                {Math.round((fullyCount/stats.total)*100)} % Eingeweiht
              </span>
            </div>
          </div>
        </div>

        {/* Two-column layout */}
        <div style={{ display:'grid', gridTemplateColumns:'280px 1fr', gap:'28px', alignItems:'flex-start' }}>
          {/* SIDEBAR */}
          <aside style={{ position:'sticky', top:72,
            background:'linear-gradient(160deg, rgba(14,8,32,0.78), rgba(8,5,22,0.85))',
            border:'1px solid rgba(160,140,255,0.18)', borderRadius:3, padding:'18px 20px',
            maxHeight:'calc(100vh - 96px)', overflow:'auto' }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:14 }}>
              <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                <svg width="10" height="10" viewBox="0 0 10 10"><polygon points={hexPoints(10)} fill="#7c4dff" stroke="rgba(160,140,255,0.8)" strokeWidth="0.5"/></svg>
                <span style={{ fontFamily:'var(--font-display)', fontSize:13, letterSpacing:'0.22em', color:'#f0eeff', textTransform:'uppercase' }}>Filter</span>
                {activeFilterCount > 0 && (
                  <span style={{ fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.1em',
                    padding:'2px 6px', background:'rgba(124,77,255,0.25)', border:'1px solid rgba(160,140,255,0.5)', color:'#f0eeff', borderRadius:2 }}>
                    {activeFilterCount}
                  </span>
                )}
              </div>
              {activeFilterCount > 0 && (
                <button onClick={clearAll} style={{
                  background:'transparent', border:'none', cursor:'pointer',
                  fontFamily:'var(--font-mono)', fontSize:8, letterSpacing:'0.2em',
                  color:'rgba(160,140,255,0.55)', textTransform:'uppercase',
                  padding:'4px 0', textDecoration:'underline', textUnderlineOffset:3,
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#f0eeff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(160,140,255,0.55)'}>
                  Zurücksetzen
                </button>
              )}
            </div>

            {/* Search */}
            <div style={{ position:'relative', marginBottom:18 }}>
              <input value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Name, Beruf, Ort..."
                style={{
                  width:'100%', padding:'9px 30px 9px 12px',
                  background:'rgba(5,4,15,0.7)', border:'1px solid rgba(160,140,255,0.22)',
                  borderRadius:2, color:'#f0eeff',
                  fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.06em',
                  outline:'none', transition:'border-color 0.2s, box-shadow 0.2s',
                }}
                onFocus={e => { e.target.style.borderColor='rgba(124,77,255,0.7)'; e.target.style.boxShadow='0 0 12px rgba(124,77,255,0.18)'; }}
                onBlur={e => { e.target.style.borderColor='rgba(160,140,255,0.22)'; e.target.style.boxShadow='none'; }} />
              <svg width="12" height="12" viewBox="0 0 12 12" style={{ position:'absolute', right:10, top:'50%', transform:'translateY(-50%)', opacity:0.5 }}>
                <circle cx="5" cy="5" r="3.5" fill="none" stroke="#7c4dff" strokeWidth="1"/>
                <line x1="7.5" y1="7.5" x2="10.5" y2="10.5" stroke="#7c4dff" strokeWidth="1"/>
              </svg>
            </div>

            <FilterGroup title="Vertrautheit" values={['0','1','2','3','4']} selected={filters.kennenstufe}
              onToggle={v => toggleFilter('kennenstufe', v)}
              getCount={v => countForValue('kennenstufe', v)}
              labelFor={v => STAGE_LABELS[v]} />
            <FilterGroup title="Status"      values={FILTER_VALUES.status}      selected={filters.status}      onToggle={v => toggleFilter('status', v)}      getCount={v => countForValue('status', v)} />
            <FilterGroup title="Division"    values={FILTER_VALUES.division}    selected={filters.division}    onToggle={v => toggleFilter('division', v)}    getCount={v => countForValue('division', v)} labelFor={v => v.replace(/^Die /,'')} />
            <FilterGroup title="Rasse"       values={FILTER_VALUES.rasse}       selected={filters.rasse}       onToggle={v => toggleFilter('rasse', v)}       getCount={v => countForValue('rasse', v)} />
            <FilterGroup title="Geschlecht"  values={FILTER_VALUES.geschlecht}  selected={filters.geschlecht}  onToggle={v => toggleFilter('geschlecht', v)}  getCount={v => countForValue('geschlecht', v)} />
            <FilterGroup title="Beruf"       values={FILTER_VALUES.beruf}       selected={filters.beruf}       onToggle={v => toggleFilter('beruf', v)}       getCount={v => countForValue('beruf', v)} />
            <FilterGroup title="Gottheit"    values={FILTER_VALUES.gottheit}    selected={filters.gottheit}    onToggle={v => toggleFilter('gottheit', v)}    getCount={v => countForValue('gottheit', v)} />
          </aside>

          {/* RESULTS */}
          <section>
            {/* Toolbar */}
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:14, marginBottom:18, flexWrap:'wrap' }}>
              <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.28em', color:'rgba(160,140,255,0.7)', textTransform:'uppercase' }}>
                  Register
                </span>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.18em', color:'rgba(160,140,255,0.45)' }}>
                  {filtered.length.toString().padStart(2,'0')} / {nscs.length.toString().padStart(2,'0')} NSC
                </span>
                {perspective !== 'alle' && (
                  <span style={{ fontFamily:'var(--font-mono)', fontSize:8.5, letterSpacing:'0.22em',
                    padding:'3px 8px', background:'rgba(124,77,255,0.18)', border:'1px solid rgba(160,140,255,0.6)',
                    color:'#c9b8ff', textTransform:'uppercase', borderRadius:2 }}>
                    ◇ Blickwinkel: {perspective === 'alle' ? 'Alle' : players.find(p => p.id === perspective)?.label || perspectives.find(p => p.id === perspective)?.label || perspective}
                  </span>
                )}
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:8, letterSpacing:'0.22em', color:'rgba(160,140,255,0.5)', textTransform:'uppercase' }}>Sortieren</span>
                <select value={sort} onChange={e => setSort(e.target.value)} style={{
                  padding:'5px 10px',
                  background:'rgba(5,4,15,0.7)',
                  border:'1px solid rgba(160,140,255,0.22)',
                  borderRadius:2, color:'#f0eeff',
                  fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.1em',
                  cursor:'pointer', outline:'none',
                }}>
                  <option value="kennenstufe-desc">Vertrautheit ↓</option>
                  <option value="kennenstufe-asc">Vertrautheit ↑</option>
                  <option value="name">Name (A–Z)</option>
                  <option value="status">Status</option>
                  <option value="division">Division (I → VIII)</option>
                </select>
              </div>
            </div>

            {/* Active filter pills */}
            {activeFilterCount > 0 && (
              <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:18, padding:'10px 12px',
                background:'rgba(124,77,255,0.06)', border:'1px dashed rgba(160,140,255,0.25)', borderRadius:2 }}>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:8, letterSpacing:'0.24em', color:'rgba(160,140,255,0.65)', textTransform:'uppercase', padding:'4px 4px 4px 0' }}>Aktiv:</span>
                {search && <ActivePill label={`„${search}"`} onRemove={() => setSearch('')} />}
                {Object.entries(filters).map(([group, vals]) =>
                  vals.map(v => (
                    <ActivePill key={`${group}-${v}`}
                      label={group === 'division' ? v.replace(/^Die /,'')
                           : group === 'kennenstufe' ? `${STAGE_LABELS[v]} (Stufe ${v})`
                           : v}
                      onRemove={() => toggleFilter(group, v)} />
                  ))
                )}
              </div>
            )}

            {/* Result grid */}
            {filtered.length === 0 ? (
              <div style={{
                padding:'60px 30px', textAlign:'center',
                border:'1px dashed rgba(160,140,255,0.25)', borderRadius:3,
                background:'rgba(10,6,28,0.4)',
              }}>
                <svg width="48" height="48" viewBox="0 0 48 48" style={{ margin:'0 auto 16px', opacity:0.5 }}>
                  <polygon points={hexPoints(48)} fill="none" stroke="#7c4dff" strokeWidth="1" strokeDasharray="3 3"/>
                  <text x="24" y="30" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="14" fill="#7c4dff" opacity="0.7">∅</text>
                </svg>
                <div style={{ fontFamily:'var(--font-display)', fontSize:14, letterSpacing:'0.22em', color:'#c9b8ff', textTransform:'uppercase', marginBottom:8 }}>
                  Keine NSC im Register
                </div>
                <div style={{ fontFamily:'var(--font-body)', fontSize:12, color:'rgba(200,190,240,0.55)', marginBottom:14 }}>
                  Mit den aktuellen Filtern bleibt das Archiv leer.
                </div>
                <button onClick={clearAll} style={{
                  padding:'7px 16px',
                  background:'rgba(124,77,255,0.15)',
                  border:'1px solid rgba(160,140,255,0.5)',
                  color:'#f0eeff',
                  fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.22em',
                  cursor:'pointer', borderRadius:2, textTransform:'uppercase',
                }}>Filter zurücksetzen</button>
              </div>
            ) : (
              <div style={{
                display:'grid',
                gridTemplateColumns: compactCards ? 'repeat(auto-fill, minmax(310px, 1fr))' : 'repeat(auto-fill, minmax(400px, 1fr))',
                gap:16,
              }}>
                {filtered.map((nsc, i) => (
                  <NSCCard key={nsc.id} nsc={nsc} unlocks={unlocks} gm={false} compact={compactCards}
                    delay={Math.min(i * 0.04, 0.4)}
                    onClick={(n) => setSelected(n)} />
                ))}
              </div>
            )}
          </section>
        </div>

        {/* Closing flourish */}
        <div className="reveal-up" style={{ display:'flex', alignItems:'center', gap:14, marginTop:48, justifyContent:'center' }}>
          <div style={{ width:80, height:1, background:'linear-gradient(270deg, rgba(124,77,255,0.5), transparent)' }} />
          <svg width="6" height="6" viewBox="0 0 6 6"><polygon points={hexPoints(6)} fill="rgba(124,77,255,0.4)" stroke="rgba(160,140,255,0.5)" strokeWidth="0.5" /></svg>
          <div style={{ width:80, height:1, background:'linear-gradient(90deg, rgba(124,77,255,0.5), transparent)' }} />
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ position:'relative', zIndex:10, padding:'10px 32px', borderTop:'1px solid rgba(160,140,255,0.07)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <div style={{ fontFamily:'var(--font-mono)', fontSize:7, color:'rgba(160,140,255,0.22)', letterSpacing:'0.2em' }}>◈ REGISTER-STATUS: NOMINAL ◈ EPOCHE: UNBEKANNT</div>
        <div style={{ fontFamily:'var(--font-mono)', fontSize:7, color:'rgba(160,140,255,0.22)', letterSpacing:'0.2em' }}>MERURIA // NSC-REGISTER</div>
      </div>

      {/* Detail Panel */}
      <NSCDetailPanel nsc={selected} unlocks={unlocks} gm={false} onClose={() => setSelected(null)}
        onSelectNsc={(n) => setSelected(n)} />

    </div>
  );
}

const { SiteGate } = window;
ReactDOM.createRoot(document.getElementById('root')).render(<SiteGate><App /></SiteGate>);
