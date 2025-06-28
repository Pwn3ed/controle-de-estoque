import ItemUpdate from "@/components/ItemUpdate"
import { getAllEstoque, getEstoqueById, getItemById } from "@/lib/estoqueDB"
import { IEstoque, IItem } from "@/types/types"

type paramsProps = {
    params: { id: string }
}

const ItemID = async ({ params }: paramsProps) => {

    const item: IItem = await getItemById(params.id)

    const estoques: IEstoque[] = await getAllEstoque();

    return (
        <ItemUpdate itemJSON={JSON.stringify(item)} estoquesJSON={JSON.stringify(estoques)} />
    )
}

export default ItemID;