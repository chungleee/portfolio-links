"use client";
import Button from "@/components/common/Button/Button";
import styles from "./page.module.scss";
import Image from "next/image";
import ipadIllustration from "../../../public/images/illustration-empty.svg";
import { useForm, useFieldArray } from "react-hook-form";
import CreateLinksCard from "@/components/CreateLinksCard/CreateLinksCard";
import { useRef } from "react";
import { flushSync } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { TCreateLinksValues, createLinkSchema } from "./model";

const Dashboard = () => {
	const ulRef = useRef<HTMLUListElement | null>(null);

	const {
		control,
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<TCreateLinksValues>({
		resolver: zodResolver(createLinkSchema),
	});

	const { fields, append, remove } = useFieldArray({
		name: "foliolinks",
		control,
	});

	const handleAddNewLink = () => {
		flushSync(() => {
			append({ projectName: "", projectLink: "" });
		});

		ulRef.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
	};

	const handleSave = (data: TCreateLinksValues) => {
		console.log("data: ", data);
	};

	return (
		<div className={styles.dashboard}>
			<section>
				<p>
					Add/edit/remove links below and then share all your links with the
					world!
				</p>
				<h2>Customize your links</h2>
				<Button onClick={handleAddNewLink} variant='secondary'>
					+ Add new link
				</Button>
			</section>

			<section className={styles.dashboard_create__container}>
				<ul ref={ulRef}>
					{fields.length ? (
						<>
							{fields.map((field, index) => {
								return (
									<li key={field.id}>
										<CreateLinksCard
											cardIndex={index}
											remove={remove}
											errors={errors.foliolinks?.[index]}
											register={register}
										/>
									</li>
								);
							})}
						</>
					) : (
						<AddLinkInfo />
					)}
				</ul>
			</section>

			<section>
				<Button
					onClick={handleSubmit(handleSave)}
					type='submit'
					disabled={fields.length ? false : true}
					variant='default'
				>
					Save
				</Button>
			</section>
		</div>
	);
};

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

export default Dashboard;
