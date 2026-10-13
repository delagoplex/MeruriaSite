-- NSC: Zuhause, Wohlbefinden und Wohnort-Hexfeld (Traumkapsel = bestehende Spalte kapsel).
-- Neue Spalten sind nullable (NULL = unbekannt). Spieler erfahren sie nur über die Freischalt-Funktionen:
-- get_nsc_player_data baut auf to_jsonb(n) auf, daher müssen neue Spalten dort maskiert oder entfernt werden.

ALTER TABLE public.nscs
  ADD COLUMN IF NOT EXISTS hat_zuhause BOOLEAN,
  ADD COLUMN IF NOT EXISTS wohlbefinden SMALLINT CHECK (wohlbefinden BETWEEN 0 AND 10),
  ADD COLUMN IF NOT EXISTS wohnort_hex_id UUID REFERENCES public.karte_hexes(id) ON DELETE SET NULL;

-- Bänder wie im Kolonisierungs-Rechner (dm/kolonisierung-und-bau)
CREATE OR REPLACE FUNCTION public.nsc_wohlbefinden_band(p_wb INT)
RETURNS TEXT LANGUAGE sql IMMUTABLE SET search_path = public, pg_temp AS $$
  SELECT CASE
    WHEN p_wb IS NULL THEN NULL
    WHEN p_wb >= 9 THEN 'Aufblühend'
    WHEN p_wb >= 7 THEN 'Zufrieden'
    WHEN p_wb >= 5 THEN 'Neutral'
    WHEN p_wb >= 3 THEN 'Unzufrieden'
    WHEN p_wb >= 1 THEN 'Elend'
    ELSE 'Verlässt die Siedlung'
  END
$$;

CREATE OR REPLACE FUNCTION public.nsc_unlockable_fact_keys(p_nsc public.nscs)
RETURNS TEXT[] LANGUAGE plpgsql IMMUTABLE SET search_path = public, pg_temp AS $$
DECLARE
  result TEXT[] := '{}';
  item JSONB;
  value TEXT;
  i INT;
  compact_i INT;
