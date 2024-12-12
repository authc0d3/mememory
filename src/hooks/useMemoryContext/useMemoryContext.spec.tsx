import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { MemoryContextProvider } from "@/context";
import { useMemoryContext } from "@/hooks";

function TestComponent() {
	const { cards } = useMemoryContext();
	return <div>{Object.keys(cards).length}</div>;
}

function WithContextComponent() {
	return (
		<MemoryContextProvider>
			<TestComponent />
		</MemoryContextProvider>
	);
}

test("useMemoryContext", async () => {
	const { getByText } = render(<WithContextComponent />);
	await expect.element(getByText("18")).toBeInTheDocument();
});
