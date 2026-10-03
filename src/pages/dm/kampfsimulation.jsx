// Page entry for /dm/kampfsimulation.html
import '../../components/nav.jsx';
import '../../components/site-gate.jsx';
import '../../components/monster-detail.jsx';

;(function () {
(function () {
const {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo
} = React;
const {
  SiteGate,
  SiteNav
} = window;

// ── Helpers ───────────────────────────────────────────────────────────────────
function formatCR(cr) {
  if (cr === 0) return '0';
  if (cr === 0.125) return '1/8';
  if (cr === 0.25) return '1/4';
  if (cr === 0.5) return '1/2';
  return String(cr);
}
function getModStr(val) {
  const m = Math.floor(((val || 10) - 10) / 2);
  return (m >= 0 ? '+' : '') + m;
}
const STORAGE_KEY_CHARS = 'meruria_characters';
const LS_DRAFT = 'sim_player_draft';
function charZauberToSim(charZauber) {
  return (charZauber || []).filter(z => z.schaden || z.istHeilung).map(z => ({
    id: z.id,
    name: z.name,
    istHeilung: !!z.istHeilung,
    heilung: z.heilung || null,
    schaden: z.schaden || null,
    schadenTyp: z.schadenTyp || null,
    halbiert: !!z.halbiert,
    istAngriff: !!z.istAngriff,
    attr: z.istHeilung ? null : z.rettungswurfAttribut || (z.istAngriff ? null : 'GES'),
    sg: z.istAngriff ? 5 : 13
  }));
}
function charEntryToSimPlayer(entry) {
  const sim = entry._simData || {};
  const ch = entry._char || {};
  const st = ch.stats || {};
  return {
    _kind: 'player',
    id: entry.id,
    name: sim.name !== undefined ? sim.name : ch.name || entry.name || '?',
    klasse: sim.klasse || ch.class || entry.class || '—',
    stufe: sim.stufe !== undefined ? sim.stufe : ch.level || 1,
    rk: sim.rk !== undefined ? sim.rk : ch.ac || 10,
    maxTp: sim.maxTp !== undefined ? sim.maxTp : ch.hp || 10,
    attribute: sim.attribute || {
      STR: st.str || 10,
      DEX: st.dex || 10,
      CON: st.con || 10,
      INT: st.int || 10,
      WIS: st.wis || 10,
      CHA: st.cha || 10
    },
    rettungswuerfe: sim.rettungswuerfe || {},
    angriffeProRunde: sim.angriffeProRunde || 1,
    angriffe: sim.angriffe || [{
      id: uid(),
      name: 'Angriff',
      bonus: 3,
      schaden: '1W8+2',
      schadenstyp: 'Hieb',
      isFern: false
    }],
    zauber: sim.zauber || charZauberToSim(ch.zauber)
  };
}
function dbRowToSimPlayer(row) {
  const d = row.char_data || {};
  const st = d.stats || {};
  const attr = key => st[key] || d[key] || 10;
  return {
    _kind: 'player',
    id: row.id,
    name: d.name || row.name || '?',
    klasse: d.class || d.klasse || '—',
    stufe: d.level || 1,
    rk: d.ac || d.rk || 10,
    maxTp: d.hp || d.maxTp || 10,
    attribute: {
      STR: attr('str'),
      DEX: attr('dex'),
      CON: attr('con'),
      INT: attr('int'),
      WIS: attr('wis'),
      CHA: attr('cha')
    },
    rettungswuerfe: {},
    angriffeProRunde: 1,
    angriffe: [{
      id: uid(),
      name: 'Angriff',
      bonus: Math.floor((attr('str') - 10) / 2) + 2,
      schaden: '1W8+2',
      schadenstyp: 'Hieb',
      isFern: false
    }],
    zauber: charZauberToSim(d.zauber)
  };
}
function loadPlayers() {
  try {
    const entries = JSON.parse(localStorage.getItem(STORAGE_KEY_CHARS) || '[]');
    return entries.map(charEntryToSimPlayer);
  } catch {
    return [];
  }
}
function savePlayers(simPlayers) {
  try {
    let entries = JSON.parse(localStorage.getItem(STORAGE_KEY_CHARS) || '[]');
    const simIds = new Set(simPlayers.map(p => p.id));
    simPlayers.forEach(p => {
      const simData = {
        klasse: p.klasse,
        stufe: p.stufe,
        rk: p.rk,
        maxTp: p.maxTp,
        attribute: p.attribute,
        rettungswuerfe: p.rettungswuerfe,
        angriffeProRunde: p.angriffeProRunde,
        angriffe: p.angriffe,
        zauber: p.zauber
      };
      const idx = entries.findIndex(e => e.id === p.id);
      if (idx >= 0) {
        entries[idx] = {
          ...entries[idx],
          name: p.name,
          _simData: simData
        };
      } else {
        entries.push({
          id: p.id,
          name: p.name,
          class: p.klasse,
          _simData: simData
        });
      }
    });
    entries = entries.map(e => {
      if (simIds.has(e.id)) return e;
      if (e._simData) {
        const {
          _simData,
          ...rest
        } = e;
        if (!rest._char && !rest.race && !rest.division) return null;
        return rest;
      }
      return e;
    }).filter(Boolean);
    localStorage.setItem(STORAGE_KEY_CHARS, JSON.stringify(entries));
  } catch {}
}
function loadDraft() {
  try {
    return JSON.parse(localStorage.getItem(LS_DRAFT));
  } catch {
    return null;
  }
}
function saveDraft(f) {
  try {
    localStorage.setItem(LS_DRAFT, JSON.stringify(f));
  } catch {}
}
function clearDraft() {
  localStorage.removeItem(LS_DRAFT);
}
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}
const KLASSEN = ['Barbar', 'Barde', 'Druide', 'Hexenmeister', 'Kämpfer', 'Kleriker', 'Magier', 'Magieschmied', 'Mönch', 'Paladin', 'Schurke', 'Waldläufer', 'Zauberer'];
const SAVE_ATTRS = [{
  val: 'GES',
  label: 'GES – Geschicklichkeit'
}, {
  val: 'KON',
  label: 'KON – Konstitution'
}, {
  val: 'STR',
  label: 'STR – Stärke'
}, {
  val: 'INT',
  label: 'INT – Intelligenz'
}, {
  val: 'WEI',
  label: 'WEI – Weisheit'
}, {
  val: 'CHA',
  label: 'CHA – Charisma'
}];
const EMPTY_PLAYER = {
  id: '',
  name: '',
  klasse: '',
  stufe: 1,
  rk: 14,
  maxTp: 40,
  angriffeProRunde: 1,
  attribute: {
    STR: 10,
    DEX: 10,
    CON: 10,
    INT: 10,
    WIS: 10,
    CHA: 10
  },
  rettungswuerfe: {},
  angriffe: [{
    id: '',
    name: 'Schwert',
    bonus: 4,
    schaden: '1W8+3',
    schadenstyp: 'Hieb',
    isFern: false
  }],
  zauber: [],
  _kind: 'player'
};

// ── Combatant Card ─────────────────────────────────────────────────────────────
function CombatantCard({
  c,
  members,
  count,
  onRemove,
  onAddOne,
  onDetail,
  onEdit,
  onSessionChange
}) {
  const isMonster = c._kind === 'monster';
  const meta = isMonster ? `HG ${formatCR(c.cr)} · ${c.tp} TP · RK ${c.rk}` : `${c.klasse} Stufe ${c.stufe} · RK ${c.rk}`;
  const clickHandler = isMonster ? onDetail : onEdit;
  const sess = e => e.stopPropagation();
  const currentTp = c.currentTp !== undefined ? c.currentTp : c.maxTp;
  const tempTp = c.tempTp || 0;
  const inspiration = !!c.inspiration;
  const allMembers = members || [c];
  return /*#__PURE__*/React.createElement("div", {
    className: `sim-combatant-card${!isMonster ? ' sim-player-card' : ''}${clickHandler ? ' sim-combatant-card-clickable' : ''}`,
    onClick: clickHandler
  }, isMonster && c.bild ? /*#__PURE__*/React.createElement("img", {
    src: c.bild,
    alt: c.name,
    className: "sim-combatant-img",
    onError: e => {
      e.target.style.display = 'none';
    }
  }) : /*#__PURE__*/React.createElement("div", {
    className: "sim-combatant-img-placeholder"
  }, c._kind === 'player' ? '⚔' : '?'), /*#__PURE__*/React.createElement("div", {
    className: "sim-combatant-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim-combatant-name"
  }, c.name, isMonster && /*#__PURE__*/React.createElement("span", {
    className: "sim-tags"
  }, c.art && /*#__PURE__*/React.createElement("span", {
    className: "sim-tag"
  }, c.art), c.unterart && c.unterart !== 'NPC' && /*#__PURE__*/React.createElement("span", {
    className: "sim-tag sim-tag-sub"
  }, c.unterart))), /*#__PURE__*/React.createElement("div", {
    className: "sim-combatant-meta"
  }, meta), isMonster && onSessionChange && /*#__PURE__*/React.createElement("div", {
    className: "sim-session-row",
    onClick: sess,
    style: {
      flexWrap: 'wrap',
      gap: 4
    }
  }, allMembers.map((m, i) => /*#__PURE__*/React.createElement("label", {
    key: m._uid,
    className: "sim-session-field",
    title: "Max-TP festlegen (leer = w\xFCrfeln)"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sim-session-lbl"
  }, allMembers.length > 1 ? i + 1 : 'TP'), /*#__PURE__*/React.createElement("input", {
    className: "sim-session-input",
    type: "number",
    min: 1,
    max: 9999,
    value: m.currentTp !== undefined ? m.currentTp : '',
    placeholder: String(m.tp),
    onChange: e => {
      const v = e.target.value === '' ? undefined : Math.max(1, +e.target.value);
      onSessionChange(m._uid, 'currentTp', v);
    }
  }), m.tp_wuerfel && /*#__PURE__*/React.createElement("button", {
    className: "sim-tp-roll-btn",
    title: `TP würfeln (${m.tp_wuerfel})`,
    onClick: e => {
      e.stopPropagation();
      onSessionChange(m._uid, 'currentTp', rollExpr(m.tp_wuerfel).total);
    }
  }, "\u2684")))), !isMonster && onSessionChange && /*#__PURE__*/React.createElement("div", {
    className: "sim-session-row",
    onClick: sess
  }, /*#__PURE__*/React.createElement("label", {
    className: "sim-session-field",
    title: "Aktuelle Trefferpunkte"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sim-session-lbl"
  }, "TP"), /*#__PURE__*/React.createElement("input", {
    className: "sim-session-input",
    type: "number",
    min: 0,
    max: c.maxTp,
    value: currentTp,
    onChange: e => onSessionChange(c._uid, 'currentTp', Math.min(c.maxTp, Math.max(0, +e.target.value)))
  }), /*#__PURE__*/React.createElement("span", {
    className: "sim-session-max"
  }, "/", c.maxTp)), /*#__PURE__*/React.createElement("label", {
    className: "sim-session-field",
    title: "Tempor\xE4re Trefferpunkte"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sim-session-lbl"
  }, "Temp"), /*#__PURE__*/React.createElement("input", {
    className: "sim-session-input",
    type: "number",
    min: 0,
    max: 999,
    value: tempTp,
    onChange: e => onSessionChange(c._uid, 'tempTp', Math.max(0, +e.target.value))
  })), /*#__PURE__*/React.createElement("label", {
    className: "sim-session-field sim-session-insp",
    title: "Inspiration",
    onClick: e => {
      e.stopPropagation();
      onSessionChange(c._uid, 'inspiration', !inspiration);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sim-session-lbl"
  }, "Insp."), /*#__PURE__*/React.createElement("span", {
    className: `sim-insp-dot${inspiration ? ' active' : ''}`
  }, "\u2726")))), isMonster && onAddOne ? /*#__PURE__*/React.createElement("div", {
    className: "sim-count-stepper",
    onClick: sess
  }, /*#__PURE__*/React.createElement("button", {
    className: "sim-count-btn",
    onClick: onRemove,
    title: "Einen entfernen"
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    className: "sim-count-num"
  }, count), /*#__PURE__*/React.createElement("button", {
    className: "sim-count-btn",
    onClick: onAddOne,
    title: "Einen hinzuf\xFCgen"
  }, "+")) : /*#__PURE__*/React.createElement("button", {
    className: "sim-combatant-remove",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    title: "Entfernen"
  }, "\u2715"));
}

