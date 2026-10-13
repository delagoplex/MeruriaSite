-- Karte: Ziele, Pools und Unterkarten verborgener Hexfelder/Gebiete sind für Spieler nicht lesbar.
-- Bisher genügte "authenticated" (Pools, Karten) bzw. freigeschaltet (Ziele), unabhängig vom Hexfeld.

CREATE OR REPLACE FUNCTION public.karte_hex_known(p_hex UUID)
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public, pg_temp AS $$
  SELECT EXISTS (SELECT 1 FROM public.karte_hexes h
                  WHERE h.id = p_hex AND (h.visible = true OR h.reveal->>'bekannt' = 'true'))
$$;

CREATE OR REPLACE FUNCTION public.karte_area_visible(p_area UUID)
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public, pg_temp AS $$
  SELECT EXISTS (SELECT 1 FROM public.karte_areas a WHERE a.id = p_area AND a.visible = true)
$$;

REVOKE ALL ON FUNCTION public.karte_hex_known(UUID), public.karte_area_visible(UUID) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.karte_hex_known(UUID), public.karte_area_visible(UUID) TO authenticated;

DROP POLICY IF EXISTS "auth read" ON public.karte_objectives;
CREATE POLICY "auth read" ON public.karte_objectives FOR SELECT USING (
  public.is_dm() OR (
    freigeschaltet = true AND (
      (hex_id  IS NOT NULL AND public.karte_hex_known(hex_id)) OR
      (area_id IS NOT NULL AND public.karte_area_visible(area_id))
    )
  )
);

DROP POLICY IF EXISTS "auth read" ON public.karte_pools;
CREATE POLICY "auth read" ON public.karte_pools FOR SELECT USING (
  public.is_dm() OR
  (hex_id  IS NOT NULL AND public.karte_hex_known(hex_id)) OR
  (area_id IS NOT NULL AND public.karte_area_visible(area_id))
);

DROP POLICY IF EXISTS "auth read" ON public.karte_maps;
CREATE POLICY "auth read" ON public.karte_maps FOR SELECT USING (
  public.is_dm() OR (
    auth.role() = 'authenticated' AND (
      (parent_hex_id IS NULL AND parent_area_id IS NULL) OR
      (parent_hex_id  IS NOT NULL AND public.karte_hex_known(parent_hex_id)) OR
      (parent_area_id IS NOT NULL AND public.karte_area_visible(parent_area_id))
    )
  )
);

NOTIFY pgrst, 'reload schema';
