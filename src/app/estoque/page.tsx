import EstoqueCard from '@/components/EstoqueCard';
import { getAllEstoque } from '@/lib/estoqueDB'
import { IEstoque } from '@/types/types';
import Link from 'next/link';

const Estoque = async () => {

    const estoques: IEstoque[] = await getAllEstoque();

    return (
        <div className="flex flex-col items-center m-4"> 

            <Link href={'/cadastrar/estoque'} className="border-2 rounded p-2 mb-4 w-64 bg-green-500 text-center text-black" >Cadastrar novo estoque</Link>


            <div className='flex flex-col m-4 gap-2'>
                {
                    estoques[0] ?
                    estoques.map( (estoque) => <Link key={estoque._id} href={'/estoque/'+estoque._id} ><EstoqueCard estoque={estoque} /></Link> )
                    :
                    <p>Nenhum estoque encontrado</p>
                }
            </div>

        </div>
    )
}

export default Estoque;
