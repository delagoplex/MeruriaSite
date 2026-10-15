-- 062: Spiel-Seite – Gruppenstand, Kürzliche Ereignisse (mit Kommentaren der SC), automatische Ereignisse.
--
-- Gruppe = die angenommenen Bewerbungen einer Mission. missions.spieltag_abs (absoluter Kalendertag) gesetzt
-- heißt: die Gruppe ist unterwegs und spielt gerade an diesem Tag. Verglichen wird mit settings.kalender_today.
-- Spieler sehen fremde Bewerbungen nicht (009); gruppen_status() liefert deshalb nur die nötigen Angaben.

-- ── Gruppenstand ────────────────────────────────────────────────────────────
ALTER TABLE public.missions ADD COLUMN IF NOT EXISTS spieltag_abs INTEGER;

CREATE OR REPLACE FUNCTION public.gruppen_status()
RETURNS TABLE (mission_id UUID, name TEXT, spieltag_abs INTEGER, teilnehmer JSONB)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public, pg_temp AS $$
  SELECT m.id, m.name, m.spieltag_abs,
    COALESCE((
      SELECT jsonb_agg(jsonb_build_object(
               'id', c.id, 'name', c.name, 'bild', c.char_data->>'bild',
               'division', COALESCE(c.char_data->>'division', c.division)) ORDER BY a.created_at)
      FROM public.mission_applications a
      JOIN public.characters c ON c.id = a.character_id
      WHERE a.mission_id = m.id AND a.app_status = 'accepted'
    ), '[]'::jsonb)
  FROM public.missions m
  WHERE auth.uid() IS NOT NULL
    AND m.spieltag_abs IS NOT NULL
    AND m.status <> 'archiviert'
  ORDER BY m.spieltag_abs DESC, m.name;
$$;
REVOKE ALL ON FUNCTION public.gruppen_status() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.gruppen_status() TO authenticated;

