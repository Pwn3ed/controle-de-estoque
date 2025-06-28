'use client'

import { IEstoque } from "@/types/types";
import { useState } from "react";

type listAllEstoquesProps = {
    estoques: string,
    idEstoqueSelecionado: string
}

const ListAllEstoques = ({ estoques, idEstoqueSelecionado }: listAllEstoquesProps) => {

    const [selectedEstoque, setSelectedEstoque] = useState("");

    return (
        <select
                className="w-52 rounded text-black text-center" 
                value={idEstoqueSelecionado} 
                onChange={ (e) => setSelectedEstoque(e.target.value) }
        > 
            {JSON.parse(estoques).map( (estoque:IEstoque) => <option key={estoque._id} value={estoque._id} >{estoque.local}</option> )}

        </select>
    )
}

export default ListAllEstoques;