"use client";
import TextField from "@/components/common/TextField/TextField";
import Button from "@/components/common/Button/Button";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FunctionComponent } from "react";
import Link from "next/link";

const loginSchema = z.object({
	email: z
		.string()
		.min(1, { message: "Can't be empty" })
		.email({ message: "Invalid email address" })
		.trim()
		.toLowerCase(),
	password: z.string().min(1, { message: "Please check again" }),
});

type TLoginFormInputs = z.infer<typeof loginSchema>;

const Login: FunctionComponent = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<TLoginFormInputs>({
		resolver: zodResolver(loginSchema),
	});

	const onLoginSubmit = (data: TLoginFormInputs) => {
		console.log(data);
	};
	return (
		<main>
			<section>
				<p>Add your details below to get back into the app</p>
				<h2>Login</h2>
			</section>
			<section>
				<form onSubmit={handleSubmit(onLoginSubmit)}>
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
		</main>
	);
};

export default Login;
