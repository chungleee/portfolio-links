"use client";
import Button from "@/components/common/Button/Button";
import styles from "./page.module.scss";
import Image from "next/image";
import ipadIllustration from "../../../public/images/illustration-empty.svg";
import { useForm, useFieldArray } from "react-hook-form";
import TextField from "@/components/common/TextField/TextField";
import CreateLinksCard from "@/components/CreateLinksCard/CreateLinksCard";

const AddLinkInfo = () => {
	return (
		<div className={styles.dashboard_create__container_add__link}>
			<div>
				<Image
					src={ipadIllustration}
					alt='Illustration of a mobile device'
					className={styles.dashboard_create__container_add__link__image}
				/>
			</div>
			<div>
				<p>
					Use the "Add new link" button to get started. Once you have more than
					one link, you can reorder and edit them. We're here to help you share
					your profiles with everyone!
				</p>
				<h2>Let's get you started</h2>
			</div>
		</div>
	);
};

const Dashboard = () => {
	const { control, register } = useForm();
	const { fields, append, remove } = useFieldArray({
		control,
		name: "foliolinks",
	});

	console.log("fields length: ", fields.length);

	return (
		<div className={styles.dashboard}>
			<section>
				<p>
					Add/edit/remove links below and then share all your links with the
					world!
				</p>
				<h2>Customize your links</h2>
				<Button
					onClick={() => {
						append({ projectName: "", projectLink: "" });
					}}
					variant='secondary'
				>
					+ Add new link
				</Button>
			</section>

			<section className={styles.dashboard_create__container}>
				{fields.length ? (
					<ul>
						{fields.map((field, index) => {
							return (
								<li key={field.id}>
									<CreateLinksCard />
								</li>
							);
						})}
					</ul>
				) : (
					<AddLinkInfo />
				)}
			</section>

			<section>
				<Button disabled variant='default'>
					Save
				</Button>
			</section>
		</div>
	);
};

export default Dashboard;
