// 'use client'

import ItemCard from '@/components/ItemCard';
import { getAllItens } from '@/lib/estoqueDB'

const Item = async () => {

    const itens = await getAllItens();

    return (
        <div className="flex flex-col items-center">

            <div className='flex flex-col m-4 gap-2'>
                { itens.map( (item) => <ItemCard key={item._id} item={item} /> ) }
            </div>

        </div>
    )
}

export default Item;
