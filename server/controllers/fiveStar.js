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
};

// GET an existing Element
// =======================

exports.get = function(req, res, next){
	FiveStar.findOne(
		{
			label : req.params.label,
			refId : req.params.refId
		},
		function(err, star){
			if (err){
				return next(err);
			}
			res.status(200).send(star);
		}
	)
};

// VOTE an existing Element
// ========================

exports.vote = function(req, res, next){
	FiveStar.findOne(
		{
			label : req.params.label,
			refId : req.params.refId
		},
		function(err, star){
			if (err){
				return next(err);
			}

			star.votes.push({vote: parseInt(req.body.vote)});

			star.save(function(err, voted){
				if (err){
					return next(err);
				}
				res.status(200).send(voted);
			});
		}
	)
}