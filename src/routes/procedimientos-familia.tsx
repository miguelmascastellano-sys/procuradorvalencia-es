import { createFileRoute, Link } from "@tanstack/react-router";
import { seo, breadcrumbJsonLd } from "@/lib/site";
import { ContactBand, Faq, faqJsonLd, JsonLd, Numbered, PageHeader, Related, Section } from "@/components/site/blocks";

const FAQ = [
  { q: "¿Es obligatorio procurador en un divorcio en Valencia?", a: "Sí, en los procedimientos de separación, divorcio y medidas ante los juzgados de familia se requiere procurador, también en los de mutuo acuerdo." },
  { q: "¿Un solo procurador puede representar a ambos cónyuges?", a: "En los procedimientos de mutuo acuerdo es posible que un mismo abogado y procurador actúen para ambas partes, conforme a la LEC." },
  { q: "¿Qué ocurre si no se paga la pensión fijada en sentencia?", a: "Se puede instar la ejecución de la resolución de familia ante el mismo juzgado; el procurador impulsa la ejecución y traslada cada resultado al abogado." },
];

export const Route = createFileRoute("/procedimientos-familia")({
  head: () => seo({
    title: "Procurador de familia en Valencia | Divorcios y medidas",
    description: "Procurador de familia en Valencia: divorcios, separaciones, modificación de medidas y ejecución de pensiones ante los juzgados de familia de Valencia.",
    path: "/procedimientos-familia",
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Procedimientos de familia", path: "/procedimientos-familia" }])} />
      <PageHeader eyebrow="Área de actuación" title="Procurador de familia en Valencia." intro={<p>Representación procesal en procedimientos de familia ante los juzgados de Valencia. Asuntos con plazos sensibles y personas detrás, que piden diligencia y discreción en cada comunicación.</p>} />
      <Section label="Actuaciones" title="Qué abarca esta área.">
        <Numbered items={[
          { title: "Divorcios y separaciones", text: "Procedimientos de mutuo acuerdo y contenciosos: presentación de escritos, traslado de notificaciones y seguimiento de las actuaciones." },
          { title: "Modificación de medidas", text: "Solicitudes de modificación de medidas definitivas, con atención a los plazos y a la documentación que acompaña cada escrito." },
          { title: "Ejecución de resoluciones de familia", text: "Impulso de la ejecución de sentencias y resoluciones: pensiones, regímenes de visitas y demás medidas acordadas o impuestas." },
          { title: "Comunicación cuidada", text: "Un trato discreto y ordenado con el abogado en cada fase, consciente de que el ritmo de la tramitación afecta directamente a la vida de los clientes." },
        ]} />
      </Section>
      <Section label="Forma de trabajo" title="Diligencia y discreción.">
        <div className="grid gap-10 text-lg leading-relaxed md:grid-cols-2">
          <p>En los procedimientos de familia, cada notificación y cada plazo tienen una repercusión personal directa. La procura se ejerce con la diligencia que esos asuntos exigen.</p>
          <p className="text-muted-foreground">El abogado recibe la información de forma ordenada y en tiempo útil, con un único interlocutor que conoce el estado de cada procedimiento.</p>
        </div>
        <Link to="/servicios-procurador" className="link-quiet mt-10 inline-block text-sm">Todos los servicios de procura →</Link>
      </Section>
      <Section label="Preguntas frecuentes" title="Preguntas frecuentes."><Faq items={FAQ} /></Section>
      <Section label="Páginas relacionadas"><Related links={[
      { to: "/procedimientos-civiles-ejecuciones", label: "Ejecuciones en Valencia" },
      { to: "/precio-procurador-valencia", label: "Cuánto cobra un procurador" },
      { to: "/procurador-valencia", label: "Procurador en Valencia capital" },
      ]} /></Section>
      <JsonLd data={faqJsonLd(FAQ)} />
      <ContactBand title="¿Asuntos de familia en Valencia? Hablemos." />
    </>
  );
}
