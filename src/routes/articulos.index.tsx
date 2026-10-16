import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/site";
import { ARTICLES } from "@/lib/articles";
import { PageHeader } from "@/components/site/blocks";

export const Route = createFileRoute("/articulos/")({
  head: () => seo({
    title: "Artículos sobre procura | Mas Castellano Procurador",
    description: "Artículos prácticos para abogados y despachos sobre la función del procurador, la colaboración procesal y la coordinación de procedimientos.",
    path: "/articulos",
  }),
  component: Page,
});

const fmt = (d: string) => new Date(d).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });

function Page() {
  return (
    <>
      <PageHeader eyebrow="Artículos" title="Notas sobre la práctica procesal." intro={<p>Contenidos prácticos para profesionales jurídicos sobre la función del procurador y la colaboración con los despachos.</p>} />
      <section className="container-site">
        <ul className="border-b border-border">
          {ARTICLES.map((a) => (
            <li key={a.slug} className="border-t border-border">
              <Link to="/articulos/$slug" params={{ slug: a.slug }} className="group grid gap-4 py-10 md:grid-cols-12">
                <time dateTime={a.date} className="eyebrow md:col-span-3 md:pt-2">{fmt(a.date)}</time>
                <div className="md:col-span-9">
                  <h2 className="text-2xl leading-snug group-hover:underline group-hover:underline-offset-4 md:text-3xl">{a.title}</h2>
                  <p className="mt-3 max-w-2xl text-muted-foreground">{a.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
