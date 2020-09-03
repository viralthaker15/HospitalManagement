import React from "react";
import LoggedIn from "../header/LoggedIn";

function Pharmacist(props) {
	return (
		<div>
			<LoggedIn username={props.location.state.data.username} />
			<h1>Pharmacist</h1>
		</div>
	);
}

export default Pharmacist;
