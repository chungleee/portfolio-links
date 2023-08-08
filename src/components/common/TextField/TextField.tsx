import { forwardRef } from "react";
import { FieldError } from "react-hook-form";
import styles from "./TextField.module.scss";
import Icon from "../Icons/Icon";

interface ITextfieldProps {
	name: string;
	label?: string;
	error?: FieldError;
	placeholder?: string;
	iconVariant: "link" | "mail" | "lock";
	type?: "text" | string;
}

const TextField = forwardRef<HTMLInputElement, ITextfieldProps>(
	({ error, iconVariant, type, placeholder, label, ...props }, ref) => {
		console.log("error: ", error);
		return (
			<label className={styles.label}>
				{label}
				<div
					className={
						error ? `${styles.textfield} ${styles.error}` : styles.textfield
					}
				>
					<Icon variant={iconVariant} className={styles.textfield_icon} />
					<input ref={ref} {...props} type={type} placeholder={placeholder} />
					{error?.message && (
						<small className={styles.error_message}>{error.message}</small>
					)}
				</div>
			</label>
		);
	}
);

export default TextField;
