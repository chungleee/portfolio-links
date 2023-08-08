"use client";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";
import styles from "./Navbar.module.scss";
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
		<nav className={styles.navbar}>
			{navigationLinks.map((link) => {
				const isActive = pathname === link.href;

				return (
					<CustomLink
						key={link.name}
						href={link.href}
						name={link.name}
						isActive={isActive}
					/>
				);
			})}
		</nav>
	);
};

export default Navbar;
