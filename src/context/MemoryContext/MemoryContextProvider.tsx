import { FC, useReducer } from "react";
import { MemoryContextProviderProps } from "./types.d";
import { memoryReducer } from "./reducer";
import { MemoryContext, memoryContextInitialState } from "./context";
import { flipCardAction } from "./actions";

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

	return (
		<MemoryContext.Provider value={{ ...state, flipCard }}>
			{children}
		</MemoryContext.Provider>
	);
};

export default MemoryContextProvider;
