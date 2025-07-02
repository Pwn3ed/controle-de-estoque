'use client'

import { deleteEstoqueById } from "@/lib/estoqueDB"
import { redirect } from "next/navigation"

type RemoverEstoqueComponentProps = {
    id: string
}

const RemoverEstoqueComponent = ({ id }: RemoverEstoqueComponentProps) => {

    const removerEstoque = () => {
        if (confirm("Cuidado, ao confirmar você excluirá este estoque com todos seus itens, você tem certeza?")) {
            deleteEstoqueById(id)
        }
        redirect('/')
    }

    return (
        <button className="border-2 rounded p-2 mb-4 w-64 bg-black text-white self-center" onClick={ removerEstoque }>Excluir estoque</button>
    )
}

export default RemoverEstoqueComponent;