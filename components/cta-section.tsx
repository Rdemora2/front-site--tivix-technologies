import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { siteConfig, whatsappUrl } from "@/lib/site-config";

export default function CtaSection() {
  const briefingUrl = whatsappUrl(
    "Olá! Vim pelo site da Tivix e quero conversar sobre um projeto.",
  );

  return (
    <section className="px-5 pb-20 pt-4 sm:px-8 sm:pb-28">
      <div className="cta-panel relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#8bf0cf]/15 bg-[#0b1712] px-6 py-14 text-center sm:px-10 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,240,207,0.16),transparent_55%)]" />
        <div className="relative mx-auto max-w-3xl">
          <p className="eyebrow">Próximo passo</p>
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Seu próximo sistema pode começar com uma boa conversa.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-slate-400">
            Conte o objetivo, o contexto e o que precisa mudar. A Tivix ajuda a
            transformar isso em um caminho técnico claro.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contato" className="button-primary">
              Enviar briefing
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <a
              href={briefingUrl}
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              Conversar no WhatsApp
            </a>
          </div>
          <p className="mt-5 text-xs text-slate-600">
            Ou escreva para {siteConfig.contact.email}
          </p>
        </div>
      </div>
    </section>
  );
}
