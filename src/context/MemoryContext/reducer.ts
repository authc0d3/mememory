import { MAX_CARDS } from "@/data";
import { MemoryReducer, MemoryReducerActionType } from "./types.d";
import { assertMatchNumber } from "@/utils";

export const memoryReducer: MemoryReducer = (state, action) => {
	const { cards, selectedCardId, matches, attempts, startAt } = state;

	switch (action.type) {
		case MemoryReducerActionType.FLIP_CARD: {
			if (selectedCardId) {
				const cardA = selectedCardId;
				const cardB = action.payload;
				const isMatched = cards[cardA].value === cards[cardB].value;

				const totalAttempts = attempts + 1;
				const totalMatches = isMatched ? matches + 1 : matches;
				assertMatchNumber(totalMatches);

				const endAt = totalMatches === MAX_CARDS ? new Date() : undefined;
				const isGameOver = !!endAt;

				return {
					...state,
					selectedCardId: undefined,
					attempts: totalAttempts,
					matches: totalMatches,
					endAt,
					isGameOver,
					cards: {
						...cards,
						[cardA]: {
							...cards[cardA],
							isFlipped: isMatched,
							isMatched,
						},
						[cardB]: {
							...cards[cardB],
							isFlipped: isMatched,
							isMatched,
						},
					},
				};
			}

			if (
				cards[action.payload].isMatched ||
				selectedCardId === action.payload
			) {
				return state;
			}

			return {
				...state,
				selectedCardId: action.payload,
				startAt: startAt ?? new Date(),
				cards: {
					...cards,
					[action.payload]: {
						...cards[action.payload],
						isFlipped: !cards[action.payload].isFlipped,
					},
				},
			};
		}

		case MemoryReducerActionType.RESET_GAME:
			return action.payload;
	}
};
