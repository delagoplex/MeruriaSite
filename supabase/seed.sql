-- seed.sql — Testdaten NUR für die lokale Entwicklungsdatenbank.
-- Wird bei `npm run db:reset` nach allen Migrationen ausgeführt. Nie gegen die echte Datenbank laufen lassen.
--
-- Lokale Testkonten (gibt es nur auf deinem Rechner):
--   DM       dm@meruria.test       Passwort: ZJxIwf1lFxYSXCmW
--   Spieler  spieler@meruria.test  Passwort: -0T93NKTezpgRsU6

DO $$
DECLARE
  dm_id     uuid := '00000000-0000-4000-8000-0000000000d1';
  player_id uuid := '00000000-0000-4000-8000-0000000000a1';
BEGIN
  INSERT INTO auth.users (
    instance_id, id, aud, role, email, encrypted_password, email_confirmed_at,
    raw_app_meta_data, raw_user_meta_data, created_at, updated_at,
    confirmation_token, recovery_token, email_change, email_change_token_new
  ) VALUES
    ('00000000-0000-0000-0000-000000000000', dm_id, 'authenticated', 'authenticated', 'dm@meruria.test',
     extensions.crypt('ZJxIwf1lFxYSXCmW', extensions.gen_salt('bf')), now(),
     '{"provider":"email","providers":["email"]}', '{}', now(), now(), '', '', '', ''),
    ('00000000-0000-0000-0000-000000000000', player_id, 'authenticated', 'authenticated', 'spieler@meruria.test',
     extensions.crypt('-0T93NKTezpgRsU6', extensions.gen_salt('bf')), now(),
     '{"provider":"email","providers":["email"]}', '{}', now(), now(), '', '', '', '');

  INSERT INTO auth.identities (id, user_id, provider_id, identity_data, provider, last_sign_in_at, created_at, updated_at)
  VALUES
    (gen_random_uuid(), dm_id,     dm_id::text,     jsonb_build_object('sub', dm_id::text,     'email', 'dm@meruria.test'),      'email', now(), now(), now()),
    (gen_random_uuid(), player_id, player_id::text, jsonb_build_object('sub', player_id::text, 'email', 'spieler@meruria.test'), 'email', now(), now(), now());

  -- handle_new_user hat die Profile schon angelegt (alle als 'player'); hier ohne Login, also ist der Rollenwechsel erlaubt
  UPDATE public.profiles SET role = 'dm', display_name = 'Test-DM'      WHERE id = dm_id;
  UPDATE public.profiles SET             display_name = 'Test-Spieler' WHERE id = player_id;
END $$;
