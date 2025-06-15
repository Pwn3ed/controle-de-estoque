import ItemCard from '@/components/ItemCard';
import { getAllItens } from '@/lib/estoqueDB'
import { IItem } from '@/types/types';
import Link from 'next/link';

const Item = async () => {

    const itens: IItem[] = await getAllItens();

    return (
        <div className="flex flex-col items-center m-4">

            <Link className="border-2 rounded p-2 mb-4 w-64 text-center" href='/cadastrar/item'>Cadastrar novo item</Link>

            <div className='flex flex-col gap-2'>
                { itens.map( (item) => <Link key={item._id} href={'/item/'+item._id}><ItemCard item={item} /></Link> ) }
            </div>

        </div>
    )
}

export default Item;
