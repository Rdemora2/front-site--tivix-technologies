import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import CtaSection from "@/components/cta-section";
import PageIntro from "@/components/page-intro";
import { siteConfig } from "@/lib/site-config";

type CompanyMilestone = Readonly<{
  value: string;
  label: string;
  description: string;
}>;

const companyMilestones = [
  {
    value: "2022",
    label: "Fundação",
    description:
      "O início de uma software house criada para aproximar visão de negócio e execução técnica.",
  },
  {
    value: "4 anos",
    label: "de mercado",
    description:
      "Experiência acumulada em produtos digitais, sistemas, cloud, automação e inteligência artificial.",
  },
  {
    value: "BR + exterior",
    label: "alcance",
    description:
      "Projetos nacionais e internacionais em mídia, saúde, hospitalidade e operações digitais.",
  },
] as const satisfies readonly CompanyMilestone[];

const operatingPrinciples = [
  {
    title: "Liderança próxima",
    description:
      "Decisões de produto e arquitetura permanecem conectadas ao objetivo de negócio durante toda a entrega.",
  },
  {
    title: "Time orientado ao desafio",
    description:
      "A frente técnica é organizada conforme o contexto do projeto, com responsabilidade e padrões de engenharia claros.",
  },
  {
    title: "Responsabilidade até produção",
    description:
      "Entrega inclui publicação, observabilidade e evolução — não termina quando o código é aprovado.",
  },
] as const;

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a Tivix Technologies: software house fundada em 2022, com projetos nacionais e internacionais sob a liderança técnica de Roberto Moraes.",
  alternates: { canonical: `${siteConfig.url}/sobre` },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        index="03 / SOBRE"
        title={
          <>
            Tecnologia perto
            <span>de quem decide.</span>
          </>
        }
        description="Desde 2022, a Tivix transforma desafios de negócio em produtos digitais, sistemas e operações confiáveis — em projetos no Brasil e no exterior."
        aside={
          <p>
            Estratégia, design e engenharia conectados por uma liderança técnica
            presente do diagnóstico à produção.
          </p>
        }
      />

      <section className="about-manifesto section-shell">
        <p className="editorial-kicker">A história</p>
        <div>
          <h2>
            Menos distância entre
            <span>ideia e execução.</span>
          </h2>
          <div className="about-manifesto-copy">
            <p>
              A Tivix nasceu da convicção de que projetos melhores acontecem
              quando a liderança técnica entende o negócio, participa das
              decisões e acompanha o resultado no mundo real.
            </p>
            <p>
              Essa visão orienta a empresa desde a primeira conversa: formar a
              frente certa para cada desafio, trabalhar com clareza e construir
              software preparado para continuar evoluindo.
            </p>
          </div>
        </div>
      </section>

      <section className="company-milestones section-shell">
        <p className="editorial-kicker">Tivix em perspectiva</p>
        <div className="company-milestone-grid">
          {companyMilestones.map((milestone) => (
            <article key={milestone.label}>
              <strong>{milestone.value}</strong>
              <h2>{milestone.label}</h2>
              <p>{milestone.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="founder-section section-shell">
        <div>
          <p className="editorial-kicker">Fundador e líder técnico</p>
          <h2>Roberto Moraes</h2>
        </div>
        <div className="founder-profile-copy">
          <p>
            Engenheiro de software e gestor de tecnologia com experiência em
            arquitetura, produtos web, cloud, streaming, Android TV, automação e
            inteligência artificial.
          </p>
          <p>
            Na Tivix, Roberto lidera a direção técnica, conecta os objetivos do
            cliente às decisões de engenharia e preserva o padrão de qualidade
            da estratégia à operação.
          </p>
          <a
            href={siteConfig.founder.portfolio}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Ver portfólio completo
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
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
          <Link href="/contato" className="hero-case-link">
            Conversar sobre um projeto
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
