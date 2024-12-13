import { beforeEach, expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import { MemoryContextProvider } from "@/context";
import { MAX_CARDS } from "@/data";
import MemoryBoard from "./MemoryBoard";

function TestComponent() {
	return (
		<MemoryContextProvider>
			<MemoryBoard />
		</MemoryContextProvider>
	);
}

beforeEach(() => {
	vi.useFakeTimers();
});

test("Memory board render", async () => {
	const { getByRole } = render(<TestComponent />);
	await expect.element(getByRole("grid")).toBeInTheDocument();
	await expect(getByRole("cell").elements().length).toBe(MAX_CARDS * 2);
});

test("Match fails", async () => {
	const { getByTestId } = render(<TestComponent />);
	const cardALoc = getByTestId("original_0");
	const cardBLoc = getByTestId("original_1");

	// vi.advanceTimersByTime(0);
	await expect(cardALoc.element().className.includes("flip")).toBe(false);
	await expect(cardBLoc.element().className.includes("flip")).toBe(false);
});

test("Can't flip more than two cards", async () => {
	const { getByTestId } = render(<TestComponent />);
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
	const { getByTestId, getByText } = render(<TestComponent />);

	for (let i = 0; i < MAX_CARDS; i++) {
		await getByTestId(`original_${i}`).click();
		await getByTestId(`pair_${i}`).click();
		vi.advanceTimersByTime(1000);
	}

	await expect.element(getByText("¡Completado!")).toBeVisible();
	await expect.element(getByText("¡Completado!")).toBeVisible();
	await expect.element(getByText("Jugar otra vez")).toBeVisible();

	await getByText("Jugar otra vez").click();
	await expect(
		getByTestId("original_0").element().className.includes("flip"),
	).toBe(false);
});
