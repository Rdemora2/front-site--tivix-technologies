"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all")
    setShowBanner(false)
    initializeAnalytics()
  }

  const acceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential")
    setShowBanner(false)
  }

  const initializeAnalytics = () => {
    // Initialize analytics here
  }

  if (!showBanner) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[99998] bg-neutral-900 border-t border-neutral-800 shadow-lg"
      role="dialog"
      aria-label="Consentimento de cookies"
      aria-describedby="cookie-description"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Content */}
          <div className="flex-1">
            <h3 className="text-sm sm:text-base font-semibold text-white mb-1">Sua privacidade e importante</h3>
            <p id="cookie-description" className="text-xs sm:text-sm text-neutral-400">
              Utilizamos cookies para melhorar sua experiencia. Ao clicar em &quot;Aceitar todos&quot;, voce concorda
              com nossa{" "}
              <Link href="/privacidade" className="text-white hover:underline">
                Politica de Privacidade
              </Link>
              .
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 lg:ml-8">
            <button
              onClick={acceptEssential}
              className="px-4 py-2 text-xs sm:text-sm font-medium text-neutral-300 bg-neutral-800 hover:bg-neutral-700 rounded-full transition duration-300"
              aria-label="Aceitar apenas cookies essenciais"
            >
              Apenas essenciais
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 text-xs sm:text-sm font-medium text-black bg-white hover:bg-neutral-100 rounded-full transition duration-300"
              aria-label="Aceitar todos os cookies"
            >
              Aceitar todos
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
