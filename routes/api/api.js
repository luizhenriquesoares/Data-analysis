const express = require('express');
const router = express.Router();
const eleicoesController = require('../../controllers/APIControllers');

/* Get All */
router.get('/', function(req, res){
    eleicoesController.find(req, res);
});

module.exports = router;
