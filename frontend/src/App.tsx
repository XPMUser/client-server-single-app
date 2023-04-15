import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
	const url = "http://localhost:5000"; // dev
	// const url = ''; // prod

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timeOut = setTimeout(() => {
			axios
				.get(url + "/data")
				.then((el) => {
					console.log("this is data", el);
					setData(el.data as any);
					setLoading(false);
				})
				.catch((err) => console.log(err));
		}, 1000);
		return () => clearTimeout(timeOut);
	}, []);

	if (loading) {
		return (
			<div className="App">
				<h1>Loading please wait</h1>
			</div>
		);
	}

	return (
		<div className="App">
			<h1>Here is data</h1>
			{data?.map((el) => {
				const { name, id } = el;
				return (
					<div key={id}>
						<hr />
						<p>{name}</p>
					</div>
				);
			})}
		</div>
	);
}

export default App;
