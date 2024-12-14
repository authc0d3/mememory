import { FC } from "react";
import classNames from "classnames";
import { useMemoryContext } from "@/hooks";
import { Card } from "../Card";
import styles from "./styles.module.scss";

const MemoryBoard: FC = () => {
	const { cards, isRestarting } = useMemoryContext();

	return (
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
	);
};

export default MemoryBoard;
