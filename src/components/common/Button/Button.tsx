import { FunctionComponent, ReactNode } from "react";
import styles from "./Button.module.scss";

interface Props {
	children: ReactNode;
	variant: "default" | "secondary";
	disabled?: boolean;
	onClick?: () => void;
}

const Button: FunctionComponent<Props> = ({
	children,
	variant = "default",
	disabled,
	...props
}) => {
	return (
		<button
			{...props}
			disabled={disabled}
			className={
				variant === "secondary"
					? styles.button_secondary
					: styles.button_primary
			}
		>
			{children}
		</button>
	);
};

export default Button;
