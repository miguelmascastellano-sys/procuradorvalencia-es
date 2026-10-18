import { createFileRoute, redirect } from "@tanstack/react-router";

// Permanent redirect: old URL kept working after the SEO restructure.
export const Route = createFileRoute("/procurador-nacional")({
  beforeLoad: () => { throw redirect({ to: "/procurador-valencia-despachos-otras-provincias", statusCode: 301 }); },
});
