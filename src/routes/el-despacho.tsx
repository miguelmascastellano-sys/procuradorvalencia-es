import { createFileRoute, Link } from "@tanstack/react-router";
import { seo, personJsonLd, breadcrumbJsonLd } from "@/lib/site";
import { ATTRIBUTES } from "@/lib/services";
import { ContactBand, JsonLd, Numbered, PageHeader, Section } from "@/components/site/blocks";
import despachoTrabajo from "@/assets/despacho-trabajo.jpg";

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
      <figure className="container-site pb-4">
        <img
          src={despachoTrabajo}
          alt="Detalle de un escritorio de trabajo jurídico: expedientes ordenados, pluma y gafas"
          width={1200}
          height={1408}
          loading="lazy"
          className="max-h-[32rem] w-full object-cover"
        />
      </figure>
      <Section label="Punto de partida">
        <div className="grid gap-12 md:grid-cols-12">
          <p className="font-serif text-3xl leading-snug md:col-span-6 md:text-4xl">Quien ha trabajado dentro de un despacho sabe qué ocurre cuando una notificación llega tarde o un asunto pierde seguimiento.</p>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-5 md:col-start-8">
            <p>El abogado necesita saber qué ha entrado, qué se ha presentado y qué está pendiente, sin tener que preguntarlo.</p>
            <p>Esa es la base de la forma de trabajar de MMC Procuradores: organización de la información, seguimiento de cada actuación y un interlocutor directo durante toda la tramitación.</p>
          </div>
        </div>
      </Section>
      <Section label="Atributos" title="Criterio, organización e interlocución directa.">
        <Numbered items={ATTRIBUTES} />
      </Section>
      <Section label="El profesional" title="Miguel Mas Castellano. Procurador de los Tribunales.">
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p className="text-foreground">Mi experiencia como oficial habilitado en despachos con una importante carga de procedimientos bancarios, ejecuciones y gestión procesal me ha permitido conocer de cerca el funcionamiento diario de un despacho y las necesidades que surgen durante la tramitación de los asuntos.</p>
          <p>Desde MMC Procuradores, desarrollo una forma de trabajar basada en la organización, el seguimiento procesal y la comunicación directa con los profesionales con los que colaboro.</p>
          <p>Una manera de entender la procura desde la experiencia práctica y las necesidades reales del procedimiento.</p>
        </div>
        <Link to="/procurador-para-abogados" className="link-quiet mt-10 inline-block text-sm">Cómo colaboro con despachos →</Link>
      </Section>
      <ContactBand />
    </>
  );
}
