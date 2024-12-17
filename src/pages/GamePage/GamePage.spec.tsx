import { beforeEach, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { MAX_CARDS } from "@/data";
import i18n from "@/i18n";
import GamePage from "./GamePage";

beforeEach(() => {
	vi.clearAllTimers();
	vi.useFakeTimers();
});

test("Render GamePage", async () => {
	const { getByRole } = render(<GamePage />);
	await expect.element(getByRole("grid")).toBeInTheDocument();
});

test("Match fails", async () => {
	const { getByTestId } = render(<GamePage />);

	await getByTestId("original_0").click();
	await getByTestId("pair_2").click();

	await expect(
		getByTestId("original_0").element().className.includes("flip"),
	).toBe(true);

	vi.advanceTimersByTime(5000);

	await expect.element(getByTestId("original_0")).not.toHaveClass("flip");
	await expect.element(getByTestId("pair_2")).not.toHaveClass("flip");
});

test("Game over & reset", async () => {
	const { getByTestId, getByText } = render(<GamePage />);

	for (let i = 0; i < MAX_CARDS; i++) {
		await getByTestId(`original_${i}`).click();
		await getByTestId(`pair_${i}`).click();
		vi.advanceTimersByTime(1000);
	}

	await expect.element(getByText(i18n.t("Completed!"))).toBeVisible();
	await expect.element(getByTestId("elapsedTime")).toBeVisible();
	await expect(getByTestId("fill").elements().length).toBe(5);
	await expect.element(getByText(i18n.t("Play again"))).toBeVisible();

	vi.advanceTimersByTime(1000);
	await getByText(i18n.t("Play again")).click();
	await expect(
		getByTestId("original_0").element().className.includes("flip"),
	).toBe(false);
});
