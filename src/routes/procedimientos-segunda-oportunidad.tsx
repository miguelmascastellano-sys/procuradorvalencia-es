import { createFileRoute, Link } from "@tanstack/react-router";
import { seo, breadcrumbJsonLd } from "@/lib/site";
import { ContactBand, Faq, faqJsonLd, JsonLd, Numbered, PageHeader, Related, Section } from "@/components/site/blocks";

const FAQ = [
  { q: "¿Qué hace el procurador en un procedimiento de segunda oportunidad?", a: "Representa a la persona deudora ante el juzgado: presenta los escritos que prepara el abogado, recibe y traslada las notificaciones, controla los plazos y realiza el seguimiento de cada actuación del concurso y de la solicitud de exoneración." },
  { q: "¿El procurador asesora sobre la exoneración de deudas?", a: "No. El asesoramiento jurídico y la dirección del asunto corresponden al abogado. El procurador se ocupa de la representación procesal y de la gestión ordenada del procedimiento." },
  { q: "¿Qué normativa regula estos procedimientos?", a: "El Texto Refundido de la Ley Concursal (Real Decreto Legislativo 1/2020), reformado por la Ley 16/2022, regula el concurso de la persona natural y la exoneración del pasivo insatisfecho. Esta información es general y no sustituye el análisis de cada caso por el abogado." },
  { q: "¿Colaboráis con despachos de fuera de Valencia?", a: "La actuación directa se centra en Valencia capital y provincia. Para otros partidos judiciales, la colaboración se coordina con procuradores de esos territorios según el procedimiento." },
];

export const Route = createFileRoute("/procedimientos-segunda-oportunidad")({
  head: () => {
    const h = seo({
      title: "Procurador para segunda oportunidad en Valencia | MMC Procuradores",
      description: "Representación procesal en concursos de persona natural y exoneración del pasivo insatisfecho en Valencia, en coordinación con el abogado director del asunto.",
      path: "/procedimientos-segunda-oportunidad",
    });
    return { ...h, scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQ)) }] };
  },
  component: Page,
});

function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Segunda oportunidad y concursal", path: "/procedimientos-segunda-oportunidad" }])} />
      <PageHeader eyebrow="Área de actuación" title="Segunda oportunidad y procedimientos concursales." intro={<p>Representación procesal en concursos de persona natural y solicitudes de exoneración del pasivo insatisfecho ante los juzgados de Valencia, siempre en coordinación con el abogado que dirige el asunto.</p>} />
      <Section label="Funciones" title="Qué aporta el procurador en estos procedimientos.">
        <Numbered items={[
          { title: "Presentación de escritos", text: "Presentación telemática de la solicitud de concurso y de los escritos que prepara el abogado, con control de la documentación aportada." },
          { title: "Notificaciones y plazos", text: "Recepción de las resoluciones del juzgado y traslado inmediato al despacho, indicando el plazo que abre cada una." },
          { title: "Seguimiento del procedimiento", text: "Control del estado del concurso, de las actuaciones de la administración concursal cuando exista y de la tramitación de la exoneración." },
          { title: "Coordinación con el abogado", text: "Un interlocutor directo que informa de cada novedad. La estrategia y el asesoramiento al cliente corresponden siempre al abogado." },
        ]} />
      </Section>
      <Section label="Organización" title="Aspectos que conviene ordenar desde el inicio.">
        <div className="grid max-w-4xl gap-8 text-[1.0625rem] leading-[1.72] md:grid-cols-2">
          <p>Estos asuntos combinan plazos breves, varias resoluciones sucesivas y, con frecuencia, un número elevado de acreedores. Acordar al principio cómo se trasladan las notificaciones evita pérdidas de información.</p>
          <p>Cuando el despacho tramita varios expedientes a la vez, el seguimiento se organiza por asunto y se reporta en el formato que el despacho ya utiliza.</p>
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">Información general. No constituye asesoramiento jurídico sobre un caso concreto.</p>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <Link to="/procedimientos-bancarios" className="link-quiet">Procedimientos bancarios →</Link>
          <Link to="/procurador-para-abogados" className="link-quiet">Colaboración con despachos →</Link>
        </div>
      </Section>
      <Section label="Preguntas frecuentes">
        <Faq items={FAQ} />
      </Section>
      <Section label="Páginas relacionadas"><Related links={[
      { to: "/procedimientos-bancarios", label: "Procedimientos bancarios" },
      { to: "/precio-procurador-valencia", label: "Cuánto cobra un procurador" },
      { to: "/procurador-valencia", label: "Procurador en Valencia capital" },
      ]} /></Section>
      <ContactBand title="¿Tramitáis asuntos de segunda oportunidad en Valencia?" />
    </>
  );
}
