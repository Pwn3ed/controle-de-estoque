import { Types } from "mongoose"

export type IItemEstoque = {
	_id?: Types.ObjectId,
	nome: string,
	descricao?: string,
	quantidade: number,
	quantidade_minimo: number,
	preco?: number,
	unidade?: number,
}
	
export type IEstoque = {
	_id?: Types.ObjectId,
	nome: string,
	local: string,
	descricao?: string,
	itens: IItemEstoque[],
}

export type IRegistro = {
	estoque: IEstoque,
	// createdAt: Date,
	// updatedAt: Date,
}

