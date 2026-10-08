// char-age.jsx — keeps character ages in step with the in-world calendar.
// Exposes: window.CharAge = { load, today, age, fromBirth, yearLabel, useReady, BirthYearField }
//
// With a birth date (birthday doy + birth year) the age is derived from it and the calendar day
// (settings.kalender_today). Older rows only have a stored age (`age` + `age_ref_abs`, the absolute
// calendar day it was valid): every birthday passed since then adds a year, or every 224 days if
// there is no birthday. Rows without their own reference day use settings.alter_basis_abs (set
// when the feature was introduced).

const YEAR_DAYS = 224;
const state = { loaded: false, promise: null, today: null, basis: null };

// calendar years run ..., -2, -1, 1, 2, ... (no year 0; day 0 is the landing day between -1 and 1)
function yearOf(abs) {
  if (abs >= 1) return Math.floor((abs - 1) / YEAR_DAYS) + 1;
  if (abs === 0) return 0;
  return Math.floor(abs / YEAR_DAYS);
}

function birthdayAbs(year, doy) {
  return year > 0 ? (year - 1) * YEAR_DAYS + doy : year * YEAR_DAYS + (doy - 1);
}

// number of birthdays on days d with from < d <= to
function birthdaysBetween(from, to, doy) {
  let n = 0;
  for (let y = yearOf(from); y <= yearOf(to); y++) {
    if (y === 0) continue;
    const d = birthdayAbs(y, doy);
    if (d > from && d <= to) n++;
  }
  return n;
}

function load() {
  if (state.promise) return state.promise;
  state.promise = (async () => {
    let today = null, basis = null;
    try {
      const { data } = await window._sb.from('settings').select('key,value').in('key', ['kalender_today', 'alter_basis_abs']);
      (data || []).forEach(r => {
        const n = parseInt(r.value, 10);
        if (isNaN(n)) return;
        if (r.key === 'kalender_today') today = n;
        if (r.key === 'alter_basis_abs') basis = n;
      });
    } catch (e) { /* fall back below */ }
    if (today == null) {
      const n = parseInt(localStorage.getItem('meruria-today-abs'), 10);
      today = isNaN(n) ? 14 : n;
    }
    state.today = today;
    state.basis = basis;
    state.loaded = true;
  })();
  return state.promise;
}

// Age on the current calendar day for a birth year (negative = v.d.L.) and birthday (doy 1..224).
// null if either is missing or the calendar has not been loaded yet.
function fromBirth(jahr, doy) {
  if (!state.loaded || jahr == null || jahr === '' || !(doy > 0)) return null;
  const by = parseInt(jahr, 10);
  if (isNaN(by) || by === 0) return null;
  const today = state.today;
  // the landing day counts as the very end of year -1
  const ty = today === 0 ? -1 : yearOf(today);
  const todayDoy = today === 0 ? YEAR_DAYS + 1 : today > 0 ? ((today - 1) % YEAR_DAYS) + 1 : today - ty * YEAR_DAYS + 1;
  let years = ty - by;
  if (by < 0 && ty > 0) years -= 1;   // no year 0
  if (todayDoy < doy) years -= 1;
  return Math.max(0, years);
}

// Current age. Uses the birth date when present, else the stored age rolled forward from its
// reference day. Returns the stored value unchanged if it is not a number or nothing is loaded yet.
function age(stored, refAbs, geburtstagDoy, geburtstagJahr) {
  const born = fromBirth(geburtstagJahr, geburtstagDoy);
  if (born != null) return typeof stored === 'string' ? String(born) : born;
  const n = parseInt(stored, 10);
  if (isNaN(n) || !state.loaded) return stored;
  const ref = refAbs != null ? refAbs : state.basis;
  if (ref == null) return stored;
  const today = state.today;
  let years;
  if (geburtstagDoy > 0) {
    years = today >= ref ? birthdaysBetween(ref, today, geburtstagDoy) : -birthdaysBetween(today, ref, geburtstagDoy);
  } else {
    years = Math.floor((today - ref) / YEAR_DAYS);
  }
  const result = Math.max(0, n + years);
  return typeof stored === 'string' ? String(result) : result;
}

