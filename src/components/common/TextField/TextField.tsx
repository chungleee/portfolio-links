import { forwardRef } from "react";
import { FieldError } from "react-hook-form";
import styles from "./TextField.module.scss";
import Icon from "../Icons/Icon";

interface ITextfieldProps {
	label?: string;
	error?: FieldError;
	placeholder?: string;
	iconVariant: "link" | "mail" | "lock" | "zap";
	type?: "text" | string;
	className?: string;
	inputClassName?: string;
	labelClassName?: string;
	inputContainerClassName?: string;
}

const TextField = forwardRef<HTMLInputElement, ITextfieldProps>(
	(
		{
			error,
			iconVariant,
			type,
			placeholder,
			label,
			className,
			inputClassName,
			labelClassName,
			inputContainerClassName,
			...props
		},
		ref
	) => {
		return (
			<div className={className}>
				<label className={`${styles.label} ${labelClassName}`}>
					{label}
					<div
						className={
							error
								? `${styles.textfield} ${inputContainerClassName} ${styles.error}`
								: `${styles.textfield} ${inputContainerClassName}`
						}
					>
						<Icon variant={iconVariant} className={styles.textfield_icon} />
						<input
							className={inputClassName}
							ref={ref}
							{...props}
							type={type}
							placeholder={placeholder}
						/>
						{error?.message && (
							<small className={styles.error_message}>{error.message}</small>
						)}
					</div>
				</label>
			</div>
		);
	}
);

export default TextField;
