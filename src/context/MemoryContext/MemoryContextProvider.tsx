import { FC, useEffect, useReducer, useState } from "react";
import { MemoryContextProviderProps } from "./types.d";
import { memoryReducer } from "./reducer";
import { MemoryContext, memoryContextInitialState } from "./context";
import { checkMatchAction, flipCardAction, resetGameAction } from "./actions";
import { CHECK_MATCH_TIMEOUT } from "@/data";

const MemoryContextProvider: FC<MemoryContextProviderProps> = ({
	children,
	initialState,
}) => {
	const [state, dispatch] = useReducer(
		memoryReducer,
		initialState ?? memoryContextInitialState,
	);
	const [isRestarting, setIsRestarting] = useState<boolean>(false);

	function flipCard(cardId: string): void {
		dispatch(flipCardAction(cardId));
	}

	function checkMatch(): void {
		if (state.selectedCardIds.length < 2) return;
		setTimeout(() => {
			dispatch(checkMatchAction());
		}, CHECK_MATCH_TIMEOUT);
	}

	function resetGame(): void {
		setIsRestarting(true);
		dispatch(resetGameAction());
		setTimeout(() => setIsRestarting(false));
	}

	useEffect(checkMatch, [state.selectedCardIds.length]);

	return (
		<MemoryContext.Provider
			value={{ ...state, isRestarting, flipCard, resetGame }}
		>
			{children}
		</MemoryContext.Provider>
	);
};

export default MemoryContextProvider;
