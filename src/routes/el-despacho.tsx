import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { seo, personJsonLd, breadcrumbJsonLd, SITE } from "@/lib/site";
import { ATTRIBUTES } from "@/lib/services";
import { JsonLd, PageHeader, Section } from "@/components/site/blocks";
import { Button } from "@/components/ui/button";
import despachoTrabajo from "@/assets/arquitectura-contemporanea.jpg";

export const Route = createFileRoute("/el-despacho")({
  head: () => seo({
    title: "El despacho | MMC Procuradores",
    description: "MMC Procuradores: una firma de procura orientada a la colaboración con abogados y despachos, desde Valencia y con proyección nacional.",
    path: "/el-despacho",
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <JsonLd data={personJsonLd} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "El despacho", path: "/el-despacho" }])} />
      <PageHeader eyebrow="Mi forma de trabajar" title="La procura forma parte del funcionamiento diario del despacho." intro={<p>Una manera de trabajar construida desde dentro: primero en la gestión diaria de procedimientos, ahora como procurador al servicio de abogados y despachos.</p>} />
      <Section label="Punto de partida">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <figure className="md:col-span-5"><img src={despachoTrabajo} alt="Arquitectura contemporánea, imagen ilustrativa que no representa una oficina propia" width={1600} height={1008} loading="lazy" className="editorial-photo" /></figure>
          <div className="md:col-span-6 md:col-start-7"><p className="font-serif text-3xl leading-snug md:text-4xl">Quien ha trabajado dentro de un despacho sabe qué ocurre cuando una notificación llega tarde o un asunto pierde seguimiento.</p>
          <p className="mt-6 leading-relaxed text-muted-foreground">El abogado necesita saber qué ha entrado, qué se ha presentado y qué está pendiente, sin tener que preguntarlo.</p><p className="mt-4 leading-relaxed text-muted-foreground">Esa es la base de la forma de trabajar de MMC Procuradores: organización de la información, seguimiento de cada actuación y un interlocutor directo durante toda la tramitación.</p></div>
        </div>
      </Section>

      <section className="despacho-block" aria-labelledby="atributos-title">
        <div className="container-site grid gap-10 md:grid-cols-12">
          <p className="despacho-label md:col-span-3">Atributos</p>
          <div className="md:col-span-8 md:col-start-5">
            <h2 id="atributos-title" className="despacho-h2">Criterio, organización e interlocución directa.</h2>
            <ol className="despacho-attrs">
              {ATTRIBUTES.map((it, i) => (
                <li key={it.title}>
                  <span className="despacho-num" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="despacho-h3">{it.title}</h3>
                    <p className="despacho-text">{it.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="despacho-block" aria-labelledby="profesional-title">
        <div className="container-site grid gap-10 md:grid-cols-12">
          <p className="despacho-label md:col-span-3">El profesional</p>
          <div className="md:col-span-8 md:col-start-5">
            <h2 id="profesional-title" className="despacho-h2">Experiencia práctica. Criterio profesional.</h2>
            <p className="despacho-name">Miguel Mas Castellano<span>Procurador de los Tribunales</span></p>
            <div className="despacho-prose">
              <p>Mi experiencia como oficial habilitado en despachos con una importante carga de procedimientos bancarios, ejecuciones y gestión procesal me ha permitido conocer de cerca el funcionamiento diario de un despacho.</p>
              <p>También las necesidades que surgen durante la tramitación de los asuntos.</p>
              <p>Desde MMC Procuradores, desarrollo una forma de trabajar basada en la organización, el seguimiento procesal y la comunicación directa con los profesionales con los que colaboro.</p>
            </div>
            <blockquote className="despacho-quote">Una manera de entender la procura desde la experiencia práctica y las necesidades reales del procedimiento.</blockquote>
            <Link to="/procurador-para-abogados" className="despacho-link">Cómo colaboro con despachos <ArrowUpRight aria-hidden className="size-4" /></Link>
          </div>
        </div>
      </section>

      <section className="despacho-contact bg-ink text-ink-foreground" aria-labelledby="contacto-title">
        <div className="container-site grid gap-10 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-7">
            <p className="despacho-label despacho-label-inverse">Contacto profesional</p>
            <h2 id="contacto-title" className="mt-6 text-4xl leading-[1.1] text-ink-foreground md:text-[3.25rem]">Hablemos de vuestra forma de trabajar.</h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 md:self-end">
            <p className="text-[1.0625rem] leading-[1.7] text-ink-foreground/85">Desde Valencia y la Comunidad Valenciana, con colaboración profesional en el ámbito nacional según cada procedimiento.</p>
            <Button asChild variant="editorialInverse" className="mt-8"><a href={SITE.contactHref}>Contactar por correo electrónico<ArrowUpRight /></a></Button>
          </div>
          <div className="border-t border-ink-foreground/25 pt-8 md:col-span-12">
            <a href={SITE.contactHref} className="link-quiet break-all font-serif text-2xl md:text-4xl">{SITE.email}</a>
          </div>
        </div>
      </section>
    </>
  );
}
