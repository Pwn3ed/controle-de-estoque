import { Types } from "mongoose"


export type IItem = {
	_id?: string,
	nome: string,
	descricao?: string,
	quantidade: number,
	quantidade_minimo?: number,
	preco?: number,
	_idEstoque: string,
}

export type IEstoque = {
	_id?: string,
	local: string,
}

export type IRegistro = {
	_id?: string,
	tipo: "ENTRADA" | "SAIDA"
	_idEstoque: string,
	_idItens: string[]
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