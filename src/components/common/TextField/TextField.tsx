import { FunctionComponent } from "react";
import { FieldPath, Control, FieldError } from "react-hook-form";
import { FiLink } from "react-icons/fi";
import styles from "./TextField.module.scss";
import { IFormInputs } from "@/app/page";

interface ITextfieldProps {
	control: Control<IFormInputs>;
	name: FieldPath<IFormInputs>;
	error: FieldError | undefined;
	placeholder?: string;
}

const TextField: FunctionComponent<ITextfieldProps> = ({
	control,
	name,
	error,
	placeholder,
}) => {
	const { register } = control;

	console.log("error: ", error);

	return (
		<div
			className={
				error ? `${styles.textfield} ${styles.error}` : styles.textfield
			}
		>
			<FiLink className={styles.textfield_icon} />
			<input {...register(name)} placeholder={placeholder} />
			{error?.message && (
				<small className={styles.error_message}>{error.message}</small>
			)}
		</div>
	);
};

export default TextField;
