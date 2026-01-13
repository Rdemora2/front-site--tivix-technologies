"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import LogoImage from "@/public/images/logo-tivix-full.png"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setError("Credenciais invalidas. Verifique seu e-mail e senha.")
    setIsLoading(false)
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <Link href="/" aria-label="Voltar para pagina inicial">
            <Image
              src={LogoImage || "/placeholder.svg"}
              alt="Tivix Technologies"
              width={140}
              height={70}
              className="h-8 sm:h-10 w-auto"
            />
          </Link>
        </div>

        {/* Titulo */}
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-xl sm:text-2xl font-semibold text-white mb-2">Bem-vindo de volta</h1>
          <p className="text-neutral-400 text-xs sm:text-sm">Entre com suas credenciais para acessar</p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <div>
            <label htmlFor="email" className="sr-only">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              required
              disabled={isLoading}
              className="w-full px-4 py-2.5 sm:py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-sm sm:text-base text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all duration-300 disabled:opacity-50"
            />
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Senha
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              required
              disabled={isLoading}
              className="w-full px-4 py-2.5 sm:py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg text-sm sm:text-base text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 transition-all duration-300 disabled:opacity-50"
            />
          </div>

          {/* Erro */}
          {error && (
            <div className="text-red-400 text-xs sm:text-sm text-center py-2 px-4 bg-red-500/10 rounded-lg border border-red-500/20">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2.5 sm:py-3 bg-white hover:bg-neutral-100 text-black text-sm sm:text-base font-medium rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Entrando...
              </span>
            ) : (
              "Entrar"
            )}
          </button>
        </form>

        {/* Link voltar */}
        <div className="mt-6 sm:mt-8 text-center">
          <Link
            href="/"
            className="text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors duration-300"
          >
            ← Voltar para o site
          </Link>
        </div>
      </div>
    </section>
  )
}
