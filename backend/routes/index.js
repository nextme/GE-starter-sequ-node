var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Geteat api v.1.0.0' });
});

/* GET home page. */
router.get('/users', function(req, res, next) {
  res.render('index', { title: ' 0' });
});
module.exports = router;
