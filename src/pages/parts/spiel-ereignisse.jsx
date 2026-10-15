// spiel-ereignisse.jsx — „Kürzliche Ereignisse“ auf der Spiel-Seite (Tabellen ereignisse / ereignis_kommentare, 062/063).
// Karten im Stil von Benachrichtigungen mit Meruria-Datum. Text ist Klartext mit Link-Tokens [[art:id|Name]]
// (sc, nsc, res, gott, div, mission), gerendert ohne HTML. Spieler kommentieren als einer ihrer eigenen SC.
// Die Spielleitung (dmOn) schreibt, bearbeitet und löscht Ereignisse und schaltet die automatischen Arten.
import '../../components/meruria-kalender.jsx';
import '../../components/dm-mode.jsx';
import '../../components/image-upload.jsx';

;(function () {
const { useState, useEffect, useRef, useCallback } = React;
const K = () => window.MeruriaKalender;
const SEITE = 20;

const ARTEN = {
  manuell:     { label: 'Ereignis',         glyph: '✦', farbe: '#b9a4ff' },
  mission:     { label: 'Missionsterminal', glyph: '⬡', farbe: '#7fb8ff' },
  beitritt:    { label: 'Gruppe',           glyph: '◈', farbe: '#5ee8d0' },
  gruppe:      { label: 'Aufbruch',         glyph: '➶', farbe: '#ffc46b' },
  charakter:   { label: 'Charaktere',       glyph: '☉', farbe: '#ff9ad0' },
  kollektikon: { label: 'Kollektikon',      glyph: '❖', farbe: '#7ee08a' },
};
const AUTO_ARTEN = [
  ['mission', 'Neue Mission veröffentlicht'],
  ['beitritt', 'Bewerbung angenommen'],
  ['gruppe', 'Gruppe bricht auf'],
  ['charakter', 'Charakter freigeschaltet'],
  ['kollektikon', 'Neufund im Kollektikon'],
];
const farbe = c => `color-mix(in srgb, ${c}, rgb(var(--ink-rgb)) var(--cm))`;

/* ── Link-Tokens ───────────────────────────────────────────────────────── */
const TOKEN = /\[\[(sc|nsc|res|gott|div|mission):([^|\]]+)\|([^\]]*)\]\]/g;
const LINK_ARTEN = {
  sc:      { label: 'SC',          ziel: id => `/charaktere/steckbrief.html?id=${encodeURIComponent(id)}`, farbe: '#ff9ad0' },
  nsc:     { label: 'NSC',         ziel: () => '/spiel/kontakte.html',                                       farbe: '#ffc46b' },
  res:     { label: 'Ressource',   ziel: () => '/spiel/kollektikon.html',                                    farbe: '#7ee08a' },
  gott:    { label: 'Gottheit',    ziel: id => `/enzyklopaedie/gottheiten.html?gottheit=${encodeURIComponent(id)}`, farbe: '#e9c46a' },
  div:     { label: 'Division',    ziel: id => /^[a-z]+$/.test(id) ? `/divisionen/${id}.html` : '/divisionen/index.html', farbe: '#7fb8ff' },
  mission: { label: 'Mission',     ziel: () => '/spiel/missionsterminal.html',                               farbe: '#b9a4ff' },
};
const tokenText = (art, id, name) => `[[${art}:${id}|${String(name || '').replace(/[[\]|]/g, '')}]]`;

function EreignisText({ text }) {
  const teile = [];
  let last = 0, m, i = 0;
  TOKEN.lastIndex = 0;
  while ((m = TOKEN.exec(text || ''))) {
    if (m.index > last) teile.push(text.slice(last, m.index));
    const a = LINK_ARTEN[m[1]];
    teile.push(
      <a key={'l' + (i++)} href={a.ziel(m[2])} className="erg-link" style={{ '--erg-link': farbe(a.farbe) }} title={a.label}>{m[3] || a.label}</a>
    );
    last = m.index + m[0].length;
  }
  if (last < (text || '').length) teile.push(text.slice(last));
  return <div className="erg-text">{teile}</div>;
}

/* ── Datum ─────────────────────────────────────────────────────────────── */
function relativ(tag, heute) {
  if (heute == null) return '';
  const d = heute - tag;
  if (d === 0) return 'heute';
  if (d === 1) return 'gestern';
  if (d > 1) return `vor ${d} Tagen`;
  return d === -1 ? 'morgen' : `in ${-d} Tagen`;
}

