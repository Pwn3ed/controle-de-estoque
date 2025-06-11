// 'use client'

import { getEstoque } from '@/lib/estoqueDB'

const Estoque = async () => {

    const estoque = await getEstoque();
    console.log(estoque[0].itens[0].nome)
    const item1 = estoque[0].itens[0].nome

    return (
        <div className="flex flex-col items-center">
            <h1>Estoque Geral</h1>

            <h2>{item1}</h2>

        </div>
    )
}

export default Estoque;
