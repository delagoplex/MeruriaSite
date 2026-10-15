// spiel-gruppen.jsx — „Gruppen unterwegs“ auf der Spiel-Seite (RPC gruppen_status, Migration 062).
// Gruppe = angenommene Bewerbungen einer Mission; missions.spieltag_abs ist ihr aktueller Spieltag.
// Verglichen wird mit dem Kalender-„Heute“: gleich = In der Zeit (grün), dahinter = X Tage zurück (rot).
// Liegt eine Gruppe 7 oder mehr Tage vor der langsamsten Gruppe, ist sie BLOCKIERT.
// Die Spielleitung (dmOn) lässt Gruppen aufbrechen, verschiebt ihren Spieltag und holt sie zurück.
import '../../components/meruria-kalender.jsx';
import '../../components/dm-mode.jsx';

;(function () {
const { useState, useEffect, useCallback } = React;
const K = () => window.MeruriaKalender;
const BLOCK_TAGE = 7;
const GRUEN = 'color-mix(in srgb, #4ade80, rgb(var(--ink-rgb)) var(--cm))';
const ROT = 'color-mix(in srgb, #ff5c5c, rgb(var(--ink-rgb)) var(--cm))';
const GELB = 'color-mix(in srgb, #ffc46b, rgb(var(--ink-rgb)) var(--cm))';

function Schloss({ size = 18 }) {
  return (
    <svg aria-hidden="true" width={size} height={size * 54 / 46} viewBox="0 0 46 54" style={{ display: 'block', flexShrink: 0 }}>
      <path d="M13 24 V16 a10 10 0 0 1 20 0 V24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      <rect x="6" y="23" width="34" height="27" rx="4" fill="currentColor" />
      <circle cx="23" cy="34" r="3.6" fill="rgba(0,0,0,.55)" />
      <rect x="21.4" y="35" width="3.2" height="8" rx="1.4" fill="rgba(0,0,0,.55)" />
    </svg>
  );
}

// Charakterbilder als schräger Streifen (Parallelogramm wie in der Skizze)
function Bilderstreifen({ teilnehmer, grau }) {
  if (!teilnehmer.length) return <div className="grp-streifen leer"><span>Noch niemand angenommen</span></div>;
  return (
    <div className={'grp-streifen' + (grau ? ' grau' : '')}>
      {teilnehmer.map(t => (
        <a key={t.id} className="grp-zelle" href={`/charaktere/steckbrief.html?id=${t.id}`} title={t.name}>
          <span className="grp-zelle-innen">
            {t.bild ? <img src={t.bild} alt="" loading="lazy" /> : <span className="grp-initiale">{(t.name || '?')[0]}</span>}
          </span>
          <span className="grp-name">{t.name}</span>
        </a>
      ))}
    </div>
  );
}

function Status({ g, heute }) {
  const diff = heute - g.spieltag_abs;
  if (g.blockiert) return (
    <div className="grp-status">
      <span className="grp-blockiert" style={{ color: ROT }}><Schloss size={14} /> BLOCKIERT</span>
      <span className="grp-status-text">Die anderen Gruppen müssen zunächst aufholen.</span>
    </div>
  );
  if (diff === 0) return <div className="grp-status"><span className="grp-punkt" style={{ background: GRUEN }} /><span style={{ color: GRUEN }}>In der Zeit</span></div>;
  if (diff > 0) return <div className="grp-status"><span className="grp-punkt" style={{ background: ROT }} /><span style={{ color: ROT }}>{diff} {diff === 1 ? 'Tag' : 'Tage'} zurück</span></div>;
  return <div className="grp-status"><span className="grp-punkt" style={{ background: GELB }} /><span style={{ color: GELB }}>{-diff} {diff === -1 ? 'Tag' : 'Tage'} voraus</span></div>;
}

function GruppenKarte({ g, heute, dmOn, onSpieltag }) {
  return (
    <div className={'grp-karte' + (g.blockiert ? ' blockiert' : '')}>
      <div className="grp-reihe">
        <div className="grp-streifen-wrap">
          <Bilderstreifen teilnehmer={g.teilnehmer} grau={g.blockiert} />
          {g.blockiert && <div className="grp-sperre" style={{ color: ROT }}><Schloss size={22} /><span>BLOCKIERT</span></div>}
        </div>
        <a className="grp-mission" href="/spiel/missionsterminal.html" title="Zum Missionsterminal">
          <span className="grp-mission-name">{g.name}</span>
          <span className="grp-mission-tag">Spieltag · {K().formatKurz(g.spieltag_abs)}</span>
        </a>
      </div>
      <Status g={g} heute={heute} />
      {dmOn && (
        <div className="grp-dm">
          <button type="button" className="erg-knopf klein" onClick={() => onSpieltag(g, g.spieltag_abs - 1)} aria-label="Einen Tag zurück">−1</button>
          <button type="button" className="erg-knopf klein" onClick={() => onSpieltag(g, g.spieltag_abs + 1)} aria-label="Einen Tag weiter">+1</button>
          <button type="button" className="erg-knopf klein" onClick={() => onSpieltag(g, g.spieltag_abs + 7)}>+7</button>
          {g.spieltag_abs !== heute && <button type="button" className="erg-knopf klein" onClick={() => onSpieltag(g, heute)}>Auf Heute</button>}
          <button type="button" className="erg-knopf klein" onClick={() => { if (window.confirm(`Gruppe von „${g.name}“ zurückholen? Sie verschwindet aus dieser Übersicht.`)) onSpieltag(g, null); }}>Zurückholen</button>
        </div>
      )}
    </div>
  );
}

// Spielleitung: Gruppe einer Mission mit angenommenen Bewerbungen aufbrechen lassen
function Aufbruch({ heute, onFertig }) {
  const [missionen, setMissionen] = useState(null);
  const [wahl, setWahl] = useState('');
  useEffect(() => {
    (async () => {
      const { data: ms } = await window._sb.from('missions').select('id,name,status,spieltag_abs').is('spieltag_abs', null).neq('status', 'archiviert');
      const { data: apps } = await window._sb.from('mission_applications').select('mission_id').eq('app_status', 'accepted');
      const mitGruppe = new Set((apps || []).map(a => a.mission_id));
      setMissionen((ms || []).filter(m => mitGruppe.has(m.id)));
    })();
  }, []);
  if (!missionen) return null;
  if (!missionen.length) return <span className="erg-hinweis">Keine weitere Mission mit angenommenen Bewerbungen.</span>;
  const los = async () => {
    if (!wahl) return;
    const { error } = await window._sb.from('missions').update({ spieltag_abs: heute }).eq('id', wahl);
    if (error) { alert('Fehlgeschlagen: ' + error.message); return; }
    setWahl(''); onFertig();
  };
  return (
    <span className="grp-aufbruch">
      <select className="erg-feld" value={wahl} onChange={e => setWahl(e.target.value)} aria-label="Mission">
        <option value="">Mission wählen …</option>
        {missionen.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
      </select>
      <button type="button" className="erg-knopf haupt" disabled={!wahl || heute == null} onClick={los}>Gruppe aufbrechen lassen</button>
    </span>
  );
}

function SpielGruppen() {
  const { isDm, dmOn } = window.useDmMode();
  const heute = K().useHeute();
  const [gruppen, setGruppen] = useState(null);
  const [neu, setNeu] = useState(0);
  const laden = useCallback(async () => {
    const { data, error } = await window._sb.rpc('gruppen_status');
    if (error) { console.error(error); setGruppen([]); return; }
    setGruppen(data || []);
  }, []);
  useEffect(() => { laden(); }, [laden, neu]);

  const spieltag = async (g, wert) => {
    const { error } = await window._sb.from('missions').update({ spieltag_abs: wert }).eq('id', g.mission_id);
    if (error) { alert('Fehlgeschlagen: ' + error.message); return; }
    laden();
  };

  if (gruppen === null || heute == null) return <div className="erg-leer">Gruppen werden geladen …</div>;
  const langsamste = gruppen.length ? Math.min(...gruppen.map(g => g.spieltag_abs)) : null;
  const liste = gruppen.map(g => ({ ...g, blockiert: gruppen.length > 1 && g.spieltag_abs - langsamste >= BLOCK_TAGE }));
  return (
    <div className="grp-wrap">
      {dmOn && <div className="erg-dm-leiste"><Aufbruch key={neu} heute={heute} onFertig={() => setNeu(n => n + 1)} /></div>}
      {!liste.length && <div className="erg-leer">Gerade ist keine Gruppe unterwegs.</div>}
      <div className="grp-liste">
        {liste.map(g => <GruppenKarte key={g.mission_id} g={g} heute={heute} dmOn={dmOn} onSpieltag={spieltag} />)}
      </div>
    </div>
  );
}

window.SpielGruppen = SpielGruppen;
})();
