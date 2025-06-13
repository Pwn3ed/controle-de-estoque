import { IEstoque, IItemEstoque, IRegistro } from "@/types/types";
import { model, models, Schema } from "mongoose";

const itemEstoqueSchema = new Schema<IItemEstoque>({
  _id: String,
  nome: { type: String, required: true },
	descricao: String,
  quantidade: { type: Number, required: true, min: 0 },
  quantidade_minimo: { type: Number, required: true, min: 0 },
  preco: Number,
  unidade: String,
});

const estoqueSchema = new Schema<IEstoque>({
  _id: String,
  nome: { type: String, required: true },
  local: { type: String, required: true },
  descricao: String,
  itens: [itemEstoqueSchema]
});

const registroSchema = new Schema<IRegistro>({
  _id: String,
	estoque: { type: estoqueSchema, required: true },
}, { timestamps: true });

// export const ItemEstoque = models.ItemEstoque<IItemEstoque> || model<IItemEstoque>('Item', itemEstoqueSchema)

export const Estoque = models.Estoque<IEstoque> || model<IEstoque>('Estoque', estoqueSchema);

export const Registro = models.Registro<IRegistro> || model<IRegistro>('Registro', registroSchema);
