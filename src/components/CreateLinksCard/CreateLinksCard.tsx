import React from "react";
import styles from "./CreateLinksCard.module.scss";
import TextField from "../common/TextField/TextField";

type CreateLinkCardProps = {
	cardIndex: number;
	remove: (index?: number | number[]) => void;
};

const CreateLinksCard = ({ cardIndex, remove }: CreateLinkCardProps) => {
	return (
		<div className={styles.create_links_card}>
			<div>
				<span>link #1</span>
				<button onClick={() => remove(cardIndex)}>remove</button>
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
