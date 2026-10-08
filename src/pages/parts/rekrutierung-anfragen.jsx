// Tab "Anfragen" von /dm/rekrutierung.html (window.RekrutierungAnfragen)
// Spieler fragen auf /spiel/rekrutierung einen NSC an; hier sieht die SL alle Anfragen, nimmt sie an
// (legt daraus einen NSC mit Statblock an) oder lehnt sie ab.
import '../../components/char-age.jsx';

;(function () {
const { useState, useEffect, useMemo } = React;

const MONO = 'var(--font-mono)', DISP = 'var(--font-display)', BODY = 'var(--font-body)';
const GOOD = '#80dfb0', BAD = '#ff9980';
const DIVS = () => window.DIVISIONS_DATA || [];
const divById = id => DIVS().find(d => d.id === id) || { id, name:id, accent:'#a08cff', raenge:[] };
const kurz = n => (n || '').replace(/^Die\s+/, '');
const fmtHade = n => (n || 0).toLocaleString('de-DE') + ' Hade';
const fmtDat = iso => new Date(iso).toLocaleString('de-DE', { day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit' });
const dauerTxt = t => t === 1 ? '1 Tag' : t + ' Tage';

const lab = { fontFamily:MONO, fontSize:10, letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(var(--purple-rgb),calc(0.7*var(--kp) + var(--tb)))', display:'block', marginBottom:6 };
const info = { fontFamily:MONO, fontSize:12, letterSpacing:'0.06em', color:'rgba(var(--text-rgb),calc(0.7*var(--kt) + var(--tb)))', lineHeight:1.6 };
const inp = { width:'100%', padding:'9px 12px', background:'rgba(var(--panel-rgb),0.9)', border:'1px solid rgba(var(--purple-rgb),calc(0.3*var(--kp)))', color:'var(--white)', borderRadius:4, fontFamily:BODY, fontSize:14 };
const btnBase = { padding:'10px 18px', cursor:'pointer', borderRadius:4, fontFamily:MONO, fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase' };

// Statblock der Anfrage: Rekrutierungs-NSC (Division, Rang) mit gewählter Rasse/Talent/Waffe
function statblockZu(a) {
  const dv = divById(a.division_id);
  const suffix = '(' + kurz(dv.name) + ', Rang ' + a.rang + ')';
  const basis = (window.MONSTER_DATA_REKRUTIERUNG || []).find(m => m.name.endsWith(suffix));
  if (!basis) return null;
  const R = window.RasseAnwenden;
  const opt = { rasse:a.rasse || null, linie:a.linie || null, talent:a.talent || null, groesse:a.groesse || null, waffe:a.waffe || null };
  return R && R.istRassenfaehig(basis) && (opt.rasse || opt.waffe) ? R.anwenden(basis, opt) : basis;
}

function StatblockInfo({ m }) {
  if (!m) return <div style={info}>Kein Statblock gefunden.</div>;
  const hg = c => c === 0.125 ? '1/8' : c === 0.25 ? '1/4' : c === 0.5 ? '1/2' : c;
  const mod = v => { const x = Math.floor((v - 10) / 2); return (x >= 0 ? '+' : '') + x; };
  const A = m.attribute || {};
  const bes = (m.besonderheiten || []).map(b => b.name);
  return (
    <div style={{ padding:'14px 16px', borderRadius:6, border:'1px solid rgba(var(--purple-rgb),calc(0.25*var(--kp)))', background:'rgba(var(--panel-rgb),0.6)' }}>
      <div style={{ fontFamily:DISP, fontSize:18, letterSpacing:'0.05em', color:'var(--white)', marginBottom:4 }}>{m.name}</div>
      <div style={info}>{[m.groesse, m.art, m.gesinnung].filter(Boolean).join(' · ')}</div>
      <div style={{ ...info, marginTop:8 }}>RK {m.rk}{m.ruestungstyp ? ' (' + m.ruestungstyp + ')' : ''} · TP {m.tp} ({m.tp_wuerfel}) · HG {hg(m.cr)} · Bewegung {Object.entries(m.bewegung || {}).map(([k, v]) => k + ' ' + v).join(', ')}</div>
      <div style={{ display:'flex', gap:6, marginTop:10, flexWrap:'wrap' }}>
        {['STR','DEX','CON','INT','WIS','CHA'].map(k => (
          <div key={k} style={{ minWidth:52, textAlign:'center', padding:'6px 4px', border:'1px solid rgba(var(--purple-rgb),calc(0.2*var(--kp)))', borderRadius:3 }}>
            <div style={{ fontFamily:MONO, fontSize:9, letterSpacing:'0.14em', color:'rgba(var(--purple-rgb),calc(0.7*var(--kp) + var(--tb)))' }}>{k}</div>
            <div style={{ fontFamily:DISP, fontSize:16, color:'var(--white)' }}>{A[k]}</div>
            <div style={{ fontFamily:MONO, fontSize:10, color:'rgba(var(--text-rgb),calc(0.6*var(--kt) + var(--tb)))' }}>{mod(A[k])}</div>
          </div>
        ))}
      </div>
      {bes.length > 0 && <div style={{ ...info, marginTop:10 }}><span style={{ ...lab, display:'inline', marginRight:6 }}>Besonderheiten</span>{bes.join(' · ')}</div>}
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);
  const [chars, setChars] = useState({});
  const [filter, setFilter] = useState('offen');
  const [selId, setSelId] = useState(null);
  const [form, setForm] = useState({ name:'', geschlecht:'', alter:'' });
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');

  async function load() {
    const sb = window._sb;
    if (!sb) { setLoading(false); return; }
    const { data, error } = await sb.from('rekrutierung_anfragen').select('*').order('created_at', { ascending:false });
    if (error) { setErr('Laden fehlgeschlagen: ' + error.message); setLoading(false); return; }
    const list = data || [];
    const ids = [...new Set(list.map(r => r.character_id))];
    const map = {};
    if (ids.length) {
      const { data: cs } = await sb.from('characters').select('id, name, division, char_data').in('id', ids);
      (cs || []).forEach(c => { map[c.id] = c; });
    }
    await window.CharAge.load();
    setChars(map); setRows(list); setLoading(false);
  }
  useEffect(() => { load(); }, []);

  const counts = useMemo(() => {
    const c = { offen:0, angenommen:0, abgelehnt:0, alle:rows.length };
    rows.forEach(r => { c[r.status] = (c[r.status] || 0) + 1; });
    return c;
  }, [rows]);
  const shown = rows.filter(r => filter === 'alle' || r.status === filter);
  const sel = rows.find(r => r.id === selId) || null;
  const stat = useMemo(() => sel ? statblockZu(sel) : null, [sel]);

  function pick(id) { setSelId(id); setForm({ name:'', geschlecht:'', alter:'' }); setErr(''); }

  async function annehmen() {
    if (!sel || busy) return;
    if (!form.name.trim()) { setErr('Bitte einen Namen eingeben.'); return; }
    setBusy(true); setErr('');
    const dv = divById(sel.division_id);
    const alter = parseInt(form.alter) || null;
    const row = {
      name:form.name.trim(), rasse:sel.rasse || null, unterrasse:sel.linie || null,
      geschlecht:form.geschlecht || null, alter_jahre:alter, alter_ref_abs:alter ? window.CharAge.today() : null,
      division:dv.name, rang:String(sel.rang),
      status:['Lebendig'], visible:false, sections:stat ? ['statblock'] : [],
      steckbrief:stat ? window.statToSteckbrief(stat, 'NSC') : null,
      makel:[], begleiter:[], geheimnisse:[], gewohnheiten:[],
      kontakte:{ familie:[], freunde:[], rivalen:[] }, field_visibility:{},
    };
    const sb = window._sb;
    const ins = await sb.from('nscs').insert(row).select('id').single();
    if (ins.error) { setErr('NSC anlegen fehlgeschlagen: ' + ins.error.message); setBusy(false); return; }
    const upd = await sb.from('rekrutierung_anfragen').update({ status:'angenommen', nsc_id:ins.data.id, bearbeitet_am:new Date().toISOString() }).eq('id', sel.id);
    if (upd.error) setErr('NSC angelegt, aber die Anfrage konnte nicht aktualisiert werden: ' + upd.error.message);
    setBusy(false);
    await load();
  }

  async function ablehnen() {
    if (!sel || busy || !window.confirm('Anfrage ablehnen?')) return;
    setBusy(true);
    const { error } = await window._sb.from('rekrutierung_anfragen').update({ status:'abgelehnt', bearbeitet_am:new Date().toISOString() }).eq('id', sel.id);
    if (error) setErr('Ablehnen fehlgeschlagen: ' + error.message);
    setBusy(false);
    await load();
  }

  async function loeschen() {
    if (!sel || !window.confirm('Anfrage endgültig löschen?')) return;
    const { error } = await window._sb.from('rekrutierung_anfragen').delete().eq('id', sel.id);
    if (error) { setErr('Löschen fehlgeschlagen: ' + error.message); return; }
    setSelId(null); await load();
  }

  const tabs = [['offen','Offen'], ['angenommen','Angenommen'], ['abgelehnt','Abgelehnt'], ['alle','Alle']];
  const statusCol = s => s === 'angenommen' ? GOOD : s === 'abgelehnt' ? BAD : 'var(--white)';

  return (
    <div>
      <div>
          <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:24 }}>
            {tabs.map(([k, l]) => {
              const on = filter === k;
              return (
                <button key={k} onClick={() => setFilter(k)} style={{ ...btnBase, padding:'8px 14px',
                  background:on ? 'rgba(var(--purple-rgb),calc(0.22*var(--kp)))' : 'rgba(var(--panel-rgb),0.5)',
                  border:'1px solid ' + (on ? 'rgba(var(--purple-rgb),calc(0.8*var(--kp)))' : 'rgba(var(--purple-rgb),calc(0.2*var(--kp)))'),
                  color:on ? 'var(--white)' : 'rgba(var(--text-rgb),calc(0.65*var(--kt) + var(--tb)))' }}>
                  {l} · {counts[k] || 0}
                </button>
              );
            })}
          </div>

          {loading ? <div style={info}>◈ Lade …</div> : (
            <div style={{ display:'grid', gridTemplateColumns:'minmax(0,380px) minmax(0,1fr)', gap:28, alignItems:'start' }}>
              {/* Liste */}
              <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                {shown.length === 0 && <div style={info}>Keine Anfragen in dieser Ansicht.</div>}
                {shown.map(r => {
                  const dv = divById(r.division_id), ch = chars[r.character_id], on = r.id === selId;
                  const titel = (dv.raenge.find(x => x.rang === r.rang) || {}).titel || 'Rang ' + r.rang;
                  return (
                    <button key={r.id} onClick={() => pick(r.id)} style={{ textAlign:'left', cursor:'pointer', padding:'12px 14px', borderRadius:6,
                      border:'1px solid ' + (on ? dv.accent : 'rgba(var(--purple-rgb),calc(0.2*var(--kp)))'),
                      background:on ? 'rgba(var(--purple-rgb),calc(0.12*var(--kp)))' : 'rgba(var(--panel-rgb),0.5)', color:'var(--white)' }}>
                      <div style={{ display:'flex', justifyContent:'space-between', gap:10 }}>
                        <span style={{ fontFamily:DISP, fontSize:16, letterSpacing:'0.04em', color:dv.accent }}>{titel}</span>
                        <span style={{ fontFamily:MONO, fontSize:10, letterSpacing:'0.12em', textTransform:'uppercase', color:statusCol(r.status) }}>{r.status}</span>
                      </div>
                      <div style={info}>Rang {r.rang} · {kurz(dv.name)}{r.rasse ? ' · ' + r.rasse : ''}</div>
                      <div style={{ ...info, opacity:0.8 }}>für {ch ? ch.name : '—'} · {fmtDat(r.created_at)}</div>
                    </button>
                  );
                })}
              </div>

              {/* Detail */}
              <div>
                {!sel && <div style={{ ...info, padding:'40px 0' }}>Wähle links eine Anfrage.</div>}
                {sel && (() => {
                  const dv = divById(sel.division_id), ch = chars[sel.character_id], cd = (ch && ch.char_data) || {};
                  const titel = (dv.raenge.find(x => x.rang === sel.rang) || {}).titel || 'Rang ' + sel.rang;
                  const offen = sel.status === 'offen';
                  return (
                    <div style={{ padding:'24px 26px', borderRadius:8, border:'1px solid rgba(var(--purple-rgb),calc(0.3*var(--kp)))', background:'rgba(var(--panel-rgb),0.5)' }}>
                      <span style={lab}>Angefragter NSC</span>
                      <div style={{ fontFamily:DISP, fontSize:24, letterSpacing:'0.05em', color:dv.accent, lineHeight:1.2 }}>{titel}</div>
                      <div style={info}>Rang {sel.rang} · {dv.name}</div>

                      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px 24px', marginTop:20 }}>
                        <div><span style={lab}>Angefragt von</span>
                          <div style={{ fontFamily:DISP, fontSize:17, color:'var(--white)' }}>{ch ? ch.name : '—'}</div>
                          <div style={info}>{[cd.rank, ch && ch.division && kurz(ch.division)].filter(Boolean).join(' · ') || '—'}</div></div>
                        <div><span style={lab}>Eingegangen</span><div style={info}>{fmtDat(sel.created_at)}</div></div>
                        <div><span style={lab}>Dauer</span><div style={info}>{dauerTxt(sel.tage)}</div></div>
                        <div><span style={lab}>Kosten</span>
                          <div style={{ ...info, color:sel.gebuehr ? BAD : sel.honorar ? GOOD : undefined }}>
                            {sel.gebuehr ? 'Spieler zahlt ' + fmtHade(sel.gebuehr) : sel.honorar ? 'Mögliches Honorar ' + fmtHade(sel.honorar) : 'kostenlos'}
                          </div></div>
                      </div>

                      {sel.nachricht && <div style={{ marginTop:18 }}><span style={lab}>Nachricht</span>
                        <div style={{ fontFamily:BODY, fontSize:14, fontWeight:300, lineHeight:1.6, color:'rgba(var(--text-rgb),calc(0.8*var(--kt) + var(--tb)))', whiteSpace:'pre-wrap' }}>{sel.nachricht}</div></div>}

                      <div style={{ marginTop:20 }}>
                        <span style={lab}>Statblock{sel.rasse ? ' · ' + sel.rasse + (sel.linie ? ' – ' + sel.linie : '') : ''}{sel.talent ? ' · ' + sel.talent : ''}{sel.waffe ? ' · ' + sel.waffe : ''}</span>
                        <StatblockInfo m={stat}/>
                      </div>

                      {offen ? (
                        <div style={{ marginTop:24, paddingTop:20, borderTop:'1px solid rgba(var(--purple-rgb),calc(0.2*var(--kp)))' }}>
                          <span style={lab}>NSC anlegen</span>
                          <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 80px', gap:10 }}>
                            <input style={inp} placeholder="Name *" value={form.name} onChange={e => setForm({ ...form, name:e.target.value })}/>
                            <select style={inp} value={form.geschlecht} onChange={e => setForm({ ...form, geschlecht:e.target.value })}>
                              <option value="">Geschlecht</option><option>Weiblich</option><option>Männlich</option><option>Divers</option>
                            </select>
                            <input style={inp} type="number" min="0" placeholder="Alter" value={form.alter} onChange={e => setForm({ ...form, alter:e.target.value })}/>
                          </div>
                          {err && <div style={{ ...info, color:BAD, marginTop:10 }}>{err}</div>}
                          <div style={{ display:'flex', gap:10, justifyContent:'flex-end', marginTop:16 }}>
                            <button onClick={ablehnen} disabled={busy} style={{ ...btnBase, background:'transparent', border:'1px solid rgba(255,153,128,0.5)', color:BAD }}>✕ Ablehnen</button>
                            <button onClick={annehmen} disabled={busy} style={{ ...btnBase, background:'rgba(80,180,130,0.16)', border:'1px solid ' + GOOD, color:GOOD, opacity:busy ? 0.6 : 1 }}>{busy ? '… einen Moment' : '✓ Annehmen & NSC anlegen'}</button>
                          </div>
                        </div>
                      ) : (
                        <div style={{ marginTop:24, paddingTop:20, borderTop:'1px solid rgba(var(--purple-rgb),calc(0.2*var(--kp)))', display:'flex', alignItems:'center', gap:14, flexWrap:'wrap' }}>
                          <span style={{ ...info, color:statusCol(sel.status) }}>{sel.status === 'angenommen' ? '✓ Angenommen' : '✕ Abgelehnt'}{sel.bearbeitet_am ? ' · ' + fmtDat(sel.bearbeitet_am) : ''}</span>
                          {sel.nsc_id && <a href="/dm/nsc-verwaltung.html" style={{ ...info, color:'var(--white)' }}>→ NSC-Verwaltung öffnen</a>}
                          <button onClick={loeschen} style={{ ...btnBase, marginLeft:'auto', padding:'7px 12px', background:'transparent', border:'1px solid rgba(var(--purple-rgb),calc(0.25*var(--kp)))', color:'rgba(var(--text-rgb),calc(0.6*var(--kt) + var(--tb)))' }}>Löschen</button>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            </div>
          )}
          {!loading && err && !sel && <div style={{ ...info, color:BAD, marginTop:16 }}>{err}</div>}
      </div>
    </div>
  );
}

window.RekrutierungAnfragen = App;
})();
