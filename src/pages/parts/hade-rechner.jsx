// Hade-Rechner für die NSC-Erstellung (normale und Monster-NSC), nach den Tabellen der Spielleitung (WorldAnvil):
//  · Nach Wohlstand: 1W20 → Wohlstand; Händler 1W10 × Faktor, Bürger 1W4 × Faktor / 5
//  · Nach Klasse: Würfel × 1.000 Hade (Mönch × 100)
//  · Mit Divisionsrang gibt der Rang die Wohlstandsstufe vor (bleibt änderbar)
// Exposes: window.HadeRechner ({ value, onChange, rang })

;(function () {
const { useState, useEffect } = React;

const WOHLSTAND = [
  { name:'Jämmerlich',  von:1,  bis:1,  faktor:20 },
  { name:'Ärmlich',     von:2,  bis:4,  faktor:50 },
  { name:'Schlecht',    von:5,  bis:8,  faktor:75 },
  { name:'Einfach',     von:9,  bis:13, faktor:100 },
  { name:'Komfortabel', von:14, bis:17, faktor:175 },
  { name:'Wohlhabend',  von:18, bis:19, faktor:250 },
  { name:'Edel',        von:20, bis:20, faktor:500 },
];
const KLASSEN = [
  { name:'Barbar', n:2, w:4, mal:1000 },      { name:'Barde', n:5, w:4, mal:1000 },
  { name:'Druide', n:2, w:4, mal:1000 },      { name:'Hexenmeister', n:4, w:4, mal:1000 },
  { name:'Kämpfer', n:5, w:4, mal:1000 },     { name:'Kleriker', n:5, w:4, mal:1000 },
  { name:'Magier', n:4, w:4, mal:1000 },      { name:'Magieschmied', n:5, w:4, mal:1000 },
  { name:'Mönch', n:5, w:4, mal:100 },        { name:'Paladin', n:5, w:4, mal:1000 },
  { name:'Schurke', n:4, w:4, mal:1000 },     { name:'Waldläufer', n:5, w:4, mal:1000 },
  { name:'Zauberer', n:3, w:4, mal:1000 },
];

// Divisionsrang → Wohlstand (Rang 10 = Einstieg … Rang 1 = Leitung)
const wohlstandFuerRang = r => r >= 10 ? 'Ärmlich' : r >= 8 ? 'Schlecht' : r >= 6 ? 'Einfach' : r >= 4 ? 'Komfortabel' : r >= 2 ? 'Wohlhabend' : 'Edel';

const wuerfel = w => 1 + Math.floor(Math.random() * w);
const fmt = n => Number(n).toLocaleString('de-DE');

const F = { m:'var(--font-m)', b:'var(--font-b)' };
const chip = on => ({
  fontFamily:F.m, fontSize:'11.5px', letterSpacing:'.12em', cursor:'pointer', padding:'6px 11px', borderRadius:3,
  color: on ? 'var(--white)' : 'rgba(var(--text-rgb),calc(.7*var(--kt) + var(--tb)))',
  background: on ? 'rgba(var(--purple-rgb),calc(.22*var(--kp)))' : 'rgba(var(--purple-rgb),calc(.05*var(--kp)))',
  border: '1px solid ' + (on ? 'rgba(var(--accent-rgb),calc(.65*var(--ka)))' : 'rgba(var(--purple-rgb),calc(.25*var(--kp)))'),
});
const btn = { fontFamily:F.m, fontSize:'11.5px', letterSpacing:'.18em', textTransform:'uppercase', cursor:'pointer', padding:'7px 13px', borderRadius:3,
  color:'var(--white)', background:'rgba(var(--purple-rgb),calc(.22*var(--kp)))', border:'1px solid rgba(var(--accent-rgb),calc(.6*var(--ka)))' };
const lbl = { fontFamily:F.m, fontSize:'11px', letterSpacing:'.18em', textTransform:'uppercase', color:'rgba(var(--accent-rgb),calc(.55*var(--ka) + var(--tb)))', marginBottom:6 };

function HadeRechner({ value, onChange, rang = null }) {
  const [art, setArt] = useState('wohlstand');          // wohlstand | klasse
  const [stand, setStand] = useState('Einfach');
  const [wer, setWer] = useState('buerger');             // haendler | buerger
  const [klasse, setKlasse] = useState('Kämpfer');
  const [wurf, setWurf] = useState('');                  // Rechenweg des letzten Wurfs
  const rangStand = rang ? wohlstandFuerRang(rang) : null;
  useEffect(() => { if (rangStand) { setStand(rangStand); setArt('wohlstand'); } }, [rangStand]);

  const standWuerfeln = () => {
    const r = wuerfel(20);
    const s = WOHLSTAND.find(x => r >= x.von && r <= x.bis);
    setStand(s.name);
    setWurf('1W20 = ' + r + ' → ' + s.name);
  };
  const hadeWuerfeln = () => {
    if (art === 'wohlstand') {
      const s = WOHLSTAND.find(x => x.name === stand);
      if (wer === 'haendler') {
        const r = wuerfel(10); const h = r * s.faktor;
        setWurf(s.name + ', Händler: 1W10 (' + r + ') × ' + s.faktor + ' = ' + fmt(h) + ' Hade'); onChange(h);
      } else {
        const r = wuerfel(4); const h = Math.round(r * s.faktor / 5);
        setWurf(s.name + ', Bürger: 1W4 (' + r + ') × ' + s.faktor + ' / 5 = ' + fmt(h) + ' Hade'); onChange(h);
      }
    } else {
      const k = KLASSEN.find(x => x.name === klasse);
      const rs = Array.from({ length: k.n }, () => wuerfel(k.w));
      const sum = rs.reduce((a, b) => a + b, 0); const h = sum * k.mal;
      setWurf(k.name + ': ' + k.n + 'W' + k.w + ' (' + rs.join('+') + ' = ' + sum + ') × ' + fmt(k.mal) + ' = ' + fmt(h) + ' Hade'); onChange(h);
    }
  };

  return (
    <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
      <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
        <button type="button" style={chip(art === 'wohlstand')} onClick={() => setArt('wohlstand')}>Nach Wohlstand</button>
        <button type="button" style={chip(art === 'klasse')} onClick={() => setArt('klasse')}>Nach Klasse</button>
      </div>

      {art === 'wohlstand' ? (
        <div>
          <div style={lbl}>Wohlstand{rangStand ? ' · durch Rang ' + rang + ' vorgegeben: ' + rangStand : ''}</div>
          <div style={{ display:'flex', gap:6, flexWrap:'wrap', alignItems:'center' }}>
            {WOHLSTAND.map(s => <button key={s.name} type="button" style={chip(stand === s.name)} onClick={() => setStand(s.name)}>{s.name}</button>)}
            {!rangStand && <button type="button" style={{ ...btn, background:'transparent' }} onClick={standWuerfeln}>⚄ 1W20</button>}
          </div>
          <div style={{ ...lbl, marginTop:12 }}>Vermögen als</div>
          <div style={{ display:'flex', gap:6 }}>
            <button type="button" style={chip(wer === 'buerger')} onClick={() => setWer('buerger')}>Bürger (1W4 × {WOHLSTAND.find(x => x.name === stand).faktor} / 5)</button>
            <button type="button" style={chip(wer === 'haendler')} onClick={() => setWer('haendler')}>Händler (1W10 × {WOHLSTAND.find(x => x.name === stand).faktor})</button>
          </div>
        </div>
      ) : (
        <div>
          <div style={lbl}>Klasse</div>
          <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
            {KLASSEN.map(k => <button key={k.name} type="button" style={chip(klasse === k.name)} onClick={() => setKlasse(k.name)}
              title={k.n + 'W' + k.w + ' × ' + fmt(k.mal) + ' Hade'}>{k.name}</button>)}
          </div>
        </div>
      )}

      <div style={{ display:'flex', gap:10, alignItems:'center', flexWrap:'wrap' }}>
        <button type="button" style={btn} onClick={hadeWuerfeln}>⚄ Hade würfeln</button>
        <input type="number" min="0" value={value} aria-label="Hade"
          onChange={e => onChange(Math.max(0, parseInt(e.target.value, 10) || 0))}
          style={{ width:130, fontFamily:F.m, fontSize:'14px', color:'var(--white)', background:'rgba(var(--bg-rgb),.55)', border:'1px solid rgba(var(--purple-rgb),calc(.35*var(--kp)))', borderRadius:3, padding:'7px 10px', outline:'none' }} />
        <span style={{ fontFamily:F.m, fontSize:'12px', letterSpacing:'.1em', color:'var(--silver)' }}>Hade</span>
      </div>
      {wurf && <div role="status" style={{ fontFamily:F.b, fontSize:'13px', color:'var(--silver)' }}>{wurf}</div>}
    </div>
  );
}

window.HadeRechner = HadeRechner;

})();
