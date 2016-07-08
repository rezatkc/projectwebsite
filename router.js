var express = require('express'),
	router	= express.Router(),
	auth = require('./auth'),
	handler = require('./handler');

router.get('/', handler.indexPage);
router.get('/register', handler.registerPage);
router.post('/register', handler.postRegisterPage);

router.get('/login', handler.loginPage);
router.post('/login', handler.loginPost);
router.get('/logout', handler.logout);

router.get('/show/:id', handler.show);

router.get('/cari', auth,  handler.searchPage);
router.get('/api', handler.api);

module.exports = router;