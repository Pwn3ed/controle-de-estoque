import ItemEstoqueCard from "@/components/ItemEstoqueCard"
import { getAllItens, getAllItensFromEstoqueId, getEstoqueById } from "@/lib/estoqueDB"
import { IEstoque, IItem } from "@/types/types"
import Link from "next/link"

type paramsProps = {
    params: { id: string }
}

const EstoqueID = async ({ params }: paramsProps) => {

    const estoque: IEstoque = await getEstoqueById(params.id)
    const itens: IItem[] = await getAllItensFromEstoqueId(params.id)

    return (
        <div className="flex flex-col items-center">
            <p>Local: {estoque.local}</p>
            Itens: 
            {itens.map( (item) => <ItemEstoqueCard item={item} /> )}
        </div>
    )
}

export default EstoqueID;