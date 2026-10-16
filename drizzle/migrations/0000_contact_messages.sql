CREATE TABLE public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 120),
  firm text CHECK (char_length(firm) <= 160),
  email text NOT NULL CHECK (char_length(email) BETWEEN 5 AND 255),
  phone text CHECK (char_length(phone) <= 40),
  message text NOT NULL CHECK (char_length(message) BETWEEN 10 AND 4000),
  privacy_accepted boolean NOT NULL DEFAULT false CHECK (privacy_accepted = true),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.contact_messages TO anon, authenticated;
GRANT ALL ON public.contact_messages TO service_role;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can submit contact messages" ON public.contact_messages
FOR INSERT TO anon, authenticated WITH CHECK (privacy_accepted = true);