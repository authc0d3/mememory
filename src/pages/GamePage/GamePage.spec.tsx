import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import GamePage from "./GamePage";

test("<GamePage />", async () => {
	const { getByRole } = render(<GamePage />);
	await expect.element(getByRole("grid")).toBeInTheDocument();
});
