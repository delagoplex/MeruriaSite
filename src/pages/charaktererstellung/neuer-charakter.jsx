// Page entry for /charaktererstellung/neuer-charakter.html
import '../../components/image-upload.jsx';
import '../../components/char-age.jsx';
import '../../components/site-gate.jsx';
import '../parts/nsc-monster-flow.jsx';
import '../parts/hade-rechner.jsx';
import '../../components/school-icon.jsx';
import '../../components/damage-icon.jsx';
import '../parts/sc-meine.jsx';   // Helfer (IRow, Card, …) für die Steckbrief-Vorschau
import '../../components/steckbrief-components.jsx';
import '../parts/nc-namenwahl.jsx';

;(function () {
(function () {
const {
  useState,
  useEffect,
  useRef,
  useMemo
} = React;

// ── Hint-Builder: erweitert OPTION_HINTS aus den geladenen Datendateien ────
(function buildOptionHints() {
  const h = window.OPTION_HINTS || {};

  // Rassen — direkte Namensübereinstimmung, da ALLE_RASSEN jetzt echte Namen verwendet
  (window.RASSEN_DATA || []).forEach(function(r) {
    if (r.subtitle) h[r.name] = r.subtitle;
    (r.subraces || []).forEach(function(s) {
      if (s.name && s.subtitle) h[s.name] = s.subtitle;
    });
  });

  // Klassen
  ((window.KLASSEN_DATA && window.KLASSEN_DATA.klassen) || []).forEach(function(k) {
    if (k.subtitle) h[k.name] = k.subtitle;
  });

  // Unterklassen (erste Beschreibungszeile als Hint)
  var kd = window.KLASSEN_DETAIL || {};
  Object.values(kd).forEach(function(cls) {
    (cls.unterklassen || []).forEach(function(uk) {
      if (!uk.name || !uk.beschreibung) return;
      var text = uk.beschreibung;
      var dot = text.indexOf('.');
      h[uk.name] = dot > 0 && dot < 120 ? text.slice(0, dot + 1) : text.slice(0, 100).trimEnd() + '…';
    });
  });

  // Hintergründe (ein Namensunterschied: Adeliger → Adliger)
  (window.HINTERGRUENDE_DATA || []).forEach(function(bg) {
    if (!bg.kurzbeschreibung) return;
    h[bg.name] = bg.kurzbeschreibung;
    if (bg.name === 'Adeliger') h['Adliger'] = bg.kurzbeschreibung;
  });

  // Divisionen
  (window.DIVISIONS_DATA || []).forEach(function(d) {
    if (d.subtitle) h[d.name] = d.subtitle;
  });

  window.OPTION_HINTS = h;
})();

// ── HELPERS ────────────────────────────────────────────────────────────────
const cut = (a, b) => a.filter(x => b.includes(x));
const trail = (list, max = 8) => {
  if (!list || !list.length) return '—';
  const s = list.slice(0, max);
  const more = list.length > max ? ` (+${list.length - max})` : '';
  return s.map(x => `→ ${x}`).join('  ') + more;
};

// ── GLITCH BUTTON ──────────────────────────────────────────────────────────
function GlitchBtn({
  label,
  sub,
  onClick,
  primary,
  style: sx = {}
}) {
  const [g, setG] = useState(false);
  const t = useRef(null);
  const fire = () => {
    setG(false);
    clearTimeout(t.current);
    t.current = setTimeout(() => {
      setG(true);
      t.current = setTimeout(() => setG(false), 1500);
    }, 10);
  };
  useEffect(() => () => clearTimeout(t.current), []);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: fire,
    style: {
      position: 'relative',
      cursor: 'pointer',
      textAlign: 'center',
      background: primary ? 'rgba(var(--purple-rgb),calc(.12*var(--kp)))' : 'rgba(var(--panel-rgb),.6)',
      border: `1px solid ${primary ? 'rgba(var(--purple-rgb),calc(.55*var(--kp)))' : 'rgba(var(--accent-rgb),calc(.2*var(--ka)))'}`,
      borderRadius: '3px',
      padding: '22px 44px',
      transition: 'all .2s',
      minWidth: 190,
      ...sx
    }
  }, g && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'color-mix(in srgb, rgba(80,255,180,.4), rgb(var(--ink-rgb)) var(--cm))',
      fontFamily: 'var(--font-d)',
      fontSize: '17px',
      letterSpacing: '.22em',
      animation: 'glitch-clip 1.4s steps(1) infinite',
      pointerEvents: 'none'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'color-mix(in srgb, rgba(255,60,220,.32), rgb(var(--ink-rgb)) var(--cm))',
      fontFamily: 'var(--font-d)',
      fontSize: '17px',
      letterSpacing: '.22em',
      animation: 'glitch-clip2 1.4s steps(1) infinite',
      pointerEvents: 'none'
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-d)',
      fontSize: '17px',
      fontWeight: 300,
      letterSpacing: '.22em',
      color: primary ? 'var(--white)' : 'rgba(var(--text-rgb),calc(.5*var(--kt)))',
      textTransform: 'uppercase',
      position: 'relative'
    }
  }, label), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-m)',
      fontSize: '11px',
      letterSpacing: '.14em',
      color: primary ? 'rgba(var(--accent-rgb),calc(.55*var(--ka)))' : 'rgba(var(--accent-rgb),calc(.28*var(--ka)))',
      marginTop: 5,
      textTransform: 'uppercase',
      position: 'relative'
    }
  }, sub));
}

// ── NAV ────────────────────────────────────────────────────────────────────
function Nav({
  onBack,
  showBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(var(--bg-rgb),.93)',
      borderBottom: '1px solid rgba(var(--accent-rgb),calc(.1*var(--ka)))',
      backdropFilter: 'blur(16px)',
      height: 52,
      display: 'flex',
      alignItems: 'center',
      padding: '0 32px',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/index.html",
    style: {
      fontFamily: 'var(--font-d)',
      fontSize: '14px',
      fontWeight: 300,
      letterSpacing: '.28em',
      color: 'rgba(var(--text-rgb),calc(.45*var(--kt) + var(--tb)))',
      textDecoration: 'none',
      transition: 'color .2s'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--white)',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(var(--text-rgb),calc(.45*var(--kt) + var(--tb)))'
  }, "MERURIA"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-m)',
      fontSize: '11px',
      color: 'rgba(var(--accent-rgb),calc(.25*var(--ka) + var(--tb)))'
    }
  }, "\u25C2"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-m)',
      fontSize: '11px',
      letterSpacing: '.16em',
      color: 'rgba(var(--accent-rgb),calc(.5*var(--ka) + var(--tb)))',
      textTransform: 'uppercase'
    }
  }, "Charaktererstellung"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), showBack && /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    className: "no-print",
    style: {
      fontFamily: 'var(--font-m)',
      fontSize: '11px',
      letterSpacing: '.14em',
      color: 'rgba(var(--accent-rgb),calc(.45*var(--ka) + var(--tb)))',
      background: 'transparent',
      border: '1px solid rgba(var(--accent-rgb),calc(.15*var(--ka)))',
      borderRadius: '3px',
      padding: '6px 14px',
      cursor: 'pointer',
      textTransform: 'uppercase',
      transition: 'all .2s'
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = 'var(--white)';
      e.currentTarget.style.borderColor = 'rgba(var(--accent-rgb),calc(.4*var(--ka)))';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = 'rgba(var(--accent-rgb),calc(.45*var(--ka) + var(--tb)))';
      e.currentTarget.style.borderColor = 'rgba(var(--accent-rgb),calc(.15*var(--ka)))';
    }
  }, "\u2190 Zur\xFCck"));
}

// ── TYPE SELECT ────────────────────────────────────────────────────────
// Auswahlfläche: beide Flächen sehen im Ruhezustand gleich aus, beim Überfahren leuchtet eine auf.
// locked: halbtransparentes Schloss (NSC-Erstellung braucht für Spieler ein Passwort).
const NSC_UNLOCK_KEY = 'nsc_quiz_unlocked';
function TypeCard({ label, sub, onClick, locked = false, aktiv = false }) {
  const [hov0, setHov] = useState(false);
  const hov = hov0 || aktiv;
  return (
    <button type="button" onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      onFocus={() => setHov(true)} onBlur={() => setHov(false)}
      aria-label={label + (locked ? ' (gesperrt, Passwort nötig)' : '')}
      style={{
        position:'relative', cursor:'pointer', textAlign:'center', minWidth:190, padding:'22px 44px', borderRadius:3,
        background: hov ? 'rgba(var(--purple-rgb),calc(.17*var(--kp)))' : 'rgba(var(--purple-rgb),calc(.06*var(--kp)))',
        border: '1px solid ' + (hov ? 'rgba(var(--accent-rgb),calc(.75*var(--ka)))' : 'rgba(var(--purple-rgb),calc(.32*var(--kp)))'),
        boxShadow: hov ? '0 0 22px rgba(var(--purple-rgb),calc(.35*var(--kp)))' : 'none',
        transition:'all .2s',
      }}>
      <div style={{ fontFamily:'var(--font-d)', fontSize:'17px', fontWeight:300, letterSpacing:'.22em', textTransform:'uppercase',
        color: hov ? 'var(--white)' : 'rgba(var(--text-rgb),calc(.78*var(--kt) + var(--tb)))', transition:'color .2s, opacity .2s', opacity: locked ? (hov ? .45 : .3) : 1 }}>{label}</div>
      <div style={{ fontFamily:'var(--font-m)', fontSize:'11px', letterSpacing:'.18em', textTransform:'uppercase', marginTop:6,
        color: hov ? 'rgba(var(--accent-rgb),calc(.85*var(--ka) + var(--tb)))' : 'rgba(var(--accent-rgb),calc(.5*var(--ka) + var(--tb)))', transition:'color .2s, opacity .2s', opacity: locked ? (hov ? .45 : .3) : 1 }}>{sub}</div>
      {locked && (
        <svg aria-hidden="true" width="46" height="54" viewBox="0 0 46 54"
          style={{ position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)', pointerEvents:'none',
            opacity: hov ? 0.6 : 0.42, transition:'opacity .2s', filter:'drop-shadow(0 0 6px rgba(0,0,0,.45))' }}>
          <path d="M13 24 V16 a10 10 0 0 1 20 0 V24" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
          <rect x="6" y="23" width="34" height="27" rx="4" fill="#ffffff" />
          <circle cx="23" cy="34" r="3.6" fill="rgba(0,0,0,.55)" />
          <rect x="21.4" y="35" width="3.2" height="8" rx="1.4" fill="rgba(0,0,0,.55)" />
        </svg>
      )}
    </button>
  );
}

// Passwortabfrage für „Neuer NSC“ (geprüft per RPC check_nsc_quiz_password, Migration 060)
function NscUnlockForm({ onUnlocked, onCancel }) {
  const [pw, setPw] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  useEffect(() => {
    const k = e => { if (e.key === 'Escape') onCancel(); };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [onCancel]);
  const submit = async (e) => {
    e.preventDefault();
    if (!pw || busy) return;
    setBusy(true); setErr('');
    const { data, error } = await window._sb.rpc('check_nsc_quiz_password', { p_password: pw });
    setBusy(false);
    if (error) { setErr('Prüfung fehlgeschlagen: ' + error.message); return; }
    if (!data) { setErr('Das Passwort stimmt nicht.'); return; }
    try { sessionStorage.setItem(NSC_UNLOCK_KEY, '1'); } catch (e2) { /* privater Modus */ }
    onUnlocked();
  };
  const field = { fontFamily:'var(--font-m)', fontSize:'13px', letterSpacing:'.08em', color:'var(--white)', background:'rgba(var(--bg-rgb),.6)',
    border:'1px solid rgba(var(--purple-rgb),calc(.4*var(--kp)))', borderRadius:3, padding:'9px 12px', outline:'none', minWidth:220 };
  const btn = { fontFamily:'var(--font-m)', fontSize:'11.5px', letterSpacing:'.18em', textTransform:'uppercase', cursor:'pointer', borderRadius:3, padding:'9px 16px' };
  return (
    <div role="dialog" aria-modal="true" aria-label="NSC-Erstellung entsperren" onMouseDown={e => { if (e.target === e.currentTarget) onCancel(); }}
      style={{ position:'fixed', inset:0, zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center', padding:20, background:'rgba(var(--bg-rgb),.78)', backdropFilter:'blur(3px)', animation:'fadeIn .2s ease' }}>
    <form onSubmit={submit} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:14, padding:'26px 28px', maxWidth:460, width:'100%',
      background:'rgba(var(--panel-rgb),.98)', border:'1px solid rgba(var(--accent-rgb),calc(.45*var(--ka)))', borderRadius:4, boxShadow:'0 20px 60px rgba(var(--shadow-rgb),calc(.6*var(--shadow-k)))' }}>
      <div style={{ fontFamily:'var(--font-m)', fontSize:'11px', letterSpacing:'.22em', textTransform:'uppercase', color:'rgba(var(--accent-rgb),calc(.6*var(--ka) + var(--tb)))' }}>
        NSC-Erstellung · Passwort der Spielleitung
      </div>
      <div style={{ display:'flex', gap:8, flexWrap:'wrap', justifyContent:'center' }}>
        <input type="password" autoFocus value={pw} onChange={e => setPw(e.target.value)} placeholder="Passwort" aria-label="Passwort" style={{ ...field, flex:"1 1 100%" }} />
        <button type="submit" disabled={busy || !pw} style={{ ...btn, color:'var(--white)', background:'rgba(var(--purple-rgb),calc(.22*var(--kp)))', border:'1px solid rgba(var(--accent-rgb),calc(.6*var(--ka)))', opacity: busy || !pw ? .6 : 1 }}>
          {busy ? 'Prüfe …' : 'Entsperren'}
        </button>
        <button type="button" onClick={onCancel} style={{ ...btn, color:'rgba(var(--accent-rgb),calc(.55*var(--ka) + var(--tb)))', background:'transparent', border:'1px solid rgba(var(--purple-rgb),calc(.25*var(--kp)))' }}>Abbrechen</button>
      </div>
      {err && <div role="alert" style={{ fontFamily:'var(--font-b)', fontSize:'13px', color:'color-mix(in srgb, rgba(240,130,130,.95), rgb(var(--ink-rgb)) var(--cm))' }}>{err}</div>}
    </form>
    </div>
  );
}

// Spielleitung: Passwort für Spieler festlegen
function NscPasswordSetter() {
  const [msg, setMsg] = useState('');
  const setIt = async () => {
    const pw = window.prompt('Neues Passwort für „Neuer NSC“ (mindestens 4 Zeichen):');
    if (pw == null) return;
    const { error } = await window._sb.rpc('set_nsc_quiz_password', { p_password: pw });
    setMsg(error ? 'Nicht gespeichert: ' + error.message : 'Passwort gespeichert.');
  };
  return (
    <div style={{ display:'flex', alignItems:'center', gap:10, marginTop:4 }}>
      <button type="button" onClick={setIt} style={{ fontFamily:'var(--font-m)', fontSize:'11px', letterSpacing:'.18em', textTransform:'uppercase', cursor:'pointer',
        background:'transparent', border:'none', padding:'4px 0', color:'rgba(var(--accent-rgb),calc(.5*var(--ka) + var(--tb)))', textDecoration:'underline', textUnderlineOffset:3 }}>
        ◈ Passwort für „Neuer NSC“ festlegen
      </button>
      {msg && <span style={{ fontFamily:'var(--font-b)', fontSize:'13px', color:'var(--silver)' }}>{msg}</span>}
    </div>
  );
}

function TypeSelectPhase({
  onSelect
}) {
  const isDm = window.SITE_USER?.role === 'dm';
  const [unlocked, setUnlocked] = useState(() => {
    try { return sessionStorage.getItem(NSC_UNLOCK_KEY) === '1'; } catch (e) { return false; }
  });
  const [askPw, setAskPw] = useState(false);
  const nscLocked = !isDm && !unlocked;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(calc(var(--vh, 1vh) * 100) - 52px)',
      gap: 18,
      padding: 40,
      animation: 'fadeIn .5s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-m)',
      fontSize: '11.5px',
      letterSpacing: '.3em',
      color: 'rgba(var(--purple-rgb),calc(.5*var(--kp) + var(--tb)))',
      textTransform: 'uppercase'
    }
  }, "Neuer Charakter"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-d)',
      fontSize: 'clamp(20px,4vw,38px)',
      fontWeight: 300,
      letterSpacing: '.2em',
      color: 'var(--white)',
      textShadow: '0 0 40px rgba(var(--purple-rgb),calc(.4*var(--kp)))',
      animation: 'flicker-mid 10s infinite',
      textTransform: 'uppercase',
      textAlign: 'center'
    }
  }, "Wen erschaffst du?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-b)',
      fontWeight: 300,
      fontSize: '13px',
      color: 'rgba(var(--text-rgb),calc(.38*var(--kt) + var(--tb)))',
      letterSpacing: '.08em',
      maxWidth: 380,
      textAlign: 'center',
      lineHeight: 1.85,
      marginBottom: 12
    }
  }, "W\xE4hle die Art des Charakters, den du erstellen m\xF6chtest."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(TypeCard, {
    label: "Neuer SC",
    sub: "Spielercharakter",
    onClick: () => onSelect('sc')
  }), /*#__PURE__*/React.createElement(TypeCard, {
    label: "Neuer NSC",
    sub: "Nicht-Spieler-Charakter",
    locked: nscLocked,
    onClick: () => nscLocked ? setAskPw(true) : onSelect('nsc')
  })), nscLocked && askPw && /*#__PURE__*/React.createElement(NscUnlockForm, {
    onUnlocked: () => { setUnlocked(true); setAskPw(false); },
    onCancel: () => setAskPw(false)
  }), isDm && /*#__PURE__*/React.createElement(NscPasswordSetter, null));
}

// ── NSC: Monster oder nicht? ─────────────────────────────────────────────
function NscArtPhase({ onWahl }) {
  const [wurf, setWurf] = useState(null);   // Ergebnis beim Würfeln, kurz angezeigt
  const wuerfeln = () => {
    const monster = Math.random() < 0.5;
    setWurf(monster);
    setTimeout(() => onWahl(monster), 1100);
  };
  const karte = (label, sub, onClick, aktiv) => /*#__PURE__*/React.createElement(TypeCard, { key: label, label, sub, onClick: wurf == null ? onClick : () => {}, locked: false });
  return /*#__PURE__*/React.createElement("div", {
    style: { display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight:'calc(calc(var(--vh, 1vh) * 100) - 52px)', gap:18, padding:40, animation:'fadeIn .5s ease' }
  },
    /*#__PURE__*/React.createElement("div", { style:{ fontFamily:'var(--font-m)', fontSize:'11.5px', letterSpacing:'.3em', color:'rgba(var(--purple-rgb),calc(.5*var(--kp) + var(--tb)))', textTransform:'uppercase' } }, "Neuer NSC"),
    /*#__PURE__*/React.createElement("h1", { style:{ fontFamily:'var(--font-d)', fontSize:'clamp(20px,4vw,34px)', fontWeight:300, letterSpacing:'.18em', color:'var(--white)', textTransform:'uppercase', textAlign:'center' } }, "Ist dein NSC ein Monster?"),
    /*#__PURE__*/React.createElement("p", { style:{ fontFamily:'var(--font-b)', fontWeight:300, fontSize:'13px', color:'rgba(var(--text-rgb),calc(.45*var(--kt) + var(--tb)))', maxWidth:440, textAlign:'center', lineHeight:1.85, marginBottom:12 } },
      "Monster-NSC werden aus der Monsterdatenbank gewählt und bringen ihren Statblock mit. Normale NSC entstehen wie Spielercharaktere über Tags und Quiz."),
    /*#__PURE__*/React.createElement("div", { style:{ display:'flex', gap:20, flexWrap:'wrap', justifyContent:'center' } },
      karte("Ja", "Monster-NSC", () => onWahl(true)),
      karte("Nein", "Normaler NSC", () => onWahl(false)),
      karte("Würfeln", "Zufall entscheidet", wuerfeln)
    ),
    wurf != null && /*#__PURE__*/React.createElement("div", { role:'status', style:{ fontFamily:'var(--font-m)', fontSize:'12px', letterSpacing:'.24em', textTransform:'uppercase', color:'var(--white)', animation:'fadeIn .25s ease' } },
      "⚄ Gewürfelt: ", wurf ? "Monster-NSC" : "Normaler NSC")
  );
}

// ── CHIP ───────────────────────────────────────────────────────────────────
function Chip({
  label,
  st,
  onClick,
  isUnk,
  isGroupLabel
}) {
  const cls = ['chip', isUnk ? 'unk' : '', isGroupLabel ? 'group-label' : '', st === 'selected' ? 'selected' : '', st === 'grayed' ? 'grayed' : '', st === 'multi' ? 'multi' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", {
    className: cls,
    onClick: onClick
  }, isUnk ? '? Unbekannt' : label);
}

