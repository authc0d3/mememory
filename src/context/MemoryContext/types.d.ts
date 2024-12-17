import { PropsWithChildren } from "react";
import { CardId, CardsMap, MatchNumber } from "@/types";

interface MemoryState {
	readonly cards: CardsMap;
	readonly selectedCardId?: CardId;
	readonly matches: MatchNumber;
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
	readonly payload: CardId;
}

export interface ResetGameReducerAction {
	readonly type: MemoryReducerActionType.RESET_GAME;
	readonly payload: MemoryState;
}

export type MemoryReducerAction =
	| FlipCardReducerAction
	| ResetGameReducerAction;

export type MemoryReducer = (
	state: MemoryState,
	action: MemoryReducerAction,
) => MemoryState;

export type MemoryContextProviderProps = PropsWithChildren & {
	readonly initialState?: MemoryState;
};
