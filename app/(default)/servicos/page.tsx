import type { Metadata } from "next";
import { Bot, Braces, Globe2, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import CtaSection from "@/components/cta-section";
import Faq, { faqs } from "@/components/faq";
import PageIntro from "@/components/page-intro";
import Process from "@/components/process";
import { siteConfig } from "@/lib/site-config";

type ServiceDetail = Readonly<{
  id: "produto-digital" | "engenharia-web" | "automacao" | "ia-aplicada";
  number: "01" | "02" | "03" | "04";
  icon: LucideIcon;
  title: string;
  thesis: string;
  description: string;
  deliverables: readonly string[];
  technologies: readonly string[];
}>;

const services = [
  {
    id: "produto-digital",
    number: "01",
    icon: Globe2,
    title: "Sites e experiências digitais",
    thesis: "A primeira impressão precisa sustentar a segunda.",
    description:
      "Sites institucionais, landing pages e plataformas editoriais construídos com direção visual, copy, performance, acessibilidade e instrumentação de conversão no mesmo projeto.",
    deliverables: [
      "Estratégia e arquitetura de informação",
      "UI responsiva e sistema visual",
      "SEO técnico e dados estruturados",
      "Performance e acessibilidade",
      "Analytics com consentimento",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Vercel", "AWS"],
  },
  {
    id: "engenharia-web",
    number: "02",
    icon: Braces,
    title: "Sistemas e produtos web",
    thesis: "Software bom resolve agora sem bloquear o próximo passo.",
    description:
      "Portais, dashboards, APIs e produtos digitais com arquitetura proporcional ao problema, contratos claros e uma base preparada para manutenção e crescimento.",
    deliverables: [
      "Descoberta e desenho de solução",
      "Frontend, backend e APIs",
      "Modelagem de dados",
      "Integrações e autenticação",
      "Cloud, CI/CD e observabilidade",
    ],
    technologies: ["Go", "Node.js", "PostgreSQL", "Redis", "AWS", "GCP"],
  },
  {
    id: "automacao",
    number: "03",
    icon: Workflow,
    title: "Automação e integrações",
    thesis: "Processo repetitivo é dívida operacional.",
    description:
      "Mapeamento e automação de fluxos entre ferramentas, APIs e equipes para reduzir trabalho manual, espera, erro e perda de contexto.",
    deliverables: [
      "Mapeamento do fluxo atual",
      "Integrações por API e webhook",
      "Orquestração de workflows",
      "Alertas, relatórios e auditoria",
      "Tratamento de falhas e reprocessamento",
    ],
    technologies: ["Python", "TypeScript", "n8n", "APIs", "Filas", "Webhooks"],
  },
  {
    id: "ia-aplicada",
    number: "04",
    icon: Bot,
    title: "Inteligência artificial aplicada",
    thesis: "IA só importa quando melhora uma operação real.",
    description:
      "Assistentes, busca semântica e processamento de documentos integrados ao contexto da empresa, com controle de acesso, avaliação e rastreabilidade.",
    deliverables: [
      "Diagnóstico de oportunidade",
      "RAG e busca semântica",
      "Agentes e copilotos internos",
      "Extração e classificação",
      "Avaliação, segurança e monitoramento",
    ],
    technologies: ["LLMs", "RAG", "Embeddings", "Python", "Vector stores"],
  },
] as const satisfies readonly ServiceDetail[];

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Sites, sistemas, automações e inteligência artificial aplicada com estratégia, engenharia sênior e responsabilidade de ponta a ponta.",
  alternates: { canonical: `${siteConfig.url}/servicos` },
};

export default function ServicesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const serializedFaqSchema = JSON.stringify(faqSchema).replace(
    /</g,
    "\\u003c",
  );

  return (
    <>
      <PageIntro
        index="01 / SERVIÇOS"
        title={
          <>
            Engenharia para transformar
            <span>ideia em operação.</span>
          </>
        }
        description="A Tivix assume o caminho completo: entender o problema, desenhar a solução, construir, publicar e acompanhar o comportamento do produto no mundo real."
        aside={
          <p>
            Projetos fechados por escopo ou ciclos contínuos de evolução, sempre
            com contato direto com quem executa.
          </p>
        }
      />

      <section className="service-detail-list section-shell">
        {services.map((service) => (
          <article key={service.id} id={service.id} className="service-detail">
            <div className="service-detail-id">
              <span>{service.number}</span>
              <service.icon size={23} aria-hidden="true" />
            </div>
            <div className="service-detail-copy">
              <h2>{service.title}</h2>
              <p className="service-detail-thesis">{service.thesis}</p>
              <p>{service.description}</p>
            </div>
            <div className="service-detail-output">
              <h3>O que pode entrar</h3>
              <ul>
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable}>{deliverable}</li>
                ))}
              </ul>
              <p>{service.technologies.join(" · ")}</p>
            </div>
          </article>
        ))}
      </section>

      <Process />
      <Faq />
      <CtaSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializedFaqSchema }}
      />
    </>
  );
}
