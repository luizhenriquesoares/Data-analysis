var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a schema
var olindaSecaoSchema = new Schema({});

module.exports = mongoose.model('olinda_1_turno_secao', olindaSecaoSchema, 'olinda_1_turno_secao');
