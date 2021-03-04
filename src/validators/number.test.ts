import {
  NumberExactValidator,
  NumberMaxValidator,
  NumberMinValidator,
  RequiredNumberValidator,
} from "./number";

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
        [5, true],
        [2, false],
        [7, true],
        [1, false],
        [4, false],
        [9, true],
      ] as const,
    },
    {
      min: 3,
      table: [
        [5, true],
        [2, false],
        [7, true],
        [1, false],
        [4, true],
        [9, true],
      ] as const,
    },
    {
      min: 7,
      table: [
        [5, false],
        [2, false],
        [7, true],
        [1, false],
        [4, false],
        [9, true],
      ] as const,
    },
  ];

  mapping.map(({ min, table }) => {
    const validator = new NumberMinValidator(min);
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
        [3, false],
        [5, true],
        [7, false],
      ] as const,
    },
    {
      exact: 3,
      table: [
        [3, true],
        [5, false],
        [7, false],
      ] as const,
    },
    {
      exact: 7,
      table: [
        [3, false],
        [5, false],
        [7, true],
      ] as const,
    },
  ];

  mapping.map(({ exact, table }) => {
    const validator = new NumberExactValidator(exact);
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
        [4, true],
        [5, true],
        [6, false],
        [7, false],
        [8, false],
        [12, false],
        [13, false],
        [14, false],
      ] as const,
    },
    {
      max: 13,
      table: [
        [4, true],
        [5, true],
        [6, true],
        [7, true],
        [8, true],
        [12, true],
        [13, true],
        [14, false],
      ] as const,
    },
    {
      max: 7,
      table: [
        [4, true],
        [5, true],
        [6, true],
        [7, true],
        [8, false],
        [12, false],
        [13, false],
        [14, false],
      ] as const,
    },
  ];

  mapping.map(({ max, table }) => {
    const validator = new NumberMaxValidator(max);
    const spy = jest.spyOn(validator, "validate");
    table.map(([actual, expected]) =>
      it(`Exact : ${max}  ==>     ${actual} must returns ${expected}`, () => {
        expect(validator.validate(actual)).toBe(expected);
        expect(spy).toBeCalledWith(actual);
      })
    );
  });
});

describe("required", () => {
  const mapping: Table = [
    [4, true],
    [5, true],
    ["str1", false],
    ["str2", false],
    [18, true],
    [undefined, false],
    [null, false],
    [54, true],
  ];

  const validator = new RequiredNumberValidator();
  const spy = jest.spyOn(validator, "validate");

  mapping.map(([actual, expected]) => {
    return it(`Required  ==>     ${actual} must returns ${expected}`, () => {
      expect(validator.validate(actual)).toBe(expected);
      expect(spy).toBeCalledWith(actual);
    });
  });
});
