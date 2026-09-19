import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="conteudo"
      className="grid min-h-screen place-items-center px-5 pb-20 pt-32 text-center"
    >
      <div className="max-w-2xl">
        <p className="eyebrow">Erro 404</p>
        <h1 className="text-balance text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
          Esta rota não leva a lugar nenhum.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-400">
          O endereço pode ter mudado ou sido digitado incorretamente. A página
          inicial continua sendo o melhor ponto de partida.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="button-primary">
            Voltar para o início
          </Link>
          <Link href="/contato" className="button-secondary">
            Falar com a Tivix
          </Link>
        </div>
      </div>
    </main>
  );
}
