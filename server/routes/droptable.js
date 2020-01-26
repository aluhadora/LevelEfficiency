var express = require('express');
var router = express.Router();

/* GET efficient listing. */
router.get('/:shortcode', function(req, res, next) {
	try {
		attempt(req,res,next);
	} catch (error) {
		res.locals.connection.connect();
		attempt(req,res,next);
	}
});

function attempt(req, res, next) {
 	res.locals.connection.query('SELECT * FROM mydb.droptable WHERE ShortCode=?;', [req.params.shortcode], function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
};

module.exports = router;
