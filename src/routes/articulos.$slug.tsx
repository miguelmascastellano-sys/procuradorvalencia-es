import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { seo, SITE } from "@/lib/site";
import { getArticle } from "@/lib/articles";
import { ContactBand, JsonLd } from "@/components/site/blocks";

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
      <article className="container-site pt-20 md:pt-28">
        <div className="mx-auto max-w-3xl">
          <Link to="/articulos" className="eyebrow link-quiet">← Artículos</Link>
          <h1 className="mt-8 text-4xl leading-[1.1] md:text-[3.25rem]">{a.title}</h1>
          <p className="mt-6 text-sm text-muted-foreground">
            {SITE.professional} · <time dateTime={a.date}>{new Date(a.date).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}</time>
          </p>
          <div className="prose-site mt-12 border-t border-rule pt-10">
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
