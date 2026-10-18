import { createFileRoute } from "@tanstack/react-router";
import { seo, SITE } from "@/lib/site";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contacto")({
  head: () => seo({
    title: "Contacto profesional | MMC Procuradores",
    description: "Contacta con MMC Procuradores para valorar una colaboración o consultar la gestión de un procedimiento. Teléfono 644 20 61 06.",
    path: "/contacto",
  }),
  component: Page,
});

function Page() {
  return (
    <section className="container-site grid gap-14 py-12 md:grid-cols-12 md:py-20">
      <div className="md:col-span-5">
        <p className="editorial-kicker text-bronze">Contacto profesional</p>
        <h1 className="mt-6 text-[2.5rem] leading-[1.05] md:text-[4.2rem]">Hablemos de vuestra forma de trabajar.</h1>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">Cada despacho tiene su dinámica de trabajo. Conocerla es el primer paso para valorar una colaboración procesal adecuada.</p>
        <dl className="mt-12 space-y-6 border-t border-rule pt-8">
          <div><dt className="eyebrow">Teléfono</dt><dd className="mt-2 font-serif text-2xl"><a href={SITE.phoneHref} className="link-quiet">{SITE.phone}</a></dd></div>
          <div><dt className="eyebrow">Correo electrónico</dt><dd className="mt-2 text-base break-words"><a href={`mailto:${SITE.email}`} className="link-quiet">{SITE.email}</a></dd></div>
        </dl>
      </div>
      <div className="min-w-0 border-t border-bronze pt-8 md:col-span-6 md:col-start-7">
        <ContactForm />
      </div>
    </section>
  );
}
