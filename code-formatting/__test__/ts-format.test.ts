import { format } from "../typescript-format";
const TS_PLAIN = `test("format ts code", () => {expect(format(TS_PLAIN)).toBe(TS_STANDARD)})
`;
const TS_STANDARD = `test("format ts code", () => {
  expect(format(TS_PLAIN)).toBe(TS_STANDARD);
});
`;

test("format ts code", () => {
  expect(format(TS_PLAIN)).toBe(TS_STANDARD);
});

const TSX_PLAIN = `function Button() { return ( <button>click me</button>);}
`;
const TSX_STANDARD = `function Button() {
  return <button>click me</button>;
}
`;

test("format tsx code", () => {
  expect(format(TSX_PLAIN)).toBe(TSX_STANDARD);
});
