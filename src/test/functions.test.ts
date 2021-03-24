import { TupleOf } from "../types";
import {
  generateAsyncTests,
  generateAsyncTestTable,
  generateTests,
  generateTestTable,
  mapperAsyncTest,
  mapperTest,
} from "./functions";
import { TestTable } from "./types";

// #region Sync
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
]; /* as const */

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
    const actual = spy(dumpFunction1, actuals1f1, expecteds1);
    const expected: TestTable<ForTest1, boolean, Length1> = [
      [[5, 6], false],
      [[1, 0], true],
      [[15, 37], false],
      [[105, 100], true],
      [[20, 3], true],
    ];

    expect(actual).toStrictEqual(expected);
    expect(spy).toBeCalledWith(dumpFunction1, actuals1f1, expecteds1);
  });

  it("For 3 elements", () => {
    const actual = spy(dumpFunction2, actuals2f1, expecteds2);
    const expected: TestTable<ForTest1, boolean, Length2> = [
      [[5, 6], false],
      [[15, 37], false],
      [[24, 7], true],
    ];

    expect(actual).toStrictEqual(expected);
    expect(spy).toBeCalledWith(dumpFunction2, actuals2f1, expecteds2);
  });
});

describe("Map all Tests", () => {
  (() =>
    describe(`Function  ==>   ${dumpFunction1}`, () => {
      const spy = jest.fn(dumpFunction1);
      const func = mapperTest(spy);
      describe("For 5 elements", () => {
        const table = generateTestTable(
          dumpFunction1,
          actuals1f1,
          expecteds1
        );
        table.map(func);
      });

      describe("For 3 elements", () => {
        const table = generateTestTable(
          dumpFunction1,
          actuals2f1,
          expecteds2
        );
        table.map(func);
      });
    }))();

  (() =>
    describe(`Function  ==>   ${dumpFunction2}`, () => {
      const spy = jest.fn(dumpFunction2);
      const func = mapperTest(spy);
      describe("For 5 elements", () => {
        const table = generateTestTable(
          dumpFunction2,
          actuals1f2,
          expecteds1
        );
        table.map(func);
      });

      describe("For 3 elements", () => {
        const table = generateTestTable(
          dumpFunction2,
          actuals2f2,
          expecteds2
        );
        table.map(func);
      });
    }))();
});

describe("Generate all Tests", () => {
  (() =>
    describe(`Function  ==>   ${dumpFunction1}`, () => {
      describe("For 5 elements", () => {
        generateTests(dumpFunction1, actuals1f1, expecteds1);
      });

      describe("For 3 elements", () => {
        generateTests(dumpFunction1, actuals2f1, expecteds2);
      });
    }))();

  (() =>
    describe(`Function  ==>   ${dumpFunction2}`, () => {
      describe("For 5 elements", () => {
        generateTests(dumpFunction2, actuals1f2, expecteds1);
      });

      describe("For 3 elements", () => {
        generateTests(dumpFunction2, actuals2f2, expecteds2);
      });
    }))();
});
// #endregion

// #region Async
function dumpAsyncFunction1(val1: number, val2: number) {
  return Promise.resolve(val1 > val2);
}
function dumpAsyncFunction2(val1: number) {
  return Promise.resolve(val1 > 0);
}

type AsyncForTest1 = Parameters<typeof dumpAsyncFunction1>;
type AsyncForTest2 = Parameters<typeof dumpAsyncFunction2>;

const asyncActuals1f1: TupleOf<AsyncForTest1, Length1> = [
  [5, 6],
  [1, 0],
  [15, 37],
  [105, 100],
  [20, 3],
];

const asyncActuals1f2: TupleOf<AsyncForTest2, Length1> = [
  [-1],
  [1],
  [-15],
  [105],
  [20],
];

const asyncActuals2f1: TupleOf<AsyncForTest1, Length2> = [
  [5, 6],
  [15, 37],
  [24, 7],
]; /* as const */

