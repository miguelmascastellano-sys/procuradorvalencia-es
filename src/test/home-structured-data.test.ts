import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import { Route } from "@/routes/index";

type Head = {
  meta: Record<string, string | undefined>[];
  scripts?: { type?: string; children?: string }[];
};

const head = (Route.options.head!({} as never) as Head) ?? {};

const scripts = head.scripts ?? [];
const metaDescription = head.meta.find((m) => m["name"] === "description")?.["content"];

describe("Home structured data", () => {
  it("has exactly one JSON-LD script in the head", () => {
    expect(scripts).toHaveLength(1);
    expect(scripts[0]?.["type"]).toBe("application/ld+json");
  });

  it("declares the LegalService with the given fields", () => {
    const data = JSON.parse(scripts[0]!.children!);

    expect(data).toEqual({
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "MMC Procuradores",
      url: "https://procuradorvalencia.es",
      telephone: "+34644206106",
      email: "mmc.procurador@outlook.es",
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
      description: metaDescription,
    });
  });

  it("reuses the meta description verbatim", () => {
    const data = JSON.parse(scripts[0]!.children!);

    expect(metaDescription).toBeTruthy();
    expect(data.description).toBe(metaDescription);
  });

  it("keeps the body free of a second LegalService entry", () => {
    const source = readFileSync(resolve(process.cwd(), "src/routes/index.tsx"), "utf8");

    expect(source).not.toMatch(/<JsonLd[^>]*data=\{legalServiceJsonLd/);
  });
});
