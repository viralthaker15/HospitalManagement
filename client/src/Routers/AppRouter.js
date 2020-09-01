import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register"
import Admin from "../components/role/Admin"
import Pharmacist from "../components/role/Pharmacist"
import Diagnostic from "../components/role/Diagnostic"
// ================ Routes ================

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Switch>
				<Route path='/' component={Home} exact={true} />
				<Route path='/login' component={Login} />
				<Route path='/register' component={Register} />
				<Route path='/admin' component={Admin} />
				<Route path='/pharmacist' component={Pharmacist} />
				<Route path='/diagnostic' component={Diagnostic} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;
