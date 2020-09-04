import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./Routers/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
	<React.Fragment>
		<AppRouter />
	</React.Fragment>,
	document.getElementById("root")
);
