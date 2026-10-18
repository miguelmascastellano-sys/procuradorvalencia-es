import { describe, expect, it } from "vitest";
import { contactSchema, contactSpamError } from "@/lib/contact-schema";
import { COOKIE_KEY, COOKIE_LIFETIME_MS, COOKIE_VERSION, makeCookieChoice, readCookieChoice } from "@/lib/cookies";
const inquiry = { name: "Prueba profesional", email: "prueba@example.org", collaborationType: "colaboracion-despacho", message: "Consulta para colaboración profesional.", elapsedMs: 3000 };
describe("Contact privacy rules", () => {
  it("does not require generic privacy consent", () => { expect(contactSchema.safeParse(inquiry).success).toBe(true); });
  it("keeps firm optional", () => { expect(contactSchema.parse(inquiry).firm).toBe(""); });
  it("keeps phone optional", () => { expect(contactSchema.parse(inquiry).phone).toBe(""); });
  it("requires a collaboration type", () => { expect(contactSchema.safeParse({ ...inquiry, collaborationType: "" }).success).toBe(false); });
  it("validates email", () => { expect(contactSchema.safeParse({ ...inquiry, email: "incorrecto" }).success).toBe(false); });
  it("does not silently claim receipt for fast submissions", () => { expect(contactSpamError({ elapsedMs: 100 })).not.toBeNull(); });
  it("does not silently claim receipt for a honeypot submission", () => { expect(contactSpamError({ elapsedMs: 3000, website: "spam" })).not.toBeNull(); });
});
describe("Only real cookie categories", () => {
  it("acceptance cannot activate absent optional services", () => { expect(makeCookieChoice(1000)).toEqual({ version: COOKIE_VERSION, savedAt: 1000, necessary: true, preferences: false, analytics: false, advertising: false }); });
  it("rejects a record enabling tracking", () => { expect(readCookieChoice(JSON.stringify({ ...makeCookieChoice(1000), analytics: true }), 2000)).toBeNull(); });
  it("persists a valid decision without identifiers", () => { const choice = makeCookieChoice(1000); expect(readCookieChoice(JSON.stringify(choice), 2000)).toEqual(choice); expect(COOKIE_KEY).toBe("mmc-cookie-preferences"); });
  it("renews after 180 days", () => { expect(COOKIE_LIFETIME_MS).toBe(180 * 24 * 60 * 60 * 1000); expect(readCookieChoice(JSON.stringify(makeCookieChoice(1000)), 1000 + COOKIE_LIFETIME_MS)).toBeNull(); });
  it("renews on policy version change", () => { expect(readCookieChoice(JSON.stringify({ ...makeCookieChoice(1000), version: "old" }), 2000)).toBeNull(); });
});