'use strict';

const mongoose = require('mongoose');

module.exports = (req, res) => {
  console.log("addExercise req.body:", req.body);
  res.redirect('/');
};
