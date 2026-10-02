/* nsc-components.jsx — Shared building blocks for the NSC page
   (Helpers, atmosphere, nav, portrait, stage progress bar, locked-field helper) */

const { useState, useEffect, useRef, useMemo, useCallback } = React;

// ── Constants from data file ─────────────────────────────
const STAGE_LABELS = window.NSC_STAGE_LABELS;
const STAGE_HINTS  = window.NSC_STAGE_HINTS;
const MAX_STAGE    = window.NSC_MAX_STAGE;
const FU           = window.NSC_FIELD_UNLOCKS;
const STATUS_DEF   = window.NSC_STATUS_DEF;
const STATUS_ORDER = window.NSC_STATUS_ORDER;
const DIVISION_THEME = window.NSC_DIVISION_THEME;
const DIVISION_ORDER = Object.keys(DIVISION_THEME).filter(d => d !== 'Keine');
const STAGE_THRESHOLDS = window.NSC_STAGE_THRESHOLDS;

// ── Meruria-Kalender (12 Monate, 224 Tage) ───────────────
const MERURIA_MONTHS = [
  { name:'Janvar', days:19, sign:'Die Arche',      traits:'Bewahrung, Heimweh, Schutz' },
  { name:'Fevorn', days:18, sign:'Die Böe',        traits:'Anpassung, Mut, Risiko' },
  { name:'Mareth', days:19, sign:'Die Wurzel',     traits:'Geduld, Stärke, Beharrlichkeit' },
  { name:'Aprel',  days:19, sign:'Die Linse',      traits:'Wachsamkeit, Entdeckung, Neugier' },
  { name:'Mairen', days:18, sign:'Die Stille',     traits:'Isolation, innere Stärke, Verlust' },
  { name:'Junvar', days:19, sign:'Das Irrlicht',   traits:'Reisende, Unruhe, Bestimmung' },
  { name:'Juval',  days:19, sign:'Die Klinge',     traits:'Entschlossenheit, Härte, Opfer' },
  { name:'Auvar',  days:19, sign:'Die Glut',       traits:'Hoffnung, Neuanfang, Wandel' },
  { name:'Septhar',days:19, sign:'Die Brücke',     traits:'Verbindung, Überwindung, Wandel' },
  { name:'Oktar',  days:18, sign:'Der Schleier',   traits:'Dunkelheit, Rückzug, Geheimnisse' },
  { name:'Novren', days:18, sign:'Das Labyrinth',  traits:'Komplexität, Täuschung, Erkenntnis' },
  { name:'Derath', days:19, sign:'Der Spalt',      traits:'Übergänge, Entscheidungen, Neubeginn' },
];
const MERURIA_MSTARTS = MERURIA_MONTHS.reduce((a, m, i) => {
  a.push(i === 0 ? 1 : a[i-1] + MERURIA_MONTHS[i-1].days); return a;
}, []);
function meruriaDoyParts(doy) {
  if (!doy) return { mon:'', tag:'' };
  for (let i = MERURIA_MONTHS.length - 1; i >= 0; i--)
    if (doy >= MERURIA_MSTARTS[i]) return { mon:String(i), tag:String(doy - MERURIA_MSTARTS[i] + 1) };
  return { mon:'', tag:'' };
}
function meruriaDoyText(doy) {
  const p = meruriaDoyParts(doy);
  return p.mon === '' ? '' : p.tag + '. ' + MERURIA_MONTHS[parseInt(p.mon)].name;
}
function meruriaZodiacOf(doy) {
  const p = meruriaDoyParts(doy);
  return p.mon === '' ? null : MERURIA_MONTHS[parseInt(p.mon)];
}

// ── Fakt-basiertes Freischaltsystem (v2) ─────────────────
// Ein "Fakt" existiert nur, wenn der NSC dafür Inhalt hat; Listen-Fakten
// sind pro Eintrag freischaltbar (eig-0, tal-0, geh-0, …). Sektions-Fakten
// zählen nur, wenn die Sektion am NSC aktiv ist (nsc.sections).
// Sichtbarkeit ist OPT-IN: ein Auge ist nur offen, wenn explizit true gesetzt.
function nscFieldVisible(nsc, key) { return ((nsc.fieldVis || {})[key]) === true; }

function factsOf(nsc) {
  const keys = [];
  const has = k => (nsc.sections || []).includes(k);
  // Eckdaten-Singletons — nur wenn ein Wert vorhanden ist
  if (nsc.rasse) keys.push('rasse');
  if (nsc.geschlecht) keys.push('geschlecht');
  if (nsc.groesse) keys.push('groesse');
  if (nsc.alter != null && nsc.alter !== '') keys.push('alter');
  if (nsc.geburtstag_doy) keys.push('geburtstag');
  if (nsc.gesinnung) keys.push('gesinnung');
  if (nsc.klasse) keys.push('klasse');
  if (nsc.hintergrund) keys.push('hintergrund');
  if (nsc.beruf) keys.push('beruf');
  if (nsc.gottheit) keys.push('gottheit');
  if (nsc.division && nsc.division !== 'Keine') keys.push('division');
  if (nsc.organisation) keys.push('organisation');
  if (nsc.kapsel) keys.push('kapsel');
  if (nsc.wohnort) keys.push('wohnort');
  (nsc.vollerName || []).forEach((_, i) => keys.push(`vna-${i}`));
  if (has('bio') && (nsc.biografie || '').trim()) keys.push('bio');
  if (has('aussehen') && Object.values(nsc.aussehen || {}).some(v => String(v || '').trim())) keys.push('aussehen');
  if (has('pers')) {
    if ((nsc.unvergesslich || '').trim()) keys.push('unvergesslich');
    (nsc.eigenschaften || []).forEach((_, i) => keys.push(`eig-${i}`));
    (nsc.talente || []).forEach((_, i) => keys.push(`tal-${i}`));
    (nsc.makel || []).forEach((_, i) => keys.push(`mak-${i}`));
  }
  if (has('routine')) (nsc.routine || []).forEach((_, i) => keys.push(`rou-${i}`));
  if (has('gewohnheiten')) (nsc.gewohnheiten || []).forEach((_, i) => keys.push(`gew-${i}`));
  if (has('ausr')) {
    (nsc.ausruestung || []).filter(e => (e.name || '').trim()).forEach((_, i) => keys.push(`aus-${i}`));
    if ((nsc.habe || 0) > 0) keys.push('habe');
  }
  if (has('begleiter')) (nsc.begleiter || []).filter(b => (b.name || '').trim()).forEach((_, i) => keys.push(`beg-${i}`));
  if (has('motive')) (nsc.motivationen || []).forEach((_, i) => keys.push(`mot-${i}`));
  if (has('kontakte')) {
    const k = nsc.kontakte || {};
    (k.familie || []).filter(p => (p.name || '').trim()).forEach((_, i) => keys.push(`fam-${i}`));
    (k.freunde || []).filter(p => (p.name || '').trim()).forEach((_, i) => keys.push(`fre-${i}`));
    (k.rivalen || []).filter(p => (p.name || '').trim()).forEach((_, i) => keys.push(`riv-${i}`));
  }
  if (has('geheim')) (nsc.geheimnisse || []).filter(g => (g.text || '').trim()).forEach((_, i) => keys.push(`geh-${i}`));
  return keys;
}

