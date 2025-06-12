import mongoose from 'mongoose'

const itemEstoqueSchema = new mongoose.Schema({
  id: String,
  nome: String,
	descricao: String,
  quantidade: Number,
  quantidade_minimo: Number
});

const estoqueSchema = new mongoose.Schema({
    id: String,
    nome: String,
    local: String,
    descricao: String,
    itens: [itemEstoqueSchema]
});

const registroSchema = new mongoose.Schema({
	id: String,
	data_adicionado: String,
	estoque: estoqueSchema
});


const Registro = mongoose.models.Registro || mongoose.model('Registro', registroSchema);

export default Registro;
