import { useRef, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { submitContact } from "@/lib/contact.functions";
import { contactSchema, COLLABORATION_TYPES } from "@/lib/contact-schema";
import { Button } from "@/components/ui/button";

type Status = "idle" | "sending" | "sent" | "error";
const field = "mt-2 min-h-12 w-full rounded-none border-0 border-b border-input bg-transparent px-0 py-3 text-base transition-colors focus:border-primary";
const label = "text-sm font-medium text-foreground";
export function ContactForm() {
  const send = useServerFn(submitContact);
  const startedAt = useRef(Date.now());
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const fd = new FormData(form);
    const parsed = contactSchema.safeParse({ name: fd.get("name"), firm: fd.get("firm"), email: fd.get("email"), phone: fd.get("phone"), collaborationType: fd.get("collaborationType"), message: fd.get("message"), website: fd.get("website"), elapsedMs: Date.now() - startedAt.current });
    setError("");
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) { const key = String(issue.path[0]); if (!next[key]) next[key] = issue.message; }
      setErrors(next); setStatus("error");
      const first = form.elements.namedItem(Object.keys(next)[0] ?? "name");
      if (first instanceof HTMLElement) first.focus();
      return;
    }
    setErrors({}); setStatus("sending");
    try {
      const response = await send({ data: parsed.data });
      if (response.ok) { setStatus("sent"); form.reset(); }
      else { setStatus("error"); setError(response.error); }
    } catch { setStatus("error"); setError("No se ha podido enviar. Inténtalo de nuevo o contacta por correo electrónico."); }
  }
  const errorFor = (name: string) => errors[name] ? <p id={`${name}-error`} role="alert" className="mt-2 text-sm text-destructive">{errors[name]}</p> : null;
  if (status === "sent") return <div role="status" className="border-y border-border py-10"><CheckCircle2 className="h-8 w-8 text-primary" /><h2 className="mt-5 text-3xl">Consulta recibida.</h2><p className="mt-4 leading-relaxed text-muted-foreground">Tu mensaje ha quedado registrado para su revisión por MMC Procuradores.</p><Button variant="outline" className="mt-6" onClick={() => { startedAt.current = Date.now(); setStatus("idle"); }}>Enviar otra consulta</Button></div>;
  return <form onSubmit={onSubmit} noValidate className="grid gap-6" aria-describedby="form-privacidad form-nota" aria-busy={status === "sending"}>
    <div className="grid gap-6 md:grid-cols-2">
      <label className="block"><span className={label}>Nombre *</span><input name="name" required minLength={2} maxLength={120} autoComplete="name" className={field} aria-invalid={!!errors["name"]} aria-describedby={errors["name"] ? "name-error" : undefined} />{errorFor("name")}</label>
      <label className="block"><span className={label}>Despacho o entidad (opcional)</span><input name="firm" maxLength={160} autoComplete="organization" className={field} />{errorFor("firm")}</label>
      <label className="block"><span className={label}>Correo electrónico *</span><input name="email" type="email" required maxLength={255} autoComplete="email" className={field} aria-invalid={!!errors["email"]} aria-describedby={errors["email"] ? "email-error" : undefined} />{errorFor("email")}</label>
      <label className="block"><span className={label}>Teléfono (opcional)</span><input name="phone" type="tel" maxLength={40} autoComplete="tel" className={field} aria-invalid={!!errors["phone"]} aria-describedby={errors["phone"] ? "phone-error" : undefined} />{errorFor("phone")}</label>
    </div>
    <label className="block"><span className={label}>Tipo de colaboración solicitada *</span><select name="collaborationType" required defaultValue="" className={field} aria-invalid={!!errors["collaborationType"]} aria-describedby={errors["collaborationType"] ? "collaborationType-error" : undefined}><option value="" disabled>Selecciona una opción</option>{COLLABORATION_TYPES.map(type => <option value={type.value} key={type.value}>{type.label}</option>)}</select>{errorFor("collaborationType")}</label>
    <label className="block"><span className={label}>Mensaje *</span><textarea name="message" required minLength={10} maxLength={4000} rows={5} className={`${field} resize-y`} aria-invalid={!!errors["message"]} aria-describedby={errors["message"] ? "message-nota message-error" : "message-nota"} />{errorFor("message")}<span id="message-nota" className="mt-2 block text-xs leading-relaxed text-muted-foreground">No incluyas documentos judiciales, datos de terceros ni información confidencial en esta primera consulta.</span></label>
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden"><label>Sitio web<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <p id="form-privacidad" className="border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground"><strong className="text-foreground">Información sobre tus datos.</strong> Responsable: Miguel Mas Castellano, Procurador de los Tribunales (MMC Procuradores). Utilizaremos tus datos para responder a tu solicitud y valorar la colaboración, como medidas precontractuales solicitadas por ti; para otras consultas profesionales, conforme al interés legítimo de atenderlas. Sin usos publicitarios. Puedes ejercer tus derechos en mmc.procurador@outlook.es. <Link to="/politica-privacidad" className="underline underline-offset-4">Más información sobre privacidad</Link>.</p>
    {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
    <div className="flex flex-wrap items-center gap-5"><Button type="submit" size="lg" disabled={status === "sending"}>{status === "sending" ? "Enviando…" : "Enviar consulta"}<ArrowUpRight /></Button><p id="form-nota" className="text-xs text-muted-foreground">* Campos obligatorios</p></div>
  </form>;
}
