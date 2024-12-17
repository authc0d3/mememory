import { Card, CardId } from "@/types";

export interface CardProps extends Card {
	readonly id: CardId;
	readonly index: number;
}
