'use strict';

const mongoose = require('mongoose');

module.exports = (req, res) => {
  let username = req.body.username;
  console.log("req.body:", req.body);
  console.log("username:", username);
  res.redirect('/');
};
