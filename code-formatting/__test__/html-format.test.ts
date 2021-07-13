import { format } from "../html-format";
const HTML_PLAIN = `void main( ){}
`;
const HTML_STANDARD = `void main() {}
`;
test("format html code", () => {
  expect(format(HTML_PLAIN)).toBe(HTML_STANDARD);
});
