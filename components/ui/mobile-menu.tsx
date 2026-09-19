"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { navigationItems } from "@/lib/navigation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        className="mobile-menu-trigger grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white"
        aria-controls="mobile-navigation"
        aria-expanded={open}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? (
          <X size={20} aria-hidden="true" />
        ) : (
          <Menu size={20} aria-hidden="true" />
        )}
      </button>

      {open ? (
        <>
          <button
            type="button"
            className="mobile-menu-backdrop fixed inset-0 top-[4.75rem]"
            aria-label="Fechar navegação"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-navigation"
            className="mobile-navigation-panel absolute inset-x-4 top-[4.45rem] rounded-3xl border border-white/10 bg-[#0b110e]/95 p-4 shadow-2xl backdrop-blur-xl"
          >
            <nav className="grid gap-1" aria-label="Navegação móvel">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-slate-200 transition hover:bg-white/[0.06]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contato"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-2xl bg-[#8bf0cf] px-4 py-3 text-center text-sm font-bold text-[#07100e]"
              >
                Falar sobre um projeto
              </Link>
            </nav>
          </div>
        </>
      ) : null}
    </div>
  );
}
