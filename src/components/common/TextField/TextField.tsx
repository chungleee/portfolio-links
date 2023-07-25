import { FunctionComponent } from "react";
import { UseFormRegister, FieldPath } from "react-hook-form";
import { FiLink } from "react-icons/fi";
import styles from "./TextField.module.scss";
import { Inputs } from "@/app/page";

interface TextfieldProps {
	defaultValue?: string;
	register: UseFormRegister<Inputs>;
	inputName: FieldPath<Inputs>;
}

const TextField: FunctionComponent<TextfieldProps> = ({
	register,
	inputName,
}) => {
	return (
		<div className={styles.textfield}>
			<FiLink className={styles.textfield_icon} />
			<input {...register(inputName)} type='text' />
		</div>
	);
};

export default TextField;
