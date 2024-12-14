import { FC, useMemo } from "react";
import { useMemoryContext } from "@/hooks";
import { MAX_CARDS } from "@/data";
import styles from "./styles.module.scss";
import { Star, StarSolid } from "iconoir-react";

const Rate: FC = () => {
	const { attempts, isGameOver } = useMemoryContext();

	const stars = useMemo(
		() => (isGameOver ? Math.floor((MAX_CARDS / attempts) * 10) : 0),
		[isGameOver],
	);

	return (
		<div className={styles.rate} role="group" data-testid="rate">
			{Array.from({ length: 5 }).map((_, index) =>
				index + 1 <= stars ? (
					<StarSolid key={index} data-testid="fill" />
				) : (
					<Star key={index} data-testid="outline" />
				),
			)}
		</div>
	);
};

export default Rate;
