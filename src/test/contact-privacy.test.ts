import { describe, expect, it } from "vitest";
import { SITE } from "@/lib/site";
import { COOKIE_KEY, COOKIE_LIFETIME_MS, COOKIE_VERSION, makeCookieChoice, readCookieChoice } from "@/lib/cookies";
describe("Contact channels", () => {
  it("addresses only the specified professional mailbox", () => { expect(SITE.contactHref.split("?")[0]).toBe("mailto:mmc.procurador@outlook.es"); });
  it("opens the requested collaboration subject", () => { expect(new URL(SITE.contactHref).searchParams.get("subject")).toBe("Colaboración profesional en procura"); });
  it("calls the Valencia number", () => { expect(SITE.phoneHref).toBe("tel:+34644206106"); });
  it("opens WhatsApp on the same number", () => { expect(SITE.whatsappHref).toBe("https://wa.me/34644206106"); });
  it("uses procuradorvalencia.es as canonical origin", () => { expect(SITE.url).toBe("https://procuradorvalencia.es"); });
});
describe("Only real cookie categories", () => {
  it("acceptance cannot activate absent optional services", () => { expect(makeCookieChoice(1000)).toEqual({ version: COOKIE_VERSION, savedAt: 1000, necessary: true, preferences: false, analytics: false, advertising: false }); });
  it("rejects a record enabling tracking", () => { expect(readCookieChoice(JSON.stringify({ ...makeCookieChoice(1000), analytics: true }), 2000)).toBeNull(); });
  it("persists a valid decision without identifiers", () => { const choice = makeCookieChoice(1000); expect(readCookieChoice(JSON.stringify(choice), 2000)).toEqual(choice); expect(COOKIE_KEY).toBe("mmc-cookie-preferences"); });
  it("renews after 180 days", () => { expect(COOKIE_LIFETIME_MS).toBe(180 * 24 * 60 * 60 * 1000); expect(readCookieChoice(JSON.stringify(makeCookieChoice(1000)), 1000 + COOKIE_LIFETIME_MS)).toBeNull(); });
  it("renews on policy version change", () => { expect(readCookieChoice(JSON.stringify({ ...makeCookieChoice(1000), version: "old" }), 2000)).toBeNull(); });
});