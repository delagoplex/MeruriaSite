-- Division pages list NSC by rank: expose the rank in the public directory, gated by the same
-- per-player unlock as the division (a rank is only known together with the division).
CREATE OR REPLACE VIEW public.nsc_public_directory AS
  SELECT n.id,
         CASE WHEN n.field_visibility->>'name' = 'true' THEN n.name ELSE 'Unbekannt' END AS name,
         CASE WHEN n.field_visibility->>'bild' = 'true' THEN n.bild END AS bild,
         n.created_at,
         n.visible,
         CASE WHEN public.nsc_player_has_fact(n.id,'division') THEN n.division END AS division,
         CASE WHEN public.nsc_player_has_fact(n.id,'geburtstag') THEN n.geburtstag_doy END AS geburtstag_doy,
         CASE WHEN public.nsc_player_has_fact(n.id,'division') THEN n.rang END AS rang
  FROM public.nscs n WHERE n.visible = true;
GRANT SELECT ON public.nsc_public_directory TO authenticated;

NOTIFY pgrst, 'reload schema';
