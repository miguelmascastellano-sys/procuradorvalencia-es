import { createFileRoute } from "@tanstack/react-router";
import { seo, breadcrumbJsonLd } from "@/lib/site";
import { ContactBand, Faq, faqJsonLd, JsonLd, Numbered, PageHeader, Prose, Related, Section } from "@/components/site/blocks";

const BLOCKS = [
  { h: "Un procurador en Valencia para tu despacho", p: [
    "Muchos despachos de Madrid, Barcelona u otras provincias tienen asuntos que se tramitan en los juzgados de Valencia: un cliente con domicilio aquí, un inmueble en la provincia o una ejecución que debe instarse en este partido judicial. Necesitan un procurador en Valencia que reciba las notificaciones, presente los escritos y les mantenga informados sin desplazarse.",
    "MMC Procuradores trabaja con abogados de fuera de Valencia adaptándose a su forma de reportar: por correo, por asunto o mediante su propio sistema de seguimiento.",
  ] },
  { h: "Asuntos fuera de Valencia", p: [
    "La actuación directa se centra en Valencia capital y provincia. Cuando un despacho necesita apoyo en otro territorio, se valora cada caso y, si procede, se coordina con procuradores colaboradores de ese partido judicial. No se ofrece una cobertura generalizada en toda España.",
  ] },
];

const FAQ = [
  { q: "¿Necesito desplazarme a Valencia?", a: "No. La presentación de escritos y la recepción de notificaciones se realizan telemáticamente y se acuerdan con el despacho los canales de comunicación." },
  { q: "¿Cómo se otorga la representación?", a: "Mediante poder notarial o apoderamiento apud acta, que puede otorgarse electrónicamente o ante el letrado de la Administración de Justicia." },
  { q: "¿Podéis actuar en otras provincias?", a: "La actividad se centra en Valencia. Para otros territorios se valora cada asunto y, si procede, se coordina con procuradores colaboradores." },
];

export const Route = createFileRoute("/procurador-valencia-despachos-otras-provincias")({
  head: () => seo({ title: "Procurador en Valencia para despachos de otras provincias", description: "Procurador en Valencia para abogados y despachos de otras provincias con asuntos en juzgados valencianos: escritos, notificaciones y seguimiento.", path: "/procurador-valencia-despachos-otras-provincias" }),
  component: Page,
});

function Page() {
  return <>
    <JsonLd data={faqJsonLd(FAQ)} />
    <JsonLd data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Despachos de otras provincias", path: "/procurador-valencia-despachos-otras-provincias" }])} />
    <PageHeader eyebrow="Despachos de otras provincias" title="Procurador en Valencia para despachos de otras provincias." intro={<p>Para abogados de fuera que tienen asuntos en los juzgados de Valencia y necesitan un procurador de confianza en la ciudad.</p>} />
    <Section label="Planteamiento" title="Tu asunto en Valencia, sin desplazarte."><Prose blocks={BLOCKS} /></Section>
    <Section label="Cómo funciona" title="Cuatro pasos.">
      <Numbered items={[
        { title: "Primer contacto", text: "Indicas el juzgado, el tipo de procedimiento y la fase del asunto." },
        { title: "Representación", text: "Se otorga el poder o apoderamiento apud acta." },
        { title: "Tramitación", text: "Presentación de escritos y recepción de notificaciones en Valencia." },
        { title: "Información continua", text: "Traslado de cada resolución con el plazo que abre." },
      ]} />
    </Section>
    <Section label="Preguntas frecuentes" title="Antes de encargar."><Faq items={FAQ} /></Section>
    <Section label="Páginas relacionadas"><Related links={[
      { to: "/procurador-valencia", label: "Procurador en Valencia capital" },
      { to: "/procurador-para-abogados", label: "Procurador para abogados" },
      { to: "/precio-procurador-valencia", label: "Cuánto cobra un procurador" },
    ]} /></Section>
    <ContactBand />
  </>;
}
