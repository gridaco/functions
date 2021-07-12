import parserHtml from "prettier/parser-html";
import prettier from "prettier/standalone";

export function format(source: string) {
  return prettier.format(source, {
    parser: "html",
    plugins: [parserHtml],
  });
}
