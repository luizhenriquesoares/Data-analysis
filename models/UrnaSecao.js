const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema
const olindaSecaoSchema = new Schema({});

module.exports = mongoose.model('olinda_1_turno_secao', olindaSecaoSchema, 'olinda_1_turno_secao');
