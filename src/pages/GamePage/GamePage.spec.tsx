import { beforeEach, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { MAX_CARDS } from "@/data";
import i18n from "@/i18n";
import GamePage from "./GamePage";

beforeEach(() => {
	vi.useFakeTimers();
});

test("Render GamePage", async () => {
	const { getByRole } = render(<GamePage />);
	await expect.element(getByRole("grid")).toBeInTheDocument();
});

test("Match fails", async () => {
	const { getByTestId } = render(<GamePage />);
	const cardALoc = getByTestId("original_0");
	const cardBLoc = getByTestId("original_1");

	await expect(cardALoc.element().className.includes("flip")).toBe(false);
	await expect(cardBLoc.element().className.includes("flip")).toBe(false);
});

test("Can't flip more than two cards", async () => {
	const { getByTestId } = render(<GamePage />);
	const cardALoc = getByTestId("original_0");
	const cardBLoc = getByTestId("original_1");
	const cardCLoc = getByTestId("pair_1");

	await cardALoc.click();
	await cardBLoc.click();
	await cardCLoc.click();

	await expect(cardALoc.element().className.includes("flip")).toBe(true);
	await expect(cardBLoc.element().className.includes("flip")).toBe(true);
	await expect(cardCLoc.element().className.includes("flip")).toBe(false);
});

test("Game over & reset", async () => {
	const { getByTestId, getByText } = render(<GamePage />);

	for (let i = 0; i < MAX_CARDS; i++) {
		await getByTestId(`original_${i}`).click();
		await getByTestId(`pair_${i}`).click();
		vi.advanceTimersByTime(1000);
	}

	await expect.element(getByText(i18n.t("Completed!"))).toBeVisible();
	await expect.element(getByText("0:09")).toBeVisible();
	await expect(getByTestId("fill").elements().length).toBe(5);
	await expect.element(getByText(i18n.t("Play again"))).toBeVisible();

	await getByText(i18n.t("Play again")).click();
	await expect(
		getByTestId("original_0").element().className.includes("flip"),
	).toBe(false);
});