BEGIN
  IF p_nsc.rasse IS NOT NULL THEN result := array_append(result, 'rasse'::text); END IF;
  IF p_nsc.geschlecht IS NOT NULL THEN result := array_append(result, 'geschlecht'::text); END IF;
  IF p_nsc.groesse IS NOT NULL THEN result := array_append(result, 'groesse'::text); END IF;
  IF p_nsc.alter_jahre IS NOT NULL THEN result := array_append(result, 'alter'::text); END IF;
  IF p_nsc.geburtstag_doy IS NOT NULL THEN result := array_append(result, 'geburtstag'::text); END IF;
  IF p_nsc.gesinnung IS NOT NULL THEN result := array_append(result, 'gesinnung'::text); END IF;
  IF p_nsc.klasse IS NOT NULL THEN result := array_append(result, 'klasse'::text); END IF;
  IF p_nsc.hintergrund IS NOT NULL THEN result := array_append(result, 'hintergrund'::text); END IF;
  IF p_nsc.beruf IS NOT NULL THEN result := array_append(result, 'beruf'::text); END IF;
  IF p_nsc.gottheit IS NOT NULL THEN result := array_append(result, 'gottheit'::text); END IF;
  IF p_nsc.division IS NOT NULL AND p_nsc.division <> 'Keine' THEN result := array_append(result, 'division'::text); END IF;
  IF p_nsc.organisation IS NOT NULL THEN result := array_append(result, 'organisation'::text); END IF;
  IF p_nsc.kapsel IS NOT NULL THEN result := array_append(result, 'kapsel'::text); END IF;
  IF p_nsc.wohnort IS NOT NULL OR p_nsc.wohnort_hex_id IS NOT NULL THEN result := array_append(result, 'wohnort'::text); END IF;
  IF p_nsc.hat_zuhause IS NOT NULL THEN result := array_append(result, 'zuhause'::text); END IF;
  IF p_nsc.wohlbefinden IS NOT NULL THEN result := array_append(result, 'wohlbefinden'::text); END IF;

  compact_i := 0;
  FOREACH value IN ARRAY COALESCE(p_nsc.voller_name, '{}') LOOP
    IF btrim(value) <> '' THEN
      result := result || ('vna-' || compact_i);
    END IF;
    compact_i := compact_i + 1;
  END LOOP;
  IF 'bio' = ANY(p_nsc.sections) AND btrim(COALESCE(p_nsc.biografie, '')) <> '' THEN result := array_append(result, 'bio'::text); END IF;
    IF 'aussehen' = ANY(p_nsc.sections)
      AND EXISTS (SELECT 1 FROM jsonb_each_text(COALESCE(p_nsc.aussehen, '{}'::jsonb)) AS x(key,value) WHERE btrim(x.value) <> '')
      THEN result := array_append(result, 'aussehen'::text); END IF;

  IF 'pers' = ANY(p_nsc.sections) THEN
    IF btrim(COALESCE(p_nsc.unvergesslich, '')) <> '' THEN result := array_append(result, 'unvergesslich'::text); END IF;
    compact_i := 0;
    FOREACH value IN ARRAY COALESCE(p_nsc.eigenschaften, '{}') LOOP
      IF btrim(value) <> '' THEN result := result || ('eig-' || compact_i); END IF;
      compact_i := compact_i + 1;
    END LOOP;
    compact_i := 0;
    FOREACH value IN ARRAY COALESCE(p_nsc.talente, '{}') LOOP
      IF btrim(value) <> '' THEN result := result || ('tal-' || compact_i); END IF;
      compact_i := compact_i + 1;
    END LOOP;
    compact_i := 0;
    FOREACH value IN ARRAY COALESCE(p_nsc.makel, '{}') LOOP
      IF btrim(value) <> '' THEN result := result || ('mak-' || compact_i); END IF;
      compact_i := compact_i + 1;
    END LOOP;
  END IF;

  IF 'routine' = ANY(p_nsc.sections) THEN
    FOR i IN 0 .. jsonb_array_length(COALESCE(p_nsc.routine, '[]'::jsonb)) - 1 LOOP
      result := result || ('rou-' || i); 
    END LOOP;
  END IF;
  compact_i := 0;
  IF 'gewohnheiten' = ANY(p_nsc.sections) THEN
    FOREACH value IN ARRAY COALESCE(p_nsc.gewohnheiten, '{}') LOOP
      IF btrim(value) <> '' THEN result := result || ('gew-' || compact_i); END IF;
      compact_i := compact_i + 1;
    END LOOP;
  END IF;
  IF 'ausr' = ANY(p_nsc.sections) THEN
    compact_i := 0;
    FOR item IN SELECT e.value FROM jsonb_array_elements(COALESCE(p_nsc.ausruestung, '[]'::jsonb)) AS e(value) LOOP
      IF btrim(COALESCE(item->>'name','')) <> '' THEN
        result := result || ('aus-' || compact_i); 
        compact_i := compact_i + 1;
      END IF;
    END LOOP;
    IF p_nsc.habe > 0 THEN result := array_append(result, 'habe'::text); END IF;
  END IF;
  IF 'begleiter' = ANY(p_nsc.sections) THEN
    compact_i := 0;
    FOR item IN SELECT e.value FROM jsonb_array_elements(COALESCE(p_nsc.begleiter, '[]'::jsonb)) AS e(value) LOOP
      IF btrim(COALESCE(item->>'name','')) <> '' THEN
        result := result || ('beg-' || compact_i); 
        compact_i := compact_i + 1;
      END IF;
    END LOOP;
  END IF;
  compact_i := 0;
  IF 'motive' = ANY(p_nsc.sections) THEN
    FOREACH value IN ARRAY COALESCE(p_nsc.motivationen, '{}') LOOP
      IF btrim(value) <> '' THEN result := result || ('mot-' || compact_i); END IF;
      compact_i := compact_i + 1;
    END LOOP;
  END IF;
  IF 'kontakte' = ANY(p_nsc.sections) THEN
    FOREACH value IN ARRAY ARRAY['familie','freunde','rivalen'] LOOP
      compact_i := 0;
      FOR item IN SELECT e.value FROM jsonb_array_elements(COALESCE(p_nsc.kontakte->value, '[]'::jsonb)) AS e(value) LOOP
        IF btrim(COALESCE(item->>'name','')) <> '' THEN
          result := result || ((CASE value WHEN 'familie' THEN 'fam-' WHEN 'freunde' THEN 'fre-' ELSE 'riv-' END) || compact_i);
          compact_i := compact_i + 1;
        END IF;
      END LOOP;
    END LOOP;
  END IF;
  IF 'geheim' = ANY(p_nsc.sections) THEN
    compact_i := 0;
    FOR item IN SELECT e.value FROM jsonb_array_elements(COALESCE(p_nsc.geheimnisse, '[]'::jsonb)) AS e(value) LOOP
      IF btrim(COALESCE(item->>'text','')) <> '' THEN
        result := result || ('geh-' || compact_i);
        compact_i := compact_i + 1;
      END IF;
    END LOOP;
  END IF;
  RETURN result;
