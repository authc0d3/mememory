import { BrowserRouter } from "react-router";
import { expect, test } from "vitest";
import i18n from "@/i18n";
import { render } from "vitest-browser-react";
import HomePage from "./HomePage";

test("<HomePage />", async () => {
	const { getByText, getByAltText } = render(
		<BrowserRouter>
			<HomePage />
		</BrowserRouter>,
	);
	await expect.element(getByAltText("MeMemory")).toBeInTheDocument();
	await expect.element(getByText("MeMemory")).toBeInTheDocument();
	await expect.element(getByText(i18n.t("Play"))).toBeInTheDocument();
});
