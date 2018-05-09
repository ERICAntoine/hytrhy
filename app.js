// const createError = require('http-errors');
const express = require('express');
const path = require('path');

const logger = require('morgan');
const formidable = require('express-formidable');

const mangaRouter = require('./routes/manga');

const app = express();

app.use(logger('dev'));
app.use(formidable());

app.use('/manga', mangaRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.send('error');
// });

module.exports = app;