END $$;

CREATE OR REPLACE FUNCTION public.nsc_fact_value(p_nsc public.nscs, p_key TEXT)
RETURNS TEXT LANGUAGE plpgsql STABLE SET search_path = public, pg_temp AS $$
DECLARE
  m TEXT[];
  idx INT;
  category TEXT;
  text_value TEXT;
  day_of_year INT;
  day_offset INT := 0;
  month_days INT[] := ARRAY[19,18,19,19,18,19,19,19,19,18,18,19];
  month_names TEXT[] := ARRAY['Janvar','Fevorn','Mareth','Aprel','Mairen','Junvar','Juval','Auvar','Septhar','Oktar','Novren','Derath'];
  item JSONB;
BEGIN
  CASE p_key
    WHEN 'rasse' THEN RETURN p_nsc.rasse;
    WHEN 'geschlecht' THEN RETURN p_nsc.geschlecht;
    WHEN 'groesse' THEN RETURN p_nsc.groesse;
    WHEN 'alter' THEN RETURN p_nsc.alter_jahre::TEXT || ' Jahre';
    WHEN 'geburtstag' THEN
      day_of_year := p_nsc.geburtstag_doy;
      FOR idx IN 1 .. array_length(month_days,1) LOOP
        IF day_of_year <= day_offset + month_days[idx] THEN
          RETURN (day_of_year - day_offset)::TEXT || '. ' || month_names[idx];
        END IF;
        day_offset := day_offset + month_days[idx];
      END LOOP;
      RETURN p_nsc.geburtstag_doy::TEXT;
    WHEN 'gesinnung' THEN RETURN p_nsc.gesinnung;
    WHEN 'klasse' THEN RETURN p_nsc.klasse;
    WHEN 'hintergrund' THEN RETURN p_nsc.hintergrund;
    WHEN 'beruf' THEN RETURN p_nsc.beruf;
    WHEN 'gottheit' THEN RETURN p_nsc.gottheit;
    WHEN 'division' THEN RETURN p_nsc.division;
    WHEN 'organisation' THEN RETURN p_nsc.organisation;
    WHEN 'kapsel' THEN RETURN p_nsc.kapsel;
    WHEN 'wohnort' THEN
      IF btrim(COALESCE(p_nsc.wohnort,'')) <> '' THEN RETURN p_nsc.wohnort; END IF;
      SELECT h.name INTO text_value FROM public.karte_hexes h WHERE h.id = p_nsc.wohnort_hex_id;
      RETURN NULLIF(btrim(COALESCE(text_value,'')),'');
    WHEN 'zuhause' THEN RETURN CASE WHEN p_nsc.hat_zuhause THEN 'Ja' ELSE 'Nein' END;
    WHEN 'wohlbefinden' THEN RETURN public.nsc_wohlbefinden_band(p_nsc.wohlbefinden);
    WHEN 'bio' THEN RETURN p_nsc.biografie;
    WHEN 'aussehen' THEN
      SELECT string_agg(value, ' ') INTO text_value FROM jsonb_each_text(COALESCE(p_nsc.aussehen, '{}'::jsonb));
      RETURN text_value;
    WHEN 'unvergesslich' THEN RETURN p_nsc.unvergesslich;
    WHEN 'habe' THEN RETURN p_nsc.habe::TEXT || ' Hade';
    ELSE NULL;
  END CASE;
  m := regexp_match(p_key, '^([a-z]+)-([0-9]+)$');
  IF m IS NULL THEN RETURN NULL; END IF;
  category := m[1]; idx := m[2]::INT;
  CASE category
    WHEN 'vna' THEN RETURN p_nsc.voller_name[idx + 1];
    WHEN 'eig' THEN RETURN p_nsc.eigenschaften[idx + 1];
    WHEN 'tal' THEN RETURN p_nsc.talente[idx + 1];
    WHEN 'mak' THEN RETURN p_nsc.makel[idx + 1];
    WHEN 'gew' THEN RETURN p_nsc.gewohnheiten[idx + 1];
    WHEN 'mot' THEN RETURN p_nsc.motivationen[idx + 1];
    WHEN 'rou' THEN
      item := p_nsc.routine->idx;
      RETURN concat_ws(' ', item->>'zeit', item->>'ort', item->>'tat');
    WHEN 'aus' THEN
      SELECT e.value INTO item FROM jsonb_array_elements(COALESCE(p_nsc.ausruestung, '[]'::jsonb)) AS e(value)
        WHERE btrim(COALESCE(e.value->>'name','')) <> '' OFFSET idx LIMIT 1;
      RETURN item->>'name';
    WHEN 'beg' THEN
      SELECT e.value INTO item FROM jsonb_array_elements(COALESCE(p_nsc.begleiter, '[]'::jsonb)) AS e(value)
        WHERE btrim(COALESCE(e.value->>'name','')) <> '' OFFSET idx LIMIT 1;
      RETURN concat_ws(' ', item->>'name', item->>'art');
    WHEN 'geh' THEN
      SELECT e.value INTO item FROM jsonb_array_elements(COALESCE(p_nsc.geheimnisse, '[]'::jsonb)) AS e(value)
        WHERE btrim(COALESCE(e.value->>'text','')) <> '' OFFSET idx LIMIT 1;
      RETURN item->>'text';
    WHEN 'fam' THEN category := 'familie';
    WHEN 'fre' THEN category := 'freunde';
    WHEN 'riv' THEN category := 'rivalen';
    ELSE RETURN NULL;
  END CASE;
  SELECT e.value INTO item FROM jsonb_array_elements(COALESCE(p_nsc.kontakte->category, '[]'::jsonb)) AS e(value)
    WHERE btrim(COALESCE(e.value->>'name','')) <> '' OFFSET idx LIMIT 1;
  RETURN item->>'name';
