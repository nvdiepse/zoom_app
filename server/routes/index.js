var express = require('express');
var router = express.Router();
var siteController = require('../controllers/client/SiteController');

/* GET home page. */
router.get('/', siteController.index);
module.exports = router;
