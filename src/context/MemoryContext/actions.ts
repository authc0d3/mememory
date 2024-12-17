import { CardId } from "@/types";
import {
	FlipCardReducerAction,
	MemoryReducerActionType,
	MemoryState,
	ResetGameReducerAction,
} from "./types.d";

export function flipCardAction(payload: CardId): FlipCardReducerAction {
	return {
		type: MemoryReducerActionType.FLIP_CARD,
		payload,
	};
}

export function resetGameAction(payload: MemoryState): ResetGameReducerAction {
	return { type: MemoryReducerActionType.RESET_GAME, payload };
}
