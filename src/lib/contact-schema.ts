import { z } from "zod";
export const PRIVACY_NOTICE_VERSION = "2026-10-18";
export const COLLABORATION_TYPES = [
  { value: "colaboracion-despacho", label: "Colaboración con un despacho" },
  { value: "representacion-procesal", label: "Representación procesal" },
  { value: "civil-ejecuciones", label: "Procedimientos civiles y ejecuciones" },
  { value: "familia", label: "Procedimientos de familia" },
  { value: "bancario", label: "Procedimientos bancarios y reclamaciones" },
  { value: "otros", label: "Otra consulta profesional" },
] as const;
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Indica tu nombre.").max(120, "El nombre es demasiado largo."),
  firm: z.string().trim().max(160).optional().default(""),
  email: z.string().trim().email("Introduce un correo electrónico válido.").max(255),
  phone: z.string().trim().max(40).regex(/^[0-9+()\s.-]*$/, "El teléfono contiene caracteres no válidos.").optional().default(""),
  collaborationType: z.enum(["colaboracion-despacho", "representacion-procesal", "civil-ejecuciones", "familia", "bancario", "otros"], { errorMap: () => ({ message: "Selecciona el tipo de colaboración." }) }),
  message: z.string().trim().min(10, "Describe brevemente tu consulta (al menos 10 caracteres).").max(4000),
  website: z.string().max(200).optional().default(""),
  elapsedMs: z.number().int().nonnegative(),
});
export type ContactInput = z.input<typeof contactSchema>;
export function contactSpamError(data: Pick<ContactInput, "website" | "elapsedMs">): string | null {
  if (data.website) return "No se ha podido verificar el envío. Contacta por teléfono o correo electrónico.";
  if (data.elapsedMs < 2500) return "Espera unos segundos y vuelve a enviar la consulta.";
  return null;
}