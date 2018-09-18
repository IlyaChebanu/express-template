const mysql = require('mysql');

module.exports = mysql.createPool({
    connectionLimit: 50,
    host: 'localhost',
    user: 'root',
    password: 'rootuserpassword',
    database: 'testDB'
});