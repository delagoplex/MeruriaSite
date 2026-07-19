-- ── NSC v2 ───────────────────────────────────────────────────────────────────
-- Erweiterung der nscs-Tabelle für die neue NSC-Verwaltung:
--   · neue Kern-Felder (Unterrasse, Klasse, Gesinnung, Größe, Hintergrund, …)
--   · Biografie, Angewohnheiten, Vermögen (habe), aktive Abschnitte (sections)
--   · makel: TEXT → TEXT[]           (mehrere Makel, einzeln freischaltbar)
--   · begleiter: Objekt → Array      (mehrere Begleiter)
--   · geheimnisse: TEXT[] → JSONB    ([{text, vis}] — vis = global sichtbar)
--   · nsc_unlocks: Keys aufs neue Schema migriert

-- ── Neue Spalten ─────────────────────────────────────────────────────────────
ALTER TABLE public.nscs
  ADD COLUMN IF NOT EXISTS unterrasse    TEXT,
  ADD COLUMN IF NOT EXISTS klasse        TEXT,
  ADD COLUMN IF NOT EXISTS gesinnung     TEXT,
  ADD COLUMN IF NOT EXISTS groesse       TEXT,
  ADD COLUMN IF NOT EXISTS hintergrund   TEXT,
  ADD COLUMN IF NOT EXISTS biografie     TEXT,
  ADD COLUMN IF NOT EXISTS gewohnheiten  TEXT[] NOT NULL DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS habe          INT    NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS sections      TEXT[] NOT NULL DEFAULT '{}';

-- ── makel: TEXT → TEXT[] ─────────────────────────────────────────────────────
DO $$
BEGIN
  IF (SELECT data_type FROM information_schema.columns
      WHERE table_schema = 'public' AND table_name = 'nscs' AND column_name = 'makel') = 'text' THEN
    ALTER TABLE public.nscs
      ALTER COLUMN makel DROP DEFAULT,
      ALTER COLUMN makel TYPE TEXT[] USING (
        CASE WHEN makel IS NULL OR btrim(makel) = '' THEN '{}'::TEXT[] ELSE ARRAY[makel] END
      ),
      ALTER COLUMN makel SET DEFAULT '{}',
      ALTER COLUMN makel SET NOT NULL;
  END IF;
END $$;

-- ── begleiter: {name, art} | null → [{name, art}, …] ─────────────────────────
UPDATE public.nscs
SET begleiter = CASE
  WHEN begleiter IS NULL OR jsonb_typeof(begleiter) = 'null' THEN '[]'::jsonb
  WHEN jsonb_typeof(begleiter) = 'array' THEN begleiter
  WHEN COALESCE(btrim(begleiter->>'name'), '') = '' THEN '[]'::jsonb
  ELSE jsonb_build_array(begleiter)
END;
ALTER TABLE public.nscs
  ALTER COLUMN begleiter SET DEFAULT '[]',
  ALTER COLUMN begleiter SET NOT NULL;

-- ── geheimnisse: TEXT[] → JSONB [{text, vis}] ────────────────────────────────
-- Bestehende Geheimnisse waren im alten System per Unlock freischaltbar,
-- also global sichtbar → vis = true.
DO $$
BEGIN
  IF (SELECT data_type FROM information_schema.columns
      WHERE table_schema = 'public' AND table_name = 'nscs' AND column_name = 'geheimnisse') = 'ARRAY' THEN
    ALTER TABLE public.nscs
      ALTER COLUMN geheimnisse DROP DEFAULT,
      ALTER COLUMN geheimnisse TYPE JSONB USING to_jsonb(geheimnisse),
      ALTER COLUMN geheimnisse SET DEFAULT '[]',
      ALTER COLUMN geheimnisse SET NOT NULL;
    UPDATE public.nscs
    SET geheimnisse = COALESCE(
      (SELECT jsonb_agg(jsonb_build_object('text', el, 'vis', true))
       FROM jsonb_array_elements_text(geheimnisse) AS el
       WHERE btrim(el) <> ''),
      '[]'::jsonb
    );
  END IF;
END $$;

