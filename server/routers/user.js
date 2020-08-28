const express = require("express");
const User = require("../models/user");
const router = new express.Router();
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
	const user = new User(req.body);
	try {
		await user.save();
		res.status(201).send({ user });
	} catch (e) {
		res.status(400).send(e);
	}
});

router.post("/login", (req, res) => {});

module.exports = router;

// User.create({
// 	role: "admin",
// 	username: "vikkajadiyo",
// 	password: "Beastrider69",
// })
// 	.then(() => {
// 		console.log("DATA HAS BEEND SUCCESSFULLY ADDED !");
// 	})
// 	.catch(e => {
// 		console.log("Error : ", e);
// 	});

// User.findOneAndUpdate(
// 	{ username: "vikkajadiyo" },
// 	{
// 		$set: {
// 			lastLogin: Date.now(),
// 		},
// 	}
// ).then(() => {
// 	console.log("Data has been updated");
// });
