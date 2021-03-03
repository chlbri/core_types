import { Expected, TupleOf } from "../types";

type TestActual<T = any, N extends number = number> = TupleOf<T, N>;

type GetTestActualType<T> = T extends TestActual<infer U> ? U : never;

type TestExpected<T extends number = number> = Expected<T>;

type TestElement<T = any> = [T, boolean];

type TestTable<T = any, N extends number = number> = TupleOf<
  TestElement<T>,
  N
>;

export {
  TestActual,
  GetTestActualType,
  TestExpected,
  TestElement,
  TestTable,
};
