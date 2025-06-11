import connectDB from '../../lib/connectDB';
import { Registros, Item } from '../../types/types.ts'

export default async function Seeds() {

  await connectDB()
    .then(() => {
      console.log("Conexão realizada com sucesso!");
    }).catch((err) => {
      console.log("Error na conexão com banco de dados: " + err);
    })

  const registros: Registros = {
    id: '1',
    data_adicionado: '10/06/2025',
    item: {
      id: '1',
      nome: 'Camera Intelbras',
      quantidade: 1,
      quantidade_minimo: 0
    }
  }

  console.log(registros)

  return (
    <h1>Seeds</h1>
  )
}
