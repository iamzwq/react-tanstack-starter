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
      parserOptions: {
        projectService: true, // 自动查找所有 tsconfig*.json
        tsconfigRootDir: import.meta.dirname, // 告诉 ESLint 从哪个目录开始查找，这里是项目根目录
      },
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
      "@tanstack/router": pluginRouter,
    },
    rules: {
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      // 强制使用 `??` 而不是 `||` 进行 nullish 合并操作
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      // 最大空行数限制为1
      "no-multiple-empty-lines": ["error", { max: 1 }],
      // 限制导入
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["../../**"],
              message:
                "不要使用相对路径导入父目录中的模块。请使用 @/* 别名，例如 \"import { router } from '@/router'\"。",
            },
          ],
        },
      ],
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
