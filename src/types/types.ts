
export type ItemEstoque = {
	id: string,
	nome: string,
	descricao?: string,
	quantidade: number,
	quantidade_minimo: number,
}
	
export type Estoque = {
	id: string,
	nome: string,
	local: string,
	descricao: string,
	itens: ItemEstoque[],
}

export type Registros = {
	id: string,
	data_adicionado: string,
	estoque: Estoque
}

