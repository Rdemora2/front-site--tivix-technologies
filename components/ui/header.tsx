"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import LogoImage from "@/public/images/logo-tivix-full.png"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link href="/" className="relative z-10 transition-all duration-500 hover:opacity-70 hover:scale-95">
            <Image
              src={LogoImage || "/placeholder.svg"}
              alt="Tivix"
              width={100}
              height={32}
              priority
              className="h-5 sm:h-6 w-auto brightness-0 invert"
            />
          </Link>

          <Link
            href="/signin"
            className="relative text-xs sm:text-sm text-neutral-400 transition-all duration-500 hover:text-white group"
          >
            <span>Entrar</span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full" />
          </Link>
        </div>
      </div>
    </header>
  )
}
