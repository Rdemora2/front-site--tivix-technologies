import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex-grow flex items-center justify-center bg-black min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center py-20 sm:py-32">
        {/* Illustration */}
        <div className="mb-6 sm:mb-8">
          <svg
            className="w-20 h-20 sm:w-24 md:w-32 sm:h-24 md:h-32 mx-auto text-neutral-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Content */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-white mb-3 sm:mb-4">404</h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-300 mb-3 sm:mb-4">
          Pagina nao encontrada
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-neutral-400 mb-6 sm:mb-8">
          Desculpe, a pagina que voce esta procurando nao existe ou foi movida.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-medium text-black bg-white rounded-full transition-all duration-500 hover:scale-105"
          >
            Voltar para a Home
          </Link>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-medium text-neutral-400 rounded-full border border-neutral-800 transition-all duration-500 hover:text-white hover:border-neutral-600"
          >
            Fale Conosco
          </Link>
        </div>
      </div>
    </main>
  )
}
