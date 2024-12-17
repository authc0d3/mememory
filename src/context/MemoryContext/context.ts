import { createContext } from "react";
import { MemoryContextProps, MemoryState } from "./types";
import { generateShuffledCardsDeck } from "@/utils";
import { MatchNumber } from "@/types";

export const getMemoryContextInitialState = (): MemoryState => ({
	cards: generateShuffledCardsDeck(),
	attempts: 0,
	matches: 0 as MatchNumber,
	isGameOver: false,
});

export const memoryContextInitialState: MemoryState =
	getMemoryContextInitialState();

export const MemoryContext = createContext<MemoryContextProps>(
	memoryContextInitialState,
);
