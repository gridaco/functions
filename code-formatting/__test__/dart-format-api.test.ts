import Axios from "axios";
const DART_PLAIN = `void main( ){}
`;
const DART_STANDARD = `void main() {}
`;

const client = Axios.create({
  baseURL: "https://code-format.functions.bridged.cc",
});

test("format dart code", async () => {
  expect(
    await (
      await client.post("/format", { code: DART_PLAIN, lang: "dart" })
    ).data.code
  ).toBe(DART_STANDARD);
});
