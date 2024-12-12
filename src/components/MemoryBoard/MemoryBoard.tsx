import { FC } from "react";
import { useMemoryContext } from "@/hooks";
import styles from "./styles.module.css";
import { Card } from "../Card";

const MemoryBoard: FC = () => {
	const { cards } = useMemoryContext();
	return (
		<div className={styles.board} role="grid">
			{Object.entries(cards).map(([id, cardProps], index) => (
				<Card key={id} id={id} index={index} {...cardProps} />
			))}
		</div>
	);
};

export default MemoryBoard;
