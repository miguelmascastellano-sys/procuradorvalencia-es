import { describe, expect, it } from "vitest";
import { goneResponse, isRetiredPath } from "@/lib/retired-paths";

describe("rutas retiradas (spam heredado)", () => {
  it.each([
    "/mature/tutelivev",
    "/webcam/wunavov",
    "/casting/cawoyahah",
    "/exclusive/ubuficuc",
    "/new/obakuciyo",
    "/british/lowiwu",
    "/2024/eluyix",
    "/2025/27659",
    "/MATURE/Tutelivev",
  ])("%s responde 410", (path) => {
    expect(isRetiredPath(path)).toBe(true);
  });

  it.each([
    "/",
    "/procurador-valencia",
    "/precio-procurador-valencia",
    "/articulos",
    "/articulos/funciones-del-procurador",
    "/calculadora-aranceles",
    "/contacto",
    "/sitemap.xml",
    "/robots.txt",
    "/2024",
    "/nuevo-servicio",
    "/newsletter",
  ])("%s NO se marca como retirada", (path) => {
    expect(isRetiredPath(path)).toBe(false);
  });

  it("la respuesta es 410 y noindex", () => {
    const r = goneResponse();
    expect(r.status).toBe(410);
    expect(r.headers.get("x-robots-tag")).toBe("noindex");
  });
});
