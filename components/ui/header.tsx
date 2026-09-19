import Link from "next/link";

import Brand from "@/components/brand";
import FontScaleControl from "@/components/font-scale-control";
import ThemeToggle from "@/components/theme-toggle";
import MobileMenu from "@/components/ui/mobile-menu";
import { navigationItems } from "@/lib/navigation";

export default function Header() {
  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#050806]/78 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Brand priority />

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navegação principal"
        >
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-400 transition hover:text-white focus-visible:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <FontScaleControl />
          <ThemeToggle />
          <Link
            href="/contato"
            className="inline-flex min-h-11 items-center rounded-full bg-[#8bf0cf] px-5 text-sm font-bold text-[#07100e] transition hover:bg-[#a8f7dd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8bf0cf]"
          >
            Falar sobre um projeto
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <FontScaleControl />
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