END $$;

CREATE OR REPLACE FUNCTION public.nsc_mask_fact(p_data JSONB, p_key TEXT)
RETURNS JSONB LANGUAGE plpgsql IMMUTABLE SET search_path = public, pg_temp AS $$
DECLARE
  m TEXT[];
  key TEXT;
  idx TEXT;
  group_key TEXT;
  nested_key TEXT;
  val JSONB;
BEGIN
  CASE p_key
    WHEN 'rasse' THEN RETURN jsonb_set(p_data,'{rasse}','null'::jsonb);
    WHEN 'geschlecht' THEN RETURN jsonb_set(p_data,'{geschlecht}','null'::jsonb);
    WHEN 'groesse' THEN RETURN jsonb_set(p_data,'{groesse}','null'::jsonb);
    WHEN 'alter' THEN RETURN jsonb_set(p_data,'{alter_jahre}','null'::jsonb);
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
  key := m[1]; idx := m[2];
  CASE key
    WHEN 'vna' THEN RETURN jsonb_set(p_data, ARRAY['voller_name',idx], '""'::jsonb);
    WHEN 'eig' THEN RETURN jsonb_set(p_data, ARRAY['eigenschaften',idx], '""'::jsonb);
    WHEN 'tal' THEN RETURN jsonb_set(p_data, ARRAY['talente',idx], '""'::jsonb);
    WHEN 'mak' THEN RETURN jsonb_set(p_data, ARRAY['makel',idx], '""'::jsonb);
    WHEN 'gew' THEN RETURN jsonb_set(p_data, ARRAY['gewohnheiten',idx], '""'::jsonb);
    WHEN 'mot' THEN RETURN jsonb_set(p_data, ARRAY['motivationen',idx], '""'::jsonb);
    WHEN 'rou' THEN RETURN jsonb_set(p_data, ARRAY['routine',idx], '{"zeit":"","ort":"","tat":""}'::jsonb);
    WHEN 'aus' THEN RETURN jsonb_set(p_data, ARRAY['ausruestung',idx], '{"name":"","beschreibung":""}'::jsonb);
    WHEN 'beg' THEN RETURN jsonb_set(p_data, ARRAY['begleiter',idx], '{"name":"","art":""}'::jsonb);
    WHEN 'geh' THEN RETURN jsonb_set(p_data, ARRAY['geheimnisse',idx,'text'], '""'::jsonb);
    WHEN 'fam' THEN group_key := 'familie'; nested_key := 'fam-';
    WHEN 'fre' THEN group_key := 'freunde'; nested_key := 'fre-';
    WHEN 'riv' THEN group_key := 'rivalen'; nested_key := 'riv-';
    ELSE RETURN p_data;
  END CASE;
  val := p_data #> ARRAY['kontakte',group_key,idx];
  val := jsonb_build_object('name','','rolle','','verstorben',false);
  RETURN jsonb_set(p_data, ARRAY['kontakte',group_key,idx], val);
