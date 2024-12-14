import { expect, test } from "vitest";
import { MAX_CARDS } from "@/data";
import { memoryReducer } from "./reducer";
import { memoryContextInitialState } from "./context";
import { MemoryReducerActionType } from "./types.d";

test("memoryReducer", async () => {
	let memoryState = memoryReducer(memoryContextInitialState, {
		type: MemoryReducerActionType.FLIP_CARD,
		payload: "original_0",
	});
	await expect(memoryState.cards["original_0"].isFlipped).toBe(true);

	// Flip & match fails
	memoryState = memoryReducer(memoryState, {
		type: MemoryReducerActionType.FLIP_CARD,
		payload: "pair_1",
	});
	await expect(memoryState.cards["pair_1"].isFlipped).toBe(true);

	memoryState = memoryReducer(memoryState, {
		type: MemoryReducerActionType.CHECK_MATCH,
	});
	await expect(memoryState.cards["original_0"].isFlipped).toBe(false);
	await expect(memoryState.cards["pair_1"].isFlipped).toBe(false);
	await expect(memoryState.attempts).toBe(1);

	// Game over
	for (let i = 0; i < MAX_CARDS; i++) {
		memoryState = memoryReducer(memoryState, {
			type: MemoryReducerActionType.FLIP_CARD,
			payload: `original_${i}`,
		});
		memoryState = memoryReducer(memoryState, {
			type: MemoryReducerActionType.FLIP_CARD,
			payload: `pair_${i}`,
		});
		memoryState = memoryReducer(memoryState, {
			type: MemoryReducerActionType.CHECK_MATCH,
		});
	}
	await expect(memoryState.endAt).toBeTruthy();
	await expect(memoryState.isGameOver).toBeTruthy();
	await expect(memoryState.attempts).toBe(10);
	await expect(memoryState.matches).toBe(MAX_CARDS);

	// Reset game
	memoryState = memoryReducer(memoryState, {
		type: MemoryReducerActionType.RESET_GAME,
	});
	const isSomeCardFlipped = Object.values(memoryState.cards).some(
		({ isFlipped }) => isFlipped,
	);
	await expect(isSomeCardFlipped).toBe(false);
	await expect(memoryState.endAt).toBeFalsy();
	await expect(memoryState.isGameOver).toBeFalsy();
	await expect(memoryState.attempts).toBe(0);
	await expect(memoryState.matches).toBe(0);
});