// ── CATEGORY BLOCK ─────────────────────────────────────────────────────────
function CatBlock({
  title,
  items,
  selected,
  onSelect,
  hideOthers = false,
  details = null,
  grouped = null,
  multiSet = null,
  onMultiToggle = null
}) {
  const isUnk = selected === 'unbekannt';
  const hasSel = selected && selected !== 'unbekannt';
  const [detailsOpen, setDetailsOpen] = useState(false);
  const chipSt = item => {
    if (multiSet != null) return multiSet.has(item) ? 'multi' : isUnk ? 'hidden' : 'default';
    if (isUnk) return 'hidden';
    if (hasSel) return item === selected ? 'selected' : 'hidden';
    return 'default';
  };
  const handleChip = item => {
    const s = chipSt(item);
    if (s === 'grayed') return;
    if (multiSet != null) {
      onMultiToggle(item);
      return;
    }
    onSelect(selected === item ? null : item);
  };
  const renderItem = item => {
    const s = chipSt(item);
    if (s === 'hidden') return null;
    return /*#__PURE__*/React.createElement(Chip, {
      key: item,
      label: item,
      st: s,
      onClick: () => handleChip(item)
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "cat-block"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "cat-head"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "chip-wrap"
  }, !hasSel && /*#__PURE__*/React.createElement(Chip, {
    label: "Unbekannt",
    isUnk: true,
    st: isUnk ? 'selected' : 'default',
    onClick: () => onSelect(selected === 'unbekannt' ? null : 'unbekannt')
  }), grouped ? grouped.map((grp, gi) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: gi
  }, grp.gruppe && !hasSel && !isUnk && /*#__PURE__*/React.createElement(Chip, {
    label: grp.gruppe,
    isGroupLabel: true
  }), grp.rassen.map(renderItem))) : items.map(renderItem),
  // Zurücksetzen, sobald die übrigen Tags ausgeblendet sind (Stil wie „Rückgängig“ in der Kampfsimulation)
  (isUnk || (hasSel && multiSet == null)) && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onSelect(null),
    title: "Auswahl zurücksetzen",
    "aria-label": "Auswahl zur\xFCcksetzen",
    style: {
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', alignSelf: 'center',
      width: 34, height: 30, padding: 0, cursor: 'pointer', borderRadius: 4, fontSize: 15, lineHeight: 1,
      background: 'rgba(255,190,60,0.08)', border: '1px solid rgba(255,190,60,0.28)',
      color: 'color-mix(in srgb, rgba(255,210,100,0.85), rgb(var(--ink-rgb)) var(--cm))', transition: 'all .15s'
    },
    onMouseEnter: e => { e.currentTarget.style.background = 'rgba(255,190,60,0.16)'; e.currentTarget.style.borderColor = 'rgba(255,190,60,0.55)'; },
    onMouseLeave: e => { e.currentTarget.style.background = 'rgba(255,190,60,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,190,60,0.28)'; }
  }, "\u21A9")),
  // Aufklappbare Beschreibungen (z. B. Lebensstile)
  details && /*#__PURE__*/React.createElement("div", { style:{ marginTop:10 } },
    /*#__PURE__*/React.createElement("button", {
      type:"button", onClick:() => setDetailsOpen(o => !o), "aria-expanded":detailsOpen,
      style:{ fontFamily:'var(--font-m)', fontSize:'11px', letterSpacing:'.18em', textTransform:'uppercase', cursor:'pointer', background:'transparent', border:'none', padding:'4px 0',
        color:'rgba(var(--accent-rgb),calc(.55*var(--ka) + var(--tb)))' }
    }, detailsOpen ? "\u25B2 Beschreibungen ausblenden" : "\u25BC Beschreibungen anzeigen"),
    detailsOpen && /*#__PURE__*/React.createElement("div", { style:{ display:'flex', flexDirection:'column', gap:10, marginTop:8 } },
      details.filter(x => !hasSel || x.name === selected).map(x => /*#__PURE__*/React.createElement("div", { key:x.name,
        style:{ padding:'10px 14px', borderRadius:3, border:'1px solid rgba(var(--purple-rgb),calc(.2*var(--kp)))', background: x.name === selected ? 'rgba(var(--purple-rgb),calc(.12*var(--kp)))' : 'rgba(var(--purple-rgb),calc(.04*var(--kp)))' } },
        /*#__PURE__*/React.createElement("div", { style:{ display:'flex', gap:10, alignItems:'baseline', marginBottom:4 } },
          /*#__PURE__*/React.createElement("span", { style:{ fontFamily:'var(--font-d)', fontSize:'14px', letterSpacing:'.08em', color:'var(--white)' } }, x.name),
          x.kosten && /*#__PURE__*/React.createElement("span", { style:{ fontFamily:'var(--font-m)', fontSize:'11px', letterSpacing:'.12em', color:'rgba(var(--accent-rgb),calc(.55*var(--ka) + var(--tb)))' } }, x.kosten === '\u2014' ? 'keine Kosten' : x.kosten + ' pro Tag')),
        /*#__PURE__*/React.createElement("div", { style:{ fontFamily:'var(--font-b)', fontSize:'13px', lineHeight:1.7, color:'var(--silver)' } }, x.desc)))
    )
  ));
}

// ── GOTTHEIT ───────────────────────────────────────────────────────────────
// Zweigeteilt: oben die Namen, unten Gesinnung und Titel, jeweils gruppiert (Merurisches Pantheon,
// Dämonen, Naturgeister). Wird ein Name oder ein Titel gewählt, bleiben nur dieser Name und sein Titel stehen.
// Eine Gesinnung grenzt Namen und Titel ein; den Rest ermittelt das Quiz.
const GOTT_GESINNUNGEN = [
  { id:'gut',        label:'Gut' },
  { id:'eher-gut',   label:'Neutral – eher gut' },
  { id:'neutral',    label:'Neutral' },
  { id:'eher-boese', label:'Neutral – eher böse' },
  { id:'boese',      label:'Böse' },
];
// Gesinnung einer Gottheit (deutsch „rechtschaffen-gut“ oder englisch „Lawful Evil“) → eine der fünf Stufen
function gottGesinnung(a) {
  const s = String(a || '').toLowerCase().replace(/lawful/g, 'rechtschaffen').replace(/chaotic/g, 'chaotisch')
    .replace(/true neutral/g, 'neutral').replace(/evil/g, 'böse').replace(/good/g, 'gut').replace(/[-_]/g, ' ').trim();
  if (/^neutral gut$/.test(s)) return 'eher-gut';
  if (/gut/.test(s)) return 'gut';
  if (/^neutral böse$/.test(s)) return 'eher-boese';
  if (/böse/.test(s)) return 'boese';
  return 'neutral';
}
function gottGruppen() {
  const G = window.GODS_DATA || {};
  return [
    { gruppe:'Merurisches Pantheon', goetter:G.gods || [] },
    { gruppe:'Dämonen',              goetter:G.demons || [] },
    { gruppe:'Naturgeister',         goetter:G.naturgeister || [] },
  ];
}
const gottAlle = () => gottGruppen().flatMap(g => g.goetter);
// Namen aller Gottheiten, optional nur einer Gesinnungsstufe
const gottNamen = ges => gottAlle().filter(g => !ges || gottGesinnung(g.alignment) === ges).map(g => g.name);

// Quizfragen zur Gottheit aus den Götterdaten; Antworten ohne passende Gottheit blendet das Quiz aus
function gottQuizFragen() {
  const gruppen = gottGruppen();
  const domaenen = {};
  (gruppen[0].goetter).forEach(g => String(g.domain || '').split('·').map(x => x.trim()).filter(Boolean)
    .forEach(d => { (domaenen[d] = domaenen[d] || []).push(g.name); }));
  return [
    { id:'gt-ges', kat:'gottheit', frage:'Welche Gesinnung hat die Gottheit deines Charakters?',
      optionen: GOTT_GESINNUNGEN.map(o => ({ text:o.label, behalte:gottNamen(o.id) })) },
    { id:'gt-art', kat:'gottheit', frage:'Wem gilt der Glaube deines Charakters?',
      optionen: gruppen.map(g => ({ text:g.gruppe, behalte:g.goetter.map(x => x.name) })) },
    { id:'gt-dom', kat:'gottheit', frage:'Welche Domäne liegt seinem Glauben am nächsten?',
      optionen: Object.keys(domaenen).sort((a, b) => a.localeCompare(b, 'de')).map(d => ({ text:d, behalte:domaenen[d] })) },
    { id:'gt-titel', kat:'gottheit', frage:'Welcher dieser Titel spricht deinen Charakter am meisten an?',
      optionen: gottAlle().map(g => ({ text:g.title || g.name, behalte:[g.name] })) },
  ];
}

function RevertBtn({ onClick }) {
  return (
    <button type="button" onClick={onClick} title="Auswahl zurücksetzen" aria-label="Auswahl zurücksetzen"
      style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', alignSelf:'center', width:34, height:30, padding:0, cursor:'pointer',
        borderRadius:4, fontSize:15, lineHeight:1, background:'rgba(255,190,60,0.08)', border:'1px solid rgba(255,190,60,0.28)',
        color:'color-mix(in srgb, rgba(255,210,100,0.85), rgb(var(--ink-rgb)) var(--cm))', transition:'all .15s' }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,190,60,0.16)'; e.currentTarget.style.borderColor = 'rgba(255,190,60,0.55)'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,190,60,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,190,60,0.28)'; }}>
      ↩
    </button>
  );
}

function GottheitBlock({ selected, gesinnung, onSelect, onGesinnung }) {
  const isUnk = selected === 'unbekannt';
  const sel = selected && !isUnk ? gottAlle().find(g => g.name === selected) : null;
  const gruppen = gottGruppen();
  const passt = g => sel ? g === sel : (!gesinnung || gottGesinnung(g.alignment) === gesinnung);
  const sub = { fontFamily:'var(--font-m)', fontSize:'11px', letterSpacing:'.2em', textTransform:'uppercase',
    color:'rgba(var(--accent-rgb),calc(.45*var(--ka) + var(--tb)))', margin:'4px 0 8px' };
  const gruppenChips = (label) => gruppen.map(gr => {
    const goetter = gr.goetter.filter(passt);
    if (!goetter.length || isUnk) return null;
    return (
      <React.Fragment key={gr.gruppe}>
        {!sel && <Chip label={gr.gruppe} isGroupLabel={true} />}
        {goetter.map(g => <Chip key={g.name} label={label(g)} st={sel ? 'selected' : 'default'}
          onClick={() => onSelect(sel ? null : g.name)} />)}
      </React.Fragment>
    );
  });
  return (
    <div className="cat-block">
      <div className="cat-head">Gottheit</div>

      <div style={sub}>Name</div>
      <div className="chip-wrap">
        {!sel && <Chip label="Unbekannt" isUnk={true} st={isUnk ? 'selected' : 'default'} onClick={() => onSelect(isUnk ? null : 'unbekannt')} />}
        {gruppenChips(g => g.name)}
        {(sel || isUnk) && <RevertBtn onClick={() => onSelect(null)} />}
      </div>

      {!isUnk && (
        <React.Fragment>
          <div style={{ ...sub, marginTop:14 }}>Gesinnung &amp; Titel</div>
          {!sel && (
            <div className="chip-wrap" style={{ marginBottom:8 }}>
              {GOTT_GESINNUNGEN.filter(o => !gesinnung || o.id === gesinnung).map(o => (
                <Chip key={o.id} label={o.label} st={gesinnung === o.id ? 'selected' : 'default'}
                  onClick={() => onGesinnung(gesinnung === o.id ? null : o.id)} />
              ))}
              {gesinnung && <RevertBtn onClick={() => onGesinnung(null)} />}
            </div>
          )}
          <div className="chip-wrap">
            {gruppenChips(g => g.title || g.name)}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

// ── WERKZEUGÜBUNGEN ─────────────────────────────────────────────────────────
// Oben: Werkzeuge, die der Charakter sicher bekommen soll (höchstens so viele, wie eine Kombination aus
// Rasse, angeborenem Talent, Klasse und Hintergrund liefern kann; daraus ergibt sich diese Kombination).
// Unten: Werkzeuge, die zum Hintergrund passen sollen – das Quiz ermittelt dann den Hintergrund.
const WZ_FEST_KATS = [['rasse','Rasse'], ['klasse','Klasse'], ['hintergrund','Hintergrund']];
const wzFest = tags => ({ rasse:tags.rasse, klasse:tags.klasse, hintergrund:tags.hintergrund });
const wzGewaehlt = v => v != null && v !== 'unbekannt';

function WerkzeugBlock({ tags, setTag, setWerkzeug }) {
  const P = window.WERKZEUG_PLANER;
  const sicher = tags.werkzeugeSicher || [];
  const fest = wzFest(tags);
  const festTags = WZ_FEST_KATS.filter(([k]) => wzGewaehlt(tags[k]));
  const maxFrei = useMemo(() => P.maxAnzahl({}), []);
  const maxFest = useMemo(() => P.maxAnzahl(fest), [fest.rasse, fest.klasse, fest.hintergrund]);
  const kombis = useMemo(() => P.kombinationen(sicher, fest), [sicher.join('|'), fest.rasse, fest.klasse, fest.hintergrund]);
  // Werkzeuge, die sich noch dazunehmen lassen (es bleibt eine passende Kombination)
  const moeglich = useMemo(() => {
    if (sicher.length >= maxFest) return new Set();
    return new Set(P.ALLE.filter(w => !sicher.includes(w) && kombis.some(c => P.zuordnung([...sicher, w], c.plaetze) === sicher.length + 1)));
  }, [kombis, maxFest]);
  const blockiert = festTags.length > 0 && (maxFest === 0 || (sicher.length > 0 && kombis.length === 0));
  const toggle = w => setTag('werkzeugeSicher', sicher.includes(w) ? sicher.filter(x => x !== w) : [...sicher, w]);
  const allesUnbekannt = () => festTags.forEach(([k]) => setTag(k, 'unbekannt'));
  const sub = { fontFamily:'var(--font-m)', fontSize:'11px', letterSpacing:'.2em', textTransform:'uppercase',
    color:'rgba(var(--accent-rgb),calc(.45*var(--ka) + var(--tb)))', margin:'4px 0 8px' };
  const hinweis = { fontFamily:'var(--font-b)', fontSize:'13px', lineHeight:1.6, color:'var(--silver)', margin:'0 0 10px' };
  const nenne = festTags.map(([k]) => '„' + tags[k] + '“').join(', ');
  const btn = { fontFamily:'var(--font-m)', fontSize:'11px', letterSpacing:'.14em', textTransform:'uppercase', cursor:'pointer', padding:'5px 10px', borderRadius:3,
    color:'var(--white)', background:'rgba(var(--purple-rgb),calc(.2*var(--kp)))', border:'1px solid rgba(var(--accent-rgb),calc(.55*var(--ka)))' };

  return (
    <div className="cat-block">
      <div className="cat-head">Werkzeugübungen</div>

      <div style={sub}>Sicher bekommen · {sicher.length} / {blockiert ? 0 : maxFest}</div>
      <p style={hinweis}>
        Wähle bis zu {maxFrei} Werkzeuge, die dein Charakter auf jeden Fall beherrschen soll. Rasse, angeborenes Talent, Klasse und Hintergrund werden dann so gewählt, dass er genau diese bekommt.
      </p>
      {blockiert ? (
        <div style={{ display:'flex', gap:10, alignItems:'center', flexWrap:'wrap', marginBottom:10 }}>
          <span style={{ ...hinweis, margin:0, color:'color-mix(in srgb, rgba(255,190,90,.95), rgb(var(--ink-rgb)) var(--cm))' }}>
            Diese Auswahlmethode ist nicht möglich aufgrund von {nenne}.
          </span>
          <button type="button" style={btn} onClick={allesUnbekannt}>Alle auf „Unbekannt“ setzen</button>
        </div>
      ) : festTags.length > 0 && maxFest < maxFrei && (
        <div style={{ display:'flex', gap:10, alignItems:'center', flexWrap:'wrap', marginBottom:10 }}>
          <span style={{ ...hinweis, margin:0 }}>Durch {nenne} sind höchstens {maxFest} möglich.</span>
          <button type="button" style={btn} onClick={allesUnbekannt}>Alle auf „Unbekannt“ setzen</button>
        </div>
      )}
      {!blockiert && (
        <div className="chip-wrap">
          {P.ALLE.filter(w => sicher.includes(w) || moeglich.has(w)).map(w => (
            <Chip key={w} label={w} st={sicher.includes(w) ? 'selected' : 'default'} onClick={() => toggle(w)} />
          ))}
          {sicher.length > 0 && <RevertBtn onClick={() => setTag('werkzeugeSicher', [])} />}
        </div>
      )}

      <div style={{ ...sub, marginTop:16 }}>Passend zum Hintergrund (Mehrfachauswahl)</div>
      <p style={hinweis}>Diese Werkzeuge grenzen die Hintergründe ein; den Hintergrund ermittelt das Quiz.</p>
      <CatBlock title={null}
        items={P.ALLE.filter(w => !sicher.includes(w))}
        selected={tags.werkzeuge === 'unbekannt' ? 'unbekannt' : null}
        onSelect={v => { if (v === 'unbekannt') setTag('werkzeuge', 'unbekannt'); else setWerkzeug(new Set()); }}
        multiSet={tags.werkzeuge instanceof Set ? tags.werkzeuge : null}
        onMultiToggle={item => {
          const s = new Set(tags.werkzeuge instanceof Set ? tags.werkzeuge : []);
          s.has(item) ? s.delete(item) : s.add(item);
          setWerkzeug(s);
        }} />
    </div>
  );
}

// ── DIVISION ───────────────────────────────────────────────────────────────
// Wie bei der Gottheit: oben die Namen, unten die Titel (Aufgabe der Division). Wird eines von beiden
// gewählt, bleiben nur dieser Name und sein Titel stehen.
function divisionTitel(name) {
  if (name === 'Keine') return 'Keiner Division zugehörig';
  const d = (window.DIVISIONS_DATA || []).find(x => x.name === name);
  return (d && d.subtitle) || name;
}

function DivisionBlock({ items, selected, onSelect }) {
  const isUnk = selected === 'unbekannt';
  const sel = selected && !isUnk ? selected : null;
  const liste = (items || []).filter(n => !sel || n === sel);
  const sub = { fontFamily:'var(--font-m)', fontSize:'11px', letterSpacing:'.2em', textTransform:'uppercase',
    color:'rgba(var(--accent-rgb),calc(.45*var(--ka) + var(--tb)))', margin:'4px 0 8px' };
  return (
    <div className="cat-block">
      <div className="cat-head">Division</div>
      <div style={sub}>Name</div>
      <div className="chip-wrap">
        {!sel && <Chip label="Unbekannt" isUnk={true} st={isUnk ? 'selected' : 'default'} onClick={() => onSelect(isUnk ? null : 'unbekannt')} />}
        {!isUnk && liste.map(n => <Chip key={n} label={n} st={sel ? 'selected' : 'default'} onClick={() => onSelect(sel ? null : n)} />)}
        {(sel || isUnk) && <RevertBtn onClick={() => onSelect(null)} />}
      </div>
      {!isUnk && (
        <React.Fragment>
          <div style={{ ...sub, marginTop:14 }}>Titel</div>
          <div className="chip-wrap">
            {liste.map(n => <Chip key={n} label={divisionTitel(n)} st={sel ? 'selected' : 'default'} onClick={() => onSelect(sel ? null : n)} />)}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

// ── TAG PHASE ──────────────────────────────────────────────────────────────
function TagPhase({
  tags,
  setTag,
  setWerkzeug,
  onNext,
  onZufall
}) {
  const GOETTER = useMemo(() => {
    if (!window.GODS_DATA) return [];
    const {
      gods = [],
      demons = [],
      naturgeister = []
    } = window.GODS_DATA;
    return [...gods, ...demons, ...naturgeister].map(g => g.name);
  }, []);
  const selCount = Object.entries(tags).filter(([k, v]) => k === 'werkzeuge' ? v instanceof Set && v.size > 0 : k === 'werkzeugeSicher' ? v.length > 0 : v !== null).length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 920,
      margin: '0 auto',
      padding: '44px 32px 80px',
      animation: 'slideUp .4s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 38
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-m)',
      fontSize: '11.5px',
      letterSpacing: '.28em',
      color: 'rgba(var(--purple-rgb),calc(.5*var(--kp) + var(--tb)))',
      textTransform: 'uppercase',
      marginBottom: 9
    }
  }, "Schritt 1 \xB7 Tag-Auswahl"),
  /*#__PURE__*/React.createElement("div", {style:{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:16,flexWrap:'wrap',marginBottom:11}},
    /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-d)',
        fontSize: 'clamp(16px,3vw,26px)',
        fontWeight: 300,
        letterSpacing: '.18em',
        color: 'var(--white)',
        margin: 0,
      }
    }, "Was wei\xDFt du schon?"),
    /*#__PURE__*/React.createElement("button", {
      onClick: onNext,
      style: {
        fontFamily: 'var(--font-m)', fontSize: '11px', letterSpacing: '.16em',
        textTransform: 'uppercase', padding: '6px 14px', flexShrink: 0,
        background: 'transparent', border: '1px solid rgba(var(--accent-rgb),calc(.2*var(--ka)))',
        borderRadius: 3, cursor: 'pointer', color: 'rgba(var(--accent-rgb),calc(.4*var(--ka) + var(--tb)))',
        transition: 'all .18s', marginTop: 4,
      },
      onMouseEnter: e => { e.currentTarget.style.borderColor='rgba(var(--purple-rgb),calc(.45*var(--kp)))'; e.currentTarget.style.color='rgba(var(--text-rgb),calc(.75*var(--kt) + var(--tb)))'; },
      onMouseLeave: e => { e.currentTarget.style.borderColor='rgba(var(--accent-rgb),calc(.2*var(--ka)))'; e.currentTarget.style.color='rgba(var(--accent-rgb),calc(.4*var(--ka) + var(--tb)))'; },
    }, "Direkt zum Quiz →"),
    onZufall && /*#__PURE__*/React.createElement("button", { type:"button", style:{ ...ZUFALL_STIL, marginTop:2 }, onMouseEnter:zufallHover(true), onMouseLeave:zufallHover(false),
      title:"Alles, was du nicht festgelegt hast, wird ausgewürfelt", onClick:onZufall }, "\u2684 Entscheide f\xFCr mich")
  ),
  /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-b)',
      fontWeight: 300,
      fontSize: '13px',
      color: 'rgba(var(--text-rgb),calc(.4*var(--kt) + var(--tb)))',
      lineHeight: 1.9,
      maxWidth: 580
    }
  }, "Markiere alles, was du bereits \xFCber deinen Charakter wei\xDFt. Felder, die du nicht ausf\xFCllst oder als ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'color-mix(in srgb, rgba(140,180,255,.7), rgb(var(--ink-rgb)) var(--cm))'
    }
  }, "Unbekannt"), " markierst, werden im n\xE4chsten Schritt durch gezielte Quizfragen ermittelt.", /*#__PURE__*/React.createElement("br", null), "W\xE4hlst du in einer Kategorie ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'rgba(var(--text-rgb),calc(.6*var(--kt) + var(--tb)))',
      fontWeight: 400
    }
  }, "einen Tag"), " aus, verschwinden die anderen \u2014 mit \u21a9 holst du sie zur\xFCck.")), /*#__PURE__*/React.createElement(CatBlock, {
    title: "Rasse",
    grouped: window.RASSEN_GRUPPEN,
    items: window.ALLE_RASSEN,
    selected: tags.rasse,
    onSelect: v => setTag('rasse', v),
    hideOthers: true
  }), /*#__PURE__*/React.createElement(CatBlock, {
    title: "Klasse",
    items: window.ALLE_KLASSEN,
    selected: tags.klasse,
    onSelect: v => setTag('klasse', v),
    hideOthers: true
  }), (() => {
    const meta = (window.KLASSEN_META || {})[tags.klasse];
    if (!meta) return null;
    const subs = ((window.KLASSEN_DETAIL || {})[meta.id]?.unterklassen || []).map(s => s.name || s);
    if (!subs.length) return null;
    const stufeHint = meta.subStufe > 1 ? ` (ab Stufe ${meta.subStufe})` : '';
    return /*#__PURE__*/React.createElement(CatBlock, {
      title: 'Spezialisierung' + stufeHint,
      items: subs,
      selected: tags.subklasse,
      onSelect: v => setTag('subklasse', v)
    });
  })(), /*#__PURE__*/React.createElement(CatBlock, {
    title: "Hintergrund",
    items: window.ALLE_HINTERGRUENDE,
    selected: tags.hintergrund,
    onSelect: v => setTag('hintergrund', v)
  }), /*#__PURE__*/React.createElement(CatBlock, {
    title: "Zauberwirker",
    items: ['Ja — Dein Charakter kann Zauber wirken.', 'Nein — Kein Zauberwirker'],
    selected: tags.zauberwirker,
    onSelect: v => setTag('zauberwirker', v)
  }), /*#__PURE__*/React.createElement(CatBlock, {
    title: "Same der Furcht",
    items: window.ALLE_SAMEN,
    selected: tags.samen,
    onSelect: v => setTag('samen', v)
  }), /*#__PURE__*/React.createElement(CatBlock, {
    title: "Lebensstil",
    items: window.ALLE_LEBENSSTILE,
    details: window.LEBENSSTIL_INFO,
    selected: tags.lebensstil,
    onSelect: v => setTag('lebensstil', v)
  }), /*#__PURE__*/React.createElement(GottheitBlock, {
    selected: tags.gottheit,
    gesinnung: tags.gottheitGesinnung,
    onSelect: v => setTag('gottheit', v),
    onGesinnung: v => setTag('gottheitGesinnung', v)
  }), /*#__PURE__*/React.createElement(WerkzeugBlock, {
    tags,
    setTag,
    setWerkzeug
  }), /*#__PURE__*/React.createElement(DivisionBlock, {
    items: window.ALLE_DIVISIONEN,
    selected: tags.division,
    onSelect: v => setTag('division', v)
  }), /*#__PURE__*/React.createElement(CatBlock, {
    title: "Geschlecht",
    items: window.ALLE_GESCHLECHTER || ['Männlich','Weiblich','Divers','Keine Angabe'],
    selected: tags.geschlecht,
    onSelect: v => setTag('geschlecht', v)
  }), /*#__PURE__*/React.createElement(CatBlock, {
    title: "Gesinnung",
    items: window.ALLE_GESINNUNGEN || [],
    selected: tags.gesinnung,
    onSelect: v => setTag('gesinnung', v)
  }), /*#__PURE__*/React.createElement(CatBlock, {
    title: "Sternzeichen",
    items: window.ALLE_STERNZEICHEN || [],
    selected: tags.sternzeichen,
    onSelect: v => setTag('sternzeichen', v)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 14
    },
    className: "no-print"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-m)',
      fontSize: '11.5px',
      color: 'rgba(var(--accent-rgb),calc(.38*var(--ka) + var(--tb)))',
      letterSpacing: '.1em'
    }
  }, selCount, " Feld", selCount !== 1 ? 'er' : '', " ausgef\xFCllt"), /*#__PURE__*/React.createElement(GlitchBtn, {
    label: "Weiter",
    sub: "Zum Quiz",
    onClick: onNext,
    primary: true,
    style: {
      padding: '14px 36px',
      minWidth: 0
    }
  })));
}

