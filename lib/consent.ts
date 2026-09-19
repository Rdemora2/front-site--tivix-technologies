export const consentStorageKey = "tivix-cookie-consent";
export const analyticsConsentEvent = "tivix:analytics-consent";

export type ConsentChoice = "all" | "essential";

export function isConsentChoice(value: string | null): value is ConsentChoice {
  return value === "all" || value === "essential";
}
