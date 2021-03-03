import { LenghtOf } from "../types";
import {
  GetTestActualType,
  TestActual,
  TestElement,
  TestExpected,
  TestTable,
} from "./types";

//([0, 1, 2] as const)

export function generateTestTable<T1 extends TestActual>(
  actuals: T1,
  expecteds: TestExpected<LenghtOf<T1>>
) {
  const out: TestElement[] = actuals.map((_, index) => [
    actuals[index],
    expecteds[index],
  ]);
  return out as TestTable<GetTestActualType<T1>, LenghtOf<T1>>;
}

export function mapperTest<T extends any[]>(
  spy: (...args: T) => boolean
) {
  const _spy = jest.fn(spy);
  return ([actual, expected]: TestElement<T>) =>
    it(`Arguments : [ ${actual.join(
      ", "
    )} ] shoulds return ${expected}`, () => {
      expect(_spy(...actual)).toBe(expected);
      expect(_spy).toBeCalledWith(...actual);
    });
}
