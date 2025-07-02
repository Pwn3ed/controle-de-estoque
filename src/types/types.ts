import { Types } from "mongoose"


export type IItem = {
	_id?: string,
	nome: string,
	descricao?: string,
	quantidade: number,
	quantidade_minimo: number,
	preco?: number,
	_idEstoque: string,
}

export type IEstoque = {
	_id?: string,
	local: string,
}
