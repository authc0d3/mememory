import { FC, useEffect, useReducer } from "react";
import { MemoryContextProviderProps } from "./types.d";
import { memoryReducer } from "./reducer";
import { MemoryContext, memoryContextInitialState } from "./context";
import { checkMatchAction, flipCardAction } from "./actions";
import { CHECK_MATCH_TIMEOUT } from "@/data";

const MemoryContextProvider: FC<MemoryContextProviderProps> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(
		memoryReducer,
		memoryContextInitialState,
	);

	function flipCard(cardId: string): void {
		dispatch(flipCardAction(cardId));
	}

	function checkMatch(): void {
		if (state.selectedCardIds.length < 2) return;
		setTimeout(() => {
			dispatch(checkMatchAction());
		}, CHECK_MATCH_TIMEOUT);
	}

	useEffect(checkMatch, [state.selectedCardIds.length]);

	return (
		<MemoryContext.Provider value={{ ...state, flipCard }}>
			{children}
		</MemoryContext.Provider>
	);
};

export default MemoryContextProvider;
