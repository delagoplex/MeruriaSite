-- Add banner_url to karte_hexes for player-facing panel banner image
ALTER TABLE public.karte_hexes
  ADD COLUMN IF NOT EXISTS banner_url TEXT;
