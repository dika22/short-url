var userModel = require('../models/Users');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.addUser = function(req, res) {
    let user = req.body;
    let newUser = {
        'username' : user.username,
        'password' : bcrypt.hashSync(user.password, saltRounds),
        'email'    : user.email 
    }
    let dataUser = new userModel(newUser);
    dataUser.save(function (err,respon) {
      if (err) return handleError(err);
        res.json({ status: 200, value: respon });
    });
};