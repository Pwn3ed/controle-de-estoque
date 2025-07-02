import estoques from './estoques.json'
import itens from './itens.json'
import { addEstoqueMany, addItemMany, getAllEstoque } from '@/lib/estoqueDB';

const Seed = () => {

  // addItemMany(itens);
  addEstoqueMany(estoques);

  return (
    <div className='flex flex-col items-center'>
      <h1>Seeds adicionados ao banco de dados.</h1>
    </div>
  )
}

export default Seed;
