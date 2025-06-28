import ListAllEstoques from "@/components/ListAllEstoques"
import { getAllEstoque, getEstoqueById, getItemById } from "@/lib/estoqueDB"
import { IEstoque, IItem } from "@/types/types"

type paramsProps = {
    params: { id: string }
}

const ItemID = async ({ params }: paramsProps) => {

    const item: IItem = await getItemById(params.id)

    const estoques: IEstoque[] = await getAllEstoque();

    return (
        <div className="flex flex-col border w-[50vw] self-center p-2 gap-2">

            <div className="flex flex-row justify-between">
                <p>Item: </p>
                <input className="text-black" type="text" value={item.nome} />
            </div>

            <div className="flex flex-row justify-between">
                <p>{item.descricao}</p>
                <input className="text-black" type="text" value={item.descricao} />
            </div>

            <div className="flex flex-row justify-between">
                <p>Quantidade: </p>
                <input className="text-black" type="text" value={item.quantidade} />
            </div>

            <div className="flex flex-row justify-between">
                <p>Quantidade Minimo: </p>
                <input className="text-black" type="text" value={item.quantidade_minimo} />
            </div>

            <div className="flex flex-row justify-between">
                <p>Preço: </p>
                <input className="text-black" type="text" value={item.preco} />
            </div>

            <div className="flex flex-row justify-between">
                <p>Estoque: </p>
                <ListAllEstoques estoques={JSON.stringify(estoques)} idEstoqueSelecionado={item._idEstoque} />
            </div>

            <button>Salve</button>

        </div>

    )
}

export default ItemID;