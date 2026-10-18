import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { ContactBand, PageHeader, Section } from "@/components/site/blocks";

export const Route = createFileRoute("/servicios-procurador")({
  head: () => seo({
    title: "Servicios de procura | MMC Procuradores",
    description: "Representación procesal, procedimientos civiles y ejecuciones, bancarios, de familia y colaboración con despachos de abogados en Valencia y otros territorios.",
    path: "/servicios-procurador",
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Servicios de procura" title="Servicios procesales para abogados y despachos." intro={<p>Cinco áreas de actuación, con un mismo criterio: seguimiento de las actuaciones, comunicación directa y adaptación a la forma de trabajar de cada despacho.</p>} />
      {SERVICES.map((s, i) => (
        <Section key={s.id} id={s.id} label={`${String(i + 1).padStart(2, "0")} · Área`} title={s.title}>
          <div className="grid gap-8 text-lg leading-relaxed md:grid-cols-2">
            <p>{s.text}</p>
            <p className="text-muted-foreground">{s.detail}</p>
          </div>
        </Section>
      ))}
      <Section label="Áreas en detalle">
        <ul className="divide-y divide-border border-y border-border">
          <li className="grid gap-x-10 gap-y-3 py-8 md:grid-cols-2">
            <h3 className="font-serif text-3xl">Civil y ejecuciones</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Declarativos, monitorios y ejecución de títulos, con impulso de las actuaciones.</p>
            <Link to="/procedimientos-civiles-ejecuciones" className="link-quiet w-fit text-sm text-bronze md:col-start-2">Ver el área →</Link>
          </li>
          <li className="grid gap-x-10 gap-y-3 py-8 md:grid-cols-2">
            <h3 className="font-serif text-3xl">Familia</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Divorcios, modificaciones de medidas y ejecución de resoluciones de familia.</p>
            <Link to="/procedimientos-familia" className="link-quiet w-fit text-sm text-bronze md:col-start-2">Ver el área →</Link>
          </li>
          <li className="grid gap-x-10 gap-y-3 py-8 md:grid-cols-2">
            <h3 className="font-serif text-3xl">Bancarios y reclamaciones</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Reclamaciones y recuperación de deuda, también en carteras con volumen.</p>
            <Link to="/procedimientos-bancarios" className="link-quiet w-fit text-sm text-bronze md:col-start-2">Ver el área →</Link>
          </li>
          <li className="grid gap-x-10 gap-y-3 py-8 md:grid-cols-2">
            <h3 className="font-serif text-3xl">Segunda oportunidad y concursal</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Concurso de persona natural y exoneración del pasivo insatisfecho, en coordinación con el abogado.</p>
            <Link to="/procedimientos-segunda-oportunidad" className="link-quiet w-fit text-sm text-bronze md:col-start-2">Ver el área →</Link>
          </li>
        </ul>
      </Section>
      <Section label="Ámbito">
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Estos servicios se prestan con prioridad en <Link to="/procurador-valencia" className="text-foreground underline underline-offset-4">Valencia</Link> y en la <Link to="/procurador-comunidad-valenciana" className="text-foreground underline underline-offset-4">Comunidad Valenciana</Link>, y se coordinan en otros territorios mediante <Link to="/procurador-nacional" className="text-foreground underline underline-offset-4">procuradores colaboradores</Link>.
        </p>
      </Section>
      <ContactBand />
    </>
  );
}
