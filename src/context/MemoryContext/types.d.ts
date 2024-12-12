import { PropsWithChildren } from "react";
import { CardsMap } from "@/types";

interface MemoryState {
	readonly cards: CardsMap;
}

interface MemoryContextProps extends MemoryState {
	readonly flipCard?: (id: string) => void;
	readonly isGameOver?: () => boolean;
	readonly resetGame?: () => void;
}

export enum MemoryReducerActionType {
	FLIP_CARD = "FLIP_CARD",
	RESET_GAME = "RESET_GAME",
}

export interface FlipCardReducerAction {
	readonly type: MemoryReducerActionType.FLIP_CARD;
	readonly payload: string;
}

export interface ResetGameReducerAction {
	readonly type: MemoryReducerActionType.RESET_GAME;
}

export type MemoryReducerAction =
	| FlipCardReducerAction
	| ResetGameReducerAction;

export type MemoryReducer = (
	state: MemoryState,
	action: MemoryReducerAction,
) => MemoryState;

export type MemoryContextProviderProps = PropsWithChildren;
