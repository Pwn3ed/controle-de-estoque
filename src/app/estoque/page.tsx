// 'use client'

import EstoqueComponent from '@/components/Estoque';
import { getEstoque } from '@/lib/estoqueDB'

const Estoque = async () => {

    const estoqueGeral = await getEstoque();
    console.log(estoqueGeral)
    // const item1 = estoqueGeral[0].itens[0].nome

    return (
        <div className="flex flex-col items-center">
            <h1>Estoque Geral</h1>

            {/* <h2>{item1}</h2> */}

            <div>
                {estoqueGeral.map( (estoque) => {
                    return (
                        // <EstoqueComponent key={estoque.id} estoque={estoque}/>
                        <h1 key={estoque.id}>salve</h1>
                    ) 
                } )}
            </div>

        </div>
    )
}

export default Estoque;
