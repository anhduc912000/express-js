var express = require('express');
var router = express.Router();
var multer  = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now())
  }
})
 
//checking image file
function fileFilter (req, file, cb) {
  if(!file.originalname.match(/\.(jpg|png|gif|jpeg)$/)){
  cb(new Error('Only upload image file'));
  }
  else{
    cb(null, true);
  }
}
var upload = multer({ storage: storage, fileFilter: fileFilter });


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* sending infor from form by post method  home page. */
router.post('/', upload.single('file'), function(req, res, next) {
  var title = req.body.name;
  res.send('helo' +title );
});


module.exports = router;
