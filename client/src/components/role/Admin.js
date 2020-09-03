import React from "react";
import LoggedIn from "../header/LoggedIn";

function Admin(props) {
	console.log(props.location.state.data);
	return (
		<div>
			<LoggedIn username={props.location.state.data.username} />
			<h1>Admin</h1>
		</div>
	);
}

export default Admin;
