// Ini adalah webserver utama yang dipake
// Gausah pake perintah express init!
// Pake nodejs native aja, jadi lebih gampang maintenance
// Usahakan pake branch develop dulu


var express = require('express'),
	app = express();

app.get('/', function(req, res){
	res.send("Hello world");
}).listen(1000);

console.log("Server running");