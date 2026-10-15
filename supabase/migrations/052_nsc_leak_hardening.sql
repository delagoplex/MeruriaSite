-- NSC-Härtung (Code-Review):
--  1. get_nsc_player_data gibt Inhalte inaktiver Abschnitte (sections) nicht mehr aus.
--  2. Maskierung nutzt denselben "kompakten" Index wie nsc_unlockable_fact_keys (leere Einträge werden übersprungen).
--  3. Geheimnisse werden nur freischaltbar/sichtbar, wenn die Spielleitung sie per vis freigegeben hat.
--  4. Alter-Hilfsfelder (geburtstag_jahr, alter_ref_abs) und rang ohne Division werden nicht mehr mitgeliefert.
--  5. guess_nsc_fact: Versuchslimit pro (Konto, NSC) über alle Charaktere, Freischaltung atomar angehängt.

-- Roher Array-Index des idx-ten nicht leeren Eintrags (Feld p_field), NULL wenn es ihn nicht gibt
CREATE OR REPLACE FUNCTION public.nsc_raw_index(p_arr JSONB, p_field TEXT, p_idx INT)
RETURNS INT LANGUAGE sql IMMUTABLE SET search_path = public, pg_temp AS $$
  SELECT (e.ord - 1)::INT
    FROM jsonb_array_elements(COALESCE(p_arr, '[]'::jsonb)) WITH ORDINALITY AS e(value, ord)
   WHERE btrim(COALESCE(e.value->>p_field, '')) <> ''
   ORDER BY e.ord
   OFFSET p_idx LIMIT 1
$$;

CREATE OR REPLACE FUNCTION public.nsc_mask_fact(p_data JSONB, p_key TEXT)
RETURNS JSONB LANGUAGE plpgsql IMMUTABLE SET search_path = public, pg_temp AS $$
DECLARE
  m TEXT[];
  cat TEXT;
  idx INT;
  raw INT;
  grp TEXT;
