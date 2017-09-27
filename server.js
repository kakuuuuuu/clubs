var express = require('express');
var app = express();
var morgan = require('morgan');
var passport = require('passport');
var path = require('path');
var bodyParser = require('body-parser');

//

require('./server/config/mongoose.js');

//

app.use(express.static(__dirname + "/client/static"))
app.use(passport.initialize());
app.use(bodyParser.urlencoded()); // get information from html forms
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//

var routes_setter = require('./server/config/routes.js');
routes_setter(app, passport);

//

app.listen(8000,function(){
  console.log('Mean Belt on port 8000')
})
