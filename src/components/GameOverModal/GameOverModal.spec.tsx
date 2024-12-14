import { beforeEach, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import {
	memoryContextInitialState,
	MemoryContextProvider,
	MemoryState,
} from "@/context";
import GameOverModal from "./GameOverModal";

function TestComponent() {
	const initialState: MemoryState = {
		...memoryContextInitialState,
		attempts: 18,
		isGameOver: true,
		startAt: new Date("2024-12-14T16:00:00"),
		endAt: new Date("2024-12-14T16:01:15"),
	};
	return (
		<MemoryContextProvider initialState={initialState}>
			<GameOverModal />
		</MemoryContextProvider>
	);
}

beforeEach(() => {
	vi.useFakeTimers();
});

test("<GameOverModal />", async () => {
	const { getByTestId, getByText } = render(<TestComponent />);

	await expect.element(getByTestId("modal")).toBeVisible();
	await expect.element(getByText("¡Completado!")).toBeVisible();
	await expect.element(getByText("1:15")).toBeVisible();
	await expect.element(getByTestId("rate")).toBeVisible();
	await expect.element(getByText("Jugar otra vez")).toBeVisible();

	await getByText("Jugar otra vez").click();
	await expect.element(getByTestId("modal")).not.toBeVisible();
});
