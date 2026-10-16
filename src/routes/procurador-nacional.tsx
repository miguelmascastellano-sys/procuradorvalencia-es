import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/site";
import { ContactBand, Numbered, PageHeader, Section } from "@/components/site/blocks";

export const Route = createFileRoute("/procurador-nacional")({
  head: () => seo({
    title: "Procurador de ámbito nacional | Mas Castellano Procurador",
    description: "Coordinación de procedimientos judiciales en distintos territorios de España a través de una red de procuradores colaboradores, con un único interlocutor.",
    path: "/procurador-nacional",
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Ámbito nacional" title="Coordinación de procedimientos en distintos territorios." intro={<p>Desde Valencia, Mas Castellano Procurador coordina asuntos en otros territorios a través de procuradores colaboradores, para que el despacho mantenga un único interlocutor.</p>} />
      <Section label="Planteamiento" title="Un punto de referencia para asuntos dispersos.">
        <div className="grid gap-10 text-lg leading-relaxed md:grid-cols-2">
          <p>Cuando un despacho tramita procedimientos en distintos partidos judiciales, la multiplicidad de interlocutores dificulta el control y la comunicación.</p>
          <p className="text-muted-foreground">La coordinación permite centralizar la relación con el despacho, homogeneizar criterios de información y mantener una visión de conjunto. La representación procesal en cada procedimiento se ejerce por el procurador que corresponda conforme a la normativa aplicable.</p>
        </div>
      </Section>
      <Section label="Cómo funciona" title="Coordinación con método.">
        <Numbered items={[
          { title: "Recepción del encargo", text: "El despacho comunica el asunto y el territorio en que se tramita." },
          { title: "Asignación al colaborador", text: "Se coordina la intervención de un procurador colaborador en ese territorio." },
          { title: "Criterios compartidos", text: "Formato de comunicación y traslado de notificaciones acordado con el despacho." },
          { title: "Seguimiento centralizado", text: "Información sobre el estado del asunto a través de un interlocutor de referencia." },
        ]} />
      </Section>
      <Section label="Relacionado">
        <div className="flex flex-wrap gap-8 text-sm">
          <Link to="/articulos/$slug" params={{ slug: "coordinar-procedimientos-distintos-territorios" }} className="link-quiet">Artículo: coordinar procedimientos en distintos territorios →</Link>
          <Link to="/procurador-valencia" className="link-quiet">Procurador en Valencia →</Link>
        </div>
      </Section>
      <ContactBand />
    </>
  );
}
