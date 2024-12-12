import { useContext } from "react";
import { MemoryContext, MemoryContextProps } from "@/context";

export const useMemoryContext = (): MemoryContextProps =>
	useContext(MemoryContext);
