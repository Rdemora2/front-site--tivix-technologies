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
      <div className="process-editorial">
        <div className="process-editorial-heading">
          <p className="editorial-kicker">Como trabalhamos</p>
          <h2>
            Clareza antes da velocidade.
            <span>Velocidade depois dela.</span>
          </h2>
          <p>
            Você sabe o que está sendo feito, por que foi priorizado e qual é o
            próximo passo — sem perder acesso à decisão técnica.
          </p>
        </div>

        <ol className="process-line">
          {steps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
