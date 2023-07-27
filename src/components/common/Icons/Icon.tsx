import { FunctionComponent } from "react";
import { FiLink, FiMail, FiLock, FiArrowDown, FiArrowUp } from "react-icons/fi";

export interface IIconProps {
	variant: "link" | "mail" | "lock" | "down-arrow" | "up-arrow";
	className?: string;
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
	if (variant === "down-arrow") {
		return <FiArrowDown {...props} />;
	}
	if (variant === "up-arrow") {
		return <FiArrowUp {...props} />;
	}

	return null;
};

export default Icon;
