import { MemoryReducer, MemoryReducerActionType } from "./types.d";

export const memoryReducer: MemoryReducer = (state, action) => {
	switch (action.type) {
		case MemoryReducerActionType.FLIP_CARD:
			return {
				...state,
				cards: {
					...state.cards,
					[action.payload]: {
						...state.cards[action.payload],
						isFlipped: !state.cards[action.payload].isFlipped,
					},
				},
			};

		case MemoryReducerActionType.RESET_GAME:
			return state;
	}
};
