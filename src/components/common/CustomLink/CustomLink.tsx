import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";
import styles from "./CustomLink.module.scss";

interface ICustomLinkProps {
	href: string;
	isActive?: boolean;
	children?: ReactNode;
}
const CustomLink: FunctionComponent<ICustomLinkProps> = ({
	href,
	isActive,
	children,
}) => {
	return (
		<Link
			className={
				isActive
					? `${styles.custom_link} ${styles.active_link}`
					: `${styles.custom_link}`
			}
			href={href}
		>
			{children}
		</Link>
	);
};

export default CustomLink;
