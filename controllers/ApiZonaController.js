const Api = require('../models/UrnaZona');

/*
 * Retorna todos dados de Professor Lupércio
 *
 *
 * @return JSON DATA
 */
exports.getDataLupercio = (req, res) => {
    let query = {
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
 *
 *
 * @return JSON DATA
 */
exports.getDataLuciana = (req, res) => {
    let query = {
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
 *
 *
 * @return JSON DATA
 */
exports.getDataCampos = (req, res) => {
    let query = {
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

exports.getIsabel = (req, res) => {
    let query = {
        NOME_MUNICIPIO: 'OLINDA',
        DESCRICAO_CARGO: 'PREFEITO',
        NOME_URNA_CANDIDATO: 'IZABEL URQUIZA'
    };
    Api.find(query, function(err, data) {
        if (err) throw err;
        console.log(err);
        res.json(data);
    });
};


exports.getTeresa = (req, res) => {
    let query = {
        NOME_MUNICIPIO: 'OLINDA',
        DESCRICAO_CARGO: 'PREFEITO',
        NOME_URNA_CANDIDATO: 'TERESA LEITÃO'
    };
    Api.find(query, function(err, data) {
        if (err) throw err;
        console.log(err);
        res.json(data);
    });
};

/*
 * Retorna todos as Secões de determinada zona
 *
 *
 * @return JSON DATA
 */
exports.getSecao = (req, res) => {
    let promise = Api.distinct('NUMERO_SECAO', {
        NUMERO_ZONA: parseInt(req.params.zona),
        NOME_MUNICIPIO: 'OLINDA'
    });
    promise.then(function(data) {
        res.json(data);
    });
};
