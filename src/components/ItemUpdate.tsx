'use client'

import { updateItemById } from "@/lib/estoqueDB";
import { IEstoque, IItem } from "@/types/types";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

type ItemUpdateProps = {
    itemJSON: string,
    estoquesJSON: string
}

const ItemUpdate = ({ itemJSON, estoquesJSON }: ItemUpdateProps) => {

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [quantidade, setQuantidade] = useState(0);
    const [quantidadeMinimo, setQuantidadeMinimo] = useState(0);
    const [preco, setPreco] = useState(0.0);
    const [selectedEstoque, setSelectedEstoque] = useState("");

    const item: IItem = JSON.parse(itemJSON)
    const estoques: IEstoque[] = JSON.parse(estoquesJSON)
    
    const handleButtonClick = () => {
        const newItem = {
            nome: nome,
            descricao: descricao,
            quantidade: quantidade,
            quantidade_minimo: quantidadeMinimo,
            preco: preco,
            _idEstoque: selectedEstoque,
        }
        updateItemById(String(item._id), newItem)
        redirect('/')
    }
    
    useEffect(() => {
        setNome(item.nome)
        setDescricao(item.descricao ?? "")
        setQuantidade(item.quantidade)
        setQuantidadeMinimo(item.quantidade_minimo ?? 0)
        setPreco(item.preco ?? 0 )
        setSelectedEstoque(item._idEstoque)
    }, [])

    return (
        <div className="flex flex-col border w-[50vw] self-center p-2 gap-2">

            <div className="flex flex-row justify-between">
                <p>Item: </p>
                <input className="text-black" type="text" value={nome} onChange={ (e) => setNome(e.currentTarget.value) } />
            </div>

            <div className="flex flex-row justify-between">
                <p>{item.descricao}</p>
                <input className="text-black" type="text" value={descricao} onChange={ (e) => setDescricao(e.currentTarget.value) } />
            </div>

            <div className="flex flex-row justify-between">
                <p>Quantidade: </p>
                <input className="text-black" type="number" value={quantidade} onChange={ (e) => setQuantidade(parseInt(e.currentTarget.value)) } />
            </div>

            <div className="flex flex-row justify-between">
                <p>Quantidade Minimo: </p>
                <input className="text-black" type="number" value={quantidadeMinimo} onChange={ (e) => setQuantidadeMinimo(parseInt(e.currentTarget.value)) } />
            </div>

            <div className="flex flex-row justify-between">
                <p>Preço: </p>
                <input className="text-black" type="number" value={preco} onChange={ (e) => setPreco(parseInt(e.currentTarget.value)) } />
            </div>

            <div className="flex flex-row justify-between">
                <p>Estoque: </p>

                <select
                        className="w-52 rounded text-black text-center" 
                        value={selectedEstoque} 
                        onChange={ (e) => setSelectedEstoque(e.target.value) }
                > 
                    {estoques.map( (estoque:IEstoque) => <option key={estoque._id} value={estoque._id} >{estoque.local}</option> )}
                </select>

            </div>

            <button className="border-2 rounded p-2 w-64 self-center" onClick={ () => handleButtonClick() }>Atualizar Item</button>

        </div>
    )
}

export default ItemUpdate;