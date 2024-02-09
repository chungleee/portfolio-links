import { useState } from "react";
import { useEffect } from "react";

const useAuth = () => {
	const [isAuth, setIsAuth] = useState();
	useEffect(() => {
		// check localStorage for token
		const token = localStorage.getItem("foliolinks_jwt");

		// if no token, isAuth = false
		if (!token) {
			setIsAuth(false);
		} else {
			setIsAuth(true);
		}
	}, []);
	return isAuth;
};

export default useAuth;