// ── Monster Picker ────────────────────────────────────────────────────────────
function MonsterPicker({
  onAdd,
  onClose,
  selected,
  monsterFilter,
  onMonsterFilter,
  onDetail
}) {
  const [q, setQ] = useState('');
  const all = useMemo(() => (window.MONSTER_DATA || []).filter(m => m.name && m.tp), []);
  const allArts = useMemo(() => [...new Set(all.map(m => m.art).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'de')), [all]);
  const allUnterarts = useMemo(() => [...new Set(all.map(m => m.unterart).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'de')), [all]);
  const allUmgebungen = useMemo(() => [...new Set(all.flatMap(m => Array.isArray(m.umgebung) ? m.umgebung : m.umgebung ? [m.umgebung] : []))].sort((a, b) => a.localeCompare(b, 'de')), [all]);
  const setF = (key, val) => onMonsterFilter(f => ({
    ...f,
    [key]: val
  }));
  const results = useMemo(() => {
    let list = all;
    if (monsterFilter?.art) list = list.filter(m => m.art === monsterFilter.art);
    if (monsterFilter?.unterart) list = list.filter(m => m.unterart === monsterFilter.unterart);
    if (monsterFilter?.umgebung) list = list.filter(m => Array.isArray(m.umgebung) ? m.umgebung.includes(monsterFilter.umgebung) : m.umgebung === monsterFilter.umgebung);
    if (monsterFilter?.crMin !== '' && monsterFilter?.crMin != null) list = list.filter(m => (m.cr ?? 0) >= Number(monsterFilter.crMin));
    if (monsterFilter?.crMax !== '' && monsterFilter?.crMax != null) list = list.filter(m => (m.cr ?? 0) <= Number(monsterFilter.crMax));
    if (q.trim()) {
      const low = q.toLowerCase();
      list = list.filter(m => m.name.toLowerCase().includes(low));
    }
    return list.slice(0, 100);
  }, [q, all, monsterFilter]);
  const activeFilters = [monsterFilter?.art, monsterFilter?.unterart, monsterFilter?.umgebung, monsterFilter?.crMin, monsterFilter?.crMax].filter(v => v !== '' && v != null).length;
  return /*#__PURE__*/React.createElement("div", {
    className: "sim-overlay",
    onClick: e => e.target === e.currentTarget && onClose()
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim-modal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim-modal-header"
  }, /*#__PURE__*/React.createElement("h3", null, "Monster hinzuf\xFCgen"), /*#__PURE__*/React.createElement("button", {
    className: "sim-modal-close",
    onClick: onClose
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "sim-modal-body"
  }, /*#__PURE__*/React.createElement("input", {
    className: "sim-search",
    placeholder: "Monster suchen\u2026",
    value: q,
    onChange: e => setQ(e.target.value),
    autoFocus: true,
    style: {
      marginBottom: 8
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 6,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("select", {
    className: "sim-form-select",
    value: monsterFilter?.art || '',
    onChange: e => setF('art', e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Alle Arten"), allArts.map(a => /*#__PURE__*/React.createElement("option", {
    key: a,
    value: a
  }, a))), /*#__PURE__*/React.createElement("select", {
    className: "sim-form-select",
    value: monsterFilter?.unterart || '',
    onChange: e => setF('unterart', e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Alle Unterarten"), allUnterarts.map(a => /*#__PURE__*/React.createElement("option", {
    key: a,
    value: a
  }, a))), /*#__PURE__*/React.createElement("select", {
    className: "sim-form-select",
    value: monsterFilter?.umgebung || '',
    onChange: e => setF('umgebung', e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Alle Umgebungen"), allUmgebungen.map(a => /*#__PURE__*/React.createElement("option", {
    key: a,
    value: a
  }, a)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.72rem',
      fontFamily: 'var(--font-mono)',
      color: 'rgba(var(--accent-rgb),calc(0.45*var(--ka) + var(--tb)))',
      whiteSpace: 'nowrap',
      minWidth: 22
    }
  }, "HG"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: "sim-form-select sim-cr-input",
    value: monsterFilter?.crMin ?? '',
    onChange: e => setF('crMin', e.target.value),
    placeholder: "Min",
    min: "0",
    max: "30",
    step: "0.125"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(var(--accent-rgb),calc(0.3*var(--ka) + var(--tb)))',
      flexShrink: 0
    }
  }, "\u2013"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: "sim-form-select sim-cr-input",
    value: monsterFilter?.crMax ?? '',
    onChange: e => setF('crMax', e.target.value),
    placeholder: "Max",
    min: "0",
    max: "30",
    step: "0.125"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.68rem',
      color: 'rgba(var(--accent-rgb),calc(0.35*var(--ka) + var(--tb)))',
      marginBottom: 8,
      fontFamily: 'var(--font-mono)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, results.length, " Monster", activeFilters > 0 ? ` · ${activeFilters} Filter aktiv` : ''), activeFilters > 0 && /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      border: 'none',
      color: 'rgba(var(--accent-rgb),calc(0.5*var(--ka) + var(--tb)))',
      cursor: 'pointer',
      fontSize: '0.68rem',
      padding: 0
    },
    onClick: () => onMonsterFilter({
      art: '',
      unterart: '',
      umgebung: '',
      crMin: '',
      crMax: ''
    })
  }, "Filter leeren")), /*#__PURE__*/React.createElement("div", {
    className: "sim-monster-list"
  }, results.map(m => {
    const key = m.name + (m.source || '');
    const count = selected?.get(key) || 0;
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      className: "sim-monster-row",
      onClick: () => onAdd({
        ...m,
        _kind: 'monster'
      })
    }, m.bild ? /*#__PURE__*/React.createElement("img", {
      src: m.bild,
      alt: m.name,
      className: "sim-monster-row-img",
      onError: e => {
        e.target.style.display = 'none';
      }
    }) : /*#__PURE__*/React.createElement("div", {
      className: "sim-monster-row-img",
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.6rem',
        color: 'rgba(var(--accent-rgb),calc(0.3*var(--ka) + var(--tb)))'
      }
    }, "?"), /*#__PURE__*/React.createElement("span", {
      className: "sim-monster-row-name"
    }, count > 0 && /*#__PURE__*/React.createElement("span", {
      className: "sim-picker-count"
    }, "\xD7", count), m.name, /*#__PURE__*/React.createElement("span", {
      className: "sim-tags"
    }, m.art && /*#__PURE__*/React.createElement("span", {
      className: "sim-tag"
    }, m.art), m.unterart && m.unterart !== 'NPC' && /*#__PURE__*/React.createElement("span", {
      className: "sim-tag sim-tag-sub"
    }, m.unterart))), /*#__PURE__*/React.createElement("span", {
      className: "sim-monster-row-meta"
    }, "HG ", formatCR(m.cr), " \xB7 ", m.tp, " TP"), onDetail && /*#__PURE__*/React.createElement("button", {
      className: "sim-monster-row-info",
      title: "Details",
      onClick: e => {
        e.stopPropagation();
        onDetail(m);
      }
    }, "i"));
  })))));
}

