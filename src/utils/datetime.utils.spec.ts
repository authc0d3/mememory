import { expect, test } from "vitest";
import { getElapsedTimeString } from "./datetime.utils";

test("getElapsedTimeString", () => {
	const d1 = new Date("2024-12-13T16:00:00");
	const d2 = new Date("2024-12-13T16:05:07");
	const elapsedTime = getElapsedTimeString(d1, d2);
	expect(elapsedTime).toBe("5:07");
});
