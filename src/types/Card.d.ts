export interface Card {
	readonly value: string;
	readonly isFlipped: boolean;
}

export type CardsMap = Readonly<Record<string, Card>>;
