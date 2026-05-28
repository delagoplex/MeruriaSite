-- 016_karte.sql hat auf karte_maps nur SELECT gegrantet.
-- INSERT/UPDATE/DELETE fehlten → PostgreSQL blockte vor RLS → 403.
-- RLS-Policies (dm insert/update/delete) greifen nur, wenn der Basis-Grant sitzt.
GRANT INSERT, UPDATE, DELETE ON public.karte_maps TO authenticated;
