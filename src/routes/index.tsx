import { createFileRoute, Link } from "@tanstack/react-router";
import { seo, organizationJsonLd, websiteJsonLd, SITE } from "@/lib/site";
import { SERVICES, ATTRIBUTES } from "@/lib/services";
import { ContactBand, Faq, faqJsonLd, JsonLd, Section } from "@/components/site/blocks";
import heroJuzgado from "@/assets/hero-juzgado.jpg";

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
      title: "Procurador en Valencia | Mas Castellano Procurador",
      description:
        "Procurador de los Tribunales en Valencia. Servicios de procura y colaboración procesal para abogados y despachos en Valencia, la Comunidad Valenciana y el ámbito nacional.",
      path: "/",
    }),
  component: Index,
});

function Index() {
  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={faqJsonLd(FAQ)} />

      {/* Hero */}
      <section className="container-site pt-20 pb-24 md:pt-28 md:pb-32">
        <p className="eyebrow">{SITE.tagline}</p>
        <h1 className="mt-10 max-w-5xl text-[3rem] leading-[1] md:text-[5.5rem]">
          Procurador de los Tribunales <em className="text-muted-foreground">en Valencia.</em>
        </h1>
        <div className="mt-14 grid gap-10 border-t border-rule pt-10 md:grid-cols-12">
          <p className="text-lg leading-relaxed md:col-span-6 md:text-xl">
            Servicios de procura y colaboración procesal para abogados y despachos. Representación procesal, seguimiento de procedimientos y coordinación de actuaciones en Valencia y la Comunidad Valenciana, con posibilidad de colaboración en otros territorios según las necesidades del asunto.
          </p>
          <div className="md:col-span-5 md:col-start-8">
            <p className="text-sm text-muted-foreground">Miguel Mas Castellano · Procurador de los Tribunales</p>
            <p className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm">
              <a href={SITE.phoneHref} className="link-quiet">{SITE.phone}</a>
              <a href={`mailto:${SITE.email}`} className="link-quiet">{SITE.email}</a>
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link to="/contacto" className="bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90">
                Contactar con el procurador
              </Link>
              <Link to="/procurador-para-abogados" className="link-quiet text-sm">Servicios para abogados →</Link>
            </div>
          </div>
        </div>
        <figure className="mt-16">
          <img
            src={heroJuzgado}
            alt="Interior de un palacio de justicia: columnas de piedra y luz natural"
            width={1600}
            height={1008}
            className="h-auto w-full object-cover"
          />
        </figure>
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

      <Section label="Colaboración" title="Cómo se inicia una colaboración.">
        <ol className="grid gap-x-12 gap-y-12 md:grid-cols-2">
          {PASOS.map((p, i) => (
            <li key={p.title} className="border-t border-border pt-6">
              <span className="font-serif text-sm text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-2xl">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.text}</p>
            </li>
          ))}
        </ol>
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
        <Link to="/el-despacho" className="link-quiet mt-10 inline-block text-sm">Conocer mi forma de trabajar →</Link>
      </Section>

      <Section label="Preguntas frecuentes" title="Dudas habituales de los despachos.">
        <Faq items={FAQ} />
      </Section>

      <ContactBand />
    </>
  );
}
