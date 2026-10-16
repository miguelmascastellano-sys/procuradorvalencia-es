import { createFileRoute, Link } from "@tanstack/react-router";
import { seo, organizationJsonLd } from "@/lib/site";
import { SERVICES, ATTRIBUTES } from "@/lib/services";
import { ContactBand, JsonLd, Section } from "@/components/site/blocks";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "Mas Castellano Procurador | Procurador de los Tribunales en Valencia",
      description:
        "La procura, desde dentro del procedimiento. Representación procesal y colaboración con despachos de abogados en Valencia, la Comunidad Valenciana y el ámbito nacional.",
      path: "/",
    }),
  component: Index,
});

function Index() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />

      {/* Hero */}
      <section className="container-site pt-20 pb-24 md:pt-32 md:pb-36">
        <p className="eyebrow">Mas Castellano Procurador</p>
        <h1 className="mt-10 max-w-5xl text-[3rem] leading-[1] md:text-[6rem]">
          La procura, desde dentro <em className="text-muted-foreground">del procedimiento.</em>
        </h1>
        <div className="mt-14 grid gap-10 border-t border-rule pt-10 md:grid-cols-12">
          <p className="text-lg leading-relaxed md:col-span-6 md:text-xl">
            Representación procesal y colaboración con despachos de abogados en Valencia, la Comunidad Valenciana y el ámbito nacional.
          </p>
          <div className="md:col-span-5 md:col-start-8">
            <p className="text-sm text-muted-foreground">Miguel Mas Castellano · Procurador de los Tribunales</p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link to="/el-despacho" className="bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90">
                Conocer mi forma de trabajar
              </Link>
              <Link to="/contacto" className="link-quiet text-sm">Contacto profesional →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciación */}
      <section className="bg-ink text-ink-foreground">
        <div className="container-site grid gap-12 py-24 md:grid-cols-12 md:py-32">
          <p className="text-[0.72rem] tracking-[0.18em] uppercase opacity-60 md:col-span-12">Una forma de entender la procura</p>
          <h2 className="text-4xl leading-[1.08] text-ink-foreground md:col-span-7 md:text-[3.4rem]">
            No basta con conocer el procedimiento. <em className="opacity-70">Hay que entender cómo trabaja el despacho.</em>
          </h2>
          <div className="space-y-6 text-lg leading-relaxed opacity-85 md:col-span-4 md:col-start-9 md:pt-3">
            <p>La experiencia en la gestión diaria de procedimientos permite comprender algo importante: la procura no funciona de manera aislada.</p>
            <p>Cada asunto requiere coordinación, información y una comunicación profesional que encaje con la dinámica del abogado.</p>
            <p>Mi forma de entender la profesión parte de esa realidad. Conocer las necesidades operativas del despacho, mantener el seguimiento de los asuntos encomendados y facilitar una interlocución directa durante la tramitación.</p>
          </div>
          <dl className="grid gap-10 border-t border-ink-foreground/20 pt-10 md:col-span-12 md:grid-cols-3">
            {ATTRIBUTES.map((a) => (
              <div key={a.title}>
                <dt className="font-serif text-2xl text-ink-foreground">{a.title}</dt>
                <dd className="mt-3 leading-relaxed opacity-75">{a.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Section label="Servicios" title="Áreas de actuación procesal.">
        <ul className="border-b border-border">
          {SERVICES.map((s, i) => (
            <li key={s.id} className="grid gap-4 border-t border-border py-8 md:grid-cols-12">
              <span className="font-serif text-sm text-muted-foreground md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-2xl md:col-span-4">{s.title}</h3>
              <p className="leading-relaxed text-muted-foreground md:col-span-7">{s.text}</p>
            </li>
          ))}
        </ul>
        <Link to="/servicios-procurador" className="link-quiet mt-8 inline-block text-sm">Ver los servicios de procura en detalle →</Link>
      </Section>

      <Section label="Ámbito" title="Valencia como prioridad. Coordinación nacional.">
        <div className="grid gap-px border-y border-border bg-border md:grid-cols-2">
          <Link to="/procurador-comunidad-valenciana" className="bg-background py-10 md:pr-10">
            <p className="eyebrow">Ámbito prioritario</p>
            <h3 className="mt-4 text-3xl">Valencia y Comunidad Valenciana</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">Donde se desarrolla la actividad y se construyen las colaboraciones estables con despachos.</p>
            <span className="link-quiet mt-6 inline-block text-sm">Más información →</span>
          </Link>
          <Link to="/procurador-nacional" className="bg-background py-10 md:pl-10">
            <p className="eyebrow">Ámbito complementario</p>
            <h3 className="mt-4 text-3xl">Ámbito nacional</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">Coordinación de procedimientos en otros territorios mediante procuradores colaboradores, con un único interlocutor.</p>
            <span className="link-quiet mt-6 inline-block text-sm">Más información →</span>
          </Link>
        </div>
      </Section>

      <Section label="El profesional" title="Miguel Mas Castellano. Procurador de los Tribunales.">
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed">
          <p>Mi experiencia como oficial habilitado en despachos con una importante carga de procedimientos bancarios, ejecuciones y gestión procesal me ha permitido conocer de cerca el funcionamiento diario de un despacho y las necesidades que surgen durante la tramitación de los asuntos.</p>
          <p className="text-muted-foreground">Desde Mas Castellano Procurador, desarrollo una forma de trabajar basada en la organización, el seguimiento procesal y la comunicación directa con los profesionales con los que colaboro.</p>
          <p className="text-muted-foreground">Una manera de entender la procura desde la experiencia práctica y las necesidades reales del procedimiento.</p>
        </div>
      </Section>

      <ContactBand />
    </>
  );
}
