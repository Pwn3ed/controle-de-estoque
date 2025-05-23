import Image from "next/image";
import Estoque from "../components/Estoque";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col place-items-center">
      <h1>Controle de Estoque</h1>
      <div className="justify-between">
        <button className="border-2 rounded p-2">
          Cadastrar novo componente de estoque
        </button>
        <p className="border-2 rounded p-2">
          <Link href='/estoque'>Visualizar estoque geral</Link>
        </p>
      </div>
    </div>
  );
}
