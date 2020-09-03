import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/header/Header";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Admin from "../components/role/Admin";
import Pharmacist from "../components/role/Pharmacist";
import Diagnostic from "../components/role/Diagnostic";

// ================ Routes ================

class AppRouter extends React.Component {
	state = {
		isLoggedIn: false,
	};

	constructor(props) {
		super(props);

		this.handleAuthentication = this.handleAuthentication.bind(this);
	}

	handleAuthentication = () => {
		this.setState(prevState => ({
			isLoggedIn: !prevState.isLoggedIn,
		}));
	};

	render() {
		return (
			<BrowserRouter>
				<div>
					<Header
						isLoggedIn={this.state.isLoggedIn}
						handleAuthentication={this.handleAuthentication}
					/>
					<Switch>
						<Route path='/' component={Home} exact={true} />
						<Route
							path='/login'
							component={props => (
								<Login handleAuthentication={this.handleAuthentication} />
							)}
						/>
						<Route path='/register' component={Register} />
						<Route path='/admin' component={Admin} />
						<Route path='/pharmacist' component={Pharmacist} />
						<Route path='/diagnostic' component={Diagnostic} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default AppRouter;
