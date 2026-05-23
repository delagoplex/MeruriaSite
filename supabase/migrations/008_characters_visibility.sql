-- Add visibility flag to characters (false = hidden from other players)
ALTER TABLE public.characters
  ADD COLUMN visible BOOLEAN NOT NULL DEFAULT false;

-- DM can update any character (needed for visibility toggling)
CREATE POLICY "dm updates all" ON public.characters
  FOR UPDATE USING (public.is_dm());

-- Replace owner-only SELECT with one that also allows seeing
-- other players' visible Spielercharaktere
DROP POLICY "owner select" ON public.characters;
CREATE POLICY "player select" ON public.characters
  FOR SELECT USING (
    auth.uid() = owner_id
    OR (type = 'spieler' AND visible = true)
  );

-- Allow all authenticated users to read profile display names
-- (needed to group Spielercharaktere by player name)
DROP POLICY "users read own" ON public.profiles;
CREATE POLICY "auth read profiles" ON public.profiles
  FOR SELECT TO authenticated USING (true);
