import { MAX_CARDS } from "@/data";
import { MatchNumber } from "@/types";

export function assertMatchNumber(value: number): asserts value is MatchNumber {
	if (value < 0) throw new Error("Value must be greater than zero");
	if (value > MAX_CARDS)
		throw new Error(`Value must be smaller than ${MAX_CARDS}`);
}
