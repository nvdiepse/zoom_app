let con = require('../config/db');

exports.getUsers = async () => {
    con.connect();

    let sql = "SELECT * FROM users";
    const result = await new Promise((resolve, reject) => {
        con.query(sql, (err, res) => {
            if (err) throw reject();
            resolve(res);
        });
    });

    return result;
}
