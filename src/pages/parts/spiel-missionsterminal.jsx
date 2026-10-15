import '../../components/cta-button.jsx';
// Missionsterminal-Abschnitt (Spiel-Seite)
// Verlegt von der Startseite (src/pages/index.jsx) auf die Spiel-Seite (/spiel/index.html).
;(function () {
var { useState:uSx, useEffect:uEx, useRef:uRx, useMemo:uMx } = React;
var { CTAButton } = window; // components/cta-button.jsx
/* ─────────────────────────────────────────────────
   MISSIONSTERMINAL section — full functional terminal
   (mirrors /spiel/missionsterminal.html, embedded into Meruria home)
   ───────────────────────────────────────────────── */
var MT_KAT = {
  Suche:     { color: 'var(--lav2)', glyph: '⬡', label: 'SUCHE' },
  Gespraech: { color: '#7fb8ff', glyph: '◇', label: 'GESPRÄCH' },
  Jagd:      { color: '#ff8db5', glyph: '✦', label: 'JAGD' },
};


// Helpers
function MTSchwierigkeit({ level, max = 5 }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:'3px' }}>
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < level;
        return (
          <svg key={i} width="9" height="10" viewBox="0 0 9 10" style={{ flexShrink:0 }}>
            <polygon points="4.5,0.6 8.3,2.8 8.3,7.2 4.5,9.4 0.7,7.2 0.7,2.8"
              fill={filled ? '#7c4dff' : 'transparent'}
              stroke={filled ? 'var(--lav2)' : 'rgba(var(--accent-rgb),calc(0.22*var(--ka)))'}
              strokeWidth="1"/>
          </svg>
        );
      })}
    </div>
  );
}

function MTKatTag({ k }) {
  const meta = MT_KAT[k];
  return (
    <span style={{
      fontFamily:'var(--font-mono)', fontSize:'11.5px', letterSpacing:'0.18em',
      color: meta.color, textTransform:'uppercase',
      display:'inline-flex', alignItems:'center', gap:'5px'
    }}>
      <span style={{ fontSize:'12px', lineHeight:1 }}>{meta.glyph}</span>
      {meta.label}
    </span>
  );
}

function MTQuestRow({ q, active, onClick }) {
  return (
    <div onClick={onClick} style={{
      position:'relative', display:'grid',
      gridTemplateColumns: '1fr 120px 96px',
      alignItems:'center', gap:'12px',
      padding: '9px 18px',
      cursor:'pointer',
      background: active
        ? 'linear-gradient(90deg, rgba(var(--purple-rgb),calc(0.18*var(--kp))) 0%, rgba(var(--purple-rgb),calc(0.06*var(--kp))) 100%)'
        : 'transparent',
      borderLeft: `2px solid ${active ? 'var(--lav2)' : 'transparent'}`,
      borderBottom: '1px solid rgba(var(--accent-rgb),calc(0.05*var(--ka)))',
      transition:'all 0.15s'
    }}
      onMouseEnter={e => { if (!active) { e.currentTarget.style.background = 'rgba(var(--purple-rgb),calc(0.05*var(--kp)))'; e.currentTarget.style.borderLeftColor = 'rgba(var(--purple-rgb),calc(0.35*var(--kp)))'; } }}
      onMouseLeave={e => { if (!active) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderLeftColor = 'transparent'; } }}
    >
      <div style={{ minWidth:0, display:'flex', alignItems:'center', gap:'10px' }}>
        {q.status === 'neu' && (
          <span style={{
            fontFamily:'var(--font-mono)', fontSize:'11px', letterSpacing:'0.15em',
            padding:'2px 6px', background:'rgba(127,184,255,0.18)',
            border:'1px solid rgba(127,184,255,0.45)', borderRadius:'2px',
            color:'#a3c8ff', textTransform:'uppercase', flexShrink:0
          }}>NEU</span>
        )}
        {q.status === 'empfohlen' && (
          <span style={{
            fontFamily:'var(--font-mono)', fontSize:'11px', letterSpacing:'0.15em',
            padding:'2px 6px', background:'rgba(255,141,181,0.18)',
            border:'1px solid rgba(255,141,181,0.45)', borderRadius:'2px',
            color:'#ffb3ce', textTransform:'uppercase', flexShrink:0
          }}>EMPF.</span>
        )}
        <span style={{
          fontFamily:'var(--font-body)', fontWeight: active ? 400 : 300,
          fontSize:'13.5px', color: active ? 'var(--white)' : 'rgba(var(--text-rgb),calc(0.85*var(--kt)))',
          letterSpacing:'0.03em', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'
        }}>{q.name}</span>
      </div>
      <div><MTKatTag k={q.kategorie}/></div>
      <MTSchwierigkeit level={q.sw} />
    </div>
  );
}

