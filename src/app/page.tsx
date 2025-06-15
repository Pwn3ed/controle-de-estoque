
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-10 text-3xl mb-5">Sistema para Gestão de Estoque Modular</h1>

      <div className="flex flex-col">

        <div className="flex flex-row justify-center gap-5 m-2">
          <Link className="border-2 rounded p-2 w-64 text-center" href='/estoque'>Visualizar Estoques</Link>

          <Link className="border-2 rounded p-2 w-64 text-center" href='/item'>Visualizar Itens</Link>

          <Link className="border-2 rounded p-2 w-64 text-center" href='/registro'>Visualizar Histórico de Entradas e Saídas</Link>
        </div>

        <div className="flex flex-row justify-center gap-5 m-2">
          <Link className="border-2 rounded p-2 w-64 text-center" href='/cadastrar/estoque'>Cadastrar novo estoque</Link>

          <Link className="border-2 rounded p-2 w-64 text-center" href='/cadastrar/item'>Cadastrar novo Item</Link>
        </div>

        <div className="flex flex-row justify-center gap-5 m-2">
          <Link className="border-2 rounded p-2 w-64 text-center" href='/'>Nova Entrada</Link>

          <Link className="border-2 rounded p-2 w-64 text-center" href='/'>Nova Saída</Link>
        </div>

        <div className="flex flex-row justify-center m-2">
          <Link className="border-2 rounded p-2 w-64 text-center" href='/reset' >Reset Database</Link>
        </div>

        <div className="flex flex-row justify-center m-2">
          <Link className="border-2 rounded p-2 w-64 text-center" href='/seed' >Seed Database</Link>
        </div>

      </div>

    </div>
  );
}