function yearLabel(y) {
  if (y == null || y === '') return '';
  return y < 0 ? `Jahr ${-y} v.d.L.` : `Jahr ${y} n.d.L.`;
}

function useReady() {
  const [, setReady] = React.useState(state.loaded);
  React.useEffect(() => {
    let on = true;
    load().then(() => on && setReady(true));
    return () => { on = false; };
  }, []);
}

// number + era select; value is an integer (negative = v.d.L.) or null
function BirthYearField({ value, onChange, inputStyle }) {
  const [era, setEra] = React.useState(value != null && value < 0 ? 'vdl' : 'ndl');
  const shown = value == null ? '' : Math.abs(value);
  const emit = (raw, e) => {
    const n = parseInt(raw, 10);
    if (isNaN(n) || n === 0) { onChange(null); return; }
    onChange(e === 'vdl' ? -Math.abs(n) : Math.abs(n));
  };
  return (
    <div style={{ display: 'flex', gap: 5 }}>
      <input type="text" inputMode="numeric" maxLength={4} value={shown} placeholder="Jahr"
        onChange={ev => emit(ev.target.value.replace(/D/g, ''), era)}
        style={{ ...inputStyle, flex: 1, minWidth: 0 }} />
      <select value={era} onChange={ev => { setEra(ev.target.value); if (value != null) emit(shown, ev.target.value); }}
        style={{ ...inputStyle, flex: 'none', width: 'auto', cursor: 'pointer' }}>
        <option value="ndl" style={{ background: 'rgb(var(--panel-rgb))' }}>n.d.L.</option>
        <option value="vdl" style={{ background: 'rgb(var(--panel-rgb))' }}>v.d.L.</option>
      </select>
    </div>
  );
}

const PICKER_MONTHS = [
  { name: 'Janvar', days: 19, sign: 'Die Arche' }, { name: 'Fevorn', days: 18, sign: 'Die Böe' },
  { name: 'Mareth', days: 19, sign: 'Die Wurzel' }, { name: 'Aprel', days: 19, sign: 'Die Linse' },
  { name: 'Mairen', days: 18, sign: 'Die Stille' }, { name: 'Junvar', days: 19, sign: 'Das Irrlicht' },
  { name: 'Juval', days: 19, sign: 'Die Klinge' }, { name: 'Auvar', days: 19, sign: 'Die Glut' },
  { name: 'Septhar', days: 19, sign: 'Die Brücke' }, { name: 'Oktar', days: 18, sign: 'Der Schleier' },
  { name: 'Novren', days: 18, sign: 'Das Labyrinth' }, { name: 'Derath', days: 19, sign: 'Der Spalt' }
];
const PICKER_STARTS = PICKER_MONTHS.reduce((a, m, i) => { a.push(i === 0 ? 1 : a[i - 1] + PICKER_MONTHS[i - 1].days); return a; }, []);

// doy (1..224) -> { monthIdx, day, month, sign }
function doyParts(doy) {
  if (!(doy > 0)) return null;
  for (let i = PICKER_MONTHS.length - 1; i >= 0; i--) {
    if (doy >= PICKER_STARTS[i]) return { monthIdx: i, day: doy - PICKER_STARTS[i] + 1, month: PICKER_MONTHS[i].name, sign: PICKER_MONTHS[i].sign };
  }
  return null;
}

function birthDateText(doy, jahr) {
  const p = doyParts(doy);
  if (!p) return null;
  return `${p.day}. ${p.month}${jahr != null ? ', ' + yearLabel(jahr) : ''}`;
}