function MTFilterChip({ label, count, active, onClick, color }) {
  return (
    <button onClick={onClick} style={{
      fontFamily:'var(--font-mono)', fontSize:'11.5px', letterSpacing:'0.18em',
      padding:'5px 11px', height:'24px',
      background: active ? 'rgba(var(--purple-rgb),calc(0.22*var(--kp)))' : 'transparent',
      border: `1px solid ${active ? 'rgba(var(--accent-rgb),calc(0.55*var(--ka)))' : 'rgba(var(--accent-rgb),calc(0.15*var(--ka)))'}`,
      color: active ? 'var(--white)' : (color || 'rgba(var(--text-rgb),calc(0.55*var(--kt)))'),
      cursor:'pointer', borderRadius:'2px',
      textTransform:'uppercase', whiteSpace:'nowrap', flexShrink:0,
      display:'inline-flex', alignItems:'center', gap:'7px', transition:'all 0.15s'
    }}
      onMouseEnter={e=>{ if (!active) { e.currentTarget.style.borderColor = 'rgba(var(--accent-rgb),calc(0.4*var(--ka)))'; e.currentTarget.style.color = 'var(--white)'; } }}
      onMouseLeave={e=>{ if (!active) { e.currentTarget.style.borderColor = 'rgba(var(--accent-rgb),calc(0.15*var(--ka)))'; e.currentTarget.style.color = color || 'rgba(var(--text-rgb),calc(0.55*var(--kt)))'; } }}
    >
      {label}
      <span style={{ opacity:0.55, fontSize:'11.5px' }}>{count}</span>
    </button>
  );
}

function MTSigil({ name }) {
  const initials = name.replace(/^Die\s+/, '').split(/\s+/).map(w=>w[0]).slice(0,2).join('');
  return (
    <div style={{
      position:'relative', width:'46px', height:'52px',
      display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0
    }}>
      <svg width="46" height="52" viewBox="0 0 46 52" style={{ position:'absolute', inset:0 }}>
        <polygon points="23,2 43,13 43,39 23,50 3,39 3,13"
          fill="rgba(var(--purple-rgb),calc(0.12*var(--kp)))" stroke="rgba(var(--accent-rgb),calc(0.6*var(--ka)))" strokeWidth="1.2"/>
        <polygon points="23,7 38,15.5 38,36.5 23,45 8,36.5 8,15.5"
          fill="none" stroke="rgba(var(--accent-rgb),calc(0.18*var(--ka)))" strokeWidth="0.8"/>
      </svg>
      <span style={{
        position:'relative', zIndex:1,
        fontFamily:'var(--font-display)', fontSize:'14px', fontWeight:500,
        letterSpacing:'0.05em', color:'var(--white)'
      }}>{initials}</span>
    </div>
  );
}

function MTCategoryIcon({ k }) {
  const c = MT_KAT[k].color;
  return (
    <div style={{
      width:'42px', height:'46px', flexShrink:0,
      display:'flex', alignItems:'center', justifyContent:'center', position:'relative'
    }}>
      <svg width="42" height="46" viewBox="0 0 42 46" style={{position:'absolute', inset:0}}>
        <polygon points="21,2 39,12 39,34 21,44 3,34 3,12"
          fill="rgba(var(--purple-rgb),calc(0.08*var(--kp)))" stroke={c} strokeOpacity="0.55" strokeWidth="1.2"/>
      </svg>
      <span style={{ position:'relative', fontSize:'17px', color:c, lineHeight:1 }}>{MT_KAT[k].glyph}</span>
    </div>
  );
}

