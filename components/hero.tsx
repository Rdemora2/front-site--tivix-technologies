import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

import HeroSignal from "@/components/hero-signal";
import tivixSymbol from "@/public/images/logo-tivix-reduced.png";

type Outcome = Readonly<{ value: string; label: string }>;

const outcomes = [
  { value: "6", label: "portais em uma migração" },
  { value: "20M+", label: "requisições por mês" },
  { value: "99,99%", label: "de uptime" },
] as const satisfies readonly Outcome[];

const disciplines = [
  "Produto digital",
  "Engenharia web",
  "Automação",
  "IA aplicada",
] as const;

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
            <div className="hero-machine-orbit hero-machine-orbit--outer" />
            <div className="hero-machine-orbit hero-machine-orbit--inner" />
            <div className="hero-machine-beam" />
            <div className="hero-symbol-wrap">
              <Image
                src={tivixSymbol}
                alt=""
                priority
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
              <span key={`${discipline}-${index}`} aria-hidden={index >= 4}>
                {discipline}
                <i>↗</i>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        className="hero-outcomes-shell"
        aria-label="Resultados em escala"
      >
        <div className="hero-outcomes">
          <p>Escala não é discurso.</p>
          <dl>
            {outcomes.map((outcome) => (
              <div key={outcome.label}>
                <dd>{outcome.value}</dd>
                <dt>{outcome.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
