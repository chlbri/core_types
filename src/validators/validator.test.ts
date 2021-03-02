import { Condition, Validator } from "./validator";

type Table = readonly (readonly [any, boolean])[];

type Mapper = {
  cond: Condition;
  table: Table;
};

const mapping: Mapper[] = [
  {
    cond: (val) => val === 3,
    table: [
      [3, true],
      [true, false],
      ["str", false],
    ],
  },
  {
    cond: (val) => val === "str",
    table: [
      [3, false],
      [true, false],
      ["str", true],
    ],
  },
  {
    cond: (val) => typeof val === "boolean",
    table: [
      [3, false],
      [true, true],
      [false, true],
      ["str", false],
    ],
  },
];

mapping.map(({ cond, table }) => {
  const validator = new Validator(cond);
  const spy = jest.spyOn(validator, "validate");
  return describe(`For condition : ${cond}`, () => {
    table.map(([actual, expected]) =>
      it(`${actual} must be ${expected}`, () => {
        expect(validator.validate(actual)).toBe(expected);
        expect(spy).toBeCalledWith(actual);
      })
    );
  });
});
