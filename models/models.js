var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UsersSchema = new Schema ({
	username: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	phonenumber: {
		type: Number,
		required: true
	},
	password: {
		type: String,
		required: true
	}

});

var model = mongoose.model('Users', UsersSchema);

module.exports = model;
