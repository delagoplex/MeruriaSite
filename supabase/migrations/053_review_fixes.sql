-- Fixes aus dem Code-Review:
--  * Rezepte: Spieler dürfen nur offene, nicht vom DM erstellte Rezepte einreichen
--  * Missionen: Kategorien Sammeln und Eskorte werden vom Editor angeboten, der CHECK ließ sie nicht zu
--  * Kartenlager: der Editor schreibt folder und ein Date.now()-sort_order (passte nicht in INTEGER)
--  * Indizes auf häufig gefilterten Fremdschlüsseln, is_dm() als STABLE für InitPlan-Auswertung

DROP POLICY IF EXISTS "insert own" ON public.recipes;
CREATE POLICY "insert own" ON public.recipes
  FOR INSERT WITH CHECK (
    auth.uid() = submitted_by
    AND (public.is_dm() OR (status = 'pending' AND COALESCE(dm_erstellt, false) = false))
  );

ALTER TABLE public.missions DROP CONSTRAINT IF EXISTS missions_kategorie_check;
ALTER TABLE public.missions ADD CONSTRAINT missions_kategorie_check
  CHECK (kategorie IN ('Suche', 'Gespraech', 'Jagd', 'Sammeln', 'Eskorte'));

ALTER TABLE public.karte_stash
  ADD COLUMN IF NOT EXISTS folder TEXT,
  ALTER COLUMN sort_order TYPE BIGINT;

CREATE INDEX IF NOT EXISTS characters_owner_idx          ON public.characters (owner_id);
CREATE INDEX IF NOT EXISTS karte_areas_map_idx           ON public.karte_areas (map_id);
CREATE INDEX IF NOT EXISTS karte_hexes_submap_idx        ON public.karte_hexes (submap_id);
CREATE INDEX IF NOT EXISTS karte_maps_parent_hex_idx     ON public.karte_maps (parent_hex_id);
CREATE INDEX IF NOT EXISTS nsc_unlocks_nsc_idx           ON public.nsc_unlocks (nsc_id);
CREATE INDEX IF NOT EXISTS nscs_wohnort_hex_idx          ON public.nscs (wohnort_hex_id);

ALTER FUNCTION public.is_dm() STABLE;

NOTIFY pgrst, 'reload schema';
