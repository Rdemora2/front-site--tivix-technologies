import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Tivix Technologies trata dados e preferências de privacidade neste site.",
  alternates: { canonical: `${siteConfig.url}/privacidade` },
};

type PrivacySection = Readonly<{ title: string; content: string }>;

const sections = [
  {
    title: "1. Escopo",
    content:
      "Esta política descreve o tratamento de dados realizado no site institucional da Tivix Technologies. Ela não substitui contratos ou avisos específicos de projetos desenvolvidos para clientes.",
  },
  {
    title: "2. Contato e briefing",
    content:
      "O briefing do site organiza as informações no seu navegador e abre uma conversa no WhatsApp. Nada é enviado pela Tivix antes de você confirmar o envio no próprio WhatsApp. A partir daí, o tratamento também segue os termos e a política dessa plataforma.",
  },
  {
    title: "3. Métricas de navegação",
    content:
      "O Microsoft Clarity só é carregado quando você escolhe aceitar cookies analíticos. Ele pode registrar dados técnicos e de interação, como dispositivo, navegador, páginas acessadas e forma de uso, para ajudar a melhorar a experiência do site.",
  },
  {
    title: "4. Armazenamento local",
    content:
      "Guardamos no seu navegador apenas a preferência de consentimento. Você pode apagar essa informação nas configurações do navegador e fazer uma nova escolha em uma visita futura.",
  },
  {
    title: "5. Finalidade e retenção",
    content:
      "Dados enviados voluntariamente são usados para responder à sua solicitação, avaliar o projeto e manter o relacionamento comercial. Eles são mantidos somente pelo tempo necessário para essas finalidades ou para cumprir obrigações legais.",
  },
  {
    title: "6. Seus direitos",
    content:
      "Nos termos da LGPD, você pode solicitar confirmação de tratamento, acesso, correção, eliminação quando aplicável e informações sobre compartilhamento. Também pode revogar o consentimento para dados tratados com essa base legal.",
  },
] as const satisfies readonly PrivacySection[];

export default function PrivacidadePage() {
  return (
    <section className="relative overflow-hidden pb-20 pt-36 sm:pb-28 sm:pt-44">
      <div className="absolute inset-x-0 top-0 -z-10 h-[30rem] bg-[radial-gradient(circle_at_50%_0%,rgba(139,240,207,0.1),transparent_62%)]" />
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <p className="eyebrow">Transparência</p>
        <h1 className="text-balance text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
          Política de Privacidade
        </h1>
        <p className="mt-5 text-sm text-slate-500">
          Última atualização: setembro de 2026
        </p>

        <div className="privacy-panel mt-10 rounded-[2rem] border border-white/[0.08] bg-[#0a0f0d] p-6 sm:p-10">
          <p className="text-base leading-7 text-slate-300">
            A Tivix trata privacidade como parte da qualidade do produto.
            Coletamos o mínimo necessário e explicamos onde cada dado é usado.
          </p>

          <div className="mt-9 space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-lg font-semibold text-white">
                  {section.title}
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {section.content}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-10 border-t border-white/[0.08] pt-7">
            <h2 className="text-lg font-semibold text-white">7. Contato</h2>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              Para dúvidas ou solicitações relacionadas a dados pessoais,
              escreva para{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-[#8bf0cf] underline underline-offset-4"
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
