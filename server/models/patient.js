const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
	SSN_ID: {
		type: Number,
		required: true,
		unique: true,
		trim: true,
		minlength: 9,
	},

	pid: {
		type: Number,
		required: true,
		unique: true,
		trim: true,
		minlength: 9,
	},

	p_name: {
		type: String,
		required: true,
		trim: true,
		unique: true,
	},

	address: {
		type: String,
		trim: true,
		required: true,
	},

	age: {
		type: Number,
		required: true,
		trim: true,
		maxlength: 3,
	},
	doa: {
		type: String,
	},
	room: {
		type: String,
	},
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
