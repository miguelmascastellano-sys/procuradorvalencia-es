REVOKE INSERT ON TABLE public.contact_messages FROM anon, authenticated;
DROP POLICY IF EXISTS "Public can submit contact messages" ON public.contact_messages;
COMMENT ON TABLE public.contact_messages IS 'DEPRECATED: historical web inquiries retained for their original purpose; new contact is email-only and public submission is disabled.';