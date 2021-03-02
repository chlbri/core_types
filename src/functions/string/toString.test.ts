import { toString } from "./toString";

const table = [
  [true, "true"],
  [false, "false"],
  ["str", "str"],
  [2, "2"],
] as const;

table.map(([actual, expected]) =>
  it(`${actual} should be transcripted to ${expected}`, () => {
    expect(toString(actual)).toBe(expected);
  })
);

it("array must remains the to string", () => {
  const _table = [1, 2, 3, 4, "true", false] as const;
  const expected = ["1", "2", "3", "4", "true", "false"];
  expect(_table.map(toString)).toStrictEqual(expected);
});
