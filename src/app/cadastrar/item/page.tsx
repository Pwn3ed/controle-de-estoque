import CadastrarItem from "@/components/CadastrarItem";
import { addItem, getAllEstoque } from "@/lib/estoqueDB";
import { IEstoque, IItem } from "@/types/types";


const Item = async () => {

    const estoques = await getAllEstoque();
    console.log(estoques)

    return (
        <div className="flex flex-col items-center">
            <div>
                <CadastrarItem estoques={JSON.stringify(estoques)} />
            </div>

        </div>
    )
}

export default Item;
