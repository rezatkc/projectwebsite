var express = require('express'),
	bodyParser = require('body-parser'),
	router	= express.Router();
	
router.get('/', function(req, res){
	res.render('index.html');
});
router.get('/signup', function(req, res){
	res.render('signup.html');
	console.log(req.body.nama);
});
router.post('/signup', function(req, res){
	res.render("result.html", {nama: req.body.nama});
});
router.get('/signin', function(req, res){
	
});

module.exports = router;