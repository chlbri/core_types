import { TupleOf } from "../types";
import { generateTestTable, mapperTest } from "./functions";
import { TestTable } from "./types";

function dumpFunction1(val1: number, val2: number) {
  return val1 > val2;
}
function dumpFunction2(val1: number) {
  return val1 > 0;
}

type Length1 = 5;
type Length2 = 3;

type ForTest1 = Parameters<typeof dumpFunction1>;
type ForTest2 = Parameters<typeof dumpFunction2>;

const actuals1f1: TupleOf<ForTest1, Length1> = [
  [5, 6],
  [1, 0],
  [15, 37],
  [105, 100],
  [20, 3],
];

const actuals1f2: TupleOf<ForTest2, Length1> = [
  [-1],
  [1],
  [-15],
  [105],
  [20],
];

const actuals2f1: TupleOf<ForTest1, Length2> = [
  [5, 6],
  [15, 37],
  [24, 7],
];

const actuals2f2: TupleOf<ForTest2, Length2> = [[-5], [-15], [24]];

const expecteds1: TupleOf<boolean, Length1> = [
  false,
  true,
  false,
  true,
  true,
];

const expecteds2: TupleOf<boolean, Length2> = [false, false, true];

describe("Generate the Table of Tests", () => {
  const spy = jest.fn(generateTestTable);
  it("For 5 elements", () => {
    const actual = spy(actuals1f1, expecteds1);
    const expected: TestTable<ForTest1, boolean, Length1> = [
      [[5, 6], false],
      [[1, 0], true],
      [[15, 37], false],
      [[105, 100], true],
      [[20, 3], true],
    ];

    expect(actual).toStrictEqual(expected);
    expect(spy).toBeCalledWith(actuals1f1, expecteds1);
  });

  it("For 3 elements", () => {
    const actual = spy(actuals2f1, expecteds2);
    const expected: TestTable<ForTest1, boolean, Length2> = [
      [[5, 6], false],
      [[15, 37], false],
      [[24, 7], true],
    ];

    expect(actual).toStrictEqual(expected);
    expect(spy).toBeCalledWith(actuals2f1, expecteds2);
  });
});

describe("Map all Tests", () => {
  (() =>
    describe(`Function  ==>   ${dumpFunction1}`, () => {
      const spy = jest.fn(mapperTest);
      const func = mapperTest(dumpFunction1);
      describe("For 5 elements", () => {
        const table = generateTestTable(actuals1f1, expecteds1);
        table.map(func);
      });

      describe("For 3 elements", () => {
        const table = generateTestTable(actuals2f1, expecteds2);
        table.map(func);
      });
    }))();

  (() =>
    describe(`Function  ==>   ${dumpFunction2}`, () => {
      const spy = jest.fn(mapperTest);
      const func = spy(dumpFunction2);
      describe("For 5 elements", () => {
        const table = generateTestTable(actuals1f2, expecteds1);
        table.map(func);
      });

      describe("For 3 elements", () => {
        const table = generateTestTable(actuals2f2, expecteds2);
        table.map(func);
      });
    }))();
});
