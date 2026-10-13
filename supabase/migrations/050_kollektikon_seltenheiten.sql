-- Kollektikon: fünf Seltenheitsstufen wie auf der Ressourcen-Seite.
--   alt 'selten'      -> 'ungewoehnlich'
--   alt 'einzigartig' -> 'legendaer'
--   neu 'selten'      -> zwischen 'ungewoehnlich' und 'sehrselten'
-- Reihenfolge: gewoehnlich, ungewoehnlich, selten, sehrselten, legendaer.
-- 'sehrselten' behält seine Werte.

UPDATE public.kollektikon_thresholds SET rarity = 'ungewoehnlich' WHERE rarity = 'selten';
UPDATE public.kollektikon_thresholds SET rarity = 'legendaer'     WHERE rarity = 'einzigartig';

-- Neue Stufe 'selten': pro Stufe das geometrische Mittel aus 'ungewoehnlich' und 'sehrselten'
-- (ein Startwert, im Kollektikon-Verwaltungs-Tab anpassbar).
INSERT INTO public.kollektikon_thresholds (cat, rarity, stufe_2, stufe_3, stufe_4, stufe_5, stufe_6, stufe_7, stufe_8)
SELECT u.cat, 'selten',
       GREATEST(1, ROUND(SQRT(u.stufe_2::numeric * s.stufe_2)))::int,
       GREATEST(1, ROUND(SQRT(u.stufe_3::numeric * s.stufe_3)))::int,
       GREATEST(1, ROUND(SQRT(u.stufe_4::numeric * s.stufe_4)))::int,
       GREATEST(1, ROUND(SQRT(u.stufe_5::numeric * s.stufe_5)))::int,
       GREATEST(1, ROUND(SQRT(u.stufe_6::numeric * s.stufe_6)))::int,
       GREATEST(1, ROUND(SQRT(u.stufe_7::numeric * s.stufe_7)))::int,
       GREATEST(1, ROUND(SQRT(u.stufe_8::numeric * s.stufe_8)))::int
FROM public.kollektikon_thresholds u
JOIN public.kollektikon_thresholds s ON s.cat = u.cat AND s.rarity = 'sehrselten'
WHERE u.rarity = 'ungewoehnlich'
ON CONFLICT (cat, rarity) DO NOTHING;

COMMENT ON COLUMN public.kollektikon_thresholds.rarity IS
  'gewoehnlich | ungewoehnlich | selten | sehrselten | legendaer';
