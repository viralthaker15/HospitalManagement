import React from "react";

export default () => {
	const onSubmitHandle = e => {
		e.preventDefault();

		// Authentication  through states / database
	};

	return (
		<div>
			<h2>Login</h2>
			<form onSubmit={onSubmitHandle}>
				<input type='text' name='username' placeholder='Username' autoFocus />
				<input type='password' name='password' placeholder='password' />
				<button>Login</button>
			</form>
		</div>
	);
};
