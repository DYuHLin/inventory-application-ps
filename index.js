const express = require('express');
const logger = require('morgan');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
require('dotenv').config();

app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(logger('dev'));
app.use(express.urlencoded({ extended:true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('App is listening on 3000'));

module.exports = app;