'use server'

import connectDB from '@/lib/connectDB'
import { Estoque, Registro } from '@/models/models'
import { IRegistro } from '@/types/types'

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

export async function getRegistro() {
    await connDB();
    return await Registro.find({});
}

export async function cadastrarRegistro(registro: IRegistro) {
    await connDB();
    return await Registro.insertOne(registro)
}

export async function resetRegistro() {
    await connDB();
    return await Registro.deleteMany({})
}   

    
export async function getEstoque() {
    await connDB();
    return await Estoque.find({});
}