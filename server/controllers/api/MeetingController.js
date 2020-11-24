const axios = require('axios');

exports.index = (req, res, next) => {
    try {
        axios.get('http://dev.onlinetreatment.net/api/communication/reservation', {
            headers: {
                "Authorization": "Bearer 39ug3j309t8unvmlmslmlkfw853u8",
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
            }
        })
            .then((res) => {
                console.log(res.data);
            })
    } catch (error) {
        console.log('____________');
    }
};

makeRquestGetMeetings = (req, res) => {

}