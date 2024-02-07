// import { FunctionComponent, useState } from "react";
// import styles from "./Dropdown.module.scss";
// import Icon from "../Icons/Icon";
// import { Control, FieldPath, UseFormSetValue, useForm } from "react-hook-form";
// import { IFormInputs } from "@/app/page";

// interface IDropdownProps {
// 	control: Control<IFormInputs>;
// 	name: FieldPath<IFormInputs>;
// 	optionList: Array<string>;
// 	setValueHandler: UseFormSetValue<IFormInputs>;
// }

// const Dropdown: FunctionComponent<IDropdownProps> = ({
// 	control,
// 	name,
// 	optionList,
// 	setValueHandler,
// }) => {
// 	const [isOpen, setIsOpen] = useState(false);
// 	const [dropdownValue, setDropdownValue] = useState("");
// 	const { register } = control;

// 	const toggleDropdown = () => {
// 		setIsOpen(!isOpen);
// 	};

// 	return (
// 		<>
// 			<div
// 				tabIndex={0}
// 				onKeyDown={(event) => {
// 					if (event.key === "Enter") {
// 						toggleDropdown();
// 					}
// 				}}
// 				className={
// 					isOpen ? `${styles.dropdown} ${styles.active}` : `${styles.dropdown}`
// 				}
// 				onClick={toggleDropdown}
// 			>
// 				<Icon className={styles.dropdown__left_icon} variant='link' />
// 				<input
// 					{...register(name)}
// 					tabIndex={-1}
// 					value={optionList[0] || dropdownValue}
// 					type='text'
// 					readOnly={true}
// 				/>
// 				<Icon
// 					className={styles.dropdown__arrow}
// 					variant={isOpen ? "up-arrow" : "down-arrow"}
// 				/>
// 			</div>
// 			{isOpen ? (
// 				<div className={styles.dropdown__option_list}>
// 					{optionList.map((option) => {
// 						return (
// 							<option
// 								key={option}
// 								tabIndex={0}
// 								onKeyDown={(event) => {
// 									if (event.key === "Enter") {
// 										setValueHandler("dropdown", option);
// 										setDropdownValue(option);
// 										toggleDropdown();
// 									}
// 								}}
// 								onClick={() => {
// 									setValueHandler("dropdown", option);
// 									setDropdownValue(option);
// 									toggleDropdown();
// 								}}
// 							>
// 								{option}
// 							</option>
// 						);
// 					})}
// 				</div>
// 			) : null}
// 		</>
// 	);
// };

// export default Dropdown;
