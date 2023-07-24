import { FunctionComponent } from "react";
import { FiLink } from "react-icons/fi";
import styles from "./TextField.module.scss";

interface TextfieldProps {
	defaultValue?: string;
}

const TextField: FunctionComponent<TextfieldProps> = (props) => {
	return (
		<div className={styles.textfield}>
			<FiLink className={styles.textfield_icon} />
			<input {...props} type='text' />
		</div>
	);
};

export default TextField;