// Menschenlesbare Gruppenbezeichnung für einen Fakt-Key (für DM-Tooltips)
function factLabel(key) {
  const map = {
    rasse:'Rasse', geschlecht:'Geschlecht', groesse:'Größe', alter:'Alter',
    geburtstag:'Geburtstag', gesinnung:'Gesinnung', klasse:'Klasse',
    hintergrund:'Hintergrund', beruf:'Beruf', division:'Division',
    organisation:'Organisation', kapsel:'Kapsel', wohnort:'Wohnort',
    gottheit:'Gottheit', unvergesslich:'Unvergesslich', bio:'Biografie', aussehen:'Aussehen', habe:'Vermögen',
  };
  if (map[key]) return map[key];
  const m = key.match(/^([a-z]+)-(\d+)$/);
  if (m) {
    const tbl = { vna:'Namensteil', eig:'Eigenschaft', tal:'Talent', mak:'Makel',
                  rou:'Routine', gew:'Angewohnheit', aus:'Ausrüstung', beg:'Begleiter',
                  mot:'Motivation', fam:'Familie', fre:'Freund', riv:'Rival', geh:'Geheimnis' };
    return `${tbl[m[1]] || m[1]} #${+m[2]+1}`;
  }
  return key;
}

// Kein Seeding mehr — alles startet blank, DM schaltet explizit frei.
function defaultUnlockedFor(_nsc) { return []; }

// ── Status-Gruppen: objektiver Zustand vs. Haltung gegenüber der Gruppe ──────
const NSC_ZUSTAENDE = ['Lebendig','Verschollen','Gefallen','Verstorben'];
const NSC_HALTUNGEN = ['Verbündet','Neutral','Feind'];

// Effektiver Status aus Sicht einer Perspektive: Ausnahmen pro Charakter
// (nsc.haltungOverrides = { charId:'Feind' }) ersetzen die Gruppen-Haltung.
// Spieler-Perspektiven ('player:…') greifen nur, wenn alle Charaktere des
// Spielers dieselbe effektive Haltung haben — sonst bleibt der Gruppenwert.
function nscEffectiveStatus(nsc, persp, players = []) {
  const st = nsc.status || [];
  if (!persp || persp === 'alle' || persp === '__dm') return st;
  const ov = nsc.haltungOverrides || {};
  let charIds = [persp];
  if (String(persp).startsWith('player:')) {
    const p = players.find(x => x.id === persp);
    charIds = (p && p.charIds) || [];
  }
  const vals = [...new Set(charIds.map(cid => ov[cid] || ''))];
  const val = vals.length === 1 ? vals[0] : '';
  if (!val) return st;
  const out = [];
  let placed = false;
  for (const s of st) {
    if (NSC_HALTUNGEN.includes(s)) { if (!placed) { out.push(val); placed = true; } }
    else out.push(s);
  }
  if (!placed) out.push(val);
  return out;
}

// Sektion, hinter deren Sichtbarkeits-Auge ein indexierter Fakt-Key hängt
const NSC_SEC_OF_PREFIX = { vna:'vname', eig:'pers', tal:'pers', mak:'pers', rou:'routine',
  gew:'gewohnheiten', aus:'ausr', beg:'begleiter', mot:'motive', fam:'kontakte', fre:'kontakte', riv:'kontakte' };

// Alle Fakten, die Spieler überhaupt entdecken KÖNNEN:
// Sektions-Auge und Einzel-Auge müssen explizit geöffnet sein (Opt-in).
function unlockableFactsOf(nsc) {
  const vis = k => (nsc.fieldVis || {})[k] === true;
  return factsOf(nsc).filter(k => {
    const m = k.match(/^([a-z]+)-(\d+)$/);
    if (!m) {
      if (k === 'habe') return vis('ausr') && vis('habe');
      if (k === 'unvergesslich') return vis('pers') && vis('unvergesslich');
      return vis(k);
    }
    if (m[1] === 'geh') {
      const list = (nsc.geheimnisse || []).filter(g => (g.text || '').trim());
      return !!(list[+m[2]] && list[+m[2]].vis);
    }
    return vis(NSC_SEC_OF_PREFIX[m[1]] || m[1]) && vis(k);
  });
}

// Stufe aus Anteil freigeschalteter Fakten berechnen.
// „Eingeweiht" (MAX_STAGE) erfordert 100 % aller Fakten — sonst fällt der NSC eine Stufe tiefer.
// Basis sind nur die global sichtbaren (entdeckbaren) Fakten; verwaiste Unlocks zählen nicht.
function stageFromUnlocked(nsc, unlockedSet) {
  const facts = unlockableFactsOf(nsc);
  const total = facts.length;
  if (total === 0) return 0;
  const open = facts.reduce((n, k) => n + (unlockedSet.has(k) ? 1 : 0), 0);
  if (open >= total) return MAX_STAGE; // alles offen → Eingeweiht
  const pct = open / total;
  for (let s = MAX_STAGE - 1; s >= 0; s--) {
    if (pct >= STAGE_THRESHOLDS[s]) return s;
  }
  return 0;
}

