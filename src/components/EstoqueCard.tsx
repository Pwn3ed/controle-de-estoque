import { IEstoque } from "@/types/types";

type EstoqueProps = {
    estoque: IEstoque,
}

const EstoqueCard = ( { estoque }: EstoqueProps ) => {
    return (
        <div className="flex flex-col border rounded w-[50vw] p-2">

            <div className="flex flex-row justify-between">
                <p>Nome: </p>
                <p>{estoque.nome}</p>
            </div>

            <div className="flex flex-row justify-between">
                <p>Local: </p>
                <p>{estoque.local}</p>
            </div>

        </div>
    )
}

export default EstoqueCard;