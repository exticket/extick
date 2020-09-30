var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const db = require('./db/index');
db.on('error',console.error.bind(console,'mongo connection error'))

var usersRouter = require('./routes/users');
var categoriesRouter = require('./routes/category-router');
var sellersRouter = require('./routes/seller-router');
var ticketsRouter = require('./routes/ticket-router');
var loginRouter = require('./routes/login-router');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
      if (req.headers['x-forwarded-proto'] !== 'https')
          // the statement for performing our redirection
          return res.redirect('https://' + req.headers.host + req.url);
      else
          return next();
  } else
      return next();
});

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Added to serve client static files
app.use(express.static(path.resolve(__dirname, 'client/build')));


app.use('/users', usersRouter); 
app.use('/category', categoriesRouter);  
app.use('/seller', sellersRouter);
app.use('/ticket', ticketsRouter);
app.use('/login', loginRouter);



app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/client/build/index.html'));
})


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
