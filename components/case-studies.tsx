import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { caseStudies } from "@/lib/case-studies";

const homeCardLayouts = ["feature", "media", "system"] as const;
const hospitalityFlow = ["Coaxial", "USB", "Android TV", "Unicast"] as const;

export default function CaseStudies({
  showHeading = true,
}: Readonly<{ showHeading?: boolean }>) {
  return (
    <section id="cases" className="section-shell scroll-mt-24">
      {showHeading ? (
        <div className="editorial-heading">
          <p className="editorial-kicker">Trabalho em produção</p>
          <h2>
            Sistemas que precisaram
            <span>funcionar de verdade.</span>
          </h2>
          <div className="editorial-heading-aside">
            <p>
              Arquitetura, código e liderança aplicados a mídia, saúde e
              hospitalidade — no Brasil e em operações internacionais.
            </p>
            <Link href="/cases" className="text-link">
              Explorar todos os cases{" "}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      ) : null}

      {showHeading ? (
        <div className="home-case-grid">
          {caseStudies.map((item, index) => {
            const primaryImage = item.images[0];
            const layout = homeCardLayouts[index] ?? "system";

            return (
              <article
                key={item.slug}
                className={`home-case-card home-case-card--${layout}`}
              >
                <Link
                  href={`/cases/${item.slug}`}
                  className="home-case-card-link"
                  aria-label={`Abrir case ${item.title}`}
                >
                  <div className="home-case-visual">
                    <div className="home-case-windowbar" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                      <small>
                        {item.year} / 0{index + 1}
                      </small>
                    </div>
                    {primaryImage ? (
                      <Image
                        src={primaryImage.src}
                        alt={primaryImage.alt}
                        fill
                        sizes="(max-width: 767px) 88vw, (max-width: 1023px) 90vw, 58vw"
                        className="home-case-image"
                      />
                    ) : (
                      <div className="home-case-flow" aria-hidden="true">
                        {hospitalityFlow.map((step) => (
                          <span key={step}>{step}</span>
                        ))}
                      </div>
                    )}
                    <span className="home-case-index" aria-hidden="true">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="home-case-copy">
                    <p className="case-editorial-meta">
                      {item.eyebrow}
                      {item.international ? " / internacional" : ""}
                    </p>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>

                    {item.metrics.length > 0 ? (
                      <dl className="home-case-metrics">
                        {item.metrics.slice(0, 2).map((metric) => (
                          <div key={metric.label}>
                            <dt>{metric.label}</dt>
                            <dd>{metric.value}</dd>
                          </div>
                        ))}
                      </dl>
                    ) : (
                      <p className="home-case-highlight">
                        Software + hardware + times em múltiplos fusos
                      </p>
                    )}

                    <span className="home-case-action" aria-hidden="true">
                      Ler o case completo
                      <ArrowUpRight size={17} />
                    </span>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="case-editorial-list">
          {caseStudies.map((item, index) => {
            const primaryImage = item.images[0];

            return (
              <article
                key={item.slug}
                className="case-editorial"
                data-direction={index % 2 === 0 ? "forward" : "reverse"}
              >
                <Link
                  href={`/cases/${item.slug}`}
                  className="case-editorial-visual group"
                  aria-label={`Abrir case ${item.title}`}
                >
                  {primaryImage ? (
                    <Image
                      src={primaryImage.src}
                      alt={primaryImage.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 62vw"
                      className="case-product-image object-contain object-center transition duration-700 group-hover:scale-[1.015]"
                    />
                  ) : (
                    <div className="case-editorial-schematic">
                      <span>México</span>
                      <i />
                      <strong>Android TV</strong>
                      <i />
                      <span>Operação hoteleira</span>
                    </div>
                  )}
                  <span className="case-editorial-index">0{index + 1}</span>
                </Link>

                <div className="case-editorial-copy">
                  <p className="case-editorial-meta">
                    {item.eyebrow}
                    {item.international ? " / internacional" : ""}
                  </p>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>

                  {item.metrics.length > 0 ? (
                    <dl className="case-editorial-metrics">
                      {item.metrics.slice(0, 2).map((metric) => (
                        <div key={metric.label}>
                          <dt>{metric.label}</dt>
                          <dd>{metric.value}</dd>
                        </div>
                      ))}
                    </dl>
                  ) : (
                    <p className="case-editorial-highlight">
                      Software + hardware + times em múltiplos fusos
                    </p>
                  )}

                  <Link href={`/cases/${item.slug}`} className="case-open-link">
                    Ler o case completo
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
