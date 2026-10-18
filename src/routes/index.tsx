import { createFileRoute, Link } from "@tanstack/react-router";
import { seo, organizationJsonLd, websiteJsonLd, SITE } from "@/lib/site";
import { SERVICES, ATTRIBUTES } from "@/lib/services";
import { ContactBand, Faq, faqJsonLd, JsonLd, Numbered, Section } from "@/components/site/blocks";
import architecture from "@/assets/editorial-arquitectura.jpg";
import desk from "@/assets/despacho-trabajo.webp";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const FAQ = [
  { q: "¿Qué hace un procurador en Valencia en un procedimiento judicial?", a: "Ostenta la representación procesal de la parte ante los juzgados y tribunales: presenta escritos, recibe y traslada notificaciones al abogado, atiende requerimientos y sigue el estado de las actuaciones." },
  { q: "¿Es obligatorio intervenir con procurador?", a: "Depende del tipo de procedimiento y de su cuantía, conforme a la normativa procesal aplicable. En caso de duda, el abogado director del asunto determinará si es preceptiva su intervención." },
  { q: "¿Colaboráis con despachos de fuera de Valencia?", a: "Sí. Despachos de otras provincias pueden encomendar asuntos que se tramiten en Valencia, con una interlocución directa y adaptada a su forma de trabajar." },
  { q: "¿Cómo se inicia una colaboración?", a: "Mediante un primer contacto por teléfono, correo electrónico o formulario, en el que se valoran las necesidades del despacho, el tipo de asuntos y la forma de comunicación preferida." },
  { q: "¿Podéis gestionar carteras con volumen de procedimientos?", a: "La experiencia previa en despachos con importante carga de procedimientos bancarios y ejecuciones permite organizar la gestión de carteras con criterios de control y seguimiento." },
];

const PASOS = [
  { title: "Primer contacto", text: "Una conversación breve para conocer el despacho, el tipo de asuntos y las necesidades de comunicación." },
  { title: "Acuerdo de trabajo", text: "Canales, interlocutores y forma de traslado de notificaciones, adaptados a la dinámica del despacho." },
  { title: "Recepción de asuntos", text: "Documentación y apoderamientos necesarios para asumir la representación procesal." },
  { title: "Seguimiento continuado", text: "Información ordenada sobre cada actuación, con un único interlocutor durante toda la tramitación." },
];

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "Procurador en Valencia | MMC Procuradores",
      description:
        "Servicios de procura, representación procesal y colaboración profesional para abogados y despachos en Valencia y la Comunidad Valenciana",
      path: "/",
    }),
  component: Index,
});

