import { createContext } from "react";
import { MemoryContextProps, MemoryState } from "./types";
import { generateShuffledCardsDeck } from "@/utils";

export const getMemoryContextInitialState = (): MemoryState => ({
	cards: generateShuffledCardsDeck(),
	selectedCardIds: [],
	matches: 0,
	startAt: new Date(),
});

export const memoryContextInitialState: MemoryState =
	getMemoryContextInitialState();

export const MemoryContext = createContext<MemoryContextProps>(
	memoryContextInitialState,
);
