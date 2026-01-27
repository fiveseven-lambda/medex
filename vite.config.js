import { readFileSync } from "fs";
import { defineConfig } from "vite";
import { parse } from "./src/parse.js";

export default defineConfig({
  plugins: [
    {
      name: "fill-blank-transform",

      transformIndexHtml(html) {
        const text = readFileSync("src/input.txt", "utf8");
        const content = parse(text);

        return html.replace("<!-- __CONTENT__ -->", content);
      },
    },
  ],
});
