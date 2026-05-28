-- 012_nscs.sql only granted SELECT on nscs to authenticated.
-- INSERT/UPDATE/DELETE were missing, causing "permission denied" on DM writes.
GRANT INSERT, UPDATE, DELETE ON public.nscs TO authenticated;
