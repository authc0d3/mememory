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

test("<MemoryBoard />", async () => {
	const { getByRole } = render(<TestComponent />);
	await expect.element(getByRole("grid")).toBeInTheDocument();
	await expect(getByRole("cell").elements().length).toBe(MAX_CARDS * 2);
});
