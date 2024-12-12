export interface Card {
	readonly value: string;
	readonly isFlipped: boolean;
	readonly isMatched: boolean;
}

export type CardsMap = Readonly<Record<string, Card>>;
