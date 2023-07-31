import Link from "next/link";
import { FunctionComponent } from "react";
import styles from "./CustomLink.module.scss";
import Icon from "../Icons/Icon";

interface ICustomLinkProps {
	href: string;
	name: string;
	isActive: boolean;
}
const CustomLink: FunctionComponent<ICustomLinkProps> = ({
	href,
	name,
	isActive,
}) => {
	return (
		<Link
			className={
				isActive
					? `${styles.custom_link} ${styles.active_link}`
					: `${styles.custom_link}`
			}
			href={href}
			key={name}
		>
			<Icon variant='link' /> {name}
		</Link>
	);
};

export default CustomLink;
