import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { useSound } from "@/hooks";
import { FLIP_SOUND } from "@/data";

function TestComponent() {
	const play = useSound(FLIP_SOUND);
	return <button onClick={play} data-testid="btn" />;
}

test("useMemoryContext", async () => {
	const { getByTestId } = render(<TestComponent />);
	await getByTestId("btn").click();
	await expect(HTMLAudioElement.prototype.play).toHaveBeenCalledOnce();
});
