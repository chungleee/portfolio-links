"use client";
import TextField from "@/components/common/TextField/TextField";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

export interface Inputs {
	first_name: string;
	last_name: string;
	job: string;
}

const Home = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data);
	};

	return (
		<div>
			<h1>hello world</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField control={control} name='first_name' />
				<TextField control={control} name='last_name' />
				<TextField control={control} name='job' />
				<input type='submit' />
			</form>
		</div>
	);
};

export default Home;
