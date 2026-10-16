import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: ReactNode }) {
  return (
    <section className="container-site pt-20 pb-16 md:pt-28 md:pb-20">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-6 max-w-4xl text-[2.6rem] leading-[1.05] md:text-[4.25rem]">{title}</h1>
      {intro && <div className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</div>}
    </section>
  );
}

/** Two-column editorial section: label on the left, content on the right. */
export function Section({ label, title, children, id }: { label: string; title?: string; children: ReactNode; id?: string }) {
  return (
    <section id={id} className="container-site border-t border-rule py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-12">
        <p className="eyebrow md:col-span-3 md:pt-3">{label}</p>
        <div className="md:col-span-9">
          {title && <h2 className="mb-10 max-w-3xl text-3xl leading-tight md:text-[2.75rem]">{title}</h2>}
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
    <section className="container-site border-t border-rule py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <h2 className="text-3xl leading-tight md:text-5xl">{title}</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{text}</p>
          <p className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <a href="tel:+34644206106" className="link-quiet">644 20 61 06</a>
            <a href="mailto:mmc.procurador@outlook.es" className="link-quiet">mmc.procurador@outlook.es</a>
          </p>
        </div>
        <div className="md:col-span-4 md:text-right">
          <Link to="/contacto" className="inline-block bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90">
            Contacto profesional
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Numbered({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ol className="grid gap-x-12 gap-y-12 md:grid-cols-2">
      {items.map((it, i) => (
        <li key={it.title} className="border-t border-border pt-6">
          <span className="font-serif text-sm text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-3 text-2xl">{it.title}</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">{it.text}</p>
        </li>
      ))}
    </ol>
  );
}
