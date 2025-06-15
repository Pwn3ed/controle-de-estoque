import { Types } from "mongoose"


export type IItem = {
	_id?: string,
	nome: string,
	descricao?: string,
	quantidade: number,
	quantidade_minimo?: number,
	preco?: number,
	// _id_estoque: string
}

export type IEstoque = {
	_id?: string,
	nome: string,
	local: string,
	itens?: IItem[],
}

export type IRegistro = {
	_id?: string,
	tipo: "ENTRADA" | "SAIDA"
	estoque: IEstoque,
	itens: IItem[]
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