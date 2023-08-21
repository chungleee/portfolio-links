import Icon from "../Icons/Icon";
import styles from "./LogoBanner.module.scss";

export const Logo = () => {
	return (
		<div className={styles.logo__icon}>
			<Icon variant='link' />
		</div>
	);
};

const LogoBanner = ({ logoTextClassName }: { logoTextClassName?: string }) => {
	return (
		<div className={styles.logo}>
			<Logo />
			<span className={`${styles.logo__text} ${logoTextClassName}`}>
				foliolinks
			</span>
		</div>
	);
};

export default LogoBanner;
