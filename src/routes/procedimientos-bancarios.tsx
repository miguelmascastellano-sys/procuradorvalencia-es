import { createFileRoute, Link } from "@tanstack/react-router";
import { seo, breadcrumbJsonLd } from "@/lib/site";
import { ContactBand, Faq, faqJsonLd, JsonLd, Numbered, PageHeader, Related, Section } from "@/components/site/blocks";

import { GUIDES } from "@/lib/procedure-guides";

const FAQ = [
  { q: "¿Se puede ejecutar una sentencia contra el banco si no paga?", a: "Sí. Si la entidad no consigna voluntariamente, el procurador insta la ejecución y sigue la consignación o el embargo." },
  { q: "¿En qué procedimientos bancarios interviene el procurador?", a: "En los procedimientos judiciales que el abogado inicia o en los que defiende a su cliente: acciones de nulidad por cláusulas abusivas, reclamaciones de cantidad, monitorios y ejecuciones, incluidas las hipotecarias." },
  { q: "¿Cómo se coordina con el abogado en litigios bancarios?", a: "El abogado dirige el asunto y prepara los escritos; el procurador los presenta, recibe las notificaciones, las traslada con indicación del plazo y realiza el seguimiento de cada procedimiento." },
  { q: "¿Podéis gestionar varios procedimientos a la vez?", a: "Sí. Cada asunto se identifica y se registra cada actuación, con un reporte adaptado al sistema de seguimiento del despacho." },
];

export const Route = createFileRoute("/procedimientos-bancarios")({
  head: () => {
    const h = seo({
      title: "Procurador para procedimientos bancarios en Valencia | MMC Procuradores",
      description: "Procurador para procedimientos bancarios en Valencia: cláusulas abusivas, ejecuciones hipotecarias y reclamaciones, en coordinación con el abogado.",
      path: "/procedimientos-bancarios",
    });
    return { ...h, scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQ)) }] };
  },
  component: Page,
});

function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Procedimientos bancarios", path: "/procedimientos-bancarios" }])} />
      <PageHeader eyebrow="Área de actuación" title="Procurador para procedimientos bancarios en Valencia." intro={<p>Representación procesal en litigios bancarios y reclamaciones ante los juzgados de Valencia. Asuntos que suelen llegar en volumen y exigen orden: cada procedimiento identificado, cada actuación registrada.</p>} />
      <Section label="Actuaciones" title="Qué abarca esta área.">
        <Numbered items={[
          { title: "Cláusulas abusivas y nulidad", text: "Presentación de demandas y escritos, traslado de notificaciones y seguimiento de los procedimientos que el abogado plantea sobre condiciones generales de contratación." },
          { title: "Ejecuciones hipotecarias", text: "Representación en la ejecución y seguimiento de sus fases: requerimientos, oposición, subasta y actuaciones posteriores." },
          { title: "Reclamaciones y recuperación de deuda", text: "Monitorios, ejecutivos y cambiarios: presentación, seguimiento de requerimientos e impulso de la ejecución." },
          { title: "Reporte adaptado al despacho", text: "Información estructurada por asunto o por cliente, o mediante la propia herramienta de seguimiento del despacho." },
        ]} />
      </Section>
      <Section label="Forma de trabajo" title="El volumen, gestionado con orden.">
        <div className="grid gap-10 text-lg leading-relaxed md:grid-cols-2">
          <p>La experiencia como oficial habilitado en despachos con importante carga de procedimientos bancarios y ejecuciones permite conocer cómo se gestiona una cartera desde dentro y qué información necesita el abogado para controlarla.</p>
          <p className="text-muted-foreground">Ese conocimiento se traslada ahora a la procura: criterios de trabajo acordados al inicio, registro de actuaciones y una comunicación que encaja con la dinámica del despacho. El asesoramiento y la dirección del asunto corresponden al abogado.</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <Link to="/procedimientos-segunda-oportunidad" className="link-quiet">Segunda oportunidad y concursal →</Link>
          <Link to="/servicios-procurador" className="link-quiet">Todos los servicios de procura →</Link>
        </div>
      </Section>
      <Section label="Guía práctica" title="Cómo se tramita.">
        <div className="max-w-3xl space-y-10">{GUIDES.bancario.map((b) => (<div key={b.h}><h3 className="font-serif text-2xl">{b.h}</h3>{b.p.map((t) => <p key={t.slice(0, 30)} className="mt-4 text-lg leading-relaxed text-muted-foreground">{t}</p>)}</div>))}</div>
      </Section>
      <Section label="Preguntas frecuentes">
        <Faq items={FAQ} />
      </Section>
      <Section label="Páginas relacionadas"><Related links={[
      { to: "/subastas-judiciales-valencia", label: "Subastas judiciales en Valencia" },
      { to: "/procedimientos-civiles-ejecuciones", label: "Ejecuciones en Valencia" },
      { to: "/procedimientos-segunda-oportunidad", label: "Segunda oportunidad" },
      ]} /></Section>
      <ContactBand title="¿Litigios bancarios en Valencia? Hablemos." />
    </>
  );
}
