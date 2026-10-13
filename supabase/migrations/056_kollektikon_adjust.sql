-- Kollektikon: Menge relativ ändern, damit zwei DM-Tabs oder ein zwischenzeitliches Freigeben
-- keinen Stand überschreiben (vorher schrieb der Client den berechneten Absolutwert).
CREATE OR REPLACE FUNCTION public.kollektikon_adjust(
  p_cat TEXT, p_resource_id TEXT, p_delta INT, p_reveal_mode TEXT
) RETURNS JSONB LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pg_temp AS $$
DECLARE
  r public.kollektikon_counts%ROWTYPE;
BEGIN
  IF NOT public.is_dm() THEN RAISE EXCEPTION 'Nur die Spielleitung' USING ERRCODE = '42501'; END IF;
  INSERT INTO public.kollektikon_counts AS c (cat, resource_id, menge, reveal_mode)
  VALUES (p_cat, p_resource_id, GREATEST(0, COALESCE(p_delta,0)), p_reveal_mode)
  ON CONFLICT (cat, resource_id) DO UPDATE
    SET menge = GREATEST(0, c.menge + COALESCE(p_delta,0)),
        reveal_mode = p_reveal_mode
  RETURNING * INTO r;
  RETURN jsonb_build_object('menge', r.menge, 'reveal_mode', r.reveal_mode);
END $$;
REVOKE ALL ON FUNCTION public.kollektikon_adjust(TEXT,TEXT,INT,TEXT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.kollektikon_adjust(TEXT,TEXT,INT,TEXT) TO authenticated;
NOTIFY pgrst, 'reload schema';