// Maps a DB row from the nscs table to the frontend NSC object shape.
// Normalisiert Alt-Formate (makel als String, begleiter als Objekt,
// geheimnisse als String-Array) aufs v2-Schema.
function mapNscRow(row) {
  const makel = Array.isArray(row.makel) ? row.makel : (row.makel ? [row.makel] : []);
  const begleiter = Array.isArray(row.begleiter) ? row.begleiter
    : (row.begleiter && row.begleiter.name) ? [row.begleiter] : [];
  const geheimnisse = (row.geheimnisse || []).map(g =>
    typeof g === 'string' ? { text:g, vis:false } : { text:g.text || '', vis:g.vis === true });
  return {
    id:           row.id,
    slug:         row.slug,
    name:         row.name,
    titel:        row.titel || null,
    vollerName:   row.voller_name || [],
    rasse:        row.rasse || null,
    unterrasse:   row.unterrasse || null,
    geschlecht:   row.geschlecht || null,
    alter:        row.alter_jahre ?? null,
    lebensphase:  row.lebensphase || null,
    klasse:       row.klasse || null,
    gesinnung:    row.gesinnung || null,
    groesse:      row.groesse || null,
    hintergrund:  row.hintergrund || null,
    geburtstag_doy: row.geburtstag_doy ?? null,
    beruf:        row.beruf || null,
    division:     row.division || 'Keine',
    rang:         row.rang || null,
    organisation: row.organisation || null,
    kapsel:       row.kapsel || null,
    wohnort:      row.wohnort || null,
    gottheit:     row.gottheit || null,
    biografie:    row.biografie || null,
    aussehen:     (row.aussehen && typeof row.aussehen === 'object') ? row.aussehen : {},
    unvergesslich:row.unvergesslich || null,
    eigenschaften:row.eigenschaften || [],
    status:       row.status || [],
    talente:      row.talente || [],
    makel,
    routine:      row.routine || [],
    gewohnheiten: row.gewohnheiten || [],
    ausruestung:  row.ausruestung || [],
    begleiter,
    habe:         row.habe ?? 0,
    motivationen: row.motivationen || [],
    geheimnisse,
    haltungOverrides: row.haltung_overrides || {},
    kontakte:     row.kontakte || { familie:[], freunde:[], rivalen:[] },
    sections:     row.sections || [],
    fieldVis:     row.field_visibility || {},
    steckbrief:   row.steckbrief || null,
    bild:         row.bild || null,
    art:          row.art || null,
    accent:       row.accent || null,
    visible:      row.visible,
  };
}

// Loads NSCs and player-character perspectives from Supabase.
// Returns { nscs, perspectives, charPids, players, loading }.
function useNSCData() {
  const [nscs, setNscs] = useState([]);
  const [perspectives, setPerspectives] = useState([]);
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const sb = window._sb;
      const [{ data: nscRows }, { data: charRows }, { data: profileRows }] = await Promise.all([
        sb.from('nscs').select('*').order('name'),
        sb.from('characters').select('id,name,owner_id').eq('type','spieler').order('name'),
        sb.from('profiles').select('id,display_name'),
      ]);
      setNscs((nscRows || []).map(mapNscRow));

      const profileMap = new Map((profileRows || []).map(p => [p.id, p.display_name || 'Unbekannt']));
      const charPersp = (charRows || []).map(c => ({
        id: c.id, label: c.name, owner_id: c.owner_id,
        owner_name: profileMap.get(c.owner_id) || 'Unbekannt',
      }));

      // Group characters by player
      const playerMap = new Map();
      for (const c of charPersp) {
        if (!playerMap.has(c.owner_id)) {
          playerMap.set(c.owner_id, { id: `player:${c.owner_id}`, label: profileMap.get(c.owner_id) || 'Unbekannt', charIds: [] });
        }
        playerMap.get(c.owner_id).charIds.push(c.id);
      }
      setPlayers(Array.from(playerMap.values()));
      setPerspectives([{ id:'alle', label:'Alle' }, ...charPersp]);
      setLoading(false);
    }
    load();
  }, []);

  const charPids = perspectives.filter(p => p.id !== 'alle').map(p => p.id);
  const updateNsc = (updated) => setNscs(prev => prev.map(n => n.id === updated.id ? updated : n));
  return { nscs, perspectives, charPids, players, loading, updateNsc };
}

