let con = require('../config/db');

exports.createMeetingReservation = async (data) => {
    con.connect();
    let sql = "INSERT INTO meeting_reservation (topic, password, plan_start_date, plan_start_time) VALUES ?";
    await new Promise((resolve) => {
        con.query(sql, data, (err, res) => {
            resolve(res);
        });
    });
}

exports.getMeetings = async() => {
    con.connect();
    let sql = "SELECT * FROM meeting_reservation ORDER BY id DESC LIMIT 10 OFFSET 10;";
    let data = await new Promise((resolve, reject) => {
        con.query(sql, (err,res) => {
            if (res) {
                console.log(res);
                resolve(res.rows);
            } else {
                console.log('_____________');
                console.log('ERROR');
            }
        });
    })
    return data;
}

exports.getDetailMeetingByMeetingId = async(meetingId) => {
    con.connect();
    let sql = "SELECT * FROM meeting_reservation WHERE meeting_id = '87604934913'";
    let data = await new Promise((resolve, reject) => {
        con.query(sql, (err,res) => {
            if (res) {
                resolve(res.rows);
            } else {
                console.log('_____________');
                console.log(err);
                console.log('_____________');
            }
        });
    })
    return data;
}