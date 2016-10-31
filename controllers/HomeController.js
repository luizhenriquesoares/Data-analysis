exports.index = (req, res) => {
    res.send('Hello word!');
};

exports.login = (req, res) => {
    res.json('ola login');
    // res.render('login');
};

exports.signup = (req, res) => {
    res.render('signup');
};
