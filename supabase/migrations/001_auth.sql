-- profiles table linked to auth.users
CREATE TABLE public.profiles (
  id           UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role         TEXT NOT NULL DEFAULT 'player' CHECK (role IN ('player','dm')),
  display_name TEXT
);

-- helper used in RLS policies
CREATE FUNCTION public.is_dm()
RETURNS BOOLEAN LANGUAGE sql SECURITY DEFINER
AS $$ SELECT EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'dm') $$;

-- auto-create profile on signup
CREATE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER
AS $$ BEGIN INSERT INTO public.profiles (id) VALUES (NEW.id); RETURN NEW; END $$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "users read own"   ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "dm reads all"     ON public.profiles FOR SELECT USING (public.is_dm());
CREATE POLICY "users update own" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "dm updates all"   ON public.profiles FOR UPDATE USING (public.is_dm());
