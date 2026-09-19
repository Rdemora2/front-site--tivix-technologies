type ProcessStep = Readonly<{
  number: "01" | "02" | "03" | "04";
  title: string;
  description: string;
}>;

const steps = [
  {
    number: "01",
    title: "Entender o problema",
    description:
      "Objetivo, contexto, restrições e a métrica que define se o projeto funcionou.",
  },
  {
    number: "02",
    title: "Desenhar a solução",
    description:
      "Escopo, experiência, arquitetura, prioridades e riscos traduzidos em uma proposta clara.",
  },
  {
    number: "03",
    title: "Construir com visibilidade",
    description:
      "Ciclos curtos, demonstrações frequentes e decisões registradas para você acompanhar de verdade.",
  },
  {
    number: "04",
    title: "Lançar e evoluir",
    description:
      "Qualidade, observabilidade e acompanhamento pós-lançamento para transformar entrega em operação.",
  },
] as const satisfies readonly ProcessStep[];

export default function Process() {
  return (
    <section id="processo" className="section-shell scroll-mt-24">
      <div className="rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(135deg,rgba(139,240,207,0.06),rgba(121,169,255,0.025)_45%,rgba(255,255,255,0.015))] p-6 sm:p-10 lg:p-14">
        <div className="section-heading !mb-0">
          <div>
            <p className="eyebrow">Como trabalhamos</p>
            <h2>Um processo claro reduz risco e acelera decisão.</h2>
          </div>
          <p>
            Você sabe o que está sendo feito, por que foi priorizado e qual é o
            próximo passo.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number} className="process-step">
              <span className="text-xs font-bold tracking-[0.18em] text-[#8bf0cf]">
                {step.number}
              </span>
              <h3 className="mt-8 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
