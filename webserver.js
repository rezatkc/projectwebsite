// Ini adalah webserver utama yang dipake
// Gausah pake perintah express init!
// Pake nodejs native aja, jadi lebih gampang maintenance
// Usahakan pake branch develop dulu


var http = require('http'),
	port = 1000;

var server = http.createServer(function(req, res){
	res.writeHead(200, {'content-type' : 'text/html'});
	res.write("Pake webserver ini aja");
}).listen(port);

console.log("Server listening on port " +port);