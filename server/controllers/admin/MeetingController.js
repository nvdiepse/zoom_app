let userModel = require('../../models/User');

exports.index = async (req, res) => {
    let users = await userModel.getUsers();
    console.log(users[0].name); 
    res.render('layouts/admin');
};

exports.findById = (req, res) => {

};
