let express = require('express');
let router = express.Router();
let meetingController = require('../controllers/api/v1/MeetingController');

router.get('/v1/meeting', meetingController.getMeetings);
router.get('/v1/meeting/:meetingId', meetingController.getDetailMeetingByMeetingId);
router.get('/v1/token/refresh-token', meetingController.refreshToken);

module.exports = router;


