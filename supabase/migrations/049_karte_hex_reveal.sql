-- ── Karte: Hex-Felder schrittweise aufdecken ──────────────────────────────────
-- Zustände eines Hex-Felds für Spieler:
--   verborgen  : visible = false, reveal.bekannt != true  → Spieler sehen nichts (wie bisher)
--   gehört     : visible = false, reveal.bekannt = true   → Feld erscheint ohne Name/Infos/Bild
--   freigegeben: einzelne Angaben über reveal.<schluessel> = true (siehe Ansicht unten)
--   sichtbar   : visible = true                           → alles offen (wie bisher)
--
-- Spieler lesen die Felder über die Ansicht karte_hexes_player, die nicht freigegebene
-- Spalten maskiert. Die Basistabelle bleibt für Spieler auf visible = true beschränkt.
-- karte_hex_seen merkt sich pro Spieler, welche freigegebenen Felder er bereits aufgedeckt
-- hat (Glitch-Effekt beim ersten Aufdecken).
-- ─────────────────────────────────────────────────────────────────────────────

ALTER TABLE public.karte_hexes
  ADD COLUMN IF NOT EXISTS reveal JSONB NOT NULL DEFAULT '{}'::jsonb;

-- ── Pro Spieler: bereits aufgedeckte Felder ──────────────────────────────────
CREATE TABLE IF NOT EXISTS public.karte_hex_seen (
  user_id UUID   NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  hex_id  UUID   NOT NULL REFERENCES public.karte_hexes(id) ON DELETE CASCADE,
  keys    TEXT[] NOT NULL DEFAULT '{}',
  PRIMARY KEY (user_id, hex_id)
);

ALTER TABLE public.karte_hex_seen ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own select" ON public.karte_hex_seen FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE POLICY "own insert" ON public.karte_hex_seen FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());
CREATE POLICY "own update" ON public.karte_hex_seen FOR UPDATE TO authenticated USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());
GRANT SELECT, INSERT, UPDATE ON public.karte_hex_seen TO authenticated;

-- ── Spieleransicht mit Maskierung ────────────────────────────────────────────
-- Jede Textangabe hat einen eigenen Schlüssel in reveal: name, terrain, beschreibung,
-- features, datensonde, bevoelkerung, bild. "info" gibt alle Textangaben auf einmal frei.
-- Tags einzeln über tag_<index> ("tags" = alle). Die Ansicht liefert dazu tag_idx mit der
-- Position der durchgelassenen Tags. Kolonien, Erkundung und Ressourcen sind immer offen.
CREATE OR REPLACE VIEW public.karte_hexes_player AS
SELECT
  h.id, h.map_id, h.q, h.r, h.visible, h.created_at, h.updated_at,
  CASE WHEN h.visible
       THEN '{"bekannt":true,"name":true,"info":true,"bild":true}'::jsonb
       ELSE h.reveal END AS reveal,
  CASE WHEN h.visible OR h.reveal->>'name' = 'true' THEN h.name ELSE '' END AS name,
  CASE WHEN h.visible OR h.reveal->>'terrain' = 'true' OR h.reveal->>'info' = 'true' THEN h.terrain ELSE '' END AS terrain,
  CASE WHEN h.visible OR h.reveal->>'features' = 'true' OR h.reveal->>'info' = 'true' THEN h.features ELSE '' END AS features,
  CASE WHEN h.visible OR h.reveal->>'beschreibung' = 'true' OR h.reveal->>'info' = 'true' THEN h.beschreibung ELSE '' END AS beschreibung,
  CASE WHEN h.visible OR h.reveal->>'tags' = 'true' OR h.reveal->>'info' = 'true' THEN h.tags
       ELSE COALESCE((SELECT array_agg(u.t ORDER BY u.o) FROM unnest(h.tags) WITH ORDINALITY AS u(t, o)
                      WHERE h.reveal->>('tag_' || (u.o - 1)) = 'true'), '{}'::text[]) END AS tags,
  CASE WHEN h.visible OR h.reveal->>'tags' = 'true' OR h.reveal->>'info' = 'true'
       THEN COALESCE((SELECT array_agg((o - 1)::int ORDER BY o) FROM generate_series(1, COALESCE(array_length(h.tags, 1), 0)) AS o), '{}'::int[])
       ELSE COALESCE((SELECT array_agg((u.o - 1)::int ORDER BY u.o) FROM unnest(h.tags) WITH ORDINALITY AS u(t, o)
                      WHERE h.reveal->>('tag_' || (u.o - 1)) = 'true'), '{}'::int[]) END AS tag_idx,
  CASE WHEN h.visible OR h.reveal->>'datensonde' = 'true' OR h.reveal->>'info' = 'true' THEN h.datensonde ELSE false END AS datensonde,
  h.kolonie, h.kolonien, h.ressourcen, h.erkundung,
  CASE WHEN h.visible OR h.reveal->>'bevoelkerung' = 'true' OR h.reveal->>'info' = 'true' THEN h.bevoelkerung END AS bevoelkerung,
  h.has_submap, h.submap_id,
  CASE WHEN h.visible OR h.reveal->>'bild' = 'true' THEN h.bild_url ELSE '' END AS bild_url,
  CASE WHEN h.visible OR h.reveal->>'bild' = 'true' THEN h.bild_pos END AS bild_pos,
  CASE WHEN h.visible OR h.reveal->>'bild' = 'true' THEN h.banner_url ELSE '' END AS banner_url
FROM public.karte_hexes h
WHERE h.visible = true OR h.reveal->>'bekannt' = 'true';

GRANT SELECT ON public.karte_hexes_player TO authenticated;

NOTIFY pgrst, 'reload schema';
