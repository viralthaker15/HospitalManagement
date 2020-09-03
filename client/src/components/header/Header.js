import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const Header = props => {
	const history = useHistory();

	return (
		<div>
			<h1>Medinov</h1>
			{props.isLoggedIn ? (
				<div>
					<Button
						onClick={() => {
							props.handleAuthentication();
							console.log("reached");
							history.push("/");
						}}>
						Logout
					</Button>
				</div>
			) : (
				<div>
					<Link to='/register'>Register</Link>
					<Link to='/login'>login</Link>
				</div>
			)}
		</div>
	);
};

export default Header;
// export default () => {
// 	return (
// 		<div>
// 			<h1>Medinov</h1>
// 			<button>
// 				<Link to='/login'>login</Link>
// 			</button>
// 			<button>
// 				<Link to='/register'>Register</Link>
// 			</button>
// 		</div>
// 	);
// };
