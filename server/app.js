var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const mongoose = require('mongoose');
const MY_KEY = require("./mongodb.js");
mongoose
.connect(MY_KEY)
.then(() => console.log("Databáze připojena ✅😊"))
.catch((err) => console.log(err));

var indexRouter = require('./routes/index');
var urnsRouter = require('./routes/urns');
var formRouter = require('./routes/form');
var blogRouter = require("./routes/blog")
var poptavkaRouter = require("./routes/poptavka")

var app = express();

// nastavení view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/urns', urnsRouter);
app.use('/form', formRouter);
app.use('/blog', blogRouter);
app.use('/poptavka', poptavkaRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