// Knopf „Entscheide für mich“: würfelt eine Antwort bzw. alles Offene aus
const ZUFALL_STIL = {
  fontFamily:'var(--font-b)', fontStyle:'italic', fontSize:'13.5px', letterSpacing:'.04em', cursor:'pointer',
  padding:'9px 20px', borderRadius:999, background:'rgba(255,190,60,0.06)', border:'1px dashed rgba(255,190,60,0.45)',
  color:'color-mix(in srgb, rgba(255,210,100,0.9), rgb(var(--ink-rgb)) var(--cm))', transition:'all .15s',
};
const zufallHover = on => e => { e.currentTarget.style.background = on ? 'rgba(255,190,60,0.14)' : 'rgba(255,190,60,0.06)'; e.currentTarget.style.borderStyle = on ? 'solid' : 'dashed'; };
const zufallAus = arr => arr[Math.floor(Math.random() * arr.length)];

// Antworten, die die Kandidaten wirklich eingrenzen (mindestens einer passt, nicht alle bleiben gleich)
function quizOptionen(q, possible) {
  const pos = possible[q.kat] || [];
  return (q.optionen || []).filter(o => (o.behalte || []).some(x => pos.includes(x)));
}

// ── QUIZ PHASE ─────────────────────────────────────────────────────────────
function QuizPhase({
  tags,
  possible,
  quizAnswers,
  onAnswer,
  onFinish,
  quizData,
  auto = false
}) {
  const currentQ = useMemo(() => {
    const qd = quizData || window.CHAR_QUIZ;
    if (!qd) return null;
    return qd.find(q => {
      if (quizAnswers.some(a => a.qId === q.id)) return false;
      const tv = tags[q.kat];
      if (tv !== null && tv !== 'unbekannt') return false;
      return (possible[q.kat] || []).length > 1 && quizOptionen(q, possible).length > 1;
    });
  }, [quizAnswers, tags, possible, quizData]);
  const answered = quizAnswers.length;
  const remaining = useMemo(() => ((quizData || window.CHAR_QUIZ) || []).filter(q => {
    if (quizAnswers.some(a => a.qId === q.id)) return false;
    const tv = tags[q.kat];
    return (tv === null || tv === 'unbekannt') && (possible[q.kat] || []).length > 1 && quizOptionen(q, possible).length > 1;
  }).length, [quizAnswers, tags, possible, quizData]);
  const total = answered + remaining;
  // „Entscheide für mich“ am Anfang: alle Fragen werden zufällig beantwortet
  useEffect(() => {
    if (!auto || !currentQ) return;
    const t = setTimeout(() => onAnswer(currentQ, zufallAus(quizOptionen(currentQ, possible))), 90);
    return () => clearTimeout(t);
  }, [auto, currentQ]);
  useEffect(() => {
    if (!currentQ) {
      const t = setTimeout(onFinish, auto ? 150 : 400);
      return () => clearTimeout(t);
    }
  }, [currentQ]);
  if (!currentQ) return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(calc(var(--vh, 1vh) * 100) - 52px)',
      gap: 14,
      animation: 'fadeIn .5s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-m)',
      fontSize: '11.5px',
      letterSpacing: '.3em',
      color: 'color-mix(in srgb, rgba(94,232,208,.7), rgb(var(--ink-rgb)) var(--cm))',
      textTransform: 'uppercase'
    }
  }, "Analyse abgeschlossen"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-d)',
      fontSize: '22px',
      fontWeight: 300,
      letterSpacing: '.2em',
      color: 'var(--white)'
    }
  }, "Auswertung wird vorbereitet\u2026"));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 700,
      margin: '0 auto',
      padding: '44px 32px 80px',
      animation: 'slideUp .35s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 7
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-m)',
      fontSize: '11.5px',
      letterSpacing: '.2em',
      color: 'rgba(var(--purple-rgb),calc(.5*var(--kp) + var(--tb)))',
      textTransform: 'uppercase'
    }
  }, "Schritt 2 \xB7 Charakteranalyse"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-m)',
      fontSize: '11.5px',
      color: 'rgba(var(--accent-rgb),calc(.4*var(--ka) + var(--tb)))'
    }
  }, answered, " / ", total)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: 'rgba(var(--accent-rgb),calc(.1*var(--ka)))',
      borderRadius: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      background: 'rgba(var(--purple-rgb),calc(.65*var(--kp)))',
      borderRadius: 1,
      width: `${total > 0 ? answered / total * 100 : 0}%`,
      transition: 'width .4s ease'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-m)',
      fontSize: '11px',
      letterSpacing: '.2em',
      color: 'rgba(var(--purple-rgb),calc(.55*var(--kp) + var(--tb)))',
      textTransform: 'uppercase',
      marginBottom: 9
    }
  }, "Kategorie: ", {
    rasse: 'Rasse',
    klasse: 'Klasse',
    hintergrund: 'Hintergrund',
    division: 'Division',
    lebensstil: 'Lebensstil',
    gottheit: 'Gottheit',
    samen: 'Same der Furcht',
    sternzeichen: 'Sternzeichen',
    werkzeuge: 'Werkzeugübungen',
    geschlecht: 'Geschlecht',
    status: 'Status',
    lebensphase: 'Lebensphase',
    gesinnung: 'Gesinnung',
  }[currentQ.kat] || currentQ.kat), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-d)',
      fontSize: 'clamp(15px,2.4vw,21px)',
      fontWeight: 300,
      letterSpacing: '.1em',
      color: 'var(--white)',
      marginBottom: 26,
      lineHeight: 1.55
    }
  }, currentQ.frage), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, quizOptionen(currentQ, possible).map((opt, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: "quiz-opt",
    onClick: () => onAnswer(currentQ, opt)
  }, opt.text))), /*#__PURE__*/React.createElement("div", { style:{ display:'flex', justifyContent:'center', marginTop:22 } },
    /*#__PURE__*/React.createElement("button", { type:"button", style:ZUFALL_STIL, onMouseEnter:zufallHover(true), onMouseLeave:zufallHover(false),
      onClick: () => onAnswer(currentQ, zufallAus(quizOptionen(currentQ, possible))) }, "\u2684 Entscheide f\xFCr mich")));
}

// ── ATTRIBUTE: Art des Würfelns ─────────────────────────────────────────────
// Einmal würfeln (Standard), Zweimal würfeln (gesperrt: Würfelerlaubnis-Code der Spielleitung, wie die
// NSC-Karte mit Schloss) oder „Mache ich später“ (z. B. mit echten Würfeln oder in Foundry).
function WuerfelCodeDialog({ onOk, onCancel }) {
  const [code, setCode] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  useEffect(() => {
    const k = e => { if (e.key === 'Escape') onCancel(); };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [onCancel]);
  const submit = async (e) => {
    e.preventDefault();
    const c = code.replace(/-/g, '').trim().toUpperCase();
    if (!c || busy) return;
    setBusy(true); setErr('');
    const { data: status, error } = await window._sb.rpc('check_roll_token', { p_code: c });
    setBusy(false);
    if (error) { setErr('Verbindungsfehler.'); return; }
    if (status === 'used') { setErr('Dieser Code wurde bereits verwendet.'); return; }
    if (status !== 'ok') { setErr('Code nicht gefunden.'); return; }
    onOk(c);
  };
  const btn = { fontFamily:'var(--font-m)', fontSize:'11.5px', letterSpacing:'.18em', textTransform:'uppercase', cursor:'pointer', borderRadius:3, padding:'9px 16px' };
  return (
    <div role="dialog" aria-modal="true" aria-label="Zweimal würfeln entsperren" onMouseDown={e => { if (e.target === e.currentTarget) onCancel(); }}
      style={{ position:'fixed', inset:0, zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center', padding:20, background:'rgba(var(--bg-rgb),.78)', backdropFilter:'blur(3px)', animation:'fadeIn .2s ease' }}>
      <form onSubmit={submit} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:14, padding:'26px 28px', maxWidth:460, width:'100%',
        background:'rgba(var(--panel-rgb),.98)', border:'1px solid rgba(var(--accent-rgb),calc(.45*var(--ka)))', borderRadius:4, boxShadow:'0 20px 60px rgba(var(--shadow-rgb),calc(.6*var(--shadow-k)))' }}>
        <div style={{ fontFamily:'var(--font-m)', fontSize:'11px', letterSpacing:'.22em', textTransform:'uppercase', color:'rgba(var(--accent-rgb),calc(.6*var(--ka) + var(--tb)))' }}>
          Zweimal würfeln · Würfelerlaubnis der Spielleitung
        </div>
        <input autoFocus value={code} placeholder="XXXX-XXXX" aria-label="Code"
          onChange={e => setCode(e.target.value.toUpperCase().replace(/[^A-Z0-9\-]/g, '').slice(0, 9))}
          style={{ width:'100%', fontFamily:'var(--font-m)', fontSize:'14px', letterSpacing:'.14em', color:'var(--white)', background:'rgba(var(--bg-rgb),.6)',
            border:'1px solid rgba(var(--purple-rgb),calc(.4*var(--kp)))', borderRadius:3, padding:'9px 12px', outline:'none', textAlign:'center' }} />
        <div style={{ display:'flex', gap:8 }}>
          <button type="submit" disabled={busy || !code} style={{ ...btn, color:'var(--white)', background:'rgba(var(--purple-rgb),calc(.22*var(--kp)))', border:'1px solid rgba(var(--accent-rgb),calc(.6*var(--ka)))', opacity: busy || !code ? .6 : 1 }}>
            {busy ? 'Prüfe …' : 'Entsperren'}
          </button>
          <button type="button" onClick={onCancel} style={{ ...btn, color:'rgba(var(--accent-rgb),calc(.55*var(--ka) + var(--tb)))', background:'transparent', border:'1px solid rgba(var(--purple-rgb),calc(.25*var(--kp)))' }}>Abbrechen</button>
        </div>
        {err && <div role="alert" style={{ fontFamily:'var(--font-b)', fontSize:'13px', color:'color-mix(in srgb, rgba(240,130,130,.95), rgb(var(--ink-rgb)) var(--cm))' }}>{err}</div>}
      </form>
    </div>
  );
}

function AttributWahl({ zweimalFrei, spaeter, onEinmal, onZweimal, onUnlock, onSpaeter }) {
  const [frage, setFrage] = useState(false);
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
      <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
        <TypeCard label="Einmal würfeln" sub="4W6, der niedrigste fällt weg" onClick={onEinmal} />
        <TypeCard label="Zweimal würfeln" sub="den besseren Satz wählen" locked={!zweimalFrei}
          onClick={() => zweimalFrei ? onZweimal() : setFrage(true)} />
        <TypeCard label="Mache ich später" sub="z. B. in Foundry" aktiv={spaeter} onClick={onSpaeter} />
      </div>
      {spaeter && (
        <p style={{ fontFamily:'var(--font-b)', fontSize:'13px', lineHeight:1.7, color:'var(--silver)', margin:0 }}>
          Der Charakter wird ohne Attributwerte angelegt. Trag sie nach dem Würfeln im Steckbrief ein.
        </p>
      )}
      {frage && <WuerfelCodeDialog onCancel={() => setFrage(false)} onOk={c => { setFrage(false); onUnlock(c); }} />}
    </div>
  );
}

// Steckbrief-Vorschau mit Herkunfts-Markierungen; neu aufgebaut, sobald sich der Entwurf ändert
function NcVorschau({ draft, herkunft }) {
  const SV = window.SteckbriefView, build = window.buildChar;
  if (!SV || !build) return null;
  const key = JSON.stringify(draft) + JSON.stringify(herkunft);
  return /*#__PURE__*/React.createElement("div", { style:{ margin:'8px -24px 0', border:'1px solid rgba(var(--purple-rgb),calc(.2*var(--kp)))', borderRadius:4, overflow:'hidden' } },
    /*#__PURE__*/React.createElement(SV, { key, char: build(draft), hideNav: true, vorschau: true, herkunft }));
}

// Fertiger Bogen ohne Markierungen; der Name bleibt im Bogen änderbar
function NcFertig({ draft, name, setName }) {
  const SV = window.SteckbriefView, build = window.buildChar;
  if (!SV || !build) return null;
  return /*#__PURE__*/React.createElement("div", { style:{ margin:'0 -24px', border:'1px solid rgba(var(--purple-rgb),calc(.2*var(--kp)))', borderRadius:4, overflow:'hidden' } },
    /*#__PURE__*/React.createElement(SV, { key: JSON.stringify(draft), char: build(draft), hideNav: true, vorschau: true,
      nameEdit: { value: name, onChange: setName } }));
}

