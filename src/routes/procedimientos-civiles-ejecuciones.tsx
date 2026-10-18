import { createFileRoute, Link } from "@tanstack/react-router";
import { seo, breadcrumbJsonLd } from "@/lib/site";
import { ContactBand, Faq, faqJsonLd, JsonLd, Numbered, PageHeader, Related, Section } from "@/components/site/blocks";

import { GUIDES } from "@/lib/procedure-guides";

const FAQ = [
  { q: "¿Cuándo puede ejecutarse una sentencia?", a: "Transcurridos veinte días desde su firmeza o notificación (art. 548 LEC); la acción para ejecutarla caduca a los cinco años (art. 518 LEC)." },
  { q: "¿Qué plazo tiene el deudor en un monitorio?", a: "Veinte días desde el requerimiento para pagar u oponerse, según el artículo 815 de la LEC. Sin oposición, se dicta decreto y se puede pedir la ejecución." },
  { q: "¿Cuándo caduca la acción ejecutiva?", a: "La acción ejecutiva fundada en sentencia caduca a los cinco años desde su firmeza, conforme al artículo 518 de la LEC." },
  { q: "¿Qué hace el procurador en la ejecución?", a: "Presenta la demanda ejecutiva y los escritos de impulso, sigue las averiguaciones patrimoniales y embargos, y traslada cada resultado al abogado." },
];

export const Route = createFileRoute("/procedimientos-civiles-ejecuciones")({
  head: () => seo({
    title: "Procurador para ejecuciones en Valencia | Civil",
    description: "Procurador para ejecuciones en Valencia: juicios ordinarios, verbales, monitorios y ejecución de títulos, con impulso y seguimiento de cada actuación.",
    path: "/procedimientos-civiles-ejecuciones",
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Procedimientos civiles y ejecuciones", path: "/procedimientos-civiles-ejecuciones" }])} />
      <PageHeader eyebrow="Área de actuación" title="Procurador para ejecuciones y procedimientos civiles en Valencia." intro={<p>Representación procesal en procedimientos civiles ante los juzgados y tribunales de Valencia, con especial atención a la fase de ejecución, donde un asunto avanza o se detiene.</p>} />
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
      <Section label="Guía práctica" title="Cómo se tramita.">
        <div className="max-w-3xl space-y-10">{GUIDES.civil.map((b) => (<div key={b.h}><h3 className="font-serif text-2xl">{b.h}</h3>{b.p.map((t) => <p key={t.slice(0, 30)} className="mt-4 text-lg leading-relaxed text-muted-foreground">{t}</p>)}</div>))}</div>
      </Section>
      <Section label="Preguntas frecuentes" title="Preguntas frecuentes."><Faq items={FAQ} /></Section>
      <Section label="Páginas relacionadas"><Related links={[
      { to: "/subastas-judiciales-valencia", label: "Subastas judiciales en Valencia" },
      { to: "/procedimientos-bancarios", label: "Procedimientos bancarios" },
      { to: "/precio-procurador-valencia", label: "Cuánto cobra un procurador" },
      ]} /></Section>
      <JsonLd data={faqJsonLd(FAQ)} />
      <ContactBand title="¿Ejecuciones o procedimientos civiles en Valencia? Hablemos." />
    </>
  );
}
