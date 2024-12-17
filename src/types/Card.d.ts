export interface Card {
	readonly value: string;
	readonly isFlipped: boolean;
	readonly isMatched: boolean;
}

export type CardId = string;

export type CardsMap = Readonly<Record<CardId, Card>>;
