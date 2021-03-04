import { Nullish } from "../types";
import {
  FormatedNumberValidator,
  StringExactLengthValidator,
  StringMaxLengthValidator,
  StringMinLengthValidator,
  StringRequiredValidator,
} from "./string";

type Table = readonly (readonly [any, boolean])[];

describe("min", () => {
  type Mapper = {
    min: number;
    table: Table;
  };

  const mapping: Mapper[] = [
    {
      min: 5,
      table: [
        ["22", false],
        ["333", false],
        ["4444", false],
        ["cinq5", true],
        ["six123", true],
        ["sept777", true],
        ["huit8888", true],
      ] as const,
    },
    {
      min: 3,
      table: [
        ["22", false],
        ["333", true],
        ["4444", true],
        ["cinq5", true],
        ["six123", true],
        ["sept777", true],
        ["huit8888", true],
      ] as const,
    },
    {
      min: 7,
      table: [
        ["22", false],
        ["333", false],
        ["4444", false],
        ["cinq5", false],
        ["six123", false],
        ["sept777", true],
        ["huit8888", true],
      ] as const,
    },
  ];

  mapping.map(({ min, table }) => {
    const validator = new StringMinLengthValidator(min);
    const spy = jest.spyOn(validator, "validate");
    table.map(([actual, expected]) =>
      it(`Min : ${min}  ==>     ${actual} must returns ${expected}`, () => {
        expect(validator.validate(actual)).toBe(expected);
        expect(spy).toBeCalledWith(actual);
      })
    );
  });
});

describe("exact", () => {
  type Mapper = {
    exact: number;
    table: Table;
  };

  const mapping: Mapper[] = [
    {
      exact: 5,
      table: [
        ["22", false],
        ["333", false],
        ["4444", false],
        ["cinq5", true],
        ["six123", false],
        ["sept777", false],
        ["huit8888", false],
      ] as const,
    },
    {
      exact: 3,
      table: [
        ["22", false],
        ["333", true],
        ["4444", false],
        ["cinq5", false],
        ["six123", false],
        ["sept777", false],
        ["huit8888", false],
      ] as const,
    },
    {
      exact: 7,
      table: [
        ["22", false],
        ["333", false],
        ["4444", false],
        ["cinq5", false],
        ["six123", false],
        ["sept777", true],
        ["huit8888", false],
      ] as const,
    },
  ];

  mapping.map(({ exact, table }) => {
    const validator = new StringExactLengthValidator(exact);
    const spy = jest.spyOn(validator, "validate");
    table.map(([actual, expected]) =>
      it(`Exact : ${exact}  ==>     ${actual} must returns ${expected}`, () => {
        expect(validator.validate(actual)).toBe(expected);
        expect(spy).toBeCalledWith(actual);
      })
    );
  });
});

describe("max", () => {
  type Mapper = {
    max: number;
    table: Table;
  };

  const mapping: Mapper[] = [
    {
      max: 5,
      table: [
        ["22", true],
        ["333", true],
        ["4444", true],
        ["cinq5", true],
        ["six123", false],
        ["sept777", false],
        ["huit8888", false],
      ] as const,
    },
    {
      max: 3,
      table: [
        ["22", true],
        ["333", true],
        ["4444", false],
        ["cinq5", false],
        ["six123", false],
        ["sept777", false],
        ["huit8888", false],
      ] as const,
    },
    {
      max: 7,
      table: [
        ["22", true],
        ["333", true],
        ["4444", true],
        ["cinq5", true],
        ["six123", true],
        ["sept777", true],
        ["huit8888", false],
      ] as const,
    },
  ];

  mapping.map(({ max, table }) => {
    const validator = new StringMaxLengthValidator(max);
    const spy = jest.spyOn(validator, "validate");
    table.map(([actual, expected]) =>
      it(`Max : ${max}  ==>     ${actual} must returns ${expected}`, () => {
        expect(validator.validate(actual)).toBe(expected);
        expect(spy).toBeCalledWith(actual);
      })
    );
  });
});

describe("required", () => {
  const mapping: Table = [
    [4, false],
    [5, false],
    ["str1", true],
    ["str2", true],
    ["str3", true],
    [18, false],
    [undefined, false],
    [null, false],
  ];

  const validator = new StringRequiredValidator();
  const spy = jest.spyOn(validator, "validate");

  mapping.map(([actual, expected]) => {
    return it(`Required  ==>     ${actual} must returns ${expected}`, () => {
      expect(validator.validate(actual)).toBe(expected);
      expect(spy).toBeCalledWith(actual);
    });
  });
});

describe("formated", () => {
  type Mapper = {
    num: Nullish<number>;
    table: Table;
  };

  const mapping: Mapper[] = [
    {
      num: 5,
      table: [
        ["22", false],
        ["333", false],
        ["4444", false],
        ["55555", true],
        ["cinq5", false],
        ["six123", false],
        ["sept777", false],
        ["huit8888", false],
      ] as const,
    },
    {
      num: 3,
      table: [
        ["22", false],
        ["333", true],
        ["tr3", false],
        ["4444", false],
        ["cinq5", false],
        ["six123", false],
        ["sept777", false],
        ["huit8888", false],
      ] as const,
    },
    {
      num: 7,
      table: [
        ["22", false],
        ["333", false],
        ["4444", false],
        ["cinq5", false],
        ["six123", false],
        ["7777777", true],
        ["sept777", false],
        ["huit8888", false],
      ] as const,
    },
    {
      num: undefined,
      table: [
        ["22", true],
        ["333", true],
        ["4444", true],
        ["cinq5", false],
        ["six123", false],
        ["7777777", true],
        ["sept777", false],
        ["huit8888", false],
      ] as const,
    },
    {
      num: null,
      table: [
        ["22", true],
        ["333", true],
        ["4444", true],
        ["cinq5", false],
        ["six123", false],
        ["sept777", false],
        ["huit8888", false],
        ["999999999", true],
      ] as const,
    },
  ];

  mapping.map(({ num, table }) => {
    const validator = new FormatedNumberValidator(num);
    const spy = jest.spyOn(validator, "validate");
    table.map(([actual, expected]) =>
      it(`Numeric : ${num}  ==>     ${actual} must returns ${expected}`, () => {
        expect(validator.validate(actual)).toBe(expected);
        expect(spy).toBeCalledWith(actual);
      })
    );
  });
});
