import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Tables extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			config: {
				headers: {
					Authorization: props.token,
				},
			},
		};

		//	this.deletePatient = this.deletePatient.bind(this);
	}

	componentWillMount() {
		let config = {
			headers: {
				Authorization: this.props.token,
			},
		};

		Axios.get("http://127.0.0.1:5000/patients", this.state.config)
			.then(res => this.setState({ data: res.data }))
			.catch(e => alert(e));
	}

	deletePatient(PID) {
		Axios.delete(`http://127.0.0.1:5000/patient${PID}`, this.state.config).then(
			() => {
				this.setState(prevState => ({
					data: prevState.data.filter(singleData => singleData.pid !== PID),
				}));
			}
		);
	}

	print() {
		console.log("hllo");
	}

	columns = [
		{ title: "SSN_ID", field: "SSN_ID" },
		{ title: "Patient_Id", field: "pid" },
		{ title: "Name", field: "name" },
		{ title: "Age", field: "age" },
		{ title: "Room", field: "room" },
		{ title: "Date of Admission", field: "doa" },
	];

	render() {
		return (
			<div>
				<Table dark>
					<thead>
						{this.columns.map(item => {
							return <th>{item.title}</th>;
						})}
					</thead>
					<tbody>
						{this.state.data.map(item => {
							return (
								<>
									<tr>
										<td>{item.SSN_ID}</td>
										<td>{item.pid}</td>
										<td>{item.p_name}</td>
										<td>{item.age}</td>
										<td>{item.doa}</td>
										<td>{item.room}</td>
										<td>
											<button
												onClick={() => {
													this.deletePatient(item.pid);
												}}>
												Delete
											</button>
										</td>
									</tr>
								</>
							);
						})}
					</tbody>
				</Table>
			</div>
		);
	}
}

// function Tables(props) {
// 	const columns = [
// 		{ title: "SSN_ID", field: "SSN_ID" },
// 		{ title: "Patient_Id", field: "pid" },
// 		{ title: "Name", field: "name" },
// 		{ title: "Age", field: "age" },
// 		{ title: "Room", field: "room" },
// 		{ title: "Date of Admission", field: "doa" },
// 	];
// 	// const data = [
// 	// 	{
// 	// 		SSN_ID: "001",
// 	// 		pid: "001",
// 	// 		name: "nikunj",
// 	// 		age: "20",
// 	// 		room: "single",
// 	// 		doa: "2020",
// 	// 	},
// 	// ];

// 	const [data, setData] = useState([]);

// 	useEffect(() => {
// 		let config = {
// 			headers: {
// 				Authorization: props.token,
// 			},
// 		};
// 		Axios.get("http://127.0.0.1:5000/patients", config)
// 			.then(res => setData(res.data))
// 			.catch(e => alert(e));
// 	}, [data]);

// 	 const deletePatient = (PID) => {

// 		Axios.delete(`/patient/${PID}`)
// 		setData()
// 	 }

// 	return (
// 		<>
// 			<Table dark>
// 				<thead>
// 					{columns.map(item => {
// 						return <th>{item.title}</th>;
// 					})}
// 				</thead>
// 				<tbody>
// 					{data.map(item => {
// 						return (
// 							<>
// 								<tr>
// 									<td>{item.SSN_ID}</td>
// 									<td>{item.pid}</td>
// 									<td>{item.p_name}</td>
// 									<td>{item.age}</td>
// 									<td>{item.doa}</td>
// 									<td>{item.room}</td>
// 									<td>
// 										<button onClick={}>Delete</button>
// 									</td>
// 								</tr>
// 							</>
// 						);
// 					})}
// 				</tbody>
// 			</Table>
// 		</>
// 	);
// }

// export default Tables;
