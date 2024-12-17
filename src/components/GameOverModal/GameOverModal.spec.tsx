import { beforeEach, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import {
	memoryContextInitialState,
	MemoryContextProvider,
	MemoryState,
} from "@/context";
import i18n from "@/i18n";
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

	vi.advanceTimersByTime(1000);
	await expect(HTMLAudioElement.prototype.play).toHaveBeenCalledOnce();
	await expect.element(getByTestId("modal")).toBeVisible();
	await expect.element(getByText(i18n.t("Completed!"))).toBeVisible();
	await expect.element(getByText("1:15")).toBeVisible();
	await expect.element(getByTestId("rate")).toBeVisible();
	await expect.element(getByText(i18n.t("Play again"))).toBeVisible();

	await getByText(i18n.t("Play again")).click();
	await expect.element(getByTestId("modal")).not.toBeVisible();
});
