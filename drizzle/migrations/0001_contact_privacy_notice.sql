ALTER TABLE public.contact_messages ADD COLUMN collaboration_type text;
ALTER TABLE public.contact_messages ADD COLUMN privacy_notice_version text;
ALTER TABLE public.contact_messages DROP CONSTRAINT contact_messages_privacy_accepted_check;
COMMENT ON COLUMN public.contact_messages.privacy_accepted IS 'DEPRECATED: historical consent records only. New inquiries rely on requested precontractual measures and privacy_notice_version, not generic consent.';
ALTER TABLE public.contact_messages ADD CONSTRAINT contact_collaboration_type_check CHECK (collaboration_type IS NULL OR collaboration_type IN ('colaboracion-despacho','representacion-procesal','civil-ejecuciones','familia','bancario','otros'));
ALTER POLICY "Public can submit contact messages" ON public.contact_messages WITH CHECK (privacy_accepted = true OR (privacy_notice_version = '2026-10-18' AND collaboration_type IS NOT NULL));
GRANT INSERT ON public.contact_messages TO anon, authenticated;
REVOKE SELECT, UPDATE, DELETE ON public.contact_messages FROM anon, authenticated;
GRANT ALL ON public.contact_messages TO service_role;