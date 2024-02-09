import { useState } from "react";
import { useEffect } from "react";

const useAuth = () => {
	const [isAuth, setIsAuth] = useState();
	useEffect(() => {
		// check localStorage for token
		const token = localStorage.getItem("foliolinks_jwt");

		console.log("token: ", token);
		// if no token, isAuth = false
		if (!token) {
			setIsAuth(false);
		} else {
			setIsAuth(true);
		}

		console.log("useAuth");
	}, []);

	console.log("is auth: ", isAuth);
	return isAuth;
};

export default useAuth;
