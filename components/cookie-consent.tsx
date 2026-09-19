"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import {
  analyticsConsentEvent,
  consentStorageKey,
  isConsentChoice,
  type ConsentChoice,
} from "@/lib/consent";

function persistConsent(choice: ConsentChoice): void {
  localStorage.setItem(consentStorageKey, choice);
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(consentStorageKey);
    if (!isConsentChoice(consent)) {
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }

    return undefined;
  }, []);

  const acceptAll = (): void => {
    persistConsent("all");
    setShowBanner(false);
    window.dispatchEvent(new Event(analyticsConsentEvent));
  };

  const acceptEssential = (): void => {
    persistConsent("essential");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      className="cookie-banner fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-5xl rounded-3xl border border-white/10 bg-[#0b101a]/95 shadow-2xl backdrop-blur-xl"
      role="dialog"
      aria-label="Consentimento de cookies"
      aria-describedby="cookie-description"
    >
      <div className="px-5 py-5 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Content */}
          <div className="flex-1">
            <h3 className="mb-1 text-sm font-semibold text-white sm:text-base">
              Sua privacidade é importante
            </h3>
            <p
              id="cookie-description"
              className="text-xs sm:text-sm text-neutral-400"
            >
              Usamos armazenamento local para sua escolha e Microsoft Clarity
              apenas com consentimento. Leia nossa{" "}
              <Link
                href="/privacidade"
                className="text-white underline decoration-white/40 underline-offset-4"
              >
                Política de Privacidade
              </Link>
              .
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 lg:ml-8">
            <button
              type="button"
              onClick={acceptEssential}
              className="min-h-10 rounded-full border border-white/10 px-4 text-xs font-semibold text-slate-300 transition hover:bg-white/[0.06] sm:text-sm"
            >
              Apenas essenciais
            </button>
            <button
              type="button"
              onClick={acceptAll}
              className="min-h-10 rounded-full bg-[#79adff] px-4 text-xs font-bold text-[#07101f] transition hover:bg-[#a4c8ff] sm:text-sm"
              aria-label="Aceitar todos os cookies"
            >
              Aceitar todos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
