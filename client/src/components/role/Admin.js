import React from "react";
import LoggedIn from "../header/LoggedIn";
import PatientRegister from "../form/PatientRegister";
import Tables from "../tables/Tables"

function Admin(props) {
	return (
		<div>
			<LoggedIn username={props.location.state.data.username} />
			<Tables token={props.location.state.data.tokens[0].token}/>
			<PatientRegister />
		</div>
	);
}

export default Admin;