// Date picker on the Meruria calendar: year (n.d.L./v.d.L.), month, day.
// onChange({ doy, jahr }); doy = null clears the date. buttonStyle styles the closed field.
const CHEVRON = right => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: 'auto' }}>
    <path d={right ? 'M3.5 1.5 L7 5 L3.5 8.5' : 'M6.5 1.5 L3 5 L6.5 8.5'} />
  </svg>
);

function BirthDatePicker({ doy, jahr, onChange, buttonStyle }) {
  const [open, setOpen] = React.useState(false);
  const [mo, setMo] = React.useState(0);
  const [era, setEra] = React.useState(jahr != null && jahr < 0 ? 'vdl' : 'ndl');
  const ref = React.useRef(null);
  const j = jahr == null ? null : jahr;

  React.useEffect(() => {
    if (!open) return;
    const h = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [open]);

  const openPicker = () => {
    const p = doyParts(doy);
    setMo(p ? p.monthIdx : 0);
    setEra(j != null && j < 0 ? 'vdl' : 'ndl');
    setOpen(true);
  };
  const setYear = y => onChange({ doy: doy || null, jahr: y });
  const todayYear = () => (state.today == null ? 1 : state.today === 0 ? 1 : yearOf(state.today));
  const step = d => {
    let y = j == null ? todayYear() : j + d;
    if (j != null && y === 0) y = d > 0 ? 1 : -1;   // no year 0
    setEra(y < 0 ? 'vdl' : 'ndl');
    setYear(y);
  };
  const typeYear = (raw, e) => {
    const n = parseInt(raw, 10);
    setYear(isNaN(n) || n === 0 ? null : (e === 'vdl' ? -Math.abs(n) : Math.abs(n)));
  };

  const sel = doyParts(doy);
  const M = PICKER_MONTHS[mo];
  const selDay = sel && sel.monthIdx === mo ? sel.day : null;
  const text = birthDateText(doy, j);
  const small = { fontFamily: 'var(--font-mono, monospace)', fontSize: 8, letterSpacing: '.1em' };
  const chip = on => ({
    ...small, padding: '3px 6px', cursor: 'pointer', borderRadius: 2,
    background: on ? 'rgba(var(--purple-rgb),calc(.28*var(--kp)))' : 'transparent',
    border: `1px solid ${on ? 'rgba(var(--purple-rgb),calc(.55*var(--kp)))' : 'rgba(var(--purple-rgb),calc(.12*var(--kp)))'}`,
    color: on ? 'var(--white)' : 'rgba(var(--text-rgb),calc(.45*var(--kt) + var(--tb)))'
  });
  const stepBtn = {
    ...small, fontSize: 11, width: 24, height: 24, cursor: 'pointer', borderRadius: 2, padding: 0, appearance: 'none', outline: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: 'rgba(var(--purple-rgb),calc(.08*var(--kp)))', border: '1px solid rgba(var(--purple-rgb),calc(.25*var(--kp)))',
    color: 'var(--white)'
  };
  const yearInput = {
    fontFamily: 'var(--font-body)', fontSize: 12, textAlign: 'center', width: 64, padding: '3px 4px', outline: 'none',
    background: 'rgba(var(--bg-rgb),.5)', border: '1px solid rgba(var(--accent-rgb),calc(.2*var(--ka)))', borderRadius: 3, color: 'var(--white)'
  };

  return (
    <div ref={ref} style={{ position: 'relative', flex: 1, minWidth: 0 }}>
      <button type="button" onClick={() => (open ? setOpen(false) : openPicker())}
        style={{ cursor: 'pointer', textAlign: 'left', width: '100%', ...buttonStyle,
          color: text ? (buttonStyle && buttonStyle.color) || 'var(--white)' : 'rgba(var(--text-rgb),calc(.3*var(--kt)))' }}>
        {text || 'Kein Datum'} <span style={{ opacity: .4, fontSize: 10 }}>▾</span>
      </button>
      {open && (
        <div style={{ position: 'absolute', top: 'calc(100% + 4px)', left: 0, zIndex: 1500, width: 'min(330px,92vw)', overflow: 'hidden',
          background: 'rgba(var(--panel-rgb),.99)', border: '1px solid rgba(var(--purple-rgb),calc(.4*var(--kp)))', borderRadius: 4,
          boxShadow: '0 18px 48px rgba(var(--shadow-rgb),calc(.75 * var(--shadow-k)))' }}>
          {/* year */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '9px 8px 7px', borderBottom: '1px solid rgba(var(--purple-rgb),calc(.12*var(--kp)))' }}>
            <button type="button" style={stepBtn} onClick={() => step(-1)} title="Ein Jahr früher">{CHEVRON(false)}</button>
            <input type="text" inputMode="numeric" maxLength={4} placeholder="Jahr" style={yearInput}
              value={j == null ? '' : Math.abs(j)} onChange={e => typeYear(e.target.value.replace(/D/g, ''), era)} />
            <select value={era} style={{ ...yearInput, width: 'auto', cursor: 'pointer' }}
              onChange={e => { setEra(e.target.value); if (j != null) typeYear(Math.abs(j), e.target.value); }}>
              <option value="ndl" style={{ background: 'rgb(var(--panel-rgb))' }}>n.d.L.</option>
              <option value="vdl" style={{ background: 'rgb(var(--panel-rgb))' }}>v.d.L.</option>
            </select>
            <button type="button" style={stepBtn} onClick={() => step(1)} title="Ein Jahr später">{CHEVRON(true)}</button>
          </div>
          {/* month */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 2, padding: '7px 7px 5px', borderBottom: '1px solid rgba(var(--purple-rgb),calc(.12*var(--kp)))' }}>
            {PICKER_MONTHS.map((m, i) => (
              <button key={i} type="button" style={chip(mo === i)} onClick={() => setMo(i)}>{m.name}</button>
            ))}
          </div>
          {/* day */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 2, padding: 7 }}>
            {Array.from({ length: M.days }, (_, i) => i + 1).map(d => {
              const on = selDay === d;
              return (
                <button key={d} type="button" onClick={() => { onChange({ doy: PICKER_STARTS[mo] + d - 1, jahr: j }); setOpen(false); }}
                  style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: 11, padding: '6px 2px', cursor: 'pointer', textAlign: 'center', borderRadius: 2,
                    background: on ? 'rgba(var(--purple-rgb),calc(.42*var(--kp)))' : 'rgba(var(--purple-rgb),calc(.05*var(--kp)))',
                    border: `1px solid ${on ? 'rgba(var(--purple-rgb),calc(.75*var(--kp)))' : 'rgba(var(--purple-rgb),calc(.12*var(--kp)))'}`,
                    color: on ? 'var(--white)' : 'rgba(var(--text-rgb),calc(.8*var(--kt) + var(--tb)))' }}>{d}</button>
              );
            })}
          </div>
          <div style={{ padding: '4px 8px 8px', borderTop: '1px solid rgba(var(--purple-rgb),calc(.1*var(--kp)))', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ ...small, color: 'rgba(var(--accent-rgb),calc(.55*var(--ka) + var(--tb)))', textTransform: 'uppercase' }}>
              {sel ? `Im Zeichen: ${sel.sign}` : ''}
            </span>
            <button type="button" onClick={() => { onChange({ doy: null, jahr: null }); setOpen(false); }}
              style={{ ...small, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(var(--text-rgb),calc(.35*var(--kt) + var(--tb)))',
                background: 'transparent', border: 'none', cursor: 'pointer', padding: '3px 0' }}>Datum entfernen</button>
          </div>
        </div>
      )}
    </div>
  );
}

window.CharAge = { load, today: () => state.today, age, fromBirth, yearLabel, useReady, BirthYearField, BirthDatePicker, doyParts, birthDateText };
load();
