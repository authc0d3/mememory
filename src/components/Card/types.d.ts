import { Card } from "@/types";

export interface CardProps extends Card {
	readonly id: string;
	readonly index: number;
}
