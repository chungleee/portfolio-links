import { FunctionComponent } from "react";
import {
	FiLink,
	FiMail,
	FiLock,
	FiArrowDown,
	FiArrowUp,
	FiUser,
	FiEye,
	FiZap,
} from "react-icons/fi";

export type Variants =
	| "link"
	| "mail"
	| "lock"
	| "down-arrow"
	| "up-arrow"
	| "user"
	| "eye"
	| "zap";

export interface IIconProps {
	variant: Variants;
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
	if (variant === "user") {
		return <FiUser {...props} />;
	}
	if (variant === "eye") {
		return <FiEye {...props} />;
	}
	if (variant === "zap") {
		return <FiZap {...props} />;
	}

	return null;
};

export default Icon;
