import Icon from "../Icons/Icon";
import styles from "./Logo.module.scss";

export const Logo = () => {
	return (
		<div className={styles.logo__icon}>
			<Icon variant='link' />
		</div>
	);
};

const LogoBanner = () => {
	return (
		<div className={styles.logo}>
			<Logo />
			<span className={styles.logo__text}>foliolinks</span>
		</div>
	);
};

export default LogoBanner;
