
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-10 text-3xl mb-5">Controle de Estoque</h1>

      <div className="flex flex-col">

        <div className="flex flex-row justify-center gap-5 m-2">
          <Link className="border-2 rounded p-2 w-64 text-center bg-blue-400 text-black" href='/estoque'>Estoques</Link>

          <Link className="border-2 rounded p-2 w-64 text-center bg-blue-400 text-black" href='/item'>Itens</Link>
        </div>

        <div className="flex flex-row justify-center gap-5 m-2">
          <Link className="border-2 rounded p-2 w-64 text-center bg-blue-400 text-black" href='/compra'>Compras</Link>
        </div>

        {/* <div className="flex flex-row justify-center m-2">
          <Link className="border-2 rounded p-2 w-64 text-center" href='/reset' >Reset Database</Link>
        </div>

        <div className="flex flex-row justify-center m-2">
          <Link className="border-2 rounded p-2 w-64 text-center" href='/seed' >Seed Database</Link>
        </div> */}

      </div>

    </div>
  );
}