// ── OUTPUT PHASE ───────────────────────────────────────────────────────────
function OutputPhase({
  tags,
  possible,
  quizAnswers,
  charType,
  wzKombis = null,
  zufall = false
}) {
  const [charName, setCharName] = useState('');
  const [showNameModal, setShowNameModal] = useState(false);
  const [fertig, setFertig] = useState(false); // nach der Namenswahl: fertiger Bogen ohne Markierungen
  const [saving, setSaving] = useState(false);

  // ── Manuelle Auswahl bei mehreren Treffern ────────────────────
  const [finals, setFinals] = useState({});
  const setFinal = (kat, val) => setFinals(p => ({...p, [kat]: val}));
  // „Entscheide für mich“: bei mehreren Treffern je einen auswürfeln (Werkzeug-Kombination zuerst, damit sie gültig bleibt)
  useEffect(() => {
    if (!zufall) return;
    const offen = k => !(tags[k] && tags[k] !== 'unbekannt') && (possible[k] || []).length > 1;
    const neu = {};
    if (wzKombis && wzKombis.length) {
      const c = zufallAus(wzKombis);
      ['rasse','klasse','hintergrund'].forEach(k => { if (offen(k)) neu[k] = c[k]; });
    }
    ['rasse','klasse','hintergrund','division','lebensstil','samen','gottheit','sternzeichen'].forEach(k => {
      if (!(k in neu) && offen(k)) neu[k] = zufallAus(possible[k]);
    });
    setFinals(p => ({ ...neu, ...p }));
  }, []);

  // ── Detail-Felder (Erscheinung + Persönlichkeit) ──────────────
  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState({
    alter: '', geburtsort: '', groesse: '', gewicht: '',
    augen: '', haare: '', haut: '', geburtstag_doy: null, geburtstag_jahr: null,
    geschichte: '', persoenlichkeit: '', ideal: '', bindung: '', lieblingsfarbe: '',
  });
  const setDet = (k, v) => setDetails(p => ({...p, [k]: v}));

  // Sternzeichen (Auswahl, Quiz oder manuelle Wahl) legt den Geburtsmonat fest:
  // liegt das Geburtsdatum nicht im passenden Monat, wird ein Tag darin ausgelost.
  const currentSign = (tags.sternzeichen && tags.sternzeichen !== 'unbekannt') ? tags.sternzeichen
    : (finals.sternzeichen || ((possible.sternzeichen || []).length === 1 ? possible.sternzeichen[0] : null));
  useEffect(() => {
    if (!currentSign) return;
    setDetails(p => {
      const sp = p.geburtstag_doy ? window.CharAge.doyParts(p.geburtstag_doy) : null;
      if (sp && sp.sign === currentSign) return p;
      return { ...p, geburtstag_doy: window.CharAge.randomDoyForSign(currentSign) };
    });
  }, [currentSign]);

  // Token
  const [tokenInput, setTokenInput] = useState('');
  const [tokenState, setTokenState] = useState('idle'); // 'idle'|'checking'|'valid'|'error'
  const [tokenError, setTokenError] = useState('');
  const [validatedToken, setValidatedToken] = useState(null);

  // Stats mode — only unlocked after token validation
  const [statsMode, setStatsMode] = useState(null); // null | 'roll' | 'spaeter' (früher auch 'manual')
  const [rollArt, setRollArt] = useState('einmal'); // 'einmal' | 'zweimal' (Würfelerlaubnis eingelöst)
  const [rollA, setRollA] = useState(null); // first roll set
  const [rollB, setRollB] = useState(null); // second roll set
  const [chosen, setChosen] = useState(null); // 'a' | 'b'
  const ATTRS = ['STÄ', 'GES', 'KON', 'INT', 'WEI', 'CHA'];
  const KEYS = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
  const [manual, setManual] = useState({
    str: '',
    dex: '',
    con: '',
    int: '',
    wis: '',
    cha: ''
  });
  const rollSet = () => {
    const r = () => {
      const d = Array.from({
        length: 4
      }, () => Math.floor(Math.random() * 6) + 1).sort((a, b) => a - b);
      return {
        rolls: d,
        val: d.slice(1).reduce((s, n) => s + n, 0)
      };
    };
    return Array.from({
      length: 6
    }, r);
  };
  const doFirstRoll = () => {
    setRollA(rollSet());
    setChosen('a');
  };
  const doSecondRoll = async () => {
    const set = rollSet();
    setRollB(set);
    setChosen('b');
    // consume token on second roll
    if (validatedToken && window._sb) {
      try {
        await window._sb.rpc('redeem_roll_token', { p_code: validatedToken });
      } catch (e) {/* ignore */}
      setValidatedToken(null);
    }
  };
  const handleRedeemToken = async () => {
    const code = tokenInput.replace(/-/g, '').trim().toUpperCase();
    if (!code) return;
    setTokenState('checking');
    setTokenError('');
    try {
      const { data: status, error } = await window._sb.rpc('check_roll_token', { p_code: code });
      if (error) {
        setTokenState('error');
        setTokenError('Verbindungsfehler.');
        return;
      }
      if (status === 'used') {
        setTokenState('error');
        setTokenError('Dieser Code wurde bereits verwendet.');
        return;
      }
      if (status !== 'ok') {
        setTokenState('error');
        setTokenError('Code nicht gefunden.');
        return;
      }
      setValidatedToken(code);
      setTokenState('valid');
    } catch (e) {
      setTokenState('error');
      setTokenError('Verbindungsfehler.');
    }
  };
  const getFinalStats = () => {
    if (statsMode === 'roll') {
      const set = chosen === 'b' && rollB ? rollB : rollA;
      if (!set) return null;
      const [str, dex, con, int_, wis, cha] = set.map(d => d.val);
      return {
        str,
        dex,
        con,
        int: int_,
        wis,
        cha
      };
    }
    if (statsMode === 'manual') {
      const vals = KEYS.map(k => parseInt(manual[k], 10));
      if (vals.some(v => isNaN(v) || v < 1 || v > 30)) return null;
      const [str, dex, con, int_, wis, cha] = vals;
      return {
        str,
        dex,
        con,
        int: int_,
        wis,
        cha
      };
    }
    return null;
  };
  const getFinal = kat => {
    const tv = tags[kat];
    if (tv && tv !== 'unbekannt') return {
      val: tv,
      src: 'sel'
    };
    const pos = possible[kat] || [];
    if (pos.length === 1) return {
      val: pos[0],
      src: 'quiz'
    };
    if (pos.length > 1) {
      const shown = pos.slice(0, 3).join(' / ') + (pos.length > 3 ? ` (+${pos.length - 3})` : '');
      return {
        val: shown,
        src: 'multi'
      };
    }
    return {
      val: '—',
      src: 'none'
    };
  };
  const getZauberwirker = () => {
    const tv = tags.zauberwirker;
    if (tv === 'Ja — Dein Charakter kann Zauber wirken.') return {
      val: 'Ja',
      src: 'sel'
    };
    if (tv === 'Nein — Kein Zauberwirker') return {
      val: 'Nein',
      src: 'sel'
    };
    const kl = getFinal('klasse');
    if (kl.src !== 'none' && kl.src !== 'multi' && window.ZAUBERWIRKER_KLASSEN?.has(kl.val)) return {
      val: 'Ja',
      src: 'quiz'
    };
    if (kl.src === 'sel' || kl.src === 'quiz') return {
      val: 'Nein',
      src: 'quiz'
    };
    return {
      val: '—',
      src: 'none'
    };
  };
  // sichere Werkzeuge (Planer) plus die zum Hintergrund gewählten
  const wzListe = [...(tags.werkzeugeSicher || []), ...(tags.werkzeuge instanceof Set ? [...tags.werkzeuge] : [])].filter((w, i, a) => a.indexOf(w) === i);
  const werkzeuge = wzListe.length ? wzListe.join(', ') : tags.werkzeuge === 'unbekannt' ? '— (unbekannt)' : '—';
  // angeborenes Talent aus der Kombination, die zu Rasse/Klasse/Hintergrund passt
  const wzWert = kat => { const r = getFinal(kat); return r.src === 'multi' ? (finals[kat] || (possible[kat] || [])[0]) : r.val; };
  const wzKombi = wzKombis ? (wzKombis.find(c => c.rasse === wzWert('rasse') && c.klasse === wzWert('klasse') && c.hintergrund === wzWert('hintergrund')) || null) : null;
  const wzTalent = wzKombi ? wzKombi.talent : null;

  // Subklasse — alle Klassen, Empfehlung wenn Stufe > 1
  const finalKlasse = getFinal('klasse');
  const klassenMeta = (window.KLASSEN_META || {})[finalKlasse.src === 'multi' ? finals.klasse : finalKlasse.val];
  const subklassenListe = klassenMeta
    ? ((window.KLASSEN_DETAIL || {})[klassenMeta.id]?.unterklassen || []).map(s => s.name || s)
    : [];
  // „Entscheide für mich“: auch die Unterklasse auswürfeln
  useEffect(() => {
    if (zufall && !tags.subklasse && !finals.subklasse && subklassenListe.length > 1) setFinal('subklasse', zufallAus(subklassenListe));
  }, [zufall, subklassenListe.join('|')]);
  const subklasseRow = subklassenListe.length > 0 ? (() => {
    const chosen = tags.subklasse || finals['subklasse'] || null;
    const isEmp = klassenMeta.subStufe > 1;
    return {
      lbl: isEmp ? `Spezialisierung · Empfehlung` : 'Spezialisierung',
      lbl2: isEmp ? `Wahl ab Stufe ${klassenMeta.subStufe}` : null,
      kat: 'subklasse',
      val: chosen || (subklassenListe.length > 1
        ? subklassenListe.slice(0,3).join(' / ') + (subklassenListe.length > 3 ? ` (+${subklassenListe.length-3})` : '')
        : subklassenListe[0]),
      src: chosen ? 'sel' : (isEmp ? 'emp' : 'multi'),
      _opts: subklassenListe,
    };
  })() : null;

  const rows = [{
    lbl: 'Rasse', kat: 'rasse', ...getFinal('rasse')
  }, {
    lbl: 'Klasse',      kat: 'klasse',      ...getFinal('klasse')
  }, ...(subklasseRow ? [subklasseRow] : []), {
    lbl: 'Hintergrund', kat: 'hintergrund', ...getFinal('hintergrund')
  }, {
    lbl: 'Division',    kat: 'division',    ...getFinal('division')
  }, {
    lbl: 'Lebensstil',  kat: 'lebensstil',  ...getFinal('lebensstil')
  }, {
    lbl: 'Same der Furcht', kat: 'samen',   ...getFinal('samen')
  }, {
    lbl: 'Gottheit',    kat: 'gottheit',    ...getFinal('gottheit')
  }, {
    lbl: 'Sternzeichen', kat: 'sternzeichen', ...getFinal('sternzeichen')
  }, {
    lbl: 'Zauberwirker',
    ...getZauberwirker()
  }, {
    lbl: 'Werkzeugübungen',
    val: werkzeuge,
    src: wzListe.length ? 'sel' : 'none'
  }, ...(wzTalent ? [{
    lbl: 'Angeborenes Talent',
    val: wzTalent,
    src: 'quiz'
  }] : [])];
  const offeneWahl = rows.filter(r => r.src === 'multi' && r.kat).map(r => r.lbl);
  const byKat = {};
  quizAnswers.forEach(a => {
    if (!byKat[a.kat]) byKat[a.kat] = [];
    byKat[a.kat].push(a);
  });
  function makeDraft(name) {
    const g = k => {
      const r = getFinal(k);
      if (r.src === 'none') return null;
      if (r.src === 'multi') return finals[k] || (possible[k] || [])[0] || null;
      return r.val;
    };
    const divisionName = g('division');
    // Sternzeichen bestimmt den Geburtsmonat; ohne gewählten Tag wird einer im Monat ausgelost
    const effSign = g('sternzeichen');
    const birthDoy = details.geburtstag_doy || (effSign ? window.CharAge.randomDoyForSign(effSign) : null);
    const divObj = (window.DIVISIONS_DATA || []).find(d => d.name === divisionName) || null;

    const gottheitName = g('gottheit');
    const allGods = [
      ...(window.GODS_DATA?.gods        || []),
      ...(window.GODS_DATA?.demons      || []),
      ...(window.GODS_DATA?.naturgeister|| []),
    ];
    const godObj = allGods.find(g => g.name === gottheitName) || null;

    const draft = {
      name,
      race: g('rasse'),
      class: g('klasse'),
      background: g('hintergrund'),
      division:   divisionName,
      divisionId: divObj?.id   || null,
      deity:      gottheitName,
      deityId:    godObj?.id   || null,
      deityDomain:godObj?.domain || '—',
      samen: g('samen'),
      stats: getFinalStats(),
      subclass:       tags.subklasse || finals['subklasse'] || null,
      lebensstil:     g('lebensstil') || null,
      uebungen: {
        ruestungen: [], waffen: [], fahrzeuge: [], sprachen: [],
        werkzeuge: wzListe,
      },
      // ── Persönlichkeit & Aussehen ───────────────────────────
      alignment:      tags.gesinnung    || null,
      angeborenesTalent: wzTalent,
      zodiac:         birthDoy ? (window.CharAge.doyParts(birthDoy) || {}).sign || effSign : effSign,
      gender:         tags.geschlecht   || null,
      geburtstag_doy: birthDoy,
      age:            (() => { const a = window.CharAge.fromBirth(details.geburtstag_jahr, details.geburtstag_doy); return a != null ? String(a) : (details.alter || null); })(),
      age_ref_abs:    window.CharAge.today(),
      geburtstag_jahr: details.geburtstag_jahr ?? null,
      birthplace:     details.geburtsort || null,
      height:         details.groesse    || null,
      weight:         details.gewicht    || null,
      eyes:           details.augen      || null,
      hair:           details.haare      || null,
      skin:           details.haut       || null,
      story:          details.geschichte    || null,
      ersteTage:      details.geschichte    || null,
      personality:    details.persoenlichkeit || null,
      ideals:         details.ideal      || null,
      bonds:          details.bindung    || null,
      lieblingsfarbe: details.lieblingsfarbe || null,
      tier:  null,
      motto: null,
    };
    return draft;
  }
  const herkunftVon = k => {
    const r = getFinal(k);
    if (r.src === 'sel') return 'sel';
    if (r.src === 'quiz') return 'quiz';
    if (r.src === 'multi' || r.src === 'emp') return zufall ? 'zufall' : (finals[k] ? 'sel' : null);
    return null;
  };
  const herkunft = {
    race: herkunftVon('rasse'), class: herkunftVon('klasse'), background: herkunftVon('hintergrund'),
    division: herkunftVon('division'), deity: herkunftVon('gottheit'), lebensstil: herkunftVon('lebensstil'),
    zodiac: herkunftVon('sternzeichen'),
    subclass: tags.subklasse ? 'sel' : finals.subklasse ? (zufall ? 'zufall' : 'sel') : null,
    alignment: tags.gesinnung ? 'sel' : null, gender: tags.geschlecht ? 'sel' : null,
    werkzeuge: wzListe.length ? 'sel' : null,
    stats: statsMode === 'roll' ? 'gewuerfelt' : null,
  };
  async function doSave(name) {
    const draft = makeDraft(name);
    setSaving(true);
    try {
      const { error: insErr } = await window._sb.from('characters').insert({
        owner_id: window.SITE_USER?.id || null,
        name: draft.name || 'Unbenannt',
        race: draft.race || null,
        class: draft.class || null,
        division: draft.division || null,
        char_data: draft,
        type: charType || 'spieler'
      });
      if (insErr) throw insErr;
    } catch (e) {
      console.error(e);
      setSaving(false);
      alert('Der Charakter konnte nicht gespeichert werden: ' + (e && e.message ? e.message : 'unbekannter Fehler') + '\nDeine Eingaben bleiben erhalten, bitte noch einmal versuchen.');
      return;
    }
    window.location.href = '/spiel/charaktere.html?tab=meine';
  }
  if (fertig) return /*#__PURE__*/React.createElement("div", {
    style: { maxWidth: 1240, margin: '0 auto', padding: '44px 32px 80px', animation: 'slideUp .4s ease' }
  }, /*#__PURE__*/React.createElement("div", {
    style: { fontFamily:'var(--font-m)', fontSize:'11.5px', letterSpacing:'.28em', textTransform:'uppercase', marginBottom:9,
      color:'color-mix(in srgb, rgba(94,232,208,.55), rgb(var(--ink-rgb)) var(--cm))' }
  }, "Charakterbogen"), /*#__PURE__*/React.createElement("p", {
    style: { fontFamily:'var(--font-b)', fontSize:'13px', lineHeight:1.7, color:'var(--silver)', margin:'0 0 18px', maxWidth:720 }
  }, "So sieht dein Charakterbogen aus. Den Namen kannst du oben im Bogen noch \xE4ndern, zum Beispiel einen kopierten Namen aus der Tabelle einf\xFCgen."),
  /*#__PURE__*/React.createElement(NcFertig, { draft: makeDraft(''), name: charName, setName: setCharName }),
  /*#__PURE__*/React.createElement("div", {
    style: { margin:'26px 0 0', padding:'20px 24px', border:'1px solid rgba(var(--purple-rgb),calc(.35*var(--kp)))', borderRadius:4,
      background:'rgba(var(--purple-rgb),calc(.04*var(--kp)))', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:16 }
  }, /*#__PURE__*/React.createElement("button", {
      type: "button", onClick: () => { setFertig(false); window.scrollTo(0, 0); },
      style: { padding:'10px 18px', background:'transparent', border:'1px solid rgba(var(--purple-rgb),calc(.25*var(--kp)))', borderRadius:3, cursor:'pointer',
        color:'rgba(var(--purple-rgb),calc(.55*var(--kp) + var(--tb)))', fontFamily:'var(--font-m)', fontSize:'11px', letterSpacing:'.18em', textTransform:'uppercase' }
    }, "\u2190 Zur\xFCck zur Vorschau"),
    /*#__PURE__*/React.createElement("button", {
      type: "button", disabled: saving || !charName.trim(), onClick: () => doSave(charName.trim()),
      style: { padding:'12px 28px', background:'rgba(var(--purple-rgb),calc(.22*var(--kp)))', border:'1px solid rgba(var(--accent-rgb),calc(.65*var(--ka)))', borderRadius:3,
        color:'var(--white)', fontFamily:'var(--font-d)', fontSize:'12.5px', letterSpacing:'.18em', textTransform:'uppercase', whiteSpace:'nowrap',
        cursor: saving || !charName.trim() ? 'not-allowed' : 'pointer', opacity: saving || !charName.trim() ? .5 : 1 }
    }, saving ? 'Speichern\u2026' : 'Charakter speichern \u2192')));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: '0 auto',
      padding: '44px 32px 80px',
      animation: 'slideUp .4s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-m)',
      fontSize: '11.5px',
      letterSpacing: '.28em',
      color: 'color-mix(in srgb, rgba(94,232,208,.55), rgb(var(--ink-rgb)) var(--cm))',
      textTransform: 'uppercase',
      marginBottom: 9
    }
  }, "Charakterbogen \xB7 Vorschau"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'linear-gradient(90deg,rgba(var(--purple-rgb),calc(.45*var(--kp))) 0%,transparent 100%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 44
    }
  }, rows.filter(r => (r.src === 'multi' || r.src === 'emp') && r.kat).map(({
    lbl,
    lbl2,
    val,
    src,
    kat,
    _opts
  }) => /*#__PURE__*/React.createElement("div", {
    key: lbl,
    className: `sh-row${(src === 'multi' || src === 'emp') && kat ? ' sh-row--pick' : ''}`
  },
    /*#__PURE__*/React.createElement("div", { style: { display: 'flex', alignItems: 'baseline', gap: 8 } },
      /*#__PURE__*/React.createElement("div", { className: "sh-lbl" }, lbl),
      lbl2 && /*#__PURE__*/React.createElement("span", {
        style: { fontFamily: 'var(--font-m)', fontSize: '11px', letterSpacing: '.16em',
          color: 'color-mix(in srgb, rgba(251,191,36,.55), rgb(var(--ink-rgb)) var(--cm))', textTransform: 'uppercase' }
      }, lbl2)
    ),
  (src === 'multi' || src === 'emp') && kat
    ? /*#__PURE__*/React.createElement("div", {
        style: { display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 4 }
      }, (_opts || possible[kat] || []).map(opt => {
        const sel = (finals[kat] || (src === 'emp' ? null : (possible[kat] || [])[0])) === opt;
        const hint = (window.OPTION_HINTS || {})[opt] || null;
        const isEmp = src === 'emp';
        return /*#__PURE__*/React.createElement("button", {
          key: opt,
          onClick: () => setFinal(kat, opt),
          style: {
            padding: '7px 11px', borderRadius: 3, cursor: 'pointer', textAlign: 'left',
            background: sel ? (isEmp ? 'rgba(251,191,36,.12)' : 'rgba(var(--purple-rgb),calc(.22*var(--kp)))') : 'rgba(var(--bg-rgb),.5)',
            border: `1px solid ${sel ? (isEmp ? 'rgba(251,191,36,.5)' : 'rgba(var(--purple-rgb),calc(.65*var(--kp)))') : (isEmp ? 'rgba(251,191,36,.15)' : 'rgba(var(--purple-rgb),calc(.2*var(--kp)))')}`,
            opacity: isEmp && !sel ? 0.75 : 1,
            transition: 'all .15s',
          }
        },
          /*#__PURE__*/React.createElement("div", {
            style: { fontFamily: 'var(--font-m)', fontSize: '12px', letterSpacing: '.08em',
              color: sel ? (isEmp ? 'color-mix(in srgb, rgba(253,230,138,.95), rgb(var(--ink-rgb)) var(--cm))' : 'var(--white)') : 'rgba(var(--text-rgb),calc(.75*var(--kt)))' }
          }, opt),
          hint && /*#__PURE__*/React.createElement("div", {
            style: { fontFamily: 'var(--font-b)', fontSize: '11.5px', fontWeight: 300,
              color: sel ? (isEmp ? 'color-mix(in srgb, rgba(253,230,138,.5), rgb(var(--ink-rgb)) var(--cm))' : 'rgba(var(--text-rgb),calc(.55*var(--kt)))') : 'rgba(var(--accent-rgb),calc(.38*var(--ka)))',
              marginTop: 2, lineHeight: 1.4 }
          }, hint)
        );
      }))
    : /*#__PURE__*/React.createElement("div", {
        className: `sh-val ${src === 'quiz' ? 'quiz-det' : ''}`
      }, val, src === 'quiz' && /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-m)', fontSize: '11px',
          color: 'color-mix(in srgb, rgba(94,232,208,.4), rgb(var(--ink-rgb)) var(--cm))', marginLeft: 10, letterSpacing: '.1em'
        }
      }, "\u21AF per Quiz"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-d)',
      fontSize: '12px',
      letterSpacing: '.22em',
      color: 'rgba(var(--accent-rgb),calc(.6*var(--ka) + var(--tb)))',
      textTransform: 'uppercase',
      marginBottom: 16
    }
  }, "Attribute"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      border: '1px solid rgba(var(--accent-rgb),calc(.1*var(--ka)))',
      borderRadius: 4,
      background: 'rgba(var(--purple-rgb),calc(.02*var(--kp)))'
    }
  }, (statsMode === null || statsMode === 'spaeter') && /*#__PURE__*/React.createElement(AttributWahl, {
    zweimalFrei: tokenState === 'valid',
    spaeter: statsMode === 'spaeter',
    onEinmal: () => { setRollArt('einmal'); setStatsMode('roll'); doFirstRoll(); },
    onZweimal: () => { setRollArt('zweimal'); setStatsMode('roll'); doFirstRoll(); },
    onUnlock: code => { setValidatedToken(code); setTokenState('valid'); setRollArt('zweimal'); setStatsMode('roll'); doFirstRoll(); },
    onSpaeter: () => setStatsMode(statsMode === 'spaeter' ? null : 'spaeter')
  }), statsMode === 'roll' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      alignItems: 'flex-start'
    }
  }, rollA && /*#__PURE__*/React.createElement("div", {
    onClick: () => setChosen('a'),
    style: {
      flex: 1,
      minWidth: 160,
      border: `1px solid ${chosen === 'a' ? 'rgba(94,232,208,.5)' : 'rgba(var(--accent-rgb),calc(.15*var(--ka)))'}`,
      borderRadius: 4,
      padding: 12,
      background: chosen === 'a' ? 'rgba(94,232,208,.04)' : 'rgba(var(--purple-rgb),calc(.02*var(--kp)))',
      cursor: 'pointer',
      transition: 'all .2s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-m)',
      fontSize: '11px',
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: chosen === 'a' ? 'color-mix(in srgb, rgba(94,232,208,.7), rgb(var(--ink-rgb)) var(--cm))' : 'rgba(var(--accent-rgb),calc(.4*var(--ka)))',
      marginBottom: 8
    }
  }, chosen === 'a' ? '✓ ' : '', "Wurf 1"), ATTRS.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '3px 0',
      borderBottom: '1px solid rgba(var(--accent-rgb),calc(.04*var(--ka)))'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-m)',
      fontSize: '11.5px',
      color: 'rgba(var(--accent-rgb),calc(.45*var(--ka) + var(--tb)))',
      letterSpacing: '.1em'
    }
  }, a), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-d)',
      fontSize: '14px',
      color: chosen === 'a' ? 'color-mix(in srgb, rgba(94,232,208,.9), rgb(var(--ink-rgb)) var(--cm))' : 'rgba(var(--text-rgb),calc(.7*var(--kt)))'
    }
  }, rollA[i].val, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-m)',
      fontSize: '11px',
      color: 'rgba(var(--accent-rgb),calc(.25*var(--ka) + var(--tb)))',
      marginLeft: 5
    }
  }, "(", rollA[i].rolls.slice(1).join('+'), ")")))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      marginTop: 6,
      fontFamily: 'var(--font-m)',
      fontSize: '11px',
      color: 'rgba(var(--accent-rgb),calc(.35*var(--ka) + var(--tb)))'
    }
  }, "\u03A3 ", rollA.reduce((s, r) => s + r.val, 0))), rollB && /*#__PURE__*/React.createElement("div", {
    onClick: () => setChosen('b'),
    style: {
      flex: 1,
      minWidth: 160,
      border: `1px solid ${chosen === 'b' ? 'rgba(94,232,208,.5)' : 'rgba(var(--accent-rgb),calc(.15*var(--ka)))'}`,
      borderRadius: 4,
      padding: 12,
      background: chosen === 'b' ? 'rgba(94,232,208,.04)' : 'rgba(var(--purple-rgb),calc(.02*var(--kp)))',
      cursor: 'pointer',
      transition: 'all .2s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-m)',
      fontSize: '11px',
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: chosen === 'b' ? 'color-mix(in srgb, rgba(94,232,208,.7), rgb(var(--ink-rgb)) var(--cm))' : 'rgba(var(--accent-rgb),calc(.4*var(--ka)))',
      marginBottom: 8
    }
  }, chosen === 'b' ? '✓ ' : '', "Wurf 2"), ATTRS.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '3px 0',
      borderBottom: '1px solid rgba(var(--accent-rgb),calc(.04*var(--ka)))'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-m)',
      fontSize: '11.5px',
      color: 'rgba(var(--accent-rgb),calc(.45*var(--ka) + var(--tb)))',
      letterSpacing: '.1em'
    }
  }, a), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-d)',
      fontSize: '14px',
      color: chosen === 'b' ? 'color-mix(in srgb, rgba(94,232,208,.9), rgb(var(--ink-rgb)) var(--cm))' : 'rgba(var(--text-rgb),calc(.7*var(--kt)))'
    }
  }, rollB[i].val, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-m)',
      fontSize: '11px',
      color: 'rgba(var(--accent-rgb),calc(.25*var(--ka) + var(--tb)))',
      marginLeft: 5
    }
  }, "(", rollB[i].rolls.slice(1).join('+'), ")")))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      marginTop: 6,
      fontFamily: 'var(--font-m)',
      fontSize: '11px',
      color: 'rgba(var(--accent-rgb),calc(.35*var(--ka) + var(--tb)))'
    }
  }, "\u03A3 ", rollB.reduce((s, r) => s + r.val, 0)))), !rollB && rollArt === 'zweimal' && /*#__PURE__*/React.createElement("button", {
    onClick: doSecondRoll,
    style: {
      alignSelf: 'flex-start',
      fontFamily: 'var(--font-m)',
      fontSize: '11px',
      letterSpacing: '.13em',
      color: 'color-mix(in srgb, rgba(94,232,208,.75), rgb(var(--ink-rgb)) var(--cm))',
      background: 'transparent',
      border: '1px solid rgba(94,232,208,.3)',
      borderRadius: '3px',
      padding: '7px 14px',
      cursor: 'pointer',
      textTransform: 'uppercase',
      transition: 'all .2s'
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = 'var(--white)';
      e.currentTarget.style.borderColor = 'rgba(94,232,208,.6)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = 'color-mix(in srgb, rgba(94,232,208,.75), rgb(var(--ink-rgb)) var(--cm))';
      e.currentTarget.style.borderColor = 'rgba(94,232,208,.3)';
    }
  }, "\u21BA Zweiter Wurf"), rollB && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-m)',
      fontSize: '11px',
      color: 'rgba(var(--accent-rgb),calc(.4*var(--ka) + var(--tb)))',
      letterSpacing: '.1em',
      margin: 0
    }
  }, "Klicke auf einen Wurf um ihn auszuw\xE4hlen.")), statsMode === 'manual' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 8,
      maxWidth: 360
    }
  }, ATTRS.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-m)',
      fontSize: '11px',
      color: 'rgba(var(--accent-rgb),calc(.5*var(--ka) + var(--tb)))',
      letterSpacing: '.14em',
      textTransform: 'uppercase'
    }
  }, a), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "1",
    max: "30",
    value: manual[KEYS[i]],
    onChange: e => setManual(p => ({
      ...p,
      [KEYS[i]]: e.target.value
    })),
    style: {
      fontFamily: 'var(--font-d)',
      fontSize: '16px',
      textAlign: 'center',
      background: 'rgba(var(--bg-rgb),.5)',
      border: '1px solid rgba(var(--accent-rgb),calc(.2*var(--ka)))',
      borderRadius: 3,
      color: 'var(--white)',
      outline: 'none',
      padding: '6px 4px',
      width: '100%'
    },
    onFocus: e => e.currentTarget.style.borderColor = 'rgba(var(--purple-rgb),calc(.55*var(--kp)))',
    onBlur: e => e.currentTarget.style.borderColor = 'rgba(var(--accent-rgb),calc(.2*var(--ka)))'
  })))), getFinalStats() === null && KEYS.some(k => manual[k] !== '') && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-m)',
      fontSize: '11px',
      color: 'color-mix(in srgb, rgba(255,140,100,.7), rgb(var(--ink-rgb)) var(--cm))',
      letterSpacing: '.1em'
    }
  }, "Alle Werte m\xFCssen zwischen 1 und 30 liegen.")))),

  // ── Charakterdetails (optional) ─────────────────────────────
  /*#__PURE__*/React.createElement("div", {style:{marginBottom:28,border:'1px solid rgba(var(--accent-rgb),calc(.12*var(--ka)))',borderRadius:4,overflow:'hidden'}},
    /*#__PURE__*/React.createElement("button", {type:"button", onClick:()=>setShowDetails(v=>!v),
      style:{width:'100%',display:'flex',alignItems:'center',gap:10,padding:'13px 18px',
        background:showDetails?'rgba(var(--purple-rgb),calc(.06*var(--kp)))':'transparent',border:'none',cursor:'pointer',textAlign:'left'}},
      /*#__PURE__*/React.createElement("span", {style:{fontFamily:'var(--font-m)',fontSize:'11.5px',letterSpacing:'.26em',
        textTransform:'uppercase',color:showDetails?'rgba(var(--text-rgb),calc(.8*var(--kt)))':'rgba(var(--accent-rgb),calc(.4*var(--ka)))'}},
        "Erscheinung & Pers\xF6nlichkeit"),
      /*#__PURE__*/React.createElement("span", {style:{fontFamily:'var(--font-m)',fontSize:'11px',color:'rgba(var(--purple-rgb),calc(.35*var(--kp) + var(--tb)))',marginLeft:'auto'}},
        showDetails ? '▲ Einklappen' : '▼ Erweitern (optional)'
      )
    ),
    showDetails && /*#__PURE__*/React.createElement("div", {style:{padding:'16px 18px 20px',borderTop:'1px solid rgba(var(--accent-rgb),calc(.1*var(--ka)))'}},
      /*#__PURE__*/React.createElement("div", {style:{fontFamily:'var(--font-m)',fontSize:'11px',letterSpacing:'.26em',
        color:'rgba(var(--purple-rgb),calc(.55*var(--kp) + var(--tb)))',textTransform:'uppercase',marginBottom:12}}, "Erscheinung"),
      /*#__PURE__*/React.createElement("div", {style:{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))',gap:10,marginBottom:18}},
        [['alter','Alter'],['geburtsort','Geburtsort'],['groesse','Gr\xF6\xDFe'],
         ['gewicht','Gewicht'],['augen','Augen'],['haare','Haare'],['haut','Haut / Schuppen']].map(([k,lbl])=>
          /*#__PURE__*/React.createElement("div", {key:k, style:{display:'flex',flexDirection:'column',gap:4}},
            /*#__PURE__*/React.createElement("label", {style:{fontFamily:'var(--font-m)',fontSize:'11px',letterSpacing:'.14em',
              color:'rgba(var(--accent-rgb),calc(.5*var(--ka) + var(--tb)))',textTransform:'uppercase'}}, lbl),
            /*#__PURE__*/React.createElement("input", {value:(k==='alter'&&window.CharAge.fromBirth(details.geburtstag_jahr,details.geburtstag_doy)!=null)?String(window.CharAge.fromBirth(details.geburtstag_jahr,details.geburtstag_doy)):details[k], disabled:(k==='alter'&&window.CharAge.fromBirth(details.geburtstag_jahr,details.geburtstag_doy)!=null), onChange:e=>setDet(k,e.target.value),
              style:{fontFamily:'var(--font-b)',fontSize:'13px',background:'rgba(var(--bg-rgb),.5)',
                border:'1px solid rgba(var(--accent-rgb),calc(.2*var(--ka)))',borderRadius:3,color:'var(--white)',
                outline:'none',padding:'6px 9px'},
              onFocus:e=>e.currentTarget.style.borderColor='rgba(var(--purple-rgb),calc(.55*var(--kp)))',
              onBlur:e=>e.currentTarget.style.borderColor='rgba(var(--accent-rgb),calc(.2*var(--ka)))'})
          )
        )
      ),
      /*#__PURE__*/React.createElement("div", {style:{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))',gap:10,marginBottom:18}},
        /*#__PURE__*/React.createElement("div", {style:{display:'flex',flexDirection:'column',gap:4}},
          /*#__PURE__*/React.createElement("label", {style:{fontFamily:'var(--font-m)',fontSize:'11px',letterSpacing:'.14em',
            color:'rgba(var(--accent-rgb),calc(.5*var(--ka) + var(--tb)))',textTransform:'uppercase'}}, "Geburtsdatum"),
          /*#__PURE__*/React.createElement(window.CharAge.BirthDatePicker, {doy:details.geburtstag_doy, jahr:details.geburtstag_jahr,
            onChange:({doy,jahr})=>{
              setDetails(p=>({...p, geburtstag_doy:doy, geburtstag_jahr:jahr}));
              // ein Datum in einem anderen Monat ändert das Sternzeichen mit
              const sp = doy ? window.CharAge.doyParts(doy) : null;
              if (sp && sp.sign && sp.sign !== currentSign) setFinal('sternzeichen', sp.sign);
            },
            buttonStyle:{fontFamily:'var(--font-m)', fontSize:'12.5px', background:'rgba(var(--bg-rgb),.5)', border:'1px solid rgba(var(--accent-rgb),calc(.2*var(--ka)))', borderRadius:3, color:'var(--white)', outline:'none', padding:'6px 10px'}})
        ),
        /*#__PURE__*/React.createElement("div", {style:{display:'flex',flexDirection:'column',gap:4}},
          /*#__PURE__*/React.createElement("label", {style:{fontFamily:'var(--font-m)',fontSize:'11px',letterSpacing:'.14em',
            color:'rgba(var(--accent-rgb),calc(.5*var(--ka) + var(--tb)))',textTransform:'uppercase'}}, "Lieblingsfarbe"),
          /*#__PURE__*/React.createElement("input", {value:details.lieblingsfarbe, onChange:e=>setDet('lieblingsfarbe',e.target.value),
            style:{fontFamily:'var(--font-b)',fontSize:'13px',background:'rgba(var(--bg-rgb),.5)',
              border:'1px solid rgba(var(--accent-rgb),calc(.2*var(--ka)))',borderRadius:3,color:'var(--white)',
              outline:'none',padding:'6px 9px'},
            onFocus:e=>e.currentTarget.style.borderColor='rgba(var(--purple-rgb),calc(.55*var(--kp)))',
            onBlur:e=>e.currentTarget.style.borderColor='rgba(var(--accent-rgb),calc(.2*var(--ka)))'})
        )
      ),
      /*#__PURE__*/React.createElement("div", {style:{fontFamily:'var(--font-m)',fontSize:'11px',letterSpacing:'.26em',
        color:'rgba(var(--purple-rgb),calc(.55*var(--kp) + var(--tb)))',textTransform:'uppercase',marginBottom:12}}, "Pers\xF6nlichkeit"),
      /*#__PURE__*/React.createElement("div", {style:{display:'flex',flexDirection:'column',gap:10}},
        [['geschichte','Geschichte / Erste Tage'],['persoenlichkeit','Pers\xF6nlichkeitsmerkmal'],
         ['ideal','Ideal'],['bindung','Bindung']].map(([k,lbl])=>
          /*#__PURE__*/React.createElement("div", {key:k, style:{display:'flex',flexDirection:'column',gap:4}},
            /*#__PURE__*/React.createElement("label", {style:{fontFamily:'var(--font-m)',fontSize:'11px',letterSpacing:'.14em',
              color:'rgba(var(--accent-rgb),calc(.5*var(--ka) + var(--tb)))',textTransform:'uppercase'}}, lbl),
            /*#__PURE__*/React.createElement("textarea", {value:details[k], onChange:e=>setDet(k,e.target.value),
              rows:k==='geschichte'?4:2,
              style:{fontFamily:'var(--font-b)',fontSize:'13px',background:'rgba(var(--bg-rgb),.5)',
                border:'1px solid rgba(var(--accent-rgb),calc(.2*var(--ka)))',borderRadius:3,color:'var(--white)',
                outline:'none',padding:'7px 10px',resize:'vertical',lineHeight:1.65},
              onFocus:e=>e.currentTarget.style.borderColor='rgba(var(--purple-rgb),calc(.55*var(--kp)))',
              onBlur:e=>e.currentTarget.style.borderColor='rgba(var(--accent-rgb),calc(.2*var(--ka)))'})
          )
        )
      )
    )
  ),

  /*#__PURE__*/React.createElement(NcVorschau, { draft: makeDraft('Name folgt'), herkunft }),
  /*#__PURE__*/React.createElement("div", {
    style: { margin:'26px 0 44px', padding:'20px 24px', border:'1px solid rgba(var(--purple-rgb),calc(.35*var(--kp)))', borderRadius:4,
      background:'rgba(var(--purple-rgb),calc(.04*var(--kp)))', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:16 }
  }, /*#__PURE__*/React.createElement("div", { style:{ fontFamily:'var(--font-b)', fontSize:'13px', lineHeight:1.6, color:'var(--silver)', maxWidth:520 } },
    offeneWahl.length
      ? "Entscheide oben zuerst: " + offeneWahl.join(', ') + ". Danach kannst du den Bogen absegnen."
      : "Passt alles? Beim Absegnen bekommt dein Charakter einen Namen aus der Namenstabelle seiner Rasse, danach siehst du den fertigen Bogen ohne die Markierungen."),
    /*#__PURE__*/React.createElement("button", {
      type: "button", disabled: offeneWahl.length > 0, onClick: () => setShowNameModal(true),
      style: { padding:'12px 28px', background:'rgba(var(--purple-rgb),calc(.22*var(--kp)))', border:'1px solid rgba(var(--accent-rgb),calc(.65*var(--ka)))', borderRadius:3,
        color:'var(--white)', fontFamily:'var(--font-d)', fontSize:'12.5px', letterSpacing:'.18em', textTransform:'uppercase', whiteSpace:'nowrap',
        cursor: offeneWahl.length ? 'not-allowed' : 'pointer', opacity: offeneWahl.length ? .5 : 1 }
    }, 'Absegnen & Namen bestimmen \u2192')), quizAnswers.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-d)',
      fontSize: '12px',
      letterSpacing: '.22em',
      color: 'rgba(var(--accent-rgb),calc(.6*var(--ka) + var(--tb)))',
      textTransform: 'uppercase',
      marginBottom: 14
    }
  }, "Entscheidungsprotokoll"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-b)',
      fontWeight: 300,
      fontSize: '12.5px',
      color: 'rgba(var(--text-rgb),calc(.38*var(--kt) + var(--tb)))',
      lineHeight: 1.85,
      marginBottom: 22
    }
  }, "Jede Quiz-Antwort zeigt, auf welche Optionen die Eingrenzung nach dieser Antwort hindeutete. Eine einzelne verbleibende Option (in Gr\xFCn) ist die ermittelte Wahl."), Object.entries(byKat).map(([kat, answers]) => /*#__PURE__*/React.createElement("div", {
    key: kat,
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-m)',
      fontSize: '11px',
      letterSpacing: '.2em',
      color: 'rgba(var(--purple-rgb),calc(.55*var(--kp) + var(--tb)))',
      textTransform: 'uppercase',
      marginBottom: 9
    }
  }, {
    rasse: 'Rasse',
    klasse: 'Klasse',
    hintergrund: 'Hintergrund',
    division: 'Division',
    lebensstil: 'Lebensstil',
    gottheit: 'Gottheit',
    samen: 'Same der Furcht',
    sternzeichen: 'Sternzeichen'
  }[kat] || kat), answers.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "ans-q"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ans-f"
  }, a.frage), /*#__PURE__*/React.createElement("div", {
    className: "ans-a"
  }, a.answerText), /*#__PURE__*/React.createElement("div", {
    className: `trail ${a.nextList.length === 1 ? 'one' : ''}`
  }, trail(a.nextList, 12))))))), showNameModal && /*#__PURE__*/React.createElement(window.NcNamenWahl, {
    rasse: getFinal('rasse').val, geschlecht: tags.geschlecht || null,
    onCancel: () => setShowNameModal(false),
    onConfirm: n => { setCharName(n); setShowNameModal(false); setFertig(true); window.scrollTo(0, 0); }
  }));
}

