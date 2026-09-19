"use client";

import { useEffect } from "react";

import {
  analyticsConsentEvent,
  consentStorageKey,
  isConsentChoice,
} from "@/lib/consent";

const clarityProjectId = "rb0e17se05";

type ConsentState = "granted" | "denied";
type ClarityCommand =
  | readonly [action: "set", key: string, value: string]
  | readonly [action: "event", eventName: string]
  | readonly [
      action: "identify",
      customId: string,
      customSessionId?: string,
      customPageId?: string,
      friendlyName?: string,
    ]
  | readonly [action: "consent", granted: boolean]
  | readonly [
      action: "consentv2",
      settings: Readonly<{
        ad_storage?: ConsentState;
        analytics_storage?: ConsentState;
      }>,
    ]
  | readonly [action: "upgrade", reason: string];

type ClarityFunction = {
  (...command: ClarityCommand): void;
  readonly q: ClarityCommand[];
};

declare global {
  interface Window {
    clarity?: ClarityFunction;
  }
}

function createClarityQueue(): ClarityFunction {
  const queue: ClarityCommand[] = [];
  return Object.assign((...command: ClarityCommand) => queue.push(command), {
    q: queue,
  });
}

function loadClarity(): void {
  if (document.querySelector(`[data-clarity-project="${clarityProjectId}"]`))
    return;

  const clarity = window.clarity ?? createClarityQueue();
  window.clarity = clarity;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${clarityProjectId}`;
  script.dataset["clarityProject"] = clarityProjectId;
  document.head.appendChild(script);
}

export default function AnalyticsConsent() {
  useEffect(() => {
    const consent = localStorage.getItem(consentStorageKey);
    if (isConsentChoice(consent) && consent === "all") loadClarity();

    const handleConsent = () => loadClarity();
    window.addEventListener(analyticsConsentEvent, handleConsent);
    return () =>
      window.removeEventListener(analyticsConsentEvent, handleConsent);
  }, []);

  return null;
}