const asyncActuals2f2: TupleOf<AsyncForTest2, Length2> = [
  [-5],
  [-15],
  [24],
];

const asyncExpecteds1: TupleOf<boolean, Length1> = [
  false,
  true,
  false,
  true,
  true,
];

const asyncExpecteds2: TupleOf<boolean, Length2> = [
  false,
  false,
  true,
];

describe("Generate the Table of Tests - Async", () => {
  const spy = jest.fn(generateTestTable);
  it("For 5 elements", () => {
    const actual = spy(
      dumpAsyncFunction1,
      asyncActuals1f1,
      asyncExpecteds1
    );
    const expected: TestTable<ForTest1, boolean, Length1> = [
      [[5, 6], false],
      [[1, 0], true],
      [[15, 37], false],
      [[105, 100], true],
      [[20, 3], true],
    ];

    expect(actual).toStrictEqual(expected);
    expect(spy).toBeCalledWith(
      dumpAsyncFunction1,
      asyncActuals1f1,
      asyncExpecteds1
    );
  });

  it("For 3 elements", () => {
    const actual = spy(
      dumpAsyncFunction2,
      asyncActuals2f1,
      asyncExpecteds2
    );
    const expected: TestTable<ForTest1, boolean, Length2> = [
      [[5, 6], false],
      [[15, 37], false],
      [[24, 7], true],
    ];

    expect(actual).toStrictEqual(expected);
    expect(spy).toBeCalledWith(
      dumpAsyncFunction2,
      asyncActuals2f1,
      asyncExpecteds2
    );
  });
});

describe("Map all Tests - Async", () => {
  (() =>
    describe(`Function  ==>   ${dumpAsyncFunction1}`, () => {
      const spy = jest.fn(dumpAsyncFunction1);
      const func = mapperAsyncTest(spy);
      describe("For 5 elements -  Async", () => {
        const table = generateAsyncTestTable(
          dumpAsyncFunction1,
          asyncActuals1f1,
          asyncExpecteds1
        );
        table.map(func);
      });

      describe("For 3 elements", () => {
        const table = generateAsyncTestTable(
          dumpAsyncFunction1,
          asyncActuals2f1,
          asyncExpecteds2
        );
        table.map(func);
      });
    }))();

  (() =>
    describe(`Function  ==>   ${dumpAsyncFunction2}`, () => {
      const spy = jest.fn(dumpAsyncFunction2);
      const func = mapperAsyncTest(spy);
      describe("For 5 elements", () => {
        const table = generateAsyncTestTable(
          dumpAsyncFunction2,
          asyncActuals1f2,
          asyncExpecteds1
        );
        table.map(func);
      });

      describe("For 3 elements", () => {
        const table = generateAsyncTestTable(
          dumpAsyncFunction2,
          asyncActuals2f2,
          asyncExpecteds2
        );
        table.map(func);
      });
    }))();
});

describe("generateAsync all Tests - Async", () => {
  (() =>
    describe(`Function  ==>   ${dumpAsyncFunction1}`, () => {
      describe("For 5 elements", () => {
        generateAsyncTests(
          dumpAsyncFunction1,
          asyncActuals1f1,
          asyncExpecteds1
        );
      });

      describe("For 3 elements", () => {
        generateAsyncTests(
          dumpAsyncFunction1,
          asyncActuals2f1,
          asyncExpecteds2
        );
      });
    }))();

  (() =>
    describe(`Function  ==>   ${dumpAsyncFunction2}`, () => {
      describe("For 5 elements", () => {
        generateAsyncTests(
          dumpAsyncFunction2,
          asyncActuals1f2,
          asyncExpecteds1
        );
      });

      describe("For 3 elements", () => {
        generateAsyncTests(
          dumpAsyncFunction2,
          asyncActuals2f2,
          asyncExpecteds2
        );
      });
    }))();
});
// #endregion
