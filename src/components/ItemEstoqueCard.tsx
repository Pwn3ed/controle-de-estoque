'use client'

import { deleteItemById, updateQuantidadeItemById } from "@/lib/estoqueDB";
import { IItem } from "@/types/types";

type ItemProps = {
    item: IItem,
}

const ItemEstoqueCard = ( { item }: ItemProps ) => {

    const removerItem = () => {
        const qtd = prompt("Quantos itens você gostaria de remover?")
        console.log(qtd)

        const newQuantidade = item.quantidade - parseInt(qtd ?? '');

        updateQuantidadeItemById(item._id ?? '', newQuantidade)
    }

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

            <button className="border-2 rounded p-2 mb-4 w-64 bg-red-500 text-black self-center" onClick={() => removerItem()} >Remover</button>
            {/* <Link className="border-2 rounded p-2 mb-4 w-64 text-center bg-green-500 text-black" href='/cadastrar/item'>Cadastrar novo item</Link> */}
            
        </div>
    )
}

export default ItemEstoqueCard;