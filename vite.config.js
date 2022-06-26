import { defineConfig, loadEnv } from "vite";
import htmlPlugin from "vite-plugin-index-html";
import { createVuePlugin } from "vite-plugin-vue2";
import path from "path";
import { viteExternalsPlugin } from "vite-plugin-externals";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    base: "/",
    resolve: {
      alias: [
        {
          find: "@/",
          replacement: `${path.resolve(__dirname, "./src")}/`,
        },
        {
          find: "src/",
          replacement: `${path.resolve(__dirname, "./src")}/`,
        },
      ],
    },
    plugins: [
      createVuePlugin(),
      htmlPlugin({
        input: "./src/main.ts",
        preserveEntrySignatures: "exports-only",
      }),
      viteExternalsPlugin({
        react: "React",
      }),
    ],
    server: {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
  });
};
