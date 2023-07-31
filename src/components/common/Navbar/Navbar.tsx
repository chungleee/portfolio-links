"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";
import styles from "./Navbar.module.scss";
import Icon from "../Icons/Icon";
import CustomLink from "../CustomLink/CustomLink";

interface INavbarProps {
	navigationLinks: {
		href: string;
		name: string;
	}[];
}

const Navbar: FunctionComponent<INavbarProps> = ({ navigationLinks }) => {
	const pathname = usePathname();

	return (
		<div className={styles.navbar}>
			{navigationLinks.map((link) => {
				const isActive = pathname === link.href;

				return (
					<CustomLink href={link.href} name={link.name} isActive={isActive} />
					// <Link
					// 	className={
					// 		isActive
					// 			? `${styles.navbar__link} ${styles.active_link}`
					// 			: `${styles.navbar__link}`
					// 	}
					// 	href={link.href}
					// 	key={link.name}
					// >
					// 	<Icon variant='link' /> {link.name}
					// </Link>
				);
			})}
		</div>
	);
};

export default Navbar;
