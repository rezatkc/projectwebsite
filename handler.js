//var bcrypt = require('bcrypt-nodejs');
var knex = require('./db');
//var salt = bcrypt.genSaltSync(10);

var indexPage = function(req, res){
	// knex.select().from("data").then(function(data){
	// 	res.render();
	// })
	res.render("index");
}

var api = function(req, res){
	knex.select('lat', 'lng').from("dokter").then(function(data){
		res.send(data);
	})
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
		alamat: req.body.alamat,
		lat: req.body.placeLat,
		lng: req.body.placeLng
	}	
	knex("dokter").insert(data).then(function(data){
		res.redirect('/');
		console.log("Berhasil");
	})
}

var loginPage = function(req, res){
	res.render('login');
}

var daftarPage = function(req, res){
	res.render('daftarpasien');
}

var searchPage = function(req, res){
	knex.select().from("dokter").then(function(data){
		res.render('cari', {data: data});
	})
}

var apiGet = function(req, res){
	res.render('get');
}

var handler = {
	indexPage: indexPage,
	registerPage: registerPage,
	postRegisterPage: postRegisterPage,
	daftarPage: daftarPage,
	loginPage: loginPage,
	searchPage: searchPage,
	api: api,
	apiGet: apiGet
}

module.exports = handler;