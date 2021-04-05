import { v4 } from "uuid";
import { Entity, Login, WithId, WithoutId } from "../entities";
import { sleep } from "../functions";
import { ReturnData } from "../interfaces";
import { TupleOf } from "../types";
import { DataFromPromiseWithoutId } from "./../interfaces/ReturnData";
import {
  generateAsyncTests,
  generateAsyncTestTable,
  generateReturnDataTests,
  generateReturnDataTestTable,
  generateTests,
  generateTestTable,
  mapperAsyncTest,
  mapperReturnDataTest,
  mapperTest,
  returnSimpleData,
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

describe("Synchronous ==>", () => {
  describe("Generate the Table of Tests ==>", () => {
    const spy = jest.fn(generateTestTable);
    it("For 5 elements ==>", () => {
      const actual = spy(dumpFunction1, actuals1f1, expecteds1);
      const expected: TestTable<ForTest1, boolean, Length1> = [
        [[5, 6], false],
        [[1, 0], true],
        [[15, 37], false],
        [[105, 100], true],
        [[20, 3], true],
      ];

      expect(actual).toStrictEqual(expected);
      expect(spy).toBeCalledWith(
        dumpFunction1,
        actuals1f1,
        expecteds1
      );
    });

    it("For 3 elements ==>", () => {
      const actual = spy(dumpFunction2, actuals2f1, expecteds2);
      const expected: TestTable<ForTest1, boolean, Length2> = [
        [[5, 6], false],
        [[15, 37], false],
        [[24, 7], true],
      ];

      expect(actual).toStrictEqual(expected);
      expect(spy).toBeCalledWith(
        dumpFunction2,
        actuals2f1,
        expecteds2
      );
    });
  });

  describe("Map all Tests ==>", () => {
    (() =>
      describe(`Function ==> ${dumpFunction1}`, () => {
        const spy = jest.fn(dumpFunction1);
        const func = mapperTest(spy);
        describe("For 5 elements ==>", () => {
          const table = generateTestTable(
            dumpFunction1,
            actuals1f1,
            expecteds1
          );
          table.map(func);
        });

        describe("For 3 elements ==>", () => {
          const table = generateTestTable(
            dumpFunction1,
            actuals2f1,
            expecteds2
          );
          table.map(func);
        });
      }))();

    (() =>
      describe(`Function ==> ${dumpFunction2}`, () => {
        const spy = jest.fn(dumpFunction2);
        const func = mapperTest(spy);
        describe("For 5 elements ==>", () => {
          const table = generateTestTable(
            dumpFunction2,
            actuals1f2,
            expecteds1
          );
          table.map(func);
        });

        describe("For 3 elements ==>", () => {
          const table = generateTestTable(
            dumpFunction2,
            actuals2f2,
            expecteds2
          );
          table.map(func);
        });
      }))();
  });

  describe("Generate all Tests ==>", () => {
    (() =>
      describe(`Function ==> ${dumpFunction1}`, () => {
        describe("For 5 elements ==>", () => {
          generateTests(dumpFunction1, actuals1f1, expecteds1);
        });

        describe("For 3 elements ==>", () => {
          generateTests(dumpFunction1, actuals2f1, expecteds2);
        });
      }))();

    (() =>
      describe(`Function ==> ${dumpFunction2}`, () => {
        describe("For 5 elements", () => {
          generateTests(dumpFunction2, actuals1f2, expecteds1);
        });

        describe("For 3 elements ==>", () => {
          generateTests(dumpFunction2, actuals2f2, expecteds2);
        });
      }))();
  });
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

describe("Asynchronous ==>", () => {
  describe("Generate the Table of Tests ==>", () => {
    const spy = jest.fn(generateTestTable);
    it("For 5 elements", () => {
      const actual = spy(
        dumpAsyncFunction1,
        asyncActuals1f1,
        asyncExpecteds1
      );
      const expected: TestTable<AsyncForTest1, boolean, Length1> = [
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
      const expected: TestTable<AsyncForTest1, boolean, Length2> = [
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

  describe("Map all Tests ==>", () => {
    (() =>
      describe(`Function ==> ${dumpAsyncFunction1}`, () => {
        const spy = jest.fn(dumpAsyncFunction1);
        const func = mapperAsyncTest(spy);
        describe("For 5 elements ==>", () => {
          const table = generateAsyncTestTable(
            dumpAsyncFunction1,
            asyncActuals1f1,
            asyncExpecteds1
          );
          table.map(func);
        });

        describe("For 3 elements ==>", () => {
          const table = generateAsyncTestTable(
            dumpAsyncFunction1,
            asyncActuals2f1,
            asyncExpecteds2
          );
          table.map(func);
        });
      }))();

    (() =>
      describe(`Function ==> ${dumpAsyncFunction2}`, () => {
        const spy = jest.fn(dumpAsyncFunction2);
        const func = mapperAsyncTest(spy);
        describe("For 5 elements ==>", () => {
          const table = generateAsyncTestTable(
            dumpAsyncFunction2,
            asyncActuals1f2,
            asyncExpecteds1
          );
          table.map(func);
        });

        describe("For 3 elements ==>", () => {
          const table = generateAsyncTestTable(
            dumpAsyncFunction2,
            asyncActuals2f2,
            asyncExpecteds2
          );
          table.map(func);
        });
      }))();
  });

  describe("Generate all Tests ==>", () => {
    (() =>
      describe(`Function ==> ${dumpAsyncFunction1}`, () => {
        describe("For 5 elements ==>", () => {
          generateAsyncTests(
            dumpAsyncFunction1,
            asyncActuals1f1,
            asyncExpecteds1
          );
        });

        describe("For 3 elements ==>", () => {
          generateAsyncTests(
            dumpAsyncFunction1,
            asyncActuals2f1,
            asyncExpecteds2
          );
        });
      }))();

    (() =>
      describe(`Function ==> ${dumpAsyncFunction2}`, () => {
        describe("For 5 elements ==>", () => {
          generateAsyncTests(
            dumpAsyncFunction2,
            asyncActuals1f2,
            asyncExpecteds1
          );
        });

        describe("For 3 elements ==>", () => {
          generateAsyncTests(
            dumpAsyncFunction2,
            asyncActuals2f2,
            asyncExpecteds2
          );
        });
      }))();
  });
});
// #endregion

// #region ReturnData
interface User extends Entity, Login {}

type RDW<T> = ReturnData<WithId<T>>;
type RDWA<T> = ReturnData<WithId<T>[]>;

async function createOne(value: User) {
  await sleep(10);
  const payload = { ...value, _id: value._id || v4() };
  return { status: 200, payload } as RDW<User>;
}

async function createMany(values: WithoutId<User>[]) {
  await sleep(10);
  const payload = values.map((value) => ({
    ...value,
    _id: v4(),
  }));
  return { status: 200, payload } as RDWA<User>;
}

type ParametersForTestOne = Parameters<typeof createOne>;
type ParametersForTestMany = Parameters<typeof createMany>;
type ReturnDataForTestOne = DataFromPromiseWithoutId<
  ReturnType<typeof createOne>
>;
type ReturnDataForTestMany = DataFromPromiseWithoutId<
  ReturnType<typeof createMany>
>;

const er: ReturnDataForTestMany = { status: 200, payload: [] };
// #region Dump Users
const user1 = {
  login: "all1",
  password: "uno",
};
const user2 = {
  login: "log2",
  password: "deux",
};
const user3 = {
  login: "alien3",
  password: "trois",
};
// #endregion

const returnDataActualsf1l1: TupleOf<
  ParametersForTestOne,
  Length1
> = [[user1], [user3], [user2], [user1], [user2]];

const returnDataExpectedsf1l1: TupleOf<
  ReturnDataForTestOne,
  Length1
> = [
  { status: 200, payload: returnSimpleData(user1) },
  { status: 200, payload: returnSimpleData(user3) },
  { status: 200, payload: returnSimpleData(user2) },
  { status: 200, payload: returnSimpleData(user1) },
  { status: 200, payload: returnSimpleData(user2) },
];

const returnDataActualsf1l2: TupleOf<
  ParametersForTestOne,
  Length2
> = [[user1], [user2], [user3]]; /* as const */

const returnDataExpectedsf1l2: TupleOf<
  ReturnDataForTestOne,
  Length2
> = [
  { status: 200, payload: returnSimpleData(user1) },
  { status: 200, payload: returnSimpleData(user2) },
  { status: 200, payload: returnSimpleData(user3) },
];

const returnDataActualsf2l1: TupleOf<
  ParametersForTestMany,
  Length1
> = [
  [[user1, user2, user3]],
  [[user1, user3]],
  [[user2, user3]],
  [[user1, user2, user3, user1, user3]],
  [[user1]],
];

const returnDataExpectedsf2l1: TupleOf<
  ReturnDataForTestMany,
  Length1
> = [
  {
    status: 200,
    payload: [user1, user2, user3].map(returnSimpleData),
  },
  { status: 200, payload: [user1, user3].map(returnSimpleData) },
  { status: 200, payload: [user2, user3].map(returnSimpleData) },
  {
    status: 200,
    payload: [user1, user2, user3, user1, user3].map(
      returnSimpleData
    ),
  },
  { status: 200, payload: [user1].map(returnSimpleData) },
];

const returnDataActualsf2l2: TupleOf<
  ParametersForTestMany,
  Length2
> = [[[user1, user2, user3]], [[user1, user3]], [[user2, user3]]];

const returnDataExpectedsf2l2: TupleOf<
  ReturnDataForTestMany,
  Length2
> = [
  {
    status: 200,
    payload: [user1, user2, user3].map(returnSimpleData),
  },
  { status: 200, payload: [user1, user3].map(returnSimpleData) },
  { status: 200, payload: [user2, user3].map(returnSimpleData) },
];

describe("Return Data", () => {
  describe("Generate the Table of Tests ==>", () => {
    const spy = jest.fn(generateReturnDataTestTable);
    describe("Create One ==>", () => {
      it("For 5 elements ==>", () => {
        const actual = spy(
          createOne,
          returnDataActualsf1l1,
          returnDataExpectedsf1l1
        );
        const expected: TestTable<
          ParametersForTestOne,
          ReturnDataForTestOne,
          Length1
        > = [
          [
            [user1],
            { status: 200, payload: returnSimpleData(user1) },
          ],
          [
            [user3],
            { status: 200, payload: returnSimpleData(user3) },
          ],
          [
            [user2],
            { status: 200, payload: returnSimpleData(user2) },
          ],
          [
            [user1],
            { status: 200, payload: returnSimpleData(user1) },
          ],
          [
            [user2],
            { status: 200, payload: returnSimpleData(user2) },
          ],
        ];

        expect(actual).toStrictEqual(expected);
        expect(spy).toBeCalledWith(
          createOne,
          returnDataActualsf1l1,
          returnDataExpectedsf1l1
        );
      });

      it("For 3 elements ==>", () => {
        const actual = spy(
          createOne,
          returnDataActualsf1l2,
          returnDataExpectedsf1l2
        );
        const expected: TestTable<
          ParametersForTestOne,
          ReturnDataForTestOne,
          Length2
        > = [
          [
            [user1],
            { status: 200, payload: returnSimpleData(user1) },
          ],
          [
            [user2],
            { status: 200, payload: returnSimpleData(user2) },
          ],
          [
            [user3],
            { status: 200, payload: returnSimpleData(user3) },
          ],
        ];

        expect(actual).toStrictEqual(expected);
        expect(spy).toBeCalledWith(
          createOne,
          returnDataActualsf1l2,
          returnDataExpectedsf1l2
        );
      });
    });

    describe("Create many ==>", () => {
      it("For 5 elements ==>", () => {
        const actual = spy(
          createMany,
          returnDataActualsf2l1,
          returnDataExpectedsf2l1
        );
        const expected: TestTable<
          ParametersForTestMany,
          ReturnDataForTestMany,
          Length1
        > = [
          [
            [[user1, user2, user3]],
            {
              status: 200,
              payload: [user1, user2, user3].map(returnSimpleData),
            },
          ],
          [
            [[user1, user3]],
            {
              status: 200,
              payload: [user1, user3].map(returnSimpleData),
            },
          ],
          [
            [[user2, user3]],
            {
              status: 200,
              payload: [user2, user3].map(returnSimpleData),
            },
          ],
          [
            [[user1, user2, user3, user1, user3]],
            {
              status: 200,
              payload: [user1, user2, user3, user1, user3].map(
                returnSimpleData
              ),
            },
          ],
          [
            [[user1]],
            { status: 200, payload: [user1].map(returnSimpleData) },
          ],
        ];

        expect(actual).toStrictEqual(expected);
        expect(spy).toBeCalledWith(
          createMany,
          returnDataActualsf2l1,
          returnDataExpectedsf2l1
        );
      });

      it("For 3 elements ==>", () => {
        const actual = spy(
          createMany,
          returnDataActualsf2l2,
          returnDataExpectedsf2l2
        );
        const expected: TestTable<
          ParametersForTestMany,
          ReturnDataForTestMany,
          Length2
        > = [
          [
            [[user1, user2, user3]],
            {
              status: 200,
              payload: [user1, user2, user3].map(returnSimpleData),
            },
          ],
          [
            [[user1, user3]],
            {
              status: 200,
              payload: [user1, user3].map(returnSimpleData),
            },
          ],
          [
            [[user2, user3]],
            {
              status: 200,
              payload: [user2, user3].map(returnSimpleData),
            },
          ],
        ];

        expect(actual).toStrictEqual(expected);
        expect(spy).toBeCalledWith(
          createMany,
          returnDataActualsf2l2,
          returnDataExpectedsf2l2
        );
      });
    });
  });

  describe("Map all Tests ==>", () => {
    (() =>
      describe(`Function ==> ${createOne}`, () => {
        const spy = jest.fn(createOne);
        const func = mapperReturnDataTest(spy, true);
        describe("For 5 elements ==>", () => {
          const table = generateReturnDataTestTable(
            createOne,
            returnDataActualsf1l1,
            returnDataExpectedsf1l1
          );
          table.map(func);
        });

        describe("For 3 elements ==>", () => {
          const table = generateReturnDataTestTable(
            createOne,
            returnDataActualsf1l2,
            returnDataExpectedsf1l2
          );
          table.map(func);
        });
      }))();

    (() =>
      describe(`Function ==> ${createMany}`, () => {
        const spy = jest.fn(createMany);
        const func = mapperReturnDataTest(spy, true);
        describe("For 5 elements ==>", () => {
          const table = generateReturnDataTestTable(
            createMany,
            returnDataActualsf2l1,
            returnDataExpectedsf2l1
          );
          table.map(func);
        });

        describe("For 3 elements ==>", () => {
          const table = generateReturnDataTestTable(
            createMany,
            returnDataActualsf2l2,
            returnDataExpectedsf2l2
          );
          table.map(func);
        });
      }))();
  });

  describe("Generate all Tests ==>", () => {
    (() =>
      describe(`Function ==> ${createOne}`, () => {
        describe("For 5 elements ==>", () => {
          generateReturnDataTests(
            createOne,
            returnDataActualsf1l1,
            returnDataExpectedsf1l1
          );
        });

        describe("For 3 elements ==>", () => {
          generateReturnDataTests(
            createOne,
            returnDataActualsf1l2,
            returnDataExpectedsf1l2
          );
        });
      }))();

    (() =>
      describe(`Function ==> ${createMany}`, () => {
        describe("For 5 elements ==>", () => {
          generateReturnDataTests(
            createMany,
            returnDataActualsf2l1,
            returnDataExpectedsf2l1
          );
        });

        describe("For 3 elements ==>", () => {
          generateReturnDataTests(
            createMany,
            returnDataActualsf2l2,
            returnDataExpectedsf2l2
          );
        });
      }))();
  });
});
// #endregion
