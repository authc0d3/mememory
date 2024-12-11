import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import App from "./App";

test("<App />", async () => {
	const { getByAltText } = render(<App />);
	await expect.element(getByAltText("MeMemory")).toBeInTheDocument();
});
