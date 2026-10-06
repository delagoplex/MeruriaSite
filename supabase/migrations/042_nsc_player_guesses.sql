-- Player guesses reveal individual NSC facts for one owned character.

CREATE OR REPLACE FUNCTION public.nsc_unlockable_fact_keys(p_nsc public.nscs)
RETURNS TEXT[] LANGUAGE plpgsql IMMUTABLE SET search_path = public, pg_temp AS $$
DECLARE
  result TEXT[] := '{}';
  item JSONB;
  value TEXT;
  i INT;
  compact_i INT;
BEGIN
  IF p_nsc.rasse IS NOT NULL AND p_nsc.field_visibility->>'rasse' = 'true' THEN result := result || 'rasse'; END IF;
  IF p_nsc.geschlecht IS NOT NULL AND p_nsc.field_visibility->>'geschlecht' = 'true' THEN result := result || 'geschlecht'; END IF;
  IF p_nsc.groesse IS NOT NULL AND p_nsc.field_visibility->>'groesse' = 'true' THEN result := result || 'groesse'; END IF;
  IF p_nsc.alter_jahre IS NOT NULL AND p_nsc.field_visibility->>'alter' = 'true' THEN result := result || 'alter'; END IF;
  IF p_nsc.geburtstag_doy IS NOT NULL AND p_nsc.field_visibility->>'geburtstag' = 'true' THEN result := result || 'geburtstag'; END IF;
  IF p_nsc.gesinnung IS NOT NULL AND p_nsc.field_visibility->>'gesinnung' = 'true' THEN result := result || 'gesinnung'; END IF;
  IF p_nsc.klasse IS NOT NULL AND p_nsc.field_visibility->>'klasse' = 'true' THEN result := result || 'klasse'; END IF;
  IF p_nsc.hintergrund IS NOT NULL AND p_nsc.field_visibility->>'hintergrund' = 'true' THEN result := result || 'hintergrund'; END IF;
  IF p_nsc.beruf IS NOT NULL AND p_nsc.field_visibility->>'beruf' = 'true' THEN result := result || 'beruf'; END IF;
  IF p_nsc.gottheit IS NOT NULL AND p_nsc.field_visibility->>'gottheit' = 'true' THEN result := result || 'gottheit'; END IF;
  IF p_nsc.division IS NOT NULL AND p_nsc.division <> 'Keine' AND p_nsc.field_visibility->>'division' = 'true' THEN result := result || 'division'; END IF;
  IF p_nsc.organisation IS NOT NULL AND p_nsc.field_visibility->>'organisation' = 'true' THEN result := result || 'organisation'; END IF;
  IF p_nsc.kapsel IS NOT NULL AND p_nsc.field_visibility->>'kapsel' = 'true' THEN result := result || 'kapsel'; END IF;
  IF p_nsc.wohnort IS NOT NULL AND p_nsc.field_visibility->>'wohnort' = 'true' THEN result := result || 'wohnort'; END IF;

  compact_i := 0;
  FOREACH value IN ARRAY COALESCE(p_nsc.voller_name, '{}') LOOP
    IF btrim(value) <> '' AND p_nsc.field_visibility->>'vname' = 'true' AND p_nsc.field_visibility->>('vna-' || compact_i) = 'true' THEN
      result := result || ('vna-' || compact_i);
    END IF;
    compact_i := compact_i + 1;
  END LOOP;
  IF 'bio' = ANY(p_nsc.sections) AND btrim(COALESCE(p_nsc.biografie, '')) <> '' AND p_nsc.field_visibility->>'bio' = 'true' THEN result := result || 'bio'; END IF;
    IF 'aussehen' = ANY(p_nsc.sections)
      AND EXISTS (SELECT 1 FROM jsonb_each_text(COALESCE(p_nsc.aussehen, '{}'::jsonb)) AS x(key,value) WHERE btrim(x.value) <> '')
      AND p_nsc.field_visibility->>'aussehen' = 'true' THEN result := result || 'aussehen'; END IF;

  IF 'pers' = ANY(p_nsc.sections) THEN
    IF btrim(COALESCE(p_nsc.unvergesslich, '')) <> '' AND p_nsc.field_visibility->>'pers' = 'true' AND p_nsc.field_visibility->>'unvergesslich' = 'true' THEN result := result || 'unvergesslich'; END IF;
    compact_i := 0;
    FOREACH value IN ARRAY COALESCE(p_nsc.eigenschaften, '{}') LOOP
      IF btrim(value) <> '' AND p_nsc.field_visibility->>'pers' = 'true' AND p_nsc.field_visibility->>('eig-' || compact_i) = 'true' THEN result := result || ('eig-' || compact_i); END IF;
      compact_i := compact_i + 1;
    END LOOP;
    compact_i := 0;
    FOREACH value IN ARRAY COALESCE(p_nsc.talente, '{}') LOOP
      IF btrim(value) <> '' AND p_nsc.field_visibility->>'pers' = 'true' AND p_nsc.field_visibility->>('tal-' || compact_i) = 'true' THEN result := result || ('tal-' || compact_i); END IF;
      compact_i := compact_i + 1;
    END LOOP;
    compact_i := 0;
    FOREACH value IN ARRAY COALESCE(p_nsc.makel, '{}') LOOP
      IF btrim(value) <> '' AND p_nsc.field_visibility->>'pers' = 'true' AND p_nsc.field_visibility->>('mak-' || compact_i) = 'true' THEN result := result || ('mak-' || compact_i); END IF;
      compact_i := compact_i + 1;
    END LOOP;
  END IF;

  IF 'routine' = ANY(p_nsc.sections) THEN
    FOR i IN 0 .. jsonb_array_length(COALESCE(p_nsc.routine, '[]'::jsonb)) - 1 LOOP
      IF p_nsc.field_visibility->>'routine' = 'true' AND p_nsc.field_visibility->>('rou-' || i) = 'true' THEN result := result || ('rou-' || i); END IF;
    END LOOP;
  END IF;
  compact_i := 0;
  IF 'gewohnheiten' = ANY(p_nsc.sections) THEN
    FOREACH value IN ARRAY COALESCE(p_nsc.gewohnheiten, '{}') LOOP
      IF btrim(value) <> '' AND p_nsc.field_visibility->>'gewohnheiten' = 'true' AND p_nsc.field_visibility->>('gew-' || compact_i) = 'true' THEN result := result || ('gew-' || compact_i); END IF;
      compact_i := compact_i + 1;
    END LOOP;
  END IF;
  IF 'ausr' = ANY(p_nsc.sections) THEN
    compact_i := 0;
    FOR item IN SELECT e.value FROM jsonb_array_elements(COALESCE(p_nsc.ausruestung, '[]'::jsonb)) AS e(value) LOOP
      IF btrim(COALESCE(item->>'name','')) <> '' THEN
        IF p_nsc.field_visibility->>'ausr' = 'true' AND p_nsc.field_visibility->>('aus-' || compact_i) = 'true' THEN result := result || ('aus-' || compact_i); END IF;
        compact_i := compact_i + 1;
      END IF;
    END LOOP;
    IF p_nsc.habe > 0 AND p_nsc.field_visibility->>'ausr' = 'true' AND p_nsc.field_visibility->>'habe' = 'true' THEN result := result || 'habe'; END IF;
  END IF;
  IF 'begleiter' = ANY(p_nsc.sections) THEN
    compact_i := 0;
    FOR item IN SELECT e.value FROM jsonb_array_elements(COALESCE(p_nsc.begleiter, '[]'::jsonb)) AS e(value) LOOP
      IF btrim(COALESCE(item->>'name','')) <> '' THEN
        IF p_nsc.field_visibility->>'begleiter' = 'true' AND p_nsc.field_visibility->>('beg-' || compact_i) = 'true' THEN result := result || ('beg-' || compact_i); END IF;
        compact_i := compact_i + 1;
      END IF;
    END LOOP;
  END IF;
  compact_i := 0;
  IF 'motive' = ANY(p_nsc.sections) THEN
    FOREACH value IN ARRAY COALESCE(p_nsc.motivationen, '{}') LOOP
      IF btrim(value) <> '' AND p_nsc.field_visibility->>'motive' = 'true' AND p_nsc.field_visibility->>('mot-' || compact_i) = 'true' THEN result := result || ('mot-' || compact_i); END IF;
      compact_i := compact_i + 1;
    END LOOP;
  END IF;
  IF 'kontakte' = ANY(p_nsc.sections) THEN
    FOREACH value IN ARRAY ARRAY['familie','freunde','rivalen'] LOOP
      compact_i := 0;
      FOR item IN SELECT e.value FROM jsonb_array_elements(COALESCE(p_nsc.kontakte->value, '[]'::jsonb)) AS e(value) LOOP
        IF btrim(COALESCE(item->>'name','')) <> '' THEN
          IF p_nsc.field_visibility->>'kontakte' = 'true' AND p_nsc.field_visibility->>(CASE value WHEN 'familie' THEN 'fam-' WHEN 'freunde' THEN 'fre-' ELSE 'riv-' END || compact_i) = 'true' THEN
            result := result || ((CASE value WHEN 'familie' THEN 'fam-' WHEN 'freunde' THEN 'fre-' ELSE 'riv-' END) || compact_i);
          END IF;
          compact_i := compact_i + 1;
        END IF;
      END LOOP;
    END LOOP;
  END IF;
  IF 'geheim' = ANY(p_nsc.sections) THEN
    compact_i := 0;
    FOR item IN SELECT e.value FROM jsonb_array_elements(COALESCE(p_nsc.geheimnisse, '[]'::jsonb)) AS e(value) LOOP
      IF btrim(COALESCE(item->>'text','')) <> '' THEN
        IF item->>'vis' = 'true' THEN result := result || ('geh-' || compact_i); END IF;
        compact_i := compact_i + 1;
      END IF;
    END LOOP;
  END IF;
  RETURN result;
