import { FC, useEffect, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { useMemoryContext } from "@/hooks";
import { getElapsedTimeString } from "@/utils";
import { Button } from "../Button";
import { Rate } from "../Rate";
import { GameOverModalProps } from "./types";
import styles from "./styles.module.scss";

const GameOverModal: FC<GameOverModalProps> = ({ className, ...props }) => {
	const { t } = useTranslation();
	const { resetGame, isGameOver, startAt, endAt } = useMemoryContext();
	const dialogRef = useRef<HTMLDialogElement>(null);

	const elapsedTime = useMemo(
		() => (endAt ? getElapsedTimeString(startAt, endAt) : ""),
		[isGameOver],
	);

	useEffect(() => {
		if (!isGameOver) {
			dialogRef.current?.close();
			return;
		}
		dialogRef.current?.showModal();
	}, [isGameOver]);

	return (
		<dialog
			ref={dialogRef}
			className={classNames(styles.dialog, className)}
			data-testid="modal"
			{...props}
		>
			<div className={styles.dialogContent}>
				<div className={styles.gameResume}>
					<h4>{t("Completed!")}</h4>
					<div className={styles.gameTime}>
						<img src="/clock.svg" alt="clock" />
						<span>{elapsedTime}</span>
					</div>
				</div>
				<Rate />
			</div>
			<div className={styles.dialogFooter}>
				<Button onClick={resetGame}>{t("Play again")}</Button>
			</div>
		</dialog>
	);
};

export default GameOverModal;
