import { generate5Tests } from "../test";
import { TupleOf } from "../types";
import { Domain, useCase } from "./domain";
import { IUseCase } from "./IUseCase";

// const spy = jest.fn(useCase);

type Length5 = 5;

// #region Data for tests
const funcTables: TupleOf<
  (...args: any[]) => any,
  Length5
> = [
  (val1: number, val2: number) => val1 > val2,
  (val1: number, val2: number) => val1 + val2,
  (val1: number) => val1 > 0,
  (val1: string) => val1.length,
  (val1: boolean) => "" + val1,
];

const namesTable: TupleOf<string, Length5> = [
  "useCase1",
  "useCase2",
  "useCase3",
  "useCase4",
  "useCase5",
];

const usesTable = funcTables.map((call, index) => {
  const __name = namesTable[index];
  return { call, __name };
}) as TupleOf<IUseCase, Length5>;

const useCase1 = { ...usesTable[0] } as const;
const useCase2 = { ...usesTable[1] } as const;
const useCase3 = { ...usesTable[2] } as const;
const useCase4 = { ...usesTable[3] } as const;
const useCase5 = { ...usesTable[4] } as const;

const domain1: Domain = {
  useCase1,
  useCase2,
} as const;

const domain2: Domain = {
  useCase3,
  useCase4,
  useCase5,
} as const;

const paramsTable = namesTable.map((name, index) => {
  const domain = index > 1 ? domain2 : domain1;
  return [domain, name] as const;
}) as TupleOf<never, Length5>;
// #endregion

generate5Tests(useCase, paramsTable, funcTables);
