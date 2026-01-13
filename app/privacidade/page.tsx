export const metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade da Tivix Technologies - Saiba como coletamos e utilizamos seus dados.",
}

export default function PrivacidadePage() {
  return (
    <main className="flex-grow">
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="h1 mb-8 text-center">Política de Privacidade</h1>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              <strong>Última atualização:</strong> Janeiro de 2026
            </p>

            <h2 className="h3 mt-8 mb-4">1. Introdução</h2>
            <p className="text-gray-300 mb-4">
              A Tivix Technologies está comprometida em proteger sua privacidade. Esta Política de Privacidade explica
              como coletamos, usamos, divulgamos e protegemos suas informações pessoais em conformidade com a Lei Geral
              de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>

            <h2 className="h3 mt-8 mb-4">2. Dados que Coletamos</h2>
            <p className="text-gray-300 mb-4">Podemos coletar os seguintes tipos de informações:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>
                <strong>Dados de identificação:</strong> nome, e-mail, telefone quando você nos contata
              </li>
              <li>
                <strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas
              </li>
              <li>
                <strong>Cookies:</strong> utilizamos cookies para melhorar sua experiência de navegação
              </li>
            </ul>

            <h2 className="h3 mt-8 mb-4">3. Como Usamos seus Dados</h2>
            <p className="text-gray-300 mb-4">Utilizamos suas informações para:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Responder às suas solicitações e fornecer suporte</li>
              <li>Melhorar nossos serviços e experiência do usuário</li>
              <li>Enviar comunicações sobre nossos serviços (com seu consentimento)</li>
              <li>Cumprir obrigações legais</li>
            </ul>

            <h2 className="h3 mt-8 mb-4">4. Cookies</h2>
            <p className="text-gray-300 mb-4">Utilizamos os seguintes tipos de cookies:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>
                <strong>Essenciais:</strong> necessários para o funcionamento do site
              </li>
              <li>
                <strong>Analíticos:</strong> Microsoft Clarity para análise de comportamento (com consentimento)
              </li>
            </ul>

            <h2 className="h3 mt-8 mb-4">5. Seus Direitos (LGPD)</h2>
            <p className="text-gray-300 mb-4">Você tem direito a:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Confirmar a existência de tratamento de dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar anonimização, bloqueio ou eliminação de dados</li>
              <li>Revogar consentimento a qualquer momento</li>
            </ul>

            <h2 className="h3 mt-8 mb-4">6. Contato</h2>
            <p className="text-gray-300 mb-4">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato conosco através do
              e-mail: <strong className="text-blue-400">privacidade@tivix.com.br</strong>
            </p>

            <h2 className="h3 mt-8 mb-4">7. Alterações</h2>
            <p className="text-gray-300 mb-4">
              Podemos atualizar esta política periodicamente. Recomendamos que você revise esta página regularmente para
              se manter informado sobre como protegemos suas informações.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