// ── BIRTHDAY PICKER ────────────────────────────────────────────────────────
const MONTHS_M = [
  {name:"Janvar",days:19},{name:"Fevorn",days:18},{name:"Mareth",days:19},
  {name:"Aprel",days:19},{name:"Mairen",days:18},{name:"Junvar",days:19},
  {name:"Juval",days:19},{name:"Auvar",days:19},{name:"Septhar",days:19},
  {name:"Oktar",days:18},{name:"Novren",days:18},{name:"Derath",days:19},
];
const MS_M = MONTHS_M.reduce((a,m,i)=>{a.push(i===0?1:a[i-1]+MONTHS_M[i-1].days);return a;},[]);
function doyText(doy) {
  for (let i=MONTHS_M.length-1;i>=0;i--)
    if (doy>=MS_M[i]) return `${doy-MS_M[i]+1}. ${MONTHS_M[i].name}`;
  return '—';
}
function BirthdayPicker({ doy, onChange }) {
  const initMo = () => { if (!doy) return 0; for (let i=MONTHS_M.length-1;i>=0;i--) if (doy>=MS_M[i]) return i; return 0; };
  const [open, setOpen] = useState(false);
  const [mo, setMo] = useState(initMo);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const h = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [open]);
  function pick(mi, d) { onChange(MS_M[mi]+d-1); setOpen(false); }
  const M = MONTHS_M[mo];
  const selDay = doy && MS_M[mo]<=doy && doy<MS_M[mo]+M.days ? doy-MS_M[mo]+1 : null;
  const btnSt = {
    fontFamily:'var(--font-m)', fontSize:'12.5px', background:'rgba(var(--bg-rgb),.5)',
    border:'1px solid rgba(var(--accent-rgb),calc(.2*var(--ka)))', borderRadius:3, color: doy ? 'var(--white)' : 'rgba(var(--accent-rgb),calc(.4*var(--ka)))',
    outline:'none', padding:'6px 10px', cursor:'pointer', textAlign:'left', width:'100%'
  };
  return /*#__PURE__*/React.createElement("div", {ref, style:{position:'relative'}},
    /*#__PURE__*/React.createElement("button", {type:"button", style:btnSt, onClick:()=>{if(!open){setMo(initMo());setOpen(true);}else setOpen(false);}},
      doy ? doyText(doy) : 'Kein Datum', " ", /*#__PURE__*/React.createElement("span", {style:{opacity:.4,fontSize:12}}, "▾")
    ),
    open && /*#__PURE__*/React.createElement("div", {style:{
      position:'absolute',top:'calc(100% + 3px)',left:0,zIndex:1500,
      background:'rgba(var(--panel-rgb),.99)',border:'1px solid rgba(var(--purple-rgb),calc(.4*var(--kp)))',borderRadius:4,
      boxShadow:'0 18px 48px rgba(var(--shadow-rgb),calc(.75 * var(--shadow-k)))',width:'min(320px,90vw)',overflow:'hidden'
    }},
      /*#__PURE__*/React.createElement("div", {style:{display:'flex',flexWrap:'wrap',gap:2,padding:'7px 7px 5px',borderBottom:'1px solid rgba(var(--purple-rgb),calc(.12*var(--kp)))'}},
        MONTHS_M.map((m,i)=>/*#__PURE__*/React.createElement("button", {key:i, type:"button", onClick:()=>setMo(i),
          style:{fontFamily:'var(--font-m)',fontSize:'11px',letterSpacing:'.1em',padding:'3px 6px',cursor:'pointer',
            background:mo===i?'rgba(var(--purple-rgb),calc(.28*var(--kp)))':'transparent',
            border:`1px solid ${mo===i?'rgba(var(--purple-rgb),calc(.55*var(--kp)))':'rgba(var(--purple-rgb),calc(.12*var(--kp)))'}`,
            borderRadius:2,color:mo===i?'var(--white)':'rgba(var(--text-rgb),calc(.45*var(--kt)))'}},
          m.name
        ))
      ),
      /*#__PURE__*/React.createElement("div", {style:{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:2,padding:'7px'}},
        Array.from({length:M.days},(_,i)=>i+1).map(d=>/*#__PURE__*/React.createElement("button", {key:d, type:"button", onClick:()=>pick(mo,d),
          style:{fontFamily:'var(--font-m)',fontSize:'12.5px',padding:'6px 2px',cursor:'pointer',textAlign:'center',
            background:selDay===d?'rgba(var(--purple-rgb),calc(.42*var(--kp)))':'rgba(var(--purple-rgb),calc(.05*var(--kp)))',
            border:`1px solid ${selDay===d?'rgba(var(--purple-rgb),calc(.75*var(--kp)))':'rgba(var(--purple-rgb),calc(.12*var(--kp)))'}`,
            borderRadius:2,color:selDay===d?'var(--white)':'rgba(var(--text-rgb),calc(.8*var(--kt)))'}},
          d
        ))
      ),
      /*#__PURE__*/React.createElement("div", {style:{padding:'4px 7px 7px',borderTop:'1px solid rgba(var(--purple-rgb),calc(.1*var(--kp)))'}},
        /*#__PURE__*/React.createElement("button", {type:"button", onClick:()=>{onChange(null);setOpen(false);},
          style:{fontFamily:'var(--font-m)',fontSize:'11px',letterSpacing:'.18em',textTransform:'uppercase',
            color:'rgba(var(--text-rgb),calc(.3*var(--kt) + var(--tb)))',background:'transparent',border:'none',cursor:'pointer',padding:'2px 0'}},
          "Datum entfernen"
        )
      )
    )
  );
}

