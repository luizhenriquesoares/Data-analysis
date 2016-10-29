const express = require('express');
const ApiZonaController = require('../../controllers/ApiZonaController');
const ApiSecaoController = require('../../controllers/ApiSecaoController');
const Router = express.Router();

/*
 * Primary Routes for Apis EndPoint
 * route: api/olinda/
 *
 * Essa rota fornece dados dos candidatos a prefeito de olinda
 * nas eleições do 1 turno de 2016
 */

 Router.get('/', function(req,res){
   res.send('olá');
 });
/*
 * Route Api EndPoint
 * @method GET
 */
Router.get('/zona/lupercio', ApiZonaController.getDataLupercio);

/*
 * Route Api EndPoint
 * @method GET
 */
Router.get('/zona/luciana', ApiZonaController.getDataLuciana);

/*
 * Route Api EndPoint
 * @method GET
 */
Router.get('/zona/campos', ApiZonaController.getDataCampos);


Router.get('/:zona/:secao', ApiSecaoController.searchData);


module.exports = Router;
