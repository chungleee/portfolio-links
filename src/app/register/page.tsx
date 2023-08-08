"use client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import TextField from "@/components/common/TextField/TextField";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
	.object({
		email: z.string().email({ message: "Invalid email address" }).trim(),
		password: z.string().min(8).max(64),
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
		<main>
			<section>
				<p>Let's get you started sharing your links!</p>
				<h2>Create account</h2>
			</section>
			<section>
				<form onSubmit={handleSubmit(onFormSubmit)}>
					<TextField
						{...register("email")}
						name='email'
						error={errors.email}
						iconVariant='mail'
					/>
					<TextField
						{...register("password")}
						name='password'
						error={errors.password}
						iconVariant='lock'
						type='password'
					/>
					<TextField
						{...register("confirm_password")}
						name='confirm_password'
						error={errors.confirm_password}
						iconVariant='lock'
						type='password'
					/>
					<input type='submit' />
				</form>
			</section>
		</main>
	);
};

export default Register;
