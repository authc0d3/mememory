import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const rootPath = path.resolve(__dirname, "src");

export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
	},
	resolve: {
		alias: [{ find: "@", replacement: rootPath }],
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: "modern",
				additionalData: `@use "${rootPath}/styles/_index" as *;`,
			},
		},
	},
});
