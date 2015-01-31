var mongoose = require('mongoose');
require('../models/fiveStar');
var FiveStar    = mongoose.model('FiveStar');

// SAVE a new Element
// ==================

exports.save = function(req, res, next){
	var model = new FiveStar();

	model.label = req.body.label;
	model.refId = req.body.refId;

	model.save(function(err, star){
		if(err){
			return next(err);
		}
		res.status(200).send(star);
	});
}