import {
	FlipCardReducerAction,
	MemoryReducerActionType,
	ResetGameReducerAction,
} from "./types.d";

export function flipCardAction(payload: string): FlipCardReducerAction {
	return {
		type: MemoryReducerActionType.FLIP_CARD,
		payload,
	};
}

export function resetGameAction(): ResetGameReducerAction {
	return { type: MemoryReducerActionType.RESET_GAME };
}
