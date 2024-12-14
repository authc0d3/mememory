import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import functional from "eslint-plugin-functional";
import tseslint from "typescript-eslint";

export default tseslint.config(
	{ ignores: ["dist", "coverage"] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
			functional,
		},
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {
			// React
			...reactHooks.configs.recommended.rules,
			"react-hooks/exhaustive-deps": ["off"],
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true },
			],

			// Functional
			"functional/prefer-readonly-type": [
				"error",
				{
					allowLocalMutation: true,
					allowMutableReturnType: false,
					checkImplicit: false,
					ignoreClass: false,
					ignoreInterface: false,
				},
			],
		},
	},
);