-- ── sections-Backfill: vorhandene Inhalte sichtbar halten ────────────────────
UPDATE public.nscs SET sections = ARRAY(
  SELECT s FROM unnest(ARRAY[
    CASE WHEN COALESCE(btrim(biografie), '') <> '' THEN 'bio' END,
    CASE WHEN COALESCE(btrim(unvergesslich), '') <> ''
           OR COALESCE(array_length(eigenschaften, 1), 0) > 0
           OR COALESCE(array_length(talente, 1), 0) > 0
           OR COALESCE(array_length(makel, 1), 0) > 0 THEN 'pers' END,
    CASE WHEN jsonb_array_length(routine) > 0 THEN 'routine' END,
    CASE WHEN COALESCE(array_length(gewohnheiten, 1), 0) > 0 THEN 'gewohnheiten' END,
    CASE WHEN jsonb_array_length(ausruestung) > 0 OR habe > 0 THEN 'ausr' END,
    CASE WHEN jsonb_array_length(begleiter) > 0 THEN 'begleiter' END,
    CASE WHEN COALESCE(array_length(motivationen, 1), 0) > 0 THEN 'motive' END,
    CASE WHEN jsonb_array_length(COALESCE(kontakte->'familie', '[]'::jsonb))
            + jsonb_array_length(COALESCE(kontakte->'freunde', '[]'::jsonb))
            + jsonb_array_length(COALESCE(kontakte->'rivalen', '[]'::jsonb)) > 0 THEN 'kontakte' END,
    CASE WHEN jsonb_array_length(geheimnisse) > 0 THEN 'geheim' END,
    CASE WHEN steckbrief IS NOT NULL THEN 'statblock' END
  ]) AS s WHERE s IS NOT NULL
)
WHERE sections = '{}';

-- ── nsc_unlocks: Keys aufs neue Schema migrieren ─────────────────────────────
-- Singleton-Umbenennungen:  rang → division  ·  titel/lebensphase entfallen
-- Gruppen-Fakten → indexierte Fakten:
--   eigenschaften → eig-0…n   talente → tal-0…n   makel → mak-0   begleiter → beg-0
-- Präfix-Umbenennungen:
--   namestueck-i → vna-i   routine-i → rou-i   ausruestung-i → aus-i
--   motivation-i → mot-i   geheimnis-i → geh-i
--   familie-i → fam-i      freunde-i → fre-i   rivalen-i → riv-i
DO $$
DECLARE
  r       RECORD;
  k       TEXT;
  newkeys TEXT[];
  i       INT;
BEGIN
  FOR r IN
    SELECT u.character_id, u.nsc_id, u.unlocked_keys,
           COALESCE(array_length(n.eigenschaften, 1), 0) AS n_eig,
           COALESCE(array_length(n.talente, 1), 0)       AS n_tal,
           COALESCE(array_length(n.makel, 1), 0)         AS n_mak
    FROM public.nsc_unlocks u
    JOIN public.nscs n ON n.id = u.nsc_id
  LOOP
    newkeys := '{}';
    FOREACH k IN ARRAY r.unlocked_keys LOOP
      CASE
        WHEN k IN ('titel', 'lebensphase') THEN NULL;  -- entfällt in v2
        WHEN k = 'rang' THEN newkeys := newkeys || 'division';
        WHEN k = 'eigenschaften' THEN
          FOR i IN 0 .. r.n_eig - 1 LOOP newkeys := newkeys || ('eig-' || i); END LOOP;
        WHEN k = 'talente' THEN
          FOR i IN 0 .. r.n_tal - 1 LOOP newkeys := newkeys || ('tal-' || i); END LOOP;
        WHEN k = 'makel' THEN
          FOR i IN 0 .. r.n_mak - 1 LOOP newkeys := newkeys || ('mak-' || i); END LOOP;
        WHEN k = 'begleiter'                THEN newkeys := newkeys || 'beg-0';
        WHEN k LIKE 'namestueck-%'          THEN newkeys := newkeys || ('vna-' || substr(k, 12));
        WHEN k LIKE 'routine-%'             THEN newkeys := newkeys || ('rou-' || substr(k, 9));
        WHEN k LIKE 'ausruestung-%'         THEN newkeys := newkeys || ('aus-' || substr(k, 13));
        WHEN k LIKE 'motivation-%'          THEN newkeys := newkeys || ('mot-' || substr(k, 12));
        WHEN k LIKE 'geheimnis-%'           THEN newkeys := newkeys || ('geh-' || substr(k, 11));
        WHEN k LIKE 'familie-%'             THEN newkeys := newkeys || ('fam-' || substr(k, 9));
        WHEN k LIKE 'freunde-%'             THEN newkeys := newkeys || ('fre-' || substr(k, 9));
        WHEN k LIKE 'rivalen-%'             THEN newkeys := newkeys || ('riv-' || substr(k, 9));
        ELSE newkeys := newkeys || k;
      END CASE;
    END LOOP;
    UPDATE public.nsc_unlocks
    SET unlocked_keys = (SELECT COALESCE(array_agg(DISTINCT x), '{}') FROM unnest(newkeys) x)
    WHERE character_id = r.character_id AND nsc_id = r.nsc_id;
  END LOOP;
END $$;
