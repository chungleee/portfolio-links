"use client";
import styles from "./page.module.scss";
import TextField from "@/components/common/TextField/TextField";
import Button from "@/components/common/Button/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FunctionComponent } from "react";
import Link from "next/link";
import { TLoginFormInputs, loginSchema } from "../model";
import { useMutation } from "@tanstack/react-query";
import { redirect } from "next/navigation";

const Login: FunctionComponent = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<TLoginFormInputs>({
		resolver: zodResolver(loginSchema),
	});

	const onLoginSubmit = async (data: TLoginFormInputs) => {
		try {
			let url =
				process.env.NODE_ENV === "production"
					? process.env.NEXT_PUBLIC_PRODUCTION_SERVER
					: process.env.NEXT_PUBLIC_SERVER;

			const result = await fetch(
				`https://foliolinks-api.onrender.com/api/users/auth/login`,
				{
					// const result = await fetch(`${url}/api/users/auth/login`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(data),
					credentials: "include",
				}
			);

			// TODO: set user object somewhere in state
			const json = await result.json();
			console.log(json);
		} catch (error) {
			console.log(error);
		}
	};

	const { mutate, isError, isSuccess, isPending } = useMutation({
		mutationFn: (data: TLoginFormInputs) => {
			return onLoginSubmit(data);
		},
	});

	if (isSuccess) redirect("/dashboard");

	return (
		<main className={styles.login_page}>
			{isPending ? (
				<div>LOADING</div>
			) : (
				<>
					<section>
						<p>Add your details below to get back into the app</p>
						<h2>Login</h2>
					</section>
					<section>
						<form
							// onSubmit={handleSubmit(onLoginSubmit)}
							onSubmit={handleSubmit((data) => {
								mutate(data);
							})}
						>
							<TextField
								label='email'
								iconVariant='mail'
								placeholder='e.g. alex@email.com'
								{...register("email")}
								error={errors.email}
							/>
							<TextField
								placeholder='Enter your password'
								label='password'
								type='password'
								iconVariant='lock'
								{...register("password")}
								error={errors.password}
							/>
							<Button variant='default'>Login</Button>
						</form>
					</section>
					<section>
						<p>Don't have an account?</p>
						<Link href='/register'>Create account</Link>
					</section>
				</>
			)}
		</main>
	);
};

export default Login;