BEGIN
  CASE p_key
    WHEN 'rasse' THEN RETURN jsonb_set(jsonb_set(p_data,'{rasse}','null'::jsonb),'{unterrasse}','null'::jsonb);
    WHEN 'geschlecht' THEN RETURN jsonb_set(p_data,'{geschlecht}','null'::jsonb);
    WHEN 'groesse' THEN RETURN jsonb_set(p_data,'{groesse}','null'::jsonb);
    WHEN 'alter' THEN RETURN jsonb_set(jsonb_set(jsonb_set(jsonb_set(p_data,'{alter_jahre}','null'::jsonb),
      '{geburtstag_jahr}','null'::jsonb),'{alter_ref_abs}','null'::jsonb),'{lebensphase}','null'::jsonb);
    WHEN 'geburtstag' THEN RETURN jsonb_set(p_data,'{geburtstag_doy}','null'::jsonb);
    WHEN 'gesinnung' THEN RETURN jsonb_set(p_data,'{gesinnung}','null'::jsonb);
    WHEN 'klasse' THEN RETURN jsonb_set(p_data,'{klasse}','null'::jsonb);
    WHEN 'hintergrund' THEN RETURN jsonb_set(p_data,'{hintergrund}','null'::jsonb);
    WHEN 'beruf' THEN RETURN jsonb_set(p_data,'{beruf}','null'::jsonb);
    WHEN 'gottheit' THEN RETURN jsonb_set(p_data,'{gottheit}','null'::jsonb);
    WHEN 'division' THEN RETURN jsonb_set(jsonb_set(p_data,'{division}','null'::jsonb),'{rang}','null'::jsonb);
    WHEN 'organisation' THEN RETURN jsonb_set(p_data,'{organisation}','null'::jsonb);
    WHEN 'kapsel' THEN RETURN jsonb_set(p_data,'{kapsel}','null'::jsonb);
    WHEN 'wohnort' THEN RETURN jsonb_set(jsonb_set(p_data,'{wohnort}','null'::jsonb),'{wohnort_hex_id}','null'::jsonb);
    WHEN 'zuhause' THEN RETURN jsonb_set(p_data,'{hat_zuhause}','null'::jsonb);
    WHEN 'wohlbefinden' THEN RETURN jsonb_set(p_data,'{wohlbefinden}','null'::jsonb);
    WHEN 'bio' THEN RETURN jsonb_set(p_data,'{biografie}','null'::jsonb);
    WHEN 'aussehen' THEN RETURN jsonb_set(p_data,'{aussehen}','{}'::jsonb);
    WHEN 'unvergesslich' THEN RETURN jsonb_set(p_data,'{unvergesslich}','null'::jsonb);
    WHEN 'habe' THEN RETURN jsonb_set(p_data,'{habe}','null'::jsonb);
    ELSE NULL;
  END CASE;
  m := regexp_match(p_key, '^([a-z]+)-([0-9]+)$');
  IF m IS NULL THEN RETURN p_data; END IF;
  cat := m[1]; idx := m[2]::INT;
  CASE cat
    -- diese Listen zählen roh (leere Einträge belegen einen Index)
    WHEN 'vna' THEN RETURN jsonb_set(p_data, ARRAY['voller_name',idx::TEXT], '""'::jsonb);
    WHEN 'eig' THEN RETURN jsonb_set(p_data, ARRAY['eigenschaften',idx::TEXT], '""'::jsonb);
    WHEN 'tal' THEN RETURN jsonb_set(p_data, ARRAY['talente',idx::TEXT], '""'::jsonb);
    WHEN 'mak' THEN RETURN jsonb_set(p_data, ARRAY['makel',idx::TEXT], '""'::jsonb);
    WHEN 'gew' THEN RETURN jsonb_set(p_data, ARRAY['gewohnheiten',idx::TEXT], '""'::jsonb);
    WHEN 'mot' THEN RETURN jsonb_set(p_data, ARRAY['motivationen',idx::TEXT], '""'::jsonb);
    WHEN 'rou' THEN RETURN jsonb_set(p_data, ARRAY['routine',idx::TEXT], '{"zeit":"","ort":"","tat":""}'::jsonb);
    -- diese Listen zählen kompakt (nur Einträge mit Name/Text)
    WHEN 'aus' THEN
      raw := public.nsc_raw_index(p_data->'ausruestung','name',idx);
      IF raw IS NULL THEN RETURN p_data; END IF;
      RETURN jsonb_set(p_data, ARRAY['ausruestung',raw::TEXT], '{"name":"","beschreibung":""}'::jsonb);
    WHEN 'beg' THEN
      raw := public.nsc_raw_index(p_data->'begleiter','name',idx);
      IF raw IS NULL THEN RETURN p_data; END IF;
      RETURN jsonb_set(p_data, ARRAY['begleiter',raw::TEXT], '{"name":"","art":""}'::jsonb);
    WHEN 'geh' THEN
      raw := public.nsc_raw_index(p_data->'geheimnisse','text',idx);
      IF raw IS NULL THEN RETURN p_data; END IF;
      RETURN jsonb_set(p_data, ARRAY['geheimnisse',raw::TEXT,'text'], '""'::jsonb);
    WHEN 'fam' THEN grp := 'familie';
    WHEN 'fre' THEN grp := 'freunde';
    WHEN 'riv' THEN grp := 'rivalen';
    ELSE RETURN p_data;
  END CASE;
  raw := public.nsc_raw_index(p_data->'kontakte'->grp,'name',idx);
  IF raw IS NULL THEN RETURN p_data; END IF;
  RETURN jsonb_set(p_data, ARRAY['kontakte',grp,raw::TEXT], jsonb_build_object('name','','rolle','','verstorben',false));
END $$;

-- Freischaltbare Schlüssel inkl. Geheimnis-Freigabe: geh-N nur, wenn der Eintrag vis = true hat
CREATE OR REPLACE FUNCTION public.nsc_effective_fact_keys(p_nsc public.nscs)
RETURNS TEXT[] LANGUAGE sql STABLE SET search_path = public, pg_temp AS $$
  SELECT COALESCE(array_agg(k ORDER BY ord), '{}')
    FROM unnest(public.nsc_unlockable_fact_keys(p_nsc)) WITH ORDINALITY AS t(k, ord)
   WHERE k !~ '^geh-[0-9]+$'
      OR COALESCE(p_nsc.geheimnisse->public.nsc_raw_index(p_nsc.geheimnisse,'text',substring(k from 5)::INT)->>'vis','') = 'true'
$$;

