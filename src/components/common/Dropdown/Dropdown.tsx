import { useState } from "react";
import styles from "./Dropdown.module.scss";
import Icon from "../Icons/Icon";

const list = ["item 1", "item 2", "item 3"];

const Dropdown = () => {
	const [optionList] = useState(list);
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<a
				role='listbox'
				tabIndex={0}
				onClick={toggleDropdown}
				onKeyDown={(event) => {
					if (event.key === "Enter") {
						toggleDropdown();
					}
				}}
				className={
					isOpen ? `${styles.dropdown} ${styles.active}` : styles.dropdown
				}
			>
				<Icon className={styles.dropdown__left_icon} variant='link' />
				<span>{optionList[0]}</span>
				<Icon
					className={styles.dropdown__down_arrow}
					variant={isOpen ? "up-arrow" : "down-arrow"}
				/>
			</a>
			{isOpen ? (
				<div className={styles.dropdown__option_list}>
					{optionList.map((option) => {
						return (
							<option tabIndex={0} value={option}>
								{option}
							</option>
						);
					})}
				</div>
			) : null}
		</div>
	);
};

export default Dropdown;
