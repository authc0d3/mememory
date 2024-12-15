import { FC, useEffect } from "react";
import classNames from "classnames";
import { useMemoryContext, useSound } from "@/hooks";
import { CARD_BACK_IMG, FLIP_SOUND } from "@/data";
import { CardProps } from "./types";
import styles from "./styles.module.scss";

const Card: FC<CardProps> = ({ id, index, isFlipped, value }) => {
	const { flipCard, isRestarting, startAt } = useMemoryContext();
	const playFlipSound = useSound(FLIP_SOUND);

	function handleOnClick(): void {
		if (isFlipped) return;
		flipCard?.(id);
	}

	useEffect(() => {
		if (!startAt || isRestarting) return;
		playFlipSound();
	}, [isFlipped]);

	return (
		<div
			role="cell"
			className={classNames(styles.card, {
				[styles.flip]: isFlipped,
			})}
			onClick={handleOnClick}
			data-testid={id}
		>
			<div className={styles.cardInner}>
				<div className={styles.cardBack}>
					<img src={CARD_BACK_IMG} alt="back" />
					{index + 1}
				</div>
				<div className={styles.cardFront}>
					<img src={value} alt="front" />
				</div>
			</div>
		</div>
	);
};

export default Card;
