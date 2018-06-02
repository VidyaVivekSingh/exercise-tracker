'use strict';

require('dotenv').load();
const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const router = require('./app/routes/index.js');
const PORT = process.env.PORT || 8080;

let app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(router);
app.listen(PORT, () => {
  console.log("Server is listening on: " + PORT);
});
