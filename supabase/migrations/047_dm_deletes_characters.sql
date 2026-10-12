-- DM can delete any character (Charakterverwaltung). Players keep deleting only their own ("owner delete").
CREATE POLICY "dm deletes all" ON public.characters
  FOR DELETE USING (public.is_dm());

NOTIFY pgrst, 'reload schema';
