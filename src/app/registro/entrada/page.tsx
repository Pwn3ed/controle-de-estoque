import ItemCard from "@/components/ItemCard";
import { getAllItens } from "@/lib/estoqueDB";
import { IItem } from "@/types/types";
import Link from "next/link";

const Entrada = async () => {

    const itens: IItem[]  = await getAllItens();

    return (
        <div className="flex flex-col items-center m-4">

            <p className="text-xl">Nova Entrada</p>

            <p>Selecione um item: </p>

            <div className='flex flex-col gap-2'>
                { itens.map( (item) => <ItemCard item={item} /> ) }

            </div>

        </div>
    )
}

export default Entrada;