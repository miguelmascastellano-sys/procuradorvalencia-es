import { createFileRoute } from "@tanstack/react-router";
import { seo, breadcrumbJsonLd } from "@/lib/site";
import { ContactBand, Faq, faqJsonLd, JsonLd, PageHeader, Prose, Related, Section } from "@/components/site/blocks";

const BLOCKS = [
  { h: "La subasta electrónica en el Portal de Subastas del BOE", p: [
    "Desde la reforma de la Ley de Enjuiciamiento Civil por la Ley 19/2015, las subastas judiciales se celebran de forma electrónica en el Portal de Subastas de la Agencia Estatal Boletín Oficial del Estado. Los juzgados de Valencia y de toda la provincia publican allí los bienes que salen a subasta en ejecuciones hipotecarias, ejecuciones de títulos judiciales y otros procedimientos.",
    "La subasta permanece abierta durante el plazo legal previsto en el artículo 649 de la LEC, y en ese tiempo los postores registrados pueden presentar pujas. El portal recoge la información del bien, la valoración, las cargas conocidas y el órgano judicial que la convoca.",
  ] },
  { h: "Depósito para participar", p: [
    "Para pujar es necesario consignar un depósito, que con carácter general es del 5 % del valor de subasta del bien, conforme al artículo 647 de la LEC. El depósito se constituye a través del propio portal y se devuelve a quienes no resulten adjudicatarios, salvo que soliciten reservarlo para el caso de que el mejor postor no complete el precio.",
    "El ejecutante puede participar sin necesidad de consignar depósito cuando concurre con otros licitadores, según las reglas de la LEC.",
  ] },
  { h: "Puja y adjudicación", p: [
    "Las pujas se realizan electrónicamente y el portal informa de la mejor postura en cada momento. Cerrada la subasta, el letrado de la Administración de Justicia dicta la resolución que corresponda según el porcentaje alcanzado respecto del valor de subasta, aplicando las reglas de los artículos 670 y 671 de la LEC para inmuebles y bienes muebles.",
    "El adjudicatario debe consignar el resto del precio en el plazo señalado. Si no lo hace, pierde el depósito y la adjudicación puede pasar al siguiente postor que haya reservado su depósito.",
  ] },
  { h: "Toma de posesión", p: [
    "Aprobado el remate y consignado el precio, se expide el testimonio del decreto de adjudicación, título para inscribir el bien en el Registro de la Propiedad. Si el inmueble está ocupado, la toma de posesión se tramita dentro del propio procedimiento, con los incidentes previstos en el artículo 675 de la LEC según la situación de los ocupantes.",
  ] },
  { h: "Acreedores e inversores", p: [
    "El acreedor ejecutante necesita impulsar la ejecución hasta la convocatoria de la subasta, solicitar en su caso la adjudicación y controlar la liquidación. El inversor que puja necesita conocer el estado del procedimiento, las cargas y los plazos para consignar el precio y tomar posesión.",
    "En ambos casos, el procurador sigue el expediente en el juzgado, presenta los escritos que prepara el abogado, recibe las resoluciones y avisa de cada plazo. MMC Procuradores actúa en subastas derivadas de procedimientos tramitados en Valencia y su provincia.",
  ] },
];

const FAQ = [
  { q: "¿Es obligatorio ir con procurador para pujar en una subasta judicial?", a: "Para pujar como postor en el Portal de Subastas no es obligatorio. Sí lo es para intervenir como parte en el procedimiento de ejecución, por ejemplo como acreedor ejecutante, y resulta útil para los trámites posteriores a la adjudicación." },
  { q: "¿Cuánto hay que depositar para pujar?", a: "Con carácter general, el 5 % del valor de subasta del bien, según el artículo 647 de la LEC. El depósito se devuelve si no se resulta adjudicatario." },
  { q: "¿Qué pasa si el inmueble adjudicado está ocupado?", a: "La toma de posesión se solicita en el propio procedimiento y el juzgado resuelve según la situación de los ocupantes, conforme al artículo 675 de la LEC." },
];

export const Route = createFileRoute("/subastas-judiciales-valencia")({
  head: () => seo({ title: "Procurador para subastas judiciales en Valencia", description: "Procurador para subastas judiciales en Valencia: Portal de Subastas del BOE, depósito, puja, adjudicación y toma de posesión para acreedores e inversores.", path: "/subastas-judiciales-valencia" }),
  component: Page,
});

function Page() {
  return <>
    <JsonLd data={faqJsonLd(FAQ)} />
    <JsonLd data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Subastas judiciales en Valencia", path: "/subastas-judiciales-valencia" }])} />
    <PageHeader eyebrow="Subastas judiciales" title="Procurador para subastas judiciales en Valencia." intro={<p>Seguimiento procesal de subastas electrónicas convocadas por los juzgados de Valencia y su provincia, desde la ejecución hasta la toma de posesión.</p>} />
    <Section label="Cómo funciona" title="De la convocatoria a la toma de posesión."><Prose blocks={BLOCKS} /></Section>
    <Section label="Preguntas frecuentes" title="Dudas sobre subastas."><Faq items={FAQ} /></Section>
    <Section label="Páginas relacionadas"><Related links={[
      { to: "/procedimientos-civiles-ejecuciones", label: "Ejecuciones en Valencia" },
      { to: "/procedimientos-bancarios", label: "Procedimientos bancarios" },
      { to: "/precio-procurador-valencia", label: "Cuánto cobra un procurador" },
    ]} /></Section>
    <ContactBand title="¿Una subasta en Valencia? Hablemos." />
  </>;
}
