import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/site";
import { ContactBand, PageHeader, Section } from "@/components/site/blocks";

export const Route = createFileRoute("/ambito-actuacion")({
  head: () => seo({
    title: "Ámbito de actuación: Valencia y nacional | MMC Procuradores",
    description: "Actividad centrada en Valencia y la Comunidad Valenciana, con coordinación de procedimientos en otros territorios mediante procuradores colaboradores.",
    path: "/ambito-actuacion",
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Ámbito de actuación" title="Valencia como prioridad. Colaboración profesional en el ámbito nacional." intro={<>
        <p>MMC Procuradores orienta su actividad principalmente a Valencia y la Comunidad Valenciana, con coordinación de procedimientos en otros territorios mediante profesionales colaboradores, previa valoración del asunto.</p>
        <p className="mt-4">La colaboración no supone la existencia de oficinas propias en otros territorios.</p>
      </>} />
      <Section label="Ámbito prioritario" title="Comunidad Valenciana">
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">Prioridad comercial y territorial, con especial atención a Valencia. Es el ámbito en el que el despacho concentra su actividad y su relación diaria con abogados y firmas jurídicas.</p>
        <div className="mt-8 flex flex-wrap gap-8 text-sm">
          <Link to="/procurador-valencia" className="link-quiet">Procurador en Valencia →</Link>
          <Link to="/procurador-comunidad-valenciana" className="link-quiet">Procurador en la Comunidad Valenciana →</Link>
        </div>
      </Section>
      <Section label="Colaboración nacional" title="Ámbito nacional">
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">Coordinación de procedimientos en otros territorios a través de colaboradores profesionales, manteniendo un interlocutor de referencia para el despacho.</p>
        <Link to="/procurador-nacional" className="link-quiet mt-8 inline-block text-sm">Procurador de ámbito nacional →</Link>
      </Section>
      <ContactBand />
    </>
  );
}
