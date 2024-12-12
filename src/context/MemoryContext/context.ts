import { createContext } from "react";
import { MemoryContextProps } from "./types";
import { generateShuffledCardsDeck } from "@/utils";

export const memoryContextInitialState: MemoryContextProps = {
	cards: generateShuffledCardsDeck(),
};

export const MemoryContext = createContext<MemoryContextProps>(
	memoryContextInitialState,
);
