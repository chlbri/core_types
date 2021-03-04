import { generate3Tests, generate6Tests } from "../test";
import { TupleOf } from "../types";
import { Exception, EXCEPTIONS } from "./exception";
import { Condition, IValidator } from "./validator";

type Table = readonly (readonly [any, boolean])[];

type Mapper = {
  cond: Condition;
  table: Table;
};

type Length = 3;

type Length2 = 6;

const valuesTable: TupleOf<[any], Length2> = [
  [1],
  [2],
  [3],
  ["str"],
  [false],
  ["str_wrong"],
];

const functionsTable: TupleOf<Condition, Length> = [
  (val) => val === 3,
  (val) => val === "str",
  (val) => typeof val === "boolean",
];

const exceptionsTable: TupleOf<Exception, Length> = [
  EXCEPTIONS[303],
  EXCEPTIONS[503],
  EXCEPTIONS[403],
];

const validatorsTable = functionsTable.map((validate, i) => {
  const exception = exceptionsTable[i];
  return [{ validate, exception }];
}) as TupleOf<[IValidator], Length>;

function testerFunction(validator: IValidator) {
  return validator.validate;
}

function testerException(validator: IValidator) {
  return validator.exception;
}

describe("Test Functions  =================================>", () => {
  generate3Tests(testerFunction, validatorsTable, functionsTable);
});

describe("Test Exceptions  =================================>", () => {
  generate3Tests(testerException, validatorsTable, exceptionsTable);
});

describe("Validation of values  =================================>", () => {
  function tester(
    validator: [IValidator],
    expecteds: TupleOf<boolean, Length2>
  ) {
    return describe(`${JSON.stringify(validator)}  ====>`, () =>
      generate6Tests(validator[0].validate, valuesTable, expecteds));
  }

  tester(validatorsTable[0], [
    false,
    false,
    true,
    false,
    false,
    false,
  ]);

  tester(validatorsTable[1], [
    false,
    false,
    false,
    true,
    false,
    false,
  ]);

  tester(validatorsTable[2], [
    false,
    false,
    false,
    false,
    true,
    false,
  ]);
});
