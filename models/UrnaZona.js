const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema
const olindaZonaSchema = new Schema({});

module.exports = mongoose.model('olinda_1_turno_zona', olindaZonaSchema, 'olinda_1_turno_zona');
