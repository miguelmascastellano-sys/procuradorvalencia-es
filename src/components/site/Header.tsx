import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); } };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return <header className="relative z-40 border-b border-border bg-background">
    <div className="container-site flex h-20 items-center justify-between gap-4 lg:h-24">
      <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="MMC Procuradores, inicio">
        <span className="border-r border-bronze/50 pr-3 font-serif text-[2.1rem] leading-none text-primary">MMC</span>
        <span className="text-[0.65rem] font-semibold uppercase text-primary">Procuradores</span>
      </Link>
      <nav aria-label="Principal" className="hidden xl:block"><ul className="flex items-center gap-6 text-[0.8rem]">{NAV.map(n => <li key={n.to}><Link to={n.to} className="link-quiet py-3 text-muted-foreground hover:text-primary" activeProps={{ className: "text-primary" }} activeOptions={{ exact: n.to === "/" }}>{n.label}</Link></li>)}</ul></nav>
      <div className="flex items-center gap-3"><Button asChild className="hidden md:inline-flex"><Link to="/contacto">Solicitar colaboración<ArrowUpRight /></Link></Button>
        <Button ref={toggle} variant="ghost" size="icon" className="xl:hidden" aria-expanded={open} aria-controls="menu-movil" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(v => !v)}>{open ? <X /> : <Menu />}</Button></div>
    </div>
    {open && <nav id="menu-movil" aria-label="Principal móvil" className="border-t border-border bg-background xl:hidden"><ul className="container-site grid py-4 sm:grid-cols-2">{NAV.map(n => <li key={n.to}><Link to={n.to} onClick={() => setOpen(false)} className="block py-3 font-serif text-2xl">{n.label}</Link></li>)}<li className="py-3"><Button asChild><Link to="/contacto" onClick={() => setOpen(false)}>Solicitar colaboración<ArrowUpRight /></Link></Button></li></ul></nav>}
  </header>;
}
