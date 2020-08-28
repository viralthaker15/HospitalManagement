import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Header from "../components/Header";
import Login from "../components/Login";
import Register from "../components/Register"

// ================ Routes ================

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path='/' component={Home} exact={true} />
				<Route path='/login' component={Login} />
				<Route path='/register' component={Register} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;