function MTPanelHeader({ children, right }) {
  return (
    <div style={{
      position:'relative',
      padding:'12px 20px',
      borderBottom:'1px solid rgba(var(--accent-rgb),calc(0.18*var(--ka)))',
      background:'linear-gradient(180deg, rgba(var(--purple-rgb),calc(0.10*var(--kp))) 0%, rgba(var(--purple-rgb),calc(0.02*var(--kp))) 100%)',
      display:'flex', alignItems:'center', justifyContent:'space-between', gap:'12px'
    }}>
      <div style={{
        fontFamily:'var(--font-display)', fontSize:'14px', fontWeight:400,
        letterSpacing:'0.32em', color:'var(--white)', textTransform:'uppercase',
        textShadow:'0 0 14px rgba(var(--purple-rgb),calc(0.4*var(--kp)))'
      }}>{children}</div>
      {right}
    </div>
  );
}

function MTRewardRow({ icon, label, value, accent }) {
  return (
    <div style={{
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'8px 0', borderBottom:'1px dashed rgba(var(--accent-rgb),calc(0.1*var(--ka)))',
    }}>
      <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
        <div style={{
          width:'20px', height:'20px', display:'flex',
          alignItems:'center', justifyContent:'center',
          color: accent || 'var(--lav2)', flexShrink:0
        }}>{icon}</div>
        <span style={{
          fontFamily:'var(--font-body)', fontWeight:300,
          fontSize:'13px', color:'rgba(var(--text-rgb),calc(0.78*var(--kt) + var(--tb)))',
          letterSpacing:'0.04em'
        }}>{label}</span>
      </div>
      <span style={{
        fontFamily:'var(--font-mono)', fontSize:'13px',
        color:'var(--white)', letterSpacing:'0.08em'
      }}>{value}</span>
    </div>
  );
}

