import { formatCode } from "dart-style";

export function format(code: string): string {
  const _res = formatCode(code);
  if (_res.error) {
    throw new Error(_res.error);
  } else {
    return _res.code!;
  }
}
