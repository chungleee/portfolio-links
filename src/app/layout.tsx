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
				<div className={styles.banner}>
					<LogoBanner />
				</div>
				{children}
			</body>
		</html>
	);
}
