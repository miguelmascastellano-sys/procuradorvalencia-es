import { createFileRoute, Link } from "@tanstack/react-router";
import { seo, legalServiceJsonLd, websiteJsonLd, SITE } from "@/lib/site";
import { SERVICES, ATTRIBUTES } from "@/lib/services";
import { ContactBand, Faq, faqJsonLd, JsonLd, Numbered, Related, Section } from "@/components/site/blocks";
import architecture from "@/assets/editorial-arquitectura.jpg";
import contemporary from "@/assets/arquitectura-contemporanea.jpg";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const DESCRIPTION =
  "Procurador en Valencia, capital y provincia. MMC Procuradores: procuradores en Valencia para abogados, despachos y particulares, con control de plazos.";

const FAQ = [
  { q: "¿Cuánto cobra un procurador en Valencia?", a: "Los derechos del procurador se rigen por el arancel del Real Decreto 1373/2003 y dependen de la cuantía y del tipo de procedimiento, más IVA y suplidos. Se puede pedir presupuesto previo sin compromiso." },
  { q: "¿Es obligatorio ir con procurador?", a: "En la mayoría de procedimientos civiles sí. El artículo 23 de la LEC prevé excepciones, como los juicios verbales de cuantía no superior a 2.000 euros o la petición inicial del monitorio." },
  { q: "¿Cómo encontrar un procurador en Valencia?", a: "Conviene buscar un procurador que conozca los juzgados de Valencia, traslade las notificaciones con rapidez y se adapte a la forma de trabajar del abogado. Puedes llamar o escribir por WhatsApp para valorar tu asunto." },
  { q: "¿Atienden en la Ciudad de la Justicia de Valencia?", a: "Sí. La Ciudad de la Justicia es el entorno de trabajo diario, de forma telemática y presencial cuando la actuación lo requiere." },
];

const ZONAS = [
  { to: "/procurador-valencia", label: "Valencia capital" },
  { to: "/procurador-provincia-valencia", label: "Provincia de Valencia" },
  { to: "/procurador-valencia-despachos-otras-provincias", label: "Despachos de otras provincias" },
  { to: "/precio-procurador-valencia", label: "Precio y aranceles" },
  { to: "/subastas-judiciales-valencia", label: "Subastas judiciales" },
];

const PASOS = [
  { title: "Primer contacto", text: "Una conversación breve para conocer el despacho, el tipo de asuntos y las necesidades de comunicación." },
  { title: "Acuerdo de trabajo", text: "Canales, interlocutores y forma de traslado de notificaciones, adaptados a la dinámica del despacho." },
  { title: "Recepción de asuntos", text: "Documentación y apoderamientos necesarios para asumir la representación procesal." },
  { title: "Seguimiento continuado", text: "Información ordenada sobre cada actuación, con un único interlocutor durante toda la tramitación." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    ...seo({
      title: "Procurador en Valencia | MMC Procuradores",
      description: DESCRIPTION,
      path: "/",
    }),
    // Un único JSON-LD en el <head>: la ficha del servicio jurídico.
    scripts: [{ type: "application/ld+json", children: JSON.stringify(legalServiceJsonLd(DESCRIPTION)) }],
  }),
  component: Index,
});

