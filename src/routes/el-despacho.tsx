import { createFileRoute, Link } from "@tanstack/react-router";
import detalle from "@/assets/despacho-detalle.jpg";
import { seo } from "@/lib/site";
import { PRINCIPLES } from "@/lib/services";
import { ContactBand, Numbered, PageHeader, Section } from "@/components/site/blocks";

export const Route = createFileRoute("/el-despacho")({
  head: () => seo({
    title: "El despacho | Mas Castellano Procurador",
    description: "Mas Castellano Procurador: una firma de procura orientada a la colaboración con abogados y despachos, desde Valencia y con proyección nacional.",
    path: "/el-despacho",
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="El despacho" title="La procura, entendida como una colaboración profesional." intro={<p>Una firma de procura con base en Valencia, orientada a abogados, despachos y departamentos jurídicos que valoran la organización y la comunicación directa.</p>} />
      <Section label="Enfoque">
        <div className="grid gap-12 md:grid-cols-9">
          <div className="space-y-5 text-lg leading-relaxed md:col-span-5">
            <p>La actividad procesal exige organización, atención al detalle y una coordinación constante entre los profesionales que intervienen en cada procedimiento.</p>
            <p className="text-muted-foreground">Mas Castellano Procurador desarrolla su actividad con una orientación clara: ofrecer a abogados y despachos una colaboración procesal rigurosa, con interlocución directa, seguimiento de las actuaciones y una gestión adaptada a las necesidades de cada asunto.</p>
            <p className="text-muted-foreground">Con base en la experiencia práctica en la tramitación de procedimientos, el despacho apuesta por una forma de trabajar organizada, profesional y cercana.</p>
          </div>
          <img src={detalle} alt="Mesa de trabajo con expedientes ordenados" width={1200} height={1408} loading="lazy" className="aspect-[4/5] w-full object-cover md:col-span-4" />
        </div>
      </Section>
      <Section label="Forma de trabajo" title="Rigor procesal. Comunicación directa. Coordinación.">
        <Numbered items={PRINCIPLES} />
      </Section>
      <Section label="El profesional" title="Miguel Mas Castellano. Procurador de los Tribunales.">
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>Mi trayectoria profesional incluye experiencia como oficial habilitado en despachos con una importante carga de procedimientos bancarios, ejecuciones y gestión procesal, así como experiencia en la coordinación de asuntos en distintos territorios.</p>
          <p>Esta experiencia me ha permitido conocer de primera mano las necesidades operativas de los despachos y la importancia de una gestión procesal organizada, una comunicación clara y una coordinación eficaz entre profesionales.</p>
          <p>Desde Mas Castellano Procurador, mi objetivo es ofrecer una colaboración profesional rigurosa y adaptada a las necesidades de cada procedimiento.</p>
        </div>
        <Link to="/procurador-para-abogados" className="link-quiet mt-10 inline-block text-sm">Cómo colaboramos con despachos →</Link>
      </Section>
      <ContactBand />
    </>
  );
}
