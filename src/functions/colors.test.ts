import { colorHex1, colorHex2 } from "./colors";

type Params1Digit = Parameters<typeof colorHex1>;
type Params2Digits = Parameters<typeof colorHex2>;

const all1Digit: Params1Digit[] = [
  [3, "f", "e"],
  [1, "f", 2, 3],
];

const all2Digits: Params2Digits[] = [
  ["03", "ff", "e5"],
  ["13", "ff", "f8", "09"],
];

const limit1 = Math.pow(16, 3) * 17 - 2;
const limit2 =
  Math.pow(Math.pow(16, 2), 3) * (Math.pow(16, 2) + 1) - 2;

describe("colorHex1", () => {
  all1Digit.map(([red, green, blue, alpha]) => {
    const expected = `#${red}${green}${blue}${alpha ?? ""}`;
    return it(`Color must return "${expected}" as rgba`, () => {
      expect(colorHex1(red, green, blue, alpha)).toBe(expected);
    });
  });
});

describe("colorHex2", () => {
  all2Digits.map(([red, green, blue, alpha]) => {
    const expected = `#${red}${green}${blue}${alpha ?? ""}`;
    return it(`Color must return "${expected}" as rrggbbaa`, () => {
      expect(colorHex2(red, green, blue, alpha)).toBe(expected);
    });
  });
});
