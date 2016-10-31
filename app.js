/**
 * Module dependencies.
 */
const express = require('express');
const path = require('path');
const session = require("express-session");
const sessionMiddleware = require("./middlewares/session");
// const User = require("./models/User");
const favicon = require('serve-favicon');
const logger = require('morgan');
const errorHandler = require('errorhandler');
const chalk = require('chalk');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const api = {};

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.load({
    path: '.env'
});

/**
 * Create Express server.
 */
const app = express();
/**
 * Connect to MongoDB.
 */
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.connection.on('connected', () => {
    console.log('%s MongoDB connection established!', chalk.green('✓'));
});
mongoose.connection.on('error', () => {
    console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
    process.exit();
});

/*
 * Middlewares
 */
app.use(session({
    secret: 'black dog',
    saveUnitialized: true
}));

// app.use(sessionMiddleware);
/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routes (route define).
 */
// const index = require('./routes/index');
// const user  = require('./routes/api/user');

/**
 * Primary app routes.
 */
 
// rota index
app.get("/", (req, res) => {
    res.render("index");
});

// rota cadastrar usuarios
app.get("/signup", (req, res) => {
    res.render("signup");
});

// rota de login
app.get("/login", (req, res) => {
    res.render("login");
});

/* users cria um usuario*/
app.post("/users", (req, res) => {
    var user = new User({
        email: req.body.email,
        password: req.body.password
    });
    user.save().then(() => {
        res.redirect('/login')
    }, () => {
        res.send("Nao podemos receber!");

    });
});

/* rota de sessions  */
app.post("/sessions", (req, res) => {
    User.findOne({
        email: req.body.email,
        password: req.body.password
    }, function(err, user) {
        req.session.user_id = user._id;
        res.redirect("/#");
    });
});

/*
 * JSON API
 */
api.olinda = require('./routes/api/api');
app.use('/api/olinda', api.olinda);

/**
 * Error Handler.
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
    console.log('%s Express server listening on port %d in %s mode.', chalk.green('✓'), app.get('port'), app.get('env'));
});


module.exports = app;
