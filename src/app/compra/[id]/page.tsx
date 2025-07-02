import ItemEstoqueCard from "@/components/ItemEstoqueCard"
import ItensMinimoCard from "@/components/ItensMinimoCard"
import { getAllItens, getAllItensFromEstoqueId, getEstoqueById } from "@/lib/estoqueDB"
import { IEstoque, IItem } from "@/types/types"
import Link from "next/link"

type paramsProps = {
    params: { id: string }
}

const CompraID = async ({ params }: paramsProps) => {

    const estoque: IEstoque = await getEstoqueById(params.id)
    const itens: IItem[] = await getAllItensFromEstoqueId(params.id)

    const itens_minimo = itens.filter((item) => item.quantidade < item.quantidade_minimo)

    return (
        <div className="flex flex-col items-center">
            <p>Local: {estoque.local}</p>

            <div className="flex flex-col items-center gap-2">
                <p>Relação de itens abaixo do estoque mínimo:</p>

                {
                    itens[0] ?
                    itens_minimo.map( (item) => <ItensMinimoCard key={item._id} itemJSON={JSON.stringify(item)} /> )
                    :
                    <p>Nenhum item encontrado</p>
                }
            </div>

        </div>
    )
}

export default CompraID;