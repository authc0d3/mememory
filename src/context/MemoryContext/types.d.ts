import { PropsWithChildren } from "react";
import { CardsMap } from "@/types";

interface MemoryState {
	readonly cards: CardsMap;
	readonly selectedCardIds: readonly string[];
	readonly matches: number;
	readonly attempts: number;
	readonly isGameOver: boolean;
	readonly startAt?: Date;
	readonly endAt?: Date;
}

interface MemoryContextProps extends MemoryState {
	readonly isRestarting?: boolean;
	readonly isGameOver?: boolean;
	readonly flipCard?: (id: string) => void;
	readonly resetGame?: () => void;
}

export enum MemoryReducerActionType {
	FLIP_CARD = "FLIP_CARD",
	CHECK_MATCH = "CHECK_MATCH",
	RESET_GAME = "RESET_GAME",
}

export interface FlipCardReducerAction {
	readonly type: MemoryReducerActionType.FLIP_CARD;
	readonly payload: string;
}

export interface CheckMatchReducerAction {
	readonly type: MemoryReducerActionType.CHECK_MATCH;
}

export interface ResetGameReducerAction {
	readonly type: MemoryReducerActionType.RESET_GAME;
}

export type MemoryReducerAction =
	| FlipCardReducerAction
	| CheckMatchReducerAction
	| ResetGameReducerAction;

export type MemoryReducer = (
	state: MemoryState,
	action: MemoryReducerAction,
) => MemoryState;

export type MemoryContextProviderProps = PropsWithChildren & {
	readonly initialState?: MemoryState;
};
