'use strict';

const Users = require('../models/user.js');

module.exports = async (req, res) => {
  let username = req.body.username;
  // await Users.remove({});
  Users.create({ username: username })
    .then(user => res.redirect('/'))
    .catch(error => res.send("User already exists!"));
  // console.log("all users:", await Users.find());
};
