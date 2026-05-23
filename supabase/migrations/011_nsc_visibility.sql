-- Extend player SELECT to include any visible character (not just type='spieler')
-- so NSCs marked visible=true appear on the NSC page for all players.
DROP POLICY "player select" ON public.characters;
CREATE POLICY "player select" ON public.characters
  FOR SELECT USING (
    auth.uid() = owner_id
    OR visible = true
  );
