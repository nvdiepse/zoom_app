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
