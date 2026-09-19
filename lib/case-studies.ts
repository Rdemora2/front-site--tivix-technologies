export type CaseMetric = Readonly<{
  value: string;
  label: string;
  detail: string;
}>;

export type CaseImage = Readonly<{
  src: string;
  alt: string;
  width: number;
  height: number;
}>;

export type CaseStudy = Readonly<{
  slug: "grupo-bandeirantes" | "hospital-sirio-libanes" | "fiesta-americana";
  title: string;
  eyebrow: string;
  year: "2024";
  role: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: string;
  contribution: string;
  metrics: readonly CaseMetric[];
  decisions: readonly string[];
  results: readonly string[];
  stack: readonly string[];
  images: readonly CaseImage[];
  externalUrl: string | null;
  international: boolean;
}>;

export const caseStudies = [
  {
    slug: "grupo-bandeirantes",
    title: "Grupo Bandeirantes",
    eyebrow: "Portais, streaming e operação de mídia",
    year: "2024",
    role: "Arquitetura, engenharia e gestão de TI",
    summary:
      "Modernização de seis portais do Grupo Bandeirantes, com arquitetura compartilhada, deploy independente e migração sem interrupção.",
    challenge:
      "Substituir sistemas legados mantendo seis portais no ar, conciliando autonomia entre equipes, consistência técnica e preparação para picos de audiência em eleições e eventos esportivos.",
    solution:
      "Uma base compartilhada em Next.js e Go, com NestJS nos serviços auxiliares e implantação independente por portal. Na AWS, balanceamento, WAF, migração gradual e rollback automatizado reduziram o risco de cada entrada em produção.",
    impact:
      "Os seis portais passaram para a nova arquitetura sem indisponibilidade durante a transição. A base comum reduziu a duplicação sem impedir que cada produto evoluísse no próprio ritmo.",
    contribution:
      "Roberto respondeu pela arquitetura e pela condução técnica, coordenou quatro squads, alinhou prioridades com a diretoria e atuou no código nas etapas críticas de desempenho e migração.",
    metrics: [
      {
        value: "6",
        label: "portais migrados",
        detail:
          "BandSports, BandNews TV, Arte 1, Sabor & Arte, Terra Viva e Agro+",
      },
      {
        value: "0s",
        label: "de downtime",
        detail: "Migração gradual com continuidade do serviço",
      },
      {
        value: "4",
        label: "squads coordenados",
        detail: "Design, frontend, backend e infraestrutura",
      },
    ],
    decisions: [
      "Compartilhar a base técnica, mantendo deploys independentes por portal.",
      "Usar Go para throughput e latência, com Next.js na experiência web.",
      "Tratar migração gradual e rollback automatizado como parte da arquitetura.",
      "Concentrar proteção de borda e balanceamento na AWS.",
    ],
    results: [
      "Seis portais modernizados sem interrupção na transição.",
      "Componentes compartilhados e menor custo de manutenção.",
      "Operação preparada para oscilações relevantes de audiência.",
      "Distribuição digital integrada à parceria com a Vivo.",
    ],
    stack: ["Next.js", "TypeScript", "Go", "NestJS", "AWS", "WAF"],
    images: [
      {
        src: "/images/cases/bandsports.webp",
        alt: "Portal BandSports após a modernização",
        width: 1920,
        height: 1110,
      },
      {
        src: "/images/cases/bandnews.webp",
        alt: "Portal BandNews TV",
        width: 1920,
        height: 1111,
      },
      {
        src: "/images/cases/newcoplay-vivo.webp",
        alt: "Plataforma Vivo Newco Play",
        width: 1920,
        height: 1107,
      },
    ],
    externalUrl: "https://bandsports.uol.com.br/",
    international: false,
  },
  {
    slug: "hospital-sirio-libanes",
    title: "Hospital Sírio-Libanês",
    eyebrow: "Backend, cloud e Android TV",
    year: "2024",
    role: "Engenharia de software e liderança técnica",
    summary:
      "Plataforma de hospitalidade digital com mais de 20 milhões de requisições mensais, integração hospitalar e conteúdo protegido nas TVs dos quartos.",
    challenge:
      "Conectar dados do sistema hospitalar, streaming protegido e uma experiência nativa de TV em uma operação de baixa latência e alta confiabilidade.",
    solution:
      "Backend em Go com PostgreSQL e Redis, execução escalável no Cloud Run e observabilidade com Prometheus. No Android TV, Kotlin, Jetpack Compose, Media3 e Widevine DRM formaram a experiência de conteúdo.",
    impact:
      "A plataforma reuniu informações hospitalares e entretenimento em uma única experiência, sustentada por uma API de 6 ms de resposta média e 92% de acerto no cache.",
    contribution:
      "Roberto definiu a arquitetura e implementou backend, infraestrutura cloud e aplicativo Android TV, além de conduzir padrões de código, monitoramento e integração entre as camadas.",
    metrics: [
      {
        value: "20M+",
        label: "requisições por mês",
        detail: "Volume real sustentado em produção",
      },
      {
        value: "6ms",
        label: "de resposta média",
        detail: "Baixa latência na API em Go",
      },
      {
        value: "92%",
        label: "de cache hit",
        detail: "Menos pressão sobre o banco de dados",
      },
    ],
    decisions: [
      "Usar Go para suportar o volume com baixa latência.",
      "Introduzir Redis como camada de cache à frente do PostgreSQL.",
      "Executar no Cloud Run para escalar sem administrar servidores.",
      "Incluir métricas e alertas como parte da implementação.",
    ],
    results: [
      "API em produção com resposta média de 6 ms.",
      "Cache Redis com 92% de taxa de acerto.",
      "Integração entre Tasy, serviços cloud e Android TV.",
      "Conteúdo protegido com Media3 e Widevine DRM.",
    ],
    stack: [
      "Go",
      "PostgreSQL",
      "Redis",
      "GCP",
      "Kotlin",
      "Jetpack Compose",
      "Widevine",
    ],
    images: [
      {
        src: "/images/cases/hsl-app.webp",
        alt: "Interface do aplicativo do Hospital Sírio-Libanês",
        width: 1449,
        height: 829,
      },
      {
        src: "/images/cases/hsl-catalog.webp",
        alt: "Catálogo de conteúdo da plataforma hospitalar",
        width: 1448,
        height: 844,
      },
      {
        src: "/images/cases/hsl-live.webp",
        alt: "Grade de programação e canais ao vivo",
        width: 1447,
        height: 839,
      },
    ],
    externalUrl: null,
    international: false,
  },
  {
    slug: "fiesta-americana",
    title: "Fiesta Americana Resorts",
    eyebrow: "Produto internacional para hospitalidade",
    year: "2024",
    role: "Gestão de projeto e coordenação técnica",
    summary:
      "Coordenação internacional de uma plataforma Android TV que reúne canais coaxiais e streaming IP em uma única experiência para hóspedes.",
    challenge:
      "Unificar duas fontes de conteúdo antes acessadas por entradas diferentes da TV, integrando software, TV Box, dongles USB e drivers específicos com equipes em países e fusos distintos.",
    solution:
      "Coordenação do aplicativo em Kotlin e Jetpack Compose, streaming Unicast, guia eletrônico de programação e integração do sinal coaxial por hardware USB. O roadmap conciliou ciclos de software, validação física e comunicação assíncrona internacional.",
    impact:
      "A solução foi implantada na operação hoteleira e passou a oferecer canais de TV e streaming dentro da mesma interface, sem alternância manual de entradas pelo hóspede.",
    contribution:
      "Roberto conduziu roadmap, riscos, qualidade e alinhamento entre equipes internacionais, usando experiência em Android TV para conectar decisões de arquitetura às restrições de hardware.",
    metrics: [],
    decisions: [
      "Integrar o sinal coaxial por dongles USB e drivers específicos.",
      "Usar Kotlin e Jetpack Compose na experiência nativa de TV.",
      "Planejar entregas conforme fusos e ciclos próprios de validação do hardware.",
    ],
    results: [
      "Aplicativo implantado no resort.",
      "Canais coaxiais e streaming Unicast na mesma experiência.",
      "Guia de programação integrado à interface de hospitalidade.",
      "Coordenação técnica distribuída entre equipes internacionais.",
    ],
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Media3",
      "Android TV",
      "Unicast",
      "USB integration",
    ],
    images: [],
    externalUrl: null,
    international: true,
  },
] as const satisfies readonly CaseStudy[];

export type CaseStudySlug = (typeof caseStudies)[number]["slug"];

export function findCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
