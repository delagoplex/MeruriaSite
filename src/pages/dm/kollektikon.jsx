// Page entry for /dm/kollektikon.html
import '../../components/nav.jsx';
import '../../components/site-gate.jsx';
import '../../components/ressourcen-ui.jsx';

;(function () {
// top-level functions were global in the old classic-script setup
Object.assign(window, { _rarFromSg, _rarFromStaerke, _rarFromCr, computeStage, buildResources, ThresholdRow, ThresholdsSection, nextStageInfo, CountRow, CountsSection, RandomizerSection, App });

const { useState, useEffect, useRef, useMemo, useCallback } = React;
const { SiteNav, SiteGate } = window;

const CATS = [
  { id: 'fische',     label: 'Fische' },
  { id: 'insekten',   label: 'Insekten' },
  { id: 'pflanzen',   label: 'Pflanzen' },
  { id: 'mineralien', label: 'Mineralien' },
  { id: 'kreaturen',  label: 'Kreaturen' },
];

const RARITIES = [
  { id: 'gewoehnlich', label: 'Gewöhnlich' },
  { id: 'selten',      label: 'Selten' },
  { id: 'sehrselten',  label: 'Sehr Selten' },
  { id: 'einzigartig', label: 'Einzigartig' },
];

const STAGE_LABELS = ['Unbekannt', 'Sichtung', 'Bekannt', 'Beobachtet', 'Vertraut', 'Studiert', 'Erforscht', 'Meisterhaft', 'Komplett'];

function _rarFromSg(sg) {
  return sg <= 1 ? 'gewoehnlich' : sg === 2 ? 'selten' : sg === 3 ? 'sehrselten' : 'einzigartig';
}
function _rarFromStaerke(s) {
  return s <= 2 ? 'gewoehnlich' : s <= 4 ? 'selten' : s === 5 ? 'sehrselten' : 'einzigartig';
}
function _rarFromCr(cr) {
  if (cr <= 1) return 'gewoehnlich';
  if (cr <= 5) return 'selten';
  if (cr <= 10) return 'sehrselten';
  return 'einzigartig';
}

function computeStage(count, threshRow) {
  if (!count || count <= 0) return 0;
  if (!threshRow) return 1;
  let stage = 1;
  const keys = ['stufe_2', 'stufe_3', 'stufe_4', 'stufe_5', 'stufe_6', 'stufe_7', 'stufe_8'];
  for (let i = 0; i < keys.length; i++) {
    if (threshRow[keys[i]] != null && count >= threshRow[keys[i]]) stage = i + 2;
  }
  return stage;
}

function buildResources() {
  const allPlants = [...(window.PFLANZEN_DB || []), ...(window.FANTASY_PLANT_DB || [])];
  return {
    fische:     (window.FISH_DB     || []).map(r => ({ id: String(r.id), name: r.name_de,  rarity: _rarFromStaerke(r.stärke || 2) })),
    insekten:   (window.INSEKTEN_DB || []).map(r => ({ id: String(r.id), name: r.name_de,  rarity: _rarFromSg(r.seltenheitsgrad || 1) })),
    pflanzen:   allPlants.map(r =>                  ({ id: String(r.id), name: r.name_de,  rarity: _rarFromSg(r.seltenheitsgrad || 1) })),
    mineralien: (window.MINERALIEN_DB || []).map(r => ({ id: String(r.id), name: r.name_de, rarity: _rarFromSg(r.seltenheitsgrad || 1) })),
    kreaturen:  (window.MONSTER_DATA  || []).map(m => {
      let h = 5381;
      for (let i = 0; i < m.name.length; i++) h = (Math.imul(h, 33) ^ m.name.charCodeAt(i)) >>> 0;
      return { id: String(h % 2000000000), name: m.name, rarity: _rarFromCr(m.cr || 0) };
    }),
  };
}

// ── Threshold row ─────────────────────────────────────────────────────────────
function ThresholdRow({ catId, rarity, initialRow, onSave }) {
  const keys = ['stufe_2', 'stufe_3', 'stufe_4', 'stufe_5', 'stufe_6', 'stufe_7', 'stufe_8'];
  const defaults = { stufe_2: 3, stufe_3: 6, stufe_4: 10, stufe_5: 15, stufe_6: 22, stufe_7: 30, stufe_8: 40 };
  const [vals, setVals] = useState(() => {
    const v = {};
    keys.forEach(k => { v[k] = String((initialRow && initialRow[k] != null) ? initialRow[k] : defaults[k]); });
    return v;
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const v = {};
    keys.forEach(k => { v[k] = String((initialRow && initialRow[k] != null) ? initialRow[k] : defaults[k]); });
    setVals(v);
  }, [initialRow]);

  const dirty = useMemo(() => keys.some(k => {
    const orig = (initialRow && initialRow[k] != null) ? initialRow[k] : defaults[k];
    return String(orig) !== vals[k];
  }), [vals, initialRow]);

  async function handleSave() {
    const row = { cat: catId, rarity: rarity.id };
    keys.forEach(k => { row[k] = parseInt(vals[k], 10) || defaults[k]; });
    const { error } = await window._sb.from('kollektikon_thresholds').upsert(row, { onConflict: 'cat,rarity' });
    if (!error) { setSaved(true); onSave(row); setTimeout(() => setSaved(false), 1800); }
  }

  return (
    <tr>
      <td><span className="thresh-rarity-label">{rarity.label}</span></td>
      {keys.map((k, i) => (
        <td key={k} style={{ textAlign: 'center' }}>
          <input
            className={`thresh-input${vals[k] !== String((initialRow?.[k] ?? defaults[k])) ? ' dirty' : ''}`}
            type="number" min="1" max="999"
            value={vals[k]}
            onChange={e => setVals(v => ({ ...v, [k]: e.target.value }))}
          />
        </td>
      ))}
      <td style={{ paddingLeft: '8px' }}>
        <button className={`thresh-save-btn${saved ? ' saved' : ''}`} onClick={handleSave} disabled={!dirty && !saved}>
          {saved ? '✓ Gespeichert' : 'Speichern'}
        </button>
      </td>
    </tr>
  );
}

// ── Thresholds section ────────────────────────────────────────────────────────
function ThresholdsSection({ thresholdsMap, onThresholdSaved }) {
  return (
    <div>
      <div className="dm-section-label">Schwellen — Anzahl Exemplare pro Stufe</div>
      <div style={{ overflowX: 'auto' }}>
        <table className="thresh-table">
          <thead>
            <tr>
              <th className="col-label" style={{ minWidth: '100px' }}>Seltenheit</th>
              {['Stufe 2','Stufe 3','Stufe 4','Stufe 5','Stufe 6','Stufe 7','Stufe 8'].map(l => (
                <th key={l}>{l}</th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {CATS.map(cat => (
              <React.Fragment key={cat.id}>
                <tr className="thresh-cat-row">
                  <td colSpan={9}><span className="thresh-cat-label">{cat.label}</span></td>
                </tr>
                {RARITIES.map(rar => (
                  <ThresholdRow
                    key={`${cat.id}:${rar.id}`}
                    catId={cat.id}
                    rarity={rar}
                    initialRow={thresholdsMap[`${cat.id}:${rar.id}`]}
                    onSave={onThresholdSaved}
                  />
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <div className="counts-hint" style={{ marginTop: '16px' }}>
        Stufe 1 (Sichtung) wird ab 1 Exemplar automatisch erreicht. Die hier eingetragenen Werte gelten ab Stufe 2.
      </div>
    </div>
  );
}

// ── Single count row ──────────────────────────────────────────────────────────
const THRESH_KEYS = ['stufe_2','stufe_3','stufe_4','stufe_5','stufe_6','stufe_7','stufe_8'];

function nextStageInfo(count, threshRow) {
  if (!threshRow) return null;
  for (let i = 0; i < THRESH_KEYS.length; i++) {
    const t = threshRow[THRESH_KEYS[i]];
    if (t != null && t > count) return { stufe: i + 2, fehlt: t - count };
  }
  return null;
}

function CountRow({ catId, resource, initialData, thresholdsMap, onSaved }) {
  const currentMenge = initialData?.menge || 0;
  const [modifier, setModifier] = useState('');
  const [revealMode, setRevealMode] = useState(initialData?.reveal_mode || null);
  const [saved, setSaved] = useState(false);

  useEffect(() => { setRevealMode(initialData?.reveal_mode || null); }, [initialData]);

  const modVal = (modifier === '' || modifier === '-') ? 0 : (parseInt(modifier, 10) || 0);
  const newMenge = Math.max(0, currentMenge + modVal);
  const threshRow = thresholdsMap[`${catId}:${resource.rarity}`];
  const currentStage = computeStage(currentMenge, threshRow);
  const newStage = computeStage(newMenge, threshRow);
  const stageUp = newStage > currentStage;
  const stageDown = newStage < currentStage;

  // "noch X" based on preview if modifier active, else from current
  const previewCount = modVal !== 0 ? newMenge : currentMenge;
  const nextInfo = nextStageInfo(previewCount, threshRow);

  const origMode = initialData?.reveal_mode || null;
  const dirty = modVal !== 0 || revealMode !== origMode;

  async function handleSave() {
    const { error } = await window._sb.from('kollektikon_counts')
      .upsert({ cat: catId, resource_id: resource.id, menge: newMenge, reveal_mode: revealMode }, { onConflict: 'cat,resource_id' });
    if (!error) {
      setSaved(true);
      setModifier('');
      onSaved(`${catId}:${resource.id}`, { menge: newMenge, reveal_mode: revealMode });
      setTimeout(() => setSaved(false), 1500);
    }
  }

  const stageBadgeCls = currentStage === 0 && revealMode ? ' s0' : currentStage === 0 ? '' : currentStage >= 8 ? ' s8' : ' s1';
  const stageBadgeTxt = currentStage === 0 && revealMode ? 'Stufe 0' : STAGE_LABELS[currentStage];

  return (
    <div className="counts-row">
      <div className="counts-info">
        <div className="counts-name">{resource.name}</div>
        <div className="counts-rarity">{RARITIES.find(r => r.id === resource.rarity)?.label || resource.rarity}</div>
      </div>

      <div className="reveal-mode-wrap">
        {['name','bild','beides'].map(m => (
          <button key={m} className={`reveal-mode-btn${revealMode === m ? ' active' : ''}`}
            onClick={() => setRevealMode(revealMode === m ? null : m)}>
            {m.charAt(0).toUpperCase() + m.slice(1)}
          </button>
        ))}
      </div>

      <div className="counts-menge-block">
        <span className="counts-current-val">{currentMenge.toLocaleString('de')}</span>
        <div className={`counts-stepper${modVal !== 0 ? ' active' : ''}`}>
          <button className="stepper-btn" onClick={() => setModifier(String(modVal - 1))}>−</button>
          <input
            className="counts-mod-input"
            type="number"
            placeholder="0"
            value={modifier}
            onChange={e => setModifier(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && dirty) handleSave(); }}
          />
          <button className="stepper-btn" onClick={() => setModifier(String(modVal + 1))}>+</button>
        </div>
        {modVal !== 0 && <>
          <span className="counts-arrow">→</span>
          <span className={`counts-new-val${stageUp ? ' up' : stageDown ? ' down' : ''}`}>
            {newMenge.toLocaleString('de')}
          </span>
        </>}
      </div>

      <div className="counts-stage-block">
        <span className={`counts-stage-badge${stageBadgeCls}`}>{stageBadgeTxt}</span>
        {stageUp  && <span className="counts-delta up">↑ Stufe {newStage}!</span>}
        {stageDown && <span className="counts-delta down">↓ Stufe {newStage}</span>}
        {!stageUp && !stageDown && nextInfo && (
          <span className="counts-next">Noch {nextInfo.fehlt.toLocaleString('de')} → St.{nextInfo.stufe}</span>
        )}
        {!stageUp && !stageDown && !nextInfo && currentMenge > 0 && (
          <span className="counts-delta max">✓ Komplett</span>
        )}
      </div>

      <button className={`counts-save-btn${saved ? ' saved' : ''}`} onClick={handleSave} disabled={!dirty}>
        {saved ? '✓' : 'OK'}
      </button>
    </div>
  );
}

// ── Counts section: Liste + Detailansicht ───────────────────────────────────
function CountsSection({ countsMap, thresholdsMap, onSaved }) {
  const Kat = window.RessourcenKatalog;
  const [activeCat, setActiveCat] = useState('fische');
  const [search, setSearch] = useState('');
  const [rarFilter, setRarFilter] = useState('');
  const [sel, setSel] = useState({});
  const [tagsOpen, setTagsOpen] = useState(false);
  const [onlyFound, setOnlyFound] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const all = useMemo(() => Kat.entries(activeCat), [activeCat]);
  const isFound = r => { const d = countsMap[`${activeCat}:${r.id}`] || {}; return (d.menge || 0) > 0 || !!d.reveal_mode; };

  const displayed = useMemo(() => {
    const q = search.trim().toLowerCase();
    return all
      .filter(r => (!q || r.name.toLowerCase().includes(q)) && (!rarFilter || r.rarity === rarFilter) && Kat.matches(r, sel) && (!onlyFound || isFound(r)))
      .sort((a, b) => {
        const da = countsMap[`${activeCat}:${a.id}`] || {}, db = countsMap[`${activeCat}:${b.id}`] || {};
        const ca = da.menge || 0, cb = db.menge || 0;
        if (ca > 0 && cb === 0) return -1;
        if (cb > 0 && ca === 0) return 1;
        if (da.reveal_mode && !db.reveal_mode) return -1;
        if (db.reveal_mode && !da.reveal_mode) return 1;
        return a.name.localeCompare(b.name, 'de');
      });
  }, [all, search, rarFilter, sel, onlyFound, countsMap, activeCat]);

  const found = useMemo(() => all.filter(isFound).length, [all, countsMap, activeCat]);
  const activeTags = Object.values(sel).reduce((n, v) => n + v.length, 0);
  const selected = displayed.find(r => r.id === selectedId) || null;

  function switchCat(id) { setActiveCat(id); setSearch(''); setSel({}); setRarFilter(''); setSelectedId(null); }

  return (
    <div>
      <div className="counts-cat-tabs" style={{ marginBottom: '16px' }}>
        {CATS.map(c => (
          <button key={c.id} className={`counts-cat-tab${activeCat === c.id ? ' active' : ''}`} onClick={() => switchCat(c.id)}>
            {c.label}
          </button>
        ))}
      </div>
      <div className="counts-toolbar">
        <input className="counts-search" placeholder="▸ Ressource suchen…" value={search} onChange={e => setSearch(e.target.value)} />
        <select className="counts-search" style={{ flex: '0 0 150px' }} value={rarFilter} onChange={e => setRarFilter(e.target.value)}>
          <option value="">Seltenheit: alle</option>
          {Kat.RARITY_ORDER.map(r => <option key={r} value={r}>{Kat.RARITY_META[r].label}</option>)}
        </select>
        <button className={`reveal-mode-btn${tagsOpen || activeTags ? ' active' : ''}`} onClick={() => setTagsOpen(o => !o)}>
          Tags{activeTags ? ` (${activeTags})` : ''} {tagsOpen ? '▴' : '▾'}
        </button>
        <button className={`reveal-mode-btn${onlyFound ? ' active' : ''}`} onClick={() => setOnlyFound(o => !o)}>Nur entdeckte</button>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'rgba(var(--accent-rgb),calc(0.45*var(--ka) + var(--tb)))', whiteSpace: 'nowrap' }}>
          {found}/{all.length} entdeckt · {displayed.length} angezeigt
        </span>
      </div>
      {tagsOpen && (
        <div style={{ marginBottom: 16 }}>
          <window.TagFilters cat={activeCat} sel={sel} onChange={setSel} />
          {activeTags > 0 && <button className="reveal-mode-btn" style={{ marginTop: 8 }} onClick={() => setSel({})}>✕ Tags zurücksetzen</button>}
        </div>
      )}

      <div className="kol-split">
        <div className="kol-list">
          {displayed.length === 0 ? (
            <div className="counts-empty">Keine Einträge gefunden.</div>
          ) : displayed.map(r => {
            const d = countsMap[`${activeCat}:${r.id}`] || {};
            return (
              <button key={r.id} className={`kol-list-row${r.id === selectedId ? ' active' : ''}`} onClick={() => setSelectedId(r.id)}>
                <window.ResThumb entry={r} size={34} />
                <span className="kol-list-name">{r.name}</span>
                <window.RarityPill rarity={r.rarity} />
                <span className="kol-list-menge">{(d.menge || 0) > 0 ? d.menge.toLocaleString('de') : d.reveal_mode ? '•' : ''}</span>
              </button>
            );
          })}
        </div>
        <div className="kol-detail">
          {!selected ? (
            <div className="counts-empty">Eintrag links auswählen, um Details und Mengen zu sehen.</div>
          ) : (
            <React.Fragment>
              <window.ResDetail entry={selected} />
              <div className="dm-section-label" style={{ marginTop: 22 }}>Menge &amp; Aufdeckung</div>
              <CountRow
                key={`${activeCat}:${selected.id}`}
                catId={activeCat}
                resource={selected}
                initialData={countsMap[`${activeCat}:${selected.id}`] || null}
                thresholdsMap={thresholdsMap}
                onSaved={onSaved}
              />
              <div className="counts-hint">Eingabe bestätigen mit Enter oder OK-Button. Gelbe Umrandung = ungespeicherte Änderung.</div>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Randomizer: Tags wählen, würfeln, einem Ort zuweisen ─────────────────────
const POOL_CATS = CATS.filter(c => c.id !== 'kreaturen');

function RandomizerSection() {
  const [activeCat, setActiveCat] = useState('fische');
  const [orte, setOrte] = useState(null);         // [{ key, hex_id|area_id, label, map }]
  const [ortFilter, setOrtFilter] = useState('');
  const [ortKey, setOrtKey] = useState('');
  const [pool, setPool] = useState([]);           // karte_pools-Zeilen des gewählten Ortes
  const [msg, setMsg] = useState('');

  useEffect(() => {
    (async () => {
      const sb = window._sb;
      const [maps, hexes, areas] = await Promise.all([
        sb.from('karte_maps').select('id, name, ebene'),
        sb.from('karte_hexes').select('id, map_id, name').neq('name', ''),
        sb.from('karte_areas').select('id, map_id, name').eq('has_submap', true).neq('name', ''),
      ]);
      // Wie in der Karte: Pools gibt es nur auf Orts-Ebene, also an Hexfeldern der
      // Gebiets-Karten (führen in einen Ort) und an Bereichen, die in einen Unterort führen.
      const mapName = {}, gebietMaps = new Set();
      (maps.data || []).forEach(m => { mapName[m.id] = m.name; if (m.ebene === 'Gebiet') gebietMaps.add(m.id); });
      const list = [
        ...(hexes.data || []).filter(h => gebietMaps.has(h.map_id)).map(h => ({ key: 'h:' + h.id, hex_id: h.id, area_id: null, label: h.name, map: mapName[h.map_id] || '?' })),
        ...(areas.data || []).map(a => ({ key: 'a:' + a.id, hex_id: null, area_id: a.id, label: a.name, map: mapName[a.map_id] || '?' })),
      ].sort((x, y) => (x.map + x.label).localeCompare(y.map + y.label, 'de'));
      setOrte(list);
    })();
  }, []);

  const ort = (orte || []).find(o => o.key === ortKey) || null;

  async function loadPool() {
    if (!ort) { setPool([]); return; }
    const q = window._sb.from('karte_pools').select('*');
    const { data } = await (ort.hex_id ? q.eq('hex_id', ort.hex_id) : q.eq('area_id', ort.area_id));
    setPool(data || []);
  }
  useEffect(() => { loadPool(); }, [ortKey]);

  const exclude = useMemo(() => new Set(pool.filter(p => p.cat === activeCat).map(p => String(p.resource_id))), [pool, activeCat]);

  async function addToOrt(entries) {
    if (!ort) return;
    const rows = entries.map(e => ({ cat: activeCat, resource_id: String(e.id), hex_id: ort.hex_id, area_id: ort.area_id }));
    const { error } = await window._sb.from('karte_pools').insert(rows);
    setMsg(error ? 'Fehler: ' + error.message : `${rows.length} ${rows.length === 1 ? 'Eintrag' : 'Einträge'} zu „${ort.label}“ hinzugefügt.`);
    loadPool();
  }
  async function removeFromOrt(p) {
    await window._sb.from('karte_pools').delete().eq('id', p.id);
    loadPool();
  }

  const visibleOrte = (orte || []).filter(o => !ortFilter || (o.label + ' ' + o.map).toLowerCase().includes(ortFilter.toLowerCase()));
  const Kat = window.RessourcenKatalog;
  const poolHere = pool.filter(p => p.cat === activeCat).map(p => Kat.get(activeCat, p.resource_id) ? { row: p, e: Kat.get(activeCat, p.resource_id) } : null).filter(Boolean);

  return (
    <div>
      <div className="dm-section-label">Randomizer · Ressourcen einem Ort zuweisen</div>
      <div className="counts-cat-tabs" style={{ marginBottom: 16 }}>
        {POOL_CATS.map(c => (
          <button key={c.id} className={`counts-cat-tab${activeCat === c.id ? ' active' : ''}`} onClick={() => { setActiveCat(c.id); setMsg(''); }}>{c.label}</button>
        ))}
      </div>

      <div className="counts-toolbar">
        <input className="counts-search" placeholder="▸ Ort suchen…" value={ortFilter} onChange={e => setOrtFilter(e.target.value)} />
        <select className="counts-search" value={ortKey} onChange={e => { setOrtKey(e.target.value); setMsg(''); }}>
          <option value="">{orte ? 'Ort wählen …' : 'Lädt …'}</option>
          {visibleOrte.map(o => <option key={o.key} value={o.key}>{o.map} › {o.label}{o.area_id ? ' (Bereich)' : ''}</option>)}
        </select>
      </div>

      <window.ResRandomizer
        cat={activeCat}
        excludeIds={exclude}
        onAdd={addToOrt}
        addLabel={ort ? `Zu „${ort.label}“ hinzufügen` : 'Hinzufügen'}
        disabledReason={ort ? '' : 'Erst einen Ort wählen'}
      />
      {msg && <div className="counts-hint" style={{ marginTop: 10 }}>{msg}</div>}

      {ort && (
        <div style={{ marginTop: 26 }}>
          <div className="dm-section-label">Pool von „{ort.label}“ · {CATS.find(c => c.id === activeCat).label} ({poolHere.length})</div>
          {poolHere.length === 0 ? <div className="counts-empty">Noch nichts im Pool.</div> : (
            <div className="kol-list" style={{ maxHeight: 360 }}>
              {poolHere.map(({ row, e }) => (
                <div key={row.id} className="kol-list-row" style={{ cursor: 'default' }}>
                  <window.ResThumb entry={e} size={34} />
                  <span className="kol-list-name">{e.name}</span>
                  <window.RarityPill rarity={e.rarity} />
                  <button className="reveal-mode-btn" title="Aus dem Pool entfernen" onClick={() => removeFromOrt(row)}>×</button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
function App() {
  const [activeTab, setActiveTab] = useState('mengen');
  const [countsMap, setCountsMap] = useState({});
  const [thresholdsMap, setThresholdsMap] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const [countRes, threshRes] = await Promise.all([
        window._sb.from('kollektikon_counts').select('cat, resource_id, menge'),
        window._sb.from('kollektikon_thresholds').select('*'),
      ]);
      if (countRes.data) {
        const cm = {};
        countRes.data.forEach(({ cat, resource_id, menge, reveal_mode }) => {
          cm[`${cat}:${resource_id}`] = { menge, reveal_mode: reveal_mode || null };
        });
        setCountsMap(cm);
      }
      if (threshRes.data) {
        const tm = {};
        threshRes.data.forEach(row => { tm[`${row.cat}:${row.rarity}`] = row; });
        setThresholdsMap(tm);
      }
      setLoading(false);
    }
    load();
  }, []);

  function handleCountSaved(key, data) {
    setCountsMap(prev => ({ ...prev, [key]: data }));
  }
  function handleThresholdSaved(row) {
    setThresholdsMap(prev => ({ ...prev, [`${row.cat}:${row.rarity}`]: row }));
  }

  return (
    <div>
      <SiteNav rightLabel="DM · KOLLEKTIKON" />
      <div className="dm-kol-wrap">
        <div className="dm-kol-header">
          <div className="dm-kol-kicker">◈ Meisterverwaltung</div>
          <div className="dm-kol-title">Kollektikon</div>
        </div>

        <div className="dm-kol-tabs">
          <button className={`dm-kol-tab${activeTab === 'mengen' ? ' active' : ''}`} onClick={() => setActiveTab('mengen')}>
            Mengen
          </button>
          <button className={`dm-kol-tab${activeTab === 'schwellen' ? ' active' : ''}`} onClick={() => setActiveTab('schwellen')}>
            Schwellen
          </button>
          <button className={`dm-kol-tab${activeTab === 'randomizer' ? ' active' : ''}`} onClick={() => setActiveTab('randomizer')}>
            Randomizer
          </button>
        </div>

        {loading ? (
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'rgba(var(--accent-rgb),calc(0.4*var(--ka) + var(--tb)))', padding: '24px 0' }}>Lädt…</div>
        ) : activeTab === 'mengen' ? (
          <CountsSection countsMap={countsMap} thresholdsMap={thresholdsMap} onSaved={handleCountSaved} />
        ) : activeTab === 'randomizer' ? (
          <RandomizerSection />
        ) : (
          <ThresholdsSection thresholdsMap={thresholdsMap} onThresholdSaved={handleThresholdSaved} />
        )}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <SiteGate><App /></SiteGate>
);

})();

