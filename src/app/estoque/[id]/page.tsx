
import ItemEstoqueCard from "@/components/ItemEstoqueCard"
import RemoverEstoqueComponent from "@/components/RemoverEstoqueComponent"
import { getAllItens, getAllItensFromEstoqueId, getEstoqueById } from "@/lib/estoqueDB"
import { IEstoque, IItem } from "@/types/types"
import Link from "next/link"

type paramsProps = {
    params: { id: string }
}

const EstoqueID = async ({ params }: paramsProps) => {

    const estoque: IEstoque = await getEstoqueById(params.id)
    const itens: IItem[] = await getAllItensFromEstoqueId(params.id)

    const removerEstoque = () => {

    }

    return (
        <div className="flex flex-col items-center m-4">
            <RemoverEstoqueComponent id={String(estoque._id)} />
            <p>Local: {estoque.local}</p>

            <div className="flex flex-col items-center gap-2">
                <p>Lista de itens: </p>

                {
                    itens[0] ?
                    itens.map( (item) => <ItemEstoqueCard itemJSON={JSON.stringify(item)} /> )
                    :
                    <p>Nenhum item encontrado</p>
                }
            </div>


        </div>
    )
}

export default EstoqueID;