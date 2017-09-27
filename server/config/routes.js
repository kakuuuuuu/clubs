var Users = require('../controllers/Users.js');
require('./passport.js');
module.exports = function(app){
  app.get('/', function(req,res){
    res.render('index.html')
  })
  app.post('/api/signup', function(req, res) {
    Users.signup(req, res);
  });
  app.post('/api/login', function(req, res) {
    Users.login(req,res);
  });
}
