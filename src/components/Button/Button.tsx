import { FC } from "react";
import { ButtonProps } from "./types";
import styles from "./styles.module.css";

const Button: FC<ButtonProps> = ({ children, ...btnProps }) => (
	<button className={styles.btn} {...btnProps}>
		{children}
	</button>
);

export default Button;
