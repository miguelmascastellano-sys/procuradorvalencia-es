import { createFileRoute } from "@tanstack/react-router";
import { seo, breadcrumbJsonLd } from "@/lib/site";
import { ContactBand, Faq, faqJsonLd, JsonLd, PageHeader, Related, Section } from "@/components/site/blocks";

const PARTIDOS = [
  { name: "Valencia", text: "Partido judicial de la capital y sede de la Ciudad de la Justicia, donde se concentran los juzgados de primera instancia, mercantiles, de familia y de lo social, además de la Audiencia Provincial. Es el núcleo diario de la actividad del despacho." },
  { name: "Gandía", text: "Cabeza de partido de la comarca de la Safor. Su volumen de asuntos civiles vinculados a la vivienda y a la costa, incluidas reclamaciones de comunidades de propietarios, exige un seguimiento constante de notificaciones." },
  { name: "Sagunto", text: "Partido del Camp de Morvedre, al norte de la capital. Procedimientos civiles, de familia y ejecuciones con una tramitación que se coordina desde Valencia con el abogado director." },
  { name: "Paterna", text: "Partido del área metropolitana noroeste, con fuerte presencia de empresas en sus polígonos. Encargos frecuentes de reclamaciones de cantidad, monitorios y ejecuciones entre empresas." },
  { name: "Alzira", text: "Cabeza de partido de la Ribera Alta. Asuntos civiles, de familia y ejecuciones hipotecarias de un territorio extenso, que requieren organizar bien los traslados al despacho." },
  { name: "Xàtiva", text: "Partido de La Costera, en el interior sur de la provincia. Procedimientos que suelen encargar despachos de la capital y que necesitan un interlocutor estable para no perder plazos." },
  { name: "Llíria", text: "Partido del Camp de Túria. Procedimientos civiles y de familia en una zona residencial en crecimiento, con encargos tanto de despachos locales como de la capital." },
  { name: "Sueca", text: "Partido de la Ribera Baixa. Asuntos relacionados con fincas rústicas, herencias y reclamaciones civiles, que se benefician de un control ordenado de cada actuación." },
  { name: "Catarroja", text: "Partido de l'Horta Sud próximo a la capital. Por cercanía, muchos asuntos se encargan junto con otros de Valencia y se gestionan con los mismos criterios de reporte." },
  { name: "Carlet", text: "Partido de la Ribera Alta occidental. Volumen moderado de asuntos civiles y de familia, en los que la diligencia en las notificaciones marca el ritmo del procedimiento." },
  { name: "Requena", text: "Partido de la comarca de Requena-Utiel, el más alejado de la capital. Para despachos de Valencia, contar con seguimiento coordinado evita desplazamientos innecesarios." },
  { name: "Ontinyent", text: "Partido de la Vall d'Albaida, en el extremo sur de la provincia. Reclamaciones mercantiles ligadas a la industria de la zona, además de procedimientos de familia." },
  { name: "Torrent", text: "Uno de los partidos con más población de l'Horta Sud. Monitorios, desahucios y procedimientos de familia con volumen relevante y plazos ajustados." },
  { name: "Moncada", text: "Partido de l'Horta Nord. Asuntos civiles y ejecuciones de municipios del norte del área metropolitana, coordinados con la actividad en la capital." },
  { name: "Quart de Poblet", text: "Partido del área oeste metropolitana, cercano al aeropuerto. Reclamaciones de cantidad, arrendamientos y ejecuciones que se tramitan junto a los asuntos de Valencia." },
];

const FAQ = [
  { q: "¿Actuáis en todos los partidos judiciales de la provincia de Valencia?", a: "Se valora cada asunto según el partido judicial y el tipo de procedimiento. La actividad principal se concentra en Valencia capital y, para el resto de la provincia, se acuerda con el despacho la forma de actuación." },
  { q: "¿La tramitación es presencial o telemática?", a: "La mayor parte de la presentación de escritos y la recepción de notificaciones se realiza de forma telemática a través de los sistemas de la Administración de Justicia. Algunas actuaciones requieren presencia física en el juzgado." },
  { q: "¿Cómo se encarga un asunto de un partido judicial de la provincia?", a: "Llamando o escribiendo por WhatsApp o correo con el partido judicial, el tipo de procedimiento y la fase en que se encuentra. Se confirma expresamente si se asume el encargo." },
];

const DESC = "Procuradores en la provincia de Valencia: actuación en los partidos judiciales de Gandía, Sagunto, Paterna, Alzira, Xàtiva, Torrent y más localidades.";

export const Route = createFileRoute("/procurador-provincia-valencia")({
  head: () => seo({ title: "Procurador en la provincia de Valencia | Partidos judiciales", description: DESC, path: "/procurador-provincia-valencia" }),
  component: Page,
});

function Page() {
  return <>
    <JsonLd data={faqJsonLd(FAQ)} />
    <JsonLd data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Provincia de Valencia", path: "/procurador-provincia-valencia" }])} />
    <PageHeader eyebrow="Provincia de Valencia" title="Procuradores en la provincia de Valencia." intro={<p>Representación procesal en Valencia capital y coordinación de asuntos en los partidos judiciales de la provincia, con un único interlocutor para el despacho.</p>} />
    <Section label="Partidos judiciales" title="Un mismo criterio en cada partido judicial.">
      <dl className="divide-y divide-border border-y border-border">
        {PARTIDOS.map((p) => <div key={p.name} className="grid gap-3 py-7 md:grid-cols-[14rem_1fr]"><dt><h3 className="font-serif text-2xl">Procurador en {p.name}</h3></dt><dd className="leading-relaxed text-muted-foreground">{p.text}</dd></div>)}
      </dl>
    </Section>
    <Section label="Preguntas frecuentes" title="Antes de encargar un asunto."><Faq items={FAQ} /></Section>
    <Section label="Páginas relacionadas"><Related links={[
      { to: "/procurador-valencia", label: "Procurador en Valencia capital" },
      { to: "/precio-procurador-valencia", label: "Cuánto cobra un procurador en Valencia" },
      { to: "/procurador-valencia-despachos-otras-provincias", label: "Despachos de otras provincias" },
    ]} /></Section>
    <ContactBand title="¿Tienes un asunto en la provincia de Valencia?" />
  </>;
}
