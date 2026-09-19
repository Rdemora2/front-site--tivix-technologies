import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import CtaSection from "@/components/cta-section";
import PageIntro from "@/components/page-intro";
import { siteConfig } from "@/lib/site-config";

type CareerChapter = Readonly<{
  period: string;
  title: string;
  description: string;
}>;

const career = [
  {
    period: "2022 — 2023",
    title: "Base em produto digital",
    description:
      "Desenvolvimento full stack em produtos web, trabalhando em bases reais com Vue, React, Python, Django e Docker.",
  },
  {
    period: "2023 — 2024",
    title: "Da aplicação à infraestrutura",
    description:
      "Responsabilidade crescente por APIs, dados, cloud e publicação, com atuação direta em Go, Kotlin, Next.js, GCP e sistemas para Android TV.",
  },
  {
    period: "2024 — 2025",
    title: "Arquitetura e coordenação",
    description:
      "Liderança de projetos de mídia, saúde e hospitalidade, incluindo quatro squads, sistemas de alta escala e equipes internacionais.",
  },
  {
    period: "2026 — agora",
    title: "Tecnologia de ponta a ponta",
    description:
      "Gestão de engenharia, infraestrutura, segurança e operação sem abandonar arquitetura e implementação — a base do modelo da Tivix.",
  },
] as const satisfies readonly CareerChapter[];

const operatingPrinciples = [
  {
    title: "Proximidade real",
    description:
      "O contato comercial, o diagnóstico e as decisões técnicas não passam por camadas diferentes.",
  },
  {
    title: "Arquitetura proporcional",
    description:
      "Nem complexidade ornamental, nem atalho frágil. A solução nasce do risco e do contexto do produto.",
  },
  {
    title: "Responsabilidade até produção",
    description:
      "Entrega não termina no pull request: inclui publicação, observabilidade e comportamento real do sistema.",
  },
] as const;

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a Tivix Technologies e Roberto Moraes: uma software house boutique com atuação direta em engenharia, produto, cloud e projetos internacionais.",
  alternates: { canonical: `${siteConfig.url}/sobre` },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        index="03 / SOBRE"
        title={
          <>
            A empresa é enxuta.
            <span>A experiência, não.</span>
          </>
        }
        description="A Tivix é a software house de Roberto Moraes. Um modelo boutique para empresas que querem acesso direto à senioridade — da conversa inicial ao sistema em produção."
        aside={
          <p>
            Engenharia full stack, cloud, liderança técnica e coordenação
            internacional reunidas em uma atuação sem repasse.
          </p>
        }
      />

      <section className="about-manifesto section-shell">
        <p className="editorial-kicker">O modelo</p>
        <div>
          <h2>
            Quem vende o projeto
            <span>é quem responde por ele.</span>
          </h2>
          <div className="about-manifesto-copy">
            <p>
              A Tivix não tenta parecer uma fábrica com dezenas de pessoas. O
              valor está justamente no oposto: cada projeto tem participação
              direta do fundador nas decisões de produto, arquitetura e
              execução.
            </p>
            <p>
              A estrutura é individual e isso fica claro desde o início: o
              cliente sabe exatamente quem vai analisar, construir e responder
              pelo software.
            </p>
          </div>
        </div>
      </section>

      <section className="career-section section-shell">
        <div className="career-heading">
          <p className="editorial-kicker">Trajetória</p>
          <h2>Experiência que atravessa camadas.</h2>
        </div>
        <ol className="career-timeline">
          {career.map((chapter) => (
            <li key={chapter.period}>
              <time>{chapter.period}</time>
              <h3>{chapter.title}</h3>
              <p>{chapter.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="operating-section section-shell">
        <p className="editorial-kicker">Como a Tivix opera</p>
        <div className="operating-grid">
          {operatingPrinciples.map((principle, index) => (
            <article key={principle.title}>
              <span>0{index + 1}</span>
              <h2>{principle.title}</h2>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
        <div className="about-links">
          <Link href="/cases" className="button-primary">
            Ver cases completos <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <a
            href={siteConfig.founder.portfolio}
            target="_blank"
            rel="noreferrer"
            className="hero-case-link"
          >
            Portfólio pessoal de Roberto
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
