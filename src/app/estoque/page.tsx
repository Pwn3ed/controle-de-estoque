// 'use client'

import EstoqueCard from '@/components/EstoqueCard';
import { getAllEstoque } from '@/lib/estoqueDB'
import Link from 'next/link';

const Estoque = async () => {

    const estoques = await getAllEstoque();

    return (
        <div className="flex flex-col items-center">

            <div className='flex flex-col m-4 gap-2'>
                { estoques.map( (estoque) => <Link href={'/estoque/'+estoque.id} ><EstoqueCard key={estoque._id} estoque={estoque} /></Link> ) }
                {/* { estoques.map( (estoque) => {
                    return <EstoqueCard key={estoque._id} estoque={estoque} />
                } ) } */}
            </div>

        </div>
    )
}

export default Estoque;
