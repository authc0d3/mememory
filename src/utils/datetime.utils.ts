export function getElapsedTimeString(from: Date, to: Date): string {
	const diffInMilliseconds = to.getTime() - from.getTime();

	const totalSeconds = Math.floor(diffInMilliseconds / 1000);
	const minutes = Math.floor(totalSeconds / 60);
	const seconds = totalSeconds % 60;

	return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}
