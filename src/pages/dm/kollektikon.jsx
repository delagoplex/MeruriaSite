// Page entry for /dm/kollektikon.html
import '../../components/nav.jsx';
import '../../components/site-gate.jsx';

;(function () {
// top-level functions were global in the old classic-script setup
Object.assign(window, { _rarFromSg, _rarFromStaerke, _rarFromCr, computeStage, buildResources, ThresholdRow, ThresholdsSection, nextStageInfo, CountRow, CountsSection, App });

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

// ── Counts section ────────────────────────────────────────────────────────────
function CountsSection({ countsMap, thresholdsMap, onSaved }) {
  const [activeCat, setActiveCat] = useState('fische');
  const [search, setSearch] = useState('');
  const resources = useMemo(() => buildResources(), []);

  const filtered = useMemo(() => {
    const pool = resources[activeCat] || [];
    const q = search.trim().toLowerCase();
    if (!q) return pool;
    return pool.filter(r => r.name.toLowerCase().includes(q));
  }, [resources, activeCat, search]);

  const displayed = useMemo(() => {
    return [...filtered].sort((a, b) => {
      const da = countsMap[`${activeCat}:${a.id}`] || {};
      const db = countsMap[`${activeCat}:${b.id}`] || {};
      const ca = da.menge || 0, cb = db.menge || 0;
      const ra = da.reveal_mode, rb = db.reveal_mode;
      // Found first, then stage-0, then unknown, then alphabetical
      if (ca > 0 && cb === 0) return -1;
      if (cb > 0 && ca === 0) return 1;
      if (ra && !rb) return -1;
      if (rb && !ra) return 1;
      return a.name.localeCompare(b.name, 'de');
    });
  }, [filtered, countsMap, activeCat]);

  const total = resources[activeCat]?.length || 0;
  const found = useMemo(() => (resources[activeCat] || []).filter(r => {
    const d = countsMap[`${activeCat}:${r.id}`] || {};
    return (d.menge || 0) > 0 || d.reveal_mode;
  }).length, [resources, activeCat, countsMap]);

  return (
    <div>
      <div className="dm-section-label">Gesammelte Mengen pro Ressource</div>
      <div className="counts-toolbar">
        <input
          className="counts-search"
          placeholder="▸ Ressource suchen…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'rgba(160,140,255,0.45)', whiteSpace: 'nowrap' }}>
          {found}/{total} entdeckt
        </span>
      </div>
      <div className="counts-cat-tabs" style={{ marginBottom: '16px' }}>
        {CATS.map(c => (
          <button key={c.id} className={`counts-cat-tab${activeCat === c.id ? ' active' : ''}`} onClick={() => { setActiveCat(c.id); setSearch(''); }}>
            {c.label}
          </button>
        ))}
      </div>
      <div className="counts-list">
        {displayed.length === 0 ? (
          <div className="counts-empty">Keine Einträge gefunden.</div>
        ) : displayed.map(r => (
          <CountRow
            key={`${activeCat}:${r.id}`}
            catId={activeCat}
            resource={r}
            initialData={countsMap[`${activeCat}:${r.id}`] || null}
            thresholdsMap={thresholdsMap}
            onSaved={onSaved}
          />
        ))}
      </div>
      <div className="counts-hint">
        Eingabe bestätigen mit Enter oder OK-Button. Gelbe Umrandung = ungespeicherte Änderung.
      </div>
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
        </div>

        {loading ? (
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'rgba(160,140,255,0.4)', padding: '24px 0' }}>Lädt…</div>
        ) : activeTab === 'mengen' ? (
          <CountsSection countsMap={countsMap} thresholdsMap={thresholdsMap} onSaved={handleCountSaved} />
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

