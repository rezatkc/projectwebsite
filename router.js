var express = require('express'),
	bodyParser = require('body-parser'),
	handler = require('./handler'),
	multer = require('multer'),
	router	= express.Router();
	
var storage = multer.diskStorage({
	destination: function(req, file, callback){
		callback(null, './uploads');
	},
	filename: function(req, file, callback){
		callback(null, file.originalName)
	}
});

router.get('/', handler.indexPage);
router.get('/register/:type', handler.registerPage);

// r.post('/upload', multer({
// 	storage: storage
// }))
module.exports = router;