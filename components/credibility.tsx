import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    <section id="sobre" className="founder-band scroll-mt-24">
      <div className="founder-band-inner">
        <p className="editorial-kicker">Uma software house de especialista</p>
        <div className="founder-statement">
          <h2>
            Sem repasse.
            <span>Sem telefone sem fio.</span>
          </h2>
          <div>
            <p>
              A Tivix é a atuação profissional de Roberto Moraes como software
              house: estratégia, arquitetura e execução técnica conduzidas por
              quem já colocou sistemas críticos em produção no Brasil e no
              exterior.
            </p>
            <p>
              O cliente fala diretamente com quem entende o problema, toma as
              decisões e responde pela qualidade da entrega.
            </p>
            <Link href="/sobre" className="text-link">
              Conhecer a Tivix e o fundador
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <ul className="founder-principles" aria-label="Princípios de trabalho">
          {principles.map((principle, index) => (
            <li key={principle}>
              <span>0{index + 1}</span>
              {principle}
            </li>
          ))}
        </ul>
      </div>

      <div className="technology-marquee" aria-label="Tecnologias utilizadas">
        <div>
          {[...technologies, ...technologies].map((technology, index) => (
            <span key={`${technology}-${index}`} aria-hidden={index >= 9}>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
