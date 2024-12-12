import { CARDS_FOLDER, MAX_CARDS } from "@/data/constants";
import { CardsMap } from "@/types";
import { default as shuffle } from "lodash/shuffle";

export const generateCards = (prefix: string): CardsMap =>
	Array.from({ length: MAX_CARDS }).reduce<CardsMap>(
		(acc, _, index) => ({
			...acc,
			[`${prefix}_${index}`]: {
				value: `${CARDS_FOLDER}/${index}.png`,
				isFlipped: false,
			},
		}),
		{},
	);

export function generateShuffledCardsDeck(): CardsMap {
	const cards = {
		...generateCards("original"),
		...generateCards("pair"),
	};

	const shuffledKeys = shuffle(Object.keys(cards));
	const shuffledCards = shuffledKeys.reduce<CardsMap>(
		(acc, key) => ({ ...acc, [key]: cards[key] }),
		{},
	);

	return shuffledCards;
}
