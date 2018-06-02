'use strict';

const findUser = require('./userHandler.js').findUser;
const Exercises = require('../models/exercise.js');

async function addExercise(req, res) {
  let user = await findUser(req.body.username);
  if(user === null)
    res.send("User not found!");
  else {
    let exercise = {
      user: user._id,
      description: req.body.description,
      duration: req.body.duration,
      // date: new Date(req.body.date)
    };
    // TODO: validate duration and date
    console.log('exercise:', exercise);
    console.log("user:", user._id);
    res.redirect('/');
  }
}

module.exports = { addExercise };