// ── Spell Picker ─────────────────────────────────────────────────────────────
function SpellPicker({
  onAdd,
  onClose
}) {
  const [q, setQ] = useState('');
  const [filterKlasse, setFilterKlasse] = useState('');
  const [mode, setMode] = useState('schaden');
  const allDmg = useMemo(() => (window.ZAUBER_DATA || []).filter(z => z.schaden && (z.rettungswurfAttribut || z.istAngriff)).sort((a, b) => a.name.localeCompare(b.name, 'de')), []);
  const allHeal = useMemo(() => (window.ZAUBER_DATA || []).filter(z => isHealingSpell(z)).map(z => ({
    ...z,
    _heilungsDice: extractHealingDice(z.beschreibung)
  })).filter(z => z._heilungsDice).sort((a, b) => a.name.localeCompare(b.name, 'de')), []);
  const all = mode === 'heilung' ? allHeal : allDmg;
  const results = useMemo(() => {
    let list = all;
    if (filterKlasse) list = list.filter(z => z.klassen?.includes(filterKlasse));
    if (q.trim()) {
      const low = q.toLowerCase();
      list = list.filter(z => z.name.toLowerCase().includes(low));
    }
    return list.slice(0, 120);
  }, [q, filterKlasse, all, mode]);
  const TYPE_COLORS = {
    Feuer: '#f97316',
    Blitz: '#a78bfa',
    Kälte: '#38bdf8',
    Eis: '#7dd3fc',
    Gift: '#4ade80',
    Säure: '#84cc16',
    Nekrotisch: '#818cf8',
    Psychisch: '#e879f9',
    Energie: '#fbbf24',
    Schall: '#fb923c',
    Strahlung: '#fde68a',
    Gleißend: '#fef08a',
    Heilig: '#fcd34d',
    Wucht: '#94a3b8',
    Stich: '#94a3b8',
    Hieb: '#94a3b8',
    Variabel: '#c084fc',
    Strahlend: '#fde68a'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "sim-overlay",
    onClick: e => e.target === e.currentTarget && onClose()
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim-modal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim-modal-header"
  }, /*#__PURE__*/React.createElement("h3", null, "Zauber hinzuf\xFCgen"), /*#__PURE__*/React.createElement("button", {
    className: "sim-modal-close",
    onClick: onClose
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "sim-modal-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim-tabs",
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: `sim-tab ${mode === 'schaden' ? 'active' : ''}`,
    onClick: () => setMode('schaden')
  }, "Schadenszauber"), /*#__PURE__*/React.createElement("button", {
    className: `sim-tab ${mode === 'heilung' ? 'active' : ''}`,
    onClick: () => setMode('heilung')
  }, "Heilzauber")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "sim-search",
    style: {
      marginBottom: 0,
      flex: 1
    },
    placeholder: "Zauber suchen\u2026",
    value: q,
    onChange: e => setQ(e.target.value),
    autoFocus: true
  }), /*#__PURE__*/React.createElement("select", {
    className: "sim-form-select",
    style: {
      width: 140,
      flexShrink: 0
    },
    value: filterKlasse,
    onChange: e => setFilterKlasse(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Alle Klassen"), KLASSEN.map(k => /*#__PURE__*/React.createElement("option", {
    key: k,
    value: k
  }, k)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.68rem',
      color: 'rgba(var(--accent-rgb),calc(0.35*var(--ka) + var(--tb)))',
      marginBottom: 8,
      fontFamily: 'var(--font-mono)'
    }
  }, results.length, " Zauber \xB7 ", mode === 'heilung' ? 'Heilzauber' : 'nur Schadenszauber'), /*#__PURE__*/React.createElement("div", {
    className: "sim-monster-list"
  }, mode === 'heilung' ? results.map(z => /*#__PURE__*/React.createElement("div", {
    key: z.name,
    className: "sim-monster-row",
    onClick: () => {
      onAdd(z);
      onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: 'rgba(80,200,120,0.08)',
      border: '1px solid rgba(80,200,120,0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '0.75rem',
      flexShrink: 0
    }
  }, "\uD83D\uDC9A"), /*#__PURE__*/React.createElement("span", {
    className: "sim-monster-row-name"
  }, z.name), /*#__PURE__*/React.createElement("span", {
    className: "sim-monster-row-meta"
  }, "Grad ", z.grad, " \xB7 ", z._heilungsDice, " TP"))) : results.map(z => /*#__PURE__*/React.createElement("div", {
    key: z.name,
    className: "sim-monster-row",
    onClick: () => {
      onAdd(z);
      onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: 'rgba(var(--accent-rgb),calc(0.06*var(--ka)))',
      border: '1px solid rgba(var(--accent-rgb),calc(0.12*var(--ka)))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '0.6rem',
      color: TYPE_COLORS[z.schadenTyp] || 'rgba(var(--accent-rgb),calc(0.4*var(--ka)))',
      flexShrink: 0,
      fontWeight: 700
    }
  }, (z.schadenTyp || '?').substring(0, 2)), /*#__PURE__*/React.createElement("span", {
    className: "sim-monster-row-name"
  }, z.name), /*#__PURE__*/React.createElement("span", {
    className: "sim-monster-row-meta"
  }, "Grad ", z.grad, " \xB7 ", z.schaden, " \xB7 ", z.schadenTyp || '?', z.rettungswurfAttribut ? ` · ${z.rettungswurfAttribut}-Save SG?` : ' · Angriff', z.halbiert ? ' · ½' : '')))))));
}

