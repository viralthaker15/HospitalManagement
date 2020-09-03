const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require("cors");
const userRouter = require("./routers/user");
const patientRouter = require("./routers/patient");

require("dotenv").config({
	path: __dirname + "/config/.env",
});

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.static("../client/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(userRouter);
app.use(patientRouter);

mongoose
	.connect(process.env.MONGODB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => {
		console.log("database has been connected !");
	})
	.catch(e => {
		console.log("Error :", e);
	});

app.listen(PORT, () => {
	console.log("Server is up on port! : ", PORT);
});
