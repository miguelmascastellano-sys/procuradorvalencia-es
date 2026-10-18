import { createFileRoute } from "@tanstack/react-router";
import { seo, breadcrumbJsonLd } from "@/lib/site";
import { ContactBand, Faq, faqJsonLd, JsonLd, PageHeader, Prose, Related, Section } from "@/components/site/blocks";

const BLOCKS = [
  { h: "El arancel de los procuradores", p: [
    "Los derechos económicos del procurador no se fijan libremente como los honorarios de otros profesionales. Están regulados por el arancel aprobado por el Real Decreto 1373/2003, de 7 de noviembre, que establece las cantidades que corresponden por cada actuación en los distintos tipos de procedimiento.",
    "El arancel es de aplicación en todo el territorio nacional, de modo que un procurador en Valencia aplica las mismas reglas que uno de cualquier otra ciudad. La normativa permite que las partes pacten una variación sobre las cantidades resultantes, dentro de los límites legales, y establece además un límite máximo global de 75.000 euros por los derechos devengados por un mismo procurador en un mismo asunto, salvo excepciones autorizadas.",
    "A las cantidades del arancel se suma el IVA y, en su caso, los suplidos: gastos que el procurador adelanta por cuenta del cliente, como tasas, publicaciones de edictos o certificaciones registrales.",
  ] },
  { h: "De qué depende el precio", p: [
    "El factor principal es la cuantía del procedimiento. En los asuntos de cuantía determinada, el arancel aplica una escala por tramos: a mayor cuantía, mayores derechos, aunque de forma decreciente en proporción. En los asuntos de cuantía indeterminada se aplican las reglas específicas previstas en el propio arancel.",
    "También influye el tipo de procedimiento y las fases que efectivamente se tramitan: no devenga lo mismo un juicio verbal que termina con allanamiento que un procedimiento ordinario con recurso de apelación. Las ejecuciones, los incidentes, los recursos y las actuaciones de auxilio judicial tienen sus propios conceptos dentro del arancel.",
    "Por eso no es posible dar un precio cerrado sin conocer el asunto. Lo correcto es solicitar un presupuesto con la cuantía, el tipo de procedimiento y la fase en la que se encuentra.",
  ] },
  { h: "Quién paga si hay condena en costas", p: [
    "Los derechos del procurador forman parte de las costas del proceso conforme al artículo 241 de la Ley de Enjuiciamiento Civil. Cuando una resolución condena en costas a la parte contraria, esta deberá reembolsar los derechos de procurador, junto con los honorarios del abogado y el resto de gastos incluidos, mediante la correspondiente tasación de costas.",
    "El artículo 394 de la LEC limita, en determinados casos, la cantidad que la parte condenada debe abonar por honorarios de profesionales que no estén sujetos a tarifa o arancel. Los derechos del procurador, al estar sujetos a arancel, se tasan conforme a este. Mientras no haya condena firme ni pago de la contraria, el cliente responde frente a su procurador de las cantidades devengadas.",
  ] },
  { h: "Orientación por tipo de procedimiento", p: [
    "Sin dar cifras que dependen de cada caso, la experiencia permite orientar: un juicio monitorio que no se opone suele tener un coste reducido porque se tramitan pocas actuaciones; un juicio verbal o un procedimiento de familia de mutuo acuerdo se sitúan en una franja moderada; un procedimiento ordinario de cuantía elevada con recursos o una ejecución hipotecaria con subasta generan más actuaciones y, por tanto, mayores derechos.",
    "En los procedimientos de familia de cuantía indeterminada, como divorcios o modificaciones de medidas, el arancel prevé importes específicos. En las ejecuciones, la base se calcula sobre la cantidad por la que se despacha ejecución.",
  ] },
  { h: "Cómo pedir presupuesto", p: [
    "Basta con llamar o escribir por WhatsApp o correo indicando el partido judicial, el tipo de procedimiento, la cuantía aproximada y la fase en que está el asunto. Con esos datos se puede dar una estimación por escrito antes de asumir el encargo, sin compromiso.",
  ] },
];

const FAQ = [
  { q: "¿Cuánto cobra un procurador en Valencia?", a: "Lo que establece el arancel del Real Decreto 1373/2003, aplicado según la cuantía y el tipo de procedimiento, más IVA y suplidos. Es igual en Valencia que en el resto de España. Se puede pedir un presupuesto previo sin compromiso." },
  { q: "¿Hay procuradores baratos en Valencia?", a: "Al estar regulado por arancel, las diferencias de precio entre procuradores son limitadas, aunque la norma permite pactar variaciones dentro de los márgenes legales. Más que buscar el precio más bajo, conviene valorar la diligencia en notificaciones y plazos." },
  { q: "¿Los honorarios del procurador entran en costas?", a: "Sí. Según el artículo 241 de la LEC, los derechos del procurador forman parte de las costas. Si la parte contraria es condenada en costas, deberá reembolsarlos tras la tasación." },
];

export const Route = createFileRoute("/precio-procurador-valencia")({
  head: () => seo({ title: "Cuánto cobra un procurador en Valencia | Aranceles", description: "Cuánto cobra un procurador en Valencia: cómo funciona el arancel, de qué depende el precio, quién paga las costas y cómo pedir presupuesto.", path: "/precio-procurador-valencia" }),
  component: Page,
});

function Page() {
  return <>
    <JsonLd data={faqJsonLd(FAQ)} />
    <JsonLd data={breadcrumbJsonLd([{ name: "Inicio", path: "/" }, { name: "Precio del procurador", path: "/precio-procurador-valencia" }])} />
    <PageHeader eyebrow="Aranceles y honorarios" title="Cuánto cobra un procurador en Valencia." intro={<p>Los derechos del procurador están regulados por arancel. Explicamos cómo se calculan, qué los hace variar y cómo obtener un presupuesto antes de encargar el asunto.</p>} />
    <Section label="Arancel" title="Un precio regulado, no arbitrario."><Prose blocks={BLOCKS} /></Section>
    <Section label="Preguntas frecuentes" title="Dudas habituales sobre honorarios."><Faq items={FAQ} /></Section>
    <Section label="Páginas relacionadas"><Related links={[
      { to: "/procurador-valencia", label: "Procurador en Valencia capital" },
      { to: "/procedimientos-civiles-ejecuciones", label: "Ejecuciones y procedimientos civiles" },
      { to: "/subastas-judiciales-valencia", label: "Subastas judiciales en Valencia" },
    ]} /></Section>
    <ContactBand title="Pide presupuesto sin compromiso." />
  </>;
}