END $$;

CREATE OR REPLACE FUNCTION public.nsc_fact_value(p_nsc public.nscs, p_key TEXT)
RETURNS TEXT LANGUAGE plpgsql IMMUTABLE SET search_path = public, pg_temp AS $$
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
    WHEN 'wohnort' THEN RETURN p_nsc.wohnort;
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
    WHEN 'wohnort' THEN RETURN jsonb_set(p_data,'{wohnort}','null'::jsonb);
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

CREATE OR REPLACE FUNCTION public.get_nsc_admin_data()
RETURNS SETOF public.nscs LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pg_temp AS $$
BEGIN
  IF NOT public.is_dm() THEN RAISE EXCEPTION 'Nur die Spielleitung darf vollständige NSC-Daten abrufen' USING ERRCODE = '42501'; END IF;
  RETURN QUERY SELECT * FROM public.nscs ORDER BY name;
END $$;

CREATE OR REPLACE FUNCTION public.get_nsc_player_data(p_character_id UUID DEFAULT NULL)
RETURNS SETOF JSONB LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pg_temp AS $$
DECLARE
  n public.nscs%ROWTYPE;
  row_data JSONB;
  keys TEXT[];
  unlocked TEXT[];
  total INT;
  open_count INT;
  k TEXT;
  owner_id UUID := auth.uid();
