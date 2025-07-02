import { IEstoque, IItem } from "@/types/types";
import { model, models, Schema } from "mongoose";

const itemSchema = new Schema<IItem>({
  nome: { type: String, required: true },
	descricao: String,
  quantidade: { type: Number, required: true, min: 0 },
  quantidade_minimo: Number,
  preco: Number,
  _idEstoque: String
}, { _id: true });

const estoqueSchema = new Schema<IEstoque>({
  local: { type: String, required: true },
}, { _id: true });

export const Item = models?.Item || model<IItem>('Item', itemSchema)

export const Estoque = models?.Estoque || model<IEstoque>('Estoque', estoqueSchema);
