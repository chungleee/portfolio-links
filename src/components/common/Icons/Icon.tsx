import { FunctionComponent } from "react";
import { FiLink, FiMail, FiLock } from "react-icons/fi";

export interface IIconProps {
	variant: "link" | "mail" | "lock";
	className: string;
}

const Icon: FunctionComponent<IIconProps> = ({ variant, ...props }) => {
	if (variant === "link") {
		return <FiLink {...props} />;
	}
	if (variant === "mail") {
		return <FiMail {...props} />;
	}
	if (variant === "lock") {
		return <FiLock {...props} />;
	}

	return null;
};

export default Icon;
