import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig({
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
  ],
  ignorePatterns: [".next/**", "out/**", "build/**", "next-env.d.ts"],
});