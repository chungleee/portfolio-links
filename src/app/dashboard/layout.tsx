import Icon from "@/components/common/Icons/Icon";
import Navbar from "@/components/common/Navbar/Navbar";
import { ReactNode } from "react";

const dashboardLinks = [
	{ href: "/dashboard", name: "Links", icon: <Icon variant='link' /> },
	{
		href: "/dashboard/profile",
		name: "Profile",
		icon: <Icon variant='user' />,
	},
];

const DashboardLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<Navbar navigationLinks={dashboardLinks} />
			<main>{children}</main>
		</div>
	);
};

export default DashboardLayout;
