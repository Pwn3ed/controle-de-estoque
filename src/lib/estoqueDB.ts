'use server'

import connectDB from '@/lib/connectDB'
import { Estoque, Item, Registro } from '@/models/models'
import { IEstoque, IItem, IRegistro } from '@/types/types'

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

// ---------------

export async function getRegistro() {
    await connDB();
    return await Registro.find({});
}

export async function addRegistro(registro: IRegistro) {
    await connDB();
    return await Registro.insertOne(registro)
}

export async function resetRegistro() {
    await connDB();
    return await Registro.deleteMany({});
}   

// ---------------

export async function getEstoque() {
    await connDB();
    return await Estoque.find({});
}

export async function getEstoqueById(id: string) {
    await connDB();
    return await Estoque.findById(id);
}

export async function getAllEstoque() {
    await connDB();
    const estoques = await Estoque.find({});
    return estoques;
}

export async function addEstoque(estoque: IEstoque) {
    await connDB();
    return await Estoque.insertOne(estoque);
}

export const addEstoqueMany = async (estoques: IEstoque[]) => {
    await connDB();
    await Estoque.insertMany(estoques)
}

export async function resetEstoque() {
    await connDB();
    return await Estoque.deleteMany({});
}   

// ---------------

export async function addItem(item: IItem) {
    await connDB();
    await Item.insertOne(item)
}

export const addItemMany = async (itens: IItem[]) => {
    await connDB();
    await Item.insertMany(itens)
}

export async function getAllItens() {
    await connDB();
    const itens = await Item.find({});
    return itens;
}

export async function getAllItensFromEstoqueId(idEstoque: string) {
    await connDB();
    const itens = (await Item.find({})).filter( (item: IItem) => item._idEstoque == idEstoque )
    return itens;
}

export async function getItemById(id: string) {
    await connDB();
    return await Item.findById(id)
}

export async function updateItemById(item: IItem) {
    await connDB();
    return await Item.findByIdAndUpdate(item);
}

export async function resetItem(){
    await connDB();
    return await Item.deleteMany({});
}
