var express = require('express');
const controller = require('../auth/auth.controller');
var router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');    
    next();
  });

router.post('/login', function (req, res) {
    return controller.authenticate(req, res)
});
router.post('/isAuthenticated', function (req, res) {
    return controller.isAuthenticated(req, res)
});
router.post('/register', function (req, res) {
    return controller.registerfunction(req, res)
});

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
