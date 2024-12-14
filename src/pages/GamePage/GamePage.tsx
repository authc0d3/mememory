import { FC } from "react";
import { GameOverModal, MemoryBoard } from "@/components";
import { MemoryContextProvider } from "@/context";

const GamePage: FC = () => (
	<MemoryContextProvider>
		<MemoryBoard />
		<GameOverModal />
	</MemoryContextProvider>
);

export default GamePage;
