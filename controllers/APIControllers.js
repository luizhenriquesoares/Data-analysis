const Api = require('../models/eleicao');

// retorna todos
exports.find = (req, res) => {
    var query = {
        NOME_MUNICIPIO: 'OLINDA',
        DESCRICAO_CARGO: 'PREFEITO',
        NUMERO_PARTIDO: '77'
    };
    Api.find(query, function(err, data) {
        if (err) throw err;
        console.log(err);
        res.json(data);
    });
};
