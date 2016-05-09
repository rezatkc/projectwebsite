var express  = require('express'),
	app 	 = express(),
	nunjucks = require('nunjucks'),
	path 	 = require('path'),
	router	 = require('./router');

nunjucks.configure('views', {
	autoescape: true,
	express: app
});

app.set('port', process.env.PORT || 3000);
app.use(router);
app.listen(app.get('port'), function(){
	console.log("Server running on " + app.get('port'));
});