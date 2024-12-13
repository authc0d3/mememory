import { forwardRef } from "react";
import classNames from "classnames";
import { Button } from "../Button";
import { ModalProps } from "./types";
import styles from "./styles.module.scss";

const Modal: ModalProps = forwardRef(
	({ children, className, closeText, onClose, ...dialogProps }, ref) => (
		<dialog
			ref={ref}
			className={classNames(styles.dialog, className)}
			{...dialogProps}
		>
			<div className={styles.dialogContent}>{children}</div>
			<div className={styles.dialogFooter}>
				{onClose && <Button onClick={onClose}>{closeText ?? "Cerrar"}</Button>}
			</div>
		</dialog>
	),
);

export default Modal;
