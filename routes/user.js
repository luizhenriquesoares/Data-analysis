const express = require('express');
const Router = express.Router();


/**
 * Controllers (route handlers).
 */
const UsersController = require('../controllers/UsersController');

// rota store users
Router.post('/', UsersController.store);


module.exports = Router;