function Index() {
  return <>
    <JsonLd data={organizationJsonLd} /><JsonLd data={websiteJsonLd} /><JsonLd data={faqJsonLd(FAQ)} />
    <section className="editorial-hero bg-ink text-ink-foreground">
      <img src={architecture} alt="Composición arquitectónica ilustrativa de columnas de piedra y escalinata" width={1920} height={1088} fetchPriority="high" className="editorial-hero-image" />
      <div className="container-site grid gap-6 py-12 md:grid-cols-12 md:py-16">
        <p className="editorial-kicker text-ink-foreground/75 md:col-span-12">MMC Procuradores</p>
        <h1 className="max-w-3xl text-[2.75rem] leading-[1.02] text-ink-foreground md:col-span-8 md:text-[4.5rem] lg:text-[5rem]">Servicios de procura <em className="font-normal text-ink-foreground/75">para abogados y despachos.</em></h1>
        <div className="md:col-span-6">
          <p className="max-w-lg text-base leading-relaxed text-ink-foreground/85">Representación procesal y seguimiento de actuaciones en <strong className="font-medium text-ink-foreground">Valencia y la Comunidad Valenciana.</strong></p>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-foreground/75">Colaboración profesional a nivel nacional, según el procedimiento y el ámbito de actuación, mediante procuradores colaboradores.</p>
          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3"><Button asChild variant="inverse"><Link to="/contacto">Solicitar colaboración<ArrowUpRight /></Link></Button><Button asChild variant="editorialInverse"><Link to="/servicios-procurador">Conocer los servicios<ArrowUpRight /></Link></Button></div>
        </div>
        <p className="mt-2 border-t border-ink-foreground/25 pt-5 font-serif text-lg italic text-ink-foreground/70 md:col-span-12">{SITE.tagline}</p>
      </div>
    </section>

    <section className="container-site grid gap-8 py-16 md:grid-cols-12 md:py-24">
      <p className="editorial-kicker text-bronze md:col-span-3 md:items-start md:pt-3">Una forma de trabajar</p>
      <h2 className="text-4xl leading-[1.08] md:col-span-8 md:text-[3.75rem]">Dentro del procedimiento.<br /><em className="text-muted-foreground">Al lado del despacho.</em></h2>
      <div className="space-y-5 leading-relaxed text-muted-foreground md:col-span-5 md:col-start-4"><p>La procura no funciona de manera aislada. Cada asunto requiere coordinación, información y una comunicación profesional que encaje con la dinámica del abogado.</p><p>Conocer las necesidades operativas del despacho, mantener el seguimiento de los asuntos encomendados y facilitar una interlocución directa durante la tramitación.</p></div>
      <dl className="space-y-5 md:col-span-3 md:col-start-10">{ATTRIBUTES.map(a => <div key={a.title} className="border-t border-bronze/40 pt-4"><dt className="font-serif text-2xl">{a.title}</dt><dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</dd></div>)}</dl>
    </section>

    <Section label="Servicios" title="La atención que cada asunto necesita.">
      <ul>{SERVICES.map((s,i) => <li key={s.id} className="editorial-service"><span className="font-serif text-xl text-bronze">{String(i+1).padStart(2,"0")}</span><h3 className="text-2xl leading-tight md:text-3xl">{s.title}</h3><p className="leading-relaxed text-muted-foreground">{s.text}</p></li>)}</ul>
      <Button asChild variant="editorial" className="mt-8"><Link to="/servicios-procurador">Servicios de procura en detalle<ArrowUpRight /></Link></Button>
    </Section>

    <section className="bg-primary text-primary-foreground">
      <div className="container-site grid gap-10 py-16 md:grid-cols-12 md:py-24">
        <p className="editorial-kicker text-primary-foreground/60 md:col-span-12">Ámbito de actuación</p>
        <div className="md:col-span-7"><h2 className="text-4xl leading-tight text-primary-foreground md:text-[3.75rem]">Valencia y<br /><em>Comunidad Valenciana.</em></h2><p className="mt-6 max-w-lg leading-relaxed text-primary-foreground/70">Ámbito prioritario de la actividad y de la colaboración con abogados y despachos.</p><Button asChild variant="editorialInverse" className="mt-6"><Link to="/procurador-comunidad-valenciana">Conocer el ámbito territorial<ArrowUpRight /></Link></Button></div>
        <div className="border-t border-primary-foreground/25 pt-8 md:col-span-4 md:col-start-9 md:border-t-0 md:border-l md:pl-10"><p className="text-xs uppercase text-primary-foreground/60">Colaboración nacional</p><h3 className="mt-4 text-3xl text-primary-foreground">Otros territorios.<br />El mismo criterio.</h3><p className="mt-5 leading-relaxed text-primary-foreground/70">Coordinación mediante procuradores colaboradores, previa valoración del procedimiento y del ámbito de actuación real.</p><Button asChild variant="editorialInverse" className="mt-6"><Link to="/procurador-nacional">Valorar una colaboración<ArrowUpRight /></Link></Button></div>
      </div>
    </section>

    <section className="container-site grid gap-10 py-16 md:grid-cols-12 md:items-center md:py-24">
      <figure className="md:col-span-5"><img src={desk} alt="Imagen ilustrativa de expedientes organizados sobre un escritorio jurídico" width={1200} height={1408} loading="lazy" className="editorial-photo" /></figure>
      <div className="md:col-span-6 md:col-start-7"><p className="editorial-kicker text-bronze">El despacho</p><h2 className="mt-8 text-4xl leading-tight md:text-[3.5rem]">MMC Procuradores.<br /><em>Una colaboración cercana al procedimiento.</em></h2><p className="mt-7 leading-relaxed text-muted-foreground">La representación procesal se acompaña de información organizada y una comunicación profesional adaptada a cada asunto.</p><p className="mt-4 leading-relaxed text-muted-foreground">Una manera de entender la procura desde la experiencia práctica y las necesidades reales del despacho.</p><Button asChild variant="editorial" className="mt-7"><Link to="/el-despacho">Conocer la forma de trabajar<ArrowUpRight /></Link></Button></div>
    </section>

    <Section label="Colaboración" title="Una conversación. Una forma de trabajar."><Numbered items={PASOS} /></Section>
    <Section label="Preguntas frecuentes" title="Antes de empezar."><Faq items={FAQ} /></Section>
    <ContactBand />
  </>;
}