END $$;

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
BEGIN
  IF v_uid IS NULL THEN RAISE EXCEPTION 'Anmeldung erforderlich' USING ERRCODE = '42501'; END IF;
  IF p_character_id IS NOT NULL AND NOT EXISTS (
    SELECT 1 FROM public.characters c WHERE c.id = p_character_id AND c.owner_id = v_uid AND c.type = 'spieler'
  ) THEN RAISE EXCEPTION 'Charakter gehört nicht zu diesem Konto' USING ERRCODE = '42501'; END IF;

  FOR n IN SELECT * FROM public.nscs WHERE visible = true ORDER BY name LOOP
    keys := public.nsc_unlockable_fact_keys(n);
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
    -- Wohnort-Hexfeld: nur mit freigeschaltetem Wohnort und nur, wenn der Name für Spieler offen ist
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
  updated_keys TEXT[];
  attempts INT;
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
  IF attempts > 20 THEN RETURN jsonb_build_object('matched',false); END IF;
  SELECT * INTO n FROM public.nscs WHERE id=p_nsc_id AND visible=true;
  IF NOT FOUND THEN RETURN jsonb_build_object('matched',false); END IF;
  IF NOT p_fact_key = ANY(public.nsc_unlockable_fact_keys(n)) THEN RETURN jsonb_build_object('matched',false); END IF;
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
  IF NOT matches THEN
    RETURN jsonb_build_object('matched',false);
  END IF;
  updated_keys := array_append(COALESCE(current_keys,'{}'),p_fact_key);
  INSERT INTO public.nsc_unlocks(character_id,nsc_id,unlocked_keys)
  VALUES (p_character_id,p_nsc_id,updated_keys)
  ON CONFLICT (character_id,nsc_id) DO UPDATE SET unlocked_keys=EXCLUDED.unlocked_keys;
  RETURN jsonb_build_object('matched',true,'value',actual);
END $$;

REVOKE ALL ON FUNCTION public.get_nsc_player_data(UUID) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.guess_nsc_fact(UUID,UUID,TEXT,TEXT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_nsc_player_data(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION public.guess_nsc_fact(UUID,UUID,TEXT,TEXT) TO authenticated;

NOTIFY pgrst, 'reload schema';
