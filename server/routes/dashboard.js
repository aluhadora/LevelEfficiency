var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	try {
		attempt(req,res,next);
	} catch (error) {
		res.locals.connection.connect();
		attempt(req,res,next);
	}
});

function attempt(req, res, next) {
	res.locals.connection.query('SELECT * from mydb.dashboardcharacters', function (error, results) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
}

module.exports = router;
