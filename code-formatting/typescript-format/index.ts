import parserTypeScript from "prettier/parser-typescript";
import prettier from "prettier";

export function format(source: string) {
  return prettier.format(source, {
    parser: "typescript",
    plugins: [parserTypeScript],
  });
}
