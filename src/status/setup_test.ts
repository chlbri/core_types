import { Expected as ExpectedT, TupleOf } from "../types";

const DATA_TEST = [
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

type Length = typeof DATA_TEST["length"];

type Expected = ExpectedT<Length>;

type ForTest = [number, boolean];

type Table = TupleOf<ForTest, Length>;

function generateTestTable(...responses: Expected): Table {
  const out: ForTest[] = [];
  for (let index = 0; index < DATA_TEST.length; index++) {
    const actual = DATA_TEST[index];
    const expected = responses[index];
    out.push([actual, expected]);
  }
  return out as Table;
}

function mapperTest(spy: (val: number) => boolean) {
  const _spy = jest.fn(spy);
  return ([actual, expected]: ForTest) =>
    it(`${actual} should return ${expected}`, () => {
      expect(_spy(actual)).toBe(expected);
      expect(_spy).toBeCalledWith(actual);
    });
}

export { DATA_TEST, mapperTest, generateTestTable, Expected, Length };
