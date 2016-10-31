const express = require('express');
const Router = express.Router();


/**
 * Controllers (route handlers).
 */
const HomeController = require('./../controllers/HomeController');

/**
 * Define Routes.
 */
Router.get('/', HomeController.index);
// rota de login
Router.get('/login',  HomeController.login);
// rota cadastrar usuarios
Router.get("/signup", HomeController.signup);

module.exports = Router;
