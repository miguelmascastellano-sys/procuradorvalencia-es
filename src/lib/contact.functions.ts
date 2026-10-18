import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { contactSchema, contactSpamError, PRIVACY_NOTICE_VERSION } from "@/lib/contact-schema";

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const spamError = contactSpamError(data);
    if (spamError) return { ok: false as const, error: spamError };

    const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
    const client = createClient(process.env["SUPABASE_URL"]!, key, {
      auth: { persistSession: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });

    const { error } = await client.from("contact_messages").insert({
      name: data.name,
      firm: data.firm || null,
      email: data.email,
      phone: data.phone || null,
      message: data.message,
      privacy_accepted: false,
      privacy_notice_version: PRIVACY_NOTICE_VERSION,
      collaboration_type: data.collaborationType,
    });
    if (error) {
      console.error("contact insert failed");
      return { ok: false as const, error: "No se ha podido enviar la consulta. Inténtalo de nuevo o escríbenos por correo." };
    }
    return { ok: true as const };
  });
