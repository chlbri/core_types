import { generateTestTable, mapperTest, TestActual } from "../test";
import { LenghtOf, Nullish, TupleOf } from "../types";
import { isNullish } from "./nullish";

const actuals: TupleOf<TestActual<Nullish<any>>, 4> = [
  [undefined],
  ["e"],
  [null],
  [7],
];

const expecteds: TupleOf<boolean, LenghtOf<typeof actuals>> = [
  true,
  false,
  true,
  false,
];

const mapping = generateTestTable(actuals, expecteds);

mapping.map(mapperTest(isNullish));