CREATE OR REPLACE FUNCTION public.get_nsc_player_data(p_character_id UUID DEFAULT NULL)
RETURNS SETOF JSONB LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pg_temp AS $$
DECLARE
  n public.nscs%ROWTYPE;
  row_data JSONB;
  keys TEXT[];
  unlocked TEXT[];
  k TEXT;
  v_uid UUID := auth.uid();
  hex_info JSONB;
  secs TEXT[];
  geh JSONB;
  i INT;
BEGIN
  IF v_uid IS NULL THEN RAISE EXCEPTION 'Anmeldung erforderlich' USING ERRCODE = '42501'; END IF;
  IF p_character_id IS NOT NULL AND NOT EXISTS (
    SELECT 1 FROM public.characters c WHERE c.id = p_character_id AND c.owner_id = v_uid AND c.type = 'spieler'
  ) THEN RAISE EXCEPTION 'Charakter gehört nicht zu diesem Konto' USING ERRCODE = '42501'; END IF;

  FOR n IN SELECT * FROM public.nscs WHERE visible = true ORDER BY name LOOP
    keys := public.nsc_effective_fact_keys(n);
    unlocked := '{}';
    IF p_character_id IS NOT NULL THEN
      SELECT COALESCE(u.unlocked_keys,'{}') INTO unlocked FROM public.nsc_unlocks u
       WHERE u.character_id = p_character_id AND u.nsc_id = n.id;
      unlocked := COALESCE(unlocked,'{}');
    END IF;
    row_data := to_jsonb(n);
    FOREACH k IN ARRAY keys LOOP
      IF NOT k = ANY(unlocked) THEN row_data := public.nsc_mask_fact(row_data,k); END IF;
    END LOOP;
    -- Begleitfelder nie ohne ihren freigeschalteten Hauptwert, auch wenn der Hauptwert selbst leer ist
    -- (sonst gäbe z. B. ein NSC mit Geburtsjahr, aber ohne alter_jahre das Jahr preis)
    IF NOT 'rasse' = ANY(unlocked) THEN row_data := jsonb_set(row_data,'{unterrasse}','null'::jsonb); END IF;
    IF NOT 'alter' = ANY(unlocked) THEN
      row_data := jsonb_set(jsonb_set(jsonb_set(row_data,'{geburtstag_jahr}','null'::jsonb),'{alter_ref_abs}','null'::jsonb),'{lebensphase}','null'::jsonb);
    END IF;

    -- Geheimnisse ohne Freigabe der Spielleitung werden nie ausgeliefert
    geh := COALESCE(row_data->'geheimnisse','[]'::jsonb);
    IF jsonb_typeof(geh) = 'array' THEN
      FOR i IN 0 .. jsonb_array_length(geh) - 1 LOOP
        IF COALESCE(geh->i->>'vis','') <> 'true' THEN
          row_data := jsonb_set(row_data, ARRAY['geheimnisse', i::TEXT], '{"text":"","vis":false}'::jsonb);
        END IF;
      END LOOP;
    END IF;

    -- Inhalte inaktiver Abschnitte gehören nicht in die Antwort
    secs := COALESCE(n.sections,'{}');
    IF NOT 'bio' = ANY(secs) THEN row_data := jsonb_set(row_data,'{biografie}','null'::jsonb); END IF;
    IF NOT 'aussehen' = ANY(secs) THEN row_data := jsonb_set(row_data,'{aussehen}','{}'::jsonb); END IF;
    IF NOT 'pers' = ANY(secs) THEN
      row_data := jsonb_set(jsonb_set(jsonb_set(jsonb_set(row_data,'{unvergesslich}','null'::jsonb),
        '{eigenschaften}','[]'::jsonb),'{talente}','[]'::jsonb),'{makel}','[]'::jsonb);
    END IF;
    IF NOT 'routine' = ANY(secs) THEN row_data := jsonb_set(row_data,'{routine}','[]'::jsonb); END IF;
    IF NOT 'gewohnheiten' = ANY(secs) THEN row_data := jsonb_set(row_data,'{gewohnheiten}','[]'::jsonb); END IF;
    IF NOT 'ausr' = ANY(secs) THEN
      row_data := jsonb_set(jsonb_set(row_data,'{ausruestung}','[]'::jsonb),'{habe}','null'::jsonb);
    END IF;
    IF NOT 'begleiter' = ANY(secs) THEN row_data := jsonb_set(row_data,'{begleiter}','[]'::jsonb); END IF;
    IF NOT 'motive' = ANY(secs) THEN row_data := jsonb_set(row_data,'{motivationen}','[]'::jsonb); END IF;
    IF NOT 'kontakte' = ANY(secs) THEN
      row_data := jsonb_set(row_data,'{kontakte}','{"familie":[],"freunde":[],"rivalen":[]}'::jsonb);
    END IF;
    IF NOT 'geheim' = ANY(secs) THEN row_data := jsonb_set(row_data,'{geheimnisse}','[]'::jsonb); END IF;

    -- Rang gehört zur Division; ohne Division gibt es nichts zu zeigen
    IF n.division IS NULL OR n.division = 'Keine' THEN row_data := jsonb_set(row_data,'{rang}','null'::jsonb); END IF;

    -- Name und Bild gibt allein die Spielleitung frei (field_visibility name / bild).
    IF COALESCE(n.field_visibility->>'name','') <> 'true' THEN
      row_data := jsonb_set(row_data,'{name}',to_jsonb('Unbekannt'::TEXT));
      row_data := jsonb_set(row_data,'{status}','[]'::jsonb);
      row_data := jsonb_set(row_data,'{titel}','null'::jsonb);
      row_data := jsonb_set(row_data,'{art}','null'::jsonb);
    END IF;
    IF COALESCE(n.field_visibility->>'bild','') <> 'true' THEN
      row_data := jsonb_set(row_data,'{bild}','null'::jsonb);
    END IF;
    row_data := row_data - 'slug' - 'steckbrief' - 'wohnort_hex_id';
    hex_info := NULL;
    IF n.wohnort_hex_id IS NOT NULL AND 'wohnort' = ANY(unlocked) THEN
      SELECT jsonb_build_object('id', h.id, 'name', h.name) INTO hex_info
        FROM public.karte_hexes h
       WHERE h.id = n.wohnort_hex_id AND btrim(h.name) <> ''
         AND (h.visible OR h.reveal->>'name' = 'true');
    END IF;
    IF hex_info IS NOT NULL THEN row_data := row_data || jsonb_build_object('wohnort_hex', hex_info); END IF;
    row_data := jsonb_set(row_data,'{haltung_overrides}',
      CASE WHEN p_character_id IS NULL THEN '{}'::jsonb
           ELSE jsonb_strip_nulls(jsonb_build_object(p_character_id::TEXT,n.haltung_overrides->(p_character_id::TEXT))) END);
    row_data := row_data || jsonb_build_object('challengeable_keys',to_jsonb(keys));
    RETURN NEXT row_data;
  END LOOP;