// ── NSC-ERSTELLUNG ─────────────────────────────────────────────────────────
const NSC_DIVISIONS_LIST = ['Die Kuratoren','Die Sturmritter','Die Sentinels','Die Friedenshüter','Die Outfitters','Die Pathfinders','Die Quellensucher','Die Bergungsgarde','Keine'];
const NSC_GESCHLECHT_LIST = ['Männlich','Weiblich','Divers','Keine Angabe'];
const NSC_LEBENSPHASE_LIST = ['Jung','Erwachsen','Mittelalt','Alt','Greisenhaft'];
const NSC_STATUS_LIST = ['Lebendig','Verbündet','Neutral','Verschollen','Feind','Gefallen','Verstorben'];

// Gesinnung in vier Stufen; die neutralen Antworten überlappen (Neutral gilt für beide)
const NSC_GESINNUNG_SETS = {
  'gut':        ['Rechtschaffen gut','Neutral gut','Chaotisch gut'],
  'eher-gut':   ['Rechtschaffen neutral','Neutral','Chaotisch neutral','Neutral gut'],
  'eher-boese': ['Rechtschaffen neutral','Neutral','Chaotisch neutral','Neutral böse'],
  'boese':      ['Rechtschaffen böse','Neutral böse','Chaotisch böse'],
};
// Rassen nach Flug und Resistenzen (aus RASSEN_STRUKTUR, inkl. Blut-/Ahnenlinien)
const nscRassenMit = test => (window.ALLE_RASSEN || []).filter(r => {
  const d = (window.RASSEN_STRUKTUR || {})[r];
  if (!d) return false;
  return test(d) || Object.values(d.varianten || {}).some(v => test({ ...d, ...v }));
});
const NSC_RASSE_FLIEGT = nscRassenMit(d => Object.keys(d.bewegung || {}).some(k => /^flieg/i.test(k)));
const NSC_RASSE_RESIST = nscRassenMit(d => (d.resistenzen || []).length > 0 || (d.immunitaeten || []).length > 0);
const nscOhne = liste => (window.ALLE_RASSEN || []).filter(r => !liste.includes(r));

const SC_QUIZ_DATA = [...(window.CHAR_QUIZ || []).filter(q => q.kat !== 'gottheit'), ...gottQuizFragen()];

const NSC_QUIZ_DATA = [
  { id:'nsc-gs-1', kat:'gesinnung', frage:'Welche Gesinnung hat dein NSC?',
    optionen:[
      { text:'Gut', behalte:NSC_GESINNUNG_SETS['gut'] },
      { text:'Neutral – eher gut', behalte:NSC_GESINNUNG_SETS['eher-gut'] },
      { text:'Neutral – eher böse', behalte:NSC_GESINNUNG_SETS['eher-boese'] },
      { text:'Böse', behalte:NSC_GESINNUNG_SETS['boese'] },
    ]
  },
  { id:'nsc-r-fly', kat:'rasse', frage:'Kann dein NSC fliegen?',
    optionen:[ { text:'Ja', behalte:NSC_RASSE_FLIEGT }, { text:'Nein', behalte:nscOhne(NSC_RASSE_FLIEGT) } ]
  },
  { id:'nsc-r-res', kat:'rasse', frage:'Hat dein NSC Resistenzen (z. B. gegen Gift, Feuer oder Kälte)?',
    optionen:[ { text:'Ja', behalte:NSC_RASSE_RESIST }, { text:'Nein', behalte:nscOhne(NSC_RASSE_RESIST) } ]
  },
  ...(window.CHAR_QUIZ ? window.CHAR_QUIZ.filter(q => q.kat === 'rasse') : []),
  ...gottQuizFragen(),
  { id:'nsc-g-1', kat:'geschlecht', frage:'Welches Geschlecht hat dieser NSC?',
    optionen:[{text:'Männlich',behalte:['Männlich']},{text:'Weiblich',behalte:['Weiblich']},{text:'Divers',behalte:['Divers']},{text:'Keine Angabe',behalte:['Keine Angabe']}]
  },
  { id:'nsc-s-1', kat:'status', frage:'Wie verhält sich dieser NSC gegenüber den Spielercharakteren?',
    optionen:[
      {text:'Freundlich — steht auf der Seite der Spieler', behalte:['Verbündet']},
      {text:'Gleichgültig oder professionell distanziert', behalte:['Neutral']},
      {text:'Noch unklar — erster Kontakt', behalte:['Lebendig']},
      {text:'Feindlich gesinnt oder gefallen', behalte:['Feind','Gefallen','Verstorben','Verschollen']},
    ]
  },
  { id:'nsc-s-2', kat:'status', frage:'Ist dieser NSC noch am Leben?',
    optionen:[
      {text:'Lebt noch als Feind', behalte:['Feind']},
      {text:'Verstorben', behalte:['Verstorben']},
      {text:'Gefallen — dramatischer oder bedeutsamer Tod', behalte:['Gefallen']},
      {text:'Verschollen — Schicksal unbekannt', behalte:['Verschollen']},
    ]
  },
  { id:'nsc-d-1', kat:'division', frage:'Gehört dieser NSC einer der acht Divisionen an?',
    optionen:[
      {text:'Nein — keiner Division', behalte:['Keine']},
      {text:'Die Kuratoren', behalte:['Die Kuratoren']},
      {text:'Die Sturmritter', behalte:['Die Sturmritter']},
      {text:'Eine andere Division', behalte:['Die Sentinels','Die Friedenshüter','Die Outfitters','Die Pathfinders','Die Quellensucher','Die Bergungsgarde']},
    ]
  },
  { id:'nsc-d-2', kat:'division', frage:'Welche Division?',
    optionen:[
      {text:'Die Sentinels', behalte:['Die Sentinels']},
      {text:'Die Friedenshüter', behalte:['Die Friedenshüter']},
      {text:'Die Outfitters', behalte:['Die Outfitters']},
      {text:'Die Pathfinders, Quellensucher oder Bergungsgarde', behalte:['Die Pathfinders','Die Quellensucher','Die Bergungsgarde']},
    ]
  },
  { id:'nsc-d-3', kat:'division', frage:'Welche der drei?',
    optionen:[
      {text:'Die Pathfinders', behalte:['Die Pathfinders']},
      {text:'Die Quellensucher', behalte:['Die Quellensucher']},
      {text:'Die Bergungsgarde', behalte:['Die Bergungsgarde']},
    ]
  },
  { id:'nsc-l-1', kat:'lebensphase', frage:'In welchem Lebensabschnitt befindet sich dieser NSC?',
    optionen:[
      {text:'Jung — noch nicht voll erwachsen', behalte:['Jung']},
      {text:'Erwachsen — in bester Kraft', behalte:['Erwachsen']},
      {text:'Mittelalt — erfahren, in der zweiten Lebenshälfte', behalte:['Mittelalt']},
      {text:'Alt oder Greisenhaft', behalte:['Alt','Greisenhaft']},
    ]
  },
  { id:'nsc-l-2', kat:'lebensphase', frage:'Alt oder greisenhaft?',
    optionen:[
      {text:'Alt — erfahren, aber noch aktiv', behalte:['Alt']},
      {text:'Greisenhaft — in den letzten Jahren', behalte:['Greisenhaft']},
    ]
  },
];

function NscTagPhase({ nscTags, setNscTag, onNext }) {
  const GOETTER = useMemo(() => {
    if (!window.GODS_DATA) return [];
    const { gods=[], demons=[], naturgeister=[] } = window.GODS_DATA;
    return [...gods,...demons,...naturgeister].map(g => g.name);
  }, []);
  const t = nscTags;
  const chipFields = ['rasse','geschlecht','status','division','lebensphase','gottheit','gesinnung'];
  const filledCount = chipFields.filter(k => t[k] !== null).length + (t.name.trim() ? 1 : 0) + (t.beruf.trim() ? 1 : 0);
  const inputStyle = extra => ({
    fontFamily:'var(--font-b)', fontSize:'13px', fontWeight:300,
    background:'rgba(var(--bg-rgb),.5)', border:'1px solid rgba(var(--accent-rgb),calc(.2*var(--ka)))',
    borderRadius:3, color:'var(--white)', outline:'none', padding:'8px 12px',
    width:'300px', marginTop:8, ...extra
  });
  return /*#__PURE__*/React.createElement("div", {style:{maxWidth:920,margin:'0 auto',padding:'44px 32px 80px',animation:'slideUp .4s ease'}},
    /*#__PURE__*/React.createElement("div", {style:{marginBottom:38}},
      /*#__PURE__*/React.createElement("div", {style:{fontFamily:'var(--font-m)',fontSize:'11.5px',letterSpacing:'.28em',color:'rgba(var(--purple-rgb),calc(.5*var(--kp) + var(--tb)))',textTransform:'uppercase',marginBottom:9}}, "Schritt 1 · NSC-Tags"),
      /*#__PURE__*/React.createElement("h2", {style:{fontFamily:'var(--font-d)',fontSize:'clamp(16px,3vw,26px)',fontWeight:300,letterSpacing:'.18em',color:'var(--white)',marginBottom:11}}, "Was weißt du schon?"),
      /*#__PURE__*/React.createElement("p", {style:{fontFamily:'var(--font-b)',fontWeight:300,fontSize:'13px',color:'rgba(var(--text-rgb),calc(.4*var(--kt) + var(--tb)))',lineHeight:1.9,maxWidth:580}},
        "Fülle alles aus, was du bereits über den NSC weißt. Leere Felder werden im nächsten Schritt durch gezielte Quizfragen ermittelt."
      )
    ),
    /*#__PURE__*/React.createElement("div", {className:"cat-block"},
      /*#__PURE__*/React.createElement("div", {className:"cat-head"}, "Name *"),
      /*#__PURE__*/React.createElement("input", {
        value:t.name, onChange:e=>setNscTag('name',e.target.value),
        placeholder:"NSC-Name…",
        style:{...inputStyle({}), fontFamily:'var(--font-d)', fontSize:'16px', letterSpacing:'.12em',
          border:`1px solid rgba(${t.name.trim()?'94,232,208':'160,140,255'},.2)`, width:'300px'}
      })
    ),
    /*#__PURE__*/React.createElement("div", {className:"cat-block"},
      /*#__PURE__*/React.createElement("div", {className:"cat-head"}, "Beruf"),
      /*#__PURE__*/React.createElement("input", {value:t.beruf, onChange:e=>setNscTag('beruf',e.target.value), placeholder:"z.B. Händler, Wächter, Heiler…", style:inputStyle({})})
    ),
    /*#__PURE__*/React.createElement(CatBlock, {title:"Rasse",grouped:window.RASSEN_GRUPPEN,items:window.ALLE_RASSEN,selected:t.rasse,onSelect:v=>setNscTag('rasse',v),hideOthers:true}),
    /*#__PURE__*/React.createElement(CatBlock, {title:"Geschlecht",items:NSC_GESCHLECHT_LIST,selected:t.geschlecht,onSelect:v=>setNscTag('geschlecht',v)}),
    /*#__PURE__*/React.createElement(CatBlock, {title:"Status",items:NSC_STATUS_LIST,selected:t.status,onSelect:v=>setNscTag('status',v)}),
    /*#__PURE__*/React.createElement(DivisionBlock, {items:NSC_DIVISIONS_LIST,selected:t.division,onSelect:v=>setNscTag('division',v)}),
    /*#__PURE__*/React.createElement(CatBlock, {title:"Lebensphase",items:NSC_LEBENSPHASE_LIST,selected:t.lebensphase,onSelect:v=>setNscTag('lebensphase',v)}),
    /*#__PURE__*/React.createElement(GottheitBlock, {selected:t.gottheit,gesinnung:t.gottheitGesinnung,onSelect:v=>setNscTag('gottheit',v),onGesinnung:v=>setNscTag('gottheitGesinnung',v)}),
    /*#__PURE__*/React.createElement(CatBlock, {title:"Gesinnung",items:window.ALLE_GESINNUNGEN||[],selected:t.gesinnung,onSelect:v=>setNscTag('gesinnung',v)}),
    /*#__PURE__*/React.createElement("div", {style:{marginTop:44,display:'flex',alignItems:'center',justifyContent:'flex-end',gap:14},className:"no-print"},
      /*#__PURE__*/React.createElement("span", {style:{fontFamily:'var(--font-m)',fontSize:'11.5px',color:'rgba(var(--accent-rgb),calc(.38*var(--ka) + var(--tb)))',letterSpacing:'.1em'}},
        filledCount, " Feld", filledCount!==1?'er':'', " ausgefüllt"),
      !t.name.trim() && /*#__PURE__*/React.createElement("span", {style:{fontFamily:'var(--font-m)',fontSize:'11px',color:'color-mix(in srgb, rgba(255,140,100,.6), rgb(var(--ink-rgb)) var(--cm))',letterSpacing:'.1em'}}, "Name ist Pflichtfeld"),
      /*#__PURE__*/React.createElement(GlitchBtn, {label:"Weiter",sub:"Zum Quiz",onClick:onNext,primary:!!t.name.trim(),style:{padding:'14px 36px',minWidth:0}})
    )
  );
}

// ── NSC Form Helpers ────────────────────────────────────────────────────────
const nscFieldSt = {
  fontFamily:'var(--font-b)', fontSize:'13px', background:'rgba(var(--bg-rgb),.5)',
  border:'1px solid rgba(var(--accent-rgb),calc(.2*var(--ka)))', borderRadius:3, color:'var(--white)',
  outline:'none', padding:'6px 9px', width:'100%', boxSizing:'border-box',
};
const nscRmBt = {
  background:'rgba(227,103,96,.08)', border:'1px solid rgba(227,103,96,.35)',
  borderRadius:2, color:'rgba(227,103,96,.8)', cursor:'pointer', padding:'4px 8px',
  fontFamily:'var(--font-m)', fontSize:12, flexShrink:0, lineHeight:1,
};
const nscAddBt = {
  background:'rgba(var(--purple-rgb),calc(.08*var(--kp)))', border:'1px solid rgba(var(--purple-rgb),calc(.35*var(--kp)))',
  borderRadius:2, color:'rgba(var(--text-rgb),calc(.7*var(--kt) + var(--tb)))', cursor:'pointer', padding:'4px 12px',
  fontFamily:'var(--font-m)', fontSize:'11px', letterSpacing:'.18em', textTransform:'uppercase',
  marginTop:6, display:'inline-block',
};
function NscField(label, children) {
  return /*#__PURE__*/React.createElement("div", {key:label, style:{marginBottom:10}},
    /*#__PURE__*/React.createElement("label", {style:{fontFamily:'var(--font-m)',fontSize:'11px',letterSpacing:'.16em',
      color:'rgba(var(--accent-rgb),calc(.55*var(--ka) + var(--tb)))',textTransform:'uppercase',display:'block',marginBottom:3}}, label),
    children
  );
}
function NscSektion(title, children, defaultOpen = false) {
  return /*#__PURE__*/React.createElement(NscSektionComp, {key:title, title, children, defaultOpen});
}
function NscSektionComp({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {style:{marginBottom:5,borderRadius:3,
    border:`1px solid ${open?'rgba(var(--purple-rgb),calc(.28*var(--kp)))':'rgba(var(--purple-rgb),calc(.1*var(--kp)))'}`}},
    /*#__PURE__*/React.createElement("button", {type:"button", onClick:()=>setOpen(o=>!o),
      style:{width:'100%',padding:'11px 14px',display:'flex',alignItems:'center',gap:10,
        background:open?'rgba(var(--purple-rgb),calc(.07*var(--kp)))':'transparent',border:'none',borderRadius:'2px',
        cursor:'pointer',textAlign:'left'}},
      /*#__PURE__*/React.createElement("span", {style:{fontFamily:'var(--font-m)',fontSize:'11.5px',letterSpacing:'.26em',
        textTransform:'uppercase',flexShrink:0,
        color:open?'var(--lav)':'rgba(var(--accent-rgb),calc(.38*var(--ka)))'}}, title),
      /*#__PURE__*/React.createElement("div", {style:{flex:1}}),
      /*#__PURE__*/React.createElement("span", {style:{fontFamily:'var(--font-m)',fontSize:'11px',color:'rgba(var(--purple-rgb),calc(.45*var(--kp) + var(--tb)))',flexShrink:0}},
        open?'▲':'▼')
    ),
    open && /*#__PURE__*/React.createElement("div", {style:{padding:'14px 14px 18px',borderTop:'1px solid rgba(var(--purple-rgb),calc(.12*var(--kp)))'}},
      children
    )
  );
}

// Divisionsrang 10 (Einstieg) … 1 (Leitung) mit den Titeln aus DIVISIONS_DATA; gespeichert wird die Zahl als Text
function NscRangWahl({ division, value, onChange }) {
  const div = (window.DIVISIONS_DATA || []).find(d => d.name === division);
  if (!div) return /*#__PURE__*/React.createElement("div", { style:{ fontFamily:'var(--font-b)', fontSize:'13px', color:'var(--silver)' } },
    "Ohne Division gibt es keinen Rang. W\xE4hle oben oder im Quiz eine Division.");
  const raenge = [...div.raenge].sort((a, b) => b.rang - a.rang);
  const aktiv = raenge.find(r => String(r.rang) === String(value));
  const chip = on => ({ fontFamily:'var(--font-m)', fontSize:'11.5px', letterSpacing:'.1em', cursor:'pointer', padding:'6px 10px', borderRadius:3, textAlign:'left',
    color: on ? 'var(--white)' : 'rgba(var(--text-rgb),calc(.72*var(--kt) + var(--tb)))',
    background: on ? 'rgba(var(--purple-rgb),calc(.22*var(--kp)))' : 'rgba(var(--purple-rgb),calc(.05*var(--kp)))',
    border: '1px solid ' + (on ? 'rgba(var(--accent-rgb),calc(.65*var(--ka)))' : 'rgba(var(--purple-rgb),calc(.25*var(--kp)))') });
  return /*#__PURE__*/React.createElement("div", { style:{ display:'flex', flexDirection:'column', gap:10 } },
    /*#__PURE__*/React.createElement("div", { style:{ display:'flex', gap:6, flexWrap:'wrap' } },
      raenge.map(r => /*#__PURE__*/React.createElement("button", { key:r.rang, type:"button", style:chip(aktiv === r), onClick:() => onChange(aktiv === r ? '' : String(r.rang)) },
        "Rang ", r.rang, " \xB7 ", r.titel)),
      /*#__PURE__*/React.createElement("button", { type:"button", style:{ ...chip(false), color:'var(--white)', border:'1px solid rgba(var(--accent-rgb),calc(.6*var(--ka)))' },
        onClick:() => onChange(String(raenge[Math.floor(Math.random() * raenge.length)].rang)) }, "\u2684 W\xFCrfeln")
    ),
    aktiv && /*#__PURE__*/React.createElement("div", { style:{ fontFamily:'var(--font-b)', fontSize:'13px', lineHeight:1.7, color:'var(--silver)' } },
      /*#__PURE__*/React.createElement("span", { style:{ color:'var(--white)' } }, aktiv.titel, ": "), aktiv.beschreibung)
  );
}