BEGIN
  IF owner_id IS NULL THEN RAISE EXCEPTION 'Anmeldung erforderlich' USING ERRCODE = '42501'; END IF;
  IF p_character_id IS NOT NULL AND NOT EXISTS (
    SELECT 1 FROM public.characters c WHERE c.id = p_character_id AND c.owner_id = owner_id AND c.type = 'spieler'
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
    total := COALESCE(array_length(keys,1),0);
    SELECT count(*) INTO open_count FROM unnest(unlocked) x WHERE x = ANY(keys);
    IF total = 0 OR open_count * 4 < total THEN
      row_data := jsonb_set(row_data,'{name}',to_jsonb('Unbekannt'::TEXT));
      row_data := jsonb_set(row_data,'{bild}','null'::jsonb);
      row_data := jsonb_set(row_data,'{status}','[]'::jsonb);
      row_data := jsonb_set(row_data,'{titel}','null'::jsonb);
      row_data := jsonb_set(row_data,'{art}','null'::jsonb);
    END IF;
    row_data := row_data - 'slug' - 'steckbrief';
    row_data := jsonb_set(row_data,'{haltung_overrides}',
      CASE WHEN p_character_id IS NULL THEN '{}'::jsonb
           ELSE jsonb_strip_nulls(jsonb_build_object(p_character_id::TEXT,n.haltung_overrides->(p_character_id::TEXT))) END);
    row_data := row_data || jsonb_build_object('challengeable_keys',to_jsonb(keys));
    RETURN NEXT row_data;
  END LOOP;
END $$;

CREATE TABLE public.nsc_guess_rate_limits (
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  character_id UUID NOT NULL REFERENCES public.characters(id) ON DELETE CASCADE,
  nsc_id UUID NOT NULL REFERENCES public.nscs(id) ON DELETE CASCADE,
  window_started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  attempt_count INT NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, character_id, nsc_id)
);
ALTER TABLE public.nsc_guess_rate_limits ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.nsc_guess_rate_limits FROM PUBLIC, anon, authenticated;

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

