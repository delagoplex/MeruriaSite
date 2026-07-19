/* nsc-detail-panel.jsx — Slide-in detail panel for a single NSC.
   Fakt-basiertes Freischaltsystem: jeder Fakt hat einen eigenen Unlock-State,
   im GM-Modus erscheinen Toggle-Buttons, sonst Lock-Platzhalter. */

const { useEffect:dpUE, useRef:dpUR, useState:dpUS } = React;
const { STAGE_LABELS:dpSL, MAX_STAGE:dpMS,
        hexPoints:dpHex, hexA:dpHA, accentOf:dpAO, romanFor:dpRoman,
        GOLD:dpGOLD, GOLD_GLOW:dpGOLD_GLOW, goldA:dpGoldA,
        meruriaDoyText:dpDoyText, meruriaZodiacOf:dpZodiacOf,
        NSCPortrait, StageProgress, StatusPills, UnlockToggle,
        } = window;

// Sektion, hinter deren globalem Sichtbarkeits-Auge ein Fakt-Key hängt
const DP_SEC_OF_PREFIX = { vna:'vname', eig:'pers', tal:'pers', mak:'pers', rou:'routine',
  gew:'gewohnheiten', aus:'ausr', beg:'begleiter', mot:'motive', fam:'kontakte', fre:'kontakte', riv:'kontakte' };
function dpVisKeyOf(key) {
  const m = key.match(/^([a-z]+)-(\d+)$/);
  if (m) return DP_SEC_OF_PREFIX[m[1]] || m[1];
  if (key === 'habe') return 'ausr';
  if (key === 'unvergesslich') return 'pers';
  return key;
}

const _DP_GLYPHS = '░▒▓█▪◆◈⬡⬢⬤⬧◉●○◇□■▾▸△▷▶▽▼◁◀';
function _dpScrambleName(name) {
  return name.split('').map((c, i) => {
    if (c === ' ' || c === '-') return c;
    const seed = ((name.charCodeAt(0)*17 + i*31 + name.charCodeAt(i % name.length)*7) % _DP_GLYPHS.length + _DP_GLYPHS.length) % _DP_GLYPHS.length;
    return _DP_GLYPHS[seed];
  }).join('');
}

// ── Section header ───────────────────────────────────────
function DPSection({ title, acc, count, total, hint }) {
  const allOpen = count >= total && total > 0;
  return (
    <div style={{ marginBottom: 10, marginTop: 22, display:'flex', alignItems:'center', gap:10 }}>
      <span style={{ fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.30em',
        color: count > 0 ? acc : 'rgba(160,140,255,0.5)', textTransform:'uppercase' }}>
        ◇ {title}
      </span>
      <div style={{ flex:1, height:1, background: count > 0 ? dpHA(acc, 0.4) : 'rgba(160,140,255,0.12)' }} />
      <span style={{ fontFamily:'var(--font-mono)', fontSize:7.5, letterSpacing:'0.22em',
        color: allOpen ? 'rgba(200,190,240,0.7)' : (count > 0 ? 'rgba(200,190,240,0.5)' : 'rgba(160,140,255,0.35)'), textTransform:'uppercase' }}>
        {hint || (total > 0 ? `${count} / ${total} entdeckt` : '—')}
      </span>
    </div>
  );
}

// ── Locked placeholder (player view) ─────────────────────
function DPLocked({ acc, hint }) {
  return (
    <div style={{
      padding:'10px 14px',
      border:`1px dashed ${dpHA(acc, 0.25)}`,
      background:'rgba(124,77,255,0.03)', borderRadius:2,
      display:'flex', alignItems:'center', gap:8,
      fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.18em', textTransform:'uppercase',
      color:'rgba(160,140,255,0.55)',
    }}>
      <span style={{ width:6, height:6, border:`1px solid ${dpHA(acc, 0.45)}`, display:'inline-block' }}/>
      <span>{hint || 'Unbekannt'}</span>
    </div>
  );
}