// Hook für DM-Unlocks mit Supabase-Persistenz.
// Verwaltet pro Spielercharakter-ID (UUID) eine eigene Faktenmenge.
//   activePerspective = 'alle'  → Vereinigung über alle Charaktere
//   activePerspective = '<uuid>'  → nur Fakten dieses Charakters
function useUnlocks(nscs, charPids, activePerspective='alle', players=[]) {
  const [byPersp, setByPersp] = useState({});
  const initRef = useRef(false);

  useEffect(() => {
    if (initRef.current || !nscs.length || !charPids.length) return;
    initRef.current = true;

    const result = {};
    for (const pid of charPids) {
      result[pid] = {};
      for (const nsc of nscs) result[pid][nsc.id] = new Set();
    }

    window._sb.from('nsc_unlocks').select('character_id,nsc_id,unlocked_keys')
      .then(({ data }) => {
        for (const row of (data || [])) {
          if (result[row.character_id]) {
            result[row.character_id][row.nsc_id] = new Set(row.unlocked_keys || []);
          }
        }
        setByPersp(result);
      });
  }, [nscs, charPids]);

  const persist = (nscId, pid, keysSet) => {
    // Immer Upsert (POST) — PATCH wird in manchen Umgebungen geblockt.
    window._sb.from('nsc_unlocks').upsert({
      character_id: pid,
      nsc_id: nscId,
      unlocked_keys: Array.from(keysSet),
      updated_at: new Date().toISOString(),
    }, { onConflict: 'character_id,nsc_id' }).then(() => {});
  };

  const charSets = (nscId) => charPids.map(pid => byPersp[pid]?.[nscId] || new Set());

  const targetPids = (persp) => {
    if (persp === 'alle') return charPids;
    if (persp && persp.startsWith('player:')) {
      const ownerId = persp.slice(7);
      return players.find(p => p.id === persp)?.charIds || charPids.filter(pid => {
        // fallback: check byPersp keys
        return true;
      });
    }
    return [persp];
  };
  const isUnlocked = (nscId, key) => {
    const pids = targetPids(activePerspective);
    return pids.some(pid => byPersp[pid]?.[nscId]?.has(key));
  };
  const unlockedFor = (nsc) => {
    const pids = targetPids(activePerspective);
    const merged = new Set();
    for (const pid of pids) for (const k of (byPersp[pid]?.[nsc.id] || new Set())) merged.add(k);
    return merged;
  };
  const stageFor = (nsc) => stageFromUnlocked(nsc, unlockedFor(nsc));

  const toggleUnlock = (nscId, key) => {
    setByPersp(prev => {
      const next = { ...prev };
      const targets = targetPids(activePerspective);
      let shouldUnlock;
      if (activePerspective === 'alle') {
        shouldUnlock = !charSets(nscId).some(s => s.has(key));
      } else {
        shouldUnlock = !(prev[activePerspective]?.[nscId]?.has(key));
      }
      for (const pid of targets) {
        next[pid] = { ...next[pid] };
        const cur = new Set(next[pid][nscId] || []);
        if (shouldUnlock) cur.add(key); else cur.delete(key);
        next[pid][nscId] = cur;
        persist(nscId, pid, cur);
      }
      return next;
    });
  };

  const resetAll = () => {
    const result = {};
    for (const pid of charPids) {
      result[pid] = {};
      for (const nsc of nscs) result[pid][nsc.id] = new Set();
    }
    setByPersp(result);
    if (charPids.length) window._sb.from('nsc_unlocks').delete().in('character_id', charPids);
  };

  const toggleForPids = (nscId, key, pids) => {
    if (!pids || pids.length === 0) return;
    setByPersp(prev => {
      const allHave = pids.every(pid => prev[pid]?.[nscId]?.has(key));
      const shouldUnlock = !allHave;
      const next = { ...prev };
      for (const pid of pids) {
        next[pid] = { ...next[pid] };
        const cur = new Set(next[pid][nscId] || []);
        if (shouldUnlock) cur.add(key); else cur.delete(key);
        next[pid][nscId] = cur;
        persist(nscId, pid, cur);
      }
      return next;
    });
  };

  const unlockStateForPids = (nscId, key, pids) => {
    if (!pids || pids.length === 0) return 'none';
    const count = pids.filter(pid => byPersp[pid]?.[nscId]?.has(key)).length;
    if (count === 0) return 'none';
    if (count === pids.length) return 'all';
    return 'some';
  };

  // Exakte Faktenmenge für einen Charakter setzen (z. B. „Alles freischalten/sperren")
  const setKeysForPid = (nscId, pid, keysArr) => {
    setByPersp(prev => {
      const next = { ...prev };
      next[pid] = { ...next[pid] };
      const cur = new Set(keysArr);
      next[pid][nscId] = cur;
      persist(nscId, pid, cur);
      return next;
    });
  };

  const resetForPids = (nscId, pids) => {
    if (!pids || pids.length === 0) return;
    setByPersp(prev => {
      const next = { ...prev };
      for (const pid of pids) {
        next[pid] = { ...next[pid], [nscId]: new Set() };
        window._sb.from('nsc_unlocks').delete()
          .eq('character_id', pid).eq('nsc_id', nscId);
      }
      return next;
    });
  };

  return { byPersp, isUnlocked, toggleUnlock, toggleForPids, unlockStateForPids,
           setKeysForPid, resetForPids, unlockedFor, stageFor, resetAll, activePerspective,
           effectiveStatusFor: nsc => nscEffectiveStatus(nsc, activePerspective, players) };
}

// ── Helpers ──────────────────────────────────────────────
function hexPoints(s) {
  const cx = s/2, cy = s/2, r = s/2;
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI/180)*(60*i - 30);
    pts.push(`${cx + r*Math.cos(a)},${cy + r*Math.sin(a)}`);
  }
  return pts.join(' ');
}
function hexPointsInset(size, inset) {
  const cx = size/2, cy = size/2, r = size/2 - inset;
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI/180)*(60*i - 30);
    pts.push(`${(cx + r*Math.cos(a)).toFixed(3)},${(cy + r*Math.sin(a)).toFixed(3)}`);
  }
  return pts.join(' ');
}
function hexClipInset(insetPct) {
  const cx = 50, cy = 50, r = 50 - insetPct;
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI/180)*(60*i - 30);
    pts.push(`${(cx + r*Math.cos(a)).toFixed(3)}% ${(cy + r*Math.sin(a)).toFixed(3)}%`);
  }
  return `polygon(${pts.join(', ')})`;
}
function hexA(hex, a) {
  const h = hex.replace('#','');
  const s = h.length === 3 ? h.split('').map(c => c+c).join('') : h;
  const r = parseInt(s.slice(0,2),16), g = parseInt(s.slice(2,4),16), b = parseInt(s.slice(4,6),16);
  return `rgba(${r},${g},${b},${a})`;
}

// ── Gold-Theme für Stufe 5 (Eingeweiht) ───────────────────
const GOLD      = 'oklch(0.82 0.14 80)';
const GOLD_SOFT = 'oklch(0.82 0.14 80 / 0.6)';
const GOLD_GLOW = 'oklch(0.82 0.14 80 / 0.35)';
const goldA = (a) => `oklch(0.82 0.14 80 / ${a})`;
// Effektive Stufe: Spielende sehen die berechnete Stufe.
// Im GM-Modus wird in der UI alles enthüllt — aber die Stufe bleibt die echte.
function effStage(nsc, unlocks) {
  return unlocks ? unlocks.stageFor(nsc) : 0;
}

// Akzentfarbe — generisches Lila, solange die Division noch nicht freigeschaltet ist.
function accentOf(nsc, divisionKnown) {
  if (!divisionKnown || !nsc.division || nsc.division === 'Keine') return '#7c4dff';
  return (DIVISION_THEME[nsc.division] || { accent:'#7c4dff' }).accent;
}

