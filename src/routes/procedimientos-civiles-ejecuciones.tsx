import { createFileRoute, Link } from "@tanstack/react-router";
import { seo, breadcrumbJsonLd } from "@/lib/site";
import { ContactBand, JsonLd, Numbered, PageHeader, Section } from "@/components/site/blocks";

export const Route = createFileRoute("/procedimientos-civiles-ejecuciones")({
  head: () => seo({
    title: "Procedimientos civiles y ejecuciones | MMC Procuradores",
    description: "Representación procesal en procedimientos civiles y ejecuciones en Valencia: declarativos, monitorios y ejecución de títulos, con seguimiento e impulso de las actuaciones.",
    path: "/procedimientos-civiles-ejecuciones",
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Procedimientos civiles y ejecuciones", path: "/procedimientos-civiles-ejecuciones" }])} />
      <PageHeader eyebrow="Área de actuación" title="Procedimientos civiles y ejecuciones." intro={<p>Representación procesal en procedimientos civiles ante los juzgados y tribunales de Valencia, con especial atención a la fase de ejecución, donde un asunto avanza o se detiene.</p>} />
      <Section label="Actuaciones" title="Qué abarca esta área.">
        <Numbered items={[
          { title: "Procedimientos declarativos", text: "Juicios ordinarios y verbales: presentación de escritos, traslado de notificaciones y seguimiento del estado de las actuaciones." },
          { title: "Procesos monitorios", text: "Reclamaciones de cantidad: presentación de la petición inicial, seguimiento de los requerimientos y de la oposición del deudor." },
          { title: "Ejecuciones judiciales", text: "Ejecución de títulos judiciales y no judiciales, con impulso de las actuaciones, seguimiento de diligencias y comunicación de cada resultado." },
          { title: "Medidas y requerimientos", text: "Atención a requerimientos, providencias y decretos, trasladados al abogado de forma ordenada y en tiempo útil." },
        ]} />
      </Section>
      <Section label="Forma de trabajo" title="La ejecución, bajo seguimiento.">
        <div className="grid gap-10 text-lg leading-relaxed md:grid-cols-2">
          <p>En la ejecución es donde la organización procesal marca la diferencia: diligencias solicitadas, resultados comprobados y cada actuación comunicada para que el despacho decida el siguiente paso con información completa.</p>
          <p className="text-muted-foreground">La experiencia previa en despachos con importante carga de ejecuciones permite anticipar qué información necesita el abogado en cada fase y mantener el control de carteras con volumen de procedimientos.</p>
        </div>
        <Link to="/servicios-procurador" className="link-quiet mt-10 inline-block text-sm">Todos los servicios de procura →</Link>
      </Section>
      <ContactBand title="¿Ejecuciones o procedimientos civiles en Valencia? Hablemos." />
    </>
  );
}
