import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-arquitectura.jpg";
import detalle from "@/assets/despacho-detalle.jpg";
import { seo, organizationJsonLd } from "@/lib/site";
import { SERVICES, PRINCIPLES } from "@/lib/services";
import { ContactBand, JsonLd, Numbered, Section } from "@/components/site/blocks";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "Procurador en Valencia | Mas Castellano Procurador",
      description:
        "Procurador de los Tribunales en Valencia y la Comunidad Valenciana. Representación procesal y colaboración con despachos de abogados, con proyección nacional.",
      path: "/",
    }),
  component: Index,
});

function Index() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <section className="container-site grid gap-12 pt-16 pb-20 md:grid-cols-12 md:pt-24 md:pb-28">
        <div className="md:col-span-7 md:pr-6">
          <p className="eyebrow">Procurador de los Tribunales</p>
          <h1 className="mt-8 text-[2.75rem] leading-[1.02] md:text-[4.6rem]">
            Procurador en Valencia y la Comunidad Valenciana. <em className="text-muted-foreground">Proyección nacional.</em>
          </h1>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Representación procesal y colaboración con despachos de abogados, con una gestión rigurosa, comunicación directa y coordinación de procedimientos en distintos territorios.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Link to="/el-despacho" className="bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90">
              Conocer el despacho
            </Link>
            <Link to="/contacto" className="link-quiet text-sm">Contacto profesional →</Link>
          </div>
        </div>
        <div className="md:col-span-5">
          <img src={hero} alt="Fachada de piedra clara de un edificio contemporáneo en Valencia bajo luz de mañana" width={1600} height={1104} fetchPriority="high" className="aspect-[4/5] w-full object-cover" />
        </div>
      </section>

      <Section label="El despacho" title="La procura, entendida como una colaboración profesional.">
        <div className="grid gap-10 text-lg leading-relaxed md:grid-cols-2">
          <p>La actividad procesal exige organización, atención al detalle y una coordinación constante entre los profesionales que intervienen en cada procedimiento.</p>
          <div className="space-y-5 text-muted-foreground">
            <p>Mas Castellano Procurador desarrolla su actividad con una orientación clara: ofrecer a abogados y despachos una colaboración procesal rigurosa, con interlocución directa, seguimiento de las actuaciones y una gestión adaptada a las necesidades de cada asunto.</p>
            <p>Con base en la experiencia práctica en la tramitación de procedimientos, el despacho apuesta por una forma de trabajar organizada, profesional y cercana.</p>
          </div>
        </div>
      </Section>

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

      <Section label="Forma de trabajo" title="Rigor procesal. Comunicación directa. Coordinación.">
        <Numbered items={PRINCIPLES} />
      </Section>

      <section className="bg-ink text-ink-foreground">
        <div className="container-site grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5">
            <p className="text-[0.72rem] tracking-[0.18em] uppercase opacity-60">Ámbito de actuación</p>
            <h2 className="mt-6 text-4xl leading-tight text-ink-foreground md:text-5xl">Valencia como prioridad. Cobertura nacional.</h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed opacity-85 md:col-span-7">
            <p>Mas Castellano Procurador orienta su actividad principalmente a Valencia y la Comunidad Valenciana, con capacidad para coordinar procedimientos en otros territorios mediante una red de procuradores colaboradores.</p>
            <p>Una estructura de colaboración que permite atender las necesidades procesales de los despachos más allá de un único ámbito territorial.</p>
          </div>
          <div className="grid gap-px bg-ink-foreground/15 md:col-span-12 md:grid-cols-2">
            <Link to="/procurador-comunidad-valenciana" className="group bg-ink p-8 md:p-10">
              <p className="text-[0.72rem] tracking-[0.18em] uppercase opacity-60">Nivel 1 · Prioritario</p>
              <h3 className="mt-4 text-3xl text-ink-foreground">Comunidad Valenciana</h3>
              <p className="mt-3 opacity-75">Prioridad comercial y territorial, con especial atención a Valencia.</p>
              <span className="link-quiet mt-6 inline-block text-sm">Más información →</span>
            </Link>
            <Link to="/procurador-nacional" className="group bg-ink p-8 md:p-10">
              <p className="text-[0.72rem] tracking-[0.18em] uppercase opacity-60">Nivel 2 · Coordinación</p>
              <h3 className="mt-4 text-3xl text-ink-foreground">Ámbito nacional</h3>
              <p className="mt-3 opacity-75">Coordinación de procedimientos en otros territorios a través de colaboradores profesionales.</p>
              <span className="link-quiet mt-6 inline-block text-sm">Más información →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="container-site grid gap-12 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <img src={detalle} alt="Carpetas de expedientes ordenadas sobre una mesa de roble junto a una ventana" width={1200} height={1408} loading="lazy" className="aspect-[4/5] w-full object-cover" />
        </div>
        <div className="md:col-span-6 md:col-start-7 md:pt-10">
          <p className="eyebrow">El profesional</p>
          <h2 className="mt-6 text-4xl leading-tight md:text-5xl">Miguel Mas Castellano. Procurador de los Tribunales.</h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>Mi trayectoria profesional incluye experiencia como oficial habilitado en despachos con una importante carga de procedimientos bancarios, ejecuciones y gestión procesal, así como experiencia en la coordinación de asuntos en distintos territorios.</p>
            <p>Esta experiencia me ha permitido conocer de primera mano las necesidades operativas de los despachos y la importancia de una gestión procesal organizada, una comunicación clara y una coordinación eficaz entre profesionales.</p>
            <p>Desde Mas Castellano Procurador, mi objetivo es ofrecer una colaboración profesional rigurosa y adaptada a las necesidades de cada procedimiento.</p>
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
