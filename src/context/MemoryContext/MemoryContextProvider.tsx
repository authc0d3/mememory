import { FC, useReducer, useState } from "react";
import { CardId } from "@/types";
import { MemoryContextProviderProps } from "./types.d";
import { memoryReducer } from "./reducer";
import {
	getMemoryContextInitialState,
	MemoryContext,
	memoryContextInitialState,
} from "./context";
import { flipCardAction, resetGameAction } from "./actions";

const MemoryContextProvider: FC<MemoryContextProviderProps> = ({
	children,
	initialState,
}) => {
	const [state, dispatch] = useReducer(
		memoryReducer,
		initialState ?? memoryContextInitialState,
	);
	const [isRestarting, setIsRestarting] = useState<boolean>(false);

	function flipCard(cardId: CardId): void {
		dispatch(flipCardAction(cardId));
	}

	function resetGame(): void {
		setIsRestarting(true);
		const newGameState = getMemoryContextInitialState();
		dispatch(resetGameAction(newGameState));
		setTimeout(() => setIsRestarting(false));
	}

	return (
		<MemoryContext.Provider
			value={{ ...state, isRestarting, flipCard, resetGame }}
		>
			{children}
		</MemoryContext.Provider>
	);
};

export default MemoryContextProvider;
