// 'use client'

import EstoqueCard from '@/components/EstoqueCard';
import RegistroCard from '@/components/RegistroCard';
import EstoqueComponent from '@/components/RegistroCard';
import { getEstoque, getRegistro } from '@/lib/estoqueDB'
import { IEstoque, IRegistro } from '@/types/types';

const Estoque = async () => {

    const registros:IRegistro[] = await getRegistro();
    // console.log(registros[0].estoque.itens[0].nome)

    // const estoques:IEstoque[] = await getEstoque();
    // console.log(estoques)

    return (
        <div className="flex flex-col items-center">
            {/* <h1>Estoque Geral</h1> */}

            <div>
                {registros.map( (registro) => {
                    return (
                        <RegistroCard key={registro._id?.toString()} registro={registro} /> 
                        // <h2>{registro.estoque.itens[0].nome}</h2>
                    )
                } )}
            </div>


            {/* <div>
                {estoques.map( (estoque) => {
                    return (
                        <EstoqueCard estoque={estoque} />
                        // <h2>{registro.estoque.itens[1].nome}</h2>
                    ) 
                } )}
            </div> */}

        </div>
    )
}

export default Estoque;
