import type { ReactNode } from "react";
import { PageHeader } from "./blocks";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return <article>
    <PageHeader eyebrow="Información legal" title={title} />
    <div className="container-site grid gap-8 py-12 md:grid-cols-12 md:py-20">
      <p className="editorial-kicker text-bronze md:col-span-3">MMC Procuradores</p>
      <div className="legal-body prose-site min-w-0 md:col-span-8 md:col-start-5">{children}</div>
    </div>
  </article>;
}
