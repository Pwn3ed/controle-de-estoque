import { getItemById } from "@/lib/estoqueDB"
import { IItem } from "@/types/types"

type paramsProps = {
    params: { id: string }
}

const ItemID = async ({ params }: paramsProps) => {

    const item: IItem = await getItemById(params.id)

    return (
        <div className="flex flex-col items-center">
            <h1>{item.nome}</h1>
        </div>
    )
}

export default ItemID;