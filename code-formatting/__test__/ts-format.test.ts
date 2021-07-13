import { format } from "../typescript-format";
const TS_PLAIN = `test("format ts code", () => {expect(format(TS_PLAIN)).toBe(TS_STANDARD)})
`;
const TS_STANDARD = `void main() {}
`;

test("format ts code", () => {
  expect(format(TS_PLAIN)).toBe(TS_STANDARD);
});

const TSX_PLAIN = `void main( ){}
`;
const TSX_STANDARD = `void main() {}
`;

test("format tsx code", () => {
  expect(format(TSX_PLAIN)).toBe(TSX_STANDARD);
});
