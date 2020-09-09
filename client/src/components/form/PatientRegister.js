import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";

const useStyles = makeStyles(theme => ({
	formControl: {
		marginRight: theme.spacing(2),
		minWidth: 120,
	},
	second: {
		marginRight: theme.spacing(0.5),
		marginTop: "40px",
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

function PatientRegister() {
	const classes = useStyles();
	const [p_name, setP_name] = useState("");
	const [address, setAddress] = useState("");
	const [age, setAge] = useState(0);
	const [doa, setDoa] = useState("");
	const [room, setRoom] = useState("");

	// console.log(utc)

	let History = useHistory();

	const sendData = () => {
		let payload = {
			p_name,
			address,
			age,
			doa,
			room,
		};
		Axios.post("http://localhost:5000/patient", payload)
			.then(data => {
				console.log(data);
				History.goBack();
			})
			.catch(e => {
				console.log(e);
			});
	};

	return (
		<>
			<TextField
				className={classes.formControl}
				type='text'
				id='p_name'
				label='Patient Name'
				value={p_name}
				helperText="Enter Patient's name"
				onChange={e => setP_name(e.target.value)}
			/>
			<TextField
				className={classes.formControl}
				type='textarea'
				id='address'
				label='Address'
				value={address}
				helperText="Patient's Address"
				onChange={e => setAddress(e.target.value)}
			/>
			<TextField
				className={classes.formControl}
				type='number'
				id='age'
				label='Age'
				value={age}
				helperText="Patient's Age"
				onChange={e => setAge(e.target.value)}
			/>
			<TextField
				className={classes.formControl}
				type='date'
				id='dateofjoin'
				// label='Admission Date'
				value={doa}
				helperText='Enter Admission Date'
				onChange={e => setDoa(e.target.value)}
			/>

			<FormControl className={classes.formControl}>
				<InputLabel id='room'>Room</InputLabel>
				<Select
					labelId='Room Type'
					id='room'
					value={room}
					onChange={e => setRoom(e.target.value)}>
					<MenuItem value='general'>General</MenuItem>
					<MenuItem value='semi'>Semi</MenuItem>
					<MenuItem value='single'>Single</MenuItem>
				</Select>
			</FormControl>
			<Button
				className={classes.formControl}
				variant='contained'
				color='primary'
				onClick={sendData}>
				Register
			</Button>
		</>
	);
}

export default PatientRegister;
