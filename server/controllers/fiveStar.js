var mongoose = require('mongoose');
require('../models/fiveStar');
var FiveStar    = mongoose.model('FiveStar');

// SAVE a new Element
// ==================

exports.save = function(req, res, next){
	FiveStar.findOne(
		{
			label : req.body.label,
			refId : req.body.refId
		},
		function(err, star){
			if (err){
				return next(err);
			}
			if(star){
				res.status(200).send(star);	
			}
			else{
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
			
		}
	)
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

	if(!req.body.vote){
		res.status(401).send('Field Vote is required');
	}

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

// COMMENT an existing Element
// ===========================

exports.comment = function(req, res, next){

	if(!req.body.text){
		res.status(401).send('Field Text is required');
	}

	FiveStar.findOne(
		{
			label : req.params.label,
			refId : req.params.refId
		},
		function(err, star){
			if (err){
				return next(err);
			}

			star.comments.push({
				text: req.body.text,
				authorEmail: req.body.authorEmail,
				authorName: req.body.authorName
			});

			star.save(function(err, voted){
				if (err){
					return next(err);
				}
				res.status(200).send(voted);
			});
		}
	)
}