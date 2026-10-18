import type { ReactNode } from "react";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="container-site py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">Información legal</p>
        <h1 className="mt-6 text-4xl md:text-5xl">{title}</h1>
        <div className="prose-site mt-12 border-t border-rule pt-10">{children}</div>
      </div>
    </article>
  );
}
