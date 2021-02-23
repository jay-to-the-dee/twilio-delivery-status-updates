const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/index');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

module.exports = app;
