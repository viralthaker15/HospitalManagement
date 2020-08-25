import React from "react";
import { useHistory } from "react-router-dom";

export default () => {
	const history = useHistory();
	const handleClick = () => {
		history.push("/login");
	};

	return (
		<div>
			<h1>Medinov</h1>
			<button onClick={handleClick}>Login</button>
		</div>
	);
};
