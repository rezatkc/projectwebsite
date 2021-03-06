//var bcrypt = require('bcrypt-nodejs');
var knex = require('./db');
//var salt = bcrypt.genSaltSync(10);

var indexPage = function(req, res){
	if(req.session.username){
		res.render('index', {login: true, nama: req.session.username});
	}
	else{
		res.render('index', {login: false});
	}
}

var api = function(req, res){
	knex.select('lat', 'lng').from("dokter").then(function(data){
		res.send(data);
	})
}

var registerPage = function(req, res){
	res.render('register')
}

var postRegisterPage = function(req, res){
	var data = {
		username: req.body.username,
		nama: req.body.nama,
		email: req.body.email,
		password: req.body.password,
		alamat: req.body.alamat,
		lat: req.body.placeLat,
		lng: req.body.placeLng,
		layanan: req.body.layanan,
		foto: req.file.originalname
	}
	knex("dokter").insert(data).then(function(data){
		res.redirect('/');
		console.log("Berhasil");
	})
}

var loginPage = function(req, res){
	res.render('login');
}

var loginPost = function(req, res){
	var data = {
		username: req.body.username,
		password: req.body.password,
	}

	knex.select().from("dokter").where('email', data.username).then(function(x){
		var jumlah = Object.keys(x).length || 0;
		if(jumlah){
			req.session.username = data.username;
			req.session.nama = x.username;
			res.redirect('/');
		}
		else{
			res.sendStatus(401);
		}
	})
	// req.session.username = data.username;
	// req.session.password = data.password;

}

var logout = function(req, res){
	req.session.destroy();
	res.redirect('/');
}
var searchPage = function(req, res){
	if(req.session.username){
		knex.select().from("dokter").then(function(data){
			res.render('cari', {data: data, nama: req.session.username});
		})
	}
}

var apiGet = function(req, res){
	res.render('get');
}

var show = function(req, res){
	if(req.session.username){
		var id = req.params.id;
		knex.select().from("dokter").where('id', id).then(function(data){
			res.render('modal', {data: data, nama: req.session.username});
		})
	}
}

var admin = function(req, res){
	if(req.session.admin){
		knex.select().from("dokter").then(function(data){
			res.render('admin/tables_dynamic', {data: data});
		})
	}
	else {
		res.redirect('/admin/login');
	}
	
}

var adminDeleteData = function(req, res){
	var id = req.params.id;
	knex('dokter').where('id', id).del().then(function(data){
		res.redirect('/admin');
	})
}

var testing = function(req, res){
	res.render('testing');
}

var adminLogin = function(req, res){
	res.render('login_admin');
}

var adminLoginPost = function(req, res){
	var data = {
		username: req.body.username,
		password: req.body.password
	}
	req.session.admin = data.username;
	req.session.password = data.password;
	res.redirect('/admin');
}

var adminLogout = function(req, res){
	req.session.destroy();
	res.redirect('/admin/login');
}

var handler = {
	testing: testing,
	indexPage: indexPage,
	registerPage: registerPage,
	postRegisterPage: postRegisterPage,
	loginPage: loginPage,
	loginPost: loginPost,
	searchPage: searchPage,
	api: api,
	apiGet: apiGet,
	logout: logout,
	show: show,
	admin: admin,
	adminLogin: adminLogin,
	adminLoginPost: adminLoginPost,
	adminLogout: adminLogout,
	adminDeleteData: adminDeleteData
}

module.exports = handler;