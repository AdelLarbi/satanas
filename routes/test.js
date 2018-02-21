var express = require('express');
var router = express.Router();

/* GET another page */
router.get('/', function(req, res, next) {
    res.render('test', { title: 'SEGULA' });
});

module.exports = router;

/* Connect to data base and fetch data */
var db = require('../database/config');
db.connect(function(err) {
    if (!err) {
        console.log('Connected to the database.');
        showPersons();

    } else {
        throw err;
    }
});

/**
 *  --------------
 *  | Persons    |
 *  --------------
 *  | id         |
 *  | firstName  |
 *  | secondName |
 *  --------------
 */
var showPersons = function () {
    var request = 'SELECT * FROM Persons;';
    db.query(request)
        .on('result', function (result) {
            console.log(result);
            console.log('id : ' + result.id);
            console.log('firstName : ' + result.firstName);
            console.log('secondName : ' + result.secondName);
        })
        .on('error', function (err) {
            console.log('error : ' + err);
        });
};