const express = require("express");
const User = require("../models/user");
const router = new express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

router.post("/register", async (req, res) => {
	const user = new User(req.body);
	try {
		const token = await user.generateAuthToken(); // error
		await user.save();
		res.status(201).send({ user, token });
	} catch (e) {
		res.status(400).send(e);
	}
});

router.post("/login", async (req, res) => {
	try {
		const user = await User.findByCredentials(
			req.body.username,
			req.body.password
		);
		const token = await user.generateAuthToken();
		res.send({ user, token });
	} catch (e) {
		res.status(400).send(e);
	}
});

router.post("/logout", auth, async (req, res) => {
	try {
		console.log("REACH");
		req.user.tokens = req.user.tokens.filter(token => {
			return token.token !== req.token;
			//when it returns true it will iterate over and do nothing
			//when it returns false it will remove the token and iterate to next
		});
		await req.user.save();
		res.send();
	} catch (e) {
		res.status(500).send();
	}
});

module.exports = router;
