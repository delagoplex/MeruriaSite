/* ─────────────────────────────────────────────────────────────────
   Ressourcen-Katalog — einheitliche Sicht auf FISH_DB, INSEKTEN_DB,
   PFLANZEN_DB + FANTASY_PLANT_DB, MINERALIEN_DB und MONSTER_DATA.
   Genutzt von /dm/kollektikon.html (Verwaltung + Randomizer) und dem
   Pool-Modal der Kartenverwaltung.

   Eintrag: { id, cat, name, desc, icon, rarity, tags:{Gruppe:[Wert]},
              facts:[[Label, Wert]] }
   ───────────────────────────────────────────────────────────────── */
(function () {
  const RARITY_META = {
    gewoehnlich: { label: 'Gewöhnlich',  color: 'rgba(240,238,255,0.85)' },
    selten:      { label: 'Selten',      color: 'oklch(0.72 0.13 240)'   },
    sehrselten:  { label: 'Sehr selten', color: 'oklch(0.68 0.18 310)'   },
    einzigartig: { label: 'Einzigartig', color: 'oklch(0.80 0.14 60)'    },
  };
  const RARITY_ORDER = ['gewoehnlich', 'selten', 'sehrselten', 'einzigartig'];
  // Gewichte für den Randomizer: je seltener, desto unwahrscheinlicher
  const RARITY_WEIGHT = { gewoehnlich: 10, selten: 4, sehrselten: 1.5, einzigartig: 0.5 };

  const rarFromSg = sg => sg <= 1 ? 'gewoehnlich' : sg === 2 ? 'selten' : sg === 3 ? 'sehrselten' : 'einzigartig';
  const rarFromStaerke = s => s <= 2 ? 'gewoehnlich' : s <= 4 ? 'selten' : s === 5 ? 'sehrselten' : 'einzigartig';
  const rarFromCr = cr => cr <= 1 ? 'gewoehnlich' : cr <= 5 ? 'selten' : cr <= 10 ? 'sehrselten' : 'einzigartig';

  const arr = v => Array.isArray(v) ? v.filter(Boolean) : (v ? [v] : []);
  const facts = list => list.filter(f => f[1] !== undefined && f[1] !== null && f[1] !== '');

  const CATS = [
    { id: 'fische',     label: 'Fische',     groups: ['Klima', 'Wassersorte', 'Größe', 'Lebensraum'] },
    { id: 'insekten',   label: 'Insekten',   groups: ['Lebensraum', 'Klima', 'Größe', 'Art'] },
    { id: 'pflanzen',   label: 'Pflanzen',   groups: ['Fundort', 'Klima', 'Kategorie', 'Eigenschaft'] },
    { id: 'mineralien', label: 'Mineralien', groups: ['Fundort', 'Kategorie'] },
    { id: 'kreaturen',  label: 'Kreaturen',  groups: ['Art', 'Unterart', 'Größe', 'Umgebung'] },
  ];

  function monsterId(name) {
    let h = 5381;
    for (let i = 0; i < name.length; i++) h = (Math.imul(h, 33) ^ name.charCodeAt(i)) >>> 0;
    return String(h % 2000000000);
  }

  const cache = {};
  function build(cat) {
    let out = [];
    if (cat === 'fische') {
      out = (window.FISH_DB || []).map(f => ({
        id: String(f.id), cat, name: f.name_de, desc: f.desc_de || '', icon: f.icon || null,
        rarity: rarFromStaerke(f.stärke || 2),
        tags: {
          'Klima': arr(f.klima),
          'Wassersorte': [f.wassersort === 'süß' ? 'Süßwasser' : 'Salzwasser'],
          'Größe': arr(f['größenkategorie']),
          'Lebensraum': arr(f.lebensraum),
        },
        facts: facts([['Größe', f['größenkategorie']], ['Gewicht', f.gewicht], ['Preis', f.verkaufspreis],
          ['Stärke', f.stärke], ['SG', f.sg], ['Level', Array.isArray(f.level) ? f.level[0] : f.level]]),
      }));
    } else if (cat === 'insekten') {
      out = (window.INSEKTEN_DB || []).map(i => ({
        id: String(i.id), cat, name: i.name_de, desc: i.desc_de || '', icon: i.icon || null,
        rarity: rarFromSg(i.seltenheitsgrad || 1),
        tags: { 'Lebensraum': arr(i.lebensraum), 'Klima': arr(i.klima), 'Größe': arr(i['größenkategorie']), 'Art': arr(i.insektenart) },
        facts: facts([['Art', i.insektenart], ['Größe', i['größenkategorie']], ['Gewicht', i.gewicht],
          ['Preis', i.verkaufspreis], ['SG', i.sg]]),
      }));
    } else if (cat === 'pflanzen') {
      out = [...(window.PFLANZEN_DB || []), ...(window.FANTASY_PLANT_DB || [])].map(p => {
        const e = p.eigenschaften || {};
        const eig = [];
        if (e.essbar) eig.push('Essbar');
        if (e.essbar_nach_zubereitung) eig.push('Essbar nach Zubereitung');
        if (e.giftig) eig.push('Giftig');
        return {
          id: String(p.id), cat, name: p.name_de, desc: p.desc_de || '', icon: p.icon || null,
          rarity: rarFromSg(p.seltenheitsgrad || 1),
          tags: { 'Fundort': arr(p.fundort), 'Klima': arr(p.klima), 'Kategorie': arr(p.kategorie), 'Eigenschaft': eig },
          facts: facts([['Kategorie', p.kategorie], ['Nutzen', p.nutzen], ['Größe', p.groesse], ['Wachstum', p.wachstumsdauer],
            ['Farbe', e.farbe], ['Beschaffenheit', e.beschaffenheit], ['Gewicht', p.gewicht], ['Preis', p.verkaufspreis], ['Level', p.level]]),
        };
      });
    } else if (cat === 'mineralien') {
      out = (window.MINERALIEN_DB || []).map(m => ({
        id: String(m.id), cat, name: m.name_de, desc: m.desc_de || '', icon: m.icon || null,
        rarity: rarFromSg(m.seltenheitsgrad || 1),
        tags: { 'Fundort': arr(m.fundort), 'Kategorie': arr(m.kategorie) },
        facts: facts([['Kategorie', m.kategorie], ['Gewicht', m.gewicht], ['Preis', m.verkaufspreis], ['Level', m.level]]),
      }));
    } else if (cat === 'kreaturen') {
      out = (window.MONSTER_DATA || []).map(m => ({
        id: monsterId(m.name), cat, name: m.name,
        desc: Array.isArray(m.beschreibung) ? m.beschreibung.join(' ') : (m.beschreibung || ''), icon: m.bild || null,
        rarity: rarFromCr(m.cr || 0),
        tags: {
          'Art': arr(m.art),
          'Unterart': m.unterart ? String(m.unterart).split(', ') : [],
          'Größe': arr(m.groesse),
          'Umgebung': arr(m.umgebung),
        },
        facts: facts([['HG', m.cr], ['Art', m.art], ['Größe', m.groesse], ['Gesinnung', m.gesinnung], ['RK', m.rk], ['TP', m.tp], ['Quelle', m.source]]),
      }));
    }
    out.sort((a, b) => a.name.localeCompare(b.name, 'de'));
    return out;
  }

  function entries(cat) { return cache[cat] || (cache[cat] = build(cat)); }
  function get(cat, id) { return entries(cat).find(e => e.id === String(id)) || null; }

  // Werte je Tag-Gruppe mit Häufigkeit, absteigend
  function tagOptions(cat) {
    const def = CATS.find(c => c.id === cat);
    const res = {};
    (def ? def.groups : []).forEach(g => { res[g] = {}; });
    entries(cat).forEach(e => Object.entries(e.tags).forEach(([g, vals]) => {
      if (!res[g]) return;
      vals.forEach(v => { res[g][v] = (res[g][v] || 0) + 1; });
    }));
    const out = {};
    Object.entries(res).forEach(([g, m]) => {
      const list = Object.entries(m).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'de'));
      if (list.length) out[g] = list;
    });
    return out;
  }

  // sel: { Gruppe: [Wert, …] } — ODER innerhalb einer Gruppe, UND zwischen Gruppen
  function matches(e, sel) {
    return Object.entries(sel || {}).every(([g, vals]) => !vals.length || vals.some(v => (e.tags[g] || []).includes(v)));
  }

  // Gewichtete Ziehung ohne Zurücklegen (Efraimidis-Spirakis)
  function weightedPick(list, n, weightFn) {
    return list
      .map(e => ({ e, k: Math.pow(Math.random(), 1 / Math.max(0.0001, weightFn ? weightFn(e) : 1)) }))
      .sort((a, b) => b.k - a.k)
      .slice(0, n)
      .map(x => x.e);
  }

  window.RessourcenKatalog = {
    CATS, RARITY_META, RARITY_ORDER, RARITY_WEIGHT,
    entries, get, tagOptions, matches, weightedPick, monsterId,
  };
})();
