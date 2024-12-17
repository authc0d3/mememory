import { expect, test } from "vitest";
import { assertMatchNumber } from "./numbers.utils";
import { MatchNumber } from "@/types";
import { MAX_CARDS } from "@/data";

test("assertMatchNumber", () => {
	const inValidValues = [-1, MAX_CARDS + 1];
	expect(() => assertMatchNumber(inValidValues[0])).toThrow(
		`Value must be greater than zero`,
	);
	expect(() => assertMatchNumber(inValidValues[1])).toThrow(
		`Value must be smaller than ${MAX_CARDS}`,
	);

	const validValue = 5;
	expect(() => assertMatchNumber(validValue)).not.toThrow();
	expect(validValue as MatchNumber).toBe(validValue);
});