function MTDetailCard({ q, view, onAccept, accepted, progress, onStepClick }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', height:'100%', minHeight:0 }}>
      {/* Quest header strip */}
      <div style={{
        display:'flex', alignItems:'center', gap:'14px',
        padding:'18px 22px',
        background:`linear-gradient(180deg, ${MT_KAT[q.kategorie].color}22 0%, rgba(var(--panel-rgb),0) 100%)`,
        borderBottom:'1px solid rgba(var(--accent-rgb),calc(0.12*var(--ka)))'
      }}>
        <MTCategoryIcon k={q.kategorie}/>
        <div style={{ flex:1, minWidth:0 }}>
          <div style={{
            fontFamily:'var(--font-mono)', fontSize:'11.5px',
            color: MT_KAT[q.kategorie].color, letterSpacing:'0.25em',
            textTransform:'uppercase', marginBottom:'4px', opacity:0.85
          }}>{MT_KAT[q.kategorie].label} · STUFE {q.lv}</div>
          <div style={{
            fontFamily:'var(--font-display)', fontSize:'22px', fontWeight:400,
            letterSpacing:'0.06em', color:'var(--white)',
            textShadow:'0 0 22px rgba(var(--purple-rgb),calc(0.35*var(--kp)))',
            whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'
          }}>{q.name}</div>
        </div>
        <div style={{ textAlign:'right' }}>
          <div style={{
            fontFamily:'var(--font-mono)', fontSize:'11px', color:'rgba(var(--text-rgb),calc(0.35*var(--kt) + var(--tb)))',
            letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:'4px'
          }}>SCHWIERIGKEIT</div>
          <MTSchwierigkeit level={q.sw}/>
        </div>
      </div>

      {/* Body */}
      <div style={{
        flex:1, minHeight:0, overflowY:'auto', padding:'20px 22px',
        animation:'fadeIn 0.25s ease'
      }}>
        {view === 'details' && (
          <div style={{ animation:'fadeInUp 0.25s ease' }}>
            <div style={{
              display:'flex', alignItems:'center', gap:'14px', marginBottom:'18px',
              padding:'12px 14px',
              background:'rgba(var(--purple-rgb),calc(0.06*var(--kp)))',
              border:'1px solid rgba(var(--accent-rgb),calc(0.14*var(--ka)))',
              borderRadius:'3px'
            }}>
              <MTSigil name={q.auftraggeber}/>
              <div>
                <div style={{
                  fontFamily:'var(--font-mono)', fontSize:'11.5px', color:'var(--lav2)',
                  letterSpacing:'0.22em', textTransform:'uppercase', marginBottom:'3px'
                }}>Auftraggeber</div>
                <div style={{
                  fontFamily:'var(--font-display)', fontSize:'14px', fontWeight:400,
                  color:'var(--white)', letterSpacing:'0.08em'
                }}>{q.auftraggeber}</div>
                <div style={{
                  fontFamily:'var(--font-body)', fontWeight:300, fontStyle:'italic',
                  fontSize:'12.5px', color:'rgba(var(--text-rgb),calc(0.55*var(--kt) + var(--tb)))', marginTop:'2px'
                }}>{q.region}</div>
              </div>
            </div>

            <div style={{
              fontFamily:'var(--font-body)', fontWeight:300,
              fontSize:'13px', lineHeight:1.75, color:'rgba(var(--text-rgb),calc(0.82*var(--kt) + var(--tb)))',
              letterSpacing:'0.02em', marginBottom:'24px',
              textWrap:'pretty'
            }}>{q.desc}</div>

            <div style={{
              fontFamily:'var(--font-display)', fontSize:'12.5px', fontWeight:500,
              letterSpacing:'0.28em', color:'var(--lav2)',
              textTransform:'uppercase', marginBottom:'8px',
              paddingBottom:'4px', borderBottom:'1px solid rgba(var(--accent-rgb),calc(0.2*var(--ka)))'
            }}>Belohnungen</div>
            <MTRewardRow
              icon={<svg width="14" height="14" viewBox="0 0 14 14"><polygon points="7,1 13,5 11,12 3,12 1,5" fill="none" stroke="currentColor" strokeWidth="1.2"/></svg>}
              label="Erfahrung"
              value={`+${q.rewards.xp}`}
            />
            <MTRewardRow
              icon={<svg width="14" height="14" viewBox="0 0 14 14"><circle cx="7" cy="7" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.2"/><circle cx="7" cy="7" r="2.5" fill="currentColor" opacity="0.5"/></svg>}
              label="Hade"
              value={(q.rewards.hade ?? 0).toLocaleString('de-DE')}
            />
            {q.rewards.item && (
              <MTRewardRow
                icon={<svg width="14" height="14" viewBox="0 0 14 14"><rect x="2.5" y="3" width="9" height="8" fill="none" stroke="currentColor" strokeWidth="1.2"/><line x1="2.5" y1="5.5" x2="11.5" y2="5.5" stroke="currentColor" strokeWidth="1"/></svg>}
                label={q.rewards.item}
                value="◈"
                accent="#ffb89e"
              />
            )}
          </div>
        )}

        {view === 'anweisungen' && (
          <div style={{ animation:'fadeInUp 0.25s ease' }}>
            <div style={{
              fontFamily:'var(--font-display)', fontSize:'12.5px', fontWeight:500,
              letterSpacing:'0.28em', color:'var(--lav2)',
              textTransform:'uppercase', marginBottom:'14px',
              paddingBottom:'4px', borderBottom:'1px solid rgba(var(--accent-rgb),calc(0.2*var(--ka)))'
            }}>Anweisungen</div>

            {q.anweisungen.map((step, i) => {
              const n = progress[i] ?? step.n;
              const done = n >= step.max;
              const handleClick = () => onStepClick && onStepClick(i, step.max);
              return (
                <div key={i} style={{
                  display:'flex', alignItems:'flex-start', gap:'14px',
                  padding:'12px 0', borderBottom:'1px dashed rgba(var(--accent-rgb),calc(0.1*var(--ka)))'
                }}>
                  <button
                    onClick={handleClick}
                    aria-label={`Schritt ${i+1} abhaken`}
                    style={{
                      position:'relative', width:'26px', height:'28px',
                      flexShrink:0, marginTop:'-1px',
                      padding:0, background:'transparent', border:'none',
                      cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center',
                      transition:'transform 0.15s'
                    }}
                    onMouseEnter={e=>{ e.currentTarget.style.transform='scale(1.12)'; }}
                    onMouseLeave={e=>{ e.currentTarget.style.transform='scale(1)'; }}
                  >
                    <svg width="22" height="24" viewBox="0 0 22 24" style={{ display:'block', overflow:'visible' }}>
                      <polygon points="11,1.5 19.5,6.5 19.5,17.5 11,22.5 2.5,17.5 2.5,6.5"
                        fill={done ? 'rgba(var(--purple-rgb),calc(0.5*var(--kp)))' : (n>0 ? 'rgba(var(--purple-rgb),calc(0.18*var(--kp)))' : 'rgba(var(--purple-rgb),calc(0.06*var(--kp)))')}
                        stroke="var(--lav2)" strokeWidth="1.1"
                        style={{ filter: done ? 'drop-shadow(0 0 6px rgba(var(--accent-rgb),calc(0.7*var(--ka))))' : 'none', transition:'all 0.2s' }}/>
                      {done && (
                        <path d="M6.5 12 L9.5 15 L15 9" stroke="var(--white)" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      )}
                      {!done && n > 0 && step.max > 1 && (
                        <text x="11" y="15" textAnchor="middle"
                          fontFamily="Share Tech Mono, monospace"
                          fontSize="9" fill="var(--white)" style={{letterSpacing:'0.05em'}}>
                          {n}
                        </text>
                      )}
                    </svg>
                  </button>
                  <div style={{ flex:1 }}>
                    <div style={{
                      fontFamily:'var(--font-body)', fontWeight:300, fontSize:'13px',
                      color: done ? 'rgba(var(--text-rgb),calc(0.6*var(--kt)))' : 'rgba(var(--text-rgb),calc(0.88*var(--kt)))',
                      lineHeight:1.6, letterSpacing:'0.02em',
                      textDecoration: done ? 'line-through' : 'none',
                      textDecorationColor:'rgba(var(--accent-rgb),calc(0.45*var(--ka)))',
                      transition:'all 0.2s'
                    }}>{step.txt}</div>
                    {step.max > 1 && (
                      <div style={{ display:'flex', alignItems:'center', gap:'10px', marginTop:'8px' }}>
                        <div style={{
                          flex:1, height:'3px', background:'rgba(var(--accent-rgb),calc(0.1*var(--ka)))',
                          borderRadius:'1px', overflow:'hidden', maxWidth:'180px'
                        }}>
                          <div style={{
                            height:'100%', width: `${(n/step.max)*100}%`,
                            background:'linear-gradient(90deg, #7c4dff 0%, var(--lav2) 100%)',
                            boxShadow:'0 0 8px rgba(var(--accent-rgb),calc(0.6*var(--ka)))',
                            transition:'width 0.25s ease'
                          }}/>
                        </div>
                        <span style={{
                          fontFamily:'var(--font-mono)', fontSize:'12.5px',
                          color: done ? 'var(--lav2)' : 'var(--white)',
                          letterSpacing:'0.1em'
                        }}>{n} / {step.max}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Accept bar */}
      <div style={{
        padding:'12px 22px',
        borderTop:'1px solid rgba(var(--accent-rgb),calc(0.18*var(--ka)))',
        background:'rgba(var(--bg-rgb),0.6)',
        display:'flex', alignItems:'center', justifyContent:'space-between', gap:'12px'
      }}>
        <div style={{
          fontFamily:'var(--font-mono)', fontSize:'11px',
          color:'rgba(var(--text-rgb),calc(0.35*var(--kt) + var(--tb)))', letterSpacing:'0.2em', textTransform:'uppercase'
        }}>
          ID · {q.id.toUpperCase()}
        </div>
      </div>
    </div>
  );
}

function MTPanel({ children, style }) {
  const corner = {
    position:'absolute', width:14, height:14, pointerEvents:'none',
    border:'1px solid rgba(var(--accent-rgb),calc(0.45*var(--ka)))'
  };
  return (
    <div style={{
      position:'relative',
      background:'linear-gradient(180deg, rgba(var(--panel-rgb),0.7) 0%, rgba(var(--panel-rgb),0.85) 100%)',
      border:'1px solid rgba(var(--accent-rgb),calc(0.18*var(--ka)))',
      borderRadius:'3px',
      backdropFilter:'blur(8px)',
      display:'flex', flexDirection:'column', minHeight:0, overflow:'hidden',
      boxShadow:'0 8px 40px rgba(var(--shadow-rgb),calc(0.5 * var(--shadow-k))), inset 0 0 60px rgba(var(--purple-rgb),calc(0.04*var(--kp)))',
      ...style
    }}>
      <span style={{ ...corner, top:-1, left:-1, borderRight:0, borderBottom:0 }}/>
      <span style={{ ...corner, top:-1, right:-1, borderLeft:0, borderBottom:0 }}/>
      <span style={{ ...corner, bottom:-1, left:-1, borderRight:0, borderTop:0 }}/>
      <span style={{ ...corner, bottom:-1, right:-1, borderLeft:0, borderTop:0 }}/>
      {children}
    </div>
  );
}

function MissionsterminalSection() {
  const [quests, setQuests] = uSx([]);
  const [loading, setLoading] = uSx(true);
  const [filter, setFilter] = uSx('alle');
  const [search, setSearch] = uSx('');
  const [selectedId, setSelectedId] = uSx(null);
  const [view, setView] = uSx('details');
  const [acceptedIds, setAcceptedIds] = uSx(() => new Set());
  const [progress, setProgress] = uSx({});

  uEx(() => {
    async function load() {
      const { data } = await window._sb
        .from('missions')
        .select('*')
        .neq('status', 'archiviert')
        .order('created_at', { ascending: false });
      const mapped = (data || []).map(m => ({ ...m, desc: m.beschreibung }));
      setQuests(mapped);
      const firstNew = mapped.find(q => q.status === 'neu');
      setSelectedId(firstNew ? firstNew.id : (mapped[0]?.id ?? null));
      const init = {};
      mapped.forEach(q => { init[q.id] = (q.anweisungen || []).map(s => s.n || 0); });
      setProgress(init);
      setLoading(false);
    }
    load();
  }, []);

  const stepClick = (questId, stepIdx, max) => {
    setProgress(prev => {
      const cur = prev[questId] ? [...prev[questId]] : [];
      const n = cur[stepIdx] ?? 0;
      if (max <= 1) cur[stepIdx] = n >= 1 ? 0 : 1;
      else cur[stepIdx] = n >= max ? 0 : n + 1;
      return { ...prev, [questId]: cur };
    });
  };

  const counts = uMx(() => ({
    alle: quests.length,
    Suche: quests.filter(q=>q.kategorie==='Suche').length,
    Gespraech: quests.filter(q=>q.kategorie==='Gespraech').length,
    Jagd: quests.filter(q=>q.kategorie==='Jagd').length,
  }), [quests]);

  const filtered = uMx(() => {
    const s = search.trim().toLowerCase();
    const rank = q => q.status === 'neu' ? 0 : q.status === 'empfohlen' ? 1 : 2;
    return quests.filter(x => {
      if (filter !== 'alle' && x.kategorie !== filter) return false;
      if (s && !(x.name.toLowerCase().includes(s) || x.auftraggeber.toLowerCase().includes(s))) return false;
      return true;
    }).sort((a, b) => rank(a) - rank(b));
  }, [quests, filter, search]);

  uEx(() => {
    if (filtered.length && !filtered.find(q => q.id === selectedId)) {
      setSelectedId(filtered[0].id);
    }
  }, [filtered, selectedId]);

  const selected = quests.find(q => q.id === selectedId) ?? null;

  const handleAccept = () => {
    setAcceptedIds(prev => {
      const next = new Set(prev);
      next.add(selected.id);
      return next;
    });
  };

  return (
    <div>
      {/* Eyebrow row */}
      <div style={{ display:'flex', alignItems:'baseline', gap:18, marginBottom:24 }}>
        <span style={{
          fontFamily:'var(--font-mono)', fontSize:'12px',
          letterSpacing:'0.35em', color:'rgba(var(--purple-rgb),calc(0.65*var(--kp) + var(--tb)))',
          textTransform:'uppercase',
        }}>◈ Missionsterminal</span>
        <div style={{ flex:1, height:1, background:'linear-gradient(to right, rgba(var(--purple-rgb),calc(0.5*var(--kp))), rgba(var(--purple-rgb),calc(0.05*var(--kp))))' }}/>
        <div style={{
          display:'flex', alignItems:'center', gap:'12px',
          fontFamily:'var(--font-mono)', fontSize:'11.5px',
          color:'rgba(var(--text-rgb),calc(0.55*var(--kt) + var(--tb)))', letterSpacing:'0.22em',
          textTransform:'uppercase',
        }}>
          <span style={{ display:'inline-flex', alignItems:'center', gap:'7px' }}>
            <span style={{
              width:'7px', height:'7px', borderRadius:'50%',
              background:'#7fb8ff', boxShadow:'0 0 8px #7fb8ff',
              animation:'pulse-glow 2s ease infinite'
            }}/>
            {quests.filter(q=>q.status==='neu').length} neue Aufträge
          </span>
          <span style={{ width:'1px', height:'14px', background:'rgba(var(--accent-rgb),calc(0.2*var(--ka)))' }}/>
          <span>{filtered.length} / {quests.length} gesamt</span>
        </div>
      </div>

      {/* Two-panel grid */}
      <div className="mt-raster" style={{
        display:'grid', gridTemplateColumns:'1fr 1fr', gap:'18px',
        height:'540px',
      }}>
        {/* LEFT — quest list */}
        <MTPanel>
          <MTPanelHeader>
            Nebenjobs
          </MTPanelHeader>

          {/* Filter bar */}
          <div style={{
            padding:'12px 18px', display:'flex', alignItems:'center', gap:'8px',
            borderBottom:'1px solid rgba(var(--accent-rgb),calc(0.1*var(--ka)))',
            background:'rgba(var(--panel-rgb),0.4)',
            flexWrap:'wrap',
          }}>
            <MTFilterChip label="Alle" count={counts.alle} active={filter==='alle'} onClick={()=>setFilter('alle')}/>
            <MTFilterChip label="Suche" count={counts.Suche} color="var(--lav2)" active={filter==='Suche'} onClick={()=>setFilter('Suche')}/>
            <MTFilterChip label="Gespräch" count={counts.Gespraech} color="#7fb8ff" active={filter==='Gespraech'} onClick={()=>setFilter('Gespraech')}/>
            <MTFilterChip label="Jagd" count={counts.Jagd} color="#ff8db5" active={filter==='Jagd'} onClick={()=>setFilter('Jagd')}/>
            <div style={{ flex:1, minWidth:8 }}/>
            <div style={{
              display:'flex', alignItems:'center', gap:'6px',
              padding:'4px 9px', height:'24px',
              border:'1px solid rgba(var(--accent-rgb),calc(0.18*var(--ka)))', borderRadius:'2px',
              background:'rgba(var(--bg-rgb),0.5)'
            }}>
              <svg width="11" height="11" viewBox="0 0 12 12" style={{ opacity:0.5 }}>
                <circle cx="5" cy="5" r="3.5" fill="none" stroke="var(--lav2)" strokeWidth="1.2"/>
                <line x1="7.5" y1="7.5" x2="10" y2="10" stroke="var(--lav2)" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="suchen…"
                style={{
                  background:'transparent', border:'none', outline:'none',
                  fontFamily:'var(--font-mono)', fontSize:'12px',
                  color:'var(--white)', letterSpacing:'0.08em', width:'100px'
                }}
              />
            </div>
          </div>

          {/* Column headers */}
          <div style={{
            display:'grid', gridTemplateColumns:'1fr 120px 96px',
            gap:'12px', padding:'9px 18px',
            borderBottom:'1px solid rgba(var(--accent-rgb),calc(0.12*var(--ka)))',
            background:'rgba(var(--purple-rgb),calc(0.04*var(--kp)))',
            fontFamily:'var(--font-mono)', fontSize:'11px',
            color:'rgba(var(--text-rgb),calc(0.35*var(--kt) + var(--tb)))', letterSpacing:'0.22em', textTransform:'uppercase'
          }}>
            <div>Auftrag</div>
            <div>Kategorie</div>
            <div>Schwierigkeit</div>
          </div>

          {/* List */}
          <div style={{ flex:1, minHeight:0, overflowY:'auto' }}>
            {loading && (
              <div style={{ padding:'40px 20px', textAlign:'center', fontFamily:'var(--font-mono)', fontSize:'11.5px', color:'rgba(var(--accent-rgb),calc(0.4*var(--ka) + var(--tb)))', letterSpacing:'0.22em', textTransform:'uppercase' }}>
                ◈ Lade Aufträge…
              </div>
            )}
            {!loading && filtered.length === 0 && (
              <div style={{
                padding:'40px 20px', textAlign:'center',
                fontFamily:'var(--font-body)', fontStyle:'italic',
                fontSize:'13px', color:'rgba(var(--text-rgb),calc(0.35*var(--kt) + var(--tb)))'
              }}>
                Keine Aufträge im Filter.
              </div>
            )}
            {filtered.map(q => (
              <MTQuestRow
                key={q.id}
                q={q}
                active={q.id === selectedId}
                onClick={()=>setSelectedId(q.id)}
              />
            ))}
          </div>

          {/* Foot */}
          <div style={{
            padding:'9px 18px',
            borderTop:'1px solid rgba(var(--accent-rgb),calc(0.12*var(--ka)))',
            display:'flex', alignItems:'center', justifyContent:'space-between',
            fontFamily:'var(--font-mono)', fontSize:'11px',
            color:'rgba(var(--text-rgb),calc(0.35*var(--kt) + var(--tb)))', letterSpacing:'0.2em', textTransform:'uppercase',
            background:'rgba(var(--bg-rgb),0.5)'
          }}>
            <span>◈ Aktualisiert · Heute</span>
            <span>Angenommen · {acceptedIds.size}</span>
          </div>
        </MTPanel>

        {/* RIGHT — detail card */}
        <MTPanel>
          <MTPanelHeader
            right={
              <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
                <button onClick={()=>setView('details')} style={{
                  fontFamily:'var(--font-mono)', fontSize:'11.5px', letterSpacing:'0.18em',
                  padding:'4px 10px', height:'24px',
                  background: view==='details' ? 'rgba(var(--purple-rgb),calc(0.25*var(--kp)))' : 'transparent',
                  border:`1px solid ${view==='details' ? 'rgba(var(--accent-rgb),calc(0.6*var(--ka)))' : 'rgba(var(--accent-rgb),calc(0.15*var(--ka)))'}`,
                  color: view==='details' ? 'var(--white)' : 'rgba(var(--text-rgb),calc(0.55*var(--kt)))',
                  cursor:'pointer', borderRadius:'2px', textTransform:'uppercase',
                  transition:'all 0.15s'
                }}>Details</button>
                <button onClick={()=>setView('anweisungen')} style={{
                  fontFamily:'var(--font-mono)', fontSize:'11.5px', letterSpacing:'0.18em',
                  padding:'4px 10px', height:'24px',
                  background: view==='anweisungen' ? 'rgba(var(--purple-rgb),calc(0.25*var(--kp)))' : 'transparent',
                  border:`1px solid ${view==='anweisungen' ? 'rgba(var(--accent-rgb),calc(0.6*var(--ka)))' : 'rgba(var(--accent-rgb),calc(0.15*var(--ka)))'}`,
                  color: view==='anweisungen' ? 'var(--white)' : 'rgba(var(--text-rgb),calc(0.55*var(--kt)))',
                  cursor:'pointer', borderRadius:'2px', textTransform:'uppercase',
                  transition:'all 0.15s'
                }}>Anweisungen</button>
                <div style={{ display:'flex', alignItems:'center', gap:'4px', marginLeft:'4px' }}>
                  <span style={{
                    width:'6px', height:'6px', borderRadius:'50%',
                    background: view==='details' ? 'var(--lav2)' : 'rgba(var(--accent-rgb),calc(0.25*var(--ka)))',
                    boxShadow: view==='details' ? '0 0 6px var(--lav2)' : 'none'
                  }}/>
                  <span style={{
                    width:'6px', height:'6px', borderRadius:'50%',
                    background: view==='anweisungen' ? 'var(--lav2)' : 'rgba(var(--accent-rgb),calc(0.25*var(--ka)))',
                    boxShadow: view==='anweisungen' ? '0 0 6px var(--lav2)' : 'none'
                  }}/>
                </div>
              </div>
            }
          >
            Auftrag
          </MTPanelHeader>
          {selected ? (
            <MTDetailCard
              key={selected.id + view}
              q={selected}
              view={view}
              onAccept={handleAccept}
              accepted={acceptedIds.has(selected.id)}
              progress={progress[selected.id] || []}
              onStepClick={(stepIdx, max) => stepClick(selected.id, stepIdx, max)}
            />
          ) : (
            <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-mono)', fontSize:'11.5px', color:'rgba(var(--accent-rgb),calc(0.3*var(--ka) + var(--tb)))', letterSpacing:'0.22em', textTransform:'uppercase' }}>
              {loading ? '◈ Verbinde…' : '— keine Aufträge —'}
            </div>
          )}
        </MTPanel>
      </div>

      {/* CTA — Terminal betreten */}
      <div style={{ marginTop:24 }}>
        <CTAButton href="/spiel/missionsterminal.html" label="Terminal betreten"/>
      </div>
    </div>
  );
}

Object.assign(window, { MissionsterminalSection });
})();
