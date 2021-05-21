import { generate8Tests } from "../test/functions";
import { TupleOf } from "../types";
import {
  NumberExactValidator,
  NumberMaxValidator,
  NumberMinValidator,
  RequiredNumberValidator,
} from "./number";

type Length = 8;

const testTable: TupleOf<[number], Length> = [
  [4],
  [5],
  [6],
  [7],
  [8],
  [12],
  [13],
  [14],
];

describe("NumberMinValidator  =================================>", () => {
  function tester(
    val: number,
    expecteds: TupleOf<boolean, Length>
  ) {
    return describe(`Minimum Validation : ${val}  ====>`, () => {
      const validator = new NumberMinValidator(val);
      generate8Tests(
        validator.validate,
        testTable,
        expecteds
      );
    });
  }

  tester(5, [
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);
  tester(13, [
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
  ]);
  tester(7, [
    false,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
  ]);
});

describe("NumberExactValidator  =================================>", () => {
  function tester(
    val: number,
    expecteds: TupleOf<boolean, 8>
  ) {
    return describe(`Exact Validation : ${val}  ====>`, () => {
      const validator = new NumberExactValidator(val);
      generate8Tests(
        validator.validate,
        testTable,
        expecteds
      );
    });
  }

  tester(5, [
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  tester(13, [
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
  ]);
  tester(7, [
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
  ]);
});

describe("NumberMaxValidator  =================================>", () => {
  function tester(
    val: number,
    expecteds: TupleOf<boolean, 8>
  ) {
    return describe(`Maximum Validation : ${val}  ====>`, () => {
      const validator = new NumberMaxValidator(val);
      generate8Tests(
        validator.validate,
        testTable,
        expecteds
      );
    });
  }

  tester(5, [
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  tester(13, [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
  ]);
  tester(7, [
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
  ]);
});

describe("RequiredNumberValidator  =================================>", () => {
  const validator = new RequiredNumberValidator();

  generate8Tests(
    validator.validate,
    [
      [4],
      [5],
      ["str1"],
      ["str2"],
      [true],
      [undefined],
      [null],
      [54],
    ],
    [true, true, false, false, false, false, false, true]
  );
});
