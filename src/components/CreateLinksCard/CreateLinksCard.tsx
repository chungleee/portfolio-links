import React from "react";
import styles from "./CreateLinksCard.module.scss";
import TextField from "../common/TextField/TextField";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { TCreateLinksValues } from "@/app/dashboard/model";

type FolioLinkErrors = {
	projectName: string;
	projectLink: string;
};

type CreateLinkCardProps = {
	cardIndex: number;
	remove: (index?: number | number[]) => void;
	errors: FieldErrors<FolioLinkErrors> | undefined;
	register: UseFormRegister<TCreateLinksValues>;
};

const CreateLinksCard = ({
	cardIndex,
	remove,
	errors,
	register,
}: CreateLinkCardProps) => {
	return (
		<div className={styles.create_links_card}>
			<div>
				<span>link #{`${cardIndex + 1}`}</span>
				<button onClick={() => remove(cardIndex)}>remove</button>
			</div>
			<TextField
				label='Project name'
				iconVariant='zap'
				placeholder='Enter the name of your project'
				inputContainerClassName={styles.create_links_card__textfields}
				{...register(`foliolinks.${cardIndex}.projectName`)}
				error={errors?.projectName}
			/>
			<TextField
				label='Link'
				iconVariant='link'
				placeholder='e.g. https//www.github.com/project'
				inputContainerClassName={styles.create_links_card__textfields}
				{...register(`foliolinks.${cardIndex}.projectLink`)}
				error={errors?.projectLink}
			/>
		</div>
	);
};

export default CreateLinksCard;
