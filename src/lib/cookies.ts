export const COOKIE_KEY = "mmc-cookie-preferences";
export const COOKIE_VERSION = "2026-10-18";
export const COOKIE_LIFETIME_MS = 180 * 24 * 60 * 60 * 1000;
export type CookieChoice = { version: string; savedAt: number; necessary: true; preferences: false; analytics: false; advertising: false };
// There are no optional site-authored services. Never invent optional consent.
export function makeCookieChoice(now = Date.now()): CookieChoice {
  return { version: COOKIE_VERSION, savedAt: now, necessary: true, preferences: false, analytics: false, advertising: false };
}
export function readCookieChoice(value: string | null, now = Date.now()): CookieChoice | null {
  if (!value) return null;
  try {
    const choice = JSON.parse(value);
    if (choice.version !== COOKIE_VERSION || typeof choice.savedAt !== "number" || choice.savedAt > now || now - choice.savedAt >= COOKIE_LIFETIME_MS || choice.necessary !== true || choice.preferences !== false || choice.analytics !== false || choice.advertising !== false) return null;
    return choice;
  } catch { return null; }
}