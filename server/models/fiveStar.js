var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var votesSchema = new Schema({
	vote: Number
});

var commentsSchema = new Schema({
	text : String,
	authorEmail : String,
	authorName : String
})

var FiveStarSchema   = new Schema({
    label: String,
    refId: String,
    votes : [votesSchema],
    comments : [commentsSchema]
});

FiveStarSchema.plugin(require('mongoose-eventful'));

module.exports = mongoose.model('FiveStar', FiveStarSchema);