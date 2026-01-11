import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { defineConfig, globalIgnores } from "eslint/config";
import prettier from "eslint-plugin-prettier/recommended";
import pluginRouter from "@tanstack/eslint-plugin-router";

export default defineConfig([
  globalIgnores(["dist", "src/routeTree.gen.ts"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      pluginRouter.configs["flat/recommended"],
      prettier,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
      "@tanstack/router": pluginRouter,
    },
    rules: {
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@tanstack/router/create-route-property-order": "error",
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            [
              "^node:",
              "^url$",
              "^vite$",
              "^@vitejs/(.*)$",
              "^react",
              "^@tanstack/react-router$",
              "^@tanstack/react-query$",
              "^@?\\w",
              "^@/\\w",
              "^\\.\\.(?!/?$)",
              "^\\.\\./?$",
              "^\\./(?=.*/)(?!/?$)",
              "^\\.(?!/?$)",
              "^\\./?$",
              "^.+\\.s?css$",
            ],
          ],
        },
      ],
    },
  },
]);
