const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");

require("dotenv").config({
	path: __dirname + "/config/.env",
});

const PORT = process.env.PORT || 3000;

const app = express();

mongoose
	.connect(process.env.MONGODB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("database has been connected !");
	})
	.catch(e => {
		console.log("Error :", e);
	});

app.use(express.static("../client/public"));

app.post("/register", (req, res) => {});

app.post("/login", (req, res) => {});

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

app.listen(PORT, () => {
	console.log("Server is up on port! : ", PORT);
});
