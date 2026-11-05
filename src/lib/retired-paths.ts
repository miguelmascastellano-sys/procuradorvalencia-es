/**
 * Rutas que pertenecían a contenido anterior de este dominio (spam heredado, antes de la web actual).
 * No existen en el sitio: se responden con 410 Gone para que Google las descarte antes.
 * Ninguna ruta real de la web empieza por estos prefijos.
 */
const RETIRED_PREFIXES = ["/mature/", "/webcam/", "/casting/", "/exclusive/", "/new/", "/british/"];
const RETIRED_YEAR_PATH = /^\/(2024|2025)\/[^/]+\/?$/;

export function isRetiredPath(pathname: string): boolean {
  let p = pathname;
  try {
    p = decodeURIComponent(pathname).toLowerCase();
  } catch {
    p = pathname.toLowerCase();
  }
  return RETIRED_PREFIXES.some((prefix) => p.startsWith(prefix)) || RETIRED_YEAR_PATH.test(p);
}

export function goneResponse(): Response {
  return new Response(
    "<!doctype html><html lang=\"es\"><head><meta charset=\"utf-8\"><meta name=\"robots\" content=\"noindex\"><title>Contenido eliminado</title></head><body><h1>410 · Contenido eliminado</h1><p>Esta dirección ya no existe.</p></body></html>",
    {
      status: 410,
      headers: { "content-type": "text/html; charset=utf-8", "x-robots-tag": "noindex" },
    },
  );
}
