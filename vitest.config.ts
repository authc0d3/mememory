import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			setupFiles: `./src/scripts/setupTests.ts`,
			browser: {
				enabled: true,
				name: "chromium",
				provider: "playwright",
			},
			coverage: {
				reporter: ["text", "json", "html"],
			},
		},
	}),
);
