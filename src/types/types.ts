import { Types } from "mongoose"

//produto >  item

export type IItemEstoque = {
	_id?: String,
	nome: string, // produto
	descricao?: string, // produto
	quantidade: number, // item
	quantidade_minimo: number, // item
	preco?: number, // produto
	unidade?: number, // produto
}
	
export type IEstoque = {
	_id?: String,
	nome: string,
	local: string,
	descricao?: string,
	itens: IItemEstoque[],
}

export type IRegistro = {
	_id?: String,
	estoque: IEstoque,
	// createdAt: Date,
	// updatedAt: Date,
}

// Produto
// id
// name
// desc
// price
// unit

// Item
// id
// qty
// Produto
// createdAt
// updateAt

// Estoque
// id
// name
// local
// desc
// Item[]