// ── Player Form ───────────────────────────────────────────────────────────────
function PlayerModal({
  initial,
  savedPlayers,
  currentGroup,
  onSave,
  onAddExisting,
  onDelete,
  onClose,
  dbChars
}) {
  const [tab, setTab] = useState('new');
  const [dbSearch, setDbSearch] = useState('');
  const isNew = !initial;
  const initData = initial ? {
    ...EMPTY_PLAYER,
    ...initial,
    zauber: initial.zauber || []
  } : {
    ...EMPTY_PLAYER
  };
  const [form, setForm] = useState(() => {
    if (isNew) {
      const draft = loadDraft();
      if (draft) return draft;
    }
    return {
      ...initData,
      id: initData.id || uid()
    };
  });
  // Track whether klasse is custom (not in predefined list)
  const [customKlasse, setCustomKlasse] = useState(!!(form.klasse && !KLASSEN.includes(form.klasse)));
  // Autosave draft on every change (new players only)
  useEffect(() => {
    if (isNew) saveDraft(form);
  }, [form]);
  function set(path, val) {
    setForm(f => {
      const copy = JSON.parse(JSON.stringify(f));
      const parts = path.split('.');
      let obj = copy;
      for (let i = 0; i < parts.length - 1; i++) obj = obj[parts[i]];
      obj[parts[parts.length - 1]] = val;
      return copy;
    });
  }
  function addAttack() {
    setForm(f => ({
      ...f,
      angriffe: [...f.angriffe, {
        id: uid(),
        name: '',
        bonus: 3,
        schaden: '1W6+2',
        schadenstyp: '',
        isFern: false
      }]
    }));
  }
  function removeAttack(id) {
    setForm(f => ({
      ...f,
      angriffe: f.angriffe.filter(a => a.id !== id)
    }));
  }
  function setAttack(id, key, val) {
    setForm(f => ({
      ...f,
      angriffe: f.angriffe.map(a => a.id === id ? {
        ...a,
        [key]: val
      } : a)
    }));
  }
  const [showSpellPicker, setShowSpellPicker] = useState(false);
  function addSpellFromPicker(z) {
    const isHeil = !!z._heilungsDice;
    setForm(f => ({
      ...f,
      zauber: [...(f.zauber || []), isHeil ? {
        id: uid(),
        name: z.name,
        istHeilung: true,
        heilung: z._heilungsDice,
        schaden: null,
        schadenTyp: null,
        halbiert: false,
        istAngriff: false,
        attr: null,
        sg: 0
      } : {
        id: uid(),
        name: z.name,
        attr: z.rettungswurfAttribut || 'GES',
        sg: z.istAngriff ? 5 : 13,
        schaden: z.schaden,
        halbiert: z.halbiert,
        schadenTyp: z.schadenTyp,
        istAngriff: z.istAngriff
      }]
    }));
  }
  function removeSpell(id) {
    setForm(f => ({
      ...f,
      zauber: f.zauber.filter(z => z.id !== id)
    }));
  }
  function setSpell(id, key, val) {
    setForm(f => ({
      ...f,
      zauber: f.zauber.map(z => z.id === id ? {
        ...z,
        [key]: val
      } : z)
    }));
  }
  const attrs = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];
  const attrLabels = {
    STR: 'STR',
    DEX: 'GES',
    CON: 'KON',
    INT: 'INT',
    WIS: 'WEI',
    CHA: 'CHA'
  };
  const ATTR_LABEL_MAP = {
    GES: 'Geschicklichkeit',
    KON: 'Konstitution',
    STR: 'Stärke',
    INT: 'Intelligenz',
    WEI: 'Weisheit',
    CHA: 'Charisma'
  };
  function buildAktionen() {
    const n = form.angriffeProRunde || 1;
    const attackActions = form.angriffe.filter(a => a.name).map(a => ({
      name: a.name,
      beschreibung: `Nahkampf-Waffenangriff: +${a.bonus} zum Treffen, Reichweite 1,5 m, ein Ziel. Treffer: (${a.schaden}) ${a.schadenstyp}schaden.`
    }));
    const spellActions = (form.zauber || []).filter(z => z.name && !z.istHeilung).map(z => ({
      name: z.name,
      beschreibung: z.istAngriff ? `Fernkampf-Zauberangriff: +${z.sg} zum Treffen, Reichweite 18 m, ein Ziel. Treffer: (${z.schaden}) ${z.schadenTyp || ''}schaden.` : `${ATTR_LABEL_MAP[z.attr] || z.attr}srettungswurf gegen SG ${z.sg}. Treffer: (${z.schaden}) Schaden${z.halbiert ? ', halb so viel bei Erfolg' : ''}.`
    }));
    const healActions = (form.zauber || []).filter(z => z.name && z.istHeilung && z.heilung).map(z => ({
      name: z.name,
      beschreibung: `Heilzauber: Stellt ${z.heilung} Trefferpunkte wieder her bei einem Verbündeten.`
    }));
    const result = [];
    if (n > 1 && attackActions.length > 0) {
      const names = attackActions.map(a => a.name).join(' und ');
      const multiDesc = n === attackActions.length ? `Der Charakter führt ${n} Angriffe durch: ${names}.` : `Der Charakter führt ${n} Angriffe durch.`;
      result.push({
        name: 'Mehrfachangriff',
        beschreibung: multiDesc
      });
    }
    return [...result, ...attackActions, ...spellActions, ...healActions];
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "sim-overlay",
    onClick: e => e.target === e.currentTarget && onClose()
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim-modal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim-modal-header"
  }, /*#__PURE__*/React.createElement("h3", null, initial ? `${initial.name} bearbeiten` : 'Spielercharakter'), /*#__PURE__*/React.createElement("button", {
    className: "sim-modal-close",
    onClick: onClose
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "sim-modal-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim-tabs"
  }, /*#__PURE__*/React.createElement("button", {
    className: `sim-tab ${tab === 'new' ? 'active' : ''}`,
    onClick: () => setTab('new')
  }, "Neuer Charakter"), /*#__PURE__*/React.createElement("button", {
    className: `sim-tab ${tab === 'encyclopedia' ? 'active' : ''}`,
    onClick: () => setTab('encyclopedia')
  }, "Spielercharaktere (", (dbChars || []).filter(r => r.type === 'spieler').length, ")"), /*#__PURE__*/React.createElement("button", {
    className: `sim-tab ${tab === 'npc' ? 'active' : ''}`,
    onClick: () => setTab('npc')
  }, "NSC (", (dbChars || []).filter(r => r.type === 'nsc').length, ")"), /*#__PURE__*/React.createElement("button", {
    className: `sim-tab ${tab === 'load' ? 'active' : ''}`,
    onClick: () => setTab('load')
  }, "Gespeichert (", savedPlayers.length, ")")), tab === 'load' && /*#__PURE__*/React.createElement("div", null, savedPlayers.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(var(--accent-rgb),calc(0.4*var(--ka) + var(--tb)))',
      fontSize: '0.8rem'
    }
  }, "Keine gespeicherten Charaktere."), /*#__PURE__*/React.createElement("div", {
    className: "sim-saved-chars"
  }, savedPlayers.map(p => {
    const inGroup = (currentGroup || []).some(c => c.id === p.id);
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      className: `sim-saved-char-row${inGroup ? ' sim-saved-char-row-dimmed' : ''}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "sim-saved-char-name"
    }, p.name, inGroup && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '0.62rem',
        color: 'rgba(var(--accent-rgb),calc(0.4*var(--ka) + var(--tb)))',
        marginLeft: 6
      }
    }, "\u2713")), /*#__PURE__*/React.createElement("div", {
      className: "sim-saved-char-meta"
    }, p.klasse, " Stufe ", p.stufe, " \xB7 ", p.maxTp, " TP \xB7 RK ", p.rk), /*#__PURE__*/React.createElement("button", {
      className: "sim-btn sim-btn-ghost",
      style: {
        padding: '5px 10px',
        fontSize: '0.68rem'
      },
      onClick: () => {
        onAddExisting(p);
        onClose();
      }
    }, "Hinzuf\xFCgen"), /*#__PURE__*/React.createElement("button", {
      className: "sim-btn sim-btn-danger",
      style: {
        padding: '5px 8px',
        fontSize: '0.68rem'
      },
      onClick: () => onDelete(p.id)
    }, "\u2715"));
  }))), (tab === 'npc' || tab === 'encyclopedia') && (() => {
    const type = tab === 'npc' ? 'nsc' : 'spieler';
    const rows = (dbChars || []).filter(r => r.type === type);
    const q = dbSearch.trim().toLowerCase();
    const filtered = q ? rows.filter(r => (r.name || '').toLowerCase().includes(q) || (r.char_data?.class || r.char_data?.klasse || '').toLowerCase().includes(q)) : rows;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
      className: "sim-search",
      placeholder: "Suchen\u2026",
      value: dbSearch,
      onChange: e => setDbSearch(e.target.value),
      autoFocus: true,
      style: {
        marginBottom: 8
      }
    }), rows.length === 0 && /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'rgba(var(--accent-rgb),calc(0.4*var(--ka) + var(--tb)))',
        fontSize: '0.8rem'
      }
    }, type === 'nsc' ? 'Keine NSC in der DB.' : 'Keine Spielercharaktere in der DB.'), /*#__PURE__*/React.createElement("div", {
      className: "sim-saved-chars"
    }, filtered.map(row => {
      const p = dbRowToSimPlayer(row);
      const inGroup = (currentGroup || []).some(c => c.id === p.id);
      return /*#__PURE__*/React.createElement("div", {
        key: row.id,
        className: `sim-saved-char-row${inGroup ? ' sim-saved-char-row-dimmed' : ''}`
      }, /*#__PURE__*/React.createElement("div", {
        className: "sim-saved-char-name"
      }, p.name, inGroup && /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: '0.62rem',
          color: 'rgba(var(--accent-rgb),calc(0.4*var(--ka) + var(--tb)))',
          marginLeft: 6
        }
      }, "\u2713")), /*#__PURE__*/React.createElement("div", {
        className: "sim-saved-char-meta"
      }, p.klasse, " Stufe ", p.stufe, " \xB7 ", p.maxTp, " TP \xB7 RK ", p.rk), /*#__PURE__*/React.createElement("button", {
        className: "sim-btn sim-btn-ghost",
        style: {
          padding: '5px 10px',
          fontSize: '0.68rem'
        },
        onClick: () => {
          onAddExisting(p);
          onClose();
        }
      }, "Hinzuf\xFCgen"));
    }), q && filtered.length === 0 && rows.length > 0 && /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'rgba(var(--accent-rgb),calc(0.3*var(--ka) + var(--tb)))',
        fontSize: '0.8rem'
      }
    }, "Keine Treffer.")));
  })(), tab === 'new' && /*#__PURE__*/React.createElement("div", {
    className: "sim-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim-form-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "sim-form-label"
  }, "Name"), /*#__PURE__*/React.createElement("input", {
    className: "sim-form-input",
    value: form.name,
    onChange: e => set('name', e.target.value),
    placeholder: "Charakter Name",
    autoFocus: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "sim-form-label"
  }, "Klasse"), /*#__PURE__*/React.createElement("select", {
    className: "sim-form-select",
    value: customKlasse ? '__custom' : form.klasse || '',
    onChange: e => {
      if (e.target.value === '__custom') {
        setCustomKlasse(true);
        set('klasse', '');
      } else {
        setCustomKlasse(false);
        set('klasse', e.target.value);
      }
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u2014 Klasse w\xE4hlen \u2014"), KLASSEN.map(k => /*#__PURE__*/React.createElement("option", {
    key: k,
    value: k
  }, k)), /*#__PURE__*/React.createElement("option", {
    value: "__custom"
  }, "Andere\u2026")), customKlasse && /*#__PURE__*/React.createElement("input", {
    className: "sim-form-input",
    style: {
      marginTop: 4
    },
    value: form.klasse,
    onChange: e => set('klasse', e.target.value),
    placeholder: "Klassenname",
    autoFocus: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sim-form-row",
    style: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "sim-form-label"
  }, "Stufe"), /*#__PURE__*/React.createElement("input", {
    className: "sim-form-input",
    type: "number",
    min: 1,
    max: 20,
    value: form.stufe,
    onChange: e => set('stufe', +e.target.value)
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "sim-form-label"
  }, "Trefferpunkte"), /*#__PURE__*/React.createElement("input", {
    className: "sim-form-input",
    type: "number",
    min: 1,
    value: form.maxTp,
    onChange: e => set('maxTp', +e.target.value)
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "sim-form-label"
  }, "R\xFCstungsklasse"), /*#__PURE__*/React.createElement("input", {
    className: "sim-form-input",
    type: "number",
    min: 1,
    max: 30,
    value: form.rk,
    onChange: e => set('rk', +e.target.value)
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "sim-form-label"
  }, "Angriffe/Runde"), /*#__PURE__*/React.createElement("input", {
    className: "sim-form-input",
    type: "number",
    min: 1,
    max: 10,
    value: form.angriffeProRunde || 1,
    onChange: e => set('angriffeProRunde', +e.target.value),
    title: "Extra Attack: 2, \u2026"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sim-form-section"
  }, "Attribute"), /*#__PURE__*/React.createElement("div", {
    className: "sim-form-row-6"
  }, attrs.map(a => /*#__PURE__*/React.createElement("div", {
    key: a
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim-form-label"
  }, attrLabels[a]), /*#__PURE__*/React.createElement("input", {
    className: "sim-form-input",
    type: "number",
    min: 1,
    max: 30,
    value: form.attribute[a],
    onChange: e => set(`attribute.${a}`, +e.target.value),
    style: {
      textAlign: 'center'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "sim-form-section"
  }, "Rettungsw\xFCrfe (Bonus inkl. \xDCbung)"), /*#__PURE__*/React.createElement("div", {
    className: "sim-form-row-6"
  }, [['STR', 'STR'], ['GES', 'DEX'], ['KON', 'CON'], ['INT', 'INT'], ['WEI', 'WIS'], ['CHA', 'CHA']].map(([label, key]) => /*#__PURE__*/React.createElement("div", {
    key: key
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim-form-label"
  }, label), /*#__PURE__*/React.createElement("input", {
    className: "sim-form-input",
    type: "number",
    min: -5,
    max: 20,
    value: form.rettungswuerfe[key] ?? Math.floor(((form.attribute[key] || 10) - 10) / 2),
    onChange: e => set(`rettungswuerfe.${key}`, +e.target.value),
    style: {
      textAlign: 'center'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "sim-form-section"
  }, "Angriffe", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.65rem',
      color: 'rgba(var(--accent-rgb),calc(0.3*var(--ka) + var(--tb)))',
      marginLeft: 8,
      textTransform: 'none',
      letterSpacing: 0
    }
  }, "Name \xB7 +Bonus \xB7 W\xFCrfel \xB7 Schadenstyp")), /*#__PURE__*/React.createElement("div", {
    className: "sim-attack-list"
  }, form.angriffe.map(atk => /*#__PURE__*/React.createElement("div", {
    key: atk.id,
    className: "sim-attack-row"
  }, /*#__PURE__*/React.createElement("input", {
    className: "sim-form-input",
    placeholder: "Name",
    value: atk.name,
    onChange: e => setAttack(atk.id, 'name', e.target.value)
  }), /*#__PURE__*/React.createElement("input", {
    className: "sim-form-input",
    type: "number",
    placeholder: "+Bon",
    value: atk.bonus,
    onChange: e => setAttack(atk.id, 'bonus', +e.target.value),
    title: "Angriffsbonus"
  }), /*#__PURE__*/React.createElement("input", {
    className: "sim-form-input",
    placeholder: "1W8+3",
    value: atk.schaden,
    onChange: e => setAttack(atk.id, 'schaden', e.target.value),
    title: "Schadensw\xFCrfel"
  }), /*#__PURE__*/React.createElement("input", {
    className: "sim-form-input",
    placeholder: "Typ (opt.)",
    value: atk.schadenstyp,
    onChange: e => setAttack(atk.id, 'schadenstyp', e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    className: "sim-combatant-remove",
    onClick: () => removeAttack(atk.id),
    title: "Angriff entfernen"
  }, "\u2715"))), /*#__PURE__*/React.createElement("button", {
    className: "sim-btn sim-btn-ghost",
    style: {
      alignSelf: 'flex-start',
      marginTop: 4
    },
    onClick: addAttack
  }, "+ Angriff")), /*#__PURE__*/React.createElement("div", {
    className: "sim-form-section"
  }, "Zauber", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.65rem',
      color: 'rgba(var(--accent-rgb),calc(0.3*var(--ka) + var(--tb)))',
      marginLeft: 8,
      textTransform: 'none',
      letterSpacing: 0
    }
  }, "SG = dein Zauber-Rettungswurf-SG")), /*#__PURE__*/React.createElement("div", {
    className: "sim-attack-list"
  }, (form.zauber || []).map(z => z.istHeilung ? /*#__PURE__*/React.createElement("div", {
    key: z.id,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto 28px',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.8rem',
      fontWeight: 500,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, "\uD83D\uDC9A ", z.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.68rem',
      color: 'rgba(var(--accent-rgb),calc(0.4*var(--ka) + var(--tb)))'
    }
  }, "Heilung"), /*#__PURE__*/React.createElement("input", {
    className: "sim-form-input",
    type: "text",
    value: z.heilung || '',
    onChange: e => setSpell(z.id, 'heilung', e.target.value),
    style: {
      width: 72
    },
    title: "Heilungsw\xFCrfel (z.B. 1W8+3)"
  })), /*#__PURE__*/React.createElement("button", {
    className: "sim-combatant-remove",
    onClick: () => removeSpell(z.id),
    title: "Zauber entfernen"
  }, "\u2715")) : /*#__PURE__*/React.createElement("div", {
    key: z.id,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto 60px 28px',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.8rem',
      fontWeight: 500,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, z.name, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.68rem',
      color: 'rgba(var(--accent-rgb),calc(0.45*var(--ka) + var(--tb)))',
      marginLeft: 6,
      fontFamily: 'var(--font-mono)'
    }
  }, z.schaden, " ", z.schadenTyp, " ", z.halbiert ? '· ½' : '', " ", z.istAngriff ? '(Angriff)' : '(Save ' + z.attr + ')')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.68rem',
      color: 'rgba(var(--accent-rgb),calc(0.4*var(--ka) + var(--tb)))'
    }
  }, z.istAngriff ? 'Bonus' : 'SG'), /*#__PURE__*/React.createElement("input", {
    className: "sim-form-input",
    type: "number",
    min: -5,
    max: 30,
    value: z.sg,
    onChange: e => setSpell(z.id, 'sg', +e.target.value),
    style: {
      width: 52
    },
    title: z.istAngriff ? 'Zauberangriffs-Bonus' : 'Dein Zauber-SG'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.68rem',
      color: 'rgba(var(--accent-rgb),calc(0.35*var(--ka) + var(--tb)))',
      fontFamily: 'var(--font-mono)',
      textAlign: 'right'
    }
  }, z.attr || 'Angriff'), /*#__PURE__*/React.createElement("button", {
    className: "sim-combatant-remove",
    onClick: () => removeSpell(z.id),
    title: "Zauber entfernen"
  }, "\u2715"))), /*#__PURE__*/React.createElement("button", {
    className: "sim-btn sim-btn-ghost",
    style: {
      alignSelf: 'flex-start',
      marginTop: 4
    },
    onClick: () => setShowSpellPicker(true)
  }, "+ Zauber suchen")), showSpellPicker && /*#__PURE__*/React.createElement(SpellPicker, {
    onAdd: addSpellFromPicker,
    onClose: () => setShowSpellPicker(false)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "sim-btn sim-btn-primary",
    onClick: () => {
      if (!form.name.trim()) return;
      clearDraft();
      const p = {
        ...form,
        _kind: 'player',
        tp: form.maxTp,
        aktionen: buildAktionen()
      };
      onSave(p);
      onClose();
    }
  }, "Speichern & Hinzuf\xFCgen"), isNew && loadDraft() && /*#__PURE__*/React.createElement("button", {
    className: "sim-btn sim-btn-ghost",
    style: {
      fontSize: '0.68rem',
      opacity: 0.6
    },
    onClick: () => {
      clearDraft();
      const blank = {
        ...EMPTY_PLAYER,
        id: uid()
      };
      setForm(blank);
      setCustomKlasse(false);
    }
  }, "Entwurf verwerfen"))))));
}

// ── Monster Detail Popup ──────────────────────────────────────────────────────
function MonsterDetailPopup({
  monster,
  onClose
}) {
  const Detail = window.MonsterDetail;
  if (!Detail) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "sim-overlay",
    onClick: e => e.target === e.currentTarget && onClose(),
    style: {
      alignItems: 'flex-start',
      paddingTop: 'clamp(16px, calc(var(--vh, 1vh) * 4), 48px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim-modal",
    style: {
      maxWidth: 780,
      width: '95vw',
      maxHeight: 'calc(var(--vh, 1vh) * 88)',
      display: 'flex',
      flexDirection: 'column',
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim-modal-header",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      letterSpacing: '0.1em'
    }
  }, monster.name), /*#__PURE__*/React.createElement("button", {
    className: "sim-modal-close",
    onClick: onClose
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: 'auto',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Detail, {
    monster: monster
  }))));
}

// ── Group Panel ───────────────────────────────────────────────────────────────
function GroupPanel({
  label,
  group,
  onAdd,
  onRemove,
  onAddClone,
  onAddOpponent,
  onAddPlayer,
  onDetail,
  onEditPlayer,
  onSessionChange,
  showMatch,
  matchEnabled,
  onMatch,
  difficulty,
  onDifficulty,
  monsterFilter,
  onMonsterFilter,
  coherent,
  onCoherent,
  canRevert,
  onRevert
}) {
  const totalXP = group.filter(c => c._kind === 'monster').reduce((s, c) => s + (c.xp || 0), 0);
  // Group identical monsters, keep players individual
  const displayGroups = useMemo(() => {
    const result = [];
    const monsterIdx = new Map();
    for (let i = 0; i < group.length; i++) {
      const c = group[i];
      if (c._kind !== 'monster') {
        result.push({
          c,
          indices: [i],
          members: [c]
        });
        continue;
      }
      const key = c.name + (c.source || '');
      if (monsterIdx.has(key)) {
        result[monsterIdx.get(key)].indices.push(i);
        result[monsterIdx.get(key)].members.push(c);
      } else {
        monsterIdx.set(key, result.length);
        result.push({
          c,
          indices: [i],
          members: [c]
        });
      }
    }
    return result;
  }, [group]);
  const all = useMemo(() => (window.MONSTER_DATA || []).filter(m => m.name && m.tp), []);
  const allArts = useMemo(() => [...new Set(all.map(m => m.art).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'de')), [all]);
  const allUnterarts = useMemo(() => [...new Set(all.map(m => m.unterart).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'de')), [all]);
  const allUmgebungen = useMemo(() => [...new Set(all.flatMap(m => Array.isArray(m.umgebung) ? m.umgebung : m.umgebung ? [m.umgebung] : []))].sort((a, b) => a.localeCompare(b, 'de')), [all]);
  const setF = (key, val) => onMonsterFilter(f => ({
    ...f,
    [key]: val
  }));
  const activeFilters = [monsterFilter?.art, monsterFilter?.unterart, monsterFilter?.umgebung, monsterFilter?.crMin, monsterFilter?.crMax].filter(v => v !== '' && v != null).length;
  const DIFF_OPTS = [{
    val: 'trivial',
    label: 'Trivial'
  }, {
    val: 'leicht',
    label: 'Leicht'
  }, {
    val: 'normal',
    label: 'Normal'
  }, {
    val: 'schwer',
    label: 'Schwer'
  }, {
    val: 'toedlich',
    label: 'Tödlich'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "sim-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim-group-header"
  }, /*#__PURE__*/React.createElement("h2", null, label), /*#__PURE__*/React.createElement("span", {
    className: "sim-group-xp"
  }, group.length, " K\xE4mpfer", totalXP > 0 ? ` · ${totalXP} XP` : '')), /*#__PURE__*/React.createElement("div", {
    className: "sim-combatant-list"
  }, group.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'rgba(var(--accent-rgb),calc(0.25*var(--ka) + var(--tb)))',
      fontSize: '0.75rem',
      textAlign: 'center',
      padding: '20px 0'
    }
  }, "Noch keine K\xE4mpfer"), displayGroups.map(({
    c,
    indices,
    members
  }) => /*#__PURE__*/React.createElement(CombatantCard, {
    key: c._uid || c.name + indices[0],
    c: c,
    members: members,
    count: indices.length,
    onRemove: () => onRemove(indices[indices.length - 1]),
    onAddOne: c._kind === 'monster' && onAddClone ? () => onAddClone(c) : undefined,
    onDetail: c._kind === 'monster' ? () => onDetail && onDetail(c) : undefined,
    onEdit: c._kind === 'player' ? () => onEditPlayer && onEditPlayer(c) : undefined,
    onSessionChange: onSessionChange || undefined
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sim-group-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "sim-btn sim-btn-ghost",
    onClick: onAdd
  }, "+ Monster"), /*#__PURE__*/React.createElement("button", {
    className: "sim-btn sim-btn-ghost",
    onClick: onAddPlayer
  }, "+ Spieler"), group.length > 0 && /*#__PURE__*/React.createElement("button", {
    className: "sim-btn sim-btn-danger",
    onClick: () => {
      for (let i = group.length - 1; i >= 0; i--) onRemove(i);
    }
  }, "Leeren"), canRevert && /*#__PURE__*/React.createElement("button", {
    className: "sim-btn sim-btn-revert",
    onClick: onRevert,
    title: "Zur vorherigen Aufstellung zur\xFCckkehren"
  }, "\u21A9 R\xFCckg\xE4ngig"), showMatch && /*#__PURE__*/React.createElement("div", {
    className: "sim-match-bar"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 4,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("select", {
    className: "sim-form-select sim-filter-select",
    value: monsterFilter?.art || '',
    onChange: e => setF('art', e.target.value),
    title: "Art filtern"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Alle Arten"), allArts.map(a => /*#__PURE__*/React.createElement("option", {
    key: a,
    value: a
  }, a))), /*#__PURE__*/React.createElement("select", {
    className: "sim-form-select sim-filter-select",
    value: monsterFilter?.unterart || '',
    onChange: e => setF('unterart', e.target.value),
    title: "Unterart filtern"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Alle Unterarten"), allUnterarts.map(a => /*#__PURE__*/React.createElement("option", {
    key: a,
    value: a
  }, a))), /*#__PURE__*/React.createElement("select", {
    className: "sim-form-select sim-filter-select",
    value: monsterFilter?.umgebung || '',
    onChange: e => setF('umgebung', e.target.value),
    title: "Umgebung filtern"
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Alle Umgebungen"), allUmgebungen.map(a => /*#__PURE__*/React.createElement("option", {
    key: a,
    value: a
  }, a)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.64rem',
      fontFamily: 'var(--font-mono)',
      color: 'rgba(var(--accent-rgb),calc(0.45*var(--ka) + var(--tb)))',
      whiteSpace: 'nowrap',
      minWidth: 20
    }
  }, "HG"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: "sim-form-select sim-filter-select sim-cr-input",
    value: monsterFilter?.crMin ?? '',
    onChange: e => setF('crMin', e.target.value),
    placeholder: "Min",
    min: "0",
    max: "30",
    step: "0.125",
    title: "HG Minimum"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(var(--accent-rgb),calc(0.3*var(--ka) + var(--tb)))',
      fontSize: '0.7rem',
      flexShrink: 0
    }
  }, "\u2013"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: "sim-form-select sim-filter-select sim-cr-input",
    value: monsterFilter?.crMax ?? '',
    onChange: e => setF('crMax', e.target.value),
    placeholder: "Max",
    min: "0",
    max: "30",
    step: "0.125",
    title: "HG Maximum"
  })), activeFilters > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.64rem',
      color: 'rgba(var(--accent-rgb),calc(0.4*var(--ka) + var(--tb)))',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '2px 1px'
    }
  }, /*#__PURE__*/React.createElement("span", null, activeFilters, " Filter aktiv"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      border: 'none',
      color: 'rgba(var(--accent-rgb),calc(0.45*var(--ka) + var(--tb)))',
      cursor: 'pointer',
      fontSize: '0.64rem',
      padding: 0
    },
    onClick: () => onMonsterFilter({
      art: '',
      unterart: '',
      umgebung: '',
      crMin: '',
      crMax: ''
    })
  }, "Filter leeren")), /*#__PURE__*/React.createElement("div", {
    className: "sim-diff-toggle"
  }, DIFF_OPTS.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.val,
    className: `sim-diff-btn ${difficulty === o.val ? 'active' : ''}`,
    onClick: () => onDifficulty(o.val)
  }, o.label)), /*#__PURE__*/React.createElement("label", {
    className: "sim-coherence-row",
    title: "Gegner teilen Art / Unterart / Umgebung"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sim-coherence-label"
  }, "Koh\xE4renz"), /*#__PURE__*/React.createElement("span", {
    className: `sim-toggle${coherent ? ' on' : ''}`,
    onClick: () => onCoherent(v => !v)
  }, /*#__PURE__*/React.createElement("span", {
    className: "sim-toggle-thumb"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "sim-btn sim-btn-match",
    disabled: !matchEnabled,
    onClick: onMatch,
    title: matchEnabled ? '' : 'Zuerst Gruppe 1 befüllen'
  }, "\u2694 Passende Gegner"), /*#__PURE__*/React.createElement("button", {
    className: "sim-btn sim-btn-addone",
    disabled: !matchEnabled,
    onClick: onAddOpponent,
    title: matchEnabled ? '+ 1 passenden Gegner hinzufügen' : 'Zuerst Gruppe 1 befüllen'
  }, "+ 1 Gegner")))));
}
function EncounterRating({
  group1,
  group2
}) {
  const rating = useMemo(() => calcEncounterDifficulty(group1, group2), [group1, group2]);
  if (!rating) return null;
  const DIFF_NAMES = ['Trivial', 'Leicht', 'Normal', 'Schwer', 'Tödlich'];
  const pips = ['enc-trivial', 'enc-easy', 'enc-medium', 'enc-hard', 'enc-deadly'];
  const activePip = pips.indexOf(rating.cls);
  return /*#__PURE__*/React.createElement("div", {
    className: "enc-rating"
  }, /*#__PURE__*/React.createElement("div", {
    className: "enc-rating-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "enc-pips"
  }, pips.map((cls, i) => /*#__PURE__*/React.createElement("span", {
    key: cls,
    className: `enc-pip ${cls}${i <= activePip ? ' lit' : ''}`,
    title: DIFF_NAMES[i]
  }))), /*#__PURE__*/React.createElement("span", {
    className: `enc-label ${rating.cls}`
  }, rating.label), /*#__PURE__*/React.createElement("span", {
    className: "enc-xp"
  }, Math.round(rating.adjXP).toLocaleString('de'), " XP")), rating.sub && /*#__PURE__*/React.createElement("div", {
    className: "enc-sub"
  }, rating.sub));
}
function Chevron({
  open
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 10 10",
    fill: "none",
    style: {
      transition: 'transform 0.2s',
      transform: open ? 'rotate(90deg)' : 'none',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 2l4 3-4 3",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
const RATINGS = [{
  key: 'crushing-win',
  label: 'Haushoch gewonnen',
  cls: 'rat-cwin'
}, {
  key: 'win',
  label: 'Gewonnen',
  cls: 'rat-win'
}, {
  key: 'narrow-win',
  label: 'Knapp gewonnen',
  cls: 'rat-nwin'
}, {
  key: 'draw',
  label: 'Unentschieden',
  cls: 'rat-draw'
}, {
  key: 'narrow-loss',
  label: 'Knapp verloren',
  cls: 'rat-nloss'
}, {
  key: 'loss',
  label: 'Verloren',
  cls: 'rat-loss'
}, {
  key: 'crushing-loss',
  label: 'Haushoch verloren',
  cls: 'rat-closs'
}];
function rateRun(run) {
  if (run.winner === 'draw') return RATINGS.find(r => r.key === 'draw');
  const winners = run.winner === 1 ? run.survivors1 : run.survivors2;
  const alive = winners.filter(c => !c.dead && c.currentHp > 0);
  const maxHpSum = winners.reduce((s, c) => s + c.maxHp, 0);
  const curHpSum = alive.reduce((s, c) => s + c.currentHp, 0);
  const pct = maxHpSum > 0 ? curHpSum / maxHpSum : 0;
  const won = run.winner === 1;
  if (pct > 0.6) return RATINGS.find(r => r.key === (won ? 'crushing-win' : 'crushing-loss'));
  if (pct > 0.25) return RATINGS.find(r => r.key === (won ? 'win' : 'loss'));
  return RATINGS.find(r => r.key === (won ? 'narrow-win' : 'narrow-loss'));
}

// ── Combat Results (multi-run) ────────────────────────────────────────────────
function CombatResults({
  runs,
  group1Name,
  group2Name,
  onReset,
  onRerun,
  runCount,
  onRunCountChange
}) {
  const [openLogs, setOpenLogs] = useState(new Set());
  const wins1 = runs.filter(r => r.winner === 1).length;
  const wins2 = runs.filter(r => r.winner === 2).length;
  const draws = runs.length - wins1 - wins2;
  const avgRounds = (runs.reduce((s, r) => s + r.roundCount, 0) / runs.length).toFixed(1);
  function toggleLog(i) {
    setOpenLogs(s => {
      const n = new Set(s);
      n.has(i) ? n.delete(i) : n.add(i);
      return n;
    });
  }
  function aggSurvivors(key) {
    const names = runs[0][key].map(s => s.name);
    return names.map(name => {
      const entries = runs.map(r => r[key].find(s => s.name === name)).filter(Boolean);
      const alive = entries.filter(e => !e.dead && e.currentHp > 0);
      const avgHp = alive.length ? Math.round(alive.reduce((s, e) => s + e.currentHp, 0) / alive.length) : 0;
      const avgMaxHp = alive.length ? Math.round(alive.reduce((s, e) => s + e.maxHp, 0) / alive.length) : entries[0]?.staticTp ?? 0;
      return {
        name,
        survived: alive.length,
        total: runs.length,
        avgHp,
        avgMaxHp
      };
    });
  }
  const agg1 = aggSurvivors('survivors1');
  const agg2 = aggSurvivors('survivors2');
  const runRatings = runs.map(rateRun);
  const ratingDist = RATINGS.map(r => ({
    ...r,
    count: runRatings.filter(x => x.key === r.key).length
  })).filter(r => r.count > 0);
  const dominant = wins1 > wins2 ? 1 : wins2 > wins1 ? 2 : 'draw';
  const badgeText = dominant === 1 ? `${group1Name} gewinnt öfter` : dominant === 2 ? `${group2Name} gewinnt öfter` : 'Ausgeglichen';
  const badgeCls = dominant === 1 ? 'sim-winner-1' : dominant === 2 ? 'sim-winner-2' : 'sim-winner-draw';
  return /*#__PURE__*/React.createElement("div", {
    className: "sim-results"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim-results-header"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "sim-btn sim-btn-ghost",
    style: {
      padding: '4px 12px',
      fontSize: '0.7rem'
    },
    onClick: onReset
  }, "\u2190 Zur\xFCck"), /*#__PURE__*/React.createElement("button", {
    className: "sim-btn sim-btn-ghost",
    style: {
      padding: '4px 12px',
      fontSize: '0.7rem'
    },
    onClick: onRerun
  }, "\u21BA Wiederholen"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: 1,
    max: 500,
    value: runCount,
    onChange: e => onRunCountChange(Math.max(1, Math.min(500, +e.target.value))),
    className: "sim-session-input",
    style: {
      width: 44
    },
    title: "Anzahl Durchl\xE4ufe"
  })), /*#__PURE__*/React.createElement("span", {
    className: `sim-winner-badge ${badgeCls}`
  }, badgeText)), /*#__PURE__*/React.createElement("div", {
    className: "sim-agg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim-agg-bar"
  }, wins1 > 0 && /*#__PURE__*/React.createElement("div", {
    className: "sim-agg-seg seg-1",
    style: {
      flex: wins1
    }
  }, wins1), draws > 0 && /*#__PURE__*/React.createElement("div", {
    className: "sim-agg-seg seg-draw",
    style: {
      flex: draws
    }
  }, draws), wins2 > 0 && /*#__PURE__*/React.createElement("div", {
    className: "sim-agg-seg seg-2",
    style: {
      flex: wins2
    }
  }, wins2)), /*#__PURE__*/React.createElement("div", {
    className: "sim-agg-labels"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sim-agg-g1"
  }, group1Name), /*#__PURE__*/React.createElement("span", {
    className: "sim-agg-rounds"
  }, "\xD8 ", avgRounds, " Runden"), /*#__PURE__*/React.createElement("span", {
    className: "sim-agg-g2"
  }, group2Name))), /*#__PURE__*/React.createElement("div", {
    className: "sim-survivor-list"
  }, [{
    name: group1Name,
    agg: agg1
  }, {
    name: group2Name,
    agg: agg2
  }].map(({
    name,
    agg
  }) => /*#__PURE__*/React.createElement("div", {
    key: name,
    className: "sim-survivor-group"
  }, agg.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "sim-survivor-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: s.survived === 0 ? 'sim-survivor-dead' : ''
  }, s.name), s.survived === 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,60,60,0.5)',
      fontSize: '0.7rem'
    }
  }, "besiegt") : /*#__PURE__*/React.createElement("span", {
    className: "sim-survivor-hp"
  }, s.survived, "/", s.total, " Durchl\xE4ufen \xFCberlebt \xB7 \xD8 ", s.avgHp, "/", s.avgMaxHp, " TP")))))), /*#__PURE__*/React.createElement("div", {
    className: "sim-rating-dist"
  }, ratingDist.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.key,
    className: "sim-rating-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: `sim-rating-label ${r.cls}`
  }, r.label), /*#__PURE__*/React.createElement("span", {
    className: "sim-rating-bar-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: `sim-rating-bar ${r.cls}`,
    style: {
      width: `${Math.round(r.count / runs.length * 100)}%`
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "sim-rating-count"
  }, r.count, "\xD7")))), /*#__PURE__*/React.createElement("div", {
    className: "sim-runs"
  }, runs.map((r, i) => {
    const rating = runRatings[i];
    const runOpen = openLogs.has(`r${i}`);
    const totalEntries = r.rounds.reduce((s, rd) => s + rd.entries.length, 0);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "sim-run"
    }, /*#__PURE__*/React.createElement("button", {
      className: "sim-log-toggle",
      onClick: () => toggleLog(`r${i}`)
    }, /*#__PURE__*/React.createElement(Chevron, {
      open: runOpen
    }), /*#__PURE__*/React.createElement("span", null, "Durchlauf ", i + 1), /*#__PURE__*/React.createElement("span", {
      className: `sim-run-badge ${rating.cls}`
    }, rating.label), /*#__PURE__*/React.createElement("span", {
      className: "sim-run-meta"
    }, r.roundCount, " Runden \xB7 ", totalEntries, " Eintr\xE4ge")), runOpen && /*#__PURE__*/React.createElement("div", {
      className: "sim-run-rounds"
    }, r.rounds.map((rd, j) => {
      const rdOpen = openLogs.has(`r${i}:${j}`);
      return /*#__PURE__*/React.createElement("div", {
        key: j,
        className: "sim-round-row"
      }, /*#__PURE__*/React.createElement("button", {
        className: "sim-round-header",
        onClick: () => toggleLog(`r${i}:${j}`)
      }, /*#__PURE__*/React.createElement(Chevron, {
        open: rdOpen
      }), /*#__PURE__*/React.createElement("span", {
        className: "sim-round-label"
      }, rd.label), rd.hpSnapshot && /*#__PURE__*/React.createElement("span", {
        className: "sim-round-hp"
      }, [1, 2].map(team => [team === 2 && /*#__PURE__*/React.createElement("span", {
        key: "sep",
        className: "sim-hp-sep"
      }, "|"), ...rd.hpSnapshot.filter(c => c.team === team).map((c, k) => {
        const dead = c.dead || c.currentHp <= 0;
        const pct = dead ? 0 : Math.min(100, Math.round(c.currentHp / c.maxHp * 100));
        const short = c.name.length > 10 ? c.name.slice(0, 9) + '…' : c.name;
        const barColor = dead ? 'transparent' : pct > 60 ? team === 1 ? 'rgba(80,160,255,0.75)' : 'rgba(255,100,80,0.75)' : pct > 30 ? 'rgba(255,190,60,0.85)' : 'rgba(255,60,60,0.85)';
        return /*#__PURE__*/React.createElement("span", {
          key: k,
          className: `sim-hp-chip sim-hp-t${team}${dead ? ' sim-hp-dead' : ''}`,
          title: dead ? `${c.name} ☠` : `${c.name}: ${c.currentHp}/${c.maxHp} TP`
        }, /*#__PURE__*/React.createElement("span", {
          className: "sim-hp-name"
        }, short, dead ? ' ☠' : ''), /*#__PURE__*/React.createElement("span", {
          className: "sim-hp-bar"
        }, /*#__PURE__*/React.createElement("span", {
          className: "sim-hp-bar-fill",
          style: {
            width: `${pct}%`,
            background: barColor
          }
        })), rd.hits?.[c.uid] && /*#__PURE__*/React.createElement("span", {
          className: "sim-hit-dots"
        }, Array.from({
          length: rd.hits[c.uid].h
        }, (_, di) => /*#__PURE__*/React.createElement("span", {
          key: `h${di}`,
          className: "sim-hit-dot sim-hit-h"
        })), Array.from({
          length: rd.hits[c.uid].m
        }, (_, di) => /*#__PURE__*/React.createElement("span", {
          key: `m${di}`,
          className: "sim-hit-dot sim-hit-m"
        })), Array.from({
          length: rd.hits[c.uid].heal || 0
        }, (_, di) => /*#__PURE__*/React.createElement("span", {
          key: `heal${di}`,
          className: "sim-hit-dot sim-hit-heal"
        }, "\u271A"))));
      })]))), rdOpen && /*#__PURE__*/React.createElement("div", {
        className: "sim-log sim-log-inner"
      }, rd.entries.map((entry, k) => /*#__PURE__*/React.createElement("div", {
        key: k,
        className: entry.cls
      }, entry.text))));
    })));
  })));
}

// ── Access Denied ─────────────────────────────────────────────────────────────
function SimAccessDenied() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/index.html",
    style: {
      position: 'fixed',
      top: '18px',
      left: '22px',
      fontFamily: 'var(--font-mono)',
      fontSize: '9px',
      letterSpacing: '0.18em',
      color: 'rgba(var(--text-rgb),calc(0.4*var(--kt) + var(--tb)))',
      textDecoration: 'none',
      textTransform: 'uppercase',
      transition: 'color 0.15s'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--white)',
    onMouseLeave: e => e.currentTarget.style.color = 'rgba(var(--text-rgb),calc(0.4*var(--kt) + var(--tb)))'
  }, "\u2190 Zur\xFCck"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '9px',
      letterSpacing: '0.42em',
      color: 'rgba(var(--accent-rgb),calc(0.4*var(--ka) + var(--tb)))',
      textTransform: 'uppercase'
    }
  }, "Kein Zugriff"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '14px',
      letterSpacing: '0.3em',
      color: 'rgba(var(--text-rgb),calc(0.25*var(--kt) + var(--tb)))',
      textTransform: 'uppercase'
    }
  }, "Meruria \u2014 Kampfsimulation")));
}

// ── Session persistence helpers ───────────────────────────────────────────────
const SS_KEY = 'sim_groups';
function loadGroups() {
  try {
    const raw = sessionStorage.getItem(SS_KEY);
    if (!raw) return [[], []];
    const {
      g1,
      g2
    } = JSON.parse(raw);
    return [g1 || [], g2 || []];
  } catch {
    return [[], []];
  }
}
function saveGroups(g1, g2) {
  try {
    sessionStorage.setItem(SS_KEY, JSON.stringify({
      g1,
      g2
    }));
  } catch {}
}

// ── App ───────────────────────────────────────────────────────────────────────
function SimApp() {
  const [group1, setGroup1] = useState(() => loadGroups()[0]);
  const [group2, setGroup2] = useState(() => loadGroups()[1]);
  const [group2Snapshot, setGroup2Snapshot] = useState(null);
  const [modal, setModal] = useState(null); // null | { type: 'monster'|'player', target: 1|2 }
  const [savedPlayers, setSavedPlayers] = useState(loadPlayers);
  const [result, setResult] = useState(null);
  const [runCount, setRunCount] = useState(50);
  const [difficulty, setDifficulty] = useState('normal');
  const [monsterFilter, setMonsterFilter] = useState({
    art: '',
    unterart: '',
    umgebung: '',
    crMin: '',
    crMax: ''
  });
  const [coherent, setCoherent] = useState(true);
  useEffect(() => {
    saveGroups(group1, group2);
  }, [group1, group2]);
  const [dbChars, setDbChars] = useState([]);
  useEffect(() => {
    if (window._sb) {
      window._sb.from('characters').select('id, name, type, char_data').order('name').then(({
        data
      }) => setDbChars(data || []));
    }
  }, []);
  const [detailMonster, setDetailMonster] = useState(null);
  const selectedForModal = useMemo(() => {
    if (!modal) return new Map();
    const grp = modal.target === 1 ? group1 : group2;
    const map = new Map();
    grp.filter(c => c._kind === 'monster').forEach(c => {
      const key = c.name + (c.source || '');
      map.set(key, (map.get(key) || 0) + 1);
    });
    return map;
  }, [modal, group1, group2]);
  function addToGroup(setter, item) {
    setter(g => [...g, {
      ...item,
      _uid: uid()
    }]);
  }
  function updateGroupMember(setter, _uid, field, val) {
    setter(g => g.map(c => {
      if (c._uid !== _uid) return c;
      if (val === undefined) {
        const n = {
          ...c
        };
        delete n[field];
        return n;
      }
      return {
        ...c,
        [field]: val
      };
    }));
  }
  function removeFromGroup(setter, idx) {
    setter(g => g.filter((_, i) => i !== idx));
  }
  function handleSavePlayer(player) {
    const updated = savedPlayers.find(p => p.id === player.id) ? savedPlayers.map(p => p.id === player.id ? player : p) : [...savedPlayers, player];
    setSavedPlayers(updated);
    savePlayers(updated);
    const target = modal?.target;
    const setter = target === 1 ? setGroup1 : setGroup2;
    if (modal?.initial?._uid) {
      // Editing existing group member — replace in place
      const origUid = modal.initial._uid;
      setter(g => g.map(c => c._uid === origUid ? {
        ...player,
        _uid: origUid
      } : c));
    } else {
      addToGroup(setter, player);
    }
  }
  function handleDeletePlayer(id) {
    const updated = savedPlayers.filter(p => p.id !== id);
    setSavedPlayers(updated);
    savePlayers(updated);
  }
  function saveGroup2Snapshot() {
    setGroup2Snapshot(group2);
  }
  function revertGroup2() {
    if (group2Snapshot !== null) {
      setGroup2(group2Snapshot);
      setGroup2Snapshot(null);
    }
  }
  function openModal2(type, opts = {}) {
    saveGroup2Snapshot();
    setModal({
      type,
      target: 2,
      ...opts
    });
  }
  function handleMatch(fromGroup, setter) {
    saveGroup2Snapshot();
    const opponents = generateMatchingOpponents(fromGroup, difficulty, monsterFilter, coherent);
    setter(opponents.map(m => ({
      ...m,
      _uid: uid()
    })));
  }
  function handleAddOpponent() {
    saveGroup2Snapshot();
    const pick = findOneAdditionalOpponent(group1, group2, difficulty, monsterFilter, coherent);
    if (pick) addToGroup(setGroup2, pick);
  }
  function runSimulation() {
    if (!group1.length || !group2.length) return;
    const runs = Array.from({
      length: runCount
    }, () => simulateCombat(group1, group2));
    setResult(runs);
  }
  const canRun = group1.length > 0 && group2.length > 0;
  return /*#__PURE__*/React.createElement("div", {
    className: "sim-root"
  }, /*#__PURE__*/React.createElement(SiteNav, null), /*#__PURE__*/React.createElement("div", {
    className: "sim-body"
  }, !result && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "sim-groups"
  }, /*#__PURE__*/React.createElement(GroupPanel, {
    label: "Gruppe 1",
    group: group1,
    onAdd: () => setModal({
      type: 'monster',
      target: 1
    }),
    onAddPlayer: () => setModal({
      type: 'player',
      target: 1
    }),
    onRemove: i => removeFromGroup(setGroup1, i),
    onAddClone: m => addToGroup(setGroup1, m),
    onDetail: setDetailMonster,
    onEditPlayer: p => setModal({
      type: 'player',
      target: 1,
      initial: p
    }),
    onSessionChange: (_uid, field, val) => updateGroupMember(setGroup1, _uid, field, val),
    showMatch: false
  }), /*#__PURE__*/React.createElement("div", {
    className: "sim-vs"
  }, "VS"), /*#__PURE__*/React.createElement(GroupPanel, {
    label: "Gruppe 2",
    group: group2,
    onAdd: () => openModal2('monster'),
    onAddPlayer: () => openModal2('player'),
    onRemove: i => removeFromGroup(setGroup2, i),
    onAddClone: m => {
      saveGroup2Snapshot();
      addToGroup(setGroup2, m);
    },
    onDetail: setDetailMonster,
    onEditPlayer: p => setModal({
      type: 'player',
      target: 2,
      initial: p
    }),
    onSessionChange: (_uid, field, val) => updateGroupMember(setGroup2, _uid, field, val),
    showMatch: true,
    matchEnabled: group1.length > 0,
    onMatch: () => handleMatch(group1, setGroup2),
    onAddOpponent: handleAddOpponent,
    canRevert: group2Snapshot !== null,
    onRevert: revertGroup2,
    difficulty: difficulty,
    onDifficulty: setDifficulty,
    monsterFilter: monsterFilter,
    onMonsterFilter: setMonsterFilter,
    coherent: coherent,
    onCoherent: setCoherent
  })), /*#__PURE__*/React.createElement(EncounterRating, {
    group1: group1,
    group2: group2
  }), /*#__PURE__*/React.createElement("div", {
    className: "sim-run-bar"
  }, /*#__PURE__*/React.createElement("button", {
    className: "sim-btn-run",
    disabled: !canRun,
    onClick: runSimulation
  }, "\u2694 Kampf simulieren")), !canRun && /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'rgba(var(--accent-rgb),calc(0.3*var(--ka) + var(--tb)))',
      fontSize: '0.75rem',
      marginTop: 8
    }
  }, "Mindestens ein K\xE4mpfer pro Gruppe ben\xF6tigt")), result && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CombatResults, {
    runs: result,
    group1Name: group1.map(c => c.name).join(', ') || 'Gruppe 1',
    group2Name: group2.map(c => c.name).join(', ') || 'Gruppe 2',
    onReset: () => setResult(null),
    runCount: runCount,
    onRunCountChange: setRunCount,
    onRerun: () => setResult(Array.from({
      length: runCount
    }, () => simulateCombat(group1, group2)))
  }))), modal?.type === 'monster' && /*#__PURE__*/React.createElement(MonsterPicker, {
    onAdd: m => addToGroup(modal.target === 1 ? setGroup1 : setGroup2, m),
    onClose: () => setModal(null),
    selected: selectedForModal,
    monsterFilter: monsterFilter,
    onMonsterFilter: setMonsterFilter,
    onDetail: setDetailMonster
  }), detailMonster && /*#__PURE__*/React.createElement(MonsterDetailPopup, {
    monster: detailMonster,
    onClose: () => setDetailMonster(null)
  }), modal?.type === 'player' && /*#__PURE__*/React.createElement(PlayerModal, {
    initial: modal.initial || null,
    savedPlayers: savedPlayers,
    currentGroup: modal.target === 1 ? group1 : group2,
    onSave: handleSavePlayer,
    onAddExisting: p => {
      addToGroup(modal.target === 1 ? setGroup1 : setGroup2, p);
    },
    onDelete: handleDeletePlayer,
    onClose: () => setModal(null),
    dbChars: dbChars
  }));
}
function App() {
  if (window.SITE_USER?.role !== 'dm') return /*#__PURE__*/React.createElement(SimAccessDenied, null);
  return /*#__PURE__*/React.createElement(SimApp, null);
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(SiteGate, null, /*#__PURE__*/React.createElement(App, null)));
})();

})();

