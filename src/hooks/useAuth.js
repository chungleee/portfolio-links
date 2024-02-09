import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const useAuth = () => {
	const [isAuth, setIsAuth] = useState();
	const router = useRouter();

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

	useEffect(() => {
		if (!isAuth) {
			router.push("/login");
		} else {
			router.push("/dashboard");
		}
		console.log("home");
	}, [isAuth]);
};

export default useAuth;
