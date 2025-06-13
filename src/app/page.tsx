import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-10 text-3xl">Sistema para Gestão de Estoque Modular</h1>

      <div className="flex flex-col">
        
        <div className="flex flex-row justify-between m-5">
          <p className="border-2 rounded p-2">
            <Link href='/estoque'>Visualizar Estoque Geral</Link>
          </p>

          <p className="border-2 rounded p-2 ml-5">
            <Link href='/'>Visualizar Registros de Entrada/Saída</Link>
          </p>
        </div>

        <div className="flex flex-row justify-between m-5">
          <p className="border-2 rounded p-2 ml-5">
            <Link href='/cadastrar/estoque'>Cadastrar novo estoque</Link>
          </p>

          <p className="border-2 rounded p-2 ml-5">
            <Link href='/cadastrar/item'>Cadastrar novo item</Link>
          </p>
        </div>

        <div className="flex flex-row justify-between m-5">
          <p className="border-2 rounded p-2 ml-5">
            <Link href='/'>Nova Entrada</Link>
          </p>

          <p className="border-2 rounded p-2 ml-5">
            <Link href='/'>Nova Saída</Link>
          </p>
        </div>

      </div>

    </div>
  );
}
