
export type EstoqueItem = {
	id: string;
	nome: string;
	quantidade: number;
	quantidade_minimo: number;
}

export type EstoqueForm = {
	nome: string;
	local: string;
	descricao: string;
	data: string;
	itens: EstoqueItem[];
}
