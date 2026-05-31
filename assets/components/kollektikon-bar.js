/* Shared Kollektikon category data, icons + KollektikonBar component.
   Loaded as a plain <script> by both index.html and Kollektikon.html.
   Exports: window.KOL_CATEGORIES, window.KOL_CAT_ICONS, window.KollektikonBar */
(function () {
  const h = React.createElement;
  const { useRef, useState, useEffect } = React;

  // ── Category metadata (single source of truth) ──────────────
  window.KOL_CATEGORIES = [
    { id: 'fische',         label: 'Fische',                        labelShort: 'Fisch',    total: 1506, hue: 200, short: 'Aquatische Lebensformen'         },
    { id: 'insekten',       label: 'Insekten',                      labelShort: 'Insekt',   total: 1346, hue: 95,  short: 'Gliedfüßer & Krabbeltiere'        },
    { id: 'pflanzen',       label: 'Pflanzen',                      labelShort: 'Pflanze',  total: 732,  hue: 140, short: 'Flora & Botanik'                   },
    { id: 'mineralien',     label: 'Mineralien',                    labelShort: 'Mineral',  total: 99,   hue: 60,  short: 'Gestein & Kristalle'               },
    { id: 'kreaturen',      label: 'Kreaturen',                     labelShort: 'Kreatur',  total: 1520, hue: 285, short: 'Wesen Merurias'                    },
    { id: 'kreaturenteile', label: 'Kreaturenteile',                labelShort: 'Teil',     total: 0,    hue: 0,   short: 'Trophäen & Material'               },
    { id: 'wal',            label: 'Trümmer des Weißen Wals',       labelShort: 'Wal',      total: 0,    hue: 210, short: 'Fragmente eines kosmischen Mythos' },
    { id: 'lebensspeicher', label: 'Teile des Lebensspeichers',     labelShort: 'Speicher', total: 0,    hue: 45,  short: 'Reliquien des Urspeichers'         },
  ];

  // ── Category icons (viewBox 0 0 100 100) ────────────────────
  window.KOL_CAT_ICONS = {
    fische: h('g', null,
      h('path', { d: 'M70 50 C 60 35, 30 35, 20 50 C 30 65, 60 65, 70 50 Z', fill: 'none', strokeWidth: '2' }),
      h('path', { d: 'M70 50 L 85 38 L 85 62 Z', fill: 'none', strokeWidth: '2' }),
      h('circle', { cx: '32', cy: '48', r: '2.4', fill: 'currentColor' })
    ),
    insekten: h('g', null,
      h('ellipse', { cx: '50', cy: '50', rx: '3.5', ry: '22', fill: 'currentColor', stroke: 'none' }),
      h('path', { d: 'M50 38 C 36 22 16 24 18 42 C 24 50 38 48 50 50 Z', fill: 'none', strokeWidth: '1.6' }),
      h('path', { d: 'M50 38 C 64 22 84 24 82 42 C 76 50 62 48 50 50 Z', fill: 'none', strokeWidth: '1.6' }),
      h('path', { d: 'M50 50 C 38 56 22 60 22 72 C 30 76 44 70 50 64 Z', fill: 'none', strokeWidth: '1.4' }),
      h('path', { d: 'M50 50 C 62 56 78 60 78 72 C 70 76 56 70 50 64 Z', fill: 'none', strokeWidth: '1.4' }),
      h('path', { d: 'M48 30 L 42 22 M52 30 L 58 22', strokeWidth: '1.4' })
    ),
    pflanzen: h('g', null,
      h('path', { d: 'M50 86 L 50 30', strokeWidth: '2' }),
      h('path', { d: 'M50 50 C 30 46, 18 30, 22 18 C 36 22, 50 36, 50 50 Z', fill: 'none', strokeWidth: '1.8' }),
      h('path', { d: 'M50 62 C 70 58, 82 42, 78 30 C 64 34, 50 48, 50 62 Z', fill: 'none', strokeWidth: '1.8' }),
      h('path', { d: 'M50 76 C 42 72, 38 64, 42 58 C 48 60, 52 68, 50 76 Z', fill: 'none', strokeWidth: '1.6' })
    ),
    mineralien: h('g', null,
      h('path', { d: 'M50 14 L 78 38 L 64 82 L 36 82 L 22 38 Z', fill: 'none', strokeWidth: '2' }),
      h('path', { d: 'M50 14 L 50 82 M22 38 L 78 38 M36 82 L 50 38 L 64 82', strokeWidth: '1.2', opacity: '0.6' })
    ),
    kreaturen: h('g', null,
      h('path', { d: 'M28 32 L 22 18 L 38 26 L 50 14 L 62 26 L 78 18 L 72 32 L 80 50 L 70 70 L 50 84 L 30 70 L 20 50 Z', fill: 'none', strokeWidth: '1.8' }),
      h('circle', { cx: '40', cy: '44', r: '3', fill: 'currentColor' }),
      h('circle', { cx: '60', cy: '44', r: '3', fill: 'currentColor' }),
      h('path', { d: 'M38 62 Q 50 70 62 62', strokeWidth: '1.6', fill: 'none' })
    ),
    kreaturenteile: h('g', { transform: 'rotate(-22 50 50) translate(-10.5 25) scale(0.18)', strokeLinejoin: 'round', strokeLinecap: 'round' },
      h('path', { d: 'M 148 110 L 532 110 C 532 88, 550 68, 572 68 C 594 68, 610 84, 610 106 C 610 120, 604 132, 594 140 C 604 148, 610 160, 610 174 C 610 196, 594 212, 572 212 C 550 212, 532 192, 532 170 L 148 170 C 148 192, 130 212, 108 212 C 86 212, 70 196, 70 174 C 70 160, 76 148, 86 140 C 76 132, 70 120, 70 106 C 70 84, 86 68, 108 68 C 130 68, 148 88, 148 110 Z', fill: 'none', strokeWidth: '11' })
    ),
    wal: h('g', null,
      h('path', { d: 'M14 52 C 20 36 40 26 60 30 C 72 32 82 40 86 50 L 78 54 L 72 48 L 64 54 L 56 46 L 48 56 L 38 48 Z', fill: 'none', strokeWidth: '2' }),
      h('circle', { cx: '68', cy: '42', r: '1.8', fill: 'currentColor' }),
      h('path', { d: 'M28 40 L 34 50 M48 28 L 52 42', strokeWidth: '1.2', opacity: '0.55' })
    ),
    lebensspeicher: h('g', null,
      h('circle', { cx: '50', cy: '50', r: '26', fill: 'none', strokeWidth: '2' }),
      h('path', { d: 'M50 24 L 50 76 M24 50 L 76 50 M32 32 L 68 68 M68 32 L 32 68', strokeWidth: '1.1', opacity: '0.55' }),
      h('circle', { cx: '50', cy: '50', r: '6.5', fill: 'none', strokeWidth: '1.6' }),
      h('circle', { cx: '50', cy: '50', r: '1.6', fill: 'currentColor' })
    ),
  };

  // ── KollektikonBar ───────────────────────────────────────────
  window.KollektikonBar = function KollektikonBar({ d, i }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
      const el = ref.current; if (!el) return;
      const io = new IntersectionObserver(
        es => es.forEach(e => { if (e.isIntersecting) { setVisible(true); io.unobserve(el); } }),
        { threshold: 0.25 }
      );
      io.observe(el);
      return () => io.disconnect();
    }, []);

    const pctFound = d.total ? d.found / d.total : 0;
    const pctKomp  = d.total ? (d.komplett || 0) / d.total : 0;
    const c  = `oklch(0.72 0.16 ${d.hue})`;
    const cA = a => `oklch(0.72 0.16 ${d.hue} / ${a})`;

    return h('div', { ref, style: {
      background: 'rgba(10,8,28,0.7)', border: `1px solid ${cA(0.18)}`,
      padding: '14px 16px 12px', borderRadius: 3, position: 'relative', overflow: 'hidden',
    }},
      h('div', { style: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 } },
        h('svg', { viewBox: '0 0 100 100', width: '22', height: '22', fill: 'none', stroke: c, style: { color: c, opacity: 0.9, flexShrink: 0 } },
          d.icon
        ),
        h('span', { style: {
          fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: '0.2em', fontWeight: 400,
          color: 'rgba(220,210,250,0.85)', textTransform: 'uppercase',
          minWidth: 0, flex: 1, overflowWrap: 'anywhere', lineHeight: 1.2,
        }}, d.label)
      ),
      h('div', { style: { position: 'relative', height: 4, marginBottom: 6 } },
        pctKomp > 0 && h('div', { style: {
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: visible ? `${pctKomp * 100}%` : '0%',
          boxShadow: `0 0 7px 1px ${cA(0.42)}, 0 0 14px 3px ${cA(0.18)}, 0 0 22px 6px ${cA(0.08)}`,
          borderRadius: 2, pointerEvents: 'none',
          transition: `width 1.2s cubic-bezier(.2,.85,.2,1) ${0.3 + i * 0.08}s`,
        }}),
        h('div', { style: {
          position: 'absolute', inset: 0, background: 'rgba(124,77,255,0.08)',
          border: `1px solid ${cA(0.13)}`, borderRadius: 2, overflow: 'hidden',
        }},
          h('div', { style: {
            position: 'absolute', left: 0, top: 0, bottom: 0,
            width: visible ? `${pctFound * 100}%` : '0%',
            background: 'linear-gradient(90deg, rgba(220,215,250,0.16), rgba(240,238,255,0.26))',
            transition: `width 1.0s cubic-bezier(.2,.85,.2,1) ${i * 0.08}s`,
          }}),
          h('div', { style: {
            position: 'absolute', left: -1, top: -1, bottom: -1,
            width: visible ? `${pctKomp * 100}%` : '0%',
            background: `linear-gradient(90deg, ${c}, ${cA(0.85)})`,
            boxShadow: 'inset 0 0 4px rgba(255,255,255,0.5)',
            borderRadius: 2,
            transition: `width 1.2s cubic-bezier(.2,.85,.2,1) ${0.3 + i * 0.08}s`,
          }})
        )
      ),
      h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 6 } },
        h('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 9, color: 'rgba(200,190,240,0.65)', letterSpacing: '0.1em', whiteSpace: 'nowrap' } },
          h('span', { style: { color: '#f0eeff' } }, d.found),
          h('span', { style: { opacity: 0.5 } }, ` / ${d.total || '—'}`),
          d.komplett > 0 && h('span', { style: { color: c, marginLeft: 4 } },
            `· ${d.komplett} `,
            h('span', { style: { fontSize: 7, opacity: 0.75, letterSpacing: '0.16em' } }, 'KOMP')
          )
        ),
        h('span', { style: { fontFamily: 'var(--font-mono)', fontSize: 8, color: c, letterSpacing: '0.18em' } },
          d.total ? `${Math.round(pctFound * 100)} %` : '—'
        )
      )
    );
  };
})();
