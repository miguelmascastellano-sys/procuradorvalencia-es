import { Link } from "@tanstack/react-router";
import { NAV, SITE } from "@/lib/site";

const AREAS = [
  { to: "/procurador-valencia", label: "Procurador en Valencia" },
  { to: "/procurador-comunidad-valenciana", label: "Procurador en la Comunidad Valenciana" },
  { to: "/procurador-para-abogados", label: "Procurador para abogados" },
  { to: "/procurador-nacional", label: "Procurador de ámbito nacional" },
  { to: "/articulos", label: "Artículos" },
] as const;

export function Footer() {
  return (
    <footer className="mt-32 bg-ink text-ink-foreground">
      <div className="container-site grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-serif text-3xl">Mas Castellano Procurador</p>
          <p className="mt-3 text-sm opacity-70">
            {SITE.professional}, {SITE.role}.
          </p>
          <div className="mt-8 space-y-1 text-sm">
            <a href={SITE.phoneHref} className="link-quiet block w-fit">{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`} className="link-quiet block w-fit">{SITE.email}</a>
          </div>
        </div>
        <nav aria-label="Pie de página" className="md:col-span-3">
          <p className="mb-4 text-[0.7rem] tracking-[0.18em] uppercase opacity-60">Navegación</p>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="link-quiet">{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Áreas" className="md:col-span-4">
          <p className="mb-4 text-[0.7rem] tracking-[0.18em] uppercase opacity-60">Procura</p>
          <ul className="space-y-2 text-sm">
            {AREAS.map((n) => (
              <li key={n.to}><Link to={n.to} className="link-quiet">{n.label}</Link></li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-ink-foreground/15">
        <div className="container-site flex flex-col gap-3 py-6 text-xs opacity-70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Mas Castellano Procurador</p>
          <ul className="flex flex-wrap gap-6">
            <li><Link to="/aviso-legal" className="link-quiet">Aviso legal</Link></li>
            <li><Link to="/politica-privacidad" className="link-quiet">Política de privacidad</Link></li>
            <li><Link to="/politica-cookies" className="link-quiet">Política de cookies</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
