"use client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import TextField from "@/components/common/TextField/TextField";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
	email: z.string().email({ message: "Invalid email address" }).trim(),
});

type TRegisterFormInputs = z.infer<typeof schema>;

const Register = () => {
	const {
		control,
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
						control={control}
						name='email'
						error={errors.email}
						iconVariant='mail'
					/>
				</form>
			</section>
		</main>
	);
};

export default Register;