// ── Fact row (label + value + optional toggle) ───────────
function FactRow({ label, value, isOpen, toggleState, acc, gm, onToggle }) {
  return (
    <React.Fragment>
      <span style={{ fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.22em', color:'rgba(160,140,255,0.5)', textTransform:'uppercase', whiteSpace:'nowrap', paddingTop:2 }}>
        {label}
      </span>
      <div style={{ display:'flex', alignItems:'center', gap:10, justifyContent:'space-between', flexWrap:'wrap' }}>
        {isOpen || gm ? (
          <span style={{ fontFamily:'var(--font-body)', fontWeight:300, fontSize:13,
            color: isOpen ? '#f0eeff' : 'rgba(200,190,240,0.5)',
            fontStyle: isOpen ? 'normal' : 'italic' }}>
            {value || <span style={{ color:'rgba(160,140,255,0.4)', fontStyle:'italic' }}>—</span>}
          </span>
        ) : (
          <span style={{ fontFamily:'var(--font-mono)', fontSize:10, color:dpHA(acc, 0.55), letterSpacing:'0.18em', textTransform:'uppercase', display:'inline-flex', alignItems:'center', gap:6 }}>
            <span style={{ width:6, height:6, border:`1px solid ${dpHA(acc, 0.45)}`, display:'inline-block' }}/>
            Unbekannt
          </span>
        )}
        {gm && <UnlockToggle state={toggleState} onClick={onToggle}/>}
      </div>
    </React.Fragment>
  );
}

// ── Bullet list item — Talente/Eigenschaften (Pills) ─────
function Pills({ items, acc }) {
  return (
    <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
      {items.map((e, i) => (
        <span key={i} style={{
          padding:'5px 10px',
          fontFamily:'var(--font-mono)', fontSize:9.5, letterSpacing:'0.16em', textTransform:'uppercase',
          color:'#f0eeff', background: dpHA(acc, 0.14),
          border:`1px solid ${dpHA(acc, 0.45)}`, borderRadius:2,
        }}>
          {e}
        </span>
      ))}
    </div>
  );
}
function Bullets({ items, acc, columns=1 }) {
  return (
    <div style={{ display:'grid', gridTemplateColumns: columns === 2 ? '1fr 1fr' : '1fr', gap:'4px 14px' }}>
      {items.map((t, i) => (
        <div key={i} style={{
          display:'flex', alignItems:'baseline', gap:8,
          padding:'5px 10px 5px 8px',
          borderLeft:`2px solid ${dpHA(acc, 0.55)}`,
          background: dpHA(acc, 0.05),
          fontFamily:'var(--font-body)', fontSize:12.5, color:'#f0eeff',
        }}>
          <svg width="4" height="4" viewBox="0 0 4 4" style={{ flexShrink:0, transform:'translateY(-1px)' }}>
            <polygon points={dpHex(4)} fill={acc} />
          </svg>
          <span style={{ flex:1, lineHeight:1.5 }}>{t}</span>
        </div>
      ))}
    </div>
  );
}

// ── Indexierte Liste (jeder Eintrag toggle-bar) ──────────
function IndexedList({ items, keyPrefix, isOpen, onToggle, toggleState, gm, acc, render, lockedHint }) {
  if (!items || items.length === 0) {
    return <div style={{ fontFamily:'var(--font-body)', fontStyle:'italic', fontSize:12, color:'rgba(160,140,255,0.45)', padding:'4px 0' }}>—</div>;
  }
  const anyVisible = items.some((_, i) => gm || isOpen(`${keyPrefix}-${i}`));
  if (!anyVisible) return <DPLocked acc={acc} hint={lockedHint || 'Unbekannt'}/>;
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
      {items.map((it, i) => {
        const k = `${keyPrefix}-${i}`;
        const open = isOpen(k);
        if (!gm && !open) return null;
        return (
          <div key={i} style={{ display:'flex', gap:10, alignItems:'flex-start' }}>
            <div style={{ flex:1, opacity: open ? 1 : 0.55 }}>{render(it, i, open)}</div>
            {gm && <UnlockToggle state={toggleState ? toggleState(k) : (open ? 'all' : 'none')} onClick={() => onToggle(k)} size="sm"/>}
          </div>
        );
      })}
    </div>
  );
}

// ── Routine-Eintrag (Zeit · Ort · Tat) ──────────────────
function RoutineEntry({ entry, open, acc }) {
  return (
    <div style={{
      padding:'8px 12px',
      background: open ? dpHA(acc, 0.05) : 'rgba(124,77,255,0.03)',
      border:`1px solid ${dpHA(acc, open ? 0.25 : 0.12)}`,
      borderLeft:`2px solid ${dpHA(acc, open ? 0.7 : 0.3)}`,
      borderRadius:2,
    }}>
      <div style={{ display:'flex', alignItems:'baseline', gap:10, flexWrap:'wrap', marginBottom:3 }}>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.22em',
          color:acc, textTransform:'uppercase' }}>{entry.zeit}</span>
        {entry.ort && (
          <React.Fragment>
            <span style={{ color:'rgba(160,140,255,0.3)', fontSize:9 }}>·</span>
            <span style={{ fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.14em',
              color:'rgba(200,190,240,0.65)' }}>{entry.ort}</span>
          </React.Fragment>
        )}
      </div>
      <div style={{ fontFamily:'var(--font-body)', fontSize:12.5, color: open ? '#f0eeff' : 'rgba(200,190,240,0.55)', lineHeight:1.55 }}>
        {entry.tat}
      </div>
    </div>
  );
}

// 5-zackiger Stern als SVG-Polygon
function starPoints(cx, cy, rOut, rIn) {
  const pts = [];
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? rOut : rIn;
    const a = (Math.PI/2) - (Math.PI * i / 5);
    pts.push(`${(cx + r*Math.cos(a)).toFixed(2)},${(cy - r*Math.sin(a)).toFixed(2)}`);
  }
  return pts.join(' ');
}

