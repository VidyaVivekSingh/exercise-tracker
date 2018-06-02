'use strict';

const Users = require('../models/user.js');

async function addUser(req, res) {
  let username = req.body.username;
  // await Users.remove({});
  Users.create({ username: username })
    .then(user => res.redirect('/'))
    .catch(error => res.send("User already exists!"));
  // console.log("all users:", await Users.find());
}

function findUser(username) {
  let query = { username: username };
  return Users.findOne(query);
}

module.exports = { addUser, findUser };
