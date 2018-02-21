var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Satanas !' });
});

module.exports = router;

// Run python script within node.js --------------------------------------------
var PythonShell = require('python-shell');
var py = new PythonShell('python/my_script.py');

/* received a message sent from the Python script (a simple "print" statement) */
py.on('message', function (message) {
    if (message === 'OK') {
        console.log('Success !');

    } else {
        console.log('Fail !');
    }
});

/* handle errors */
py.on('error', function (err) {
    throw err;
});

/* end the input stream and allow the process to exit */
py.end(function (err, code, signal) {
    if (err) {
        throw err;
    }
    console.log('The exit code was: ' + code);
    console.log('The exit signal was: ' + signal);
    console.log('finished');
});