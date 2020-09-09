const express = require("express");
const Patient = require("../models/patient");
const router = new express.Router();
const auth = require("../middleware/auth");

router.post("/patient", async (req, res) => {
	try {
		console.log(req.body);
		const SSN_ID = Math.floor(100000000 + Math.random() * 900000000);
		const pid = Math.floor(100000000 + Math.random() * 900000000);

		const data = {
			SSN_ID,
			pid,
			...req.body,
		};

		const patient = new Patient(data);
		await patient.save();
		res.status(201).send(patient);
	} catch (e) {
		console.log(e);
		if (e.name === "MongoError" && e.code === 11000) {
			res.status(422).send();
		} else res.status(400).send(e);
	}
});

router.get("/patients", auth, async (req, res) => {
	try {
		const patients = await Patient.find({}, { _id: false });
		res.status(200).send(patients);
	} catch (e) {
		res.status(500).send(e);
	}
});

router.get("/patient:id", auth, async (req, res) => {
	try {
		const patient = await Patient.findById(req.params.id);

		if (!patient)
			throw new Error({
				message: "Patient not found",
			});

		res.status(200).send(patient);
	} catch (e) {
		res.status(500).send(e);
	}
});

router.patch("/patient:id", auth, async (req, res) => {
	try {
		const patient = await Patient.findById(req.params.id);

		if (!patient)
			throw new Error({
				message: "Patient not found",
			});

		const updates = Object.keys(req.body);
		const allowedUpdates = ["name", "address", "age"];
		const isvalidOperation = updates.every(update =>
			allowedUpdates.includes(update)
		);

		if (!isvalidOperation)
			return res.status(400).send({ error: "invalid updates" });

		updates.forEach(update => (patient[update] = req.body[update])); //we dont know which field is updating so here we dynamically updating fields
		await patient.save();

		res.send(200).send(patient);
	} catch (e) {
		res.status(500).send();
	}
});

router.delete("/patient:id", auth, async (req, res) => {
	try {
		//console.log(req.params.id);
		const patient = await Patient.findOne({ pid: req.params.id });
		console.log(patient);
		if (!patient)
			throw new Error({
				message: "Patient not found",
			});

		await patient.remove();
		res.status(200).send();
	} catch (e) {
		res.status(500).send();
	}
});

module.exports = router;
