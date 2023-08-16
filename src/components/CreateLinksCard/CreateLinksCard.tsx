import React from "react";
import styles from "./CreateLinksCard.module.scss";
import TextField from "../common/TextField/TextField";

const CreateLinksCard = () => {
	return (
		<div className={styles.create_links_card}>
			<div>
				<span>link #1</span>
				<button>remove</button>
			</div>
			<TextField
				label='Project name'
				iconVariant='zap'
				placeholder='Enter the name of your project'
				inputContainerClassName={styles.create_links_card__textfields}
			/>
			<TextField
				label='Link'
				iconVariant='link'
				placeholder='e.g. https//www.github.com/project'
				inputContainerClassName={styles.create_links_card__textfields}
			/>
		</div>
	);
};

export default CreateLinksCard;
