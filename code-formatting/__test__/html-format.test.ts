import { format } from "../html-format";
const HTML_PLAIN = `<div></div>
`;
const HTML_STANDARD = `<div></div>
`;
test("format html code", () => {
  expect(format(HTML_PLAIN)).toBe(HTML_STANDARD);
});
