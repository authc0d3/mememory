import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import GamePage from "./GamePage";

test("<GamePage />", async () => {
	const { getByText } = render(<GamePage />);
	await expect.element(getByText("The game...")).toBeInTheDocument();
});
