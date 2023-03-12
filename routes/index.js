const express = require('express');
const htmlRoute = require('./html');
const apiRoute = require('./api');
const app = express();

app.use('/html', htmlRoute);
app.use('/api', apiRoute);

module.exports = app