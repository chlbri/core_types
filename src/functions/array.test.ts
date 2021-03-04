import { generateTestTable, mapperTest } from "../test";
import { LenghtOf, TupleOf } from "../types";
import { isArray } from "./array";

const actuals: TupleOf<any, 5> = [
  [1],
  [2],
  [[3, 4]],
  ["true"],
  [false],
];

const expecteds: TupleOf<boolean, LenghtOf<typeof actuals>> = [
  false,
  false,
  true,
  false,
  false,
];

generateTestTable(actuals, expecteds).map(mapperTest(isArray));
