var express = require('express'),
	router	= express.Router(),
	auth = require('./auth'),
	auth_admin = require('./auth_admin'),
	multer = require('multer'),
	handler = require('./handler');

var storage =   multer.diskStorage({
	destination: function (req, file, callback) {
				callback(null, './public/images/uploads');
	},
	filename: function (req, file, callback) {
				// callback(null, file.fieldname + '-' + Date.now());
				callback(null, file.originalname);
	}
});

router.get('/', handler.indexPage);
router.get('/register', handler.registerPage);
router.post('/register', multer({
	storage: storage
}).single('foto'), handler.postRegisterPage);

router.get('/login', handler.loginPage);
router.post('/login', handler.loginPost);
router.get('/logout', handler.logout);

router.get('/admin/login', handler.adminLogin);
router.post('/admin/login', handler.adminLoginPost);
router.get('/admin/logout', handler.adminLogout);
router.get('/admin', handler.admin);
router.get('/admin/del/:id', handler.adminDeleteData);


router.get('/show/:id', auth, handler.show);
router.get('/cari', auth, handler.searchPage);
router.get('/api', handler.api);

router.get('/admin', auth_admin, handler.admin);

router.get('/testing', handler.testing);
module.exports = router;