// ── Routine-Zeitachse — Sterne, verbunden durch vertikale Linie ──
function RoutineTimeline({ entries, isOpen, onToggle, toggleState, gm, acc }) {
  if (!entries || entries.length === 0) {
    return <div style={{ fontFamily:'var(--font-body)', fontStyle:'italic', fontSize:12, color:'rgba(160,140,255,0.45)', padding:'4px 0' }}>—</div>;
  }
  const ROW_GAP = 12;        // vertikaler Abstand zwischen Einträgen
  const STAR_R  = 9;         // Stern-Außenradius
  const STAR_IN = 3.6;       // Stern-Innenradius
  const COL_W   = 30;        // Breite der Sternspalte
  const visibleEntries = entries.map((e, i) => ({ e, i, k: `rou-${i}`, open: isOpen(`rou-${i}`) }));
  if (!gm && !visibleEntries.some(x => x.open)) {
    return <DPLocked acc={acc} hint="Noch keine Routine bekannt"/>;
  }
  return (
    <div style={{ position:'relative', paddingLeft: COL_W }}>
      {/* Vertikale Verbindungslinie hinter den Sternen */}
      <div style={{ position:'absolute', left: COL_W/2 - 0.5, top: 14, bottom: 14, width:1,
        background:`linear-gradient(180deg, ${dpHA(acc, 0.55)} 0%, ${dpHA(acc, 0.15)} 100%)`,
        pointerEvents:'none', zIndex:0,
      }}/>
      <div style={{ display:'flex', flexDirection:'column', gap: ROW_GAP }}>
        {visibleEntries.map(({ e, i, k, open }) => {
          if (!gm && !open) return null;
          const starFill   = open ? acc : 'rgba(8,6,22,0.99)';
          const starStroke = open ? acc : dpHA(acc, 0.35);
          return (
            <div key={i} style={{ position:'relative', display:'flex', alignItems:'flex-start', gap:10 }}>
              {/* Stern — absolut links in der Spalte zentriert */}
              <div style={{ position:'absolute', left: -COL_W, top: 4, width: COL_W, display:'flex', justifyContent:'center', zIndex:1 }}>
                <svg width={STAR_R*2 + 4} height={STAR_R*2 + 4} viewBox={`0 0 ${STAR_R*2 + 4} ${STAR_R*2 + 4}`}
                  style={{ filter: open ? `drop-shadow(0 0 6px ${dpHA(acc, 0.6)})` : 'none', overflow:'visible' }}>
                  <polygon
                    points={starPoints(STAR_R+2, STAR_R+2, STAR_R, STAR_IN)}
                    fill={starFill}
                    stroke={starStroke}
                    strokeWidth={open ? 1 : 1.2}
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div style={{ flex:1, opacity: open ? 1 : 0.55 }}>
                <RoutineEntry entry={e} open={open} acc={acc}/>
              </div>
              {gm && <UnlockToggle state={toggleState ? toggleState(k) : (open ? 'all' : 'none')} onClick={() => onToggle(k)} size="sm"/>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Ausrüstungs-Eintrag (kompakt, keine Beschreibung) ────
function AusEntry({ item, open, acc }) {
  return (
    <div style={{
      padding:'10px 12px',
      background: open ? dpHA(acc, 0.06) : 'rgba(124,77,255,0.03)',
      border:`1px solid ${dpHA(acc, open ? 0.30 : 0.12)}`,
      borderLeft:`3px solid ${dpHA(acc, open ? 0.75 : 0.3)}`,
      borderRadius:2,
      fontFamily:'var(--font-display)', fontSize:13, letterSpacing:'0.05em',
      color: open ? '#f0eeff' : 'rgba(200,190,240,0.55)',
      lineHeight:1.3,
      minHeight: 60,
      display:'flex', alignItems:'center',
      textWrap:'balance',
    }}>
      {item.name}
    </div>
  );
}

// ── Ausrüstungs-Grid (3 Items pro Reihe) ─────────────────
function AusGrid({ items, isOpen, onToggle, toggleState, gm, acc }) {
  if (!items || items.length === 0) {
    return <div style={{ fontFamily:'var(--font-body)', fontStyle:'italic', fontSize:12, color:'rgba(160,140,255,0.45)', padding:'4px 0' }}>—</div>;
  }
  const visible = items.map((it, i) => ({ it, i, k: `aus-${i}`, open: isOpen(`aus-${i}`) }));
  if (!gm && !visible.some(x => x.open)) {
    return <DPLocked acc={acc} hint="Noch keine Gegenstände bekannt"/>;
  }
  return (
    <div style={{ display:'grid', gridTemplateColumns:'repeat(3, minmax(0, 1fr))', gap:8 }}>
      {visible.map(({ it, i, k, open }) => {
        if (!gm && !open) return null;
        return (
          <div key={i} style={{ display:'flex', flexDirection:'column', gap:4 }}>
            <AusEntry item={it} open={open} acc={acc}/>
            {gm && (
              <div style={{ display:'flex', justifyContent:'flex-end' }}>
                <UnlockToggle state={toggleState ? toggleState(k) : (open ? 'all' : 'none')} onClick={() => onToggle(k)} size="sm"/>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Geheimnis-Eintrag ────────────────────────────────────
function GeheimnisEntry({ text, idx, acc }) {
  return (
    <div style={{
      padding:'12px 14px',
      border:`1px solid ${dpHA(acc, 0.4)}`,
      background:`linear-gradient(135deg, ${dpHA(acc, 0.10)}, ${dpHA(acc, 0.04)})`,
      borderRadius:2, position:'relative',
      fontFamily:'var(--font-body)', fontSize:12.5, color:'#f0eeff', lineHeight:1.6,
    }}>
      <div style={{ position:'absolute', top:-1, left:-1,
        padding:'2px 6px',
        background: dpHA(acc, 0.20),
        border:`1px solid ${dpHA(acc, 0.55)}`,
        fontFamily:'var(--font-mono)', fontSize:7.5, letterSpacing:'0.22em',
        color:acc, textTransform:'uppercase',
      }}>Geheim · {(idx+1).toString().padStart(2,'0')}</div>
      <div style={{ marginTop:14 }}>{text}</div>
    </div>
  );
}

// ── Kontakt-Eintrag (klickbar wenn ein verlinkter NSC existiert) ──
function findNscByName(name) {
  if (!name) return null;
  const NSC_LIST = window.NSC;
  // Strip titles & whitespace, lowercase for matching
  const clean = name.replace(/^(Mutter|Bruder|Magister|Magistra|Doktor|Hauptmann|Inquisitor|Sucherin|Späher|Wirtin|Bergungsmeisterin|Quartiermeister|Wachfeldwebel|Vampirfürst|Hüter)\s+/i, '').trim().toLowerCase();
  return NSC_LIST.find(n => {
    if (!n.name) return false;
    const target = n.name.toLowerCase();
    if (target === clean) return true;
    // Match if cleaned contact name contains full NSC name OR vice versa
    if (clean.includes(target) || target.includes(clean)) return true;
    return false;
  }) || null;
}

function KontaktEntry({ p, acc, badgeColor, onSelectNsc }) {
  const [hov, setHov] = React.useState(false);
  const linked = !p.verstorben && onSelectNsc ? findNscByName(p.name) : null;
  const clickable = !!linked;
  const initials = p.name.split(/\s+/).filter(Boolean).slice(0,2).map(w => w[0]).join('').toUpperCase().slice(0,2) || '?';
  const ringColor = dpHA(badgeColor || acc, 0.55);
  return (
    <div
      onClick={clickable ? () => onSelectNsc(linked) : undefined}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display:'flex', alignItems:'center', gap:12,
        padding:'8px 10px',
        background: hov && clickable ? dpHA(acc, 0.08) : dpHA(acc, 0.025),
        border:`1px solid ${hov && clickable ? dpHA(acc, 0.55) : dpHA(acc, 0.18)}`,
        borderRadius:3,
        cursor: clickable ? 'pointer' : 'default',
        transition:'all 0.18s',
        position:'relative',
      }}
    >
      {/* Mini-Hex Avatar */}
      <div style={{ position:'relative', width:32, height:32, flexShrink:0 }}>
        <svg width="32" height="32" viewBox="0 0 32 32" style={{ position:'absolute', inset:0, overflow:'visible' }}>
          <polygon points={dpHex(32)} fill={dpHA(badgeColor || acc, 0.12)} stroke={ringColor} strokeWidth="1.2"/>
        </svg>
        <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center',
          fontFamily:'var(--font-display)', fontSize:11, fontWeight:400, letterSpacing:'0.04em',
          color: p.verstorben ? 'rgba(180,170,220,0.55)' : '#f0eeff' }}>{initials}</div>
      </div>
      <div style={{ flex:1, minWidth:0, display:'flex', flexDirection:'column', gap:2 }}>
        <div style={{ display:'flex', alignItems:'center', gap:8, flexWrap:'wrap' }}>
          <span style={{ fontFamily:'var(--font-display)', fontSize:13, letterSpacing:'0.04em',
            color: p.verstorben ? 'rgba(200,190,240,0.6)' : '#f0eeff',
            textDecoration: clickable && hov ? 'underline' : 'none', textUnderlineOffset:2 }}>
            {p.name}
          </span>
          {p.verstorben && (
            <span style={{
              padding:'1px 6px',
              fontFamily:'var(--font-mono)', fontSize:7.5, letterSpacing:'0.22em',
              background:'rgba(227,103,96,0.15)',
              border:'1px solid rgba(227,103,96,0.55)',
              color:'#e36760', textTransform:'uppercase', borderRadius:2,
            }}>Gefallen</span>
          )}
        </div>
        <div style={{ fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.16em',
          color:'rgba(200,190,240,0.55)', textTransform:'uppercase' }}>
          {p.rolle}
        </div>
      </div>
      {clickable && (
        <span style={{ fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.18em',
          color: hov ? acc : dpHA(acc, 0.5), flexShrink:0, transition:'color 0.18s' }}>→</span>
      )}
    </div>
  );
}

// ── Begleiter-Karte ──────────────────────────────────────
function BegleiterCard({ b, acc }) {
  if (!b) {
    return <div style={{ fontFamily:'var(--font-body)', fontStyle:'italic', fontSize:12, color:'rgba(160,140,255,0.45)', padding:'4px 0' }}>Keiner.</div>;
  }
  return (
    <div style={{ display:'flex', alignItems:'center', gap:14, padding:'10px 12px',
      border:`1px solid ${dpHA(acc, 0.3)}`,
      background: dpHA(acc, 0.05), borderRadius:3 }}>
      <div style={{ width:36, height:36, display:'flex', alignItems:'center', justifyContent:'center',
        background:dpHA(acc, 0.12), border:`1px solid ${dpHA(acc, 0.45)}`, borderRadius:'50%' }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke={acc} strokeWidth="1.4">
          <path d="M4 14 Q6 6 10 8 Q14 6 16 14 Q14 17 10 16 Q6 17 4 14 Z"/>
          <circle cx="8" cy="11" r="0.8" fill={acc}/>
          <circle cx="12" cy="11" r="0.8" fill={acc}/>
        </svg>
      </div>
      <div style={{ flex:1, minWidth:0 }}>
        <div style={{ fontFamily:'var(--font-display)', fontSize:13, letterSpacing:'0.08em', color:'#f0eeff' }}>{b.name}</div>
        <div style={{ fontFamily:'var(--font-body)', fontSize:11.5, color:'rgba(200,190,240,0.65)', marginTop:2 }}>{b.art}</div>
      </div>
    </div>
  );
}

// ── Block für singletons mit optional Toggle (z.B. Talente, Makel) ──
function SingletonBlock({ open, gm, acc, onToggle, render, toggleState }) {
  return (
    <div style={{ display:'flex', gap:10, alignItems:'flex-start' }}>
      <div style={{ flex:1 }}>
        {open || gm ? render(open) : <DPLocked acc={acc}/>}
      </div>
      {gm && <UnlockToggle state={toggleState ?? (open ? 'all' : 'none')} onClick={onToggle} size="sm"/>}
    </div>
  );
}

// ── Detail Panel ─────────────────────────────────────────
function DetailPanel({ nsc, unlocks, gm, onClose, onSelectNsc, charPersp = [] }) {
  const scrollRef = dpUR(null);
  // dmTarget: für welche Charaktere gelten die Toggle-Klicks (relevant wenn gm=true)
  const [dmTarget, setDmTarget] = dpUS(() => charPersp.map(p => p.id));

  dpUE(() => {
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  // Beim Wechsel zu einem anderen NSC (z. B. über Kontakt-Klick) sanft nach oben scrollen — schneller als der Browser-Default.
  dpUE(() => {
    const el = scrollRef.current;
    if (!el || el.scrollTop <= 0) return;
    const start = el.scrollTop;
    const t0 = performance.now();
    const DUR = 550;
    const ease = (t) => 1 - Math.pow(1 - t, 4);
    let raf;
    const step = (now) => {
      const p = Math.min(1, (now - t0) / DUR);
      el.scrollTop = start * (1 - ease(p));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [nsc?.id]);

  if (!nsc) return null;

  const unlocked = unlocks.unlockedFor(nsc);
  const stage = unlocks.stageFor(nsc);
  const gehList = (nsc.geheimnisse || []).filter(g => (g.text || '').trim());
  const fieldVis = (k) => ((nsc.fieldVis || {})[k]) !== false;
  const isOpen = (k) => {
    const mg = k.match(/^geh-(\d+)$/);
    if (mg) { const g = gehList[+mg[1]]; return !!(g && g.vis) && unlocked.has(k); }
    // Sektions-Auge UND Einzeleintrag-Auge müssen offen sein
    return fieldVis(dpVisKeyOf(k)) && fieldVis(k) && unlocked.has(k);
  };
  const visible = (k) => gm || isOpen(k);
  const hasSec = (k) => (nsc.sections || []).includes(k);
  // tg: toggle für dmTarget-Charaktere; ts: tri-state für dmTarget
  const tg = (k) => unlocks.toggleForPids(nsc.id, k, dmTarget);
  const ts = (k) => unlocks.unlockStateForPids(nsc.id, k, dmTarget);
  const acc = dpAO(nsc, visible('division'));

  const toggleDmTarget = (pid) =>
    setDmTarget(prev => prev.includes(pid) ? prev.filter(id => id !== pid) : [...prev, pid]);

  // Helpers für Section-Counts
  const cnt = (keys) => keys.filter(isOpen).length;

  // Indexierte Fakten-Keys (v2-Schema)
  const geheimnisKeys = gehList.map((_, i) => `geh-${i}`);
  const routineKeys   = (nsc.routine || []).map((_, i) => `rou-${i}`);
  const ausList       = (nsc.ausruestung || []).filter(e => (e.name || '').trim());
  const ausKeys       = ausList.map((_, i) => `aus-${i}`);
  const motivKeys     = (nsc.motivationen || []).map((_, i) => `mot-${i}`);
  const nameKeys      = (nsc.vollerName || []).map((_, i) => `vna-${i}`);
  const eigKeys       = (nsc.eigenschaften || []).map((_, i) => `eig-${i}`);
  const talKeys       = (nsc.talente || []).map((_, i) => `tal-${i}`);
  const makKeys       = (nsc.makel || []).map((_, i) => `mak-${i}`);
  const gewKeys       = (nsc.gewohnheiten || []).map((_, i) => `gew-${i}`);
  const begList       = (nsc.begleiter || []).filter(b => (b.name || '').trim());
  const begKeys       = begList.map((_, i) => `beg-${i}`);
  const famList       = (nsc.kontakte?.familie || []).filter(p => (p.name || '').trim());
  const freList       = (nsc.kontakte?.freunde || []).filter(p => (p.name || '').trim());
  const rivList       = (nsc.kontakte?.rivalen || []).filter(p => (p.name || '').trim());
  const kontaktKeys   = [...famList.map((_, i) => `fam-${i}`), ...freList.map((_, i) => `fre-${i}`), ...rivList.map((_, i) => `riv-${i}`)];

  return (
    <div style={{
      position:'fixed', inset:0, zIndex:600, display:'flex', justifyContent:'flex-end',
      background:'rgba(4,3,13,0.7)', backdropFilter:'blur(4px)',
      animation:'fadeIn 0.2s ease',
    }} onClick={onClose}>
      <div ref={scrollRef} onClick={e=>e.stopPropagation()} style={{
        width:'min(640px, 96vw)', height:'100%',
        background:'rgba(8,6,22,0.99)', borderLeft:`1px solid ${dpHA(acc, 0.33)}`,
        boxShadow:`-20px 0 60px rgba(0,0,0,0.7), -20px 0 80px ${dpHA(acc, 0.13)}`,
        animation:'overlayIn 0.32s cubic-bezier(.2,.85,.2,1)',
        overflowY:'auto',
      }}>
        {/* Header */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 22px',
          borderBottom:`1px solid ${dpHA(acc, 0.2)}`,
          position:'sticky', top:0, background:'rgba(8,6,22,0.98)', zIndex:5 }}>
          <div style={{ fontFamily:'var(--font-mono)', fontSize:8, letterSpacing:'0.3em', color:'rgba(160,140,255,0.5)', textTransform:'uppercase' }}>
            № {nsc.id.toUpperCase()} · {visible('division') && nsc.division && nsc.division !== 'Keine' ? `${dpRoman(nsc) ? `${dpRoman(nsc)} · ` : ''}${nsc.division}` : 'NSC'}
            {gm && <span style={{ marginLeft:10, color:'#ffb850', fontWeight:600 }}>· SPIELLEITUNG</span>}
          </div>
          <button onClick={onClose} style={{
            background:'transparent', border:`1px solid ${dpHA(acc, 0.5)}`, color:'rgba(200,190,240,0.7)',
            cursor:'pointer', padding:'4px 10px',
            fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.2em', textTransform:'uppercase', borderRadius:2,
          }}
            onMouseEnter={e=>{e.currentTarget.style.color='#f0eeff';e.currentTarget.style.borderColor=acc;e.currentTarget.style.background=dpHA(acc, 0.18);}}
            onMouseLeave={e=>{e.currentTarget.style.color='rgba(200,190,240,0.7)';e.currentTarget.style.borderColor=dpHA(acc, 0.5);e.currentTarget.style.background='transparent';}}
          >ESC ×</button>
        </div>

        {/* Hero — Portrait + Name */}
        <div style={{ display:'flex', gap:22, padding:'24px 26px 14px', alignItems:'flex-start' }}>
          <div style={{ position:'relative', flexShrink:0 }}>
            <NSCPortrait nsc={nsc} stage={stage} acc={acc} size={140}/>
            {stage === 0 && (
              <div style={{
                position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center',
                fontFamily:'var(--font-mono)', fontSize:36, fontWeight:700,
                color:'rgba(124,77,255,0.85)',
                textShadow:'0 0 14px rgba(124,77,255,0.7), 0 0 30px rgba(124,77,255,0.4)',
                animation:'pulse-glow 2.5s ease-in-out infinite',
                userSelect:'none', pointerEvents:'none',
              }}>?</div>
            )}
          </div>
          <div style={{ flex:1, minWidth:0, paddingTop:6 }}>
            {/* Titel-Kicker */}
            {nsc.titel && (
              <div style={{ fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.18em',
                color:acc, textTransform:'uppercase', marginBottom:4 }}>
                {nsc.titel}
              </div>
            )}
            {stage === 0 ? (
              <h2 style={{
                fontFamily:'var(--font-mono)', fontWeight:400, fontSize:18, letterSpacing:'0.12em',
                color:'rgba(160,140,255,0.45)', lineHeight:1.2,
                textShadow:'0 0 14px rgba(124,77,255,0.55), 0 0 30px rgba(124,77,255,0.25)',
                animation:'unknownDrift 5s ease-in-out infinite',
                userSelect:'none',
              }}>
                {_dpScrambleName(nsc.name)}
              </h2>
            ) : (
              <h2 style={{ fontFamily:'var(--font-display)', fontWeight:400, fontSize:26, letterSpacing:'0.10em', color:'#f0eeff', lineHeight:1.15, textShadow:`0 0 18px ${dpHA(acc, 0.4)}` }}>
                {nsc.name}
              </h2>
            )}
            {stage >= 1 && (
              <div style={{ marginTop:8, display:'flex', flexWrap:'wrap', gap:8, alignItems:'baseline' }}>
                {[
                  ['rasse', nsc.rasse],
                  ['geschlecht', nsc.geschlecht],
                  ['alter', nsc.alter ? `${nsc.alter} Jahre` : null],
                ].filter(([k,v]) => visible(k) && v).map(([k,v], i, a) => (
                  <React.Fragment key={k}>
                    {i > 0 && <span style={{ color:'rgba(160,140,255,0.3)', fontSize:9 }}>·</span>}
                    <span style={{ fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.18em',
                      color: isOpen(k) ? acc : 'rgba(200,190,240,0.45)',
                      textTransform:'uppercase', fontStyle: isOpen(k) ? 'normal' : 'italic' }}>
                      {v}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            )}
            {/* Status pills — nur wenn bekannt */}
            {stage >= 1 && (
              <div style={{ marginTop:12 }}>
                <StatusPills status={nsc.status}/>
              </div>
            )}
          </div>
        </div>

        {/* Body */}
        <div style={{ padding:'12px 26px 40px' }}>
          {/* Stage progress */}
          <StageProgress stage={stage} acc={acc}/>

          {/* Section: Erscheinung & Auftreten */}
          {hasSec('pers') && (nsc.unvergesslich || '').trim() && (
            <React.Fragment>
              <DPSection title="Erscheinung & Auftreten" acc={acc} count={isOpen('unvergesslich') ? 1 : 0} total={1}/>
              <SingletonBlock open={isOpen('unvergesslich')} gm={gm} acc={acc} onToggle={() => tg('unvergesslich')} toggleState={ts('unvergesslich')}
                render={(open) => open || gm ? (
                  <div style={{ padding:'10px 14px', border:`1px solid ${dpHA(acc, 0.25)}`,
                    background: dpHA(acc, 0.04),
                    fontFamily:'var(--font-body)', fontSize:13, lineHeight:1.7,
                    color: open ? 'var(--silver)' : 'rgba(200,190,240,0.5)',
                    fontStyle: open ? 'normal' : 'italic' }}>
                    {nsc.unvergesslich}
                  </div>
                ) : <DPLocked acc={acc}/>}
              />
            </React.Fragment>
          )}

          {/* Section: Voller Name */}
          {nameKeys.length > 0 && (
            <React.Fragment>
              <DPSection title="Voller Name" acc={acc} count={cnt(nameKeys)} total={nameKeys.length}/>
              <div style={{ display:'flex', flexWrap:'wrap', gap:8, alignItems:'baseline' }}>
                {nsc.vollerName.map((piece, i) => {
                  const k = `vna-${i}`;
                  const open = isOpen(k);
                  return (
                    <div key={i} style={{ display:'inline-flex', alignItems:'center', gap:6 }}>
                      <span style={{
                        padding:'4px 10px',
                        fontFamily:'var(--font-display)', fontSize:14, letterSpacing:'0.06em',
                        background: open ? dpHA(acc, 0.10) : 'rgba(124,77,255,0.04)',
                        border:`1px solid ${dpHA(acc, open ? 0.45 : 0.18)}`,
                        color: open ? '#f0eeff' : 'rgba(200,190,240,0.45)',
                        fontStyle: open ? 'normal' : 'italic',
                        borderRadius:2,
                      }}>{open ? piece : '· · · · ·'}</span>
                      {gm && <UnlockToggle state={ts(k)} onClick={() => tg(k)} size="sm"/>}
                    </div>
                  );
                })}
              </div>
            </React.Fragment>
          )}

          {/* Section: Biografie */}
          {hasSec('bio') && (nsc.biografie || '').trim() && (
            <React.Fragment>
              <DPSection title="Biografie" acc={acc} count={isOpen('bio') ? 1 : 0} total={1}/>
              <SingletonBlock open={isOpen('bio')} gm={gm} acc={acc} onToggle={() => tg('bio')} toggleState={ts('bio')}
                render={(open) => open || gm ? (
                  <div style={{ padding:'12px 16px', border:`1px solid ${dpHA(acc, 0.25)}`,
                    background: dpHA(acc, 0.04),
                    fontFamily:'var(--font-body)', fontSize:13, lineHeight:1.75, whiteSpace:'pre-wrap',
                    color: open ? 'var(--silver)' : 'rgba(200,190,240,0.5)',
                    fontStyle: open ? 'normal' : 'italic' }}>
                    {nsc.biografie}
                  </div>
                ) : <DPLocked acc={acc}/>}
              />
            </React.Fragment>
          )}

          {/* Section: Eckdaten */}
          {(() => {
            const rangNum = parseInt(nsc.rang) || null;
            const rangesT = (window.NSC_TOOL && window.NSC_TOOL.raenge) || {};
            const rangTitel = rangNum ? ((rangesT[nsc.division] || []).find(r => r.rang === rangNum) || {}).titel : null;
            const zodiac = dpZodiacOf ? dpZodiacOf(nsc.geburtstag_doy) : null;
            const rows = [
              ['rasse', 'Rasse', nsc.rasse ? nsc.rasse + (nsc.unterrasse ? ' · ' + nsc.unterrasse : '') : null],
              ['geschlecht', 'Geschlecht', nsc.geschlecht],
              ['groesse', 'Größe', nsc.groesse],
              ['alter', 'Alter', nsc.alter ? `${nsc.alter} Jahre` : null],
              ['geburtstag', 'Geburtstag', nsc.geburtstag_doy && dpDoyText ? dpDoyText(nsc.geburtstag_doy) : null],
              ['geburtstag', 'Sternzeichen', zodiac ? zodiac.sign : null],
              ['gesinnung', 'Gesinnung', nsc.gesinnung],
              ['klasse', 'Klasse', nsc.klasse],
              ['hintergrund', 'Hintergrund', nsc.hintergrund],
              ['beruf', 'Beruf', nsc.beruf],
              ['division', 'Division', nsc.division && nsc.division !== 'Keine' ? `${dpRoman(nsc) ? `${dpRoman(nsc)} · ` : ''}${nsc.division}` : null],
              ['division', 'Rang', nsc.division && nsc.division !== 'Keine' && nsc.rang ? (rangNum ? `Rang ${rangNum}${rangTitel ? ' · ' + rangTitel : ''}` : nsc.rang) : null],
              ['organisation', 'Organisation', nsc.organisation],
              ['kapsel', 'Kapsel', nsc.kapsel],
              ['wohnort', 'Wohnort', nsc.wohnort],
              ['gottheit', 'Gottheit', nsc.gottheit],
            ].filter(r => r[2]);
            const uKeys = [...new Set(rows.map(r => r[0]))];
            return (
              <React.Fragment>
                <DPSection title="Eckdaten" acc={acc} count={cnt(uKeys)} total={uKeys.length}/>
                <div style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap:'10px 18px' }}>
                  {rows.map(([k, label, v], i) => (
                    <FactRow key={label + i} label={label} value={v} isOpen={isOpen(k)} toggleState={ts(k)} acc={acc} gm={gm} onToggle={() => tg(k)}/>
                  ))}
                </div>
              </React.Fragment>
            );
          })()}

          {/* Section: Routine */}
          {hasSec('routine') && routineKeys.length > 0 && (
            <React.Fragment>
              <DPSection title="Routine" acc={acc} count={cnt(routineKeys)} total={routineKeys.length}/>
              <RoutineTimeline entries={nsc.routine} isOpen={isOpen} onToggle={tg} toggleState={ts} gm={gm} acc={acc}/>
            </React.Fragment>
          )}

          {/* Section: Angewohnheiten */}
          {hasSec('gewohnheiten') && gewKeys.length > 0 && (
            <React.Fragment>
              <DPSection title="Angewohnheiten" acc={acc} count={cnt(gewKeys)} total={gewKeys.length}/>
              <IndexedList items={nsc.gewohnheiten} keyPrefix="gew" isOpen={isOpen} onToggle={tg} toggleState={ts} gm={gm} acc={acc}
                render={(it, i, open) => (
                  <div style={{
                    padding:'6px 10px 6px 8px',
                    borderLeft:`2px solid ${dpHA(acc, open ? 0.55 : 0.25)}`,
                    background: dpHA(acc, open ? 0.05 : 0.02),
                    fontFamily:'var(--font-body)', fontSize:12.5, color: open ? '#f0eeff' : 'rgba(200,190,240,0.55)', lineHeight:1.55,
                  }}>{it}</div>
                )}/>
            </React.Fragment>
          )}

          {/* Section: Eigenschaften */}
          {hasSec('pers') && eigKeys.length > 0 && (
            <React.Fragment>
              <DPSection title="Eigenschaften" acc={acc} count={cnt(eigKeys)} total={eigKeys.length}/>
              <IndexedList items={nsc.eigenschaften} keyPrefix="eig" isOpen={isOpen} onToggle={tg} toggleState={ts} gm={gm} acc={acc}
                render={(it, i, open) => (
                  <span style={{
                    display:'inline-block', padding:'5px 10px',
                    fontFamily:'var(--font-mono)', fontSize:9.5, letterSpacing:'0.16em', textTransform:'uppercase',
                    color:'#f0eeff', background: dpHA(acc, 0.14),
                    border:`1px solid ${dpHA(acc, 0.45)}`, borderRadius:2,
                    opacity: open ? 1 : 0.55,
                  }}>{it}</span>
                )}/>
            </React.Fragment>
          )}

          {/* Section: Talente */}
          {hasSec('pers') && talKeys.length > 0 && (
            <React.Fragment>
              <DPSection title="Talente" acc={acc} count={cnt(talKeys)} total={talKeys.length}/>
              <IndexedList items={nsc.talente} keyPrefix="tal" isOpen={isOpen} onToggle={tg} toggleState={ts} gm={gm} acc={acc}
                render={(it, i, open) => (
                  <div style={{
                    display:'flex', alignItems:'baseline', gap:8,
                    padding:'5px 10px 5px 8px',
                    borderLeft:`2px solid ${dpHA(acc, 0.55)}`,
                    background: dpHA(acc, 0.05),
                    fontFamily:'var(--font-body)', fontSize:12.5, color:'#f0eeff',
                    opacity: open ? 1 : 0.55,
                  }}>
                    <svg width="4" height="4" viewBox="0 0 4 4" style={{ flexShrink:0, transform:'translateY(-1px)' }}>
                      <polygon points={dpHex(4)} fill={acc} />
                    </svg>
                    <span style={{ flex:1, lineHeight:1.5 }}>{it}</span>
                  </div>
                )}/>
            </React.Fragment>
          )}

          {/* Section: Makel */}
          {hasSec('pers') && makKeys.length > 0 && (
            <React.Fragment>
              <DPSection title="Makel" acc={acc} count={cnt(makKeys)} total={makKeys.length}/>
              <IndexedList items={nsc.makel} keyPrefix="mak" isOpen={isOpen} onToggle={tg} toggleState={ts} gm={gm} acc={acc}
                render={(it, i, open) => (
                  <div style={{ padding:'10px 14px',
                    border:`1px solid ${dpHA('#e36760', 0.4)}`,
                    background:'rgba(227,103,96,0.06)',
                    fontFamily:'var(--font-body)', fontSize:12.5, fontStyle:'italic',
                    color: open ? 'rgba(240,200,200,0.85)' : 'rgba(240,200,200,0.5)', lineHeight:1.65 }}>
                    {it}
                  </div>
                )}/>
            </React.Fragment>
          )}

          {/* Section: Begleiter */}
          {hasSec('begleiter') && begKeys.length > 0 && (
            <React.Fragment>
              <DPSection title="Begleiter" acc={acc} count={cnt(begKeys)} total={begKeys.length}/>
              <IndexedList items={begList} keyPrefix="beg" isOpen={isOpen} onToggle={tg} toggleState={ts} gm={gm} acc={acc}
                render={(b, i, open) => (
                  <div style={{ opacity: open ? 1 : 0.55 }}><BegleiterCard b={b} acc={acc}/></div>
                )}/>
            </React.Fragment>
          )}

          {/* Section: Ausrüstung & Gegenstände */}
          {hasSec('ausr') && ausKeys.length > 0 && (
            <React.Fragment>
              <DPSection title="Ausrüstung & Gegenstände" acc={acc} count={cnt(ausKeys)} total={ausKeys.length}/>
              <AusGrid items={ausList} isOpen={isOpen} onToggle={tg} toggleState={ts} gm={gm} acc={acc}/>
            </React.Fragment>
          )}

          {/* Vermögen */}
          {hasSec('ausr') && (nsc.habe || 0) > 0 && (visible('habe') || gm) && (
            <div style={{ display:'flex', alignItems:'center', gap:12, marginTop:14, padding:'12px 16px', borderRadius:3,
              border:`1px solid rgba(214,178,92,${isOpen('habe') ? 0.5 : 0.25})`,
              background:'linear-gradient(135deg, rgba(214,178,92,0.10), rgba(214,178,92,0.03))',
              boxShadow: isOpen('habe') ? '0 0 18px rgba(214,178,92,0.12)' : 'none' }}>
              <span style={{ fontFamily:'var(--font-mono)', fontSize:8.5, letterSpacing:'0.3em', textTransform:'uppercase', color:'rgba(214,178,92,0.8)' }}>◈ Vermögen</span>
              <span style={{ flex:1 }}/>
              <span style={isOpen('habe') || gm
                ? { fontFamily:'var(--font-mono)', fontSize:14, letterSpacing:'0.1em', color:'#e8c878', textShadow:'0 0 10px rgba(214,178,92,0.4)' }
                : { fontFamily:'var(--font-mono)', fontSize:8.5, letterSpacing:'0.16em', textTransform:'uppercase', color:'rgba(214,178,92,0.4)' }}>
                {isOpen('habe') || gm ? nsc.habe.toLocaleString('de-DE') + ' Hade' : 'Unbekannt'}
              </span>
              {gm && <UnlockToggle state={ts('habe')} onClick={() => tg('habe')} size="sm"/>}
            </div>
          )}

          {/* Section: Motivationen */}
          {hasSec('motive') && motivKeys.length > 0 && (
            <React.Fragment>
              <DPSection title="Motivationen" acc={acc} count={cnt(motivKeys)} total={motivKeys.length}/>
              <IndexedList items={nsc.motivationen} keyPrefix="mot" isOpen={isOpen} onToggle={tg} toggleState={ts} gm={gm} acc={acc}
                render={(it, i, open) => (
                  <div style={{
                    padding:'6px 10px 6px 8px',
                    borderLeft:`2px solid ${dpHA(acc, open ? 0.55 : 0.25)}`,
                    background: dpHA(acc, open ? 0.05 : 0.02),
                    fontFamily:'var(--font-body)', fontSize:12.5, color: open ? '#f0eeff' : 'rgba(200,190,240,0.55)', lineHeight:1.55,
                  }}>{it}</div>
                )}/>
            </React.Fragment>
          )}

          {/* Section: Kontakte */}
          {hasSec('kontakte') && kontaktKeys.length > 0 && (
            <React.Fragment>
              <DPSection title="Kontakte" acc={acc} count={cnt(kontaktKeys)} total={kontaktKeys.length}/>
              <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
                {[
                  ['Familie', 'fam',  famList, '#c9b8ff', '◇'],
                  ['Freunde', 'fre',  freList, '#5fe39a', '◆'],
                  ['Rivalen', 'riv',  rivList, '#e36760', '⚔'],
                ].filter(([, , items]) => items.length > 0).map(([title, prefix, items, color, glyph]) => (
                  <div key={prefix}>
                    <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:6 }}>
                      <span style={{ fontFamily:'var(--font-mono)', fontSize:8.5, letterSpacing:'0.24em', color, textTransform:'uppercase' }}>
                        {glyph} {title}
                      </span>
                      <div style={{ flex:1, height:1, background:'rgba(160,140,255,0.12)' }}/>
                    </div>
                    <IndexedList items={items} keyPrefix={prefix} isOpen={isOpen} onToggle={tg} toggleState={ts} gm={gm} acc={acc}
                      render={(p, i, open) => <KontaktEntry p={p} acc={acc} badgeColor={color} onSelectNsc={onSelectNsc}/>}/>
                  </div>
                ))}
              </div>
            </React.Fragment>
          )}

          {/* Section: Geheimnisse */}
          {hasSec('geheim') && geheimnisKeys.length > 0 && (
            <React.Fragment>
              <DPSection title="Geheimnisse" acc={acc} count={cnt(geheimnisKeys)} total={geheimnisKeys.length}/>
              <IndexedList items={gehList} keyPrefix="geh" isOpen={isOpen} onToggle={tg} toggleState={ts} gm={gm} acc="#e36760"
                render={(it, i, open) => <GeheimnisEntry text={it.text} idx={i} acc="#e36760"/>}/>
            </React.Fragment>
          )}

          {/* Footer stamp */}
          <div style={{ marginTop:28, padding:'12px 14px',
            border:`1px dashed ${dpHA(acc, 0.4)}`,
            background: dpHA(acc, 0.04),
            fontFamily:'var(--font-mono)', fontSize:9,
            color: acc, letterSpacing:'0.16em', textTransform:'uppercase',
            display:'flex', alignItems:'center', justifyContent:'space-between',
          }}>
            <span>{stage >= dpMS ? '✓ Eingeweiht' : `◈ Vertrautheit ${stage} · ${dpSL[stage]}`}</span>
            <span style={{ opacity:0.6 }}>Meruria · NSC-Register</span>
          </div>
        </div>

      </div>
    </div>
  );
}

window.NSCDetailPanel = DetailPanel;
