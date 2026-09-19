"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { navigationItems } from "@/lib/navigation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback((restoreFocus = true): void => {
    setOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => triggerRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusableElements = Array.from(
      panelRef.current?.querySelectorAll<HTMLElement>("a[href], button") ?? [],
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements.at(-1);
    const focusFrame = window.requestAnimationFrame(() =>
      firstFocusable?.focus(),
    );

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        return;
      }
      if (event.key !== "Tab" || focusableElements.length === 0) return;

      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable?.focus();
      } else if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenu, open]);

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        className="mobile-menu-trigger grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white"
        aria-controls="mobile-navigation"
        aria-expanded={open}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => {
          if (open) closeMenu();
          else setOpen(true);
        }}
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
            tabIndex={-1}
            onClick={() => closeMenu()}
          />
          <div
            ref={panelRef}
            id="mobile-navigation"
            className="mobile-navigation-panel absolute inset-x-4 top-[4.45rem] rounded-3xl border border-white/10 bg-[#0b101a]/95 p-4 shadow-2xl backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Navegação móvel"
          >
            <button
              type="button"
              className="mobile-navigation-close"
              aria-label="Fechar navegação"
              onClick={() => closeMenu()}
            >
              <span>Fechar</span>
              <X size={18} aria-hidden="true" />
            </button>
            <nav className="grid gap-1" aria-label="Navegação móvel">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => closeMenu(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-slate-200 transition hover:bg-white/[0.06]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contato"
                onClick={() => closeMenu(false)}
                className="mt-2 rounded-2xl bg-[#79adff] px-4 py-3 text-center text-sm font-bold text-[#07101f]"
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
