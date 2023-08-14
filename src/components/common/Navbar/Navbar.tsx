"use client";
import { usePathname } from "next/navigation";
import { FunctionComponent, ReactNode } from "react";
import styles from "./Navbar.module.scss";
import CustomLink from "../CustomLink/CustomLink";
import { Logo } from "../LogoBanner/LogoBanner";
import Icon from "../Icons/Icon";

export interface INavbarProps {
	navigationLinks: {
		href: string;
		name: string;
		icon?: ReactNode;
	}[];
	className?: string;
}

const Navbar: FunctionComponent<INavbarProps> = ({
	navigationLinks,
	className,
}) => {
	const pathname = usePathname();

	return (
		<nav className={`${styles.navbar} ${className}`}>
			<div>
				<span className={`${styles.left_logo} ${styles.navbar_logos}`}>
					<Logo />
				</span>
				{navigationLinks.map((link) => {
					const isActive = pathname === link.href;

					return (
						<CustomLink key={link.name} href={link.href} isActive={isActive}>
							{link.icon}
							<span className={styles.customlink_name}>{link.name}</span>
						</CustomLink>
					);
				})}
				<span className={`${styles.right_logo} ${styles.navbar_logos}`}>
					<Icon variant='eye' />
				</span>
			</div>
		</nav>
	);
};

export default Navbar;
