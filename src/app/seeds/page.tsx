import { Registro } from '@/models/models.ts';
import connectDB from '../../lib/connectDB.ts';
import registros from './registros.json'

export default async function Seeds() {

  await connectDB()
    .then(() => {
      console.log("Conexão realizada com sucesso!");
    }).catch((err) => {
      console.log("Error na conexão com banco de dados: " + err);
    })

  console.log(registros)

  await new Registro(registros).save()

  return (
    <h1>Seeds adicionados ao banco de dados.</h1>
  )
}
