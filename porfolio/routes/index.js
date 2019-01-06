var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.get('/detail/*.:idProduct', function(req, res, next) {
  res.render('detail', {idProduct:req.params.idProduct});
});

module.exports = router;
