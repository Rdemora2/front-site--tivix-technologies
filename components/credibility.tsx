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
      <div className="founder-band-signal" aria-hidden="true">
        <span />
        <span />
      </div>
      <div className="founder-band-inner">
        <p className="editorial-kicker">Tivix Technologies / desde 2022</p>
        <div className="founder-statement">
          <h2>
            Liderança técnica
            <span>perto do negócio.</span>
          </h2>
          <div>
            <p>
              Há quatro anos, a Tivix conecta estratégia, produto e engenharia
              para construir sistemas que precisam funcionar no mundo real — em
              projetos nacionais e internacionais.
            </p>
            <p>
              A empresa atua com uma frente técnica dimensionada para cada
              desafio e liderança direta do fundador, Roberto Moraes, da
              arquitetura à operação.
            </p>
            <Link href="/sobre" className="text-link">
              Conhecer a Tivix e o fundador
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <ul
          className="founder-principles"
          aria-label="Princípios de trabalho"
          tabIndex={0}
        >
          {principles.map((principle, index) => (
            <li key={principle}>
              <span>0{index + 1}</span>
              {principle}
            </li>
          ))}
        </ul>
      </div>

      <div
        className="technology-marquee"
        role="region"
        aria-label="Tecnologias utilizadas"
      >
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
