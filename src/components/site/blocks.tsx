import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import architecture from "@/assets/arquitectura-contemporanea.jpg";

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: ReactNode }) {
  return (
    <section className={`page-masthead ${eyebrow === "Información legal" ? "page-masthead-legal" : ""}`}>
      <div className="container-site masthead-layout">
        <p className="editorial-kicker text-bronze masthead-label">{eyebrow}</p>
        <h1 className="masthead-title">{title}</h1>
        {intro && <div className="masthead-intro text-muted-foreground">{intro}</div>}
        {eyebrow !== "Información legal" && <figure className="masthead-photo"><img src={architecture} alt="Arquitectura contemporánea de piedra clara, imagen ilustrativa" width={1600} height={1008} loading="lazy" /></figure>}
      </div>
    </section>
  );
}

/** Two-column editorial section: label on the left, content on the right. */
export function Section({ label, title, children, id }: { label: string; title?: string; children: ReactNode; id?: string }) {
  return (
    <section id={id} className="editorial-section">
      <div className="container-site grid gap-8 md:grid-cols-12">
        <p className="editorial-kicker text-bronze md:col-span-3 md:items-start md:pt-3">{label}</p>
        <div className="min-w-0 md:col-span-8 md:col-start-5">
          {title && <h2 className="mb-10 max-w-3xl text-3xl leading-tight md:text-[3.25rem]">{title}</h2>}
          {children}
        </div>
      </div>
    </section>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((it) => (
        <details key={it.q} className="group py-6">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-serif text-xl">
            {it.q}
            <span aria-hidden className="mt-1 text-muted-foreground transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{it.a}</p>
        </details>
      ))}
    </div>
  );
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
  };
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function ContactBand({
  title = "Hablemos de vuestra forma de trabajar.",
  text = "Cada despacho tiene su dinámica de trabajo. Conocerla es el primer paso para valorar una colaboración procesal adecuada.",
}: { title?: string; text?: string }) {
  return (
    <section className="contact-band bg-ink text-ink-foreground">
      <div className="container-site grid gap-10 py-16 md:grid-cols-12 md:py-24">
        <p className="editorial-kicker text-ink-foreground/65 md:col-span-12">Contacto profesional</p>
        <h2 className="text-4xl leading-[1.08] text-ink-foreground md:col-span-7 md:text-[3.75rem]">{title}</h2>
        <div className="md:col-span-4 md:col-start-9">
          <p className="leading-relaxed text-ink-foreground/70">{text}</p>
          <Button asChild variant="editorialInverse" className="mt-6"><a href={SITE.contactHref}>Contactar por correo electrónico<ArrowUpRight /></a></Button>
        </div>
        <div className="flex flex-wrap gap-x-12 gap-y-4 border-t border-ink-foreground/20 pt-8 md:col-span-12">
          <a href={SITE.contactHref} className="contact-address link-quiet break-all font-serif">{SITE.email}</a>
        </div>
      </div>
    </section>
  );
}

export function Numbered({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ol>
      {items.map((it, i) => (
        <li key={it.title} className="editorial-service">
          <span className="pt-1 font-serif text-xl text-bronze">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="text-2xl leading-tight md:text-3xl">{it.title}</h3>
          <p className="leading-relaxed text-muted-foreground">{it.text}</p>
        </li>
      ))}
    </ol>
  );
}
