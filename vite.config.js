import { defineConfig } from "vite";
import { readFileSync } from "fs";
import { marked } from "marked";
import { parse } from "./src/parse.js";

export default defineConfig({
  base: "./",
  plugins: [
    {
      name: "markdown-fill-blank",

      transformIndexHtml(html) {
        const md = readFileSync("src/content.md", "utf8");

        const htmlFromMd = marked.parse(md);

        const filled = parse(htmlFromMd);

        return html.replace("<!-- __CONTENT__ -->", filled);
      },
    },
  ],
});
