import parserYaml from "prettier/parser-yaml";
import prettier from "prettier/standalone";

export function format(source: string) {
  return prettier.format(source, {
    parser: "yaml",
    plugins: [parserYaml],
  });
}
