import { useState } from "react";
import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import Button from "./Button";

function TestComponent() {
	const [clicked, setClicked] = useState(false);
	return (
		<>
			<div>{clicked ? "World!" : "Hello!"}</div>
			<Button onClick={() => setClicked(true)}>Click</Button>
		</>
	);
}

test("<Button />", async () => {
	const { getByText } = render(<TestComponent />);
	await expect.element(getByText("Hello!")).toBeInTheDocument();

	const buttonLoc = getByText("Click");
	await expect.element(buttonLoc).toBeEnabled();
	await expect.element(buttonLoc).toBeInTheDocument();

	await buttonLoc.click();
	await expect.element(getByText("World!")).toBeInTheDocument();
});
