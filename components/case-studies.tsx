import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type CaseMetric = readonly [value: string, label: string];
type CaseStudy = Readonly<{
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  metrics: readonly CaseMetric[];
  stack: string;
  href: string | null;
}>;

type SelectedSite = Readonly<{
  title: string;
  label: string;
  image: string;
  href: string;
}>;

const cases = [
  {
    title: "Grupo Bandeirantes",
    category: "Portais e plataformas de mídia",
    description:
      "Modernização de seis portais com base compartilhada, deploy independente e migração gradual sem interrupção de serviço.",
    image: "/images/cases/bandsports.webp",
    imageAlt:
      "Portal BandSports, parte da modernização dos portais do Grupo Bandeirantes",
    metrics: [
      ["6", "portais migrados"],
      ["0s", "downtime na transição"],
    ],
    stack: "Next.js · Go · AWS · TypeScript",
    href: "https://bandsports.uol.com.br/",
  },
  {
    title: "Hospital Sírio-Libanês",
    category: "Backend, cloud e experiência Android TV",
    description:
      "Plataforma de hospitalidade digital integrando sistema hospitalar, conteúdo protegido e uma operação observável em cloud.",
    image: "/images/cases/hsl-app.webp",
    imageAlt:
      "Interface do aplicativo de hospitalidade digital do Hospital Sírio-Libanês",
    metrics: [
      ["20M+", "requisições por mês"],
      ["6ms", "resposta média da API"],
    ],
    stack: "Go · PostgreSQL · Redis · GCP · Kotlin",
    href: null,
  },
] as const satisfies readonly CaseStudy[];

const selectedSites = [
  {
    title: "Carla Moraes Arquitetura",
    label: "Site institucional",
    image: "/images/cases/carla-moraes.webp",
    href: "https://arq-carla-moraes-v2.vercel.app/",
  },
  {
    title: "SEN Omakase",
    label: "Experiência digital",
    image: "/images/cases/sen-omakase.webp",
    href: "https://sen-omakase.vercel.app/",
  },
] as const satisfies readonly SelectedSite[];

export default function CaseStudies() {
  return (
    <section id="cases" className="section-shell scroll-mt-24">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Experiência comprovada</p>
          <h2>Complexidade real. Resultados verificáveis.</h2>
        </div>
        <p>
          Projetos liderados pelo fundador — apresentados com contexto para
          transformar experiência em evidência, sem atribuir à Tivix entregas de
          empregadores anteriores.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {cases.map((item) => (
          <article key={item.title} className="case-card group">
            <div className="case-visual">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top transition duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08100d] via-transparent to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                Experiência da liderança técnica
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8bf0cf]">
                {item.category}
              </p>
              <div className="mt-3 flex items-start justify-between gap-5">
                <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {item.title}
                </h3>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Abrir ${item.title}`}
                    className="grid size-10 shrink-0 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-[#8bf0cf]/40 hover:text-[#8bf0cf]"
                  >
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-400 sm:text-base">
                {item.description}
              </p>

              <dl className="mt-7 grid grid-cols-2 gap-4 border-y border-white/[0.07] py-5">
                {item.metrics.map(([value, label]) => (
                  <div key={label} className="flex flex-col">
                    <dt className="order-2 mt-1 text-xs text-slate-500">
                      {label}
                    </dt>
                    <dd className="order-1 text-xl font-semibold text-white">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-xs text-slate-600">{item.stack}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {selectedSites.map((site) => (
          <a
            key={site.title}
            href={site.href}
            target="_blank"
            rel="noreferrer"
            className="group grid overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0a0f0d] transition hover:-translate-y-1 hover:border-white/[0.16] sm:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="relative aspect-[16/10] overflow-hidden sm:aspect-auto">
              <Image
                src={site.image}
                alt={`Prévia do ${site.label.toLowerCase()} ${site.title}`}
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex min-h-44 flex-col justify-between p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                {site.label}
              </p>
              <div className="flex items-end justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {site.title}
                </h3>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-[#8bf0cf]"
                  aria-hidden="true"
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