// Römische Zahl der Division (für „Die Kuratoren · I", „Hauptmann · II" usw.).
function romanFor(nsc) {
  if (!nsc.division || nsc.division === 'Keine') return '';
  return (DIVISION_THEME[nsc.division] || {}).roman || '';
}

// ── Navigation (gleiche Struktur wie Spielercharaktere) ──
const NAV = [
  { id:'spielerhandbuch', label:'Spielerhandbuch', items:[
    { label:'Realismus', href:'Realismus.html' },
    { label:'Schutzherren', href:'Schutzherren.html' },
    { label:'Gesinnungen', href:'Gesinnungen.html' },
    { label:'Regierungsformen', href:'Regierungsformen.html' },
  ]},
  { id:'charaktererstellung', label:'Charaktererstellung', items:[
    { label:'Neuer Charakter', href:'Neuer Charakter.html', dividerAfter:true },
    { label:'Rassen', href:'Rassen.html' },
    { label:'Klassen', href:'Klassen.html' },
    { label:'Talente', href:'Talente.html' },
    { label:'Hintergründe', href:'Hintergruende.html' },
    { label:'Zauber', href:'Zauber.html' },
    { label:'Ausrüstung', href:'Ausrüstung.html' },
  ]},
  { id:'charaktere', label:'Charaktere', items:[
    { label:'Übersicht', href:'Charaktere.html', dividerAfter:true },
    { label:'Meine Charaktere', href:'Meine Charaktere.html' },
    { label:'Spielercharaktere', href:'Spielercharaktere.html' },
    { label:'NSC', href:'NSC.html' },
  ]},
  { id:'enzyklopaedie', label:'Enzyklopädie', items:[
    { label:'Gottheiten', href:'Gottheiten.html' },
    { label:'Völker', href:'#' },
    { label:'Orte', href:'#' },
  ]},
  { id:'divisionen', label:'Divisionen', items:[
    { label:'Übersicht', href:'Divisionen-Uebersicht.html', dividerAfter:true },
    { label:'I — Die Kuratoren', href:'Divisionen.html' },
    { label:'II — Die Sturmritter', href:'Sturmritter.html' },
    { label:'III — Die Sentinels', href:'Sentinels.html' },
    { label:'IV — Die Friedenshüter', href:'Friedenshueter.html' },
    { label:'V — Die Outfitters', href:'Outfitters.html' },
    { label:'VI — Die Pathfinders', href:'Pathfinders.html' },
    { label:'VII — Die Quellensucher', href:'Quellensucher.html' },
    { label:'VIII — Die Bergungsgarde', href:'Bergungsgarde.html' },
  ]},
];

