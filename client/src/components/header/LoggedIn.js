import React from "react";

function LoggedIn(props) {
	const user = props.username;
	return (
		<div>
			<h1>Welcome {user} !</h1>
		</div>
	);
}

export default LoggedIn;
