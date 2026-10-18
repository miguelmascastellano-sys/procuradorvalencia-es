import { createFileRoute, redirect } from "@tanstack/react-router";

// Permanent redirect: old URL kept working after the SEO restructure.
export const Route = createFileRoute("/procurador-comunidad-valenciana")({
  beforeLoad: () => { throw redirect({ to: "/procurador-provincia-valencia", statusCode: 301 }); },
});
