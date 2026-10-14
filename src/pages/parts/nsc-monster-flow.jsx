// Monster-NSC-Erstellung für /charaktererstellung/neuer-charakter.html.
// Die Fragen grenzen die Monsterdatenbank (window.MONSTER_DATA) ein; das gewählte Monster wird als
// NSC mit seinem Statblock (Feld steckbrief) angelegt. Die Monsterdaten werden erst hier nachgeladen.
// Exposes: window.NscMonsterFlow ({ onDone }), window.nscGesinnungGruppen (Gesinnung → Gruppen-IDs)
import '../../components/dm-mode.jsx';

;(function () {
const { useState, useEffect, useMemo } = React;

const MONSTER_SCRIPTS = [
  'monster/monsterhandbuch-data', 'monster/foliant-der-feinde-data', 'monster/schatzkammer-der-drachen-data',
  'monster/almanach-der-monster-data', 'monster/floral-dragons-data', 'monster/ruhm-der-riesen-data',
  'monster/drakkenheim-data', 'monster/flee-mortals-data', 'monster/avernus-data', 'monster/tome-of-beasts-data',
  'monster/tome-of-beasts-2-data', 'monster/sonstige-data', 'monster-data',
].map(n => '/assets/scripts/data/' + n + '.js').concat(['/assets/scripts/shared/statblock-steckbrief.js']);

// Vier Gesinnungs-Antworten; die neutralen überlappen bewusst (Neutral gilt für beide)
const GESINNUNG_OPTS = [
  { id:'gut',        label:'Gut' },
  { id:'eher-gut',   label:'Neutral – eher gut' },
  { id:'eher-boese', label:'Neutral – eher böse' },
  { id:'boese',      label:'Böse' },
];
// Freitext-Gesinnung (Monster wie NSC) → Set der passenden Antwort-IDs
function gesinnungGruppen(text) {
  const s = String(text || '').toLowerCase();
  const all = new Set(GESINNUNG_OPTS.map(o => o.id));
  if (!s || /gesinnungslos/.test(s)) return new Set(['eher-gut', 'eher-boese']);
  if (/jede|beliebig/.test(s)) {
    if (/nicht gut/.test(s)) return new Set(['eher-gut', 'eher-boese', 'boese']);
    if (/böse/.test(s)) return new Set(['boese', 'eher-boese']);
    if (/neutral/.test(s)) return new Set(['eher-gut', 'eher-boese']);
    return all;
  }
  if (/gut/.test(s)) return new Set(/neutral gut/.test(s) ? ['gut', 'eher-gut'] : ['gut']);
  if (/böse/.test(s)) return new Set(/neutral böse/.test(s) ? ['boese', 'eher-boese'] : ['boese']);
  return new Set(['eher-gut', 'eher-boese']);
}

const kannFliegen = m => Object.keys(m.bewegung || {}).some(k => /^flieg/i.test(k));
const hatResistenzen = m => (m.schadensresistenzen || []).length > 0 || (m.schadensimmunitaeten || []).length > 0;
const hgText = cr => cr === 0.125 ? '1/8' : cr === 0.25 ? '1/4' : cr === 0.5 ? '1/2' : String(cr ?? '—');

const FRAGEN = [
  { key:'gesinnung', frage:'Welche Gesinnung hat dein NSC?',
    optionen:[...GESINNUNG_OPTS.map(o => ({ v:o.id, text:o.label })), { v:null, text:'Egal' }] },
  { key:'fliegen', frage:'Kann dein NSC fliegen?',
    optionen:[{ v:true, text:'Ja' }, { v:false, text:'Nein' }, { v:null, text:'Egal' }] },
  { key:'resistenzen', frage:'Hat dein NSC Resistenzen oder Immunitäten?',
    optionen:[{ v:true, text:'Ja' }, { v:false, text:'Nein' }, { v:null, text:'Egal' }] },
];

function passt(m, a) {
  if (a.gesinnung && !gesinnungGruppen(m.gesinnung).has(a.gesinnung)) return false;
  if (a.fliegen != null && kannFliegen(m) !== a.fliegen) return false;
  if (a.resistenzen != null && hatResistenzen(m) !== a.resistenzen) return false;
  return true;
}

const F = { d:'var(--font-d)', m:'var(--font-m)', b:'var(--font-b)' };
const kicker = { fontFamily:F.m, fontSize:'11.5px', letterSpacing:'.28em', textTransform:'uppercase', color:'rgba(var(--purple-rgb),calc(.5*var(--kp) + var(--tb)))', marginBottom:10 };
const optBtn = on => ({
  fontFamily:F.b, fontSize:'14px', textAlign:'left', cursor:'pointer', padding:'12px 16px', borderRadius:3,
  color: on ? 'var(--white)' : 'rgba(var(--text-rgb),calc(.8*var(--kt) + var(--tb)))',
  background: on ? 'rgba(var(--purple-rgb),calc(.2*var(--kp)))' : 'rgba(var(--purple-rgb),calc(.05*var(--kp)))',
  border: '1px solid ' + (on ? 'rgba(var(--accent-rgb),calc(.7*var(--ka)))' : 'rgba(var(--purple-rgb),calc(.25*var(--kp)))'),
  transition:'all .15s',
});
const smallBtn = { fontFamily:F.m, fontSize:'11.5px', letterSpacing:'.18em', textTransform:'uppercase', cursor:'pointer', padding:'8px 14px', borderRadius:3,
  color:'var(--white)', background:'rgba(var(--purple-rgb),calc(.2*var(--kp)))', border:'1px solid rgba(var(--accent-rgb),calc(.6*var(--ka)))' };
const ghostBtn = { ...smallBtn, background:'transparent', color:'rgba(var(--accent-rgb),calc(.6*var(--ka) + var(--tb)))', border:'1px solid rgba(var(--purple-rgb),calc(.28*var(--kp)))' };

function Zeile({ label, children }) {
  if (children == null || children === '' || (Array.isArray(children) && !children.length)) return null;
  return (
    <div style={{ display:'flex', gap:14, padding:'6px 0', borderBottom:'1px solid rgba(var(--purple-rgb),calc(.1*var(--kp)))' }}>
      <span style={{ fontFamily:F.m, fontSize:'11px', letterSpacing:'.18em', textTransform:'uppercase', color:'rgba(var(--accent-rgb),calc(.5*var(--ka) + var(--tb)))', minWidth:130 }}>{label}</span>
      <span style={{ fontFamily:F.b, fontSize:'13.5px', color:'var(--white)' }}>{children}</span>
    </div>
  );
}

function NscMonsterFlow({ onDone }) {
  const [ready, setReady] = useState(!!window.MONSTER_DATA && !!window.statToSteckbrief);
  const [loadErr, setLoadErr] = useState('');
  const [antworten, setAntworten] = useState({});
  const [schritt, setSchritt] = useState(0);            // 0..FRAGEN.length-1, dann Ergebnis
  const [gewaehlt, setGewaehlt] = useState(null);
  const [direkt, setDirekt] = useState('');
  const [suche, setSuche] = useState('');
  const [name, setName] = useState('');
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState('');
  const [fertig, setFertig] = useState(null);

  useEffect(() => {
    if (ready) return;
    window.loadDmScripts(MONSTER_SCRIPTS).then(() => setReady(true)).catch(e => setLoadErr(e.message));
  }, [ready]);

  // Rekrutierungs-NSCs sind Menschen-NSC-Vorlagen und gehören in die normale Erstellung
  const alle = useMemo(() => ready ? (window.MONSTER_DATA || []).filter(m => m.source !== 'Rekrutierung') : [], [ready]);
  const treffer = useMemo(() => alle.filter(m => passt(m, antworten)), [alle, antworten]);
  const liste = useMemo(() => {
    const q = suche.trim().toLowerCase();
    return (q ? treffer.filter(m => m.name.toLowerCase().includes(q) || String(m.art || '').toLowerCase().includes(q)) : treffer);
  }, [treffer, suche]);

  const imErgebnis = schritt >= FRAGEN.length;
  const antworte = (key, v) => {
    setAntworten(a => ({ ...a, [key]: v }));
    setSchritt(s => s + 1);
  };
  const waehleDirekt = (n) => {
    setDirekt(n);
    const m = alle.find(x => x.name === n);
    if (m) { setGewaehlt(m); setSchritt(FRAGEN.length); }
  };
  const wuerfeln = () => { if (treffer.length) setGewaehlt(treffer[Math.floor(Math.random() * treffer.length)]); };

  async function speichern() {
    if (!gewaehlt || !name.trim() || saving) return;
    setSaving(true); setErr('');
    const m = gewaehlt;
    const { error } = await window._sb.from('nscs').insert({
      name: name.trim(),
      rasse: m.name,
      gesinnung: m.gesinnung || null,
      status: ['Lebendig'],
      visible: false,
      sections: ['statblock'],
      steckbrief: window.statToSteckbrief(m, 'Monster-NSC'),
      field_visibility: {},
    });
    setSaving(false);
    if (error) { setErr('Speichern fehlgeschlagen: ' + error.message); return; }
    setFertig(name.trim());
  }

  const wrap = { maxWidth:920, margin:'0 auto', padding:'44px 32px 80px', animation:'slideUp .4s ease' };

  if (fertig) return (
    <div style={{ ...wrap, textAlign:'center' }}>
      <div style={kicker}>◈ Monster-NSC angelegt</div>
      <h2 style={{ fontFamily:F.d, fontSize:'22px', fontWeight:300, letterSpacing:'.2em', color:'var(--white)', marginBottom:18 }}>„{fertig}“ wurde angelegt.</h2>
      <p style={{ fontFamily:F.b, fontSize:'13.5px', color:'var(--silver)', marginBottom:22 }}>Der NSC ist zunächst für Spieler verborgen und trägt den Statblock von {gewaehlt.name}.</p>
      <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
        <a href="/spiel/kontakte.html" style={{ ...smallBtn, textDecoration:'none' }}>Zu den Kontakten</a>
        <button type="button" onClick={onDone} style={ghostBtn}>Weiteren Charakter erstellen</button>
      </div>
    </div>
  );

  if (loadErr) return <div style={wrap}><div style={kicker}>Monsterdaten konnten nicht geladen werden: {loadErr}</div></div>;
  if (!ready) return <div style={wrap}><div style={kicker}>◈ Lade Monsterdatenbank …</div></div>;

  const frage = FRAGEN[schritt];
  return (
    <div style={wrap}>
      <div style={kicker}>Monster-NSC · {imErgebnis ? 'Auswahl' : `Frage ${schritt + 1} von ${FRAGEN.length}`} · {treffer.length} passende Monster</div>

      {/* Direktauswahl ist jederzeit möglich */}
      <div style={{ display:'flex', alignItems:'center', gap:10, flexWrap:'wrap', marginBottom:30 }}>
        <span style={{ fontFamily:F.m, fontSize:'11px', letterSpacing:'.2em', textTransform:'uppercase', color:'rgba(var(--accent-rgb),calc(.55*var(--ka) + var(--tb)))' }}>Direkt wählen</span>
        <input list="nsc-monster-namen" value={direkt} onChange={e => waehleDirekt(e.target.value)} placeholder="Monster suchen …"
          style={{ fontFamily:F.b, fontSize:'13.5px', color:'var(--white)', background:'rgba(var(--bg-rgb),.55)', border:'1px solid rgba(var(--purple-rgb),calc(.35*var(--kp)))', borderRadius:3, padding:'8px 12px', minWidth:280, outline:'none' }} />
        <datalist id="nsc-monster-namen">{alle.map(m => <option key={m.name + m.source} value={m.name} />)}</datalist>
      </div>

      {!imErgebnis && (
        <div>
          <h2 style={{ fontFamily:F.d, fontSize:'clamp(16px,3vw,24px)', fontWeight:300, letterSpacing:'.14em', color:'var(--white)', marginBottom:20 }}>{frage.frage}</h2>
          <div style={{ display:'flex', flexDirection:'column', gap:8, maxWidth:520 }}>
            {frage.optionen.map(o => (
              <button key={String(o.v)} type="button" style={optBtn(antworten[frage.key] === o.v && frage.key in antworten)} onClick={() => antworte(frage.key, o.v)}>
                {o.text}
                {o.v != null && <span style={{ float:'right', fontFamily:F.m, fontSize:'11px', color:'rgba(var(--accent-rgb),calc(.5*var(--ka) + var(--tb)))' }}>
                  {alle.filter(m => passt(m, { ...antworten, [frage.key]: o.v })).length}
                </span>}
              </button>
            ))}
          </div>
          <div style={{ display:'flex', gap:10, marginTop:24 }}>
            {schritt > 0 && <button type="button" style={ghostBtn} onClick={() => setSchritt(s => s - 1)}>← Vorherige Frage</button>}
            <button type="button" style={ghostBtn} onClick={() => setSchritt(FRAGEN.length)}>Zur Auswahl →</button>
          </div>
        </div>
      )}

      {imErgebnis && (
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:24 }}>
          <div>
            <div style={{ display:'flex', gap:8, marginBottom:10, flexWrap:'wrap' }}>
              <input value={suche} onChange={e => setSuche(e.target.value)} placeholder="In den Treffern suchen …"
                style={{ flex:1, minWidth:160, fontFamily:F.b, fontSize:'13px', color:'var(--white)', background:'rgba(var(--bg-rgb),.55)', border:'1px solid rgba(var(--purple-rgb),calc(.3*var(--kp)))', borderRadius:3, padding:'7px 10px', outline:'none' }} />
              <button type="button" style={smallBtn} onClick={wuerfeln} disabled={!treffer.length}>⚄ Würfeln</button>
              <button type="button" style={ghostBtn} onClick={() => { setSchritt(0); setAntworten({}); setGewaehlt(null); setDirekt(''); }}>Neu fragen</button>
            </div>
            <div style={{ maxHeight:460, overflowY:'auto', border:'1px solid rgba(var(--purple-rgb),calc(.18*var(--kp)))', borderRadius:3 }}>
              {liste.slice(0, 300).map(m => {
                const on = gewaehlt === m;
                return (
                  <button key={m.name + m.source} type="button" onClick={() => setGewaehlt(m)}
                    style={{ display:'flex', width:'100%', justifyContent:'space-between', gap:10, textAlign:'left', cursor:'pointer', padding:'8px 12px', border:'none',
                      borderBottom:'1px solid rgba(var(--purple-rgb),calc(.08*var(--kp)))',
                      background: on ? 'rgba(var(--purple-rgb),calc(.2*var(--kp)))' : 'transparent', color: on ? 'var(--white)' : 'rgba(var(--text-rgb),calc(.8*var(--kt) + var(--tb)))' }}>
                    <span style={{ fontFamily:F.b, fontSize:'13.5px' }}>{m.name}</span>
                    <span style={{ fontFamily:F.m, fontSize:'11px', color:'rgba(var(--accent-rgb),calc(.5*var(--ka) + var(--tb)))', whiteSpace:'nowrap' }}>{m.art} · HG {hgText(m.cr)}</span>
                  </button>
                );
              })}
              {liste.length === 0 && <div style={{ padding:16, fontFamily:F.b, fontSize:'13px', color:'var(--silver)' }}>Kein Monster passt. „Neu fragen“ oder die Direktauswahl nutzen.</div>}
              {liste.length > 300 && <div style={{ padding:10, fontFamily:F.m, fontSize:'11px', color:'var(--silver)' }}>… {liste.length - 300} weitere, Suche verfeinern</div>}
            </div>
          </div>

          <div>
            {!gewaehlt ? (
              <div style={{ padding:24, border:'1px dashed rgba(var(--purple-rgb),calc(.3*var(--kp)))', borderRadius:3, fontFamily:F.b, fontSize:'13.5px', color:'var(--silver)' }}>
                Monster links auswählen oder würfeln.
              </div>
            ) : (
              <div style={{ padding:'18px 20px', border:'1px solid rgba(var(--accent-rgb),calc(.4*var(--ka)))', borderRadius:4, background:'rgba(var(--panel-rgb),.6)' }}>
                <div style={kicker}>{gewaehlt.source}</div>
                <h3 style={{ fontFamily:F.d, fontSize:'20px', fontWeight:400, letterSpacing:'.1em', color:'var(--white)', marginBottom:12 }}>{gewaehlt.name}</h3>
                <Zeile label="Art">{[gewaehlt.groesse, gewaehlt.art, gewaehlt.unterart].filter(Boolean).join(' · ')}</Zeile>
                <Zeile label="Gesinnung">{gewaehlt.gesinnung}</Zeile>
                <Zeile label="HG">{hgText(gewaehlt.cr)}</Zeile>
                <Zeile label="RK · TP">{`${gewaehlt.rk ?? '—'} · ${gewaehlt.tp ?? '—'}`}</Zeile>
                <Zeile label="Bewegung">{Object.entries(gewaehlt.bewegung || {}).map(([k, v]) => k + ' ' + v).join(', ')}</Zeile>
                <Zeile label="Resistenzen">{(gewaehlt.schadensresistenzen || []).join(', ')}</Zeile>
                <Zeile label="Immunitäten">{(gewaehlt.schadensimmunitaeten || []).join(', ')}</Zeile>
                <div style={{ marginTop:18 }}>
                  <div style={{ fontFamily:F.m, fontSize:'11px', letterSpacing:'.2em', textTransform:'uppercase', color:'rgba(var(--accent-rgb),calc(.55*var(--ka) + var(--tb)))', marginBottom:6 }}>Name des NSC *</div>
                  <input value={name} onChange={e => setName(e.target.value)} placeholder="z. B. Graugeist am Hafen"
                    style={{ width:'100%', fontFamily:F.d, fontSize:'15px', letterSpacing:'.08em', color:'var(--white)', background:'rgba(var(--bg-rgb),.55)', border:'1px solid rgba(var(--purple-rgb),calc(.35*var(--kp)))', borderRadius:3, padding:'9px 12px', outline:'none' }} />
                  <button type="button" onClick={speichern} disabled={!name.trim() || saving}
                    style={{ ...smallBtn, marginTop:12, opacity: !name.trim() || saving ? .55 : 1, cursor: !name.trim() || saving ? 'not-allowed' : 'pointer' }}>
                    {saving ? 'Speichern …' : name.trim() ? 'Monster-NSC anlegen →' : 'Name erforderlich'}
                  </button>
                  {err && <div role="alert" style={{ marginTop:10, fontFamily:F.b, fontSize:'13px', color:'color-mix(in srgb, rgba(240,130,130,.95), rgb(var(--ink-rgb)) var(--cm))' }}>{err}</div>}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

window.NscMonsterFlow = NscMonsterFlow;
window.nscGesinnungGruppen = gesinnungGruppen;

})();
