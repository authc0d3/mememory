import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import HomePage from "./HomePage";

test("<HomePage />", async () => {
	const { getByText, getByAltText } = render(<HomePage />);
	await expect.element(getByAltText("MeMemory")).toBeInTheDocument();
	await expect.element(getByText("MeMemory")).toBeInTheDocument();
	await expect.element(getByText("Comenzar")).toBeInTheDocument();
});
