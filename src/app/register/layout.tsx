import { ReactNode } from "react";
import styles from "./layout.module.scss";

const RegisterLayout = ({ children }: { children: ReactNode }) => {
	return <div className={styles.register_layout}>{children}</div>;
};

export default RegisterLayout;