END $$;

CREATE OR REPLACE FUNCTION public.guess_nsc_fact(
  p_nsc_id UUID, p_character_id UUID, p_fact_key TEXT, p_guess TEXT
) RETURNS JSONB LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pg_temp AS $$
DECLARE
  n public.nscs%ROWTYPE;
  actual TEXT;
  normalized_guess TEXT;
  current_keys TEXT[];
  attempts INT;
  total_attempts INT;
  matches BOOLEAN;
  hexname TEXT;
BEGIN
  IF auth.uid() IS NULL OR p_character_id IS NULL OR length(btrim(COALESCE(p_guess,''))) = 0 THEN
    RETURN jsonb_build_object('matched',false);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM public.characters c WHERE c.id=p_character_id AND c.owner_id=auth.uid() AND c.type='spieler') THEN
    RAISE EXCEPTION 'Charakter gehört nicht zu diesem Konto' USING ERRCODE = '42501';
  END IF;
  INSERT INTO public.nsc_guess_rate_limits(user_id,character_id,nsc_id,window_started_at,attempt_count)
  VALUES (auth.uid(),p_character_id,p_nsc_id,NOW(),1)
  ON CONFLICT (user_id,character_id,nsc_id) DO UPDATE SET
    attempt_count = CASE
      WHEN public.nsc_guess_rate_limits.window_started_at < NOW() - INTERVAL '1 minute' THEN 1
      ELSE public.nsc_guess_rate_limits.attempt_count + 1
    END,
    window_started_at = CASE
      WHEN public.nsc_guess_rate_limits.window_started_at < NOW() - INTERVAL '1 minute' THEN NOW()
      ELSE public.nsc_guess_rate_limits.window_started_at
    END
  RETURNING attempt_count INTO attempts;
  -- Limit gilt je Konto und NSC über alle Charaktere, damit weitere Charaktere kein neues Kontingent bringen
  SELECT COALESCE(SUM(r.attempt_count),0) INTO total_attempts FROM public.nsc_guess_rate_limits r
   WHERE r.user_id = auth.uid() AND r.nsc_id = p_nsc_id AND r.window_started_at >= NOW() - INTERVAL '1 minute';
  IF attempts > 20 OR total_attempts > 20 THEN RETURN jsonb_build_object('matched',false); END IF;
  SELECT * INTO n FROM public.nscs WHERE id=p_nsc_id AND visible=true;
  IF NOT FOUND THEN RETURN jsonb_build_object('matched',false); END IF;
  IF NOT p_fact_key = ANY(public.nsc_effective_fact_keys(n)) THEN RETURN jsonb_build_object('matched',false); END IF;
  SELECT COALESCE(u.unlocked_keys,'{}') INTO current_keys FROM public.nsc_unlocks u
    WHERE u.character_id=p_character_id AND u.nsc_id=p_nsc_id;
  IF p_fact_key = ANY(COALESCE(current_keys,'{}')) THEN RETURN jsonb_build_object('matched',false); END IF;
  actual := public.nsc_fact_value(n,p_fact_key);
  normalized_guess := lower(btrim(regexp_replace(p_guess,'[[:space:]]+',' ','g')));
  matches := normalized_guess = lower(btrim(regexp_replace(COALESCE(actual,''),'[[:space:]]+',' ','g')));
  IF p_fact_key = 'division' THEN
    matches := COALESCE(matches,false) OR normalized_guess = lower(btrim(regexp_replace(COALESCE(n.rang,''),'[[:space:]]+',' ','g')));
  END IF;
  IF p_fact_key = 'wohnort' AND n.wohnort_hex_id IS NOT NULL THEN
    SELECT lower(btrim(regexp_replace(COALESCE(h.name,''),'[[:space:]]+',' ','g'))) INTO hexname
      FROM public.karte_hexes h WHERE h.id = n.wohnort_hex_id;
    matches := COALESCE(matches,false) OR (COALESCE(hexname,'') <> '' AND normalized_guess = hexname);
  END IF;
  IF p_fact_key = 'aussehen' THEN
    SELECT matches OR EXISTS (
      SELECT 1 FROM jsonb_each_text(COALESCE(n.aussehen, '{}'::jsonb)) AS x(key,value)
      WHERE normalized_guess = lower(btrim(regexp_replace(x.value,'[[:space:]]+',' ','g')))
    ) INTO matches;
  END IF;
  IF NOT COALESCE(matches,false) THEN
    RETURN jsonb_build_object('matched',false);
  END IF;
  -- atomar anhängen: parallele Raten oder DM-Änderungen überschreiben sich nicht
  INSERT INTO public.nsc_unlocks(character_id,nsc_id,unlocked_keys)
  VALUES (p_character_id,p_nsc_id,ARRAY[p_fact_key])
  ON CONFLICT (character_id,nsc_id) DO UPDATE SET unlocked_keys = (
    SELECT COALESCE(array_agg(DISTINCT x),'{}') FROM unnest(public.nsc_unlocks.unlocked_keys || p_fact_key) AS x
  );
  RETURN jsonb_build_object('matched',true,'value',actual);
END $$;

-- Hilfsfunktionen sind nur für die Definer-Funktionen gedacht
REVOKE ALL ON FUNCTION public.nsc_raw_index(JSONB,TEXT,INT) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.nsc_effective_fact_keys(public.nscs) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.nsc_mask_fact(JSONB,TEXT) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.nsc_fact_value(public.nscs,TEXT) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.nsc_unlockable_fact_keys(public.nscs) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.get_nsc_player_data(UUID) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.guess_nsc_fact(UUID,UUID,TEXT,TEXT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_nsc_player_data(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION public.guess_nsc_fact(UUID,UUID,TEXT,TEXT) TO authenticated;

NOTIFY pgrst, 'reload schema';
