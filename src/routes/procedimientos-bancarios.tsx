import { createFileRoute, Link } from "@tanstack/react-router";
import { seo, breadcrumbJsonLd } from "@/lib/site";
import { ContactBand, JsonLd, Numbered, PageHeader, Section } from "@/components/site/blocks";

export const Route = createFileRoute("/procedimientos-bancarios")({
  head: () => seo({
    title: "Procedimientos bancarios y reclamaciones | Mas Castellano Procurador",
    description: "Gestión procesal de procedimientos bancarios y reclamaciones en Valencia, también en carteras con volumen: orden, registro de actuaciones y reporte adaptado al despacho.",
    path: "/procedimientos-bancarios",
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Procedimientos bancarios y reclamaciones", path: "/procedimientos-bancarios" }])} />
      <PageHeader eyebrow="Área de actuación" title="Procedimientos bancarios y reclamaciones." intro={<p>Representación procesal en procedimientos bancarios y reclamaciones ante los juzgados de Valencia. Asuntos que suelen llegar en volumen y exigen orden: cada procedimiento identificado, cada actuación registrada.</p>} />
      <Section label="Actuaciones" title="Qué abarca esta área.">
        <Numbered items={[
          { title: "Reclamaciones y recuperación de deuda", text: "Monitorios, ejecutivos y cambiarios: presentación, seguimiento de requerimientos e impulso de la ejecución." },
          { title: "Carteras con volumen", text: "Organización de carteras de procedimientos con criterios de control: cada asunto identificado y cada actuación registrada." },
          { title: "Reporte adaptado al despacho", text: "Información estructurada según el sistema de seguimiento de cada despacho: por asunto, por cliente o mediante su propia herramienta." },
          { title: "Coordinación con el abogado", text: "Un único interlocutor que conoce el estado de la cartera y traslada las actuaciones de forma ordenada y en tiempo útil." },
        ]} />
      </Section>
      <Section label="Forma de trabajo" title="El volumen, gestionado con orden.">
        <div className="grid gap-10 text-lg leading-relaxed md:grid-cols-2">
          <p>La experiencia como oficial habilitado en despachos con importante carga de procedimientos bancarios y ejecuciones permite conocer cómo se gestiona una cartera desde dentro y qué información necesita el abogado para controlarla.</p>
          <p className="text-muted-foreground">Ese conocimiento se traslada ahora a la procura: criterios de trabajo acordados al inicio, registro de actuaciones y una comunicación que encaja con la dinámica del despacho.</p>
        </div>
        <Link to="/servicios-procurador" className="link-quiet mt-10 inline-block text-sm">Todos los servicios de procura →</Link>
      </Section>
      <ContactBand title="¿Carteras o reclamaciones bancarias en Valencia? Hablemos." />
    </>
  );
}
