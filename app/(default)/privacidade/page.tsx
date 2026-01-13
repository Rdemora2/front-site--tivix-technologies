export const metadata = {
  title: "Política de Privacidade",
  description: "Conheça nossa Política de Privacidade e saiba como a Tivix Technologies protege seus dados pessoais.",
}

export default function PrivacidadePage() {
  return (
    <main className="flex-grow">
      <section className="relative pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center pb-8 sm:pb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-3">
              Política de Privacidade
            </h1>
            <p className="text-xs sm:text-sm text-neutral-400">Última atualização: Janeiro de 2026</p>
          </div>

          {/* Content */}
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
            {[
              {
                title: "1. Introdução",
                content:
                  "A Tivix Technologies está comprometida em proteger sua privacidade. Esta Política explica como coletamos, usamos e protegemos suas informações.",
              },
              {
                title: "2. Informações Coletadas",
                content:
                  "Coletamos informações de contato (nome, e-mail, telefone), dados técnicos (IP, navegador) e utilizamos cookies para melhorar sua experiência.",
              },
              {
                title: "3. Uso das Informações",
                content:
                  "Utilizamos suas informações para responder solicitações, enviar comunicações (com consentimento), melhorar nossos serviços e cumprir obrigações legais.",
              },
              {
                title: "4. Cookies",
                content:
                  "Utilizamos cookies essenciais para funcionamento do site e cookies analíticos (Microsoft Clarity) para entender como você usa nosso site.",
              },
              {
                title: "5. Seus Direitos (LGPD)",
                content:
                  "Você tem direito a acessar, corrigir, excluir seus dados e revogar consentimento. Entre em contato através do e-mail privacidade@tivix.com.br.",
              },
              {
                title: "6. Contato",
                content: "Para dúvidas sobre esta política, entre em contato: privacidade@tivix.com.br",
              },
            ].map((section, i) => (
              <div key={i}>
                <h2 className="text-sm sm:text-base font-semibold text-white mb-2">{section.title}</h2>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
