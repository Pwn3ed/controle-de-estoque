'use client'

import { addItem } from "@/lib/estoqueDB";
import { IItem } from "@/types/types";
import { useState } from "react";


const Item = () => {

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [quantidade, setQuantidade] = useState(0);
    const [quantidadeMinimo, setQuantidadeMinimo] = useState(0);
    const [preco, setPreco] = useState(0.0);

    const handleClickButton = () => {
        const item: IItem = {
            nome: nome,
            descricao: descricao,
            quantidade: quantidade,
            quantidade_minimo: quantidadeMinimo,
            preco: preco
        }
        
        addItem(item)
    }

    return (
        <div className="flex flex-col items-center">
            <p className="text-2xl">Cadastrar novo item</p>

            <div className="flex flex-col p-2 m-4 border-2 rounded">
                <div className="flex flex-row justify-between p-2">
                    <p className="text-xl">Nome: </p>
                    <input onChange={ (e) => setNome(e.currentTarget.value) } className="ml-1 rounded text-black" type="text" />
                </div>

                <div className="flex flex-row justify-between p-2">
                    <p className="text-xl">Descrição: </p>
                    <input onChange={ (e) => setDescricao(e.currentTarget.value) } className="ml-1 rounded text-black" type="text" />
                </div>

                <div className="flex flex-row justify-between p-2">
                    <p className="text-xl">Quantidade: </p>
                    <input onChange={ (e)=> setQuantidade(parseInt(e.currentTarget.value)) } className="ml-1 rounded text-black" type="number" />
                </div>

                <div className="flex flex-row justify-between p-2">
                    <p className="text-xl">Quantidade Mínimo: </p>
                    <input onChange={ (e)=> setQuantidadeMinimo(parseInt(e.currentTarget.value)) } className="ml-1 rounded text-black" type="number" />
                </div>

                <div className="flex flex-row justify-between p-2">
                    <p className="text-xl">Preço: </p>
                    <input onChange={ (e)=> setPreco(parseInt(e.currentTarget.value)) } className="ml-1 rounded text-black" type="number" />
                </div>


            </div>
            
            <button className="text-2xl bg-green-700 rounded p-2 mt-2" onClick={handleClickButton}>Cadastrar</button>

        </div>
    )
}

export default Item;