-- Authenticated players may read only the small public directory projection.
REVOKE SELECT ON public.nscs FROM authenticated;
GRANT SELECT (id) ON public.nscs TO authenticated;

CREATE OR REPLACE FUNCTION public.nsc_player_has_fact(p_nsc_id UUID, p_fact_key TEXT)
RETURNS BOOLEAN LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pg_temp AS $$
DECLARE
  n public.nscs%ROWTYPE;
BEGIN
  IF public.is_dm() THEN RETURN true; END IF;
  IF auth.uid() IS NULL THEN RETURN false; END IF;
  SELECT * INTO n FROM public.nscs WHERE id=p_nsc_id AND visible=true;
  IF NOT FOUND OR NOT p_fact_key = ANY(public.nsc_unlockable_fact_keys(n)) THEN RETURN false; END IF;
  RETURN EXISTS (
    SELECT 1 FROM public.nsc_unlocks u
    JOIN public.characters c ON c.id=u.character_id
    WHERE u.nsc_id=p_nsc_id AND c.owner_id=auth.uid() AND p_fact_key=ANY(u.unlocked_keys)
  );
END $$;

CREATE OR REPLACE FUNCTION public.nsc_player_has_stage_one(p_nsc_id UUID)
RETURNS BOOLEAN LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pg_temp AS $$
DECLARE
  n public.nscs%ROWTYPE;
  keys TEXT[];
BEGIN
  IF public.is_dm() THEN RETURN true; END IF;
  IF auth.uid() IS NULL THEN RETURN false; END IF;
  SELECT * INTO n FROM public.nscs WHERE id=p_nsc_id AND visible=true;
  IF NOT FOUND THEN RETURN false; END IF;
  keys := public.nsc_unlockable_fact_keys(n);
  IF COALESCE(cardinality(keys),0) = 0 THEN RETURN false; END IF;
  RETURN EXISTS (
    SELECT 1 FROM public.nsc_unlocks u
    JOIN public.characters c ON c.id=u.character_id
    WHERE u.nsc_id=p_nsc_id AND c.owner_id=auth.uid()
      AND (SELECT count(*) FROM unnest(u.unlocked_keys) x WHERE x=ANY(keys)) * 4 >= cardinality(keys)
  );
END $$;

CREATE OR REPLACE VIEW public.nsc_public_directory AS
  SELECT n.id,
         CASE WHEN public.nsc_player_has_stage_one(n.id) THEN n.name ELSE 'Unbekannt' END AS name,
         CASE WHEN public.nsc_player_has_stage_one(n.id) THEN n.bild END AS bild,
         n.created_at,
         n.visible,
         CASE WHEN public.nsc_player_has_fact(n.id,'division') THEN n.division END AS division,
         CASE WHEN public.nsc_player_has_fact(n.id,'geburtstag') THEN n.geburtstag_doy END AS geburtstag_doy
  FROM public.nscs n WHERE n.visible = true;
GRANT SELECT ON public.nsc_public_directory TO authenticated;

REVOKE ALL ON FUNCTION public.get_nsc_admin_data() FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.get_nsc_player_data(UUID) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.guess_nsc_fact(UUID,UUID,TEXT,TEXT) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.nsc_player_has_fact(UUID,TEXT) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.nsc_player_has_stage_one(UUID) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_nsc_admin_data() TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_nsc_player_data(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION public.guess_nsc_fact(UUID,UUID,TEXT,TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION public.nsc_player_has_fact(UUID,TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION public.nsc_player_has_stage_one(UUID) TO authenticated;

NOTIFY pgrst, 'reload schema';