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

Router.get('/zona/izabel', ApiZonaController.getIsabel);

Router.get('/zona/teresa', ApiZonaController.getTeresa);

Router.get('/:zona/:secao', ApiSecaoController.searchData);

Router.get('/:zona', ApiZonaController.getSecao);

/*FILTRO BUSCAR SECAO POR INTERVALO*/

Router.get('/zona/:secaoInicial/:secaoFinal/:zona', ApiSecaoController.searchIntervalSession);

module.exports = Router;
