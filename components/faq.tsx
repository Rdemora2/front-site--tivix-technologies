export type FrequentlyAskedQuestion = Readonly<{
  question: string;
  answer: string;
}>;

export const faqs = [
  {
    question: "Que tipos de projeto a Tivix desenvolve?",
    answer:
      "Sites institucionais e landing pages, sistemas web, portais, APIs, integrações, automações operacionais e soluções de IA aplicada. O ponto de partida é sempre o problema de negócio, não uma tecnologia pré-definida.",
  },
  {
    question:
      "Vocês assumem o projeto completo ou trabalham com times existentes?",
    answer:
      "Os dois formatos são possíveis. A Tivix pode conduzir estratégia, design e engenharia de ponta a ponta ou entrar em uma frente específica ao lado do seu time.",
  },
  {
    question: "Como funciona o início de um projeto?",
    answer:
      "Começamos com uma conversa de diagnóstico. Depois dela, você recebe uma proposta com escopo, abordagem, premissas, riscos, etapas e investimento. Nada começa com expectativa vaga.",
  },
  {
    question: "Em quanto tempo uma solução fica pronta?",
    answer:
      "O prazo depende de escopo, integrações e nível de validação. A estimativa é apresentada após o diagnóstico e o trabalho é dividido em ciclos que permitem acompanhar valor entregue sem esperar o projeto inteiro terminar.",
  },
  {
    question: "A Tivix oferece suporte depois do lançamento?",
    answer:
      "Sim. Podemos estruturar acompanhamento, correções, observabilidade e evolução contínua conforme a criticidade e o ritmo do produto.",
  },
  {
    question: "Quando vale a pena usar inteligência artificial?",
    answer:
      "Quando há um processo, uma base de conhecimento ou um volume de informação em que IA pode reduzir tempo, aumentar qualidade ou criar uma experiência melhor. Se uma automação convencional resolver com menos risco, essa será a recomendação.",
  },
] as const satisfies readonly FrequentlyAskedQuestion[];

export default function Faq() {
  return (
    <section className="section-shell">
      <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div>
          <p className="eyebrow">Perguntas frequentes</p>
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
            Clareza antes do primeiro commit.
          </h2>
          <p className="mt-5 text-sm leading-6 text-slate-500">
            Se sua dúvida não estiver aqui, conte o contexto. Uma conversa curta
            costuma economizar semanas de escopo errado.
          </p>
        </div>

        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="faq-item group"
              open={index === 0}
            >
              <summary>
                <span>{faq.question}</span>
                <span className="faq-plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
