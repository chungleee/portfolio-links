import { FunctionComponent } from "react";
import { FieldPath, Control } from "react-hook-form";
import { FiLink } from "react-icons/fi";
import styles from "./TextField.module.scss";
import { Inputs } from "@/app/page";

interface TextfieldProps {
	control: Control<Inputs>;
	name: FieldPath<Inputs>;
}

const TextField: FunctionComponent<TextfieldProps> = ({ control, name }) => {
	const { register } = control;
	return (
		<div className={styles.textfield}>
			<FiLink className={styles.textfield_icon} />
			<input {...register(name)} />
		</div>
	);
};

export default TextField;
