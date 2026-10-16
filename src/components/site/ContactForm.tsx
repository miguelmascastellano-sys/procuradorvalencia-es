import { useRef, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { submitContact } from "@/lib/contact.functions";

type Status = "idle" | "sending" | "sent" | "error";

const field = "mt-2 w-full border-0 border-b border-input bg-transparent px-0 py-3 text-base outline-none transition-colors focus:border-foreground focus-visible:outline-none";
const label = "text-xs tracking-[0.12em] uppercase text-muted-foreground";

export function ContactForm() {
  const send = useServerFn(submitContact);
  const startedAt = useRef(Date.now());
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      firm: String(fd.get("firm") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      message: String(fd.get("message") ?? ""),
      privacy: fd.get("privacy") === "on",
      website: String(fd.get("website") ?? ""),
      elapsedMs: Date.now() - startedAt.current,
    };
    if (!payload.privacy) {
      setStatus("error");
      setError("Debes aceptar la política de privacidad.");
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const res = await send({ data: payload as never });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setError(res.error);
      }
    } catch (err) {
      setStatus("error");
      const msg = err instanceof Error ? err.message : "";
      setError(msg.includes("[") ? "Revisa los campos del formulario." : "No se ha podido enviar la consulta. Inténtalo de nuevo.");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="border-t border-rule pt-8">
        <p className="font-serif text-3xl">Consulta recibida.</p>
        <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
          Gracias por contactar con Mas Castellano Procurador. Revisaremos tu mensaje y responderemos a la mayor brevedad.
        </p>
        <button type="button" onClick={() => { startedAt.current = Date.now(); setStatus("idle"); }} className="link-quiet mt-6 text-sm">
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate={false} className="grid gap-8" aria-describedby="form-nota">
      <div className="grid gap-8 md:grid-cols-2">
        <label className="block"><span className={label}>Nombre *</span>
          <input name="name" required minLength={2} maxLength={120} autoComplete="name" className={field} /></label>
        <label className="block"><span className={label}>Despacho o empresa</span>
          <input name="firm" maxLength={160} autoComplete="organization" className={field} /></label>
        <label className="block"><span className={label}>Correo electrónico *</span>
          <input name="email" type="email" required maxLength={255} autoComplete="email" className={field} /></label>
        <label className="block"><span className={label}>Teléfono (opcional)</span>
          <input name="phone" type="tel" maxLength={40} autoComplete="tel" className={field} /></label>
      </div>
      <label className="block"><span className={label}>Mensaje *</span>
        <textarea name="message" required minLength={10} maxLength={4000} rows={5} className={`${field} resize-y`} /></label>

      {/* Honeypot: hidden from people, visible to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>Sitio web<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
        <input type="checkbox" name="privacy" required className="mt-1 h-4 w-4 accent-primary" />
        <span>
          He leído y acepto la <Link to="/politica-privacidad" className="underline underline-offset-2">política de privacidad</Link>. Los datos se utilizarán únicamente para atender esta consulta.
        </span>
      </label>

      {status === "error" && <p role="alert" className="text-sm text-destructive">{error}</p>}

      <div className="flex flex-wrap items-center gap-6">
        <button type="submit" disabled={status === "sending"} className="bg-primary px-7 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60">
          {status === "sending" ? "Enviando…" : "Enviar consulta"}
        </button>
        <p id="form-nota" className="text-xs text-muted-foreground">* Campos obligatorios</p>
      </div>
    </form>
  );
}
