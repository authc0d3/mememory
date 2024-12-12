import { MAX_CARDS } from "@/data";
import { getMemoryContextInitialState } from "./context";
import { MemoryReducer, MemoryReducerActionType } from "./types.d";

export const memoryReducer: MemoryReducer = (state, action) => {
	const { cards, selectedCardIds, matches } = state;

	switch (action.type) {
		case MemoryReducerActionType.FLIP_CARD: {
			if (
				cards[action.payload].isMatched ||
				selectedCardIds.length >= 2 ||
				selectedCardIds.includes(action.payload)
			) {
				return state;
			}

			return {
				...state,
				selectedCardIds: [...selectedCardIds, action.payload],
				cards: {
					...cards,
					[action.payload]: {
						...cards[action.payload],
						isFlipped: !cards[action.payload].isFlipped,
					},
				},
			};
		}

		case MemoryReducerActionType.CHECK_MATCH: {
			if (selectedCardIds.length < 2) return state;

			const cardA = selectedCardIds[0];
			const cardB = selectedCardIds[1];
			const isMatched = cards[cardA].value === cards[cardB].value;
			const totalMatches = isMatched ? matches + 1 : matches;
			const endAt = totalMatches === MAX_CARDS ? new Date() : undefined;

			return {
				...state,
				selectedCardIds: [],
				matches: totalMatches,
				endAt,
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

		case MemoryReducerActionType.RESET_GAME:
			return getMemoryContextInitialState();
	}
};