/* ── Bilder mit Vergrößerung ───────────────────────────────────────────── */
function Bilder({ bilder, onEntfernen }) {
  const [gross, setGross] = useState(null);
  if (!bilder || !bilder.length) return null;
  return (
    <div className="erg-bilder">
      {bilder.map((b, i) => (
        <div key={b + i} className="erg-bild">
          <img src={b} alt="" loading="lazy" onClick={() => setGross(b)} />
          {onEntfernen && <button type="button" className="erg-bild-weg" onClick={() => onEntfernen(i)} aria-label="Bild entfernen">✕</button>}
        </div>
      ))}
      {gross && ReactDOM.createPortal(
        <div className="erg-lightbox" onClick={() => setGross(null)} role="dialog" aria-label="Bild">
          <img src={gross} alt="" />
        </div>, document.body)}
    </div>
  );
}

/* ── Verlinken: Suche über SC, NSC, Ressourcen, Gottheiten, Divisionen, Missionen ── */
const RES_SCRIPTS = [
  'assets/scripts/data/resources/ff14_fish-data.js',
  'assets/scripts/data/resources/mineralien/ff14_mineralien-data.js',
  'assets/scripts/data/resources/pflanzen/ff14_pflanzen-data.js',
  'assets/scripts/data/resources/pflanzen/fantasy_plant-data.js',
  'assets/scripts/data/resources/insekten/insekten-data.js',
];
let resPromise = null;
function ladeRessourcen() {
  if (!resPromise) resPromise = Promise.all(RES_SCRIPTS.map(src => new Promise(ok => {
    const s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = ok; document.head.appendChild(s);
  }))).then(() => [
    ...(window.FISH_DB || []).map(f => ({ id: 'fische/' + f.id, name: f.name_de, sub: 'Fisch' })),
    ...[...(window.PFLANZEN_DB || []), ...(window.FANTASY_PLANT_DB || [])].map(p => ({ id: 'pflanzen/' + p.id, name: p.name_de, sub: 'Pflanze' })),
    ...(window.MINERALIEN_DB || []).map(m => ({ id: 'mineralien/' + m.id, name: m.name_de, sub: 'Mineral' })),
    ...(window.INSEKTEN_DB || []).map(x => ({ id: 'insekten/' + x.id, name: x.name_de, sub: 'Insekt' })),
  ].filter(e => e.name));
  return resPromise;
}

