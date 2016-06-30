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
	res.render('register', {url: '/register/dokter'})
}

var postRegisterPage = function(req, res){
	var data = {
		username: req.body.username,
		nama: req.body.nama,
		email: req.body.email,
		password: req.body.password,
		alamat: req.body.alamat
	}	
	knex("dokter").insert(data).then(function(data){
		res.redirect('/');
		console.log("Berhasil");
	})
}

var handler = {
	indexPage: indexPage,
	registerPage:registerPage,
	postRegisterPage: postRegisterPage
}

module.exports = handler;