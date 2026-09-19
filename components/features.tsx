import Link from "next/link";
import { ArrowRight, Bot, Braces, Globe2, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = Readonly<{
  icon: LucideIcon;
  number: "01" | "02" | "03" | "04";
  title: string;
  description: string;
  outcomes: readonly [string, string, string];
}>;

const services = [
  {
    icon: Globe2,
    number: "01",
    title: "Sites que vendem competência",
    description:
      "Landing pages e sites institucionais rápidos, acessíveis e desenhados para transformar atenção em conversa comercial.",
    outcomes: ["Estratégia e copy", "Design responsivo", "SEO e performance"],
  },
  {
    icon: Braces,
    number: "02",
    title: "Sistemas e produtos web",
    description:
      "Plataformas, portais, dashboards e APIs com arquitetura preparada para evoluir sem transformar cada mudança em risco.",
    outcomes: [
      "Next.js, React e Go",
      "APIs e dados",
      "Cloud e observabilidade",
    ],
  },
  {
    icon: Workflow,
    number: "03",
    title: "Automação e integrações",
    description:
      "Conectamos ferramentas, eliminamos etapas manuais e criamos fluxos confiáveis para sua operação ganhar velocidade.",
    outcomes: [
      "APIs e webhooks",
      "Workflows operacionais",
      "Relatórios e alertas",
    ],
  },
  {
    icon: Bot,
    number: "04",
    title: "IA aplicada ao negócio",
    description:
      "Assistentes, busca inteligente e processamento de documentos com contexto, governança e objetivo mensurável.",
    outcomes: ["LLMs e RAG", "Copilotos internos", "Extração e classificação"],
  },
] as const satisfies readonly Service[];

export default function Features() {
  return (
    <section id="servicos" className="section-shell scroll-mt-24">
      <div className="editorial-heading">
        <p className="editorial-kicker">O que construímos</p>
        <h2>
          Do primeiro pixel
          <span>à operação.</span>
        </h2>
        <div className="editorial-heading-aside">
          <p>
            Uma frente técnica única para transformar uma necessidade de negócio
            em software bem desenhado, entregue e operável.
          </p>
          <Link href="/servicos" className="text-link">
            Conhecer os serviços <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="service-ledger">
        {services.map((service) => (
          <article key={service.title} className="service-ledger-row">
            <div className="service-ledger-index">
              <span>{service.number}</span>
              <span className="service-ledger-icon">
                <service.icon size={20} aria-hidden="true" />
              </span>
            </div>
            <div className="service-ledger-main">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <ul aria-label={`Entregas de ${service.title}`}>
              {service.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
