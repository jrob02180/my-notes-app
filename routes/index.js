const express = require('express');

// Imports routers
const htmlRoute = require('./html');
const apiRoute = require('./api');
const app = express();

app.use('/', htmlRoute);
app.use('/api', apiRoute);

module.exports = app