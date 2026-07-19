/* ─────────────────────────────────────────────────────────────────
   Karte v2 — gemeinsame Datenschicht für Karte.html + Kartenmanagement.html
   Objectives, Bild-Karten-Areas und Ressourcen-Pools (Supabase),
   Arten-Katalog aus den echten Ressourcen-Datenbanken
   (FISH_DB, INSEKTEN_DB, PFLANZEN_DB + FANTASY_PLANT_DB, MINERALIEN_DB).
   Fang-Status kommt global aus kollektikon_counts (menge > 0).
   ───────────────────────────────────────────────────────────────── */
(function () {

  // ── Pool-Typen (die 4 Kern-Kategorien) ─────────────────────────
  const POOL_TYPES = [
    { key: 'fische',     label: 'Fische',     hue: 200, habLabel: 'Gewässer'   },
    { key: 'insekten',   label: 'Insekten',   hue: 95,  habLabel: 'Lebensraum' },
    { key: 'pflanzen',   label: 'Pflanzen',   hue: 140, habLabel: 'Fundort'    },
    { key: 'mineralien', label: 'Mineralien', hue: 60,  habLabel: 'Vorkommen'  },
  ];

  // ── Seltenheiten (identisch zum Kollektikon) ───────────────────
  const RARITY_META = {
    gewoehnlich: { label: 'Gewöhnlich',  color: 'rgba(240,238,255,0.85)' },
    selten:      { label: 'Selten',      color: 'oklch(0.72 0.13 240)'   },
    sehrselten:  { label: 'Sehr selten', color: 'oklch(0.68 0.18 310)'   },
    einzigartig: { label: 'Einzigartig', color: 'oklch(0.80 0.14 60)'    },
  };
  const RARITY_ORDER = ['gewoehnlich', 'selten', 'sehrselten', 'einzigartig'];

  function rarFromSg(sg) {
    return sg <= 1 ? 'gewoehnlich' : sg === 2 ? 'selten' : sg === 3 ? 'sehrselten' : 'einzigartig';
  }
  function rarFromStaerke(s) {
    return s <= 2 ? 'gewoehnlich' : s <= 4 ? 'selten' : s === 5 ? 'sehrselten' : 'einzigartig';
  }

  // ── Katalog aus den echten Datenbanken ─────────────────────────
  // Einträge: { id, name, habs:[], habitat:'a, b', rarity }
  let _katalog = null;
  function getKatalog() {
    if (_katalog) return _katalog;
    const k = { fische: [], insekten: [], pflanzen: [], mineralien: [] };
    (window.FISH_DB || []).forEach(f => {
      const habs = (f.lebensraum && f.lebensraum.length) ? f.lebensraum
        : [f.wassersort === 'süß' ? 'Süßwasser' : 'Salzwasser'];
      k.fische.push({ id: String(f.id), name: f.name_de, habs, habitat: habs.join(', '), rarity: rarFromStaerke(f.stärke || 2) });
    });
    (window.INSEKTEN_DB || []).forEach(i => {
      const habs = i.lebensraum || [];
      k.insekten.push({ id: String(i.id), name: i.name_de, habs, habitat: habs.join(', '), rarity: rarFromSg(i.seltenheitsgrad || 1) });
    });
    [...(window.PFLANZEN_DB || []), ...(window.FANTASY_PLANT_DB || [])].forEach(p => {
      const habs = p.fundort || [];
      k.pflanzen.push({ id: String(p.id), name: p.name_de, habs, habitat: habs.join(', '), rarity: rarFromSg(p.seltenheitsgrad || 1) });
    });
    (window.MINERALIEN_DB || []).forEach(m => {
      const habs = m.fundort || [];
      k.mineralien.push({ id: String(m.id), name: m.name_de, habs, habitat: habs.join(', '), rarity: rarFromSg(m.seltenheitsgrad || 1) });
    });
    Object.values(k).forEach(arr => arr.sort((a, b) => a.name.localeCompare(b.name, 'de')));
    _katalog = k;
    return k;
  }
  function katalogItem(cat, rid) {
    return (getKatalog()[cat] || []).find(it => it.id === String(rid)) || null;
  }

  // ── Forschungsstufe (0–8) wie im Kollektikon ───────────────────
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

  // Lädt globalen Fang-Status + Stufen-Schwellen.
  // Rückgabe: { counts: {'cat:rid': menge}, thresholds: {'cat:rarity': row} }
  async function loadKollektikonStatus() {
    const [countRes, threshRes] = await Promise.all([
      window._sb.from('kollektikon_counts').select('cat, resource_id, menge'),
      window._sb.from('kollektikon_thresholds').select('*'),
    ]);
    const counts = {};
    (countRes.data || []).forEach(r => { counts[`${r.cat}:${r.resource_id}`] = r.menge || 0; });
    const thresholds = {};
    (threshRes.data || []).forEach(r => { thresholds[`${r.cat}:${r.rarity}`] = r; });
    return { counts, thresholds };
  }

  // ── Areas (Bild-Karten-Flächen) ────────────────────────────────
  function rowToArea(a) {
    return {
      id: a.id, map_id: a.map_id, floor: a.floor || 0,
      name: a.name || '', typ: a.typ || 'poi',
      points: a.points || [],
      beschreibung: a.beschreibung || '', bild_url: a.bild_url || '',
      tags: a.tags || [], visible: !!a.visible,
      entdeckt: !!a.entdeckt, komplettiert: !!a.komplettiert,
      has_submap: !!a.has_submap, submap_id: a.submap_id || null,
      rot: 0,  // nur Laufzeit-Orientierung des Rotations-Griffs; Punkte selbst sind rotiert gespeichert
    };
  }

  async function loadAreas(mapId, onlyVisible) {
    let q = window._sb.from('karte_areas').select('*').eq('map_id', mapId);
    if (onlyVisible) q = q.eq('visible', true);
    const { data } = await q;
    return (data || []).map(rowToArea);
  }

  async function sbUpsertArea(area) {
    const { error } = await window._sb.from('karte_areas').upsert({
      id: area.id, map_id: area.map_id, floor: area.floor || 0,
      name: area.name || '', typ: area.typ || 'poi',
      points: area.points || [],
      beschreibung: area.beschreibung || '', bild_url: area.bild_url || '',
      tags: area.tags || [], visible: !!area.visible,
      entdeckt: !!area.entdeckt, komplettiert: !!area.komplettiert,
      has_submap: !!area.has_submap, submap_id: area.submap_id || null,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'id' });
    if (error) console.error('sbUpsertArea:', error);
  }

  async function sbDeleteArea(areaId) {
    const { error } = await window._sb.from('karte_areas').delete().eq('id', areaId);
    if (error) console.error('sbDeleteArea:', error);
  }

  // ── Objectives ─────────────────────────────────────────────────
  function rowToObjective(o) {
    return {
      id: o.id, hex_id: o.hex_id || null, area_id: o.area_id || null,
      titel: o.titel || '', tags: o.tags || [], beschreibung: o.beschreibung || '',
      bedingung: o.bedingung || '', belohnung: o.belohnung || '',
      monster: o.monster || [],
      entdeckt: !!o.entdeckt, komplettiert: !!o.komplettiert, freigeschaltet: !!o.freigeschaltet,
      sort_order: o.sort_order || 0,
    };
  }

  // Lädt Objectives für Hex- und Area-Listen (RLS filtert für Spieler auf freigeschaltet)
  async function loadObjectives(hexIds, areaIds) {
    const out = [];
    if (hexIds && hexIds.length) {
      const { data } = await window._sb.from('karte_objectives').select('*').in('hex_id', hexIds);
      (data || []).forEach(o => out.push(rowToObjective(o)));
    }
    if (areaIds && areaIds.length) {
      const { data } = await window._sb.from('karte_objectives').select('*').in('area_id', areaIds);
      (data || []).forEach(o => out.push(rowToObjective(o)));
    }
    out.sort((a, b) => a.sort_order - b.sort_order);
    return out;
  }

  async function sbUpsertObjective(o) {
    const { error } = await window._sb.from('karte_objectives').upsert({
      id: o.id, hex_id: o.hex_id || null, area_id: o.area_id || null,
      titel: o.titel || '', tags: o.tags || [], beschreibung: o.beschreibung || '',
      bedingung: o.bedingung || '', belohnung: o.belohnung || '',
      monster: o.monster || [],
      entdeckt: !!o.entdeckt, komplettiert: !!o.komplettiert, freigeschaltet: !!o.freigeschaltet,
      sort_order: o.sort_order || 0,
    }, { onConflict: 'id' });
    if (error) console.error('sbUpsertObjective:', error);
  }

  async function sbDeleteObjective(id) {
    const { error } = await window._sb.from('karte_objectives').delete().eq('id', id);
    if (error) console.error('sbDeleteObjective:', error);
  }

  // ── Pools ──────────────────────────────────────────────────────
  // anchor = { hex_id } oder { area_id }
  async function loadPools(hexIds, areaIds) {
    const out = [];
    if (hexIds && hexIds.length) {
      const { data } = await window._sb.from('karte_pools').select('*').in('hex_id', hexIds);
      (data || []).forEach(r => out.push(r));
    }
    if (areaIds && areaIds.length) {
      const { data } = await window._sb.from('karte_pools').select('*').in('area_id', areaIds);
      (data || []).forEach(r => out.push(r));
    }
    return out;
  }

  async function sbAddPoolItem(anchor, cat, resourceId) {
    const row = { cat, resource_id: String(resourceId), hex_id: anchor.hex_id || null, area_id: anchor.area_id || null };
    const { error } = await window._sb.from('karte_pools').insert(row);
    if (error && error.code !== '23505') console.error('sbAddPoolItem:', error);
  }

  async function sbRemovePoolItem(anchor, cat, resourceId) {
    let q = window._sb.from('karte_pools').delete().eq('cat', cat).eq('resource_id', String(resourceId));
    q = anchor.hex_id ? q.eq('hex_id', anchor.hex_id) : q.eq('area_id', anchor.area_id);
    const { error } = await q;
    if (error) console.error('sbRemovePoolItem:', error);
  }

  // ── Fortschritts-Rollup (Objectives nach Tags, rekursiv) ───────
  // Läuft über die Karten-Hierarchie ab einem Start-Knoten (Hex oder Area).
  // fetchers: für Spieler-/DM-Seite unterschiedlich (visible-Filter).
  // Rückgabe: [{ kat, total, entdeckt, komplettiert }]
  async function collectSubtreeStats(startNode, opts) {
    const onlyVisible = !!(opts && opts.onlyVisible);
    const acc = new Map();
    const add = (tag, e, k) => {
      const s = acc.get(tag) || { total: 0, e: 0, k: 0 };
      s.total++; if (e) s.e++; if (k) s.k++;
      acc.set(tag, s);
    };
    const seenMaps = new Set();
    const addObjs = objs => objs.forEach(o => {
      const tags = (o.tags && o.tags.length) ? o.tags : ['Sonstige'];
      tags.forEach(t => add(t, o.entdeckt, o.komplettiert));
    });

    // Start-Knoten selbst
    const startObjs = await loadObjectives(
      startNode.hexId ? [startNode.hexId] : [],
      startNode.areaId ? [startNode.areaId] : []
    );
    addObjs(onlyVisible ? startObjs.filter(o => o.freigeschaltet) : startObjs);

    // Rekursiv über Unterkarten (BFS, max. 6 Ebenen als Schutz)
    let queue = startNode.submapId ? [startNode.submapId] : [];
    let depth = 0;
    while (queue.length && depth < 6) {
      const next = [];
      for (const mapId of queue) {
        if (seenMaps.has(mapId)) continue;
        seenMaps.add(mapId);
        let hq = window._sb.from('karte_hexes').select('id, has_submap, submap_id, visible').eq('map_id', mapId);
        if (onlyVisible) hq = hq.eq('visible', true);
        const [hexRes, areaList] = await Promise.all([hq, loadAreas(mapId, onlyVisible)]);
        const hexRows = hexRes.data || [];
        areaList.forEach(a => add('POI', a.entdeckt, a.komplettiert));
        const objs = await loadObjectives(hexRows.map(h => h.id), areaList.map(a => a.id));
        addObjs(onlyVisible ? objs.filter(o => o.freigeschaltet) : objs);
        hexRows.forEach(h => { if (h.has_submap && h.submap_id) next.push(h.submap_id); });
        areaList.forEach(a => { if (a.has_submap && a.submap_id) next.push(a.submap_id); });
      }
      queue = next;
      depth++;
    }

    return [...acc.entries()].map(([kat, s]) => ({
      kat, total: s.total,
      entdeckt: Math.round(s.e / s.total * 100),
      komplettiert: Math.round(s.k / s.total * 100),
    }));
  }

  // ── Icon-Eingabe für Erkundungs-Symbole ────────────────────────
  // Akzeptiert entweder reine Pfaddaten ("M50 14 …", viewBox 0 0 100 100)
  // oder komplettes SVG-Markup (z. B. von svgrepo.com kopiert) — daraus werden
  // alle <path d="…"> und die viewBox extrahiert; Farben werden verworfen,
  // damit das Symbol die Balkenfarbe erbt.
  function parseIcon(val) {
    if (!val || !val.trim()) return null;
    const s = val.trim();
    if (s.includes('<')) {
      const vb = /viewBox\s*=\s*"([^"]+)"/i.exec(s);
      const paths = [...s.matchAll(/\sd\s*=\s*"([^"]+)"/g)].map(m => m[1]).filter(d => d.trim());
      if (!paths.length) return null;
      return { viewBox: vb ? vb[1] : '0 0 24 24', paths };
    }
    return { viewBox: '0 0 100 100', paths: [s] };
  }

  Object.assign(window, {
    karteParseIcon: parseIcon,
    KARTE_POOL_TYPES: POOL_TYPES,
    KARTE_RARITY_META: RARITY_META,
    KARTE_RARITY_ORDER: RARITY_ORDER,
    karteGetKatalog: getKatalog,
    karteKatalogItem: katalogItem,
    karteComputeStage: computeStage,
    karteLoadKollektikonStatus: loadKollektikonStatus,
    rowToArea, loadAreas, sbUpsertArea, sbDeleteArea,
    rowToObjective, loadObjectives, sbUpsertObjective, sbDeleteObjective,
    loadPools, sbAddPoolItem, sbRemovePoolItem,
    karteCollectSubtreeStats: collectSubtreeStats,
  });
})();
