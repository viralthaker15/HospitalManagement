import React from "react";
import LoggedIn from "../header/LoggedIn";
import PatientRegister from "../form/PatientRegister";

function Admin(props) {
	console.log(props.location.state.data);
	return (
		<div>
			<LoggedIn username={props.location.state.data.username} />
			<PatientRegister />
		</div>
	);
}

export default Admin;
