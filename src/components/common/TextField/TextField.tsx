import { FunctionComponent } from "react";
import { FieldPath, Control, FieldError } from "react-hook-form";
import styles from "./TextField.module.scss";
import { IFormInputs } from "@/app/page";
import Icon, { IIconProps } from "../Icons/Icon";

interface ITextfieldProps {
	control: Control<IFormInputs>;
	name: FieldPath<IFormInputs>;
	error: FieldError | undefined;
	placeholder?: string;
	iconVariant: "link" | "mail" | "lock";
}

const TextField: FunctionComponent<ITextfieldProps> = ({
	control,
	name,
	error,
	placeholder,
	iconVariant,
}) => {
	const { register } = control;

	return (
		<div
			className={
				error ? `${styles.textfield} ${styles.error}` : styles.textfield
			}
		>
			<Icon variant={iconVariant} className={styles.textfield_icon} />
			<input {...register(name)} placeholder={placeholder} />
			{error?.message && (
				<small className={styles.error_message}>{error.message}</small>
			)}
		</div>
	);
};

export default TextField;
