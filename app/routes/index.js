'use strict';

const router = require('express').Router();
const userHandler = require('../api/userHandler.js');
const exerciseHandler = require('../api/exerciseHandler.js');

router.get('/', (req, res) => {
  res.render('index');
});

// Add a new user
router.post('/api/exercise/new-user', userHandler.addUser);

// Add a new exercise
router.post('/api/exercise/add', exerciseHandler.addExercise);

module.exports = router;
