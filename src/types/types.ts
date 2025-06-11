
export type Item = {
	id: string,
	nome: string,
	quantidade: number,
	quantidade_minimo: number,
}

export type EstoqueForm = {
	id: string,
	nome: string,
	local: string,
	descricao: string,
	itens: Item[],
}

export type Registros = {
	id: string,
	data_adicionado: string,
	item: Item,
}

