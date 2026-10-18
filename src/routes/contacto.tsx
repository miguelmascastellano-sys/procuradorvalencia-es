import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { seo, SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import architecture from "@/assets/arquitectura-contemporanea.jpg";

export const Route = createFileRoute("/contacto")({
  head: () => seo({ title: "Contacto por correo | MMC Procuradores", description: "Colaboración profesional con MMC Procuradores en Valencia y la Comunidad Valenciana. Escríbenos a mmc.procurador@outlook.es para valorar tu consulta.", path: "/contacto" }),
  component: Page,
});

function Page() {
  return <>
    <section className="contact-page bg-ink text-ink-foreground">
      <div className="container-site grid gap-8 py-14 md:grid-cols-12 md:py-20">
        <p className="editorial-kicker text-ink-foreground/70 md:col-span-12">Contacto profesional · MMC Procuradores</p>
        <h1 className="text-5xl leading-[1.05] text-ink-foreground md:col-span-9 md:text-7xl">Toda colaboración empieza por una conversación.</h1>
        <p className="max-w-md leading-relaxed text-ink-foreground/75 md:col-span-5">Escríbenos para conocer las necesidades de tu despacho y valorar la representación procesal de tus asuntos.</p>
        <div className="md:col-span-6 md:col-start-7 md:self-end">
          <a href={SITE.contactHref} className="contact-address link-quiet block break-all font-serif">{SITE.email}</a>
          <Button asChild variant="inverse" className="mt-7"><a href={SITE.contactHref}>Contactar por correo electrónico<ArrowUpRight /></a></Button>
        </div>
      </div>
    </section>
    <section className="container-site grid gap-10 py-14 md:grid-cols-12 md:py-20">
      <figure className="md:col-span-5"><img src={architecture} alt="Patio de arquitectura contemporánea, imagen ilustrativa sin relación con una sede propia" width={1600} height={1008} loading="lazy" className="w-full aspect-[4/3] object-cover" /></figure>
      <div className="md:col-span-5 md:col-start-8 md:self-center"><p className="editorial-kicker text-bronze">Antes de asumir un asunto</p><h2 className="mt-6 text-3xl leading-tight">Conocer el procedimiento. Acordar la forma de trabajar.</h2><p className="mt-5 leading-relaxed text-muted-foreground">Indica el ámbito territorial, el tipo de procedimiento y las necesidades de coordinación. No incluyas información confidencial ni datos de terceros innecesarios en esta primera comunicación.</p><p className="mt-4 text-sm leading-relaxed text-muted-foreground">El contacto inicial no implica la aceptación de un encargo ni la atención de un plazo judicial; es necesaria una confirmación expresa.</p></div>
    </section>
  </>;
}
