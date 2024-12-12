import { FC } from "react";
import classNames from "classnames";
import { useMemoryContext } from "@/hooks";
import { CARD_BACK_IMG } from "@/data";
import { CardProps } from "./types";
import styles from "./styles.module.css";

const Card: FC<CardProps> = ({ id, index, isFlipped, value }) => {
	const { flipCard } = useMemoryContext();

	function handleOnClick(): void {
		flipCard?.(id);
	}

	return (
		<div
			role="cell"
			className={classNames(styles.card, {
				[styles.flip]: isFlipped,
			})}
			onClick={handleOnClick}
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
