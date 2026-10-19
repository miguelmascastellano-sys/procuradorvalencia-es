import { Link } from "@tanstack/react-router";
import { NAV, SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";

const AREAS = [
  { to: "/procurador-valencia", label: "Procurador en Valencia" },
  { to: "/procurador-provincia-valencia", label: "Procuradores en la provincia de Valencia" },
  { to: "/precio-procurador-valencia", label: "Cuánto cobra un procurador" },
  { to: "/calculadora-aranceles", label: "Calculadora de aranceles" },
  { to: "/subastas-judiciales-valencia", label: "Subastas judiciales en Valencia" },
  { to: "/procurador-para-abogados", label: "Procurador para abogados" },
  { to: "/procurador-valencia-despachos-otras-provincias", label: "Despachos de otras provincias" },
  { to: "/procedimientos-civiles-ejecuciones", label: "Procedimientos civiles y ejecuciones" },
  { to: "/procedimientos-familia", label: "Procedimientos de familia" },
  { to: "/procedimientos-bancarios", label: "Procedimientos bancarios" },
  { to: "/procedimientos-segunda-oportunidad", label: "Segunda oportunidad y concursal" },
  { to: "/articulos", label: "Artículos" },
] as const;

export function Footer() {
  return (
    <footer className="mt-0 bg-ink text-ink-foreground">
      <div className="container-site flex flex-col gap-6 border-b border-ink-foreground/20 py-12 md:flex-row md:items-end md:justify-between"><p className="font-serif text-4xl md:text-6xl">MMC <span className="italic text-ink-foreground/60">Procuradores</span></p><p className="max-w-xs font-serif text-xl italic text-ink-foreground/70">{SITE.tagline}</p></div>
      <div className="container-site grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-xs uppercase text-ink-foreground/60">Representación y colaboración procesal</p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed opacity-75">Representación procesal y colaboración con abogados y despachos. Valencia capital y provincia, con colaboración para despachos de otras provincias.</p>
          <div className="mt-8 space-y-1 text-sm">
            <a href={SITE.phoneHref} className="link-quiet block w-fit">Tel. {SITE.phone}</a>
            <a href={SITE.whatsappHref} className="link-quiet block w-fit">WhatsApp</a>
            <a href={SITE.contactHref} className="link-quiet block w-fit break-all">{SITE.email}</a>
            <p>{SITE.address}</p>
            <p>Colegiado n.º {SITE.collegeNumber} · ICOPAL</p>
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
            <li><Button variant="editorialInverse" className="min-h-11 text-xs" onClick={() => window.dispatchEvent(new Event("mmc:cookie-settings"))}>Configurar cookies</Button></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
