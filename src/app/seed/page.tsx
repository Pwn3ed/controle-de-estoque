import estoques from './estoques.json'
import itens from './itens.json'
import { addEstoqueMany, addItemMany } from '@/lib/estoqueDB';

const Seed = () => {

  addItemMany(itens);
  addEstoqueMany(estoques);

  return (
    <h1>Seeds adicionados ao banco de dados.</h1>
  )
}

export default Seed;