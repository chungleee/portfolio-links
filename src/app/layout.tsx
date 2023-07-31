import Navbar from "@/components/common/Navbar/Navbar";
import "./global.scss";

const navigationLinks = [
	{ href: "/", name: "home" },
	{ href: "/about", name: "about" },
];

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				<Navbar navigationLinks={navigationLinks} />
				{children}
			</body>
		</html>
	);
}
