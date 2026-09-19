import { CheckCircle2 } from "lucide-react";

const principles = [
  "Contato direto com a liderança técnica",
  "Arquitetura proporcional ao problema",
  "Segurança e observabilidade desde o início",
  "Documentação para o produto não depender de uma pessoa",
] as const;

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Go",
  "Python",
  "PostgreSQL",
  "AWS",
  "GCP",
  "LLMs / RAG",
] as const;

export default function Credibility() {
  return (
    <section id="sobre" className="section-shell scroll-mt-24">
      <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div>
          <p className="eyebrow">Sobre a Tivix</p>
          <h2 className="max-w-xl text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
            Senioridade sem camadas desnecessárias.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-400">
            A Tivix é uma software house liderada por Roberto Moraes, engenheiro
            de software e gestor de TI com atuação em produtos web, cloud,
            streaming, automação e inteligência artificial.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">
            O modelo é simples: entender o negócio, escolher a tecnologia certa
            e assumir responsabilidade pela qualidade da entrega — do primeiro
            desenho ao comportamento em produção.
          </p>
          <a
            href="https://robertomoraes.dev/pt"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex text-sm font-bold text-[#8bf0cf] underline decoration-[#8bf0cf]/30 underline-offset-4 transition hover:decoration-[#8bf0cf]"
          >
            Conhecer o portfólio técnico do fundador ↗
          </a>
        </div>

        <div>
          <div className="grid gap-3 sm:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle}
                className="flex gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-[#8bf0cf]"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-300">{principle}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-3xl border border-white/[0.08] bg-[#0a0f0d] p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              Stack selecionada por contexto
            </p>
            <ul
              className="mt-5 flex flex-wrap gap-2"
              aria-label="Tecnologias utilizadas"
            >
              {technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full border border-white/[0.08] px-3 py-1.5 text-xs text-slate-300"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
