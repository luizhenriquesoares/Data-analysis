const express = require('express');
const router = express.Router();
const eleicoesController = require('../../controllers/APIControllers');

/*
* Primary Routes for Apis EndPoint
* route: api/olinda/
*
* Essa rota fornece dados dos candidatos a prefeito de olinda
* nas eleições do 1 turno de 2016
*/

/*
* Route Api EndPoint
* @method GET
*/
router.get('/lupercio', function(req, res){
    eleicoesController.getDataLupercio(req, res);
});

/*
* Route Api EndPoint
* @method GET
*/
router.get('/luciana', function(req, res){
    eleicoesController.getDataLuciana(req, res);
});

/*
* Route Api EndPoint
* @method GET
*/
router.get('/campos', function(req, res){
    eleicoesController.getDataCampos(req, res);
});

module.exports = router;
