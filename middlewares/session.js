const User = require("../models/User");

/*
* middlewares de autenticação
*
*  redireciona usuario se nao tiver autenticado
*/
module.exports = (req, res, next) => {
    if(!req.session.user_id){
        res.redirect("/login");
    }
    else {
        User.findById(req.session.user_id, (err, user) => {
            if(err) res.redirect("/login");
            res.locals = {user: user };
            next();
        });
    }
};
