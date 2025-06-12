// 'use client'

import RegistroCard from '@/components/RegistroCard';
import EstoqueComponent from '@/components/RegistroCard';
import { getEstoque } from '@/lib/estoqueDB'
import { IEstoque, IRegistro } from '@/types/types';

const Estoque = async () => {

    const registros:IRegistro[] = await getEstoque();
    console.log("DEBUG: ")
    console.log(registros[0].estoque.itens[0].nome)

    return (
        <div className="flex flex-col items-center">
            {/* <h1>Estoque Geral</h1> */}

            <div>
                {registros.map( (registro) => {
                    return (
                        <RegistroCard registro={registro} />
                        // <h2>{registro.estoque.itens[1].nome}</h2>
                    ) 
                } )}
            </div>

        </div>
    )
}

export default Estoque;