-- ── Kürzliche Ereignisse ────────────────────────────────────────────────────
CREATE TABLE public.ereignisse (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tag_abs     INTEGER NOT NULL,                       -- Meruria-Datum (absoluter Tag)
  titel       TEXT NOT NULL DEFAULT '',
  text        TEXT NOT NULL DEFAULT '',               -- Klartext mit Link-Tokens [[art:id|Name]]
  bilder      TEXT[] NOT NULL DEFAULT '{}',
  art         TEXT NOT NULL DEFAULT 'manuell'
              CHECK (art IN ('manuell', 'mission', 'beitritt', 'gruppe', 'charakter', 'kollektikon')),
  bezug       JSONB NOT NULL DEFAULT '{}'::jsonb,
  erstellt_von UUID DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX ereignisse_neueste ON public.ereignisse (tag_abs DESC, created_at DESC);

ALTER TABLE public.ereignisse ENABLE ROW LEVEL SECURITY;
CREATE POLICY "auth read" ON public.ereignisse FOR SELECT TO authenticated USING (true);
CREATE POLICY "dm write"  ON public.ereignisse FOR ALL USING (public.is_dm()) WITH CHECK (public.is_dm());
GRANT SELECT ON public.ereignisse TO authenticated;
GRANT INSERT, UPDATE, DELETE ON public.ereignisse TO authenticated;

-- Kommentare: Spieler schreiben als einer ihrer eigenen Charaktere
CREATE TABLE public.ereignis_kommentare (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ereignis_id   UUID NOT NULL REFERENCES public.ereignisse(id) ON DELETE CASCADE,
  autor_id      UUID NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  character_id  UUID NOT NULL REFERENCES public.characters(id) ON DELETE CASCADE,
  text          TEXT NOT NULL CHECK (length(btrim(text)) BETWEEN 1 AND 2000),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  bearbeitet_am TIMESTAMPTZ
);
CREATE INDEX ereignis_kommentare_ereignis ON public.ereignis_kommentare (ereignis_id, created_at);

ALTER TABLE public.ereignis_kommentare ENABLE ROW LEVEL SECURITY;
CREATE POLICY "auth read" ON public.ereignis_kommentare FOR SELECT TO authenticated USING (true);
CREATE POLICY "own insert" ON public.ereignis_kommentare FOR INSERT
  WITH CHECK (autor_id = auth.uid()
    AND EXISTS (SELECT 1 FROM public.characters c WHERE c.id = character_id AND c.owner_id = auth.uid()));
CREATE POLICY "own update" ON public.ereignis_kommentare FOR UPDATE
  USING (autor_id = auth.uid()) WITH CHECK (autor_id = auth.uid());
CREATE POLICY "own or dm delete" ON public.ereignis_kommentare FOR DELETE
  USING (autor_id = auth.uid() OR public.is_dm());
GRANT SELECT, INSERT, DELETE ON public.ereignis_kommentare TO authenticated;
GRANT UPDATE (text, bearbeitet_am) ON public.ereignis_kommentare TO authenticated;

-- ── Automatische Ereignisse ─────────────────────────────────────────────────
-- settings.ereignisse_auto: JSON {"mission":true,"beitritt":true,"gruppe":true,"charakter":true,"kollektikon":true};
-- fehlt ein Schlüssel, ist die Art an.
INSERT INTO public.settings (key, value)
VALUES ('ereignisse_auto', '{"mission":true,"beitritt":true,"gruppe":true,"charakter":true,"kollektikon":true}')
ON CONFLICT (key) DO NOTHING;

CREATE OR REPLACE FUNCTION public.ereignis_auto_an(p_art TEXT)
RETURNS BOOLEAN LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public, pg_temp AS $$
DECLARE v TEXT;
BEGIN
  SELECT value INTO v FROM public.settings WHERE key = 'ereignisse_auto';
  IF v IS NULL THEN RETURN TRUE; END IF;
  RETURN COALESCE((v::jsonb ->> p_art)::boolean, TRUE);
EXCEPTION WHEN others THEN RETURN TRUE;
END $$;

CREATE OR REPLACE FUNCTION public.kalender_heute()
RETURNS INTEGER LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public, pg_temp AS $$
DECLARE v TEXT;
BEGIN
  SELECT value INTO v FROM public.settings WHERE key = 'kalender_today';
  RETURN COALESCE(v::integer, 14);
EXCEPTION WHEN others THEN RETURN 14;
END $$;

-- Link-Token-sicherer Name ([[ ]] und | aus Namen entfernen)
CREATE OR REPLACE FUNCTION public.ereignis_name(p TEXT)
RETURNS TEXT LANGUAGE sql IMMUTABLE AS $$
  SELECT regexp_replace(COALESCE(p, ''), '[\[\]|]', '', 'g');
$$;

-- neue Mission veröffentlicht
CREATE OR REPLACE FUNCTION public.ereignis_mission() RETURNS TRIGGER
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pg_temp AS $$
BEGIN
  IF NEW.status <> 'archiviert' AND public.ereignis_auto_an('mission') THEN
    INSERT INTO public.ereignisse (tag_abs, titel, text, art, bezug, erstellt_von)
    VALUES (public.kalender_heute(), 'Neue Mission im Terminal',
            '[[mission:' || NEW.id || '|' || public.ereignis_name(NEW.name) || ']] ist im Missionsterminal verfügbar.',
            'mission', jsonb_build_object('mission_id', NEW.id), NULL);
  END IF;
  RETURN NEW;
END $$;
CREATE TRIGGER ereignis_mission AFTER INSERT ON public.missions
  FOR EACH ROW EXECUTE FUNCTION public.ereignis_mission();

-- Bewerbung angenommen: Charakter schließt sich der Mission an
CREATE OR REPLACE FUNCTION public.ereignis_beitritt() RETURNS TRIGGER
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pg_temp AS $$
DECLARE m RECORD; c RECORD;
BEGIN
  IF NEW.app_status = 'accepted' AND OLD.app_status IS DISTINCT FROM 'accepted' AND public.ereignis_auto_an('beitritt') THEN
    SELECT id, name, spieltag_abs INTO m FROM public.missions WHERE id = NEW.mission_id;
    SELECT id, name INTO c FROM public.characters WHERE id = NEW.character_id;
    INSERT INTO public.ereignisse (tag_abs, titel, text, art, bezug, erstellt_von)
    VALUES (COALESCE(m.spieltag_abs, public.kalender_heute()), 'Neues Gruppenmitglied',
            '[[sc:' || c.id || '|' || public.ereignis_name(c.name) || ']] schließt sich [[mission:' || m.id || '|'
              || public.ereignis_name(m.name) || ']] an.',
            'beitritt', jsonb_build_object('mission_id', m.id, 'character_id', c.id), NULL);
  END IF;
  RETURN NEW;
END $$;
CREATE TRIGGER ereignis_beitritt AFTER UPDATE OF app_status ON public.mission_applications
  FOR EACH ROW EXECUTE FUNCTION public.ereignis_beitritt();

-- Gruppe bricht auf (Spieltag wird gesetzt)
CREATE OR REPLACE FUNCTION public.ereignis_gruppe() RETURNS TRIGGER
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pg_temp AS $$
DECLARE namen TEXT; anzahl INTEGER;
BEGIN
  IF NEW.spieltag_abs IS NOT NULL AND OLD.spieltag_abs IS NULL AND public.ereignis_auto_an('gruppe') THEN
    SELECT string_agg('[[sc:' || c.id || '|' || public.ereignis_name(c.name) || ']]', ', ' ORDER BY a.created_at), count(*) INTO namen, anzahl
    FROM public.mission_applications a JOIN public.characters c ON c.id = a.character_id
    WHERE a.mission_id = NEW.id AND a.app_status = 'accepted';
    INSERT INTO public.ereignisse (tag_abs, titel, text, art, bezug, erstellt_von)
    VALUES (NEW.spieltag_abs, 'Eine Gruppe bricht auf',
            CASE WHEN namen IS NULL
              THEN 'Eine Gruppe bricht zu [[mission:' || NEW.id || '|' || public.ereignis_name(NEW.name) || ']] auf.'
              ELSE namen || CASE WHEN anzahl = 1 THEN ' bricht' ELSE ' brechen' END || ' zu [[mission:' || NEW.id || '|' || public.ereignis_name(NEW.name) || ']] auf.' END,
            'gruppe', jsonb_build_object('mission_id', NEW.id), NULL);
  END IF;
  RETURN NEW;
END $$;
CREATE TRIGGER ereignis_gruppe AFTER UPDATE OF spieltag_abs ON public.missions
  FOR EACH ROW EXECUTE FUNCTION public.ereignis_gruppe();

-- Charakter freigeschaltet (für alle sichtbar)
CREATE OR REPLACE FUNCTION public.ereignis_charakter() RETURNS TRIGGER
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pg_temp AS $$
BEGIN
  IF NEW.visible AND NOT COALESCE(OLD.visible, FALSE) AND NEW.type = 'spieler' AND public.ereignis_auto_an('charakter') THEN
    INSERT INTO public.ereignisse (tag_abs, titel, text, art, bezug, erstellt_von)
    VALUES (public.kalender_heute(), 'Neu in Meruria',
            '[[sc:' || NEW.id || '|' || public.ereignis_name(NEW.name) || ']] ist jetzt in Meruria unterwegs.',
            'charakter', jsonb_build_object('character_id', NEW.id), NULL);
  END IF;
  RETURN NEW;
END $$;
CREATE TRIGGER ereignis_charakter AFTER UPDATE OF visible ON public.characters
  FOR EACH ROW EXECUTE FUNCTION public.ereignis_charakter();

-- Neufund im Kollektikon (Menge steigt von 0)
CREATE OR REPLACE FUNCTION public.ereignis_kollektikon() RETURNS TRIGGER
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pg_temp AS $$
DECLARE vorher INTEGER := 0; kat TEXT;
BEGIN
  IF TG_OP = 'UPDATE' THEN vorher := COALESCE(OLD.menge, 0); END IF;
  IF NEW.menge > 0 AND vorher = 0 AND public.ereignis_auto_an('kollektikon') THEN
    kat := CASE NEW.cat WHEN 'fische' THEN 'Fische' WHEN 'insekten' THEN 'Insekten' WHEN 'pflanzen' THEN 'Pflanzen'
                        WHEN 'mineralien' THEN 'Mineralien' WHEN 'kreaturen' THEN 'Kreaturen' ELSE initcap(NEW.cat) END;
    INSERT INTO public.ereignisse (tag_abs, titel, text, art, bezug, erstellt_von)
    VALUES (public.kalender_heute(), 'Neuer Fund im Kollektikon',
            '[[res:' || NEW.cat || '/' || NEW.resource_id || '|Neuer Eintrag]] in der Kategorie ' || kat || '.',
            'kollektikon', jsonb_build_object('cat', NEW.cat, 'resource_id', NEW.resource_id), NULL);
  END IF;
  RETURN NEW;
END $$;
CREATE TRIGGER ereignis_kollektikon AFTER INSERT OR UPDATE OF menge ON public.kollektikon_counts
  FOR EACH ROW EXECUTE FUNCTION public.ereignis_kollektikon();

-- ── Realtime: Kalendertag und neue Ereignisse live auf der Spiel-Seite ─────
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_publication WHERE pubname = 'supabase_realtime') THEN
    IF NOT EXISTS (SELECT 1 FROM pg_publication_tables WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'settings') THEN
      ALTER PUBLICATION supabase_realtime ADD TABLE public.settings;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM pg_publication_tables WHERE pubname = 'supabase_realtime' AND schemaname = 'public' AND tablename = 'ereignisse') THEN
      ALTER PUBLICATION supabase_realtime ADD TABLE public.ereignisse;
    END IF;
  END IF;
END $$;

NOTIFY pgrst, 'reload schema';
