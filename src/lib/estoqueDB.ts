'use server'

import connectDB from '@/lib/connectDB'
import Estoque from '@/models/Estoque'

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
    return await Estoque.find({})
}

export async function resetEstoque() {
    await connDB();
    return await Estoque.deleteMany({})}

// export async function getNoticias(){
    // await connDB()
    // return await Noticia.find({})
// }

// export async function getNoticia(id){
//     await connDB()
//     return await Noticia.findById(id)
// }

// export async function apagaNoticia(id, imagem){

// }'use server'

// import connectDB from '@/lib/connectDB'
// import Noticia from '@/models/noticia'

// async function connDB(){
//     await connectDB()
//     .then(() => {
//         console.log('Conexão estabelecida com o banco!')
//     })
//     .catch(err => {
//         console.log('Erro ao conectar com o banco.')
//         console.log(err)
//     })
// }
// export async function getNoticias(){
//     await connDB()
//     return await Noticia.find({})
// }
// export async function getNoticia(id){
//     await connDB()
//     return await Noticia.findById(id)
// }

// export async function apagaNoticia(id, imagem){

// }