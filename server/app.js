const express = require("express");
const mongoose = require("mongoose");

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

app.listen(PORT, () => {
	console.log("Server is up on port! : ", PORT);
});
