import { expect, test } from "vitest";
import { generateCards, generateShuffledCardsDeck } from "./cards.utils";
import { CARDS_FOLDER, MAX_CARDS } from "@/data";

test("generateCards", () => {
	const cards = generateCards("test");
	expect(Object.keys(cards).length).toBe(MAX_CARDS);
	expect(cards["test_0"].value).toBe(`${CARDS_FOLDER}/0.png`);
	expect(cards["test_0"].isFlipped).toBe(false);
});

test("generateShuffledCardsDeck", () => {
	const cards = generateShuffledCardsDeck();
	expect(Object.keys(cards).length).toBe(MAX_CARDS * 2);
	expect(cards["original_0"].value).toBe(cards["pair_0"].value);
	expect(Object.values(cards).filter(({ isFlipped }) => isFlipped).length).toBe(
		0,
	);
	expect(Object.values(cards).filter(({ isMatched }) => isMatched).length).toBe(
		0,
	);
});
