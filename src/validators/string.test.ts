import { generate8Tests } from "../test";
import { Nullish, TupleOf } from "../types";
import {
  FormatedNumberValidator,
  StringExactLengthValidator,
  StringMaxLengthValidator,
  StringMinLengthValidator,
  StringRequiredValidator,
} from "./string";

type Length = 8;

const testTable: TupleOf<[string], Length> = [
  ["4444"],
  ["cinq5"],
  ["six==6"],
  ["7777777"],
  ["huit==>8"],
  ["121212121212"],
  ["treize====>13"],
  ["12345678910114"],
];

describe("StringMinLengthValidator  =================================>", () => {
  function tester(val: number, expecteds: TupleOf<boolean, Length>) {
    return describe(`Minimum Validation : ${val}  ====>`, () => {
      const validator = new StringMinLengthValidator(val);
      generate8Tests(validator.validate, testTable, expecteds);
    });
  }

  tester(5, [false, true, true, true, true, true, true, true]);
  tester(13, [false, false, false, false, false, false, true, true]);
  tester(7, [false, false, false, true, true, true, true, true]);
});

describe("StringExactLengthValidator  =================================>", () => {
  function tester(val: number, expecteds: TupleOf<boolean, Length>) {
    return describe(`Minimum Validation : ${val}  ====>`, () => {
      const validator = new StringExactLengthValidator(val);
      generate8Tests(validator.validate, testTable, expecteds);
    });
  }

  tester(5, [false, true, false, false, false, false, false, false]);
  tester(13, [false, false, false, false, false, false, true, false]);
  tester(7, [false, false, false, true, false, false, false, false]);
});

describe("StringMaxLengthValidator  =================================>", () => {
  function tester(val: number, expecteds: TupleOf<boolean, Length>) {
    return describe(`Minimum Validation : ${val}  ====>`, () => {
      const validator = new StringMaxLengthValidator(val);
      generate8Tests(validator.validate, testTable, expecteds);
    });
  }

  tester(5, [true, true, false, false, false, false, false, false]);
  tester(13, [true, true, true, true, true, true, true, false]);
  tester(7, [true, true, true, true, false, false, false, false]);
});

describe("StringRequiredValidator  =================================>", () => {
  const validator = new StringRequiredValidator();

  generate8Tests(
    validator.validate,
    [[4], [5], ["str1"], ["str2"], [true], [undefined], [null], [54]],
    [false, false, true, true, false, false, false, false]
  );
});

describe("FormatedNumberValidator  =================================>", () => {
  function tester(
    expecteds: TupleOf<boolean, Length>,
    val?: Nullish<number>
  ) {
    describe(`Minimum Validation : ${val}  ====>`, () => {
      const validator = new FormatedNumberValidator(val);
      generate8Tests(validator.validate, testTable, expecteds);
    });
  }

  tester(
    [true, false, false, true, false, true, false, true],
    undefined
  );
  tester([true, false, false, true, false, true, false, true], null);

  tester([true, false, false, false, false, false, false, false], 4);
  tester([false, false, false, true, false, false, false, false], 7);
  tester([false, false, false, false, false, true, false, false], 12);
  tester(
    [false, false, false, false, false, false, false, false],
    13
  );
  tester([false, false, false, false, false, false, false, true], 14);
});
