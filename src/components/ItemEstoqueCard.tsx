'use client'

import { deleteItemById, updateQuantidadeItemById } from "@/lib/estoqueDB";
import { IItem } from "@/types/types";
import { redirect } from "next/navigation";

type ItemProps = {
    itemJSON: string,
}

const ItemEstoqueCard = ( { itemJSON }: ItemProps ) => {

    const item: IItem = JSON.parse(itemJSON)

    const adicionarQuantidade = () => {
        const qtd = prompt("Quantos itens você gostaria de adicionar?")

        const newQuantidade = item.quantidade + parseInt(qtd ?? '');

        if (newQuantidade < 0 || parseInt(qtd ?? '') < 0) {
            alert("Quantidade não pode ser negativa.")
        } else {
            updateQuantidadeItemById(item._id ?? '', newQuantidade)
    
            redirect('/estoque/'+item._idEstoque)
        }
    }

    const removerQuantidade = () => {
        const qtd = prompt("Quantos itens você gostaria de remover?")

        const newQuantidade = item.quantidade - parseInt(qtd ?? '');

        if (newQuantidade < 0 || parseInt(qtd ?? '') < 0) {
            alert("Quantidade não pode ser negativa.")
        } else {
            updateQuantidadeItemById(item._id ?? '', newQuantidade)
    
            redirect('/estoque/'+item._idEstoque)
        }

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

            <div className="flex justify-center gap-2">
                <button className="border-2 rounded p-2 mb-4 w-64 bg-green-500 text-black" onClick={() => adicionarQuantidade()} >Adicionar quantidade</button>
                <button className="border-2 rounded p-2 mb-4 w-64 bg-red-500 text-black" onClick={() => removerQuantidade()} >Remover quantidade</button>
            </div>
            
        </div>
    )
}

export default ItemEstoqueCard;