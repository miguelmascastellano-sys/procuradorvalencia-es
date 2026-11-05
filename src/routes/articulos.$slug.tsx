import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { seo, SITE } from "@/lib/site";
import { ARTICLES, getArticle } from "@/lib/articles";
import { ContactBand, JsonLd, PageHeader } from "@/components/site/blocks";

export const Route = createFileRoute("/articulos/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      const metadata = seo({ title: "Artículo no encontrado | MMC Procuradores", description: "El artículo solicitado no está disponible. Consulta las notas de práctica procesal de MMC Procuradores.", path: `/articulos/${params.slug}` });
      return { ...metadata, meta: [...metadata.meta, { name: "robots", content: "noindex" }] };
    }
    const a = loaderData.article;
    return seo({ title: a.title.length + SITE.name.length + 3 <= 60 ? `${a.title} | ${SITE.name}` : a.title, description: a.description, path: `/articulos/${params.slug}`, type: "article" });
  },
  component: Page,
});

/** Renders inline "[texto](/ruta)" markers as real internal <a href> links. */
function withLinks(text: string) {
  return text.split(/(\[[^\]]+\]\(\/[^)]*\))/g).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\((\/[^)]*)\)$/);
    return m ? <a key={i} href={m[2]} className="underline underline-offset-4">{m[1]}</a> : part;
  });
}

function Page() {
  const { article: a } = Route.useLoaderData();
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: a.title, description: a.description, datePublished: a.date, inLanguage: "es", author: { "@type": "Person", name: SITE.professional }, publisher: { "@type": "Organization", name: SITE.name } }} />
      <PageHeader eyebrow="Notas sobre la práctica procesal" title={a.title} intro={<p>{a.description}</p>} />
      <article className="container-site grid gap-10 py-12 md:grid-cols-12 md:py-20">
        <aside className="md:col-span-3"><Link to="/articulos" className="editorial-kicker link-quiet text-bronze">← Artículos</Link>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {SITE.professional} · <time dateTime={a.date}>{new Date(a.date).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}</time>
          </p>
        </aside>
        <div className="min-w-0 md:col-span-8 md:col-start-5">
          <div className="legal-body prose-site">
            {a.body.map((b, i) => (
              <div key={i}>
                {b.h && <h2>{b.h}</h2>}
                {b.p?.map((p) => <p key={p}>{withLinks(p)}</p>)}
                {b.list && <ul>{b.list.map((l) => <li key={l}>{withLinks(l)}</li>)}</ul>}
              </div>
            ))}
          </div>
        </div>
      </article>
      <RelatedArticles currentSlug={a.slug} />
      <ContactBand />
    </>
  );
}

/** "Seguir leyendo": enlaces internos a otros artículos (3 siguientes en el listado, de forma cíclica). */
function RelatedArticles({ currentSlug }: { currentSlug: string }) {
  const i = ARTICLES.findIndex((x) => x.slug === currentSlug);
  const related = [1, 2, 3].map((n) => ARTICLES[(i + n) % ARTICLES.length]).filter((x) => x.slug !== currentSlug);
  if (related.length === 0) return null;
  return (
    <section className="container-site border-t border-border py-12 md:py-16" aria-labelledby="seguir-leyendo">
      <h2 id="seguir-leyendo" className="editorial-kicker text-bronze">Seguir leyendo</h2>
      <ul className="mt-6 grid gap-8 md:grid-cols-3">
        {related.map((r) => (
          <li key={r.slug}>
            <Link to="/articulos/$slug" params={{ slug: r.slug }} className="group block">
              <h3 className="text-xl leading-snug group-hover:underline group-hover:underline-offset-4">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
