// Auswahlleiste "Rasse anwenden": Rasse (mit Linie), angeborenes Talent und Waffe für NSC-Statblöcke.
// Rechnet nicht selbst, sondern liefert nur die Auswahl; berechnet wird in window.RasseAnwenden
// (assets/scripts/shared/rasse-anwenden.js).
//   <RassePicker monster={m} value={opt|null} onChange={opt|null => …} compact />
// opt = { rasse, linie, talent, waffe }

;(function () {
const { useMemo } = React;

const MONO = 'var(--font-mono)';
const sel = {
  background: 'rgba(var(--panel-rgb),0.6)', border: '1px solid rgba(var(--purple-rgb),calc(0.3*var(--kp)))', borderRadius: 2,
  color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: 12, padding: '6px 8px', minWidth: 0, cursor: 'pointer',
};
const lab = { fontFamily: MONO, fontSize: 7.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(var(--purple-rgb),calc(0.6*var(--kp) + var(--tb)))', marginBottom: 3 };
const btn = {
  fontFamily: MONO, fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', padding: '7px 11px', borderRadius: 2, cursor: 'pointer',
  border: '1px solid rgba(var(--accent-rgb),calc(0.45*var(--ka)))', background: 'rgba(var(--purple-rgb),calc(0.12*var(--kp)))', color: 'var(--white)',
};

function RassePicker({ monster, value, onChange, compact, layout }) {
  const R = window.RasseAnwenden;
  const opts = useMemo(() => (R ? R.optionen() : []), []);
  const waffen = useMemo(() => (R ? R.waffen() : []), []);
  if (!R || !monster || !R.istRassenfaehig(monster)) return null;

  const v = value || {};
  const key = v.rasse ? (v.linie ? v.rasse + '|' + v.linie : v.rasse) : '';
  const talente = v.rasse ? R.talente({ rasse: v.rasse, linie: v.linie }) : [];

  const set = patch => {
    const n = Object.assign({}, v, patch);
    onChange(n.rasse || n.waffe ? n : null);
  };
  const pickRasse = k => {
    if (!k) return set({ rasse: null, linie: null, talent: null, groesse: null });
    const o = opts.filter(x => x.key === k)[0];
    set({ rasse: o.rasse, linie: o.linie, talent: R.linienTalent(o), groesse: null });
  };
  const groessen = v.rasse ? R.groessen({ rasse: v.rasse, linie: v.linie }) : [];
  // Einzel-Würfel: Rasse (mit Linie), Linie, Talent, Waffe; "Alles" würfelt alles neu
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const linienOpts = v.rasse ? opts.filter(o => o.rasse === v.rasse && o.linie) : [];
  const wuerfelRasse = () => {
    const o = pick(opts), t = R.talente(o), g = R.groessen(o);
    onChange({ rasse: o.rasse, linie: o.linie, talent: R.linienTalent(o) || (t.length ? pick(t) : null), groesse: g.length > 1 ? pick(g) : null, waffe: v.waffe || null });
  };
  const wuerfelLinie = () => {
    const o = pick(linienOpts), lt = R.linienTalent(o);
    set({ linie: o.linie, talent: lt || (R.talente(o).includes(v.talent) ? v.talent : null), groesse: null });
  };
  const wuerfelTalent = () => { if (talente.length) set({ talent: pick(talente) }); };
  const wuerfelWaffe = () => set({ waffe: R.zufallsWaffe(monster) });
  const gruppen = [['Nahkampf · einfach', 'nah', 'Einfach'], ['Nahkampf · Kriegswaffen', 'nah', 'Kriegswaffe'], ['Fernkampf · einfach', 'fern', 'Einfach'], ['Fernkampf · Kriegswaffen', 'fern', 'Kriegswaffe']];

  const grid = layout === 'grid';
  const selW = grid ? { ...sel, flex: 1, width: '100%', boxSizing: 'border-box' } : { ...sel, flex: 1 };
  const die = { ...btn, padding: '0 9px', minWidth: 32, height: 31, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 4, fontSize: 12, letterSpacing: 0, flexShrink: 0 };
  const dieTxt = { fontFamily: MONO, fontSize: 8, letterSpacing: '0.12em', textTransform: 'uppercase' };
  const Feld = ({ label, span, min, children }) => (
    <div style={{ minWidth: 0, gridColumn: grid && span ? '1 / -1' : undefined, flex: grid ? undefined : '1 1 ' + (min || 150) + 'px' }}>
      <div style={lab}>{label}</div>
      <div style={{ display: 'flex', gap: 5, alignItems: 'stretch' }}>{children}</div>
    </div>
  );
  return (
    <div style={grid ? {
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 10px', padding: '2px 0 0',
    } : {
      display: 'flex', gap: 10, alignItems: 'flex-end', flexWrap: 'wrap', padding: compact ? '8px 10px' : '10px 16px',
      borderBottom: '1px solid rgba(var(--purple-rgb),calc(0.18*var(--kp)))', background: 'rgba(var(--purple-rgb),calc(0.05*var(--kp)))', flexShrink: 0,
    }}>
      <Feld label="Rasse" span min={260}>
        <select style={selW} value={key} onChange={e => pickRasse(e.target.value)}>
          <option value="">— keine Rasse —</option>
          {opts.map(o => <option key={o.key} value={o.key}>{o.label}</option>)}
        </select>
        <button style={die} title="Würfelt eine Rasse (mit Linie, Talent, ggf. Größe); die Waffe bleibt" onClick={wuerfelRasse}>⚄</button>
        {linienOpts.length > 0 && <button style={die} title="Würfelt eine andere Linie / Abstammung der Rasse" onClick={wuerfelLinie}>⚄<span style={dieTxt}>Linie</span></button>}
      </Feld>
      <Feld label="Angeborenes Talent" min={170}>
        <select style={{ ...selW, opacity: talente.length ? 1 : 0.5 }} value={v.talent || ''} disabled={!talente.length}
          onChange={e => set({ talent: e.target.value || null })}>
          <option value="">{talente.length ? '— keines —' : '— kein Talent —'}</option>
          {talente.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <button style={{ ...die, opacity: talente.length ? 1 : 0.4 }} disabled={!talente.length} title={talente.length ? 'Würfelt ein angeborenes Talent' : 'Rasse wählen (und sie braucht angeborene Talente)'} onClick={wuerfelTalent}>⚄</button>
      </Feld>
      <Feld label="Waffe" min={170}>
        <select style={selW} value={v.waffe || ''} onChange={e => set({ waffe: e.target.value || null })}>
          <option value="">— wie Vorlage —</option>
          {gruppen.map(g => (
            <optgroup key={g[0]} label={g[0]}>
              {waffen.filter(w => w.typ === g[1] && w.kategorie === g[2]).map(w => <option key={w.name} value={w.name}>{w.name} ({w.wuerfel} {w.schadensart})</option>)}
            </optgroup>
          ))}
        </select>
        <button style={die} title="Würfelt eine Waffe, die den NSC nicht schwächer macht" onClick={wuerfelWaffe}>⚄</button>
      </Feld>
      {groessen.length > 1 && (
        <Feld label="Größe" min={110}>
          <select style={selW} value={v.groesse || groessen[0]} onChange={e => set({ groesse: e.target.value })}>
            {groessen.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </Feld>
      )}
      <div style={{ gridColumn: '1 / -1', display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'space-between', flex: grid ? undefined : '1 1 100%' }}>
        <button style={{ ...btn, display: 'inline-flex', alignItems: 'center', gap: 6 }} title="Rasse, Linie, Talent und Waffe zufällig wählen" onClick={() => onChange(R.zufall(monster))}>⚄ Alles würfeln</button>
        {value && <button style={{ ...btn, background: 'transparent', borderColor: 'transparent', opacity: 0.75 }} title="Auswahl zurücksetzen" onClick={() => onChange(null)}>✕ Zurücksetzen</button>}
      </div>
    </div>
  );
}

window.RassePicker = RassePicker;
})();
