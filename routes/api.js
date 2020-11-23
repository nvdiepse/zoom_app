var express = require('express');
var router = express.Router();
let meetingController = require('../controllers/api/MeetingController');
let meetingValidate = require('../validator/meetingRequest');
/* GET users listing. */
router.get('/meeting', meetingController.index);

module.exports = router;
