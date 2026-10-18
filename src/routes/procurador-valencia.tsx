import { createFileRoute } from "@tanstack/react-router";
import { seo, breadcrumbJsonLd } from "@/lib/site";
import { ContactBand, Faq, faqJsonLd, JsonLd, Numbered, PageHeader, Prose, Related, Section } from "@/components/site/blocks";

const BLOCKS = [
  { h: "Actuación en la Ciudad de la Justicia de Valencia", p: [
    "La mayor parte de los órganos judiciales de Valencia capital se concentran en la Ciudad de la Justicia: juzgados de primera instancia, de familia, mercantiles, de lo social y de instrucción, entre otros. Para un procurador en Valencia capital, conocer cómo funciona cada servicio común, cada oficina de registro y cada juzgado es parte del trabajo diario.",
    "El procurador acude físicamente cuando una actuación lo requiere —recogida de documentación, actos de comunicación, comparecencias o consultas en la oficina judicial— y gestiona de forma telemática la presentación de escritos y la recepción de notificaciones a través de los sistemas de la Administración de Justicia.",
  ] },
  { h: "Juzgados de primera instancia", p: [
    "En los juzgados de primera instancia de Valencia se tramitan los procedimientos civiles: juicios ordinarios y verbales, monitorios, desahucios, ejecuciones y procedimientos de familia en los juzgados especializados. La Ley de Enjuiciamiento Civil exige con carácter general la intervención de procurador, con las excepciones del artículo 23 LEC, como los juicios verbales de cuantía no superior a 2.000 euros o la petición inicial del monitorio.",
    "En estos procedimientos, la diligencia en el traslado de notificaciones es decisiva: muchos plazos son breves y empiezan a contar desde el día siguiente a la notificación al procurador.",
  ] },
  { h: "Audiencia Provincial y TSJ", p: [
    "Los recursos de apelación contra resoluciones de los juzgados de la provincia se resuelven en la Audiencia Provincial de Valencia, organizada en secciones especializadas. El procurador que actuó en la instancia puede continuar la representación en la apelación, lo que da continuidad al seguimiento del asunto.",
    "El Tribunal Superior de Justicia, con sede en Valencia, conoce de determinados recursos en el orden civil, contencioso-administrativo y social. También allí la representación procesal la ejerce el procurador.",
  ] },
  { h: "Plazos y notificaciones", p: [
    "Las notificaciones se reciben por vía telemática y se entienden practicadas en los plazos que establece la LEC (art. 151 y 162). Si se reciben fuera del horario hábil, se tienen por recibidas el día hábil siguiente. Agosto es inhábil para la mayoría de actuaciones, salvo las declaradas urgentes.",
    "Cada notificación recibida se traslada al abogado el mismo día, identificando el procedimiento, la resolución y el plazo que abre. Esa disciplina evita que una resolución quede sin atender y permite al despacho planificar su trabajo.",
  ] },
  { h: "Cómo encargar un asunto", p: [
    "El encargo empieza con una llamada, un WhatsApp o un correo en el que se indica el juzgado, el tipo de procedimiento y la fase. Se acuerda la forma de comunicación con el despacho y se otorga la representación mediante poder notarial o apoderamiento apud acta, que puede hacerse de forma electrónica.",
    "A partir de ahí, el procurador presenta los escritos que prepara el abogado, recibe y traslada las notificaciones y avisa de las actuaciones pendientes. El despacho tiene un único interlocutor en Valencia durante toda la tramitación.",
  ] },
];

const FAQ = [
  { q: "¿Qué hace un procurador en Valencia capital?", a: "Representa a la parte ante los juzgados y tribunales de Valencia: presenta escritos, recibe y traslada notificaciones al abogado, atiende requerimientos y sigue el estado de las actuaciones." },
  { q: "¿Actuáis en la Ciudad de la Justicia de Valencia?", a: "Sí. Es el entorno de trabajo diario, tanto de forma telemática como presencial cuando la actuación lo requiere." },
  { q: "¿Es obligatorio ir con procurador?", a: "En la mayoría de procedimientos civiles sí. El artículo 23 de la LEC prevé excepciones, como los juicios verbales de hasta 2.000 euros o la petición inicial del monitorio." },
  { q: "¿Representáis también en apelación ante la Audiencia Provincial?", a: "Sí. La representación puede continuar en la segunda instancia ante la Audiencia Provincial de Valencia." },
  { q: "¿Cuánto tarda en trasladarse una notificación?", a: "Se traslada al abogado el mismo día en que se recibe, indicando la resolución y el plazo que abre." },
];

export const Route = createFileRoute("/procurador-valencia")({
  head: () => seo({ title: "Procurador en Valencia capital | Ciudad de la Justicia", description: "Procurador en Valencia capital: actuación en la Ciudad de la Justicia, juzgados de primera instancia, Audiencia Provincial y TSJ, con control de plazos.", path: "/procurador-valencia" }),
  component: Page,
});

function Page() {
  return <>
    <JsonLd data={faqJsonLd(FAQ)} />
    <JsonLd data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Procurador en Valencia capital", path: "/procurador-valencia" }])} />
    <PageHeader eyebrow="Valencia capital" title="Procurador en Valencia capital" intro={<p>Representación procesal ante los juzgados y tribunales de Valencia para abogados, despachos y particulares, con seguimiento ordenado de cada procedimiento.</p>} />
    <Section label="Valencia capital" title="Procura en la Ciudad de la Justicia."><Prose blocks={BLOCKS} /></Section>
    <Section label="Áreas" title="Qué procedimientos atendemos.">
      <Numbered items={[
        { title: "Procedimientos civiles y ejecuciones", text: "Declarativos, monitorios, desahucios y ejecuciones, con impulso de las actuaciones." },
        { title: "Procedimientos de familia", text: "Divorcios, medidas y su ejecución." },
        { title: "Procedimientos bancarios", text: "Reclamaciones y carteras con volumen." },
        { title: "Segunda oportunidad", text: "Concurso de persona natural y exoneración." },
      ]} />
    </Section>
    <Section label="Preguntas frecuentes" title="Preguntas frecuentes."><Faq items={FAQ} /></Section>
    <Section label="Páginas relacionadas"><Related links={[
      { to: "/procurador-provincia-valencia", label: "Procuradores en la provincia de Valencia" },
      { to: "/precio-procurador-valencia", label: "Cuánto cobra un procurador en Valencia" },
      { to: "/subastas-judiciales-valencia", label: "Subastas judiciales en Valencia" },
    ]} /></Section>
    <ContactBand title="¿Tienes asuntos en Valencia? Hablemos." />
  </>;
}
