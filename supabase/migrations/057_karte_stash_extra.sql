-- Kartenlager: restliche Hexdaten (Tags, Ressourcen, Kolonie, Erkundung, Reveal, Bildposition …) mitführen,
-- damit ein Hex beim Weg ins Lager und zurück nichts verliert.
ALTER TABLE public.karte_stash ADD COLUMN IF NOT EXISTS extra JSONB NOT NULL DEFAULT '{}'::jsonb;
NOTIFY pgrst, 'reload schema';
