"use client";
import { useEffect, useState } from "react";

const Home = () => {
	const [ping, setPing] = useState();

	useEffect(() => {
		const pingServer = async () => {
			const url = process.env.NEXT_PUBLIC_SERVER;
			const res = await fetch(`${url}/ping`, {
				method: "GET",
				credentials: "include",
			});
			const json = await res.json();

			setPing(json.ping);
		};

		pingServer();
	}, []);
	/**
	 * 1. check localStorage to see if user is logged in
	 * 2. if logged in -> redirect to /dashboard
	 * 3. else -> redirect to /login
	 */
	return <div>{ping}</div>;
};

export default Home;
