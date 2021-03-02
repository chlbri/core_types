import { RequiredValidator } from "./required";

const validator = new RequiredValidator();
const spy = jest.spyOn(validator, "validate");

type Table = readonly (readonly [any, boolean])[];

const mapping: Table = [
  [4, true],
  ["string", true],
  [undefined, false],
  [null, false],
];

mapping.map(([actual, expected]) =>
  it(`Required  ==>     ${actual} must be ${expected}`, () => {
    expect(validator.validate(actual)).toBe(expected);
    expect(spy).toBeCalledWith(actual);
  })
);
