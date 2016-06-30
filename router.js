var express = require('express'),
	bodyParser = require('body-parser'),
	router	= express.Router();
	
router.get('/', function(req, res){
	res.render('index');
});
router.get('/register/:type', function(req, res){
	var type = req.params.type;
	if(type === "dokter") {
		res.render("register", {url: "/register/dokter"});
	}
	else{
		res.render("register", {url: "/register/pasien"});
	}
});

module.exports = router;