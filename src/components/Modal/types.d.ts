import {
	DialogHTMLAttributes,
	ForwardRefExoticComponent,
	RefAttributes,
} from "react";

export type ModalOwnProps = DialogHTMLAttributes<HTMLDialogElement> & {
	readonly closeText?: string;
	readonly onClose?: () => void;
};

export type ModalProps = ForwardRefExoticComponent<
	ModalOwnProps & RefAttributes<HTMLDialogElement>
>;
