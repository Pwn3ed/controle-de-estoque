'use server'

import connectDB from '@/lib/connectDB'
import { Estoque, Item } from '@/models/models'
import { IEstoque, IItem } from '@/types/types'

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

export async function deleteEstoqueById(id: string) {
    await connDB();
    return await Estoque.findByIdAndDelete({_id: id})
}

export const addEstoqueMany = async (estoques: IEstoque[]) => {
    await connDB();
    await Estoque.insertMany(estoques)
}

export async function resetEstoque() {
    await connDB();
    return await Estoque.deleteMany({});
}   

// --------------- item ----------------

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

export async function updateItemById(id: string, item: IItem) {
    await connDB();
    return await Item.findByIdAndUpdate(id, {
        nome: item.nome,
        descricao: item.descricao,
        quantidade: item.quantidade,
        quantidade_minimo: item.quantidade_minimo,
        preco: item.preco,
        _idEstoque: item._idEstoque
    });
}

export async function updateQuantidadeItemById(id: string, qtd: number) {
    await connDB();
    return await Item.findByIdAndUpdate(id, {quantidade: qtd})
}

export async function deleteItemById(id: string) {
    await connDB();
    return await Item.deleteOne({ _id: id })
}

export async function resetItem(){
    await connDB();
    return await Item.deleteMany({});
}
