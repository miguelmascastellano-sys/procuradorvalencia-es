import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Indica tu nombre.").max(120),
  firm: z.string().trim().max(160).optional().default(""),
  email: z.string().trim().email("Introduce un correo electrónico válido.").max(255),
  phone: z
    .string()
    .trim()
    .max(40)
    .regex(/^[0-9+()\s.-]*$/, "El teléfono contiene caracteres no válidos.")
    .optional()
    .default(""),
  message: z.string().trim().min(10, "El mensaje es demasiado breve.").max(4000),
  privacy: z.literal(true, { errorMap: () => ({ message: "Debes aceptar la política de privacidad." }) }),
  website: z.string().max(0).optional().default(""), // honeypot
  elapsedMs: z.number().int().nonnegative(),
});

export type ContactInput = z.input<typeof contactSchema>;

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    // Antispam: honeypot filled or form sent implausibly fast -> silently accept.
    if (data.website || data.elapsedMs < 2500) return { ok: true as const };

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
      privacy_accepted: true,
    });
    if (error) {
      console.error("contact insert failed", error.message);
      return { ok: false as const, error: "No se ha podido enviar la consulta. Inténtalo de nuevo o escríbenos por correo." };
    }
    return { ok: true as const };
  });
