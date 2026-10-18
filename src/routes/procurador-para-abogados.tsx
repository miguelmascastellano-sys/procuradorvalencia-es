import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/site";
import { ContactBand, Faq, faqJsonLd, JsonLd, Numbered, PageHeader, Section } from "@/components/site/blocks";

const FAQ = [
  { q: "¿Trabajáis con abogados independientes o solo con despachos?", a: "Con ambos. La colaboración se adapta tanto a abogados que ejercen de forma individual como a despachos y departamentos jurídicos con estructura propia." },
  { q: "¿Podéis adaptaros a nuestro sistema de gestión?", a: "Sí. Se acuerda con cada despacho el formato de traslado de notificaciones, la identificación de los asuntos y los canales de comunicación." },
  { q: "¿Qué ocurre con los asuntos fuera de Valencia?", a: "Se coordinan a través de procuradores colaboradores, manteniendo un interlocutor de referencia para el despacho." },
];

export const Route = createFileRoute("/procurador-para-abogados")({
  head: () => seo({
    title: "Procurador para abogados y despachos | MMC Procuradores",
    description: "Colaboración procesal para abogados independientes, despachos y departamentos jurídicos: interlocución directa y adaptación a vuestro sistema de trabajo.",
    path: "/procurador-para-abogados",
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQ)} />
      <PageHeader eyebrow="Para abogados" title="Procurador para abogados y despachos." intro={<p>Una colaboración procesal pensada desde la experiencia dentro de los despachos: sabemos qué necesita el abogado de su procurador porque hemos trabajado a su lado.</p>} />
      <Section label="Propuesta" title="Lo que un despacho espera de su procurador.">
        <Numbered items={[
          { title: "Interlocución directa", text: "Un contacto accesible que conoce los asuntos y responde con claridad." },
          { title: "Notificaciones ordenadas", text: "Traslado puntual e identificable, integrado en la forma de trabajar del despacho." },
          { title: "Control de actuaciones", text: "Seguimiento del estado de cada procedimiento y aviso de lo que requiere atención." },
          { title: "Capacidad territorial", text: "Coordinación de asuntos fuera de Valencia mediante procuradores colaboradores." },
        ]} />
      </Section>
      <Section label="Perfiles" title="Con quién colaboramos.">
        <ul className="prose-site max-w-3xl">
          <li>Abogados que ejercen de forma independiente y necesitan un procurador de confianza en Valencia.</li>
          <li>Despachos con volumen de procedimientos civiles, bancarios o de ejecución.</li>
          <li>Departamentos jurídicos de empresa con asuntos en Valencia y su provincia.</li>
          <li>Firmas de otras provincias que tramitan asuntos ante juzgados de Valencia.</li>
        </ul>
        <Link to="/servicios-procurador" className="link-quiet mt-6 inline-block text-sm">Ver servicios →</Link>
      </Section>
      <Section label="Preguntas frecuentes" title="Preguntas frecuentes.">
        <Faq items={FAQ} />
      </Section>
      <ContactBand />
    </>
  );
}
