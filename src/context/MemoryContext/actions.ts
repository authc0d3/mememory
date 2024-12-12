import {
	CheckMatchReducerAction,
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

export function checkMatchAction(): CheckMatchReducerAction {
	return {
		type: MemoryReducerActionType.CHECK_MATCH,
	};
}

export function resetGameAction(): ResetGameReducerAction {
	return { type: MemoryReducerActionType.RESET_GAME };
}
