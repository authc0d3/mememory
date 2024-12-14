import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import {
	memoryContextInitialState,
	MemoryContextProvider,
	MemoryState,
} from "@/context";
import Rate from "./Rate";

function TestComponent() {
	const initialState: MemoryState = {
		...memoryContextInitialState,
		attempts: 30,
		isGameOver: true,
	};
	return (
		<MemoryContextProvider initialState={initialState}>
			<Rate />
		</MemoryContextProvider>
	);
}

test("<Rate />", async () => {
	const { getByTestId } = render(<TestComponent />);
	await expect(getByTestId("fill").elements().length).toBe(3);
	await expect(getByTestId("outline").elements().length).toBe(2);
});
