'use server'

import connectDB from '@/lib/connectDB'
import { Registro } from '@/models/models'

async function connDB(){
    await connectDB()
    .then(() => {
        console.log('Conexão estabelecida com o banco!')
    })
    .catch(err => {
        console.log('Erro ao conectar com o banco.')
        console.log(err)
    })
}

export async function getEstoque() {
    await connDB();
    return await Registro.find({});
}

export async function resetEstoque() {
    await connDB();
    return await Registro.deleteMany({})}
