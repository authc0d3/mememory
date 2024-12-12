import { FC } from "react";
import { MemoryBoard } from "@/components";
import { MemoryContextProvider } from "@/context";

const GamePage: FC = () => (
	<MemoryContextProvider>
		<MemoryBoard />
	</MemoryContextProvider>
);

export default GamePage;
