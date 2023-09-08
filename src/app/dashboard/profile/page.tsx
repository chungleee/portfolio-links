"use client";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@/components/common/TextField/TextField";
import styles from "./page.module.scss";
import Icon from "@/components/common/Icons/Icon";
import Button from "@/components/common/Button/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { TProfileFormValues, profileSchema } from "../model";

const Profile = () => {
	const [previewImg, setPreviewImg] = useState<string>("");
	const labelRef = useRef<HTMLLabelElement>(null);

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

	useEffect(() => {
		if (labelRef.current) {
			labelRef.current.style.backgroundImage = `url(${previewImg})`;
			labelRef.current.style.filter = "grayscale(15%)";
		}
	}, [previewImg]);

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
						<label ref={labelRef}>
							<Icon
								className={previewImg ? styles.uploaded_img_text : ""}
								variant='image'
							/>
							{previewImg ? (
								<span className={styles.uploaded_img_text}>Change Image</span>
							) : (
								<span>+ Upload Image</span>
							)}
							<input
								type='file'
								{...register("profilePic", {
									onChange: (event) => {
										const file = event.target.files[0];
										setPreviewImg(URL.createObjectURL(file));
									},
								})}
								accept='image/jpg, image/jpeg, image/webp, image/png'
							/>
						</label>
						<small>
							Image must be below 5MB. Use WebP, PNG or JPG formats.
						</small>
						{errors.profilePic && (
							<small className={styles.error}>
								{errors.profilePic.message?.toString()}
							</small>
						)}
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
