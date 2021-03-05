import { v4 } from "uuid";
import { LenghtOf, TupleOf } from "../types";
import { TestElement, TestTable } from "./types";

export function generateTestTable<
  F extends (...args: any[]) => any,
  T1 extends TupleOf<Parameters<F>>,
  T2 extends TupleOf<ReturnType<F>, LenghtOf<T1>>
>(func: F, actuals: T1, expecteds: T2) {
  type ActualType = Parameters<F>;
  type ExpectedType = ReturnType<F>;
  const out: TestElement<ActualType>[] = actuals.map((_, index) => [
    actuals[index],
    expecteds[index],
  ]);
  return out as TestTable<ActualType, ExpectedType, LenghtOf<T1>>;
}

function testNullText(...actual: any[]) {
  const inner =
    actual == null ||
    actual === [null] ||
    actual === undefined ||
    actual === [undefined] ||
    actual.every(
      (v) =>
        v == null ||
        v === [null] ||
        v === undefined ||
        v === [undefined]
    );
  return inner;
}

export function mapperTest<P extends any[], R extends any>(
  spy: jest.Mock<R, P>,
  uuid = false
) {
  return ([actual, expected]: TestElement<P, R>) => {
    const _actualText = testNullText(...actual)
      ? actual[0]
      : actual.join(", ");

    return it(`${
      uuid ? `${v4()} ==>  ` : ""
    }Arguments : [ ${_actualText} ] shoulds return ${expected}`, () => {
      expect(JSON.stringify(spy(...actual))).toStrictEqual(
        JSON.stringify(expected)
      );
      expect(spy).toBeCalledWith(...actual);
    });
  };
}

export function generateTests<
  F extends (...args: any[]) => any,
  T1 extends TupleOf<Parameters<F>>,
  T2 extends TupleOf<ReturnType<F>, LenghtOf<T1>>
>(func: F, actuals: T1, expecteds: T2, uuid = false) {
  const table = generateTestTable(func, actuals, expecteds);
  const spy = jest.fn(func);
  const mapper = mapperTest(spy, uuid);
  const tests = table.map(mapper);
  const len = expecteds.length;
  it(`${func.name} should be call ${len} times`, () => {
    expect(spy).toBeCalledTimes(len);
  });
  return { tests, spy } as const;
}

// #region Generating ....
// const generateFunction = (val: number) =>
//   `export function generate${val}Test${
//     val == 1 ? "" : "s"
//   }<F extends (...args: any[]) => any>(func: F,actuals: TupleOf<Parameters<F>, ${val}>, expecteds: TupleOf<ReturnType<F>, ${val}>, uuid = false) {return generateTests(func, actuals, expecteds, uuid);}`;

// console.log("====================================");
// Array.from(
//   { length: 20 },
//   (_, i) => generateFunction(i + 1) + EOL
// ).map((vc) => console.log(vc));
// console.log("====================================");
// #endregion

// #region Helper Functions
export function generate1Test<F extends (...args: any[]) => any>(
  func: F,
  actuals: TupleOf<Parameters<F>, 1>,
  expecteds: TupleOf<ReturnType<F>, 1>,
  uuid = false
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate2Tests<F extends (...args: any[]) => any>(
  func: F,
  actuals: TupleOf<Parameters<F>, 2>,
  expecteds: TupleOf<ReturnType<F>, 2>,
  uuid = false
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate3Tests<F extends (...args: any[]) => any>(
  func: F,
  actuals: TupleOf<Parameters<F>, 3>,
  expecteds: TupleOf<ReturnType<F>, 3>,
  uuid = false
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate4Tests<F extends (...args: any[]) => any>(
  func: F,
  actuals: TupleOf<Parameters<F>, 4>,
  expecteds: TupleOf<ReturnType<F>, 4>,
  uuid = false
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate5Tests<F extends (...args: any[]) => any>(
  func: F,
  actuals: TupleOf<Parameters<F>, 5>,
  expecteds: TupleOf<ReturnType<F>, 5>,
  uuid = false
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate6Tests<F extends (...args: any[]) => any>(
  func: F,
  actuals: TupleOf<Parameters<F>, 6>,
  expecteds: TupleOf<ReturnType<F>, 6>,
  uuid = false
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate7Tests<F extends (...args: any[]) => any>(
  func: F,
  actuals: TupleOf<Parameters<F>, 7>,
  expecteds: TupleOf<ReturnType<F>, 7>,
  uuid = false
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate8Tests<F extends (...args: any[]) => any>(
  func: F,
  actuals: TupleOf<Parameters<F>, 8>,
  expecteds: TupleOf<ReturnType<F>, 8>,
  uuid = false
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate9Tests<F extends (...args: any[]) => any>(
  func: F,
  actuals: TupleOf<Parameters<F>, 9>,
  expecteds: TupleOf<ReturnType<F>, 9>,
  uuid = false
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate10Tests<F extends (...args: any[]) => any>(
  func: F,
  actuals: TupleOf<Parameters<F>, 10>,
  expecteds: TupleOf<ReturnType<F>, 10>,
  uuid = false
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate11Tests<F extends (...args: any[]) => any>(
  func: F,
  actuals: TupleOf<Parameters<F>, 11>,
  expecteds: TupleOf<ReturnType<F>, 11>,
  uuid = false
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate12Tests<F extends (...args: any[]) => any>(
  func: F,
  actuals: TupleOf<Parameters<F>, 12>,
  expecteds: TupleOf<ReturnType<F>, 12>,
  uuid = false
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate13Tests<F extends (...args: any[]) => any>(
  func: F,
  actuals: TupleOf<Parameters<F>, 13>,
  expecteds: TupleOf<ReturnType<F>, 13>,
  uuid = false
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate14Tests<F extends (...args: any[]) => any>(
  func: F,
  actuals: TupleOf<Parameters<F>, 14>,
  expecteds: TupleOf<ReturnType<F>, 14>,
  uuid = false
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate15Tests<F extends (...args: any[]) => any>(
  func: F,
  actuals: TupleOf<Parameters<F>, 15>,
  expecteds: TupleOf<ReturnType<F>, 15>,
  uuid = false
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate16Tests<F extends (...args: any[]) => any>(
  func: F,
  actuals: TupleOf<Parameters<F>, 16>,
  expecteds: TupleOf<ReturnType<F>, 16>,
  uuid = false
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate17Tests<F extends (...args: any[]) => any>(
  func: F,
  actuals: TupleOf<Parameters<F>, 17>,
  expecteds: TupleOf<ReturnType<F>, 17>,
  uuid = false
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate18Tests<F extends (...args: any[]) => any>(
  func: F,
  actuals: TupleOf<Parameters<F>, 18>,
  expecteds: TupleOf<ReturnType<F>, 18>,
  uuid = false
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate19Tests<F extends (...args: any[]) => any>(
  func: F,
  actuals: TupleOf<Parameters<F>, 19>,
  expecteds: TupleOf<ReturnType<F>, 19>,
  uuid = false
) {
  return generateTests(func, actuals, expecteds, uuid);
}

export function generate20Tests<F extends (...args: any[]) => any>(
  func: F,
  actuals: TupleOf<Parameters<F>, 20>,
  expecteds: TupleOf<ReturnType<F>, 20>,
  uuid = false
) {
  return generateTests(func, actuals, expecteds, uuid);
}
// #endregion
