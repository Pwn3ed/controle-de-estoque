'use client'

import { addEstoque } from "@/lib/estoqueDB";
import { redirect } from "next/navigation";
import { useState } from "react";

const Estoque = () => {
    const [local, setLocal] = useState("");

    const handleButtonClick = () => {
        const estoque = {
            local: local
        };

        addEstoque(estoque);
        redirect('/');
    }

    return (
        <div className="flex flex-col items-center">
            <p className="text-2xl">Cadastrar novo estoque</p>

            <div className="flex flex-col p-2 m-4 border-2 rounded">
                <div className="flex flex-row justify-between p-2">
                    <p className="text-xl">Local: </p>
                    <input className="ml-1 rounded text-black" type="text" onChange={ (e) => setLocal(e.target.value) } />
                </div>
            </div>
            
            <button className="text-2xl bg-green-700 rounded p-2 mt-2" onClick={ () => handleButtonClick() }>Cadastrar</button>

        </div>
    )
}

export default Estoque;
