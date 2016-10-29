const Api = require('../models/UrnaZona');

/*
* Retorna todos dados de Professor Lupércio
* @return JSON DATA
*/
exports.getDataLupercio = (req, res) => {
    var query = {
        NOME_MUNICIPIO: 'OLINDA',
        DESCRICAO_CARGO: 'PREFEITO',
        NOME_URNA_CANDIDATO: 'PROFESSOR LUPERCIO'
    };
    Api.find(query, function(err, data) {
        if (err) throw err;
        console.log(err);
        res.json(data);
    });
};

/*
* Retorna todos dados de Luciana Santos
* @return JSON DATA
*/
exports.getDataLuciana = (req, res) => {
    var query = {
        NOME_MUNICIPIO: 'OLINDA',
        DESCRICAO_CARGO: 'PREFEITO',
        NOME_URNA_CANDIDATO: 'LUCIANA SANTOS'
    };
    Api.find(query, function(err, data) {
        if (err) throw err;
        console.log(err);
        res.json(data);
    });
};

/*
* Retorna todos dados de Antônio Campos
* @return JSON DATA
*/
exports.getDataCampos = (req, res) => {
    var query = {
        NOME_MUNICIPIO: 'OLINDA',
        DESCRICAO_CARGO: 'PREFEITO',
        NOME_URNA_CANDIDATO: 'ANTÔNIO CAMPOS'
    };
    Api.find(query, function(err, data) {
        if (err) throw err;
        console.log(err);
        res.json(data);
    });
};
