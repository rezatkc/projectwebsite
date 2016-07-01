//var bcrypt = require('bcrypt-nodejs');
var knex = require('./db');
//var salt = bcrypt.genSaltSync(10);

var indexPage = function(req, res){
	// knex.select().from("data").then(function(data){
	// 	res.render();
	// })
	res.render("index");
}

var registerPage = function(req, res){
	res.render('register', {url: '/register/dokters'})
}

var handler = {
	indexPage: indexPage,
	registerPage:registerPage
}

module.exports = handler;