import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { MemoryContextProvider } from "@/context";
import { useMemoryContext } from "@/hooks";
import Card from "./Card";

function TestComponent() {
	const { cards } = useMemoryContext();
	const firstCardId = Object.keys(cards).at(0);
	return (
		<Card id={String(firstCardId)} index={0} {...cards[String(firstCardId)]} />
	);
}

function WithContextComponent() {
	return (
		<MemoryContextProvider>
			<TestComponent />
		</MemoryContextProvider>
	);
}

test("<Card />", async () => {
	const { getByRole, getByText, getByAltText } = render(
		<WithContextComponent />,
	);
	const cardLoc = getByRole("cell");
	await expect.element(cardLoc).toBeInTheDocument();
	await expect.element(getByText("1")).toBeInTheDocument();
	await expect.element(getByAltText("back")).toBeInTheDocument();
	await expect.element(getByAltText("front")).toBeInTheDocument();
	await expect(getByRole("cell").element().className.includes("flip")).toBe(
		false,
	);

	await cardLoc.click();
	await expect(getByRole("cell").element().className.includes("flip")).toBe(
		true,
	);
});
