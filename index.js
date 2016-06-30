var express  = require('express'),
	app 	 = express(),
	nunjucks = require('nunjucks'),
	path 	 = require('path'),
	bodyParser = require('body-parser'),
	router	 = require('./router'),
	cookieParser = require('cookie-parser');
	
nunjucks.configure('views', {
	autoescape: true,
	express: app
});

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(router);
app.listen(app.get('port'), function(){
	console.log("Server running on " + app.get('port'));
});