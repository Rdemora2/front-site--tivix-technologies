import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

import HeroMetrics from "@/components/hero-metrics";
import HeroSignal from "@/components/hero-signal";
import tivixSymbol from "@/public/images/logo-tivix-reduced.png";

const disciplines = [
  { label: "Produto digital", href: "/servicos#produto-digital" },
  { label: "Engenharia web", href: "/servicos#engenharia-web" },
  { label: "Automação", href: "/servicos#automacao" },
  { label: "IA aplicada", href: "/servicos#ia-aplicada" },
] as const satisfies readonly Readonly<{
  label: string;
  href: `/servicos#${string}`;
}>[];

export default function Hero() {
  return (
    <>
      <section className="hero-stage">
        <HeroSignal />
        <div className="hero-noise" aria-hidden="true" />

        <div className="hero-layout">
          <div className="hero-copy">
            <p className="hero-index">TIVIX / DIGITAL ENGINEERING</p>
            <h1>
              Ideias ambiciosas.
              <span>Software à altura.</span>
            </h1>
            <p className="hero-intro">
              Produtos digitais, sistemas e automações construídos para tirar
              projetos críticos do slide — e colocá-los em operação.
            </p>

            <div className="hero-actions">
              <Link href="/contato" className="button-primary">
                Tirar o projeto do papel
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link href="/cases" className="hero-case-link">
                Ver o que já construímos
                <ArrowDown size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="hero-machine" aria-hidden="true">
            <div className="hero-machine-grid" />
            <div className="hero-machine-axis hero-machine-axis--horizontal" />
            <div className="hero-machine-axis hero-machine-axis--vertical" />
            <div className="hero-machine-orbit hero-machine-orbit--outer" />
            <div className="hero-machine-orbit hero-machine-orbit--inner" />
            <div className="hero-machine-beam" />
            <span className="hero-machine-node hero-machine-node--one" />
            <span className="hero-machine-node hero-machine-node--two" />
            <span className="hero-machine-node hero-machine-node--three" />
            <div className="hero-symbol-wrap">
              <Image
                src={tivixSymbol}
                alt=""
                loading="eager"
                sizes="(max-width: 768px) 210px, 360px"
                className="hero-symbol"
              />
            </div>
            <span className="hero-machine-label hero-machine-label--one">
              Arquitetura
            </span>
            <span className="hero-machine-label hero-machine-label--two">
              Produto
            </span>
            <span className="hero-machine-label hero-machine-label--three">
              Operação
            </span>
            <div className="hero-machine-status">
              <span /> sistemas em movimento
            </div>
          </div>
        </div>

        <div
          className="hero-discipline-track"
          role="region"
          aria-label="Áreas de atuação"
        >
          <div className="hero-discipline-runner">
            {[...disciplines, ...disciplines].map((discipline, index) => (
              <Link
                key={`${discipline.label}-${index}`}
                href={discipline.href}
                aria-hidden={index >= disciplines.length}
                tabIndex={index >= disciplines.length ? -1 : undefined}
              >
                {discipline.label}
                <i>↗</i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="hero-outcomes-shell"
        aria-label="Resultados em escala"
      >
        <HeroMetrics />
      </section>
    </>
  );
}