function Index() {
  return <>
    <JsonLd data={websiteJsonLd} /><JsonLd data={faqJsonLd(FAQ)} />
    <section className="editorial-hero bg-ink text-ink-foreground">
      <img src={architecture} alt="Columnas de piedra y escalinata de un edificio institucional" width={1920} height={1088} fetchPriority="high" className="editorial-hero-image" />
      <div className="container-site hero-composition">
        <p className="hero-brand text-ink-foreground">MMC Procuradores</p>
        <h1 className="hero-title text-ink-foreground">Procurador en Valencia, capital y provincia</h1>
        <p className="font-serif text-2xl italic text-ink-foreground/85 md:col-span-12">Servicios de procura. Criterio de despacho.</p>
        <div className="hero-detail">
          <p className="max-w-lg text-base leading-relaxed text-ink-foreground/85">Para abogados, despachos y departamentos jurídicos. Representación procesal y seguimiento de actuaciones en <strong className="font-medium text-ink-foreground">Valencia capital y provincia.</strong></p>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-foreground/75">Colaboración profesional a nivel nacional, según el procedimiento y el ámbito de actuación, mediante procuradores colaboradores.</p>
          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3"><Button asChild variant="inverse"><a href={SITE.phoneHref}>Llamar al {SITE.phone}<ArrowUpRight /></a></Button><Button asChild variant="editorialInverse"><Link to="/servicios-procurador">Conocer los servicios<ArrowUpRight /></Link></Button></div>
        </div>
        <p className="hero-signature font-serif italic text-ink-foreground/70">{SITE.tagline}</p>
      </div>
    </section>

    <section className="container-site grid gap-8 py-16 md:grid-cols-12 md:py-24">
      <p className="editorial-kicker text-bronze md:col-span-3 md:items-start md:pt-3">Una forma de trabajar</p>
      <h2 className="text-4xl leading-[1.08] md:col-span-8 md:text-[3.75rem]">Dentro del procedimiento.<br /><em className="text-muted-foreground">Al lado del despacho.</em></h2>
      <div className="space-y-5 leading-relaxed text-muted-foreground md:col-span-5 md:col-start-4"><p>La procura no funciona de manera aislada. Cada asunto requiere coordinación, información y una comunicación profesional que encaje con la dinámica del abogado.</p><p>Conocer las necesidades operativas del despacho, mantener el seguimiento de los asuntos encomendados y facilitar una interlocución directa durante la tramitación.</p></div>
      <dl className="space-y-5 md:col-span-3 md:col-start-10">{ATTRIBUTES.map(a => <div key={a.title} className="border-t border-bronze/40 pt-4"><dt className="font-serif text-2xl">{a.title}</dt><dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</dd></div>)}</dl>
    </section>

    <Section label="Procuradores en Valencia" title="Procuradores en Valencia con criterio de despacho.">
      <div className="max-w-3xl space-y-5 text-[1.0625rem] leading-[1.75] text-foreground/80">
        <p>Buscar un procurador en Valencia suele responder a una necesidad concreta: un procedimiento que empieza, una notificación que no puede esperar o un despacho de fuera que necesita representación en los juzgados valencianos. MMC Procuradores ofrece representación procesal ante los juzgados de Valencia capital, la Audiencia Provincial y los partidos judiciales de la provincia.</p>
        <p>El trabajo de los procuradores en Valencia se desarrolla en buena parte en la Ciudad de la Justicia y a través de los sistemas telemáticos de la Administración de Justicia. Allí se presentan los escritos, se reciben las notificaciones y se siguen las actuaciones. La diferencia entre un procurador y otro está en la diligencia: trasladar cada resolución el mismo día, avisar de los plazos y mantener al abogado informado sin que tenga que preguntar.</p>
        <p>Atendemos procedimientos civiles, ejecuciones, familia, asuntos bancarios, segunda oportunidad y subastas judiciales. Los derechos del procurador están regulados por arancel, y antes de asumir el encargo se puede dar un presupuesto orientativo. Para empezar, basta una llamada o un WhatsApp con el juzgado, el tipo de procedimiento y la fase en la que está el asunto.</p>
      </div>
    </Section>

    <Section label="Zonas" title="Dónde actuamos."><Related links={ZONAS} /></Section>

    <Section label="Servicios" title="La atención que cada asunto necesita.">
      <ul>{SERVICES.map((s,i) => <li key={s.id} className="editorial-service"><span className="font-serif text-xl text-bronze">{String(i+1).padStart(2,"0")}</span><h3 className="text-2xl leading-tight md:text-3xl">{s.title}</h3><p className="leading-relaxed text-muted-foreground">{s.text}</p></li>)}</ul>
      <Button asChild variant="editorial" className="mt-8"><Link to="/servicios-procurador">Servicios de procura en detalle<ArrowUpRight /></Link></Button>
    </Section>

    <section className="bg-primary text-primary-foreground">
      <div className="container-site grid gap-10 py-16 md:grid-cols-12 md:py-24">
        <p className="editorial-kicker text-primary-foreground/60 md:col-span-12">Ámbito de actuación</p>
        <div className="md:col-span-7"><h2 className="text-4xl leading-tight text-primary-foreground md:text-[3.75rem]">Valencia como prioridad.<br /><em>Colaboración profesional en el ámbito nacional.</em></h2><p className="mt-6 max-w-lg leading-relaxed text-primary-foreground/70">Valencia capital y su provincia concentran la actividad prioritaria y la colaboración con abogados y despachos.</p><Button asChild variant="editorialInverse" className="mt-6"><Link to="/procurador-provincia-valencia">Conocer el ámbito territorial<ArrowUpRight /></Link></Button></div>
        <div className="border-t border-primary-foreground/25 pt-8 md:col-span-4 md:col-start-9 md:border-t-0 md:border-l md:pl-10"><p className="text-xs uppercase text-primary-foreground/60">Colaboración nacional</p><h3 className="mt-4 text-3xl text-primary-foreground">Otros territorios.<br />El mismo criterio.</h3><p className="mt-5 leading-relaxed text-primary-foreground/70">Coordinación mediante procuradores colaboradores, previa valoración del procedimiento y del ámbito de actuación real.</p><Button asChild variant="editorialInverse" className="mt-6"><Link to="/procurador-valencia-despachos-otras-provincias">Valorar una colaboración<ArrowUpRight /></Link></Button></div>
      </div>
    </section>

    <section className="container-site grid gap-10 py-16 md:grid-cols-12 md:items-center md:py-24">
      <figure className="md:col-span-5"><img src={contemporary} alt="Fachada de arquitectura contemporánea en piedra clara" width={1600} height={1008} loading="lazy" className="editorial-photo" /></figure>
      <div className="md:col-span-6 md:col-start-7"><p className="editorial-kicker text-bronze">El despacho</p><h2 className="mt-8 text-4xl leading-tight md:text-[3.5rem]">MMC Procuradores.<br /><em>Una colaboración cercana al procedimiento.</em></h2><p className="mt-7 leading-relaxed text-muted-foreground">La representación procesal se acompaña de información organizada y una comunicación profesional adaptada a cada asunto.</p><p className="mt-4 leading-relaxed text-muted-foreground">Una manera de entender la procura desde la experiencia práctica y las necesidades reales del despacho.</p><Button asChild variant="editorial" className="mt-7"><Link to="/el-despacho">Conocer la forma de trabajar<ArrowUpRight /></Link></Button></div>
    </section>

    <Section label="Colaboración" title="Una conversación. Una forma de trabajar."><Numbered items={PASOS} /></Section>
    <Section label="Preguntas frecuentes" title="Antes de empezar."><Faq items={FAQ} /></Section>
    <ContactBand />
  </>;
}
