import { defineConfig, loadEnv } from "vite";
import htmlPlugin from "vite-plugin-index-html";
import { createVuePlugin } from "vite-plugin-vue2";
import path from "path";

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
    ],
    server: {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      proxy: {},
      host: process.env.VITE_APP_DOMAIN,
      origin: process.env.VITE_APP_ASSET_URL_ORIGIN, // asset url origin @see: https://github.com/vitejs/vite/pull/5104/files
    },
  });
};
