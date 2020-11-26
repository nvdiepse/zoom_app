let con = require('../config/db');

exports.getUsers = async () => {
    con.connect();
    let sql = "SELECT * FROM users";
    const result = await new Promise((resolve) => {
        con.query(sql, (err, res) => {
            resolve(res);
        });
    });

    return result;
}
