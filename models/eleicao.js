var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a schema
var eleicaoSchema = new Schema({
    DATA_GERACAO: {
        type: Date,
        required: true
    },
    HORA_GERACAO: {
        type: String,
        required: true
    },
    ANO_ELEICAO: {
        type: String,
        required: true
    },
    NUM_TURNO: {
        type: String,
        required: true
    },
    DESCRICAO_ELEICAO: {
        type: String,
        required: true
    },
    SIGLA_UF: {
        type: String,
        required: true
    },
    SIGLA_UE: {
        type: String,
        required: true
    },
    CODIGO_MUNICIPIO: {
        type: String,
        required: true
    },
    NOME_MUNICIPIO: {
        type: String,
        required: true
    },
    NUMERO_ZONA: {
        type: String,
        required: true
    },
    CODIGO_CARGO: {
        type: Number,
        required: true
    },
    NUMERO_CAND: {
        type: String,
        required: true
    },
    SQ_CANDIDATO: {
        type: String,
        required: true
    },
    NOME_CANDIDATO: {
        type: String,
        required: true
    },
    NOME_URNA_CANDIDATO: {
        type: String,
        required: true
    },
    DESCRICAO_CARGO: {
        type: String,
        required: true
    },
    COD_SIT_CAND_SUPERIOR: {
        type: String,
        required: true
    },
    DESC_SIT_CAND_SUPERIOR: {
        type: String,
        required: true
    },
    CODIGO_SIT_CANDIDATO: {
        type: String,
        required: true
    },
    DESC_SIT_CANDIDATO: {
        type: String,
        required: true
    },
    CODIGO_SIT_CAND_TOT: {
        type: String,
        required: true
    },
    DESC_SIT_CAND_TOT: {
        type: String,
        required: true
    },
    NUMERO_PARTIDO: {
        type: Number,
        required: true
    },
    SIGLA_PARTIDO: {
        type: String,
        required: true
    },
    NOME_PARTIDO: {
        type: String,
        required: true
    },
    SEQUENCIAL_LEGENDA: {
        type: String,
        required: true
    },
    NOME_COLIGACAO: {
        type: String,
        required: true
    },
    COMPOSICAO_LEGENDA: {
        type: String,
        required: true
    },
    TOTAL_VOTOS: {
        type: Number,
        required: true
    },
    TRANSITO: {
        type: String,
        required: true
    }
  });

module.exports = mongoose.model('olinda_2_turno', eleicaoSchema, 'olinda_2_turno');
