"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { whatsappUrl } from "@/lib/site-config";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 420);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={whatsappUrl(
        "Olá! Vim pelo site da Tivix e quero conversar sobre um projeto.",
      )}
      target="_blank"
      rel="noreferrer"
      className={`fixed bottom-5 right-5 z-40 inline-flex min-h-12 items-center gap-2 rounded-full border border-[#8bf0cf]/25 bg-[#10241d]/95 px-4 text-sm font-bold text-[#a8f7dd] shadow-[0_16px_48px_rgba(0,0,0,0.45)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-[#173026] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8bf0cf] ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      aria-label="Falar no WhatsApp com a Tivix"
    >
      <MessageCircle size={18} aria-hidden="true" />
      <span className="hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
}
