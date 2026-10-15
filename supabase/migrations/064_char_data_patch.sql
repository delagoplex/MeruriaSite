-- 064: Steckbrief speichert nur die geänderten Felder (statt des ganzen char_data-Blocks).
--      Zwei offene Tabs (Spieler und Spielleitung) überschreiben sich so nicht mehr gegenseitig, und
--      Felder, die ein Tab gar nicht geändert hat (stats, attributeFrei, …), bleiben wie sie in der Datenbank sind.
--      SECURITY INVOKER: RLS und characters_guard (061) gelten unverändert.

CREATE OR REPLACE FUNCTION public.char_data_patch(p_id UUID, p_patch JSONB, p_entfernen TEXT[] DEFAULT '{}')
RETURNS VOID LANGUAGE plpgsql SECURITY INVOKER SET search_path = public, pg_temp AS $$
DECLARE n INTEGER;
BEGIN
  UPDATE public.characters c SET
    char_data = (COALESCE(c.char_data, '{}'::jsonb) - COALESCE(p_entfernen, '{}'::text[])) || COALESCE(p_patch, '{}'::jsonb),
    name      = CASE WHEN p_patch ? 'name' AND NULLIF(btrim(p_patch->>'name'), '') IS NOT NULL THEN p_patch->>'name' ELSE c.name END,
    race      = CASE WHEN p_patch ? 'race'     THEN NULLIF(p_patch->>'race', '')     ELSE c.race END,
    class     = CASE WHEN p_patch ? 'class'    THEN NULLIF(p_patch->>'class', '')    ELSE c.class END,
    division  = CASE WHEN p_patch ? 'division' THEN NULLIF(p_patch->>'division', '') ELSE c.division END
  WHERE c.id = p_id;
  GET DIAGNOSTICS n = ROW_COUNT;
  IF n = 0 THEN RAISE EXCEPTION 'Charakter nicht gefunden oder keine Berechtigung.'; END IF;
END $$;

REVOKE ALL ON FUNCTION public.char_data_patch(UUID, JSONB, TEXT[]) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.char_data_patch(UUID, JSONB, TEXT[]) TO authenticated;

NOTIFY pgrst, 'reload schema';
