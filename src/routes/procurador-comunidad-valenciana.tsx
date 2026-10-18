import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/site";
import { ContactBand, Numbered, PageHeader, Section } from "@/components/site/blocks";

export const Route = createFileRoute("/procurador-comunidad-valenciana")({
  head: () => seo({
    title: "Procurador en la Comunidad Valenciana | MMC Procuradores",
    description: "Coordinación de procedimientos y representación procesal en el ámbito de la Comunidad Valenciana para abogados y despachos.",
    path: "/procurador-comunidad-valenciana",
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Comunidad Valenciana" title="Procurador en la Comunidad Valenciana." intro={<p>Actividad procesal en el ámbito autonómico, con Valencia como eje y capacidad de coordinación de asuntos en distintos partidos judiciales de la Comunidad.</p>} />
      <Section label="Ámbito autonómico" title="Una visión de conjunto de los asuntos del despacho.">
        <div className="grid gap-10 text-lg leading-relaxed md:grid-cols-2">
          <p>Muchos despachos tramitan asuntos repartidos entre distintos partidos judiciales de la Comunidad Valenciana. Gestionarlos con interlocutores dispersos complica el control de plazos y la comunicación interna.</p>
          <p className="text-muted-foreground">MMC Procuradores ofrece un punto de referencia para esos asuntos: representación procesal en los procedimientos encomendados y coordinación con procuradores colaboradores cuando así lo requiera el procedimiento.</p>
        </div>
      </Section>
      <Section label="Cómo trabajamos" title="Criterios comunes en todo el territorio.">
        <Numbered items={[
          { title: "Un interlocutor de referencia", text: "El despacho mantiene un único punto de contacto para el conjunto de sus asuntos en la Comunidad." },
          { title: "Información homogénea", text: "Mismo formato y criterios de traslado de notificaciones, con independencia del partido judicial." },
          { title: "Seguimiento del conjunto", text: "Visión ordenada del estado de los procedimientos y de las actuaciones pendientes." },
          { title: "Coordinación con colaboradores", text: "Cuando corresponde, actuación coordinada con procuradores colaboradores, respetando la representación en cada procedimiento." },
        ]} />
      </Section>
      <Section label="Relacionado">
        <div className="flex flex-wrap gap-8 text-sm">
          <Link to="/procurador-valencia" className="link-quiet">Procurador en Valencia →</Link>
          <Link to="/procurador-nacional" className="link-quiet">Procurador de ámbito nacional →</Link>
          <Link to="/servicios-procurador" className="link-quiet">Servicios de procura →</Link>
        </div>
      </Section>
      <ContactBand />
    </>
  );
}
