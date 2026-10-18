import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { seo, SITE } from "@/lib/site";
import { getArticle } from "@/lib/articles";
import { ContactBand, JsonLd, PageHeader } from "@/components/site/blocks";

export const Route = createFileRoute("/articulos/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Artículo no encontrado" }, { name: "robots", content: "noindex" }] };
    const a = loaderData.article;
    return seo({ title: `${a.title} | ${SITE.name}`, description: a.description, path: `/articulos/${params.slug}`, type: "article" });
  },
  component: Page,
});

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
                {b.p?.map((p) => <p key={p}>{p}</p>)}
                {b.list && <ul>{b.list.map((l) => <li key={l}>{l}</li>)}</ul>}
              </div>
            ))}
          </div>
        </div>
      </article>
      <ContactBand />
    </>
  );
}
