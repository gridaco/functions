import Axios from "axios";
import { format } from "../dart-format";
const DART_PLAIN = `void main( ){}
`;
const DART_STANDARD = `void main() {}
`;
test("format dart code", async () => {
  expect(await Axios.post("/format", { code: DART_PLAIN })).toBe(DART_STANDARD);
});
