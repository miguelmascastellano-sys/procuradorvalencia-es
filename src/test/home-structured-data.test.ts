import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import { Route } from "@/routes/index";

const head = Route.head!({} as never) as {
  meta: { [k: string]: string | undefined }[];
  scripts?: { type?: string; children?: string }[];
};

describe("Home structured data", () => {
  it("has exactly one JSON-LD script in the head", () => {
    expect(head.scripts).toHaveLength(1);
    expect(head.scripts?.[0].type).toBe("application/ld+json");
  });

  it("declares the LegalService with the given fields", () => {
    const data = JSON.parse(head.scripts![0].children!);

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
      description: head.meta.find((m) => m.name === "description")?.content,
    });
  });

  it("reuses the meta description verbatim", () => {
    const data = JSON.parse(head.scripts![0].children!);
    const meta = head.meta.find((m) => m.name === "description")?.content;

    expect(data.description).toBe(meta);
    expect(meta).toBeTruthy();
  });

  it("keeps the body free of a second LegalService entry", () => {
    const source = readFileSync(resolve(process.cwd(), "src/routes/index.tsx"), "utf8");

    expect(source).not.toMatch(/<JsonLd[^>]*data=\{legalServiceJsonLd/);
  });
});
