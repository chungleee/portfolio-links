import { FunctionComponent, ReactNode } from "react";
import styles from "./Button.module.scss";

interface Props {
	children: ReactNode;
}

const Button: FunctionComponent<Props> = ({ children }) => {
	return <button className={styles.button_primary}>{children}</button>;
};

export default Button;
