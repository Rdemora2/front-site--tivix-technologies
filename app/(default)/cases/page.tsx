import type { Metadata } from "next";

import CaseStudies from "@/components/case-studies";
import CtaSection from "@/components/cta-section";
import PageIntro from "@/components/page-intro";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Cases",
  description:
    "Cases de engenharia, arquitetura e liderança técnica da Tivix em mídia, saúde, hospitalidade e experiências digitais.",
  alternates: { canonical: `${siteConfig.url}/cases` },
};

export default function CasesPage() {
  return (
    <>
      <PageIntro
        index="02 / CASES"
        title={
          <>
            Contexto, decisões
            <span>e resultado.</span>
          </>
        }
        description="Não basta mostrar uma tela bonita. Estes projetos expõem o problema enfrentado, as escolhas técnicas e o que mudou depois que o software entrou em produção."
        aside={
          <p>
            Atuação direta em arquitetura, código, cloud, produto e coordenação
            técnica — no Brasil e em projetos internacionais.
          </p>
        }
      />
      <CaseStudies showHeading={false} />
      <CtaSection />
    </>
  );
}
