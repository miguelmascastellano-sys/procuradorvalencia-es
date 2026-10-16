import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-site flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex flex-col leading-none" onClick={() => setOpen(false)} aria-label="Mas Castellano Procurador, inicio">
          <span className="font-serif text-[1.35rem] tracking-[0.02em] text-foreground">Mas Castellano</span>
          <span className="mt-1 text-[0.62rem] tracking-[0.32em] uppercase text-muted-foreground">Procurador</span>
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="link-quiet py-1 text-muted-foreground transition-colors hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          to="/contacto"
          className="hidden border border-foreground px-4 py-2 text-sm text-foreground transition-colors hover:bg-foreground hover:text-background lg:inline-block"
        >
          Contacto profesional
        </Link>

        <button
          type="button"
          className="p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav id="menu-movil" aria-label="Principal móvil" className="border-t border-border lg:hidden">
          <ul className="container-site flex flex-col py-4">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} onClick={() => setOpen(false)} className="block py-3 font-serif text-xl">
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link to="/contacto" onClick={() => setOpen(false)} className="inline-block border border-foreground px-4 py-2 text-sm">
                Contacto profesional
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
