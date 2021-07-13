import { format } from "../dart-format";
const DART_PLAIN = `void main( ){}
`;
const DART_STANDARD = `void main() {}
`;
test("format dart code", () => {
  expect(format(DART_PLAIN)).toBe(DART_STANDARD);
});
