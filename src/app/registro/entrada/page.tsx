import EstoqueCard from "@/components/EstoqueCard";
import ItemCard from "@/components/ItemCard";
import { getAllEstoque, getAllItens } from "@/lib/estoqueDB";
import { IEstoque, IItem } from "@/types/types";
import Link from "next/link";

const Entrada = async () => {

    const itens: IItem[]  = await getAllItens();
    const estoques: IEstoque[] = await getAllEstoque();

    return (
        <div className="flex flex-col items-center m-4">

            <p className="text-xl">Nova Entrada</p>



            <div className='flex flex-col m-4 gap-2'>
                { estoques.map( (estoque) => <Link key={estoque._id} href={'/estoque/'+estoque._id} ><EstoqueCard estoque={estoque} /></Link> ) }
            </div>


        </div>
    )
}

export default Entrada;