function NscOutputPhase({ nscTags, nscPossible }) {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [saveError, setSaveError] = useState('');

  // Bild — always individually settable
  const [bildUrl, setBildUrl] = useState('');

  // ── Zusatz-Felder ─────────────────────────────────────────────
  const [extra, setExtra] = useState({
    titel: '', alter: '', geburtstag_doy: null, geburtstag_jahr: null, wohnort: '',
    rang: '', organisation: '', kapsel: '', habe: 0,
    unvergesslich: '', eigenschaften: '', talente: '', makel: '',
    motivationen: [], geheimnisse: [],
    kontakte: { familie: [], freunde: [], rivalen: [] },
  });
  const setEx = (k, v) => setExtra(p => ({...p, [k]: v}));
  const addMotiv = () => setEx('motivationen', [...extra.motivationen, '']);
  const rmMotiv  = i => setEx('motivationen', extra.motivationen.filter((_,j)=>j!==i));
  const setMotiv = (i,v) => setEx('motivationen', extra.motivationen.map((m,j)=>j===i?v:m));
  const addGeh = () => setEx('geheimnisse', [...extra.geheimnisse, '']);
  const rmGeh  = i => setEx('geheimnisse', extra.geheimnisse.filter((_,j)=>j!==i));
  const setGeh = (i,v) => setEx('geheimnisse', extra.geheimnisse.map((g,j)=>j===i?v:g));
  const addK  = sub => setEx('kontakte', {...extra.kontakte, [sub]: [...(extra.kontakte[sub]||[]), {name:'',rolle:''}]});
  const rmK   = (sub,i) => setEx('kontakte', {...extra.kontakte, [sub]: (extra.kontakte[sub]||[]).filter((_,j)=>j!==i)});
  const setK  = (sub,i,field,v) => setEx('kontakte', {...extra.kontakte,
    [sub]: (extra.kontakte[sub]||[]).map((e,j)=>j===i?{...e,[field]:v}:e)});

  // Spielwerte / Steckbrief
  const [statsMode, setStatsMode] = useState('leer'); // 'leer' | 'manuell' | 'monster'
  const [monsterSearch, setMonsterSearch] = useState('');
  const [selectedMonster, setSelectedMonster] = useState(null); // full NPC_STATS_DATA entry
  const ATTRS = ['STR','DEX','CON','INT','WIS','CHA'];
  const [manual, setManual] = useState({
    rk:'', ruestungstyp:'', tp:'', tp_wuerfel:'',
    bewegung:'', // e.g. "9 m" — simplified to one string for now
    STR:'', DEX:'', CON:'', INT:'', WIS:'', CHA:'',
  });

  const npcList = useMemo(() => {
    if (!window.NPC_STATS_DATA) return [];
    const q = monsterSearch.toLowerCase();
    return window.NPC_STATS_DATA.filter(m => !q || m.name.toLowerCase().includes(q));
  }, [monsterSearch]);

  const getNsc = kat => {
    const tv = nscTags[kat];
    if (tv && tv !== 'unbekannt') return { val:tv, src:'sel' };
    const pos = nscPossible[kat] || [];
    if (pos.length === 1) return { val:pos[0], src:'quiz' };
    if (pos.length > 1) {
      const shown = pos.slice(0,3).join(' / ') + (pos.length > 3 ? ` (+${pos.length-3})` : '');
      return { val:shown, src:'multi' };
    }
    return { val:'—', src:'none' };
  };

  // Division wie beim Speichern: Auswahl, eindeutiges Quizergebnis oder erster Kandidat
  const nscDivision = (() => { const r = getNsc('division'); return r.src === 'none' ? null : r.src === 'multi' ? (nscPossible.division || [])[0] : r.val; })();

  const rows = [
    { lbl:'Rasse', ...getNsc('rasse') },
    { lbl:'Geschlecht', ...getNsc('geschlecht') },
    { lbl:'Status', ...getNsc('status') },
    { lbl:'Division', ...getNsc('division') },
    { lbl:'Lebensphase', ...getNsc('lebensphase') },
    { lbl:'Gesinnung', ...getNsc('gesinnung') },
    { lbl:'Gottheit', ...getNsc('gottheit') },
    { lbl:'Beruf', val:nscTags.beruf.trim()||'—', src:nscTags.beruf.trim()?'sel':'none' },
  ];

  const buildSteckbrief = () => {
    if (statsMode === 'leer') return null;
    if (statsMode === 'monster' && selectedMonster) {
      return {
        rk: selectedMonster.rk,
        ruestungstyp: selectedMonster.ruestungstyp,
        tp: selectedMonster.tp,
        tp_wuerfel: selectedMonster.tp_wuerfel,
        bewegung: selectedMonster.bewegung,
        attribute: selectedMonster.attribute,
        rettungswuerfe: selectedMonster.rettungswuerfe,
        fertigkeiten: selectedMonster.fertigkeiten,
        quelle: 'monster',
        monster_name: selectedMonster.name,
      };
    }
    if (statsMode === 'manuell') {
      const attr = {};
      ATTRS.forEach(a => { const v = parseInt(manual[a],10); if (!isNaN(v)) attr[a] = v; });
      return {
        rk: parseInt(manual.rk,10) || null,
        ruestungstyp: manual.ruestungstyp.trim() || null,
        tp: parseInt(manual.tp,10) || null,
        tp_wuerfel: manual.tp_wuerfel.trim() || null,
        bewegung: manual.bewegung.trim() ? { 'Gehen': manual.bewegung.trim() } : {},
        attribute: attr,
        rettungswuerfe: {},
        fertigkeiten: {},
        quelle: 'manuell',
      };
    }
    return null;
  };

  async function doSave() {
    if (!nscTags.name.trim()) return;
    setSaving(true);
    setSaveError('');
    const g = kat => {
      const r = getNsc(kat);
      if (r.src === 'none') return null;
      if (r.src === 'multi') return (nscPossible[kat]||[])[0] || null;
      return r.val;
    };
    const statusVal = g('status');
    try {
      const { error } = await window._sb.from('nscs').insert({
        name:        nscTags.name.trim(),
        titel:       extra.titel.trim()         || null,
        rasse:       g('rasse'),
        geschlecht:  g('geschlecht'),
        alter_jahre: (() => { const b = window.CharAge.fromBirth(extra.geburtstag_jahr, extra.geburtstag_doy); return b != null ? b : (extra.alter ? parseInt(extra.alter)||null : null); })(),
        alter_ref_abs: window.CharAge.today(),
        geburtstag_jahr: extra.geburtstag_jahr ?? null,
        geburtstag_doy: extra.geburtstag_doy    || null,
        lebensphase: g('lebensphase')            || extra.lebensphase || null,
        beruf:       nscTags.beruf.trim()        || null,
        division:    g('division'),
        rang:        (g('division') && g('division') !== 'Keine' && String(extra.rang).trim()) || null,
        organisation:extra.organisation.trim()  || null,
        kapsel:      extra.kapsel.trim()         || null,
        wohnort:     extra.wohnort.trim()        || null,
        gottheit:    g('gottheit'),
        gesinnung:   g('gesinnung'),
        habe:        parseInt(extra.habe)||0,
        status:      statusVal ? [statusVal] : [],
        unvergesslich: extra.unvergesslich.trim() || null,
        eigenschaften: extra.eigenschaften.split('\n').map(s=>s.trim()).filter(Boolean),
        talente:       extra.talente.split('\n').map(s=>s.trim()).filter(Boolean),
        makel:         extra.makel.split('\n').map(s=>s.trim()).filter(Boolean),   // text[] NOT NULL
        motivationen:  extra.motivationen.filter(s=>s.trim()),
        geheimnisse:   extra.geheimnisse.filter(s=>s.trim()).map(s=>({ text:s.trim(), vis:false })),
        kontakte: {
          familie:  (extra.kontakte.familie||[]).filter(e=>e.name.trim()).map(e=>({name:e.name.trim(),rolle:e.rolle.trim(),verstorben:false})),
          freunde:  (extra.kontakte.freunde||[]).filter(e=>e.name.trim()).map(e=>({name:e.name.trim(),rolle:e.rolle.trim(),verstorben:false})),
          rivalen:  (extra.kontakte.rivalen||[]).filter(e=>e.name.trim()).map(e=>({name:e.name.trim(),rolle:e.rolle.trim(),verstorben:false})),
        },
        bild:        bildUrl.trim()              || null,
        steckbrief:  buildSteckbrief(),
        visible:     false,
      });
      if (error) { setSaveError(error.message); setSaving(false); return; }
      setSaved(true);
    } catch(e) { setSaveError(e.message); setSaving(false); }
  }

  const btnBase = {
    fontFamily:'var(--font-m)', fontSize:'11px', letterSpacing:'.12em',
    padding:'7px 14px', borderRadius:3, cursor:'pointer',
    textTransform:'uppercase', transition:'all .2s'
  };
  const tabBtn = active => ({...btnBase,
    background:active?'rgba(var(--purple-rgb),calc(.2*var(--kp)))':'transparent',
    border:`1px solid rgba(var(--purple-rgb),${active?'.5':'.18'})`,
    color:active?'rgba(var(--text-rgb),calc(.9*var(--kt)))':'rgba(var(--accent-rgb),calc(.45*var(--ka)))',
  });
  const fieldStyle = {
    fontFamily:'var(--font-m)', fontSize:'12.5px', background:'rgba(var(--bg-rgb),.5)',
    border:'1px solid rgba(var(--accent-rgb),calc(.2*var(--ka)))', borderRadius:3, color:'var(--white)',
    outline:'none', padding:'6px 9px',
  };

  if (saved) return /*#__PURE__*/React.createElement("div", {style:{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',minHeight:'calc(calc(var(--vh, 1vh) * 100) - 52px)',gap:16,padding:40,animation:'fadeIn .5s'}},
    /*#__PURE__*/React.createElement("div", {style:{fontFamily:'var(--font-m)',fontSize:'11.5px',letterSpacing:'.3em',color:'color-mix(in srgb, rgba(94,232,208,.7), rgb(var(--ink-rgb)) var(--cm))',textTransform:'uppercase'}}, "NSC gespeichert"),
    /*#__PURE__*/React.createElement("div", {style:{fontFamily:'var(--font-d)',fontSize:'22px',fontWeight:300,letterSpacing:'.2em',color:'var(--white)'}}, "„", nscTags.name, "“ wurde angelegt."),
    /*#__PURE__*/React.createElement("div", {style:{display:'flex',gap:12,marginTop:8}},
      /*#__PURE__*/React.createElement("a", {href:'/spiel/kontakte.html', style:{...btnBase,color:'rgba(var(--accent-rgb),calc(.75*var(--ka) + var(--tb)))',background:'rgba(var(--purple-rgb),calc(.1*var(--kp)))',border:'1px solid rgba(var(--purple-rgb),calc(.35*var(--kp)))',padding:'10px 20px',textDecoration:'none'}}, "→ Zum NSC-Register"),
      /*#__PURE__*/React.createElement("button", {onClick:()=>window.location.reload(), style:{...btnBase,color:'rgba(var(--accent-rgb),calc(.55*var(--ka) + var(--tb)))',background:'transparent',border:'1px solid rgba(var(--accent-rgb),calc(.2*var(--ka)))',padding:'10px 20px'}}, "+ Weiteren NSC anlegen")
    )
  );

  const sectionHd = label => /*#__PURE__*/React.createElement("div", {style:{fontFamily:'var(--font-d)',fontSize:'12px',letterSpacing:'.22em',color:'rgba(var(--accent-rgb),calc(.6*var(--ka) + var(--tb)))',textTransform:'uppercase',marginBottom:14}}, label);
  const section = (children, extra={}) => /*#__PURE__*/React.createElement("div", {style:{marginBottom:28,padding:'18px 22px',border:'1px solid rgba(var(--accent-rgb),calc(.12*var(--ka)))',borderRadius:4,background:'rgba(var(--purple-rgb),calc(.02*var(--kp)))',...extra}}, children);

  return /*#__PURE__*/React.createElement("div", {style:{maxWidth:860,margin:'0 auto',padding:'44px 32px 80px',animation:'slideUp .4s ease'}},
    // Header
    /*#__PURE__*/React.createElement("div", {style:{marginBottom:32}},
      /*#__PURE__*/React.createElement("div", {style:{fontFamily:'var(--font-m)',fontSize:'11.5px',letterSpacing:'.28em',color:'color-mix(in srgb, rgba(94,232,208,.55), rgb(var(--ink-rgb)) var(--cm))',textTransform:'uppercase',marginBottom:9}}, "Schritt 3 \xB7 NSC-Vorschau"),
      /*#__PURE__*/React.createElement("div", {style:{fontFamily:'var(--font-d)',fontSize:'clamp(18px,3vw,28px)',fontWeight:300,letterSpacing:'.18em',color:'var(--white)',marginBottom:6}}, nscTags.name || "Unbenannt"),
      /*#__PURE__*/React.createElement("div", {style:{height:1,background:'linear-gradient(90deg,rgba(var(--purple-rgb),calc(.45*var(--kp))) 0%,transparent 100%)'}})
    ),
    // Tag-Zusammenfassung
    /*#__PURE__*/React.createElement("div", {style:{marginBottom:28}},
      rows.map(({lbl,val,src}) => /*#__PURE__*/React.createElement("div", {key:lbl,className:"sh-row"},
        /*#__PURE__*/React.createElement("div", {className:"sh-lbl"}, lbl),
        /*#__PURE__*/React.createElement("div", {className:`sh-val ${src==='quiz'?'quiz-det':src==='multi'?'multi':''}`}, val,
          src==='quiz' && /*#__PURE__*/React.createElement("span", {style:{fontFamily:'var(--font-m)',fontSize:'11px',color:'color-mix(in srgb, rgba(94,232,208,.4), rgb(var(--ink-rgb)) var(--cm))',marginLeft:10,letterSpacing:'.1em'}}, "↯ per Quiz")
        )
      ))
    ),
    // ── Bild ──────────────────────────────────────────────────────────────
    section(/*#__PURE__*/React.createElement(React.Fragment, null,
      sectionHd("Bild"),
      /*#__PURE__*/React.createElement(window.ImageUpload, {
        shape: 'square',
        imageUrl: bildUrl,
        onUploaded: url => setBildUrl(url),
        bucket: 'karte-bilder',
        pathPrefix: 'charaktere',
        width: 160,
        height: 160,
      })
    )),
    // ── Spielwerte / Steckbrief ────────────────────────────────────────────
    section(/*#__PURE__*/React.createElement(React.Fragment, null,
      sectionHd("Spielwerte (optional)"),
      /*#__PURE__*/React.createElement("div", {style:{display:'flex',gap:7,marginBottom:18,flexWrap:'wrap'}},
        /*#__PURE__*/React.createElement("button", {onClick:()=>setStatsMode('leer'), style:tabBtn(statsMode==='leer')}, "Leer lassen"),
        /*#__PURE__*/React.createElement("button", {onClick:()=>setStatsMode('manuell'), style:tabBtn(statsMode==='manuell')}, "Manuell eingeben"),
        /*#__PURE__*/React.createElement("button", {onClick:()=>setStatsMode('monster'), style:tabBtn(statsMode==='monster')}, "NPC-Monster übernehmen")
      ),
      // Leer
      statsMode === 'leer' && /*#__PURE__*/React.createElement("div", {style:{fontFamily:'var(--font-b)',fontWeight:300,fontSize:'12.5px',color:'rgba(var(--text-rgb),calc(.3*var(--kt) + var(--tb)))',lineHeight:1.7}},
        "Keine Spielwerte hinterlegt. Kann später im NSC-Eintrag ergänzt werden."
      ),
      // Manuell
      statsMode === 'manuell' && /*#__PURE__*/React.createElement("div", null,
        /*#__PURE__*/React.createElement("div", {style:{display:'flex',gap:10,flexWrap:'wrap',marginBottom:14,alignItems:'flex-end'}},
          /*#__PURE__*/React.createElement("div", {style:{display:'flex',flexDirection:'column',gap:4}},
            /*#__PURE__*/React.createElement("label", {style:{fontFamily:'var(--font-m)',fontSize:'11px',color:'rgba(var(--accent-rgb),calc(.5*var(--ka) + var(--tb)))',letterSpacing:'.12em',textTransform:'uppercase'}}, "RK"),
            /*#__PURE__*/React.createElement("input", {type:'number',min:'1',max:'30',value:manual.rk,onChange:e=>setManual(p=>({...p,rk:e.target.value})),style:{...fieldStyle,width:52,textAlign:'center'}})
          ),
          /*#__PURE__*/React.createElement("div", {style:{display:'flex',flexDirection:'column',gap:4}},
            /*#__PURE__*/React.createElement("label", {style:{fontFamily:'var(--font-m)',fontSize:'11px',color:'rgba(var(--accent-rgb),calc(.5*var(--ka) + var(--tb)))',letterSpacing:'.12em',textTransform:'uppercase'}}, "Rüstungstyp"),
            /*#__PURE__*/React.createElement("input", {value:manual.ruestungstyp,onChange:e=>setManual(p=>({...p,ruestungstyp:e.target.value})),placeholder:"z.B. natürliche Rüstung",style:{...fieldStyle,width:180}})
          ),
          /*#__PURE__*/React.createElement("div", {style:{display:'flex',flexDirection:'column',gap:4}},
            /*#__PURE__*/React.createElement("label", {style:{fontFamily:'var(--font-m)',fontSize:'11px',color:'rgba(var(--accent-rgb),calc(.5*var(--ka) + var(--tb)))',letterSpacing:'.12em',textTransform:'uppercase'}}, "TP"),
            /*#__PURE__*/React.createElement("input", {type:'number',min:'1',value:manual.tp,onChange:e=>setManual(p=>({...p,tp:e.target.value})),style:{...fieldStyle,width:64,textAlign:'center'}})
          ),
          /*#__PURE__*/React.createElement("div", {style:{display:'flex',flexDirection:'column',gap:4}},
            /*#__PURE__*/React.createElement("label", {style:{fontFamily:'var(--font-m)',fontSize:'11px',color:'rgba(var(--accent-rgb),calc(.5*var(--ka) + var(--tb)))',letterSpacing:'.12em',textTransform:'uppercase'}}, "TP-Würfel"),
            /*#__PURE__*/React.createElement("input", {value:manual.tp_wuerfel,onChange:e=>setManual(p=>({...p,tp_wuerfel:e.target.value})),placeholder:"z.B. 4W8+12",style:{...fieldStyle,width:110}})
          ),
          /*#__PURE__*/React.createElement("div", {style:{display:'flex',flexDirection:'column',gap:4}},
            /*#__PURE__*/React.createElement("label", {style:{fontFamily:'var(--font-m)',fontSize:'11px',color:'rgba(var(--accent-rgb),calc(.5*var(--ka) + var(--tb)))',letterSpacing:'.12em',textTransform:'uppercase'}}, "Bewegung"),
            /*#__PURE__*/React.createElement("input", {value:manual.bewegung,onChange:e=>setManual(p=>({...p,bewegung:e.target.value})),placeholder:"z.B. 9 m",style:{...fieldStyle,width:90}})
          )
        ),
        /*#__PURE__*/React.createElement("div", {style:{display:'grid',gridTemplateColumns:'repeat(6,1fr)',gap:7,maxWidth:400}},
          ATTRS.map(a => /*#__PURE__*/React.createElement("div", {key:a,style:{display:'flex',flexDirection:'column',gap:4}},
            /*#__PURE__*/React.createElement("label", {style:{fontFamily:'var(--font-m)',fontSize:'11px',color:'rgba(var(--accent-rgb),calc(.5*var(--ka) + var(--tb)))',letterSpacing:'.1em',textTransform:'uppercase',textAlign:'center'}}, a),
            /*#__PURE__*/React.createElement("input", {type:'number',min:'1',max:'30',value:manual[a],onChange:e=>setManual(p=>({...p,[a]:e.target.value})),
              style:{...fieldStyle,textAlign:'center',padding:'5px 2px'},
              onFocus:e=>e.target.style.borderColor='rgba(var(--purple-rgb),calc(.55*var(--kp)))',
              onBlur:e=>e.target.style.borderColor='rgba(var(--accent-rgb),calc(.2*var(--ka)))'})
          ))
        )
      ),
      // Monster-NPC
      statsMode === 'monster' && /*#__PURE__*/React.createElement("div", null,
        selectedMonster && /*#__PURE__*/React.createElement("div", {style:{marginBottom:12,padding:'10px 14px',border:'1px solid rgba(94,232,208,.25)',borderRadius:3,background:'rgba(94,232,208,.04)'}},
          /*#__PURE__*/React.createElement("div", {style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}},
            /*#__PURE__*/React.createElement("span", {style:{fontFamily:'var(--font-d)',fontSize:'13px',letterSpacing:'.12em',color:'color-mix(in srgb, rgba(94,232,208,.9), rgb(var(--ink-rgb)) var(--cm))'}}, selectedMonster.name),
            /*#__PURE__*/React.createElement("div", {style:{display:'flex',gap:16}},
              /*#__PURE__*/React.createElement("span", {style:{fontFamily:'var(--font-m)',fontSize:'11px',color:'rgba(var(--accent-rgb),calc(.5*var(--ka) + var(--tb)))',letterSpacing:'.1em'}}, "CR ", selectedMonster.cr),
              /*#__PURE__*/React.createElement("button", {onClick:()=>setSelectedMonster(null),style:{fontFamily:'var(--font-m)',fontSize:'11.5px',color:'rgba(var(--accent-rgb),calc(.4*var(--ka) + var(--tb)))',background:'transparent',border:'none',cursor:'pointer'}}, "✕")
            )
          ),
          /*#__PURE__*/React.createElement("div", {style:{display:'flex',flexWrap:'wrap',gap:'10px 20px'}},
            [['RK', selectedMonster.rk + (selectedMonster.ruestungstyp ? ` (${selectedMonster.ruestungstyp})` : '')],
             ['TP', selectedMonster.tp + (selectedMonster.tp_wuerfel ? ` (${selectedMonster.tp_wuerfel})` : '')],
             ['BEW', Object.entries(selectedMonster.bewegung||{}).map(([k,v])=>`${k} ${v}`).join(', ')||'—'],
             ...Object.entries(selectedMonster.attribute||{}).map(([k,v]) => [k, String(v)])
            ].map(([k,v]) => /*#__PURE__*/React.createElement("div", {key:k,style:{display:'flex',gap:5}},
              /*#__PURE__*/React.createElement("span", {style:{fontFamily:'var(--font-m)',fontSize:'11px',color:'rgba(var(--accent-rgb),calc(.45*var(--ka) + var(--tb)))',letterSpacing:'.1em',textTransform:'uppercase',minWidth:28}}, k),
              /*#__PURE__*/React.createElement("span", {style:{fontFamily:'var(--font-d)',fontSize:'12.5px',color:'rgba(var(--text-rgb),calc(.8*var(--kt) + var(--tb)))'}}, v)
            ))
          )
        ),
        /*#__PURE__*/React.createElement("input", {value:monsterSearch,onChange:e=>setMonsterSearch(e.target.value),
          placeholder:"NPC-Monster suchen…",
          style:{...fieldStyle,width:'260px',marginBottom:10}}),
        /*#__PURE__*/React.createElement("div", {style:{display:'flex',flexWrap:'wrap',gap:5,maxHeight:180,overflowY:'auto'}},
          npcList.map(m => /*#__PURE__*/React.createElement("button", {key:m.name,
            onClick:()=>{setSelectedMonster(m);setMonsterSearch('');},
            style:{...btnBase,padding:'4px 9px',
              background:selectedMonster?.name===m.name?'rgba(94,232,208,.12)':'rgba(var(--bg-rgb),.4)',
              border:`1px solid rgba(${selectedMonster?.name===m.name?'94,232,208':'160,140,255'},.15)`,
              color:selectedMonster?.name===m.name?'color-mix(in srgb, rgba(94,232,208,.8), rgb(var(--ink-rgb)) var(--cm))':'rgba(var(--accent-rgb),calc(.55*var(--ka)))'}},
            m.name, /*#__PURE__*/React.createElement("span", {style:{marginLeft:5,fontSize:'11px',color:'rgba(var(--accent-rgb),calc(.3*var(--ka) + var(--tb)))'}}, "CR ", m.cr)
          ))
        )
      )
    )),

    // ── Divisionsrang (nur mit Division) ─────────────────────────────────────
    NscSektion("Divisionsrang", [
      /*#__PURE__*/React.createElement(NscRangWahl, {key:'rang', division:nscDivision, value:extra.rang, onChange:v=>setEx('rang',v)})
    ], true),

    // ── Hade (nach Wohlstand oder Klasse, Tabellen der Spielleitung) ─────────
    NscSektion("Hade \xB7 Wie viel tr\xE4gt dein NSC bei sich?", [
      /*#__PURE__*/React.createElement(window.HadeRechner, {key:'hade', value:extra.habe, onChange:v=>setEx('habe',v),
        rang: nscDivision && nscDivision !== 'Keine' ? (parseInt(extra.rang, 10) || null) : null})
    ], true),

    // ── Identität (Zusatz) ────────────────────────────────────────────────
    NscSektion("Identit\xE4t \xB7 Details", [
      NscField("Titel", /*#__PURE__*/React.createElement("input", {value:extra.titel, onChange:e=>setEx('titel',e.target.value), style:nscFieldSt, placeholder:"z.B. Stadtkapitän, Ältester…"})),
      NscField("Alter (Jahre)", /*#__PURE__*/React.createElement("input", {type:"number",value:(window.CharAge.fromBirth(extra.geburtstag_jahr,extra.geburtstag_doy) ?? extra.alter), disabled:window.CharAge.fromBirth(extra.geburtstag_jahr,extra.geburtstag_doy)!=null, onChange:e=>setEx('alter',e.target.value), style:{...nscFieldSt,width:90}})),
      NscField("Geburtsdatum", /*#__PURE__*/React.createElement(window.CharAge.BirthDatePicker, {doy:extra.geburtstag_doy, jahr:extra.geburtstag_jahr, onChange:({doy,jahr})=>setExtra(p=>({...p, geburtstag_doy:doy, geburtstag_jahr:jahr})), buttonStyle:{...nscFieldSt, cursor:'pointer', textAlign:'left'}})),
      NscField("Wohnort", /*#__PURE__*/React.createElement("input", {value:extra.wohnort, onChange:e=>setEx('wohnort',e.target.value), style:nscFieldSt, placeholder:"Stadt, Viertel, Adresse…"})),
      NscField("Organisation", /*#__PURE__*/React.createElement("input", {value:extra.organisation, onChange:e=>setEx('organisation',e.target.value), style:nscFieldSt, placeholder:"Gilde, Kult, Gruppe…"})),
      NscField("Traumkapsel", /*#__PURE__*/React.createElement("input", {value:extra.kapsel, onChange:e=>setEx('kapsel',e.target.value), style:nscFieldSt, placeholder:"Kapsel-Nummer…"})),
    ]),

    // ── Erscheinung & Persönlichkeit ──────────────────────────────────────
    NscSektion("Erscheinung & Pers\xF6nlichkeit", [
      NscField("Unvergessliches Merkmal", /*#__PURE__*/React.createElement("textarea", {value:extra.unvergesslich, onChange:e=>setEx('unvergesslich',e.target.value), rows:2, style:{...nscFieldSt,resize:'vertical',lineHeight:1.65}})),
      NscField("Eigenschaften (eine pro Zeile)", /*#__PURE__*/React.createElement("textarea", {value:extra.eigenschaften, onChange:e=>setEx('eigenschaften',e.target.value), rows:3, style:{...nscFieldSt,resize:'vertical',lineHeight:1.65}})),
      NscField("Talente (eines pro Zeile)", /*#__PURE__*/React.createElement("textarea", {value:extra.talente, onChange:e=>setEx('talente',e.target.value), rows:2, style:{...nscFieldSt,resize:'vertical',lineHeight:1.65}})),
      NscField("Makel", /*#__PURE__*/React.createElement("textarea", {value:extra.makel, onChange:e=>setEx('makel',e.target.value), rows:2, style:{...nscFieldSt,resize:'vertical',lineHeight:1.65}})),
    ]),

    // ── Motivationen ─────────────────────────────────────────────────────
    NscSektion("Motivationen", [
      ...extra.motivationen.map((m,i)=>/*#__PURE__*/React.createElement("div", {key:i, style:{display:'flex',gap:6,marginBottom:6}},
        /*#__PURE__*/React.createElement("input", {value:m, onChange:e=>setMotiv(i,e.target.value), style:{...nscFieldSt,flex:1}, placeholder:"Motivation…"}),
        /*#__PURE__*/React.createElement("button", {onClick:()=>rmMotiv(i), style:nscRmBt}, "\xD7")
      )),
      /*#__PURE__*/React.createElement("button", {onClick:addMotiv, style:nscAddBt}, "+ Motivation")
    ]),

    // ── Kontakte ─────────────────────────────────────────────────────────
    NscSektion("Kontakte", [
      ...(['familie','freunde','rivalen'].flatMap(sub=>[
        /*#__PURE__*/React.createElement("div", {key:'hd-'+sub, style:{fontFamily:'var(--font-m)',fontSize:'11px',letterSpacing:'.22em',color:'rgba(var(--accent-rgb),calc(.5*var(--ka) + var(--tb)))',textTransform:'uppercase',marginBottom:6,marginTop:sub==='familie'?0:12}},
          sub==='familie'?'Familie':sub==='freunde'?'Freunde':'Rivalen'
        ),
        ...(extra.kontakte[sub]||[]).map((p,i)=>/*#__PURE__*/React.createElement("div", {key:sub+i, style:{display:'grid',gridTemplateColumns:'1fr 1fr auto',gap:6,marginBottom:6}},
          /*#__PURE__*/React.createElement("input", {value:p.name, onChange:e=>setK(sub,i,'name',e.target.value), style:nscFieldSt, placeholder:"Name"}),
          /*#__PURE__*/React.createElement("input", {value:p.rolle, onChange:e=>setK(sub,i,'rolle',e.target.value), style:nscFieldSt, placeholder:"Rolle"}),
          /*#__PURE__*/React.createElement("button", {onClick:()=>rmK(sub,i), style:nscRmBt}, "\xD7")
        )),
        /*#__PURE__*/React.createElement("button", {key:'add-'+sub, onClick:()=>addK(sub), style:{...nscAddBt,marginBottom:4}},
          `+ ${sub==='familie'?'Familienmitglied':sub==='freunde'?'Freund/in':'Rivale'} hinzuf\xFCgen`
        ),
      ]))
    ]),

    // ── Geheimnisse ───────────────────────────────────────────────────────
    NscSektion("Geheimnisse", [
      ...extra.geheimnisse.map((g,i)=>/*#__PURE__*/React.createElement("div", {key:i, style:{display:'flex',gap:6,marginBottom:6,alignItems:'flex-start'}},
        /*#__PURE__*/React.createElement("textarea", {value:g, onChange:e=>setGeh(i,e.target.value), rows:2,
          style:{...nscFieldSt,flex:1,resize:'vertical',lineHeight:1.65}}),
        /*#__PURE__*/React.createElement("button", {onClick:()=>rmGeh(i), style:nscRmBt}, "\xD7")
      )),
      /*#__PURE__*/React.createElement("button", {onClick:addGeh, style:nscAddBt}, "+ Geheimnis")
    ]),

    // ── Speichern ─────────────────────────────────────────────────────────
    /*#__PURE__*/React.createElement("div", {style:{padding:'20px 24px',border:'1px solid rgba(var(--purple-rgb),calc(.35*var(--kp)))',borderRadius:4,background:'rgba(var(--purple-rgb),calc(.04*var(--kp)))',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:16}},
      /*#__PURE__*/React.createElement("div", null,
        /*#__PURE__*/React.createElement("div", {style:{fontFamily:'var(--font-d)',fontSize:'12px',letterSpacing:'.22em',color:'rgba(var(--accent-rgb),calc(.8*var(--ka) + var(--tb)))',textTransform:'uppercase',marginBottom:6}}, "NSC speichern"),
        /*#__PURE__*/React.createElement("div", {style:{fontFamily:'var(--font-b)',fontWeight:300,fontSize:'12.5px',color:'rgba(var(--text-rgb),calc(.45*var(--kt) + var(--tb)))',lineHeight:1.6}},
          "Wird in der NSC-Tabelle angelegt. Sichtbarkeit: zun\xE4chst nur f\xFCr den DM."),
        saveError && /*#__PURE__*/React.createElement("div", {style:{fontFamily:'var(--font-m)',fontSize:'11px',color:'color-mix(in srgb, rgba(255,100,100,.75), rgb(var(--ink-rgb)) var(--cm))',letterSpacing:'.08em',marginTop:6}}, saveError)
      ),
      /*#__PURE__*/React.createElement("button", {
        disabled: saving || !nscTags.name.trim(),
        onClick: doSave,
        style:{display:'inline-flex',alignItems:'center',gap:10,padding:'12px 28px',
          background:nscTags.name.trim()?'rgba(var(--purple-rgb),calc(.18*var(--kp)))':'rgba(var(--purple-rgb),calc(.06*var(--kp)))',
          border:`1px solid rgba(var(--purple-rgb),${nscTags.name.trim()?'.55':'.18'})`,
          borderRadius:3,
          color:nscTags.name.trim()?'rgba(var(--text-rgb),calc(.95*var(--kt)))':'rgba(var(--purple-rgb),calc(.3*var(--kp)))',
          fontFamily:'var(--font-d)',fontSize:'12.5px',letterSpacing:'.18em',textTransform:'uppercase',
          cursor:saving||!nscTags.name.trim()?'not-allowed':'pointer',
          opacity:saving?.55:1, transition:'all .2s', whiteSpace:'nowrap'}
      }, saving ? 'Speichern…' : nscTags.name.trim() ? 'NSC anlegen →' : 'Name erforderlich')
    )
  );
}

// ── APP ────────────────────────────────────────────────────────────────────
function App() {
  const [phase, setPhase] = useState('typeSelect');
  const [charType, setCharType] = useState('spieler');

  // ── SC state ──
  const [tags, setTagsState] = useState({
    rasse: null, klasse: null, subklasse: null, hintergrund: null, zauberwirker: null,
    samen: null, lebensstil: null, gottheit: null, werkzeuge: null, division: null,
    geschlecht: null, gesinnung: null, sternzeichen: null, gottheitGesinnung: null, werkzeugeSicher: []
  });
  // Kombinationen (Rasse/Talent/Klasse/Hintergrund), die die sicheren Werkzeuge liefern; null = keine Vorgabe
  const [wzKombis, setWzKombis] = useState(null);
  const [possible, setPossible] = useState({
    rasse: window.ALLE_RASSEN || [], klasse: window.ALLE_KLASSEN || [],
    hintergrund: window.ALLE_HINTERGRUENDE || [], division: window.ALLE_DIVISIONEN || [],
    lebensstil: window.ALLE_LEBENSSTILE || [], gottheit: [], samen: window.ALLE_SAMEN || [],
    werkzeuge: window.WERKZEUGE_LIST || [], sternzeichen: window.ALLE_STERNZEICHEN || [],
  });
  const [quizAnswers, setQuizAnswers] = useState([]);

  // ── NSC state ──
  const [nscTags, setNscTagsState] = useState({
    name:'', beruf:'', rasse:null, geschlecht:null, status:null, division:null, lebensphase:null, gottheit:null, gesinnung:null, gottheitGesinnung:null
  });
  const [nscPossible, setNscPossible] = useState({
    rasse: window.ALLE_RASSEN || [],
    geschlecht: NSC_GESCHLECHT_LIST,
    status: NSC_STATUS_LIST,
    division: NSC_DIVISIONS_LIST,
    lebensphase: NSC_LEBENSPHASE_LIST,
    gottheit: [],
    gesinnung: window.ALLE_GESINNUNGEN || [],
  });
  const [nscQuizAnswers, setNscQuizAnswers] = useState([]);

  useEffect(() => {
    if (window.GODS_DATA) {
      const { gods=[], demons=[], naturgeister=[] } = window.GODS_DATA;
      const goetter = [...gods,...demons,...naturgeister].map(g => g.name);
      setPossible(p => ({ ...p, gottheit: goetter }));
      setNscPossible(p => ({ ...p, gottheit: goetter }));
    }
  }, []);

  const setTag = (k, v) => setTagsState(p => ({
    ...p, [k]:v,
    ...(k === 'klasse' ? { subklasse: null } : {}),
  }));
  const setWerkzeug = s => setTagsState(p => ({ ...p, werkzeuge:s }));
  const setNscTag = (k, v) => setNscTagsState(p => ({ ...p, [k]:v }));

  const handleAnswer = (q, opt) => {
    const prev = possible[q.kat] || [];
    const next = cut(prev, opt.behalte);
    const fin = next.length > 0 ? next : prev;
    if (wzKombis && ['rasse','klasse','hintergrund'].includes(q.kat)) {
      const rest = wzKombis.filter(c => fin.includes(c[q.kat]));
      if (rest.length) {
        setWzKombis(rest);
        setPossible(p => ({ ...p,
          rasse: [...new Set(rest.map(c => c.rasse))].filter(x => (p.rasse || []).includes(x)),
          klasse: [...new Set(rest.map(c => c.klasse))].filter(x => (p.klasse || []).includes(x)),
          hintergrund: [...new Set(rest.map(c => c.hintergrund))].filter(x => (p.hintergrund || []).includes(x)),
          [q.kat]: fin }));
      } else setPossible(p => ({ ...p, [q.kat]:fin }));
    } else setPossible(p => ({ ...p, [q.kat]:fin }));
    setQuizAnswers(a => [...a, { qId:q.id, kat:q.kat, frage:q.frage, answerText:opt.text, prevList:prev, nextList:fin }]);
  };
  const handleNscAnswer = (q, opt) => {
    const prev = nscPossible[q.kat] || [];
    const next = cut(prev, opt.behalte);
    const fin = next.length > 0 ? next : prev;
    setNscPossible(p => ({ ...p, [q.kat]:fin }));
    setNscQuizAnswers(a => [...a, { qId:q.id, kat:q.kat, frage:q.frage, answerText:opt.text, prevList:prev, nextList:fin }]);
  };

  const resetPossible = () => {
    const P = window.WERKZEUG_PLANER;
    const sicher = tags.werkzeugeSicher || [];
    const kombis = sicher.length && P ? P.kombinationen(sicher, wzFest(tags)) : null;
    setWzKombis(kombis && kombis.length ? kombis : null);
    const uniq = k => [...new Set(kombis.map(c => c[k]))];
    const passendeHg = tags.werkzeuge instanceof Set && tags.werkzeuge.size && P ? P.hintergruendeFuer([...tags.werkzeuge]) : null;
    setPossible({
    rasse: kombis && kombis.length ? uniq('rasse') : (window.ALLE_RASSEN||[]),
    klasse: kombis && kombis.length ? uniq('klasse') : (window.ALLE_KLASSEN||[]),
    hintergrund: (() => {
      let hg = kombis && kombis.length ? uniq('hintergrund') : (window.ALLE_HINTERGRUENDE||[]);
      if (passendeHg && passendeHg.length) { const x = hg.filter(h => passendeHg.includes(h)); if (x.length) hg = x; }
      return hg;
    })(),
    division: window.ALLE_DIVISIONEN||[],
    lebensstil: window.ALLE_LEBENSSTILE||[], gottheit: gottNamen(tags.gottheitGesinnung), samen: window.ALLE_SAMEN||[],
    werkzeuge: window.WERKZEUGE_LIST||[], sternzeichen: window.ALLE_STERNZEICHEN||[],
  });
  };
  const resetNscPossible = () => setNscPossible({
    rasse: window.ALLE_RASSEN||[], geschlecht: NSC_GESCHLECHT_LIST,
    status: NSC_STATUS_LIST, division: NSC_DIVISIONS_LIST,
    lebensphase: NSC_LEBENSPHASE_LIST, gottheit: gottNamen(nscTags.gottheitGesinnung),
    gesinnung: window.ALLE_GESINNUNGEN||[],
  });

  const [zufall, setZufall] = useState(false);   // „Entscheide für mich“: Quiz und offene Ergebnisse auswürfeln
  const goToQuiz = () => { setZufall(false); setQuizAnswers([]); resetPossible(); setPhase('quiz'); };
  const goToZufall = () => { setQuizAnswers([]); resetPossible(); setZufall(true); setPhase('quiz'); };
  const goToNscQuiz = () => {
    if (!nscTags.name.trim()) return;
    setNscQuizAnswers([]); resetNscPossible(); setPhase('quiz');
  };
  const goBack = () => {
    setZufall(false);
    if (phase === 'output' || phase === 'quiz') {
      if (charType === 'nsc') { setNscQuizAnswers([]); resetNscPossible(); }
      else { setQuizAnswers([]); resetPossible(); }
      setPhase('tags');
    } else if (phase === 'tags') setPhase(charType === 'nsc' ? 'nscArt' : 'typeSelect');
    else if (phase === 'monster') setPhase('nscArt');
    else if (phase === 'nscArt') setPhase('typeSelect');
  };

  return /*#__PURE__*/React.createElement("div", {style:{background:'var(--bg)',minHeight:'calc(var(--vh, 1vh) * 100)'}},
    /*#__PURE__*/React.createElement(Nav, {showBack:phase!=='typeSelect',onBack:goBack}),
    phase === 'typeSelect' && /*#__PURE__*/React.createElement(TypeSelectPhase, {
      onSelect: t => { setCharType(t==='nsc'?'nsc':'spieler'); setPhase(t==='nsc' ? 'nscArt' : 'tags'); }
    }),
    phase === 'nscArt' && /*#__PURE__*/React.createElement(NscArtPhase, { onWahl: monster => setPhase(monster ? 'monster' : 'tags') }),
    phase === 'monster' && /*#__PURE__*/React.createElement(window.NscMonsterFlow, { onDone: () => setPhase('typeSelect') }),
    phase === 'tags' && charType !== 'nsc' && /*#__PURE__*/React.createElement(TagPhase, {tags,setTag,setWerkzeug,onNext:goToQuiz,onZufall:goToZufall}),
    phase === 'tags' && charType === 'nsc' && /*#__PURE__*/React.createElement(NscTagPhase, {nscTags,setNscTag,onNext:goToNscQuiz}),
    phase === 'quiz' && charType !== 'nsc' && /*#__PURE__*/React.createElement(QuizPhase, {tags,possible,quizAnswers,onAnswer:handleAnswer,onFinish:()=>setPhase('output'),quizData:SC_QUIZ_DATA,auto:zufall}),
    phase === 'quiz' && charType === 'nsc' && /*#__PURE__*/React.createElement(QuizPhase, {
      tags:nscTags, possible:nscPossible, quizAnswers:nscQuizAnswers,
      onAnswer:handleNscAnswer, onFinish:()=>setPhase('output'), quizData:NSC_QUIZ_DATA
    }),
    phase === 'output' && charType !== 'nsc' && /*#__PURE__*/React.createElement(OutputPhase, {tags,possible,quizAnswers,charType,wzKombis,zufall}),
    phase === 'output' && charType === 'nsc' && /*#__PURE__*/React.createElement(NscOutputPhase, {nscTags,nscPossible,nscQuizAnswers})
  );
}
// SiteGate: Anmeldung nötig (Speichern braucht sie ohnehin) und setzt window.SITE_USER (Rolle für die NSC-Sperre)
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(window.SiteGate, null, /*#__PURE__*/React.createElement(App, null)));
})();

})();

