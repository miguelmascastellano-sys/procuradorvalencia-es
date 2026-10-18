import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { COOKIE_KEY, makeCookieChoice, readCookieChoice } from "@/lib/cookies";

export function CookiePreferences() {
  const [banner, setBanner] = useState(false);
  const [open, setOpen] = useState(false);
  const [storageError, setStorageError] = useState(false);
  useEffect(() => {
    try { setBanner(!readCookieChoice(localStorage.getItem(COOKIE_KEY))); } catch { setBanner(true); }
    const reopen = () => setOpen(true);
    window.addEventListener("mmc:cookie-settings", reopen);
    return () => window.removeEventListener("mmc:cookie-settings", reopen);
  }, []);
  function save() {
    try { localStorage.setItem(COOKIE_KEY, JSON.stringify(makeCookieChoice())); setStorageError(false); }
    catch { setStorageError(true); }
    setBanner(false); setOpen(false);
  }
  return <>
    {banner && <section aria-label="Preferencias de cookies" className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background shadow-lg">
      <div className="container-site flex flex-col gap-5 py-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl"><p className="flex items-center gap-2 font-medium"><ShieldCheck className="h-4 w-4 text-bronze" />Tu privacidad</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">No incorporamos analítica ni publicidad. Guardamos únicamente tu elección en este navegador. <Link to="/politica-cookies" className="underline underline-offset-4">Política de cookies</Link>.</p></div>
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap"><Button variant="outline" onClick={save}>Aceptar todas</Button><Button variant="outline" onClick={save}>Rechazar todas</Button><Button variant="ghost" className="col-span-2" onClick={() => setOpen(true)}>Configurar cookies</Button></div>
      </div>
    </section>}
    {storageError && <p role="status" className="fixed bottom-2 left-2 z-40 max-w-sm border border-border bg-background p-3 text-sm">Tu navegador no permite guardar la elección. No se activará ningún servicio opcional.</p>}
    <Dialog open={open} onOpenChange={setOpen}><DialogContent className="max-h-[85dvh] w-[calc(100%-2rem)] overflow-y-auto">
      <DialogTitle className="pr-6 font-serif text-3xl font-normal">Preferencias de cookies</DialogTitle>
      <DialogDescription>No hay categorías opcionales instaladas por MMC Procuradores. Aceptar o rechazar no activa herramientas de seguimiento.</DialogDescription>
      <div className="border-y border-border py-5"><p className="flex items-center justify-between gap-4 font-medium">Almacenamiento necesario <span className="text-xs text-muted-foreground">Siempre activo</span></p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">La elección se guarda localmente durante un máximo de 180 días. No contiene tu nombre, correo ni identificadores de seguimiento.</p></div>
      <p className="text-sm leading-relaxed text-muted-foreground">Preferencias y personalización, analítica y publicidad: no utilizadas. No hay mapas, vídeos ni redes sociales incrustados.</p>
      <Link to="/politica-cookies" onClick={() => setOpen(false)} className="text-sm underline underline-offset-4">Consultar la política de cookies</Link>
      <div className="grid grid-cols-2 gap-2"><Button variant="outline" onClick={save}>Aceptar todas</Button><Button variant="outline" onClick={save}>Rechazar todas</Button><Button className="col-span-2" onClick={save}>Guardar selección</Button></div>
    </DialogContent></Dialog>
  </>;
}