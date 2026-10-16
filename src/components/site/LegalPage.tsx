import type { ReactNode } from "react";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="container-site pt-20 md:pt-28">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">Información legal</p>
        <h1 className="mt-6 text-4xl md:text-5xl">{title}</h1>
        <div className="prose-site mt-12 border-t border-rule pt-10">{children}</div>
      </div>
    </article>
  );
}
