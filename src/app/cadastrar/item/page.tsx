import ItemAdd from "@/components/ItemAdd";
import { addItem, getAllEstoque } from "@/lib/estoqueDB";
import { IEstoque, IItem } from "@/types/types";


const Item = async () => {
    // const [estoques, setEstoques] = useState<IEstoque[]>([]);

    // const getAllEstoqueHandler = async () => {
    //     const estoqueAll = await getAllEstoque();
    //     console.log("salve")
    //     setEstoques(estoqueAll)
    //     console.log(estoqueAll)
    // }

    // useEffect(() => {
        // getAllEstoqueHandler();
// }, [])

    const estoques = await getAllEstoque();
    // console.log(JSON.stringify(estoques))
    console.log(estoques)

    return (
        <div className="flex flex-col items-center">
            <div>
                <ItemAdd estoques={JSON.stringify(estoques)} />
            </div>

        </div>
    )
}

export default Item;
