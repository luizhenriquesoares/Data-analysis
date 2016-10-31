const User = require('../models/User');

/*
* Rota user, cria um usuário
*/
exports.store = (req, res) => {
  let user = new User({
         email: req.body.email,
         password: req.body.password,
     });
     user.save().then(() => {
         res.redirect('/login')
     }, () => {
         res.send("Nao podemos receber!");
     });
};

/*
* Rota session
*/
exports.session = (req, res) => {
  User.findOne({
      email: req.body.email,
      password: req.body.password
  }, function(err, user) {
      req.session.user_id = user._id;
      res.redirect("/#");
  });
};
