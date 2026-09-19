import { Bot, Braces, Globe2, Workflow } from "lucide-react";
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
      <div className="section-heading">
        <div>
          <p className="eyebrow">Como ajudamos</p>
          <h2>Da presença digital à operação inteligente.</h2>
        </div>
        <p>
          A Tivix combina estratégia, produto e engenharia para resolver o que
          está travando crescimento, eficiência ou confiança.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <div className="flex items-start justify-between gap-4">
              <span className="grid size-11 place-items-center rounded-2xl border border-[#8bf0cf]/15 bg-[#8bf0cf]/[0.06] text-[#8bf0cf]">
                <service.icon size={20} aria-hidden="true" />
              </span>
              <span className="text-xs font-bold tracking-[0.16em] text-slate-700">
                {service.number}
              </span>
            </div>
            <h3 className="mt-8 text-xl font-semibold tracking-tight text-white sm:text-2xl">
              {service.title}
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
              {service.description}
            </p>
            <ul
              className="mt-6 flex flex-wrap gap-2"
              aria-label={`Entregas de ${service.title}`}
            >
              {service.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-slate-400"
                >
                  {outcome}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
