import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";
import { useHistory } from "react-router-dom";

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

function Register() {
	const classes = useStyles();
	let history = useHistory();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [role, setRole] = useState("");
	const [email, setEmail] = useState("");

	const sendData = () => {
		let payload = {
			role,
			username,
			password,
			email,
		};

		Axios.post("http://127.0.0.1:5000/register", payload)
			.then(res => {
				if (res.status === 201) {
					history.push({
						pathname: "/login",
						state: {
							data: res.data.user,
						},
					});
				}
			})
			.catch(e => {
				console.log(e);
				if (e.message === "Request failed with status code 422") {
					alert("User exists with this username or email try another one ");
				}
			});
	};

	return (
		<>
			<FormControl className={classes.formControl}>
				<InputLabel id='role'>Role</InputLabel>
				<Select
					labelId='Role'
					id='role'
					value={role}
					onChange={e => setRole(e.target.value)}>
					<MenuItem value='admin'>Admin</MenuItem>
					<MenuItem value='pharmacist'>Pharmacist</MenuItem>
					<MenuItem value='diagnostic'>Diagnostic</MenuItem>
				</Select>
			</FormControl>
			<TextField
				className={classes.formControl}
				type='email'
				id='email'
				label='Email'
				value={email}
				helperText='Enter your email'
				onChange={e => setEmail(e.target.value)}
			/>
			<TextField
				className={classes.formControl}
				type='text'
				id='username'
				label='Username'
				value={username}
				helperText='Enter your Username'
				onChange={e => setUsername(e.target.value)}
			/>
			<TextField
				className={classes.formControl}
				type='password'
				id='password'
				label='Password'
				value={password}
				helperText='Enter your password'
				onChange={e => setPassword(e.target.value)}
			/>
			<Button
				className={classes.formControl}
				variant='contained'
				color='primary'
				onClick={sendData}>
				Register
			</Button>
			<div>
				<Button
					className={classes.second}
					variant='contained'
					color='secondary'
					onClick={() => history.push("/login")}>
					Login
				</Button>
				<Button
					className={classes.second}
					variant='contained'
					color='secondary'
					onClick={() => history.push("/")}>
					Cancel
				</Button>
			</div>
		</>
	);
}

export default Register;
