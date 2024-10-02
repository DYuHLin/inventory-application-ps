const express = require('express');
const logger = require('morgan');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const routes = require('./routes/router');
require('dotenv').config();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(logger('dev'));
app.use(express.urlencoded({ extended:true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);

app.listen(3000, () => console.log('App is listening on 3000'));

module.exports = app;