function LinkDialog({ onWahl, onClose }) {
  const [art, setArt] = useState('sc');
  const [q, setQ] = useState('');
  const [listen, setListen] = useState({});
  useEffect(() => {
    let aktiv = true;
    const setze = (k, v) => aktiv && setListen(l => ({ ...l, [k]: v }));
    if (art === 'sc' && !listen.sc) window._sb.from('characters').select('id,name,char_data').eq('type', 'spieler').order('name')
      .then(({ data }) => setze('sc', (data || []).map(c => ({ id: c.id, name: c.name, sub: c.char_data?.race || '', bild: c.char_data?.bild }))));
    if (art === 'nsc' && !listen.nsc) window._sb.from('nsc_public_directory').select('id,name,division').order('name')
      .then(({ data }) => setze('nsc', (data || []).filter(n => n.name).map(n => ({ id: n.id, name: n.name, sub: n.division || '' }))));
    if (art === 'mission' && !listen.mission) window._sb.from('missions').select('id,name,status').order('created_at', { ascending: false })
      .then(({ data }) => setze('mission', (data || []).map(m => ({ id: m.id, name: m.name, sub: m.status === 'archiviert' ? 'archiviert' : '' }))));
    if (art === 'res' && !listen.res) ladeRessourcen().then(l => setze('res', l));
    if (art === 'gott' && !listen.gott) {
      const G = window.GODS_DATA || {};
      setze('gott', [...(G.gods || []), ...(G.demons || []), ...(G.naturgeister || [])].map(g => ({ id: g.id, name: g.name, sub: g.title || '' })));
    }
    if (art === 'div' && !listen.div) setze('div', (window.DIVISIONS_DATA || []).map(d => ({ id: d.id, name: d.name, sub: d.nummer || '', bild: d.logo })));
    return () => { aktiv = false; };
  }, [art]);
  useEffect(() => {
    const k = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [onClose]);
  const liste = listen[art];
  const such = q.trim().toLowerCase();
  const treffer = (liste || []).filter(e => !such || (e.name + ' ' + (e.sub || '')).toLowerCase().includes(such)).slice(0, 60);
  return ReactDOM.createPortal(
    <div className="erg-dialog-hg" onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="erg-dialog" role="dialog" aria-label="Verlinken">
        <div className="erg-dialog-kopf">Verlinken</div>
        <div className="erg-reiter">
          {Object.entries(LINK_ARTEN).map(([k, a]) => (
            <button key={k} type="button" className={'erg-reiter-k' + (art === k ? ' an' : '')} onClick={() => { setArt(k); setQ(''); }}>{a.label}</button>
          ))}
        </div>
        <input autoFocus className="erg-feld" value={q} onChange={e => setQ(e.target.value)} placeholder="Suchen …" aria-label="Suchen" />
        <div className="erg-trefferliste">
          {!liste && <div className="erg-leer">Wird geladen …</div>}
          {liste && !treffer.length && <div className="erg-leer">Nichts gefunden.</div>}
          {treffer.map(e => (
            <button key={e.id} type="button" className="erg-treffer" onClick={() => onWahl(tokenText(art, e.id, e.name))}>
              {e.bild ? <img src={e.bild} alt="" loading="lazy" /> : <span className="erg-treffer-glyph" style={{ color: farbe(LINK_ARTEN[art].farbe) }}>◆</span>}
              <span className="erg-treffer-name">{e.name}</span>
              {e.sub && <span className="erg-treffer-sub">{e.sub}</span>}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
          <button type="button" className="erg-knopf" onClick={onClose}>Schließen</button>
        </div>
      </div>
    </div>, document.body);
}

/* ── Editor der Spielleitung ───────────────────────────────────────────── */
function EreignisEditor({ start, heute, onGespeichert, onAbbrechen }) {
  const [titel, setTitel] = useState(start?.titel || '');
  const [text, setText] = useState(start?.text || '');
  const [tag, setTag] = useState(start?.tag_abs ?? heute ?? 14);
  const [bilder, setBilder] = useState(start?.bilder || []);
  const [link, setLink] = useState(false);
  const [busy, setBusy] = useState(false);
  const [fehler, setFehler] = useState('');
  const ta = useRef(null);
  const ordner = useRef(start?.id || ('neu-' + Date.now()));
  useEffect(() => { const el = ta.current; if (el) { el.style.height = 'auto'; el.style.height = el.scrollHeight + 2 + 'px'; } }, [text]);

  const einfuegen = token => {
    const el = ta.current;
    const a = el ? el.selectionStart : text.length, b = el ? el.selectionEnd : text.length;
    const neu = text.slice(0, a) + token + text.slice(b);
    setText(neu); setLink(false);
    setTimeout(() => { if (el) { el.focus(); el.selectionStart = el.selectionEnd = a + token.length; } }, 0);
  };
  const speichern = async () => {
    if (!titel.trim() && !text.trim()) { setFehler('Titel oder Text fehlt.'); return; }
    setBusy(true); setFehler('');
    const daten = { titel: titel.trim(), text: text.trim(), tag_abs: tag, bilder };
    const { error } = start?.id
      ? await window._sb.from('ereignisse').update(daten).eq('id', start.id)
      : await window._sb.from('ereignisse').insert({ ...daten, art: 'manuell' });
    setBusy(false);
    if (error) { setFehler('Speichern fehlgeschlagen: ' + error.message); return; }
    onGespeichert();
  };
  const IU = window.ImageUpload;
  return (
    <div className="erg-editor">
      <div className="erg-editor-zeile">
        <input className="erg-feld erg-titel-feld" value={titel} onChange={e => setTitel(e.target.value)} placeholder="Titel" aria-label="Titel" />
        <div className="erg-datum" aria-label="Meruria-Datum">
          <button type="button" className="erg-knopf klein" onClick={() => setTag(t => t - 1)} aria-label="Einen Tag früher">−</button>
          <span className="erg-datum-text">{K().formatKurz(tag)}</span>
          <button type="button" className="erg-knopf klein" onClick={() => setTag(t => t + 1)} aria-label="Einen Tag später">+</button>
          {heute != null && tag !== heute && <button type="button" className="erg-knopf klein" onClick={() => setTag(heute)}>Heute</button>}
        </div>
      </div>
      <div className="erg-werkzeuge">
        <button type="button" className="erg-knopf" onClick={() => setLink(true)}>⛓ Verlinken</button>
        <span className="erg-hinweis">Charaktere, NSC, Ressourcen, Gottheiten, Divisionen und Missionen werden als Link eingefügt.</span>
      </div>
      <textarea ref={ta} className="erg-feld erg-textfeld" value={text} onChange={e => setText(e.target.value)} rows={3}
        placeholder="Was ist passiert?" aria-label="Text" />
      <div className="erg-editor-bilder">
        <Bilder bilder={bilder} onEntfernen={i => setBilder(b => b.filter((_, j) => j !== i))} />
        {IU && <IU bucket="karte-bilder" pathPrefix={'ereignisse/' + ordner.current} width={96} height={96}
          imageUrl={null} onUploaded={url => setBilder(b => [...b, url])} />}
      </div>
      {text.trim() && <div className="erg-vorschau"><div className="erg-hinweis">Vorschau</div><EreignisText text={text} /></div>}
      {fehler && <div className="erg-fehler">{fehler}</div>}
      <div className="erg-editor-zeile" style={{ justifyContent: 'flex-end' }}>
        <button type="button" className="erg-knopf" onClick={onAbbrechen}>Abbrechen</button>
        <button type="button" className="erg-knopf haupt" disabled={busy} onClick={speichern}>{busy ? 'Speichern …' : (start?.id ? 'Änderungen speichern' : 'Ereignis veröffentlichen')}</button>
      </div>
      {link && <LinkDialog onWahl={einfuegen} onClose={() => setLink(false)} />}
    </div>
  );
}

/* ── Automatische Ereignisse an/aus ────────────────────────────────────── */
function AutoSchalter() {
  const [werte, setWerte] = useState(null);
  useEffect(() => {
    window._sb.from('settings').select('value').eq('key', 'ereignisse_auto').maybeSingle().then(({ data }) => {
      let v = {}; try { v = JSON.parse(data?.value || '{}'); } catch (e) { /* ungültig → alle an */ }
      setWerte(v);
    });
  }, []);
  if (!werte) return null;
  const an = k => werte[k] !== false;
  const umschalten = async k => {
    const neu = { ...werte, [k]: !an(k) };
    setWerte(neu);
    await window._sb.from('settings').upsert({ key: 'ereignisse_auto', value: JSON.stringify(neu) }, { onConflict: 'key' });
  };
  return (
    <div className="erg-auto">
      <span className="erg-hinweis">Automatisch:</span>
      {AUTO_ARTEN.map(([k, label]) => (
        <button key={k} type="button" className={'erg-auto-k' + (an(k) ? ' an' : '')} aria-pressed={an(k)} onClick={() => umschalten(k)}
          title={an(k) ? 'An – klicken zum Ausschalten' : 'Aus – klicken zum Einschalten'}>
          <span style={{ color: farbe(ARTEN[k].farbe) }}>{ARTEN[k].glyph}</span> {label}
        </button>
      ))}
    </div>
  );
}

/* ── Kommentare ────────────────────────────────────────────────────────── */
function Kommentare({ ereignisId, kommentare, meineChars, istDm, onNeu }) {
  const [text, setText] = useState('');
  const [charId, setCharId] = useState(meineChars[0]?.id || '');
  const [bearbeite, setBearbeite] = useState(null);
  const [neuText, setNeuText] = useState('');
  const [busy, setBusy] = useState(false);
  const ich = window.SITE_USER?.id;
  useEffect(() => { if (!charId && meineChars[0]) setCharId(meineChars[0].id); }, [meineChars]);
  const senden = async () => {
    if (!text.trim() || !charId) return;
    setBusy(true);
    const { error } = await window._sb.from('ereignis_kommentare').insert({ ereignis_id: ereignisId, character_id: charId, text: text.trim() });
    setBusy(false);
    if (error) { alert('Kommentar konnte nicht gespeichert werden: ' + error.message); return; }
    setText(''); onNeu();
  };
  const speichern = async k => {
    if (!neuText.trim()) return;
    const { error } = await window._sb.from('ereignis_kommentare').update({ text: neuText.trim(), bearbeitet_am: new Date().toISOString() }).eq('id', k.id);
    if (error) { alert('Speichern fehlgeschlagen: ' + error.message); return; }
    setBearbeite(null); onNeu();
  };
  const loeschen = async k => {
    if (!window.confirm('Kommentar löschen?')) return;
    const { error } = await window._sb.from('ereignis_kommentare').delete().eq('id', k.id);
    if (error) { alert('Löschen fehlgeschlagen: ' + error.message); return; }
    onNeu();
  };
  return (
    <div className="erg-kommentare">
      {kommentare.map(k => (
        <div key={k.id} className="erg-kommentar">
          <a className="erg-avatar" href={`/charaktere/steckbrief.html?id=${k.character_id}`} title={k.char_name}>
            {k.char_bild ? <img src={k.char_bild} alt="" /> : <span>{(k.char_name || '?')[0]}</span>}
          </a>
          <div className="erg-kommentar-inhalt">
            <div className="erg-kommentar-kopf">
              <span className="erg-kommentar-name">{k.char_name || 'Unbekannt'}</span>
              <span className="erg-hinweis">{new Date(k.created_at).toLocaleDateString('de-DE')}{k.bearbeitet_am ? ' · bearbeitet' : ''}</span>
              {(k.autor_id === ich || istDm) && bearbeite !== k.id && (
                <span className="erg-kommentar-aktionen">
                  {k.autor_id === ich && <button type="button" onClick={() => { setBearbeite(k.id); setNeuText(k.text); }}>Bearbeiten</button>}
                  <button type="button" onClick={() => loeschen(k)}>Löschen</button>
                </span>
              )}
            </div>
            {bearbeite === k.id ? (
              <div>
                <textarea className="erg-feld erg-kommentar-feld" value={neuText} onChange={e => setNeuText(e.target.value)} rows={2} aria-label="Kommentar bearbeiten" />
                <div className="erg-editor-zeile" style={{ justifyContent: 'flex-end' }}>
                  <button type="button" className="erg-knopf klein" onClick={() => setBearbeite(null)}>Abbrechen</button>
                  <button type="button" className="erg-knopf klein haupt" onClick={() => speichern(k)}>Speichern</button>
                </div>
              </div>
            ) : <div className="erg-kommentar-text">{k.text}</div>}
          </div>
        </div>
      ))}
      {meineChars.length > 0 ? (
        <div className="erg-kommentar-neu">
          {meineChars.length > 1 ? (
            <select className="erg-feld erg-char-wahl" value={charId} onChange={e => setCharId(e.target.value)} aria-label="Als Charakter kommentieren">
              {meineChars.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          ) : <span className="erg-hinweis">als {meineChars[0].name}</span>}
          <textarea className="erg-feld erg-kommentar-feld" value={text} onChange={e => setText(e.target.value)} rows={1}
            placeholder="Kommentar schreiben …" aria-label="Kommentar schreiben"
            onKeyDown={e => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) senden(); }} />
          <button type="button" className="erg-knopf haupt" disabled={busy || !text.trim()} onClick={senden}>Senden</button>
        </div>
      ) : <div className="erg-hinweis">Zum Kommentieren brauchst du einen eigenen Spielercharakter.</div>}
    </div>
  );
}

/* ── Eine Ereigniskarte ───────────────────────────────────────────────── */
function EreignisKarte({ e, heute, kommentare, meineChars, dmOn, istDm, onBearbeiten, onLoeschen, onKommentar }) {
  const [offen, setOffen] = useState(false);
  const a = ARTEN[e.art] || ARTEN.manuell;
  const n = kommentare.length;
  return (
    <article className="erg-karte">
      <div className="erg-karte-kopf">
        <span className="erg-app" style={{ '--erg-app': farbe(a.farbe) }} aria-hidden="true">{a.glyph}</span>
        <span className="erg-quelle">{a.label}</span>
        <span className="erg-zeit" title={K().formatDate(e.tag_abs)}>{K().formatKurz(e.tag_abs)}{heute != null && <em> · {relativ(e.tag_abs, heute)}</em>}</span>
      </div>
      {e.titel && <div className="erg-titel">{e.titel}</div>}
      {e.text && <EreignisText text={e.text} />}
      <Bilder bilder={e.bilder} />
      <div className="erg-karte-fuss">
        <button type="button" className="erg-kommentar-knopf" onClick={() => setOffen(o => !o)} aria-expanded={offen}>
          💬 {n ? `${n} Kommentar${n === 1 ? '' : 'e'}` : 'Kommentieren'}
        </button>
        {dmOn && (
          <span className="erg-kommentar-aktionen">
            <button type="button" onClick={() => onBearbeiten(e)}>Bearbeiten</button>
            <button type="button" onClick={() => onLoeschen(e)}>Löschen</button>
          </span>
        )}
      </div>
      {offen && <Kommentare ereignisId={e.id} kommentare={kommentare} meineChars={meineChars} istDm={istDm} onNeu={onKommentar} />}
    </article>
  );
}

/* ── Abschnitt ─────────────────────────────────────────────────────────── */
function SpielEreignisse() {
  const { isDm, dmOn } = window.useDmMode();
  const heute = K().useHeute();
  const [ereignisse, setEreignisse] = useState(null);
  const [mehr, setMehr] = useState(false);
  const [anzahl, setAnzahl] = useState(SEITE);
  const [kommentare, setKommentare] = useState({});
  const [meineChars, setMeineChars] = useState([]);
  const [editor, setEditor] = useState(null); // null | {} (neu) | ereignis

  const laden = useCallback(async (n = anzahl) => {
    const { data, error } = await window._sb.from('ereignisse').select('*')
      .order('tag_abs', { ascending: false }).order('created_at', { ascending: false }).limit(n + 1);
    if (error) { console.error(error); setEreignisse([]); return; }
    const liste = (data || []).slice(0, n);
    setMehr((data || []).length > n);
    setEreignisse(liste);
    const ids = liste.map(x => x.id);
    if (!ids.length) { setKommentare({}); return; }
    const { data: ks } = await window._sb.from('ereignis_kommentare').select('*').in('ereignis_id', ids).order('created_at');
    const map = {};
    (ks || []).forEach(k => { (map[k.ereignis_id] = map[k.ereignis_id] || []).push(k); });
    setKommentare(map);
  }, [anzahl]);

  useEffect(() => { laden(); }, [laden]);
  useEffect(() => {
    const ich = window.SITE_USER?.id;
    if (!ich) return;
    window._sb.from('characters').select('id,name').eq('owner_id', ich).eq('type', 'spieler').order('name')
      .then(({ data }) => setMeineChars(data || []));
  }, []);
  useEffect(() => {
    const ch = window._sb.channel('spiel-ereignisse').on('postgres_changes', { event: '*', schema: 'public', table: 'ereignisse' }, () => laden()).subscribe();
    return () => { window._sb.removeChannel(ch); };
  }, [laden]);

  const loeschen = async e => {
    if (!window.confirm(`„${e.titel || 'Ereignis'}“ löschen? Kommentare werden mit gelöscht.`)) return;
    const { error } = await window._sb.from('ereignisse').delete().eq('id', e.id);
    if (error) { alert('Löschen fehlgeschlagen: ' + error.message); return; }
    laden();
  };

  const Toggle = window.DmModeToggle;
  return (
    <div className="erg-wrap">
      {isDm && (
        <div className="erg-dm-leiste">
          {Toggle && <Toggle />}
          {dmOn && !editor && <button type="button" className="erg-knopf haupt" onClick={() => setEditor({})}>+ Ereignis schreiben</button>}
          {dmOn && <AutoSchalter />}
        </div>
      )}
      {dmOn && editor && (
        <EreignisEditor key={editor.id || 'neu'} start={editor.id ? editor : null} heute={heute}
          onGespeichert={() => { setEditor(null); laden(); }} onAbbrechen={() => setEditor(null)} />
      )}
      {ereignisse === null && <div className="erg-leer">Ereignisse werden geladen …</div>}
      {ereignisse && !ereignisse.length && <div className="erg-leer">Noch keine Ereignisse.</div>}
      <div className="erg-liste">
        {(ereignisse || []).map(e => (
          <EreignisKarte key={e.id} e={e} heute={heute} kommentare={kommentare[e.id] || []} meineChars={meineChars}
            dmOn={dmOn} istDm={isDm} onBearbeiten={x => { setEditor(x); setTimeout(() => { const el = document.querySelector('.erg-editor'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 0); }}
            onLoeschen={loeschen} onKommentar={() => laden()} />
        ))}
      </div>
      {mehr && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
          <button type="button" className="erg-knopf" onClick={() => { const n = anzahl + SEITE; setAnzahl(n); }}>Ältere Ereignisse laden</button>
        </div>
      )}
    </div>
  );
}

window.SpielEreignisse = SpielEreignisse;
})();
