import parserJsFlow from "prettier/parser-flow";
import prettier from "prettier/standalone";

export function format(source: string) {
  return prettier.format(source, {
    parser: "javascript",
    plugins: [parserJsFlow],
  });
}
