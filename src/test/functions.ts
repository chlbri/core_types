import { v4 } from "uuid";
import { GetTupleType, LenghtOf, TupleOf } from "../types";
import { TestElement, TestTable } from "./types";

export function generateTestTable<
  T1 extends TupleOf,
  T2 extends TupleOf<any, LenghtOf<T1>>
>(actuals: T1, expecteds: T2) {
  type ActualType = GetTupleType<T1>;
  type ExpectedType = GetTupleType<T2>;
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

export function mapperTest<F extends (...args: any[]) => any>(
  spy: F,
  uuid = false
) {
  const _spy = jest.fn(spy);
  return ([actual, expected]: TestElement<
    Parameters<F>,
    ReturnType<F>
  >) => {
    const _actualText = testNullText(...actual)
      ? actual[0]
      : actual.join(", ");

    return it(`${
      uuid && `${v4()} ==>  `
    }Arguments : [ ${_actualText} ] shoulds return ${expected}`, () => {
      expect(_spy(...actual)).toBe(expected);
      expect(_spy).toBeCalledWith(...actual);
    });
  };
}
