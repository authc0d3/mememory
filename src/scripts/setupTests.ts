import { beforeEach, vi } from "vitest";
import "@/i18n";

beforeEach(() => {
	HTMLAudioElement.prototype.play = vi.fn();
});
