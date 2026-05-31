-- RPC: setzt nur reveal_mode ohne menge anzufassen
CREATE OR REPLACE FUNCTION public.set_resource_visible(
  p_cat         TEXT,
  p_resource_id TEXT,
  p_visible     BOOLEAN
) RETURNS void LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  IF p_visible THEN
    INSERT INTO public.kollektikon_counts (cat, resource_id, menge, reveal_mode)
    VALUES (p_cat, p_resource_id, 0, 'beides')
    ON CONFLICT (cat, resource_id) DO UPDATE
      SET reveal_mode = 'beides';
  ELSE
    UPDATE public.kollektikon_counts
      SET reveal_mode = NULL
      WHERE cat = p_cat AND resource_id = p_resource_id;
    -- Zeile löschen wenn sie keine Daten mehr enthält
    DELETE FROM public.kollektikon_counts
      WHERE cat = p_cat AND resource_id = p_resource_id
        AND menge = 0 AND reveal_mode IS NULL;
  END IF;
END;
$$;

GRANT EXECUTE ON FUNCTION public.set_resource_visible TO authenticated;

-- Bestehende ressourcen_sichtbar-Einträge als reveal_mode = 'beides' übernehmen
-- Vorhandene kollektikon_counts-Zeilen mit menge > 0 bleiben unberührt (reveal_mode bleibt)
INSERT INTO public.kollektikon_counts (cat, resource_id, menge, reveal_mode)
SELECT cat, resource_id::text, 0, 'beides'
FROM public.ressourcen_sichtbar
ON CONFLICT (cat, resource_id) DO UPDATE
  SET reveal_mode = 'beides'
  WHERE kollektikon_counts.reveal_mode IS NULL;
