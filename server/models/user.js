const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
	{
		role: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
			trim: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			trim: true,
			minlength: 7,
		},
		email: {
			type: String,
			required: true,
			lowercase: true,
			unique: true,
			trim: true,
			validate(value) {
				if (!validator.isEmail(value)) {
					throw new Error("Please Provide valid Email Address");
				}
			},
		},
		lastLogin: {
			type: Date,
			required: false,
		},
		tokens: [
			{
				token: {
					type: String,
					required: true,
				},
			},
		],
	},
	{ timestamps: true }
);

//to generate auth tokens for session management
userSchema.methods.generateAuthToken = async function () {
	const user = this;
	const token = jwt.sign(
		{
			_id: user._id.toString(),
		},
		process.env.JWT_SECRET
	); // error
	user.tokens = user.tokens.concat({ token });
	await user.save();
	return token;
};

//to check whether user is verified or not in login process
userSchema.statics.findByCredentials = async (username, password) => {
	const user = await User.findOne({ username });

	if (!user) throw new Error("No User found with this username !");

	const isMatch = await bcrypt.compare(password, user.password);

	if (!isMatch) throw new Error("Unable to login !");

	return user;
};

userSchema.pre("save", async function (next) {
	const user = this;

	if (user.isModified("password"))
		user.password = await bcrypt.hash(user.password, 8);

	next();
}); //middleware function

const User = mongoose.model("User", userSchema);

module.exports = User;
