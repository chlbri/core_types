import { identity } from "./identity";

const table = [1, 2, 3, 4, "true", false] as const;
const identitySpy = jest.fn(identity);

beforeEach(() => {
  identitySpy.mockClear();
});

table.map((actual) =>
  it(`${actual} shoulds remain the same`, () => {
    expect(identitySpy(actual)).toBe(actual);
    expect(identitySpy).toBeCalledTimes(1);
    expect(identitySpy).toBeCalledWith(actual);
  })
);

it("array shoulds remain the same", () => {
  // const temp = table.map((val) => identitySpy(val));
  expect(table.map((val) => identitySpy(val))).toStrictEqual(table);
  table.map((val) => expect(identitySpy).toBeCalledWith(val));
  expect(identitySpy).toBeCalledTimes(6);
});
