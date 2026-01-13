import Link from "next/link"
import Image from "next/image"
import LogoImage from "@/public/images/logo-tivix-full.png"

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-3 sm:mb-4 transition-all duration-500 hover:opacity-70">
              <Image
                src={LogoImage || "/placeholder.svg"}
                alt="Tivix Technologies"
                width={100}
                height={32}
                className="h-5 sm:h-6 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed max-w-xs">
              Engenharia de software para empresas que precisam de sistemas robustos, IA aplicada e automação
              inteligente.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] sm:text-xs font-medium text-neutral-400 uppercase tracking-widest mb-3">
              Serviços
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { href: "/#servicos", label: "Desenvolvimento Full Stack" },
                { href: "/#servicos", label: "Inteligência Artificial" },
                { href: "/#servicos", label: "Automação de Processos" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group relative text-neutral-500 transition-all duration-500 hover:text-white inline-block"
                  >
                    <span>{item.label}</span>
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white/50 transition-all duration-500 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] sm:text-xs font-medium text-neutral-400 uppercase tracking-widest mb-3">
              Empresa
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { href: "/contato", label: "Contato" },
                { href: "/privacidade", label: "Privacidade" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group relative text-neutral-500 transition-all duration-500 hover:text-white inline-block"
                  >
                    <span>{item.label}</span>
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white/50 transition-all duration-500 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 sm:mt-10 pt-6 border-t border-neutral-900">
          <p className="text-neutral-600 text-[10px] sm:text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Tivix Technologies. São Paulo, Brasil.
          </p>

          <div className="flex items-center gap-4">
            {[
              {
                href: "https://linkedin.com/company/tivix-technologies",
                label: "LinkedIn da Tivix",
                icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
              },
              {
                href: "https://github.com/tivix-technologies",
                label: "GitHub da Tivix",
                icon: "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z",
              },
              {
                href: "https://instagram.com/tivixtech",
                label: "Instagram da Tivix",
                icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
              },
            ].map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-neutral-600 transition-all duration-500 hover:text-white hover:scale-110"
                aria-label={social.label}
              >
                <svg
                  className="w-4 h-4 transition-transform duration-500 group-hover:rotate-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={social.icon} />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
