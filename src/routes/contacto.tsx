import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { seo, SITE, breadcrumbJsonLd } from "@/lib/site";
import { JsonLd } from "@/components/site/blocks";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contacto")({
  head: () => seo({ title: "Contacto | Procurador en Valencia | MMC Procuradores", description: "Contacta con MMC Procuradores, procurador en Valencia: llamada o WhatsApp al 644 206 106, correo electrónico o formulario para valorar tu asunto.", path: "/contacto" }),
  component: Page,
});

const field = "w-full rounded-none border-0 border-b border-border bg-transparent px-0 py-3 text-base focus:border-primary focus:outline-none";

/** The form never stores or sends data itself: it composes a WhatsApp or email message the visitor sends. */
function Page() {
  const [error, setError] = useState("");
  function compose(e: FormEvent<HTMLFormElement>, via: "whatsapp" | "email") {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const name = String(d.get("nombre") ?? "").trim().slice(0, 100);
    const juzgado = String(d.get("juzgado") ?? "").trim().slice(0, 150);
    const msg = String(d.get("mensaje") ?? "").trim().slice(0, 1000);
    if (!name || !msg) { setError("Indica tu nombre y una breve descripción del asunto."); return; }
    setError("");
    const text = `Hola, soy ${name}.${juzgado ? ` Juzgado / procedimiento: ${juzgado}.` : ""}\n${msg}`;
    const url = via === "whatsapp"
      ? `${SITE.whatsappHref}?text=${encodeURIComponent(text)}`
      : `mailto:${SITE.email}?subject=${encodeURIComponent(SITE.contactSubject)}&body=${encodeURIComponent(text)}`;
    window.open(url, via === "whatsapp" ? "_blank" : "_self", "noopener");
  }
  return <>
    <JsonLd data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Contacto", path: "/contacto" }])} />
    <section className="contact-page bg-ink text-ink-foreground">
      <div className="container-site grid gap-8 py-14 md:grid-cols-12 md:py-20">
        <p className="editorial-kicker text-ink-foreground/70 md:col-span-12">Contacto · Procurador en Valencia</p>
        <h1 className="text-5xl leading-[1.05] text-ink-foreground md:col-span-9 md:text-7xl">Toda colaboración empieza por una conversación.</h1>
        <p className="max-w-md leading-relaxed text-ink-foreground/75 md:col-span-5">Llama, escribe por WhatsApp o por correo para valorar la representación procesal de tu asunto en Valencia.</p>
        <div className="space-y-3 md:col-span-6 md:col-start-7 md:self-end">
          <a href={SITE.phoneHref} className="contact-address link-quiet block font-serif">{SITE.phone}</a>
          <a href={SITE.contactHref} className="link-quiet block break-all">{SITE.email}</a>
          <p>{SITE.address} · Colegiado n.º {SITE.collegeNumber} ({SITE.college})</p>
          <div className="flex flex-wrap gap-4 pt-4"><Button asChild variant="inverse"><a href={SITE.phoneHref}>Llamar</a></Button><Button asChild variant="editorialInverse"><a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp<ArrowUpRight /></a></Button></div>
        </div>
      </div>
    </section>
    <section className="container-site grid gap-10 py-14 md:grid-cols-12 md:py-20">
      <div className="md:col-span-4"><p className="editorial-kicker text-bronze">Formulario</p><h2 className="mt-6 text-3xl leading-tight">Cuéntanos el asunto.</h2><p className="mt-5 text-sm leading-relaxed text-muted-foreground">Este formulario no guarda ningún dato: prepara un mensaje que tú envías desde WhatsApp o tu correo. No incluyas información confidencial ni datos de terceros innecesarios.</p><p className="mt-4 text-sm leading-relaxed text-muted-foreground">El contacto inicial no implica la aceptación de un encargo ni la atención de un plazo judicial.</p></div>
      <form className="space-y-8 md:col-span-7 md:col-start-6" onSubmit={(e) => compose(e, "whatsapp")} noValidate>
        <label className="block"><span className="text-sm">Nombre o despacho *</span><input name="nombre" required maxLength={100} autoComplete="name" className={field} /></label>
        <label className="block"><span className="text-sm">Juzgado o tipo de procedimiento</span><input name="juzgado" maxLength={150} className={field} /></label>
        <label className="block"><span className="text-sm">Breve descripción *</span><textarea name="mensaje" required maxLength={1000} rows={5} className={field} /></label>
        {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
        <div className="flex flex-wrap gap-4"><Button type="submit">Enviar por WhatsApp<ArrowUpRight /></Button><Button type="button" variant="outline" onClick={(e) => compose({ preventDefault() {}, currentTarget: e.currentTarget.form! } as unknown as FormEvent<HTMLFormElement>, "email")}>Enviar por correo</Button></div>
      </form>
    </section>
  </>;
}
