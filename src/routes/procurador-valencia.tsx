import { createFileRoute, Link } from "@tanstack/react-router";
import { seo, breadcrumbJsonLd } from "@/lib/site";
import { ContactBand, Faq, faqJsonLd, JsonLd, Numbered, PageHeader, Section } from "@/components/site/blocks";

const FAQ = [
  { q: "¿Qué hace un procurador en Valencia en un procedimiento judicial?", a: "Ostenta la representación procesal de la parte ante los juzgados y tribunales: presenta escritos, recibe y traslada notificaciones al abogado, atiende requerimientos y sigue el estado de las actuaciones." },
  { q: "¿Es obligatorio intervenir con procurador?", a: "Depende del tipo de procedimiento y de su cuantía, conforme a la normativa procesal aplicable. En caso de duda, el abogado director del asunto determinará si es preceptiva su intervención." },
  { q: "¿Colaboráis con despachos de fuera de Valencia?", a: "Sí. Despachos de otras provincias pueden encomendar asuntos que se tramiten en Valencia, con una interlocución directa y adaptada a su forma de trabajar." },
  { q: "¿Cómo se inicia una colaboración?", a: "Mediante un primer contacto por teléfono, correo electrónico o formulario, en el que se valoran las necesidades del despacho, el tipo de asuntos y la forma de comunicación preferida." },
  { q: "¿Podéis gestionar carteras con volumen de procedimientos?", a: "La experiencia previa en despachos con importante carga de procedimientos bancarios y ejecuciones permite organizar la gestión de carteras con criterios de control y seguimiento." },
];

export const Route = createFileRoute("/procurador-valencia")({
  head: () => seo({
    title: "Procurador en Valencia | MMC Procuradores",
    description: "Procurador de los Tribunales en Valencia: representación procesal, procedimientos civiles, ejecuciones y bancarios, y colaboración con despachos de abogados.",
    path: "/procurador-valencia",
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQ)} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Procurador en Valencia", path: "/procurador-valencia" }])} />
      <PageHeader eyebrow="Valencia" title="Procurador en Valencia para abogados y despachos." intro={<p>Representación procesal ante los juzgados y tribunales de Valencia para abogados, despachos y departamentos jurídicos que necesitan un procurador con quien trabajar de forma estable.</p>} />
      <Section label="Servicios en Valencia" title="Procura en Valencia, con criterio de despacho.">
        <div className="grid gap-10 text-lg leading-relaxed md:grid-cols-2">
          <p>Valencia es el ámbito prioritario de MMC Procuradores. La actividad se centra en la representación procesal en los procedimientos encomendados y en la colaboración estable con los despachos que trabajan en la ciudad.</p>
          <p className="text-muted-foreground">El objetivo es que el abogado disponga en todo momento de información clara sobre el estado de sus asuntos, con notificaciones trasladadas de forma ordenada y un interlocutor accesible.</p>
        </div>
      </Section>
      <Section label="Áreas" title="Qué procedimientos atendemos.">
        <Numbered items={[
          { title: "Representación procesal", text: "Presentación de escritos, recepción de notificaciones y atención de requerimientos en los procedimientos encomendados." },
          { title: "Procedimientos civiles y ejecuciones", text: "Declarativos, monitorios y ejecuciones, con especial atención al impulso de las actuaciones en fase de ejecución." },
          { title: "Procedimientos bancarios", text: "Gestión organizada de procedimientos bancarios, reclamaciones y recuperación de deuda, también en carteras con volumen." },
          { title: "Colaboración con despachos", text: "Apoyo procesal estable para abogados independientes, despachos y departamentos jurídicos." },
        ]} />
        <Link to="/servicios-procurador" className="link-quiet mt-10 inline-block text-sm">Todos los servicios de procura →</Link>
      </Section>
      <Section label="Coordinación" title="Coordinación de asuntos y comunicación profesional.">
        <div className="grid gap-10 text-lg leading-relaxed md:grid-cols-2">
          <p>Cada despacho reporta de una manera: por correo, por asunto, por cliente o mediante su propio sistema de seguimiento. La procura se adapta a ese esquema, no al revés.</p>
          <p className="text-muted-foreground">Notificaciones trasladadas de forma ordenada, avisos sobre actuaciones pendientes y un único interlocutor que conoce el estado de cada procedimiento en Valencia.</p>
        </div>
      </Section>
      <Section label="Colaboración" title="Cómo iniciar una colaboración.">
        <ol className="max-w-3xl space-y-6 text-lg leading-relaxed">
          <li><span className="font-serif text-muted-foreground">01 — </span>Primer contacto para conocer el despacho y el tipo de asuntos.</li>
          <li><span className="font-serif text-muted-foreground">02 — </span>Acuerdo sobre canales, interlocutores y forma de traslado de notificaciones.</li>
          <li><span className="font-serif text-muted-foreground">03 — </span>Recepción de la documentación necesaria para la representación.</li>
          <li><span className="font-serif text-muted-foreground">04 — </span>Seguimiento continuado de las actuaciones e información al despacho.</li>
        </ol>
        <Link to="/procurador-para-abogados" className="link-quiet mt-10 inline-block text-sm">Procurador para abogados →</Link>
      </Section>
      <Section label="Preguntas frecuentes" title="Preguntas frecuentes.">
        <Faq items={FAQ} />
      </Section>
      <ContactBand title="¿Tienes asuntos en Valencia? Hablemos." />
    </>
  );
}
