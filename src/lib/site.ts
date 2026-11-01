export const BASE_URL = "https://procuradorvalencia.es";

export const SITE = {
  name: "MMC Procuradores",
  professional: "Miguel Mas Castellano",
  role: "Procurador de los Tribunales",
  email: "mmc.procurador@outlook.es",
  contactSubject: "Colaboración profesional en procura",
  contactHref: "mailto:mmc.procurador@outlook.es?subject=Colaboraci%C3%B3n%20profesional%20en%20procura",
  url: BASE_URL,
  phone: "644 206 106",
  phoneHref: "tel:+34644206106",
  whatsappHref: "https://wa.me/34644206106",
  address: "C/ Bolivia, 14, Valencia",
  college: "Ilustre Colegio de Procuradores de Valencia (ICOPAL)",
  collegeNumber: "660",
  tagline: "La Justicia no espera. Nosotros tampoco.",
} as const;

export const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/el-despacho", label: "El despacho" },
  { to: "/servicios-procurador", label: "Servicios" },
  { to: "/procurador-provincia-valencia", label: "Provincia" },
  { to: "/precio-procurador-valencia", label: "Precio" },
  { to: "/articulos", label: "Artículos" },
  { to: "/contacto", label: "Contacto" },
] as const;

type SeoInput = { title: string; description: string; path: string; type?: "website" | "article" };

/** Per-route head(): unique title, description, canonical and Open Graph. */
export function seo({ title, description, path, type = "website" }: SeoInput) {
  const url = `${BASE_URL}${path === "/" ? "" : path}`;
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

/**
 * LegalService structured data for the home page. Rendered as a single
 * <script type="application/ld+json"> in <head>; the description is passed in so
 * it can never drift from the page's meta description.
 */
export const legalServiceJsonLd = (description: string) => ({
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: SITE.name,
  url: SITE.url,
  telephone: "+34644206106",
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "C/ Bolivia, 14",
    addressLocality: "Valencia",
    addressRegion: "Valencia",
    addressCountry: "ES",
  },
  areaServed: [
    { "@type": "City", name: "Valencia" },
    { "@type": "AdministrativeArea", name: "Provincia de Valencia" },
  ],
  description,
});

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  inLanguage: "es",
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.professional,
  jobTitle: SITE.role,
  worksFor: { "@type": "LegalService", name: SITE.name, url: SITE.url },
  email: SITE.email,
  knowsLanguage: ["es"],
};

/** BreadcrumbList JSON-LD for a leaf page. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path === "/" ? "" : it.path}`,
    })),
  };
}
