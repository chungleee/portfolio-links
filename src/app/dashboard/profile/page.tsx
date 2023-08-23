"use client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import TextField from "@/components/common/TextField/TextField";
import styles from "./page.module.scss";
import Icon from "@/components/common/Icons/Icon";
import Button from "@/components/common/Button/Button";
import { zodResolver } from "@hookform/resolvers/zod";

const ACCEPTED_FORMATS = ["image/jpg", "image/jpeg", "image/webp", "image/png"];

const MAX_FILE_SIZE = 5000000;

const profileSchema = z.object({
	profilePic: z
		.any()
		.refine((files: FileList) => {
			return files.length;
		}, "Please upload an image")
		.refine((files: FileList) => {
			return ACCEPTED_FORMATS.includes(files[0]?.type);
		}, "This format is not accepted")
		.refine((files: FileList) => {
			return files[0]?.size <= MAX_FILE_SIZE;
		}, "File needs to be 5MB or less"),
	firstName: z.string().min(1, { message: "Field is required" }).trim(),
	lastName: z.string().min(1, { message: "Field is required" }).trim(),
	email: z
		.string()
		.transform((value) => {
			if (!value) return;
			return value;
		})
		.pipe(
			z
				.string()
				.email({ message: "Invalie email address" })
				.trim()
				.toLowerCase()
				.optional()
		),
});

type TProfileFormValues = z.infer<typeof profileSchema>;

const Profile = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<TProfileFormValues>({
		resolver: zodResolver(profileSchema),
		mode: "onSubmit",
	});

	const handleSave = (data: TProfileFormValues) => {
		console.log("form data: ", data);
	};

	return (
		<div className={styles.profile}>
			<section className={styles.profile__intro}>
				<p>Add your details to create a personal touch to your profile.</p>
				<h2>Profile Details</h2>
			</section>

			<form className={styles.profile__form_section}>
				<div className={styles.profile__form_section__image_upload}>
					<p>Profile picture</p>
					<div>
						<label>
							<Icon variant='image' />
							+ Upload Image
							<input
								type='file'
								{...register("profilePic")}
								accept='image/jpg, image/jpeg, image/webp, image/png'
							/>
						</label>
						<small>
							Image must be below 5MB. Use WebP, PNG or JPG formats.
						</small>
					</div>
				</div>

				<div className={styles.profile__form_section__personal_deets}>
					<TextField
						labelClassName={styles.textfields_layout}
						inputContainerClassName={styles.textfields}
						label='First name *'
						type='text'
						{...register("firstName")}
						error={errors.firstName}
						placeholder='John'
					/>
					<TextField
						labelClassName={styles.textfields_layout}
						inputContainerClassName={styles.textfields}
						label='Last name *'
						type='text'
						{...register("lastName")}
						error={errors.lastName}
						placeholder='Doe'
					/>
					<TextField
						labelClassName={styles.textfields_layout}
						inputContainerClassName={styles.textfields}
						label='Email'
						type='email'
						{...register("email")}
						error={errors.email}
						placeholder='e.g. johndoe@email.com'
					/>
				</div>

				<section className={styles.save_button}>
					<Button
						onClick={handleSubmit(handleSave)}
						variant='default'
						type='submit'
					>
						Save
					</Button>
				</section>
			</form>
		</div>
	);
};

export default Profile;
