import { Link } from "@tanstack/react-router";
import { NAV, SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";

const AREAS = [
  { to: "/procurador-valencia", label: "Procurador en Valencia" },
  { to: "/procurador-comunidad-valenciana", label: "Procurador en la Comunidad Valenciana" },
  { to: "/procurador-para-abogados", label: "Procurador para abogados" },
  { to: "/procurador-nacional", label: "Procurador de ámbito nacional" },
  { to: "/procedimientos-civiles-ejecuciones", label: "Procedimientos civiles y ejecuciones" },
  { to: "/procedimientos-familia", label: "Procedimientos de familia" },
  { to: "/procedimientos-bancarios", label: "Procedimientos bancarios" },
  { to: "/articulos", label: "Artículos" },
] as const;

export function Footer() {
  return (
    <footer className="mt-0 bg-ink text-ink-foreground">
      <div className="container-site grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-serif text-3xl">MMC Procuradores</p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed opacity-75">Representación procesal y colaboración con abogados y despachos. Valencia, Comunidad Valenciana y coordinación en otros territorios.</p>
          <p className="mt-3 text-sm opacity-70">
            {SITE.professional}, {SITE.role}.
          </p>
          <div className="mt-8 space-y-1 text-sm">
            <a href={SITE.phoneHref} className="link-quiet block w-fit">{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`} className="link-quiet block w-fit">{SITE.email}</a>
          </div>
        </div>
        <nav aria-label="Pie de página" className="md:col-span-3">
          <p className="mb-4 text-[0.7rem] uppercase opacity-60">Navegación</p>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="link-quiet">{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Áreas" className="md:col-span-4">
          <p className="mb-4 text-[0.7rem] uppercase opacity-60">Procura</p>
          <ul className="space-y-2 text-sm">
            {AREAS.map((n) => (
              <li key={n.to}><Link to={n.to} className="link-quiet">{n.label}</Link></li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-ink-foreground/15">
        <div className="container-site flex flex-col gap-3 py-6 text-xs opacity-70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} MMC Procuradores</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li><Link to="/aviso-legal" className="link-quiet">Aviso legal</Link></li>
            <li><Link to="/politica-privacidad" className="link-quiet">Política de privacidad</Link></li>
            <li><Link to="/politica-cookies" className="link-quiet">Política de cookies</Link></li>
            <li><Button variant="inverseOutline" className="min-h-11 text-xs" onClick={() => window.dispatchEvent(new Event("mmc:cookie-settings"))}>Configurar cookies</Button></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
