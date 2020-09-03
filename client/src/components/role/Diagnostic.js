import React from "react";
import LoggedIn from "../header/LoggedIn";

function Diagnostic(props) {
	return (
		<div>
			<LoggedIn username={props.location.state.data.username} />
			<h1>Diagnostic</h1>
		</div>
	);
}

export default Diagnostic;
