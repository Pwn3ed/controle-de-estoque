'use client'

import { addItem } from "@/lib/estoqueDB";
import { IEstoque, IItem } from "@/types/types";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

type CadastrarItemProps = {
    estoques: string;
}

const CadastrarItem = ({ estoques }: CadastrarItemProps) => {

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [quantidade, setQuantidade] = useState(0);
    const [quantidadeMinimo, setQuantidadeMinimo] = useState(0);
    const [preco, setPreco] = useState(0.0);
    const [selectedEstoque, setSelectedEstoque] = useState("");

    const handleClickButton = () => {
        const item: IItem = {
            nome: nome,
            descricao: descricao,
            quantidade: quantidade,
            quantidade_minimo: quantidadeMinimo,
            preco: preco,
            _idEstoque: selectedEstoque,
        };

        if (item.nome == '') {
            alert("Nome não pode estar vazio")
        }
        else if (item._idEstoque == '') {
            alert("Estoque não pode estar vazio")
        }
        else {
            addItem(item)
            alert("Item adicionado com sucesso")
            redirect('/')
        }
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

                <div className="flex flex-row justify-between p-2">
                    <p className="text-xl">Selecione o estoque: </p>

                    <select
                         className="w-52 rounded text-black text-center" 
                         value={selectedEstoque} 
                         onChange={ (e) => setSelectedEstoque(e.target.value) }
                    >
                        <option value="" >Selecione um estoque</option>

                        {JSON.parse(estoques).map( (estoque:IEstoque) => <option key={estoque._id} value={estoque._id} >{estoque.local}</option> )}

                    </select>

                </div>

            </div>
            
            <button className="text-2xl bg-green-700 rounded p-2 mt-2" onClick={handleClickButton}>Cadastrar</button>

        </div>
    )
}

export default CadastrarItem;
