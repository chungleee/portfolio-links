import TextField from "@/components/common/TextField/TextField";
import styles from "./page.module.scss";
import Icon from "@/components/common/Icons/Icon";
import Button from "@/components/common/Button/Button";

const Profile = () => {
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
							<input type='file' />
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
						label='First name'
						type='text'
					/>
					<TextField
						labelClassName={styles.textfields_layout}
						inputContainerClassName={styles.textfields}
						label='Last name'
						type='text'
					/>
					<TextField
						labelClassName={styles.textfields_layout}
						inputContainerClassName={styles.textfields}
						label='Email'
						type='email'
					/>
				</div>

				<section className={styles.save_button}>
					<Button variant='default' type='submit'>
						Save
					</Button>
				</section>
			</form>
		</div>
	);
};

export default Profile;
