import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/site";
import { ContactBand, Faq, faqJsonLd, JsonLd, Numbered, PageHeader, Section } from "@/components/site/blocks";

const FAQ = [
  { q: "¿Trabajáis con abogados independientes o solo con despachos?", a: "Con ambos. La colaboración se adapta tanto a abogados que ejercen de forma individual como a despachos y departamentos jurídicos con estructura propia." },
  { q: "¿Podéis adaptaros a nuestro sistema de gestión?", a: "Sí. Se acuerda con cada despacho el formato de traslado de notificaciones, la identificación de los asuntos y los canales de comunicación." },
  { q: "¿Qué ocurre con los asuntos fuera de Valencia?", a: "Se coordinan a través de procuradores colaboradores, manteniendo un interlocutor de referencia para el despacho." },
  { q: "¿Cómo os encargo un asunto?", a: "Basta con enviarnos por correo el juzgado, el tipo de procedimiento y la fase en la que está el asunto. A partir de ahí se acuerda cómo y cuándo recibes la información." },
  { q: "¿Puedo pedir un presupuesto antes de encargarlo?", a: "Sí. Los derechos del procurador están regulados por arancel y, antes de asumir el encargo, se puede dar un presupuesto orientativo." },
];

const SITUACIONES = [
  { problema: "Soy abogado de otra provincia y tengo un asunto ante un juzgado de Valencia.", respuesta: "Actuamos como tu procurador en Valencia capital y provincia y te mantenemos informado de cada actuación." },
  { problema: "Mi despacho lleva muchos procedimientos y necesito que las notificaciones lleguen ordenadas.", respuesta: "Se acuerda contigo el formato de traslado de notificaciones, la identificación de los asuntos y los canales de comunicación." },
  { problema: "Ejerzo por mi cuenta y no tengo a nadie que siga lo que ocurre en el juzgado.", respuesta: "Un interlocutor de referencia que conoce tus asuntos y te responde con claridad." },
  { problema: "Mi asunto pasa a otro partido judicial o a otra provincia.", respuesta: "Se coordina a través de procuradores colaboradores, manteniendo un interlocutor de referencia para el despacho." },
  { problema: "Necesito saber cuánto costará antes de aceptar el encargo.", respuesta: "Antes de asumir el asunto se puede dar un presupuesto orientativo, dentro de lo que establece el arancel." },
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
      <PageHeader eyebrow="Para abogados" title="Procurador para abogados y despachos." intro={<p>Llevar un asunto en Valencia desde fuera, o desde un despacho que no puede estar en los juzgados cada semana, obliga a depender de alguien que te diga a tiempo qué ha pasado y qué plazo corre. Esa es la colaboración que ofrecemos, pensada desde la experiencia dentro de los despachos: sabemos qué necesita el abogado de su procurador porque hemos trabajado a su lado.</p>} />
      <Section label="Situaciones habituales" title="Cuando un abogado necesita un procurador en Valencia.">
        <ul>{SITUACIONES.map((x, i) => <li key={x.problema} className="editorial-service"><span className="font-serif text-xl text-bronze">{String(i + 1).padStart(2, "0")}</span><h3 className="font-serif text-2xl italic leading-tight md:text-3xl">{x.problema}</h3><p className="leading-relaxed text-muted-foreground">{x.respuesta}</p></li>)}</ul>
        <Link to="/precio-procurador-valencia" className="link-quiet mt-6 inline-block text-sm">Cuánto cobra un procurador en Valencia →</Link>
      </Section>
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
