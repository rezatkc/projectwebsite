var express = require('express'),
	router	= express.Router();
	
router.get('/', function(req, res){
	res.render('index.html');
});
router.get('/signup', function(req, res){
	res.render('signup.html');
});
router.post('/signup', function(req, res){
	var data = {
		nama: req.body.nama,
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
		gender: req.body.gender
	}
	
	console.log(data);
		
});
router.get('/signin', function(req, res){
	
});

module.exports = router;