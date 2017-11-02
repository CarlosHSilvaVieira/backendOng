const express = require('express');
var app = express();

const body_parser = require('body-parser');
app.use(body_parser.json());

var port = process.env.PORT || 3000;
app.listen(port);

const animaisRoutes = require('./api/routes/animaisRoutes');
animaisRoutes(app);

console.log("Api na porta "+ port);
