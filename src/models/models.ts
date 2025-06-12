import { IEstoque, IItemEstoque, IRegistro } from "@/types/types";
import { model, models, Schema } from "mongoose";

const itemEstoqueSchema = new Schema<IItemEstoque>({
  nome: { type: String, required: true },
	descricao: String,
  quantidade: { type: Number, required: true, min: 0 },
  quantidade_minimo: { type: Number, required: true, min: 0 },
  preco: Number,
  unidade: String,
}, { _id: true });

const estoqueSchema = new Schema<IEstoque>({
    nome: { type: String, required: true },
    local: { type: String, required: true },
    descricao: String,
    itens: [itemEstoqueSchema]
}, { _id: true });

const registroSchema = new Schema<IRegistro>({
	estoque: { type: estoqueSchema, required: true },
}, { timestamps: true });

export const Registro = models.Registro<IRegistro> || model<IRegistro>('Registro', registroSchema);
