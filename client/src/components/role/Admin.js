import React from "react";
import LoggedIn from "../header/LoggedIn";
import PatientRegister from "../form/PatientRegister";
import Tables from "../tables/Tables";
import { useHistory } from "react-router-dom";

function Admin(props) {
	let History = useHistory();

	const AddPatient = () => {
		History.push("/addpatient");
	};

	return (
		<div>
			<LoggedIn username={props.location.state.data.username} />
			<button onClick={AddPatient}>Add Patient</button>
			<Tables token={props.location.state.data.tokens[0].token} />
		</div>
	);
}

export default Admin;
