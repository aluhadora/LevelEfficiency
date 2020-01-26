var express = require('express');
var router = express.Router();

/* GET efficient listing. */
router.get('/:itemID/:count', function(req, res, next) {
	try {
		attempt(req,res,next);
	} catch (error) {
		res.locals.connection.connect();
		attempt(req,res,next);
	}
});

function attempt(req, res, next) {
 	res.locals.connection.query('CALL mydb.UpdateItemCount(?,?)', [req.params.itemID, req.params.count], function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
}

module.exports = router;
