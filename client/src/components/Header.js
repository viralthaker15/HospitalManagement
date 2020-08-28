import React from "react";
import { Link } from "react-router-dom";

export default () => {
	return (
		<div>
			<h1>Medinov</h1>
			<button>
				<Link to='/login'>login</Link>
			</button>
		</div>
	);
};
