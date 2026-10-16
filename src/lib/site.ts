export const SITE = {
  name: "Mas Castellano Procuradores",
  professional: "Miguel Mas Castellano",
  role: "Procurador de los Tribunales",
  phone: "644 20 61 06",
  phoneHref: "tel:+34644206106",
  email: "miguel.mas@icopal.org",
  url: "https://mascastellanoprocuradores.com",
} as const;

export const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/el-despacho", label: "El despacho" },
  { to: "/servicios-procurador", label: "Servicios" },
  { to: "/ambito-actuacion", label: "Ámbito de actuación" },
  { to: "/contacto", label: "Contacto" },
] as const;

type SeoInput = { title: string; description: string; path: string; type?: "website" | "article" };

/** Per-route head(): unique title, description, canonical and Open Graph. */
export function seo({ title, description, path, type = "website" }: SeoInput) {
  const url = `${SITE.url}${path === "/" ? "" : path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:locale", content: "es_ES" },
      { property: "og:site_name", content: SITE.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: SITE.name,
  url: SITE.url,
  telephone: "+34 644 20 61 06",
  email: SITE.email,
  areaServed: [
    { "@type": "City", name: "Valencia" },
    { "@type": "AdministrativeArea", name: "Comunidad Valenciana" },
    { "@type": "Country", name: "España" },
  ],
  founder: { "@type": "Person", name: SITE.professional, jobTitle: SITE.role },
  knowsLanguage: ["es"],
};
