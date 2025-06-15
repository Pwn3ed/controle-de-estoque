import EstoqueCard from '@/components/EstoqueCard';
import { getAllEstoque } from '@/lib/estoqueDB'
import { IEstoque } from '@/types/types';
import Link from 'next/link';

const Estoque = async () => {

    const estoques: IEstoque[] = await getAllEstoque();

    return (
        <div className="flex flex-col items-center"> 

            <div className='flex flex-col m-4 gap-2'>
                { estoques.map( (estoque) => <Link key={estoque._id} href={'/estoque/'+estoque._id} ><EstoqueCard estoque={estoque} /></Link> ) }
            </div>

        </div>
    )
}

export default Estoque;
