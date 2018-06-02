'use strict';

const router = require('express').Router();
const addUser = require('../api/addUser.js');
const addExercise = require('../api/addExercise.js');

router.get('/', (req, res) => {
  res.render('index');
});

// Add a new user
router.post('/api/exercise/new-user', addUser);

// Add a new exercise
router.post('/api/exercise/add', addExercise);

module.exports = router;
