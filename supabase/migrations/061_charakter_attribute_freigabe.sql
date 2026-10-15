-- 061: Attribute eines Spielercharakters legt der Spieler nur fest, wenn die Spielleitung den Charakter
--      dafür freigeschaltet hat (char_data.attributeFrei = true). Gewürfelt wird gemeinsam in Foundry.
--
-- characters_guard (041) wird erweitert. Für Nicht-DMs gilt:
--   INSERT: char_data.stats wird entfernt, attributeFrei ist false (neue Charaktere ohne Attribute), type ist spieler
--   UPDATE ohne Freigabe: stats und attributeFrei bleiben wie vorher
--   UPDATE mit Freigabe: stats dürfen geändert werden; attributeFrei darf nur zurück auf false (Abschluss)
-- Die Spielleitung (is_dm) darf alles.

CREATE OR REPLACE FUNCTION public.characters_guard()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public, pg_temp AS $$
DECLARE
  war_frei BOOLEAN;
BEGIN
  IF NOT public.is_dm() THEN
    IF TG_OP = 'INSERT' THEN
      NEW.visible := FALSE;
      NEW.type := 'spieler';
      NEW.char_data := (COALESCE(NEW.char_data, '{}'::jsonb) - 'stats') || jsonb_build_object('attributeFrei', false);
    ELSE
      NEW.visible  := OLD.visible;
      NEW.type     := OLD.type;
      NEW.owner_id := OLD.owner_id;

      war_frei := COALESCE(OLD.char_data->>'attributeFrei', 'false') = 'true';
      IF war_frei THEN
        -- freigeschaltet: Werte frei, die Freigabe kann nur beendet werden
        IF COALESCE(NEW.char_data->>'attributeFrei', 'false') <> 'true' THEN
          NEW.char_data := COALESCE(NEW.char_data, '{}'::jsonb) || jsonb_build_object('attributeFrei', false);
        END IF;
      ELSE
        -- gesperrt: Attribute und Freigabe bleiben, wie sie waren
        NEW.char_data := (COALESCE(NEW.char_data, '{}'::jsonb) - 'stats' - 'attributeFrei')
          || CASE WHEN OLD.char_data ? 'stats'
                  THEN jsonb_build_object('stats', OLD.char_data->'stats') ELSE '{}'::jsonb END
          || CASE WHEN OLD.char_data ? 'attributeFrei'
                  THEN jsonb_build_object('attributeFrei', OLD.char_data->'attributeFrei') ELSE '{}'::jsonb END;
      END IF;
    END IF;
  END IF;
  RETURN NEW;
END $$;

-- Trigger sicherstellen (er stammt aus 041; die echte Datenbank wurde vor der Migrationshistorie von Hand angelegt)
DROP TRIGGER IF EXISTS characters_guard ON public.characters;
CREATE TRIGGER characters_guard
  BEFORE INSERT OR UPDATE ON public.characters
  FOR EACH ROW EXECUTE FUNCTION public.characters_guard();
