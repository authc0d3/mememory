import { FC, useEffect, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { GAME_OVER_SOUND, FLIP_TIMEOUT } from "@/data";
import { useMemoryContext, useSound } from "@/hooks";
import { getElapsedTimeString } from "@/utils";
import { Button } from "../Button";
import { Rate } from "../Rate";
import { GameOverModalProps } from "./types";
import styles from "./styles.module.scss";

const GameOverModal: FC<GameOverModalProps> = ({ className, ...props }) => {
	const { t } = useTranslation();
	const { resetGame, isGameOver, startAt, endAt } = useMemoryContext();
	const dialogRef = useRef<HTMLDialogElement>(null);
	const playGameOverSound = useSound(GAME_OVER_SOUND);

	const elapsedTime = useMemo(
		() => (startAt && endAt ? getElapsedTimeString(startAt, endAt) : ""),
		[isGameOver],
	);

	function handleGameOver(): void {
		if (!isGameOver) {
			dialogRef.current?.close();
			return;
		}

		setTimeout(() => {
			dialogRef.current?.showModal();
			playGameOverSound();
		}, FLIP_TIMEOUT);
	}

	useEffect(handleGameOver, [isGameOver]);

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
						<span data-testid="elapsedTime">{elapsedTime}</span>
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
