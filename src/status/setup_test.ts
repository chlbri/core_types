import { TupleOf } from "../types";

export const DATA_TEST = [
  4,
  100,
  101,
  104,
  200,
  202,
  204,
  300,
  303,
  304,
  400,
  404,
  500,
  504,
  505,
  1000,
  700,
] as const;

export type Length = typeof DATA_TEST["length"];

export type Expected = TupleOf<boolean, Length>;

type ForTest = [number, boolean];

type Table = TupleOf<ForTest, Length>;

export function generateTestTable(...responses: Expected): Table {
  const out: ForTest[] = [];
  for (let index = 0; index < DATA_TEST.length; index++) {
    const actual = DATA_TEST[index];
    const expected = responses[index];
    out.push([actual, expected]);
  }
  return out as Table;
}

export function mapperTest(spy: (val: number) => boolean) {
  const _spy = jest.fn(spy);
  return ([actual, expected]: ForTest) =>
    it(`${actual} should return ${expected}`, () => {
      expect(_spy(actual)).toBe(expected);
      expect(_spy).toBeCalledWith(actual);
    });
}
