"use client";
import styles from "./page.module.scss";
import { useForm } from "react-hook-form";
import * as z from "zod";
import TextField from "@/components/common/TextField/TextField";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/common/Button/Button";
import Link from "next/link";

const schema = z
	.object({
		email: z
			.string()
			.min(1, { message: "Can't be empty" })
			.email({ message: "Invalid email address" })
			.trim()
			.toLowerCase(),
		password: z.string().min(8, { message: "Please check again" }).max(64),
		confirm_password: z.string(),
	})
	.refine(
		(data) => {
			return data.password === data.confirm_password;
		},
		{
			message: "Passwords don't match",
			path: ["confirm_password"],
		}
	);

type TRegisterFormInputs = z.infer<typeof schema>;

const Register = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<TRegisterFormInputs>({
		resolver: zodResolver(schema),
	});

	const onFormSubmit = (data: TRegisterFormInputs) => {
		console.log("data: ", data);
	};

	return (
		<main className={styles.register_page}>
			<section>
				<p>Let's get you started sharing your links!</p>
				<h2>Create account</h2>
			</section>
			<section>
				<form
					className={styles.register_page__form}
					onSubmit={handleSubmit(onFormSubmit)}
				>
					<TextField
						{...register("email")}
						// name='email'
						error={errors.email}
						iconVariant='mail'
						label='email'
						placeholder='e.g. alex@email.com'
					/>
					<TextField
						{...register("password")}
						// name='password'
						error={errors.password}
						iconVariant='lock'
						type='password'
						label='password'
						placeholder='At least 8 characters'
						className={styles.form_textfield}
					/>
					<TextField
						{...register("confirm_password")}
						// name='confirm_password'
						error={errors.confirm_password}
						iconVariant='lock'
						type='password'
						label='confirm password'
						placeholder='At least 8 characters'
					/>
					<Button variant='default'>Create new account</Button>
				</form>
			</section>
			<section>
				<p>Already have an account?</p>
				<Link href='/login'>Login</Link>
			</section>
		</main>
	);
};

export default Register;