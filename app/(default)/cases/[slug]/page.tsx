import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";

import CtaSection from "@/components/cta-section";
import { caseStudies, findCaseStudy } from "@/lib/case-studies";
import { siteConfig } from "@/lib/site-config";

type CasePageProps = Readonly<{
  params: Promise<Readonly<{ slug: string }>>;
}>;

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({
  params,
}: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = findCaseStudy(slug);
  if (!caseStudy) return {};

  return {
    title: `Case ${caseStudy.title}`,
    description: caseStudy.summary,
    alternates: { canonical: `${siteConfig.url}/cases/${caseStudy.slug}` },
  };
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const caseStudy = findCaseStudy(slug);
  if (!caseStudy) notFound();

  const primaryImage = caseStudy.images[0];

  return (
    <>
      <article className="case-page">
        <header className="case-page-hero">
          <Link href="/cases" className="case-page-back">
            <ArrowLeft size={16} aria-hidden="true" /> Todos os cases
          </Link>
          <p className="case-page-kicker">
            {caseStudy.international
              ? "CASE INTERNACIONAL"
              : "CASE EM PRODUÇÃO"}
            {" / "}
            {caseStudy.year}
          </p>
          <h1>{caseStudy.title}</h1>
          <p className="case-page-summary">{caseStudy.summary}</p>

          <dl className="case-page-facts">
            <div>
              <dt>Frente</dt>
              <dd>{caseStudy.eyebrow}</dd>
            </div>
            <div>
              <dt>Atuação</dt>
              <dd>{caseStudy.role}</dd>
            </div>
          </dl>
        </header>

        <div className="case-page-hero-visual">
          {primaryImage ? (
            <Image
              src={primaryImage.src}
              alt={primaryImage.alt}
              fill
              priority
              sizes="100vw"
              className="case-page-product-image object-contain object-center"
            />
          ) : (
            <div className="case-page-international-mark">
              <span>BR</span>
              <i />
              <strong>MX</strong>
              <p>coordenação internacional / software + hardware</p>
            </div>
          )}
        </div>

        {caseStudy.metrics.length > 0 ? (
          <section className="case-page-metrics" aria-label="Métricas do case">
            {caseStudy.metrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <h2>{metric.label}</h2>
                <p>{metric.detail}</p>
              </div>
            ))}
          </section>
        ) : null}

        <div className="case-page-body">
          <aside>
            <p>LEITURA / 04 MIN</p>
            <nav aria-label="Nesta página">
              <a href="#desafio">O desafio</a>
              <a href="#solucao">A solução</a>
              <a href="#decisoes">Decisões</a>
              <a href="#resultado">Resultado</a>
            </nav>
          </aside>

          <div className="case-page-story">
            <section id="desafio">
              <span>01</span>
              <h2>O desafio</h2>
              <p>{caseStudy.challenge}</p>
            </section>
            <section id="solucao">
              <span>02</span>
              <h2>A solução</h2>
              <p>{caseStudy.solution}</p>
              <blockquote>{caseStudy.contribution}</blockquote>
            </section>
            <section id="decisoes">
              <span>03</span>
              <h2>Decisões que definiram a entrega</h2>
              <ol>
                {caseStudy.decisions.map((decision) => (
                  <li key={decision}>{decision}</li>
                ))}
              </ol>
            </section>
            <section id="resultado">
              <span>04</span>
              <h2>O que entrou em produção</h2>
              <p>{caseStudy.impact}</p>
              <ul>
                {caseStudy.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {caseStudy.images.length > 1 ? (
          <section
            className="case-page-gallery"
            aria-label="Imagens do projeto"
          >
            {caseStudy.images.slice(1).map((image) => (
              <figure key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <figcaption>{image.alt}</figcaption>
              </figure>
            ))}
          </section>
        ) : null}

        <footer className="case-page-footer">
          <div>
            <p>Stack</p>
            <ul>
              {caseStudy.stack.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
          {caseStudy.externalUrl ? (
            <a href={caseStudy.externalUrl} target="_blank" rel="noreferrer">
              Ver produto no ar <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          ) : null}
        </footer>
      </article>
      <CtaSection />
    </>
  );
}
