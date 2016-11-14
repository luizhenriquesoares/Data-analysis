const Api = require('../models/UrnaSecao');

exports.searchData = (req, res) => {
    let query = {
        NOME_MUNICIPIO: 'OLINDA',
        DESCRICAO_CARGO: 'Prefeito',
        NUMERO_ZONA: parseInt(req.params.zona),
        NUMERO_SECAO: parseInt(req.params.secao)
    };
    let promise = Api.find(query);
    promise.then(function(data) {
        res.json(data);
    });

};

exports.searchIntervalSession = (req, res) => {
    let promise = Api.find({
        NUMERO_SECAO: {
            $gte: parseInt(req.params.secaoInicial),
            $lte: parseInt(req.params.secaoFinal)
        },
        NUMERO_ZONA: parseInt(req.params.zona)
    });
    promise.then(function(data) {
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
     var promise = Api.distinct('NUMERO_SECAO', {
         NUMERO_ZONA: parseInt(req.params.zona),
         NOME_MUNICIPIO: 'OLINDA'
     });
     promise.then(function(data) {
         res.json(data);
     });
 };
