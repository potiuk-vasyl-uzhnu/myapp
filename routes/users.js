var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/bac', function(req, res, next) {
  res.send('respond with a resource 2');
});

/* Новий маршрут для сторінки cool-users */
router.get('/cool', function(req, res, next) {
  res.render('cool-users', { users: ['Alice', 'Bob', 'Stepan'] });
});

module.exports = router;
