import { getItemById } from "@/lib/estoqueDB"
import { IItem } from "@/types/types"

type paramsProps = {
    params: { id: string }
}

const ItemID = async ({ params }: paramsProps) => {

    const item: IItem = await getItemById(params.id)

    return (
        <div className="flex flex-col border w-[50vw] self-center">

            <div className="flex flex-row justify-between">
                <p>Item: </p>
                <p>{item.nome}</p>
            </div>

            <div className="flex flex-row justify-between">
                <p>Descrição: </p>
                <p>{item.descricao}</p>
            </div>

            <div className="flex flex-row justify-between">
                <p>Quantidade: </p>
                <p>{item.quantidade}</p>
            </div>

            <div className="flex flex-row justify-between">
                <p>Quantidade Minimo: </p>
                <p>{item.quantidade_minimo}</p>
            </div>

            <div className="flex flex-row justify-between">
                <p>Preço: </p>
                <p>{item.preco}</p>
            </div>

            <div className="flex flex-row justify-between">
                <p>IdEstoque: </p>
                <p></p>
            </div>

        </div>

    )
}

export default ItemID;