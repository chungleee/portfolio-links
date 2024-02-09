"use client";
import { redirect, useRouter } from "next/navigation";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const Home = () => {
	/**
	 * 1. check localStorage to see if user is logged in
	 * 2. if logged in -> redirect to /dashboard
	 * 3. else -> redirect to /login
	 */
	const router = useRouter();
	const isAuth = useAuth();

	useEffect(() => {
		if (!isAuth) {
			router.push("/login");
		} else {
			router.push("/dashboard");
		}
		console.log("home");
	}, [isAuth]);
};

export default Home;
