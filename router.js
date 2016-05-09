var express = require('express'),
	router	= express.Router();
	
router.get('/', function(req, res){
	res.send("Index");
});
router.get('/signup', function(req, res){
	res.send("Signup");
});

module.exports = router;