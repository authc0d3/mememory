import { FC, useEffect, useMemo, useRef } from "react";
import classNames from "classnames";
import { useMemoryContext } from "@/hooks";
import { getElapsedTimeString } from "@/utils";
import { Card } from "../Card";
import { Modal } from "../Modal";
import styles from "./styles.module.css";

const MemoryBoard: FC = () => {
	const { cards, resetGame, isGameOver, isRestarting, startAt, endAt } =
		useMemoryContext();
	const modalRef = useRef<HTMLDialogElement>(null);

	const elapsedTime = useMemo(
		() => (endAt ? getElapsedTimeString(startAt, endAt) : ""),
		[isGameOver],
	);

	function handleOnCloseModal(): void {
		modalRef.current?.close();
		resetGame?.();
	}

	useEffect(() => {
		if (!isGameOver) return;
		modalRef.current?.showModal();
	}, [isGameOver]);

	return (
		<>
			<div
				className={classNames(styles.board, {
					[styles.restarting]: isRestarting,
				})}
				role="grid"
			>
				{Object.entries(cards).map(([id, cardProps], index) => (
					<Card key={id} id={id} index={index} {...cardProps} />
				))}
			</div>
			<Modal
				ref={modalRef}
				onClose={handleOnCloseModal}
				closeText="Jugar otra vez"
			>
				<div className={styles.gameOver}>
					<h4>¡Completado!</h4>
					<div className={styles.gameStats}>
						<img src="/clock.svg" alt="clock" />
						<span>{elapsedTime}</span>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default MemoryBoard;
