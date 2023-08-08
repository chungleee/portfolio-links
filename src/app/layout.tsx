import LogoBanner from "@/components/common/LogoBanner/LogoBanner";
import "./global.scss";
import styles from "./layout.module.scss";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={styles.root_layout}>
				<LogoBanner />
				{children}
			</body>
		</html>
	);
}
