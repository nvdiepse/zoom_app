var express = require('express');
var router = express.Router();
var meetingController = require('../controllers/admin/MeetingController');

router.get('/meeting', meetingController.index);

module.exports = router;
