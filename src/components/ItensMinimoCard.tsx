
import { IEstoque, IItem } from "@/types/types";

type EstoqueProps = {
    itemJSON: string
}

const ItensMinimoCard = ( { itemJSON }: EstoqueProps ) => {

    const item: IItem = JSON.parse(itemJSON);

    return (
        <div className="flex flex-col border rounded w-[50vw] p-2">

            <div className="flex flex-row justify-between">
                <p>Nome: </p>
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
                <p>Quantidade Mínimo: </p>
                <p>{item.quantidade_minimo}</p>
            </div>

            <div className="flex flex-row justify-between">
                <p>Preço:</p>
                <p>R${item.preco}</p>
            </div>

        </div>
    )
}

export default ItensMinimoCard;