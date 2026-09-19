import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { siteConfig, whatsappUrl } from "@/lib/site-config";

type CtaSectionProps = Readonly<{
  variant?: "default" | "home";
}>;

export default function CtaSection({ variant = "default" }: CtaSectionProps) {
  const briefingUrl = whatsappUrl(
    "Olá! Vim pelo site da Tivix e quero conversar sobre um projeto.",
  );
  const isHome = variant === "home";

  return (
    <section className={`cta-shell${isHome ? " cta-shell--home" : ""}`}>
      <div className={`cta-panel${isHome ? " cta-panel--home" : ""}`}>
        {isHome ? (
          <div className="cta-blueprint" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        ) : null}
        <div className="cta-copy">
          <p className="eyebrow">Vamos conversar</p>
          <h2>Vamos construir o que precisa funcionar.</h2>
          <p>
            Conte o desafio e onde a operação precisa chegar. A Tivix transforma
            esse contexto em um caminho técnico objetivo.
          </p>
        </div>

        <div className="cta-actions">
          <div className="cta-buttons">
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
          <p className="cta-contact">
            Prefere e-mail?{" "}
            <a href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
