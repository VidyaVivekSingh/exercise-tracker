'use strict';

const Exercises = require('../models/exercise.js');

module.exports = (req, res) => {
  console.log("addExercise req.body:", req.body);
  res.redirect('/');
};
