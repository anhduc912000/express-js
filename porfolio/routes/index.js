var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home detail. */
router.get('/*.:idProduct', function(req, res, next) {
  var idWatched = req.params.idProduct;
  if(!req.session.productWatched){
    req.session.productWatched = [];
  }
  if(req.session.productWatched.indexOf(idWatched) == -1){
    req.session.productWatched.push(idWatched);
  }
  res.render('detail', {idProduct:req.params.idProduct});
});

/* GET home list. */
router.get('/list', function(req, res, next) {
  res.render('list', {list:req.session.productWatched});
});

module.exports = router;
