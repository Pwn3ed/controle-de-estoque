import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
  id: String,
  nome: String,
  quantidade: Number,
  quantidade_minimo: Number
});

const estoqueSchema = new mongoose.Schema({
    id: String,
    nome: String,
    local: String,
    descricao: String,
    itens: [itemSchema]
});

// const Estoque = mongoose.models.Estoque;
const Estoque = mongoose.models.Estoque || mongoose.model('Estoque', estoqueSchema);

export default Estoque;
