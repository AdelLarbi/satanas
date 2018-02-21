var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'satanas_db'
});

module.exports = db;