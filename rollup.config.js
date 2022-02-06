import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
export default [
  {
    input: ["./src/chrome/content.ts"],
    output: {
      file: "dist/static/js/content.js",
      name: "content",
      format: "iife",
    },
    plugins: [nodeResolve(), typescript()],
  },
  {
    input: ["./src/chrome/background.ts"],
    output: {
      file: "dist/static/js/background.js",
      name: "content",
      format: "iife",
    },
    plugins: [typescript()],
  },
];