function NavItem({ tab }) {
  const [open, setOpen] = useState(false);
  const timer = useRef(null);
  const isActive = tab.id === 'charaktere';
  const show = () => { clearTimeout(timer.current); setOpen(true); };
  const hide = () => { timer.current = setTimeout(() => setOpen(false), 280); };
  useEffect(() => () => clearTimeout(timer.current), []);
  return (
    <div onMouseEnter={show} onMouseLeave={hide} style={{ position:'relative' }}>
      <button
        style={{ fontFamily:'var(--font-display)', fontSize:'11px', fontWeight:'400', letterSpacing:'0.18em', padding:'10px 20px', background: isActive ? 'rgba(124,77,255,0.1)' : 'transparent', border: isActive ? '1px solid rgba(160,140,255,0.45)' : '1px solid rgba(160,140,255,0.15)', color: isActive ? '#c9b8ff' : 'rgba(200,190,240,0.7)', cursor:'pointer', borderRadius:'3px', transition:'all 0.2s', textTransform:'uppercase', whiteSpace:'nowrap' }}
        onMouseEnter={e=>{e.currentTarget.style.color='#f0eeff';e.currentTarget.style.borderColor='rgba(160,140,255,0.45)';e.currentTarget.style.background='rgba(124,77,255,0.1)';}}
        onMouseLeave={e=>{e.currentTarget.style.color=isActive?'#c9b8ff':'rgba(200,190,240,0.7)';e.currentTarget.style.borderColor=isActive?'rgba(160,140,255,0.45)':'rgba(160,140,255,0.15)';e.currentTarget.style.background=isActive?'rgba(124,77,255,0.1)':'transparent';}}>
        {tab.label}
      </button>
      {open && (
        <div onMouseEnter={show} onMouseLeave={hide} style={{ position:'absolute', top:'calc(100% + 6px)', left:0, minWidth:'210px', background:'rgba(8,6,22,0.96)', border:'1px solid rgba(160,140,255,0.2)', borderRadius:'4px', boxShadow:'0 8px 32px rgba(0,0,0,0.6)', animation:'slideDown 0.18s ease forwards', zIndex:200, backdropFilter:'blur(12px)', overflow:'hidden' }}>
          {tab.items.map((item, i) => (
            <React.Fragment key={i}>
              <a href={item.href} style={{ display:'block', padding:'10px 18px', fontFamily:'var(--font-body)', fontWeight:item.dividerAfter?'500':'300', fontSize:'12px', letterSpacing:'0.1em', color: item.dividerAfter ? '#c9b8ff' : (item.label === 'NSC' ? '#f0eeff' : 'rgba(200,190,240,0.65)'), background: item.dividerAfter ? 'rgba(124,77,255,0.08)' : (item.label === 'NSC' ? 'rgba(124,77,255,0.18)' : 'transparent'), textDecoration:'none', borderBottom: !item.dividerAfter && i < tab.items.length-1 ? '1px solid rgba(160,140,255,0.08)' : 'none', transition:'all 0.15s' }}
                onMouseEnter={e=>{e.currentTarget.style.color='#f0eeff';e.currentTarget.style.background='rgba(124,77,255,0.22)';e.currentTarget.style.paddingLeft='24px';}}
                onMouseLeave={e=>{e.currentTarget.style.color=item.dividerAfter?'#c9b8ff':(item.label==='NSC'?'#f0eeff':'rgba(200,190,240,0.65)');e.currentTarget.style.background=item.dividerAfter?'rgba(124,77,255,0.08)':(item.label==='NSC'?'rgba(124,77,255,0.18)':'transparent');e.currentTarget.style.paddingLeft='18px';}}>
                {item.label}
              </a>
              {item.dividerAfter && <div style={{ height:'1px', background:'rgba(160,140,255,0.18)', margin:'2px 0' }} />}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Atmosphere ──────────────────────────────────────────
const HEX_DEFS = [
  { size:120, x:'6%',  y:'18%', anim:'hexFloat0', dur:'7.2s', opacity:0.035 },
  { size:55,  x:'82%', y:'28%', anim:'hexFloat1', dur:'5.8s', opacity:0.06  },
  { size:200, x:'70%', y:'8%',  anim:'hexFloat2', dur:'9.1s', opacity:0.025 },
  { size:40,  x:'18%', y:'52%', anim:'hexFloat3', dur:'4.9s', opacity:0.07  },
  { size:88,  x:'52%', y:'78%', anim:'hexFloat1', dur:'6.4s', opacity:0.03  },
  { size:30,  x:'35%', y:'30%', anim:'hexFloat0', dur:'5.2s', opacity:0.09  },
];
function FloatingHexField({ mouseX, mouseY }) {
  return (
    <div style={{ position:'fixed', inset:0, pointerEvents:'none', zIndex:1, overflow:'hidden', clipPath:'inset(212px 0 0 0)' }}>
      {HEX_DEFS.map((h, i) => {
        const px = hexPoints(h.size);
        const parallaxX = (mouseX - 0.5) * (i % 3 === 0 ? -12 : i % 3 === 1 ? -6 : -18);
        const parallaxY = (mouseY - 0.5) * (i % 3 === 0 ? -8  : i % 3 === 1 ? -4 : -14);
        return (
          <div key={i} style={{ position:'absolute', left:h.x, top:h.y, animation:`${h.anim} ${h.dur} ease-in-out infinite`, animationDelay:`${i*0.7}s`, transform:`translate(${parallaxX}px,${parallaxY}px)`, transition:'transform 0.4s ease-out', willChange:'transform' }}>
            <svg width={h.size} height={h.size} viewBox={`0 0 ${h.size} ${h.size}`} style={{ display:'block', opacity:h.opacity, filter:`drop-shadow(0 0 ${h.size*0.06}px #7c4dff)` }}>
              <polygon points={px} fill="transparent" stroke="#7c4dff" strokeWidth="1" />
            </svg>
          </div>
        );
      })}
    </div>
  );
}
function ParticleField({ mouseX, mouseY }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x:0.5, y:0.5 });
  useEffect(() => { mouse.current = { x: mouseX, y: mouseY }; }, [mouseX, mouseY]);
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize(); window.addEventListener('resize', resize);
    particles.current = Array.from({length:50}, () => ({
      x: Math.random(), y: Math.random(),
      r: Math.random()*1.6+0.5,
      vx:(Math.random()-0.5)*0.05, vy:(Math.random()-0.5)*0.05,
      alpha: Math.random()*0.2+0.05,
    }));
    const tick = () => {
      const w = canvas.width, h = canvas.height;
      const shiftX = (mouse.current.x - 0.5)*-14, shiftY = (mouse.current.y - 0.5)*-14;
      ctx.clearRect(0,0,w,h);
      particles.current.forEach(p => {
        p.x += p.vx/w*60; p.y += p.vy/h*60;
        if(p.x<0)p.x=1; if(p.x>1)p.x=0; if(p.y<0)p.y=1; if(p.y>1)p.y=0;
        ctx.beginPath(); ctx.arc(p.x*w+shiftX, p.y*h+shiftY, p.r, 0, Math.PI*2);
        ctx.fillStyle = `rgba(160,140,255,${p.alpha})`; ctx.fill();
      });
      animRef.current = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(animRef.current); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position:'fixed', inset:0, width:'100%', height:'100%', pointerEvents:'none', zIndex:0, clipPath:'inset(212px 0 0 0)' }} />;
}

function useScrollReveal(deps) {
  useEffect(() => {
    const revealed = new WeakSet();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting || revealed.has(entry.target)) return;
        revealed.add(entry.target);
        observer.unobserve(entry.target);
        entry.target.classList.add('visible');
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -10px 0px' });
    const t = setTimeout(() => {
      document.querySelectorAll('.reveal-up:not(.visible)').forEach(el => observer.observe(el));
    }, 60);
    return () => { clearTimeout(t); observer.disconnect(); };
  }, deps);
}

// ── Portrait (mit Stage-0 Silhouette) ────────────────────
function NSCPortrait({ nsc, stage, acc, size=120 }) {
  acc = acc || '#7c4dff';
  const initials = nsc.name && stage >= 1
    ? nsc.name.split(/[\s']/).filter(Boolean).slice(0,2).map(w => w[0]).join('').toUpperCase()
    : '?';
  const hasImage = !!nsc.bild && stage >= 1;
  const PAD = 3;
  const RING_GAP = Math.max(4, size * 0.06);
  const clipPath = hexClipInset((PAD / size) * 100);
  const fully = stage === 0;
  return (
    <div style={{ position:'relative', width:size, height:size, flexShrink:0 }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ position:'absolute', inset:0, pointerEvents:'none', overflow:'visible', filter:`drop-shadow(0 0 12px ${hexA(acc, fully ? 0.2 : 0.45)})`, zIndex:3 }}>
        <polygon points={hexPointsInset(size, PAD)} fill="none" stroke={acc} strokeWidth="1.6" strokeOpacity={fully ? 0.4 : 1} strokeDasharray={fully ? '4 4' : 'none'} strokeLinejoin="miter"/>
        <polygon points={hexPointsInset(size, PAD + RING_GAP)} fill="none" stroke={acc} strokeWidth="0.6" strokeOpacity={fully ? 0.15 : 0.45} strokeLinejoin="miter"/>
      </svg>

      <div style={{ position:'absolute', inset:0, clipPath, background: hasImage ? '#000' : hexA(acc, fully ? 0.05 : 0.12), overflow:'hidden', zIndex:1 }}>
        {hasImage ? (
          <React.Fragment>
            <img src={nsc.bild} alt={nsc.name} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
            <div style={{ position:'absolute', inset:0, pointerEvents:'none',
              background:`radial-gradient(ellipse at 50% 50%, transparent 55%, ${hexA(acc,0.35)} 100%)` }} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div style={{ position:'absolute', inset:0,
              backgroundImage:`repeating-linear-gradient(45deg, ${hexA(acc, fully ? 0.05 : 0.10)} 0 6px, transparent 6px 12px)`,
              backgroundColor: hexA(acc, fully ? 0.03 : 0.06) }} />
            <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center',
              fontFamily:'var(--font-display)', fontSize: size*0.30, fontWeight:300, letterSpacing:'0.05em',
              color: fully ? 'rgba(200,190,240,0.45)' : '#f0eeff',
              textShadow: fully ? 'none' : `0 0 14px ${acc}, 0 0 6px ${hexA(acc,0.8)}`,
              animation: fully ? 'pulse-glow 2.4s ease-in-out infinite' : 'none',
              fontStyle: fully ? 'italic' : 'normal',
            }}>{initials}</div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

// ── Stage-Badge (klein, oben rechts auf der Karte) ──────
function StageBadge({ stage, acc, size='compact' }) {
  const isMax = stage >= MAX_STAGE;
  const isZero = stage === 0;
  if (isMax) {
    return (
      <div style={{
        display:'inline-flex', alignItems:'center', gap:5,
        padding: size === 'compact' ? '4px 9px' : '6px 11px',
        border: `1px solid ${GOLD}`,
        background: goldA(0.16),
        fontFamily:'var(--font-mono)', fontSize: size === 'compact' ? 8 : 9.5,
        color: GOLD, letterSpacing:'0.22em', textTransform:'uppercase',
        boxShadow:`0 0 14px ${GOLD_GLOW}`, borderRadius:2, whiteSpace:'nowrap', fontWeight:600,
      }}>
        <span>✓</span>
        <span>Eingeweiht</span>
      </div>
    );
  }
  const seg = size === 'compact' ? 4 : 6;
  const gap = size === 'compact' ? 2 : 3;
  return (
    <div style={{
      display:'inline-flex', alignItems:'center', gap:6,
      padding: size === 'compact' ? '4px 8px' : '6px 10px',
      border: `1px solid ${isZero ? 'rgba(160,140,255,0.25)' : hexA(acc, 0.55)}`,
      background: isZero ? 'rgba(124,77,255,0.04)' : hexA(acc, 0.10),
      fontFamily:'var(--font-mono)', fontSize: size === 'compact' ? '8px' : '9px',
      color: isZero ? 'rgba(160,140,255,0.5)' : acc,
      letterSpacing:'0.20em', textTransform:'uppercase',
      borderRadius:2, whiteSpace:'nowrap',
    }}>
      <span style={{ display:'inline-flex', gap }}>
        {Array.from({length:MAX_STAGE}, (_,i) => i+1).map(i => (
          <span key={i} style={{
            width:seg, height:seg,
            background: i <= stage ? acc : 'transparent',
            border: `1px solid ${i <= stage ? acc : hexA(acc, 0.35)}`,
            boxShadow: i <= stage ? `0 0 3px ${hexA(acc, 0.65)}` : 'none',
          }}/>
        ))}
      </span>
      <span>{stage}/{MAX_STAGE}</span>
    </div>
  );
}

// ── Stage Progress Bar (großes Inset im Detail-Panel) ────
function StageProgress({ stage, acc }) {
  const isMax = stage >= MAX_STAGE;
  const mainAcc = isMax ? GOLD : acc;
  const aFn = isMax ? goldA : ((a) => hexA(acc, a));
  return (
    <div style={{
      border:`1px solid ${aFn(0.35)}`,
      background: aFn(0.06),
      padding:'14px 16px', borderRadius:3, position:'relative',
      boxShadow: isMax ? `0 0 26px ${GOLD_GLOW}` : 'none',
    }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:10, gap:10 }}>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:8.5, letterSpacing:'0.3em', color: aFn(0.85), textTransform:'uppercase' }}>
          {isMax ? '✓ Eingeweiht' : '◈ Vertrautheit'}
        </span>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:8.5, letterSpacing:'0.22em', color: mainAcc, textTransform:'uppercase' }}>
          {stage} / {MAX_STAGE} · {STAGE_LABELS[stage] || 'Unbekannt'}
        </span>
      </div>
      <div style={{ display:'flex', gap:4, marginBottom:8 }}>
        {Array.from({length:MAX_STAGE}, (_,i) => i+1).map(i => {
          const filled = i <= stage;
          return (
            <div key={i} style={{ flex:1, minWidth:0 }}>
              <div style={{
                height:5, borderRadius:2,
                background: filled ? mainAcc : 'rgba(124,77,255,0.08)',
                border:`1px solid ${filled ? aFn(0.9) : aFn(0.2)}`,
                boxShadow: filled ? `0 0 8px ${aFn(0.5)}, inset 0 0 3px ${aFn(0.3)}` : 'none',
                transition:'all 0.4s',
              }}/>
              <div style={{
                marginTop:4, textAlign:'center',
                fontFamily:'var(--font-mono)', fontSize:7,
                color: filled ? aFn(0.85) : 'rgba(160,140,255,0.32)',
                letterSpacing:'0.10em', textTransform:'uppercase',
                whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis',
              }}>{STAGE_LABELS[i]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── StatusPills — rendert mehrere Status-Tags ────────────
// Akzeptiert string ODER string[] für Abwärtskompatibilität.
function StatusPills({ status }) {
  const list = Array.isArray(status) ? status : (status ? [status] : []);
  if (list.length === 0) return null;
  return (
    <div style={{ display:'inline-flex', flexWrap:'wrap', gap:5 }}>
      {list.map((s, i) => {
        const def = STATUS_DEF[s] || STATUS_DEF['Lebendig'];
        return (
          <span key={s+i} style={{
            display:'inline-flex', alignItems:'center', gap:5,
            padding:'3px 8px',
            background:`${def.color}15`,
            border:`1px solid ${def.color}55`,
            borderRadius:2,
            fontFamily:'var(--font-mono)', fontSize:8.5, letterSpacing:'0.22em', textTransform:'uppercase',
            color: def.color,
          }}>
            <span style={{ width:5, height:5, borderRadius:'50%', background: def.color,
              animation: s === 'Lebendig' ? 'pulse-dot 2.2s ease-in-out infinite' : 'none' }} />
            {s}
          </span>
        );
      })}
    </div>
  );
}

// ── Locked Slot (placeholder when feature locked) ────────
function LockedSlot({ requiredStage, acc, compact, hint }) {
  return (
    <div style={{
      padding: compact ? '6px 10px' : '10px 14px',
      border:`1px dashed ${hexA(acc, 0.25)}`,
      background: hexA(acc, 0.04),
      borderRadius:2,
      display:'flex', alignItems:'center', gap:8,
      fontFamily:'var(--font-mono)', fontSize: compact ? 8 : 9,
      letterSpacing:'0.18em', textTransform:'uppercase',
      color:'rgba(160,140,255,0.5)',
    }}>
      <span style={{ width:6, height:6, border:`1px solid ${hexA(acc, 0.45)}`, display:'inline-block' }}/>
      <span>{hint || `Stufe ${requiredStage} nötig`}</span>
    </div>
  );
}

// ── Field (label/value) — supports lock state ────────────
function Field({ label, value, unlocked = true, requiredStage, acc='#7c4dff' }) {
  return (
    <React.Fragment>
      <span style={{ fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.22em', color:'rgba(160,140,255,0.5)', textTransform:'uppercase', whiteSpace:'nowrap', paddingTop:2 }}>
        {label}
      </span>
      {unlocked ? (
        <span style={{ fontFamily:'var(--font-body)', fontWeight:300, fontSize:13, color:'#f0eeff' }}>
          {value || <span style={{ color:'rgba(160,140,255,0.4)', fontStyle:'italic' }}>—</span>}
        </span>
      ) : (
        <span style={{ fontFamily:'var(--font-mono)', fontSize:10, color:hexA(acc, 0.55), letterSpacing:'0.18em', textTransform:'uppercase', display:'inline-flex', alignItems:'center', gap:6 }}>
          <span style={{ width:6, height:6, border:`1px solid ${hexA(acc, 0.45)}`, display:'inline-block' }}/>
          Stufe {requiredStage} nötig
        </span>
      )}
    </React.Fragment>
  );
}

// ── UnlockToggle — DM-Toggle für einen einzelnen Fakt (Tri-State) ────
// state: 'all' = orange (freigegeben), 'some' = lila (teilweise), 'none' = gedimmt (verborgen)
// unlocked: bool — Legacy-Fallback falls state nicht übergeben wird.
function UnlockToggle({ state, unlocked, onClick, size='sm' }) {
  const s     = state ?? (unlocked ? 'all' : 'none');
  const isAll = s === 'all';
  const isSome = s === 'some';
  const small = size === 'sm';
  const bg  = isAll ? 'rgba(255,180,80,0.18)' : isSome ? 'rgba(160,120,255,0.15)' : 'rgba(124,77,255,0.05)';
  const bdr = isAll ? 'rgba(255,180,80,0.7)'  : isSome ? 'rgba(160,120,255,0.65)' : 'rgba(160,140,255,0.3)';
  const clr = isAll ? '#ffb850'                : isSome ? '#c8a8ff'                : 'rgba(160,140,255,0.6)';
  const icon  = isAll ? '◆' : isSome ? '◈' : '○';
  const label = isAll ? 'Freigegeben' : isSome ? 'Teilweise' : 'Verborgen';
  const title = isAll ? 'Klick: wieder verbergen' : isSome ? 'Klick: für alle freischalten' : 'Klick: freischalten';
  return (
    <button type="button" onClick={(e) => { e.stopPropagation(); onClick(); }}
      title={title}
      style={{
        display:'inline-flex', alignItems:'center', gap:5,
        padding: small ? '2px 7px' : '4px 9px',
        background: bg, border: `1px solid ${bdr}`, borderRadius:2,
        color: clr, fontFamily:'var(--font-mono)', fontSize: small ? 8 : 9,
        letterSpacing:'0.16em', textTransform:'uppercase', cursor:'pointer',
        whiteSpace:'nowrap', transition:'all 0.15s', flexShrink:0, fontWeight:600,
      }}
      onMouseEnter={e => {
        if (isAll) { e.currentTarget.style.background='rgba(227,103,96,0.15)'; e.currentTarget.style.borderColor='rgba(227,103,96,0.7)'; e.currentTarget.style.color='#e36760'; }
        else       { e.currentTarget.style.background='rgba(255,180,80,0.15)'; e.currentTarget.style.borderColor='rgba(255,180,80,0.7)'; e.currentTarget.style.color='#ffb850'; }
      }}
      onMouseLeave={e => { e.currentTarget.style.background=bg; e.currentTarget.style.borderColor=bdr; e.currentTarget.style.color=clr; }}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  );
}

// Expose to other files
Object.assign(window, {
  STAGE_LABELS, STAGE_HINTS, MAX_STAGE, STAGE_THRESHOLDS,
  STATUS_DEF, STATUS_ORDER,
  DIVISION_THEME, DIVISION_ORDER,
  GOLD, GOLD_SOFT, GOLD_GLOW, goldA,
  hexPoints, hexPointsInset, hexClipInset, hexA, effStage, accentOf, romanFor,
  factsOf, factLabel, defaultUnlockedFor, stageFromUnlocked, nscFieldVisible,
  NSC_ZUSTAENDE, NSC_HALTUNGEN, nscEffectiveStatus,
  unlockableFactsOf, NSC_SEC_OF_PREFIX,
  MERURIA_MONTHS, MERURIA_MSTARTS, meruriaDoyParts, meruriaDoyText, meruriaZodiacOf,
  mapNscRow, useNSCData, useUnlocks,
  NAV, NavItem, FloatingHexField, ParticleField, useScrollReveal,
  NSCPortrait, StageBadge, StageProgress, StatusPills, LockedSlot, Field,
  UnlockToggle,
});
