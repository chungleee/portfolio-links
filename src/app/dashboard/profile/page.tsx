import TextField from "@/components/common/TextField/TextField";
import styles from "./page.module.scss";

const Profile = () => {
	return (
		<div className={styles.profile}>
			<section className={styles.profile__intro}>
				<p>Add your details to create a personal touch to your profile.</p>
				<h2>Profile Details</h2>
			</section>

			<form className={styles.profile__form_section}>
				<div className={styles.profile__form_section__personal_deets}>
					<TextField label='First name' type='text' />
					<TextField label='Last name' type='text' />
					<TextField label='Email' type='email' />
				</div>
			</form>
		</div>
	);
};

export default Profile;
