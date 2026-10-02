-- 039_security_hardening.sql
-- Schließt Lücken aus dem Code-Review. Danach muss die aktuelle App-Version deployt sein
-- (neuer-charakter.jsx nutzt jetzt check_roll_token / redeem_roll_token statt direktem Tabellenzugriff).

-- ───────────────────────────────────────────────────────────────────────────
-- 1. profiles: Spieler dürfen NICHT ihre eigene Rolle ändern
--    (vorher: "users update own" erlaubte UPDATE auf alle Spalten, also auch role = 'dm')
-- ───────────────────────────────────────────────────────────────────────────
REVOKE ALL ON public.profiles FROM anon;
REVOKE UPDATE ON public.profiles FROM authenticated;
GRANT  UPDATE (display_name) ON public.profiles TO authenticated;

DROP POLICY "users update own" ON public.profiles;
CREATE POLICY "users update own" ON public.profiles
  FOR UPDATE USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

-- Zweite Absicherung: Rollenwechsel nur über SQL-Editor / service_role (dort ist auth.uid() NULL)
CREATE OR REPLACE FUNCTION public.profiles_guard_role()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public, pg_temp AS $$
BEGIN
  IF NEW.role IS DISTINCT FROM OLD.role AND auth.uid() IS NOT NULL THEN
    RAISE EXCEPTION 'Die Rolle kann nur im SQL-Editor geändert werden' USING ERRCODE = '42501';
  END IF;
  RETURN NEW;
END $$;

CREATE TRIGGER profiles_guard_role
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.profiles_guard_role();

-- ───────────────────────────────────────────────────────────────────────────
-- 2. SECURITY-DEFINER-Funktionen: feste search_path, damit niemand Objekte unterschieben kann
-- ───────────────────────────────────────────────────────────────────────────
ALTER FUNCTION public.is_dm()           SET search_path = public, pg_temp;
ALTER FUNCTION public.handle_new_user() SET search_path = public, pg_temp;
ALTER FUNCTION public.set_char_owner()  SET search_path = public, pg_temp;

-- ───────────────────────────────────────────────────────────────────────────
-- 3. set_resource_visible: nur der DM (lief vorher mit Owner-Rechten für jeden Eingeloggten)
-- ───────────────────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION public.set_resource_visible(
  p_cat         TEXT,
  p_resource_id TEXT,
  p_visible     BOOLEAN
) RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pg_temp AS $$
BEGIN
  IF NOT public.is_dm() THEN
    RAISE EXCEPTION 'Nur der DM darf die Sichtbarkeit ändern' USING ERRCODE = '42501';
  END IF;

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

REVOKE EXECUTE ON FUNCTION public.set_resource_visible(TEXT, TEXT, BOOLEAN) FROM PUBLIC, anon;
GRANT  EXECUTE ON FUNCTION public.set_resource_visible(TEXT, TEXT, BOOLEAN) TO authenticated;

-- ───────────────────────────────────────────────────────────────────────────
-- 4. mission_applications: Bewerbung nur "pending" und nur mit eigener Figur
-- ───────────────────────────────────────────────────────────────────────────
DROP POLICY "player insert" ON public.mission_applications;
CREATE POLICY "player insert" ON public.mission_applications
  FOR INSERT WITH CHECK (
    auth.uid() = player_id
    AND app_status = 'pending'
    AND EXISTS (
      SELECT 1 FROM public.characters c
      WHERE c.id = character_id AND c.owner_id = auth.uid()
    )
  );

-- ───────────────────────────────────────────────────────────────────────────
-- 5. roll_tokens: Spieler dürfen die Tabelle nicht mehr durchsuchen oder beliebig ändern.
--    Prüfen und Einlösen laufen über zwei Funktionen, die nur den eigenen Code kennen müssen.
-- ───────────────────────────────────────────────────────────────────────────
DROP POLICY "player select" ON public.roll_tokens;
DROP POLICY "player redeem" ON public.roll_tokens;

-- Spieler sehen nur Tokens, die sie selbst eingelöst haben
CREATE POLICY "player select own" ON public.roll_tokens
  FOR SELECT TO authenticated USING (used_by = auth.uid());

-- Liefert 'ok' (gültig und unbenutzt), 'used' (schon eingelöst) oder 'unknown'
CREATE OR REPLACE FUNCTION public.check_roll_token(p_code TEXT)
RETURNS TEXT LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pg_temp AS $$
DECLARE
  v_used  UUID;
  v_found BOOLEAN;
BEGIN
  IF auth.uid() IS NULL THEN RETURN 'unknown'; END IF;
  SELECT used_by, TRUE INTO v_used, v_found FROM public.roll_tokens WHERE code = p_code;
  IF NOT COALESCE(v_found, FALSE) THEN RETURN 'unknown'; END IF;
  IF v_used IS NOT NULL THEN RETURN 'used'; END IF;
  RETURN 'ok';
END $$;

-- Löst einen unbenutzten Token für den eingeloggten Spieler ein; TRUE, wenn es geklappt hat
CREATE OR REPLACE FUNCTION public.redeem_roll_token(p_code TEXT)
RETURNS BOOLEAN LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, pg_temp AS $$
DECLARE
  n INT;
BEGIN
  IF auth.uid() IS NULL THEN RETURN FALSE; END IF;
  UPDATE public.roll_tokens
     SET used_by = auth.uid(), used_at = NOW()
   WHERE code = p_code AND used_by IS NULL;
  GET DIAGNOSTICS n = ROW_COUNT;
  RETURN n > 0;
END $$;

REVOKE EXECUTE ON FUNCTION public.check_roll_token(TEXT)  FROM PUBLIC, anon;
REVOKE EXECUTE ON FUNCTION public.redeem_roll_token(TEXT) FROM PUBLIC, anon;
GRANT  EXECUTE ON FUNCTION public.check_roll_token(TEXT)  TO authenticated;
GRANT  EXECUTE ON FUNCTION public.redeem_roll_token(TEXT) TO authenticated;

-- ───────────────────────────────────────────────────────────────────────────
-- 6. characters: Besitzer dürfen visible / type / owner_id nicht selbst ändern
--    (die App sendet beim Speichern nie diese Spalten; nur der DM schaltet visible)
-- ───────────────────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION public.characters_guard()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public, pg_temp AS $$
BEGIN
  IF NOT public.is_dm() THEN
    IF TG_OP = 'INSERT' THEN
      NEW.visible := FALSE;
    ELSE
      NEW.visible  := OLD.visible;
      NEW.type     := OLD.type;
      NEW.owner_id := OLD.owner_id;
    END IF;
  END IF;
  RETURN NEW;
END $$;

CREATE TRIGGER characters_guard
  BEFORE INSERT OR UPDATE ON public.characters
  FOR EACH ROW EXECUTE FUNCTION public.characters_guard();
